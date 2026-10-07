import { afterEach, beforeEach, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const runner = resolve(import.meta.dir, "../skills/engineering/verify-change/scripts/run-check.ts");
let root: string;
let cwd: string;
let output: string;
const ownedPids = new Set<number>();

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), "skills-run-check-"));
  cwd = join(root, "project with spaces");
  mkdirSync(cwd);
  output = join(root, "check result.json");
});

afterEach(() => {
  for (const pid of ownedPids) try { process.kill(pid, "SIGKILL"); } catch {}
  ownedPids.clear();
  rmSync(root, { recursive: true, force: true });
});

async function command(argv: string[], directory = cwd) {
  const child = Bun.spawn(argv, { cwd: directory, stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(child.stdout).text(), new Response(child.stderr).text(), child.exited,
  ]);
  return { stdout, stderr, exitCode };
}

const run = (argv: string[], destination = output, timeoutMs?: string) => command([process.execPath, "run", runner, "--cwd", cwd, "--out", destination, ...(timeoutMs === undefined ? [] : ["--timeout-ms", timeoutMs]), "--", ...argv]);
const record = () => JSON.parse(readFileSync(output, "utf8"));
const script = (body: string) => {
  const path = join(cwd, "check.ts");
  writeFileSync(path, body);
  return path;
};
async function repository() {
  const invoke = (args: string[]) => command(["git", "-c", "core.hooksPath=/dev/null", "-c", "commit.gpgsign=false", ...args]);
  expect((await invoke(["init", "-q"])).exitCode).toBe(0);
  expect((await invoke(["config", "user.name", "Fixture"])).exitCode).toBe(0);
  expect((await invoke(["config", "user.email", "fixture@example.invalid"])).exitCode).toBe(0);
  writeFileSync(join(cwd, "source.txt"), "baseline\n");
  expect((await invoke(["add", "source.txt"])).exitCode).toBe(0);
  expect((await invoke(["commit", "-qm", "baseline"])).exitCode).toBe(0);
  return invoke;
}

test("records a successful non-Git check and exposes live output", async () => {
  const result = await run([process.execPath, "-e", 'console.log("check stdout"); console.error("check stderr")']);
  expect(result.exitCode).toBe(0);
  expect(result.stdout).toContain("check stdout");
  expect(result.stderr).toContain("check stderr");
  const evidence = record();
  expect(evidence.command.cwd).toBe(realpathSync(cwd));
  expect(evidence.result).toEqual({ exitCode: 0, signal: null, launchError: null });
  expect(evidence.gitBefore.kind).toBe("unavailable");
  expect(evidence.gitAfter.kind).toBe("unavailable");
  expect(Date.parse(evidence.endedAt)).toBeGreaterThanOrEqual(Date.parse(evidence.startedAt));
  expect(evidence.durationMs).toBeGreaterThanOrEqual(0);
  expect(evidence.recordState).toBe("finished");
  expect(evidence.termination).toEqual({ timeoutMs: null, timedOut: false, interruptionSignal: null });
});

test("preserves and propagates a failing check", async () => {
  const result = await run([process.execPath, "-e", 'console.error("actual failure"); process.exit(23)']);
  expect(result.exitCode).toBe(23);
  expect(result.stderr).toContain("actual failure");
  expect(record().result).toEqual({ exitCode: 23, signal: null, launchError: null });
});

test("records launch failure without inventing a child exit", async () => {
  const result = await run([join(root, "missing-executable")]);
  expect(result.exitCode).toBe(127);
  expect(record().result.exitCode).toBeNull();
  expect(record().result.launchError).toBeTruthy();
});

test("refuses existing evidence before executing the check", async () => {
  writeFileSync(output, "existing evidence\n");
  const marker = join(root, "check-started");
  const result = await run([process.execPath, "-e", `await Bun.write(${JSON.stringify(marker)}, "ran")`]);
  expect(result.exitCode).not.toBe(0);
  expect(readFileSync(output, "utf8")).toBe("existing evidence\n");
  expect(existsSync(marker)).toBe(false);
});

test("refuses an invalid output parent before executing the check", async () => {
  const marker = join(root, "check-started");
  const result = await run([process.execPath, "-e", `await Bun.write(${JSON.stringify(marker)}, "ran")`], join(root, "absent", "check.json"));
  expect(result.exitCode).not.toBe(0);
  expect(existsSync(marker)).toBe(false);
});

test("concurrent writers reserve evidence before starting either check", async () => {
  const marker = join(root, "executions.txt");
  const check = script(`import { appendFileSync } from "node:fs"; appendFileSync(${JSON.stringify(marker)}, "ran\\n"); await Bun.sleep(100);`);
  const results = await Promise.all([run([process.execPath, check]), run([process.execPath, check])]);
  expect(results.map(result => result.exitCode).sort()).toEqual([0, 1]);
  expect(readFileSync(marker, "utf8")).toBe("ran\n");
  expect(record().recordState).toBe("finished");
  expect(record().result.exitCode).toBe(0);
});

test("refuses symlink and directory destinations without changing their contents", async () => {
  const original = join(root, "original.json");
  writeFileSync(original, "retained evidence\n");
  symlinkSync(original, output);
  const marker = join(root, "executed");
  const argv = [process.execPath, "-e", `await Bun.write(${JSON.stringify(marker)}, "ran")`];
  const sentinel = join(cwd, "keep.txt");
  writeFileSync(sentinel, "retained directory contents\n");
  expect((await run(argv)).exitCode).toBe(1);
  expect(readFileSync(original, "utf8")).toBe("retained evidence\n");
  expect((await run(argv, cwd)).exitCode).toBe(1);
  expect(readFileSync(sentinel, "utf8")).toBe("retained directory contents\n");
  expect(existsSync(marker)).toBe(false);
});

test("records a child signal without misreporting a parent cancellation", async () => {
  const result = await run([process.execPath, "-e", 'process.kill(process.pid, "SIGTERM")']);
  expect(result.exitCode).not.toBe(0);
  expect(record().result.signal).toBe("SIGTERM");
  expect(record().result.launchError).toBeNull();
  expect(record().termination).toEqual({ timeoutMs: null, timedOut: false, interruptionSignal: null });
});

test("passes spaces and shell syntax as literal argv", async () => {
  const injected = join(root, "injected");
  const values = ["two words", `$(touch ${injected})`, `; touch ${injected}`, `\`touch ${injected}\``, '"literal quotes"'];
  const captured = join(root, "argv.json");
  const check = script(`await Bun.write(${JSON.stringify(captured)}, JSON.stringify(Bun.argv.slice(2)));`);
  const argv = [process.execPath, check, ...values];
  expect((await run(argv)).exitCode).toBe(0);
  expect(JSON.parse(readFileSync(captured, "utf8"))).toEqual(values);
  expect(record().command.argv).toEqual(argv);
  expect(existsSync(injected)).toBe(false);
});

test("observes a clean Git revision without asserting reviewed-commit proof", async () => {
  await repository();
  expect((await run([process.execPath, "-e", "process.exit(0)"])).exitCode).toBe(0);
  const evidence = record();
  expect(evidence.gitBefore.kind).toBe("git");
  expect(evidence.gitBefore.dirty).toBe(false);
  expect(evidence.gitAfter.dirty).toBe(false);
  expect(evidence.gitAfter.head).toBe(evidence.gitBefore.head);
  expect(evidence.gitBefore.head).toMatch(/^[a-f0-9]{40}$/);
  expect(evidence.acceptance).toBeUndefined();
});

test("records changed dirty contents even when status stays modified", async () => {
  await repository();
  const source = join(cwd, "source.txt");
  writeFileSync(source, "first dirty state\n");
  expect((await run([process.execPath, "-e", `await Bun.write(${JSON.stringify(source)}, "second dirty state\\n")`])).exitCode).toBe(0);
  const evidence = record();
  expect(evidence.gitBefore.dirty).toBe(true);
  expect(evidence.gitAfter.dirty).toBe(true);
  expect(evidence.gitAfter.status).toBe(evidence.gitBefore.status);
  expect(evidence.gitAfter.worktreeDiffSha256).not.toBe(evidence.gitBefore.worktreeDiffSha256);
});

test("records HEAD drift caused by the supplied command", async () => {
  await repository();
  const result = await run(["git", "-c", "core.hooksPath=/dev/null", "-c", "commit.gpgsign=false", "commit", "--allow-empty", "-qm", "next revision"]);
  expect(result.exitCode).toBe(0);
  const evidence = record();
  expect(evidence.gitAfter.head).not.toBe(evidence.gitBefore.head);
  expect(evidence.gitBefore.dirty).toBe(false);
  expect(evidence.gitAfter.dirty).toBe(false);
});

async function waitFor(predicate: () => boolean) {
  const deadline = Date.now() + 3000;
  while (!predicate() && Date.now() < deadline) await Bun.sleep(10);
  if (!predicate()) throw new Error("Fixture did not reach its expected state.");
}
const alive = (pid: number) => {
  try { process.kill(pid, 0); return true; } catch { return false; }
};
function hangingCheck() {
  const marker = join(root, "child.pid");
  const fixture = script(`process.on("SIGTERM", () => {}); await Bun.write(${JSON.stringify(marker)}, String(process.pid)); setInterval(() => {}, 1000);`);
  return { marker, fixture };
}
function startHanging(fixture: string, timeoutMs?: string) {
  return Bun.spawn([process.execPath, runner, "--cwd", cwd, "--out", output, ...(timeoutMs === undefined ? [] : ["--timeout-ms", timeoutMs]), "--", process.execPath, fixture], {
    stdout: "ignore", stderr: "ignore", timeout: 4000, killSignal: "SIGKILL",
  });
}

test("bounds an unresponsive direct child and records timeout separately from its actual exit", async () => {
  const { marker, fixture } = hangingCheck();
  const child = startHanging(fixture, "500");
  try {
    await waitFor(() => existsSync(marker));
    const pid = Number(readFileSync(marker, "utf8"));
    ownedPids.add(pid);
    expect(await child.exited).toBe(124);
    const evidence = record();
    expect(evidence.termination).toEqual({ timeoutMs: 500, timedOut: true, interruptionSignal: null });
    expect(evidence.result.signal).toBe("SIGKILL");
    expect(evidence.result.exitCode).not.toBe(0);
    expect(evidence.result.launchError).toBeNull();
    expect(evidence.recordState).toBe("finished");
    expect(alive(pid)).toBe(false);
    ownedPids.delete(pid);
  } finally { if (child.exitCode === null) child.kill("SIGKILL"); }
});

test("parent SIGTERM/SIGINT writes interrupted evidence and stops a child that ignores SIGTERM", async () => {
  for (const signal of ["SIGTERM", "SIGINT"] as const) {
    output = join(root, `${signal}.json`);
    const { marker, fixture } = hangingCheck();
    if (existsSync(marker)) rmSync(marker);
    const child = startHanging(fixture);
    try {
      await waitFor(() => existsSync(marker));
      const pid = Number(readFileSync(marker, "utf8"));
      ownedPids.add(pid);
      expect(record().recordState).toBe("incomplete");
      child.kill(signal);
      expect(await child.exited).toBe(signal === "SIGTERM" ? 143 : 130);
      const evidence = record();
      expect(evidence.termination).toEqual({ timeoutMs: null, timedOut: false, interruptionSignal: signal });
      expect(evidence.result.signal).toBe("SIGKILL");
      expect(evidence.result.exitCode).not.toBe(0);
      expect(evidence.gitAfter.kind).toBe("unavailable");
      expect(alive(pid)).toBe(false);
      ownedPids.delete(pid);
    } finally { if (child.exitCode === null) child.kill("SIGKILL"); }
  }
});

test("a fast bounded check finishes without waiting for or reporting its unused timeout", async () => {
  const started = performance.now();
  expect((await run([process.execPath, "-e", "process.exit(0)"], output, "10000")).exitCode).toBe(0);
  expect(performance.now() - started).toBeLessThan(4000);
  expect(record().termination).toEqual({ timeoutMs: 10000, timedOut: false, interruptionSignal: null });
});

test("rejects invalid timeout values before creating evidence or executing a check", async () => {
  const marker = join(root, "executed");
  const argv = [process.execPath, "-e", `await Bun.write(${JSON.stringify(marker)}, "ran")`];
  for (const timeout of ["0", "-1", "1.5", "NaN", "1e3", "2147483648"]) {
    expect((await run(argv, output, timeout)).exitCode).toBe(1);
    expect(existsSync(output)).toBe(false);
    expect(existsSync(marker)).toBe(false);
  }
});

test("hard-killing the runner leaves incomplete evidence without claiming a stopped child", async () => {
  const { marker, fixture } = hangingCheck();
  const child = startHanging(fixture);
  try {
    await waitFor(() => existsSync(marker));
    const pid = Number(readFileSync(marker, "utf8"));
    ownedPids.add(pid);
    child.kill("SIGKILL");
    await child.exited;
    expect(record().recordState).toBe("incomplete");
    expect(record().result).toBeNull();
    expect(alive(pid)).toBe(true);
  } finally { if (child.exitCode === null) child.kill("SIGKILL"); }
});
