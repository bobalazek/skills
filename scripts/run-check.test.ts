import { afterEach, beforeEach, expect, test } from "bun:test";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const runner = resolve(import.meta.dir, "../skills/development/verify-change/scripts/run-check.ts");
let root: string;
let cwd: string;
let output: string;

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), "skills-run-check-"));
  cwd = join(root, "project with spaces");
  mkdirSync(cwd);
  output = join(root, "check result.json");
});

afterEach(() => rmSync(root, { recursive: true, force: true }));

async function command(argv: string[], directory = cwd) {
  const child = Bun.spawn(argv, { cwd: directory, stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr, exitCode] = await Promise.all([
    new Response(child.stdout).text(), new Response(child.stderr).text(), child.exited,
  ]);
  return { stdout, stderr, exitCode };
}

const run = (argv: string[], destination = output) => command([process.execPath, "run", runner, "--cwd", cwd, "--out", destination, "--", ...argv]);
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
