import { createHash } from "node:crypto";
import { lstatSync, readdirSync, readFileSync, realpathSync } from "node:fs";
import { isAbsolute, join, relative, resolve } from "node:path";

function fail(message: string): never {
  throw new Error(message);
}
export const inside = (root: string, path: string) => {
  const rel = relative(root, path);
  return rel !== ".." && !rel.startsWith(`..${process.platform === "win32" ? "\\" : "/"}`) && !isAbsolute(rel);
};

export function manifest(root: string): Record<string, string> {
  if (!lstatSync(root).isDirectory() || lstatSync(root).isSymbolicLink()) fail(`Expected a real directory: ${root}`);
  const result: Record<string, string> = Object.create(null);
  const walk = (directory: string) => {
    for (const name of readdirSync(directory).sort()) {
      const path = join(directory, name);
      const info = lstatSync(path);
      if (info.isSymbolicLink()) fail(`Copied package contains a symlink: ${path}`);
      if (info.isDirectory()) walk(path);
      else if (info.isFile())
        result[relative(root, path)] = createHash("sha256").update(readFileSync(path)).digest("hex");
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
    if (!lstatSync(domainPath).isDirectory() || lstatSync(domainPath).isSymbolicLink())
      fail(`Invalid domain: ${domain}`);
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
  if (keys.length !== Object.keys(actual).length || keys.some((key) => actual[key] !== wanted[key]))
    fail("Installed package files differ from the expected checkout.");
  return {
    names: names.sort(),
    files: keys.length,
    sha256: createHash("sha256")
      .update(JSON.stringify(keys.map((key) => [key, wanted[key]])))
      .digest("hex"),
  };
}

export function verifyCodex(raw: string, installed: string, names: string[]) {
  const messages: unknown = JSON.parse(raw);
  if (!Array.isArray(messages)) fail("Unexpected Codex prompt-input format.");
  const text = messages
    .flatMap((message) => message.content ?? [])
    .map((part) => part.text ?? "")
    .join("\n");
  const aliases = [...text.matchAll(/- `(r\d+)` = `([^`]+)`/g)]
    .filter((match) => resolve(match[2]) === installed)
    .map((match) => match[1]);
  if (names.length === 0 && aliases.length === 0) return;
  if (aliases.length !== 1) fail("Codex did not expose the project skill root.");
  const entries = [...text.matchAll(new RegExp(`^- ([^\\n:]+): .*\\(file: ${aliases[0]}/([^\\n)]+)\\)$`, "gm"))];
  if (
    entries.length !== names.length ||
    names.some((name) => entries.filter((entry) => entry[1] === name && entry[2] === `${name}/SKILL.md`).length !== 1)
  )
    fail("Codex skill discovery differs from installed packages.");
}

export function verifyOpenCode(raw: string, project: string, installed: string, names: string[]) {
  const entries: unknown = JSON.parse(raw);
  if (!Array.isArray(entries)) fail("Unexpected OpenCode skill format.");
  const local = entries.filter((item) => typeof item.location === "string" && inside(project, resolve(item.location)));
  if (local.length !== names.length || names.some((name) => local.filter((item) => item.name === name).length !== 1))
    fail("OpenCode skill discovery differs from installed packages.");
  for (const item of local) {
    const expected = join(installed, item.name, "SKILL.md");
    if (realpathSync(item.location) !== expected) fail(`Wrong OpenCode location: ${item.name}`);
    const body = readFileSync(expected, "utf8")
      .replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, "")
      .trim();
    if (typeof item.content !== "string" || item.content.trim() !== body) fail(`Wrong OpenCode body: ${item.name}`);
  }
}
