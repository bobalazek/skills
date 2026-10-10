import { createHash } from "node:crypto";
import { open, realpath, stat } from "node:fs/promises";
import { resolve } from "node:path";

const usage = `Usage: bun run run-check.ts --cwd <directory> --out <new.json> [--timeout-ms <positive integer>] -- <command> [args...]

Run one explicitly authorized check as argv, with live stdout/stderr and no shell.
Requires Bun 1.3.9 or newer.
--cwd defaults to the current directory. --out is resolved from the caller's directory;
its parent must exist and the file must be new. Prefer a path outside the worktree.
Records command, timing, exit/launch failure, and before/after Git observations.
--timeout-ms bounds the check; omitted means no check timeout. SIGINT/SIGTERM cancel it.
Cancellation kills only the direct child, without graceful cleanup or descendant guarantees.
An unfinished record is not proof of an outcome. Hard-killing the runner can prevent final capture.
Exit zero records command success only; it does not verify acceptance criteria.
No environment dump, output capture, or upload. Command arguments are recorded.
`;

function options(args: string[]) {
  const separator = args.indexOf("--");
  if (separator < 0 || separator === args.length - 1) throw new Error("Supply check argv after --.");
  let cwd = process.cwd();
  let output: string | undefined;
  let timeoutMs: number | undefined;
  const seen = new Set<string>();
  for (let index = 0; index < separator; index += 2) {
    const flag = args[index];
    const value = args[index + 1];
    if (!["--cwd", "--out", "--timeout-ms"].includes(flag) || seen.has(flag) || !value || index + 1 >= separator) {
      throw new Error(`Invalid option: ${flag}`);
    }
    seen.add(flag);
    if (flag === "--cwd") cwd = value;
    else if (flag === "--out") output = value;
    else {
      timeoutMs = Number(value);
      if (!/^[1-9]\d*$/.test(value) || !Number.isSafeInteger(timeoutMs) || timeoutMs > 2_147_483_647)
        throw new Error("--timeout-ms must be an integer from 1 to 2147483647.");
    }
  }
  if (!output) throw new Error("Supply --out <new.json>.");
  return { cwd: resolve(cwd), output: resolve(output), argv: args.slice(separator + 1), timeoutMs };
}

async function git(cwd: string, args: string[], signal: AbortSignal) {
  try {
    const child = Bun.spawn(["git", "--no-optional-locks", "-c", "core.fsmonitor=false", "-C", cwd, ...args], {
      stdin: "ignore",
      stdout: "pipe",
      stderr: "pipe",
      timeout: 5000,
      killSignal: "SIGKILL",
      signal,
    });
    const [stdout, stderr, exitCode] = await Promise.all([
      new Response(child.stdout).text(),
      new Response(child.stderr).text(),
      child.exited,
    ]);
    return { stdout, error: exitCode === 0 ? null : stderr.trim() || `git exited ${exitCode}` };
  } catch (error) {
    return { stdout: "", error: String(error) };
  }
}

async function gitState(cwd: string, signal: AbortSignal) {
  const root = await git(cwd, ["rev-parse", "--show-toplevel"], signal);
  if (root.error) return { kind: "unavailable", reason: root.error };
  const head = await git(cwd, ["rev-parse", "--verify", "HEAD"], signal);
  const status = await git(cwd, ["status", "--porcelain=v1", "--untracked-files=all"], signal);
  const worktree = await git(cwd, ["diff", "--no-ext-diff", "--no-textconv", "--binary"], signal);
  const staged = await git(cwd, ["diff", "--cached", "--no-ext-diff", "--no-textconv", "--binary"], signal);
  const digest = (result: Awaited<ReturnType<typeof git>>) =>
    result.error ? null : createHash("sha256").update(result.stdout).digest("hex");
  return {
    kind: "git",
    root: root.stdout.trim(),
    head: head.error ? null : head.stdout.trim(),
    dirty: status.error ? null : status.stdout.length > 0,
    status: status.error ? null : status.stdout,
    worktreeDiffSha256: digest(worktree),
    stagedDiffSha256: digest(staged),
    observationErrors: [head.error, status.error, worktree.error, staged.error].filter(Boolean),
  };
}

async function main() {
  const args = Bun.argv.slice(2);
  if (args.length === 1 && args[0] === "--help") {
    console.log(usage);
    return 0;
  }
  const selected = options(args);
  const cwd = await realpath(selected.cwd);
  if (!(await stat(cwd)).isDirectory()) throw new Error("--cwd must be a directory.");
  // Reserve exclusively before running: existing evidence, sources, directories, and symlinks are refused.
  const output = await open(selected.output, "wx", 0o600);
  const cancellation = new AbortController();
  let interruptionSignal: "SIGINT" | "SIGTERM" | null = null;
  const interrupt = (signal: "SIGINT" | "SIGTERM") => {
    interruptionSignal ??= signal;
    cancellation.abort();
  };
  const onInt = () => interrupt("SIGINT");
  const onTerm = () => interrupt("SIGTERM");
  process.on("SIGINT", onInt);
  process.on("SIGTERM", onTerm);
  let exitCode = 1;
  try {
    const pending = {
      recordState: "incomplete",
      command: { argv: selected.argv, cwd },
      timeoutMs: selected.timeoutMs ?? null,
      result: null,
    };
    await output.writeFile(JSON.stringify(pending, null, 2) + "\n");
    const before = await gitState(cwd, cancellation.signal);
    const startedAt = new Date().toISOString();
    const started = performance.now();
    const timeout = selected.timeoutMs === undefined ? undefined : AbortSignal.timeout(selected.timeoutMs);
    const signal = timeout ? AbortSignal.any([cancellation.signal, timeout]) : cancellation.signal;
    let childPid: number | null = null;
    let result: { exitCode: number | null; signal: string | null; launchError: string | null };
    try {
      if (cancellation.signal.aborted) result = { exitCode: null, signal: null, launchError: null };
      else {
        const child = Bun.spawn(selected.argv, {
          cwd,
          stdin: "inherit",
          stdout: "inherit",
          stderr: "inherit",
          signal,
          killSignal: "SIGKILL",
        });
        childPid = child.pid;
        const code = await child.exited;
        result = { exitCode: code, signal: child.signalCode, launchError: null };
        exitCode = code === 0 ? 0 : code > 0 && code <= 255 ? code : 1;
      }
    } catch (error) {
      result = { exitCode: null, signal: null, launchError: String(error) };
      exitCode = 127;
      console.error(`Check could not start: ${result.launchError}`);
    }
    const endedAt = new Date().toISOString();
    const durationMs = performance.now() - started;
    const timedOut = timeout?.aborted ?? false;
    const after = await gitState(cwd, cancellation.signal);
    await output.truncate(0);
    await output.write(
      JSON.stringify(
        {
          recordState: "finished",
          childPid,
          command: { argv: selected.argv, cwd },
          startedAt,
          endedAt,
          durationMs,
          result,
          termination: { timeoutMs: selected.timeoutMs ?? null, timedOut, interruptionSignal },
          gitBefore: before,
          gitAfter: after,
          limits:
            "Execution record only, not acceptance or reviewed-commit proof. Git observations are separate snapshots, each Git subprocess limited to 5 seconds; dirty/untracked contents, ignored files, submodules, and intermediate changes are not fully attested. An output file inside the worktree participates in its dirty state. No command output or environment values are captured. Timeout/cancellation kills the direct child with SIGKILL, without graceful cleanup or descendant guarantees. Hard-killing the runner can leave an incomplete/truncated record and a live child.",
        },
        null,
        2,
      ) + "\n",
      0,
      "utf8",
    );
    if (interruptionSignal) exitCode = interruptionSignal === "SIGINT" ? 130 : 143;
    else if (timedOut) exitCode = 124;
    console.error(`Check record: ${selected.output}`);
  } finally {
    cancellation.abort();
    process.off("SIGINT", onInt);
    process.off("SIGTERM", onTerm);
    await output.close();
  }
  return exitCode;
}

try {
  process.exitCode = await main();
} catch (error) {
  console.error(`run-check: ${String(error)}`);
  process.exitCode = 1;
}
