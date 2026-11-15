import { afterEach, beforeEach, expect, test } from "bun:test";
import {
  chmodSync,
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { discoverOpenCodeV2 } from "../lib/opencode-discovery.ts";
import { manifest, verifyCodex, verifyCopies, verifyOpenCode, verifyOpenCodeV2 } from "../lib/skill-packages.ts";

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

test("content manifests retain filenames that match object prototype properties", () => {
  const name = "__proto__";
  const path = join(project, name);
  writeFileSync(path, "before");
  const before = manifest(project);
  expect(Object.keys(before)).toContain(name);
  writeFileSync(path, "after");
  expect(manifest(project)[name]).not.toBe(before[name]);
});

test("rejects package symlinks instead of claiming copy integrity", () => {
  rmSync(join(installed, "example"), { recursive: true });
  symlinkSync(join(expected, "skills/productivity/example"), join(installed, "example"));
  expect(() => verifyCopies(expected, installed)).toThrow("symlink");
});

const codex = (entries: string) => JSON.stringify([{ content: [{ text: `- \`r2\` = \`${installed}\`\n${entries}` }] }]);
test("checks exact Codex names and aliased project locations", () => {
  verifyCodex(codex("- example: Task (file: r2/example/SKILL.md)"), installed, ["example"]);
  expect(() => verifyCodex(codex("- example: Task (file: r2/other/SKILL.md)"), installed, ["example"])).toThrow(
    "discovery",
  );
  expect(() => verifyCodex(codex(""), installed, ["example"])).toThrow("discovery");
  expect(() => verifyCodex("[]", installed, ["example"])).toThrow("root");
});

test("accepts a no-skill baseline without a root alias but rejects unexpected local entries", () => {
  verifyCodex("[]", installed, []);
  verifyCodex(codex(""), installed, []);
  expect(() => verifyCodex(codex("- example: Task (file: r2/example/SKILL.md)"), installed, [])).toThrow("discovery");
});

test("compares OpenCode body without frontmatter and ignores unrelated global packages", () => {
  const entry = { name: "example", location: join(installed, "example/SKILL.md"), content: body };
  verifyOpenCode(
    JSON.stringify([entry, { name: "global", location: join(root, "global/SKILL.md") }]),
    project,
    installed,
    ["example"],
  );
  expect(() =>
    verifyOpenCode(JSON.stringify([{ ...entry, content: "Wrong body" }]), project, installed, ["example"]),
  ).toThrow("body");
  expect(() => verifyOpenCode(JSON.stringify([entry, entry]), project, installed, ["example"])).toThrow("discovery");
});

test("checks the native v2 project, IDs, paths and complete bodies", () => {
  const entry = { id: "example", name: "example", path: join(installed, "example/SKILL.md"), content: body };
  const response = (data = [entry], directory = project) => JSON.stringify({ location: { directory }, data });
  verifyOpenCodeV2(response(), project, installed, ["example"]);
  expect(() => verifyOpenCodeV2(response([], root), project, installed, ["example"])).toThrow("location");
  expect(() => verifyOpenCodeV2(response([]), project, installed, ["example"])).toThrow("discovery");
  expect(() => verifyOpenCodeV2(response([{ ...entry, id: "other" }]), project, installed, ["example"])).toThrow("ID");
  expect(() => verifyOpenCodeV2(response([{ ...entry, content: "Wrong" }]), project, installed, ["example"])).toThrow(
    "body",
  );
  expect(() => verifyOpenCodeV2(response([entry, entry]), project, installed, ["example"])).toThrow("discovery");
  expect(() =>
    verifyOpenCodeV2(response([{ ...entry, path: join(root, "other/SKILL.md") }]), project, installed, ["example"]),
  ).toThrow("discovery");
});

test("waits for asynchronous v2 registration in an isolated private server and stops it", async () => {
  const bin = join(root, "bin");
  const output = join(root, "evidence");
  mkdirSync(bin);
  mkdirSync(output);
  const executable = join(bin, "opencode");
  writeFileSync(
    executable,
    `#!${process.execPath}
import { writeFileSync } from "node:fs";
let count = 0;
const server = Bun.serve({hostname:"127.0.0.1",port:0,fetch(request) {
  if (request.method !== "GET" || new URL(request.url).pathname !== "/api/skill") return new Response("Bad request",{status:400});
  if (request.headers.get("Authorization") !== "Basic " + Buffer.from("opencode:"+process.env.OPENCODE_PASSWORD).toString("base64")) return new Response("Unauthorized",{status:401});
  const data = count++ === 0 ? [] : [{id:"example",name:"example",path:${JSON.stringify(join(installed, "example/SKILL.md"))},content:${JSON.stringify(body)}}];
  return Response.json({location:{directory:process.cwd()},data});
}});
writeFileSync(${JSON.stringify(join(root, "child-roots.json"))}, JSON.stringify({config:process.env.XDG_CONFIG_HOME,home:process.env.HOME}));
process.on("SIGTERM",()=>{writeFileSync(${JSON.stringify(join(root, "stopped"))},"yes");process.exit(0)});
console.log(JSON.stringify({url:server.url.href}));
`,
  );
  chmodSync(executable, 0o700);
  await discoverOpenCodeV2(project, output, installed, ["example"], {
    ...process.env,
    PATH: `${bin}:${process.env.PATH}`,
  });
  expect(readFileSync(join(output, "opencode-discovery.jsonl"), "utf8").trim().split("\n")).toHaveLength(2);
  expect(JSON.parse(readFileSync(join(root, "child-roots.json"), "utf8"))).toEqual({
    config: join(output, "opencode-config"),
    home: process.env.HOME,
  });
  expect(readFileSync(join(root, "stopped"), "utf8")).toBe("yes");
  verifyOpenCodeV2(readFileSync(join(output, "opencode.stdout"), "utf8"), project, installed, ["example"]);
});

test("the CLI refuses ignored source files absent from its recorded commit", async () => {
  const git = (...args: string[]) => {
    const result = Bun.spawnSync(["git", "-c", "core.hooksPath=/dev/null", "-c", "commit.gpgsign=false", ...args], {
      cwd: expected,
    });
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
  const child = Bun.spawn(
    [process.execPath, join(import.meta.dir, "../check-install.ts"), expected, expected, output],
    {
      stdout: "pipe",
      stderr: "pipe",
    },
  );
  const [exit, stderr] = await Promise.all([child.exited, new Response(child.stderr).text()]);
  expect(exit).toBe(1);
  expect(stderr).toContain("ignored files absent from the revision");
  const record = JSON.parse(readFileSync(join(output, "summary.json"), "utf8"));
  expect(record.state).toBe("failed");
  expect(record.commands.some((command: { name: string }) => command.name === "installer")).toBe(false);
});
