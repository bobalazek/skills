import { closeSync, mkdirSync, openSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { inside, verifyCodex, verifyCopies, verifyOpenCode } from "./lib/skill-packages.ts";

function fail(message: string): never {
  throw new Error(message);
}

async function main() {
  const args = Bun.argv.slice(2);
  if (args.length !== 3)
    fail("Usage: bun run check:install <source-path-or-url> <clean-expected-checkout> <new-output-directory>");
  const [input, expectedInput, outputInput] = args;
  const source = /^https?:\/\//.test(input) ? input : realpathSync(input);
  const expected = realpathSync(expectedInput);
  const output = resolve(outputInput);
  if (inside(expected, output)) fail("Keep installation evidence outside the expected checkout.");
  // Never overwrite prior evidence or install into the contributor's project.
  mkdirSync(output, { mode: 0o700 });
  const project = join(realpathSync(output), "project");
  mkdirSync(project);
  const env = {
    ...process.env,
    DO_NOT_TRACK: "1",
    GIT_TERMINAL_PROMPT: "0",
    GIT_CONFIG_COUNT: "2",
    GIT_CONFIG_KEY_0: "credential.helper",
    GIT_CONFIG_VALUE_0: "",
    GIT_CONFIG_KEY_1: "credential.interactive",
    GIT_CONFIG_VALUE_1: "false",
  };
  const commands: object[] = [];
  const report: Record<string, unknown> = {
    state: "incomplete",
    source,
    expected,
    project,
    commands,
    behavior: "not exercised",
  };
  const save = () =>
    writeFileSync(join(output, "summary.json"), JSON.stringify(report, null, 2) + "\n", { mode: 0o600 });
  const run = async (name: string, argv: string[], cwd = project) => {
    const started = performance.now();
    // Direct files avoid clients truncating buffered pipe output on process exit.
    const stdout = openSync(join(output, `${name}.stdout`), "wx", 0o600);
    const stderr = openSync(join(output, `${name}.stderr`), "wx", 0o600);
    try {
      const child = Bun.spawn(argv, {
        cwd,
        env,
        stdin: "ignore",
        stdout,
        stderr,
        timeout: 120_000,
        killSignal: "SIGKILL",
      });
      const exitCode = await child.exited;
      commands.push({ name, argv, exitCode, signal: child.signalCode, durationMs: performance.now() - started });
      save();
      if (exitCode !== 0) fail(`${name} failed (${exitCode}); inspect retained output.`);
      return readFileSync(join(output, `${name}.stdout`), "utf8").trim();
    } finally {
      closeSync(stdout);
      closeSync(stderr);
    }
  };
  save();
  try {
    report.revision = await run("revision", ["git", "rev-parse", "HEAD"], expected);
    if (await run("status", ["git", "status", "--porcelain", "--untracked-files=all"], expected))
      fail("Expected checkout must be clean.");
    if (
      await run("ignored", ["git", "ls-files", "--others", "--ignored", "--exclude-standard", "--", "skills"], expected)
    )
      fail("Expected skill packages contain ignored files absent from the revision.");
    report.versions = {
      installer: "1.7.0",
      codex: await run("codex-version", ["codex", "--version"]),
      opencode: await run("opencode-version", ["opencode", "--version"]),
    };
    // A repository boundary prevents ancestor project skills shadowing the copies.
    await run("project", ["git", "-c", "init.templateDir=", "init", "--quiet"]);
    await run("installer", [
      "bunx",
      "skills@1.7.0",
      "add",
      source,
      "--skill",
      "*",
      "--agent",
      "codex",
      "opencode",
      "--copy",
      "--yes",
      "--json",
    ]);
    const installed = join(project, ".agents", "skills");
    const copied = verifyCopies(expected, installed);
    verifyCodex(
      await run("codex", [
        "codex",
        "-C",
        project,
        "debug",
        "prompt-input",
        "List installed skills without performing work.",
      ]),
      installed,
      copied.names,
    );
    verifyOpenCode(await run("opencode", ["opencode", "debug", "skill"]), project, installed, copied.names);
    if (
      (await run("final-revision", ["git", "rev-parse", "HEAD"], expected)) !== report.revision ||
      (await run("final-status", ["git", "status", "--porcelain", "--untracked-files=all"], expected)) ||
      (await run(
        "final-ignored",
        ["git", "ls-files", "--others", "--ignored", "--exclude-standard", "--", "skills"],
        expected,
      ))
    )
      fail("Expected checkout changed during verification.");
    report.state = "passed";
    report.packages = copied.names.length;
    report.files = copied.files;
    report.manifestSha256 = copied.sha256;
    console.log(
      `PASS: ${copied.names.length} copied packages, ${copied.files} identical files; Codex and OpenCode discovery. Behavior not exercised.`,
    );
  } catch (error) {
    report.state = "failed";
    report.error = String(error);
    throw error;
  } finally {
    save();
  }
}

if (import.meta.main) {
  try {
    await main();
  } catch (error) {
    console.error(String(error));
    process.exitCode = 1;
  }
}
