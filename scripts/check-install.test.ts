import { afterEach, beforeEach, expect, test } from "bun:test";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { verifyCodex, verifyCopies, verifyOpenCode } from "./check-install";

let root: string;
let expected: string;
let project: string;
let installed: string;
const body = "# Example\n\nDo the requested task.\n";
beforeEach(() => {
  root = realpathSync(mkdtempSync(join(tmpdir(), "skills-install-test-")));
  expected = join(root, "source");
  project = join(root, "project");
  installed = join(project, ".agents/skills");
  const leaf = join(expected, "skills/productivity/example");
  mkdirSync(join(leaf, "references"), { recursive: true });
  writeFileSync(join(leaf, "SKILL.md"), `---\nname: example\ndescription: Example\n---\n${body}`);
  writeFileSync(join(leaf, "references/guide.md"), "Useful resource\n");
  mkdirSync(installed, { recursive: true });
  cpSync(leaf, join(installed, "example"), { recursive: true });
});
afterEach(() => rmSync(root, { recursive: true, force: true }));

test("compares complete copied packages including supporting resources", () => {
  expect(verifyCopies(expected, installed)).toMatchObject({ names: ["example"], files: 2 });
  writeFileSync(join(installed, "example/references/guide.md"), "Changed\n");
  expect(() => verifyCopies(expected, installed)).toThrow("differ");
});

test("rejects missing and extra installed files", () => {
  const path = join(installed, "example/references/guide.md");
  rmSync(path);
  expect(() => verifyCopies(expected, installed)).toThrow("differ");
  writeFileSync(path, "Useful resource\n");
  writeFileSync(join(installed, "unexpected.txt"), "Extra\n");
  expect(() => verifyCopies(expected, installed)).toThrow("differ");
});

test("rejects package symlinks instead of claiming copy integrity", () => {
  rmSync(join(installed, "example"), { recursive: true });
  symlinkSync(join(expected, "skills/productivity/example"), join(installed, "example"));
  expect(() => verifyCopies(expected, installed)).toThrow("symlink");
});

const codex = (entries: string) => JSON.stringify([{ content: [{ text: `- \`r2\` = \`${installed}\`\n${entries}` }] }]);
test("checks exact Codex names and aliased project locations", () => {
  verifyCodex(codex("- example: Task (file: r2/example/SKILL.md)"), installed, ["example"]);
  expect(() => verifyCodex(codex("- example: Task (file: r2/other/SKILL.md)"), installed, ["example"])).toThrow("discovery");
  expect(() => verifyCodex(codex(""), installed, ["example"])).toThrow("discovery");
  expect(() => verifyCodex("[]", installed, ["example"])).toThrow("root");
});

test("compares OpenCode body without frontmatter and ignores unrelated global packages", () => {
  const entry = { name: "example", location: join(installed, "example/SKILL.md"), content: body };
  verifyOpenCode(JSON.stringify([entry, { name: "global", location: join(root, "global/SKILL.md") }]), project, installed, ["example"]);
  expect(() => verifyOpenCode(JSON.stringify([{ ...entry, content: "Wrong body" }]), project, installed, ["example"])).toThrow("body");
  expect(() => verifyOpenCode(JSON.stringify([entry, entry]), project, installed, ["example"])).toThrow("discovery");
});

test("the CLI refuses ignored source files absent from its recorded commit", async () => {
  const git = (...args: string[]) => {
    const result = Bun.spawnSync(["git", "-c", "core.hooksPath=/dev/null", "-c", "commit.gpgsign=false", ...args], { cwd: expected });
    expect(result.exitCode).toBe(0);
    return result.stdout.toString();
  };
  git("init", "--quiet");
  writeFileSync(join(expected, ".gitignore"), "skills/**/ignored.txt\n");
  git("add", ".");
  git("-c", "user.name=Fixture", "-c", "user.email=fixture@example.invalid", "commit", "-qm", "fixture");
  writeFileSync(join(expected, "skills/productivity/example/ignored.txt"), "Not part of HEAD\n");
  expect(git("status", "--porcelain", "--untracked-files=all")).toBe("");
  const output = join(root, "evidence");
  const child = Bun.spawn([process.execPath, join(import.meta.dir, "check-install.ts"), expected, expected, output], { stdout: "pipe", stderr: "pipe" });
  const [exit, stderr] = await Promise.all([child.exited, new Response(child.stderr).text()]);
  expect(exit).toBe(1);
  expect(stderr).toContain("ignored files absent from the revision");
  const record = JSON.parse(readFileSync(join(output, "summary.json"), "utf8"));
  expect(record.state).toBe("failed");
  expect(record.commands.some((command: { name: string }) => command.name === "installer")).toBe(false);
});
