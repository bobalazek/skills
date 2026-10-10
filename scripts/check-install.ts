import { createHash } from "node:crypto";
import { closeSync, lstatSync, mkdirSync, openSync, readFileSync, readdirSync, realpathSync, writeFileSync } from "node:fs";
import { isAbsolute, join, relative, resolve } from "node:path";

const fail = (message: string): never => { throw new Error(message); };
const inside = (root: string, path: string) => {
  const rel = relative(root, path);
  return rel !== ".." && !rel.startsWith(`..${process.platform === "win32" ? "\\" : "/"}`) && !isAbsolute(rel);
};

export function manifest(root: string): Record<string, string> {
  if (!lstatSync(root).isDirectory() || lstatSync(root).isSymbolicLink()) fail(`Expected a real directory: ${root}`);
  const result: Record<string, string> = {};
  const walk = (directory: string) => {
    for (const name of readdirSync(directory).sort()) {
      const path = join(directory, name);
      const info = lstatSync(path);
      if (info.isSymbolicLink()) fail(`Copied package contains a symlink: ${path}`);
      if (info.isDirectory()) walk(path);
      else if (info.isFile()) result[relative(root, path)] = createHash("sha256").update(readFileSync(path)).digest("hex");
      else fail(`Unexpected file type: ${path}`);
    }
  };
  walk(root);
  return result;
}

export function verifyCopies(expected: string, installed: string) {
  const wanted: Record<string, string> = {};
  const names: string[] = [];
  for (const domain of readdirSync(join(expected, "skills")).sort()) {
    const domainPath = join(expected, "skills", domain);
    if (!lstatSync(domainPath).isDirectory() || lstatSync(domainPath).isSymbolicLink()) fail(`Invalid domain: ${domain}`);
    for (const name of readdirSync(domainPath).sort()) {
      if (names.includes(name)) fail(`Duplicate skill: ${name}`);
      const files = manifest(join(domainPath, name));
      if (!files["SKILL.md"]) fail(`Missing SKILL.md: ${name}`);
      names.push(name);
      for (const [file, hash] of Object.entries(files)) wanted[join(name, file)] = hash;
    }
  }
  if (!names.length) fail("No expected skills.");
  const actual = manifest(installed);
  const keys = Object.keys(wanted).sort();
  if (keys.length !== Object.keys(actual).length || keys.some(key => actual[key] !== wanted[key])) fail("Installed package files differ from the expected checkout.");
  return { names: names.sort(), files: keys.length, sha256: createHash("sha256").update(JSON.stringify(keys.map(key => [key, wanted[key]]))).digest("hex") };
}

export function verifyCodex(raw: string, installed: string, names: string[]) {
  const messages = JSON.parse(raw);
  if (!Array.isArray(messages)) fail("Unexpected Codex prompt-input format.");
  const text = messages.flatMap(message => message.content ?? []).map(part => part.text ?? "").join("\n");
  const aliases = [...text.matchAll(/- `(r\d+)` = `([^`]+)`/g)]
    .filter(match => resolve(match[2]) === installed).map(match => match[1]);
  if (aliases.length !== 1) fail("Codex did not expose the project skill root.");
  const entries = [...text.matchAll(new RegExp(`^- ([^\\n:]+): .*\\(file: ${aliases[0]}/([^\\n)]+)\\)$`, "gm"))];
  if (entries.length !== names.length || names.some(name => entries.filter(entry => entry[1] === name && entry[2] === `${name}/SKILL.md`).length !== 1)) fail("Codex skill discovery differs from installed packages.");
}

export function verifyOpenCode(raw: string, project: string, installed: string, names: string[]) {
  const entries = JSON.parse(raw);
  if (!Array.isArray(entries)) fail("Unexpected OpenCode skill format.");
  const local = entries.filter(item => typeof item.location === "string" && inside(project, resolve(item.location)));
  if (local.length !== names.length || names.some(name => local.filter(item => item.name === name).length !== 1)) fail("OpenCode skill discovery differs from installed packages.");
  for (const item of local) {
    const expected = join(installed, item.name, "SKILL.md");
    if (realpathSync(item.location) !== expected) fail(`Wrong OpenCode location: ${item.name}`);
    const body = readFileSync(expected, "utf8").replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, "").trim();
    if (typeof item.content !== "string" || item.content.trim() !== body) fail(`Wrong OpenCode body: ${item.name}`);
  }
}

async function main() {
  const args = Bun.argv.slice(2);
  if (args.length !== 3) fail("Usage: bun run check:install <source-path-or-url> <clean-expected-checkout> <new-output-directory>");
  const [input, expectedInput, outputInput] = args;
  const source = /^https?:\/\//.test(input) ? input : realpathSync(input);
  const expected = realpathSync(expectedInput);
  const output = resolve(outputInput);
  if (inside(expected, output)) fail("Keep installation evidence outside the expected checkout.");
  // Never overwrite prior evidence or install into the contributor's project.
  mkdirSync(output, { mode: 0o700 });
  const project = join(realpathSync(output), "project");
  mkdirSync(project);
  const env = { ...process.env, DO_NOT_TRACK: "1", GIT_TERMINAL_PROMPT: "0", GIT_CONFIG_COUNT: "2", GIT_CONFIG_KEY_0: "credential.helper", GIT_CONFIG_VALUE_0: "", GIT_CONFIG_KEY_1: "credential.interactive", GIT_CONFIG_VALUE_1: "false" };
  const commands: object[] = [];
  const report: Record<string, unknown> = { state: "incomplete", source, expected, project, commands, behavior: "not exercised" };
  const save = () => writeFileSync(join(output, "summary.json"), JSON.stringify(report, null, 2) + "\n", { mode: 0o600 });
  const run = async (name: string, argv: string[], cwd = project) => {
    const started = performance.now();
    // Direct files avoid clients truncating buffered pipe output on process exit.
    const stdout = openSync(join(output, `${name}.stdout`), "wx", 0o600);
    const stderr = openSync(join(output, `${name}.stderr`), "wx", 0o600);
    try {
      const child = Bun.spawn(argv, { cwd, env, stdin: "ignore", stdout, stderr, timeout: 120_000, killSignal: "SIGKILL" });
      const exitCode = await child.exited;
      commands.push({ name, argv, exitCode, signal: child.signalCode, durationMs: performance.now() - started });
      save();
      if (exitCode !== 0) fail(`${name} failed (${exitCode}); inspect retained output.`);
      return readFileSync(join(output, `${name}.stdout`), "utf8").trim();
    } finally { closeSync(stdout); closeSync(stderr); }
  };
  save();
  try {
    report.revision = await run("revision", ["git", "rev-parse", "HEAD"], expected);
    if (await run("status", ["git", "status", "--porcelain", "--untracked-files=all"], expected)) fail("Expected checkout must be clean.");
    if (await run("ignored", ["git", "ls-files", "--others", "--ignored", "--exclude-standard", "--", "skills"], expected)) fail("Expected skill packages contain ignored files absent from the revision.");
    report.versions = { installer: "1.7.0", codex: await run("codex-version", ["codex", "--version"]), opencode: await run("opencode-version", ["opencode", "--version"]) };
    // A repository boundary prevents ancestor project skills shadowing the copies.
    await run("project", ["git", "-c", "init.templateDir=", "init", "--quiet"]);
    await run("installer", ["bunx", "skills@1.7.0", "add", source, "--skill", "*", "--agent", "codex", "opencode", "--copy", "--yes", "--json"]);
    const installed = join(project, ".agents", "skills");
    const copied = verifyCopies(expected, installed);
    verifyCodex(await run("codex", ["codex", "-C", project, "debug", "prompt-input", "List installed skills without performing work."]), installed, copied.names);
    verifyOpenCode(await run("opencode", ["opencode", "debug", "skill"]), project, installed, copied.names);
    if (await run("final-revision", ["git", "rev-parse", "HEAD"], expected) !== report.revision || await run("final-status", ["git", "status", "--porcelain", "--untracked-files=all"], expected) || await run("final-ignored", ["git", "ls-files", "--others", "--ignored", "--exclude-standard", "--", "skills"], expected)) fail("Expected checkout changed during verification.");
    report.state = "passed";
    report.packages = copied.names.length;
    report.files = copied.files;
    report.manifestSha256 = copied.sha256;
    console.log(`PASS: ${copied.names.length} copied packages, ${copied.files} identical files; Codex and OpenCode discovery. Behavior not exercised.`);
  } catch (error) {
    report.state = "failed";
    report.error = String(error);
    throw error;
  } finally { save(); }
}

if (import.meta.main) {
  try { await main(); } catch (error) { console.error(String(error)); process.exitCode = 1; }
}
