import { afterEach, beforeEach, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { audit } from "./check";

let root: string;
let entry: string;
let agentFile: string;
const valid = '---\nname: example\ndescription: "An example task."\n---\n\n# Example\n';
const agentInterface = {
  display_name: "Example",
  short_description: "Demonstrate one concrete example task",
  default_prompt: "Use $example to demonstrate this task.",
};
const write = (path: string, value: string) => {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, value);
};

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), "skills-check-"));
  entry = join(root, "skills/engineering/example/SKILL.md");
  agentFile = join(dirname(entry), "agents/openai.yaml");
  write(join(root, "README.md"), "# Example\n");
  write(join(root, "docs/domains/engineering.md"), "[example](../../skills/engineering/example/SKILL.md)\n");
  write(entry, valid);
  write(agentFile, Bun.YAML.stringify({ interface: agentInterface }));
});

afterEach(() => rmSync(root, { recursive: true, force: true }));

test("accepts a standalone package without a Markdown link to agent metadata", () => {
  expect(audit(root)).toEqual({ errors: [], packages: 1, resources: 0 });
});

test("requires a regular agent metadata file", () => {
  rmSync(agentFile);
  expect(audit(root).errors.join("\n")).toContain("missing regular agent metadata file");
  mkdirSync(agentFile);
  expect(audit(root).errors.join("\n")).toContain("missing regular agent metadata file");
});

test.each([
  ["interface: [", "invalid agent metadata YAML"],
  ["[]", "agent metadata must be a mapping"],
  ["false", "agent metadata must be a mapping"],
  ["{}", "interface must be a mapping"],
  ["interface: []", "interface must be a mapping"],
])("rejects invalid metadata structure: %s", (value, error) => {
  write(agentFile, value + "\n");
  expect(audit(root).errors.join("\n")).toContain(error);
});

const invalidFields: [string, unknown][] = [
  ["display_name", undefined],
  ["display_name", "   "],
  ["display_name", false],
  ["short_description", 42],
  ["short_description", " ".repeat(25)],
  ["short_description", "a".repeat(24)],
  ["short_description", "a".repeat(65)],
  ["short_description", "a".repeat(64) + " "],
  ["default_prompt", ["Use $example"]],
  ["default_prompt", "Use $other to demonstrate this task."],
  ["default_prompt", "Use $example-longer to demonstrate this task."],
  ["default_prompt", "Use $example_suffix to demonstrate this task."],
  ["default_prompt", "Use $example and $other to demonstrate this task."],
];
test.each(invalidFields)("rejects invalid interface field %s: %j", (field, value) => {
  write(agentFile, Bun.YAML.stringify({ interface: { ...agentInterface, [field]: value } }));
  expect(audit(root).errors.join("\n")).toContain(`interface.${field}`);
});

test.each(["a".repeat(25), "a".repeat(64), "🧭".repeat(25)])("accepts valid character counts", (short_description) => {
  write(agentFile, Bun.YAML.stringify({ interface: { ...agentInterface, short_description } }));
  expect(audit(root).errors).toEqual([]);
});

test("rejects agent metadata outside its package", () => {
  const outside = join(root, "outside.yaml");
  write(outside, Bun.YAML.stringify({ interface: agentInterface }));
  rmSync(agentFile);
  symlinkSync(outside, agentFile);
  expect(audit(root).errors.join("\n")).toContain("agent metadata leaves its package");
});

test("rejects a skill entrypoint symlinked to a file outside its package", () => {
  const outside = join(root, "shared-skill.md");
  write(outside, valid);
  rmSync(entry);
  symlinkSync(outside, entry);
  expect(audit(root).errors.join("\n")).toContain("skill entrypoint leaves its package");
});

test("keeps other agent-folder resources subject to reachability checks", () => {
  write(join(dirname(agentFile), "notes.md"), "# Notes\n");
  expect(audit(root).errors.join("\n")).toContain("agents/notes.md: resource is not reachable");
});

test("reports broken links and rejects malformed URL encoding", () => {
  write(entry, valid + "\n[missing](references/missing.md)\n[invalid](%ZZ)\n");
  const errors = audit(root).errors.join("\n");
  expect(errors).toContain("broken/outside local link");
  expect(errors).toContain("invalid local link");
});

test("requires reachable resources and follows nested references", () => {
  const reference = join(dirname(entry), "references/guide.md");
  write(reference, "[detail](detail.md)\n");
  write(join(dirname(reference), "detail.md"), "# Detail\n");
  expect(audit(root).errors.join("\n")).toContain("not reachable");
  write(entry, valid + "\n[guide](references/guide.md)\n");
  expect(audit(root).errors).toEqual([]);
});

test("rejects runtime dependencies on repository docs", () => {
  write(entry, valid + "\n[context](../../../README.md)\n");
  expect(audit(root).errors.join("\n")).toContain("leaves its package");
});

test("rejects mismatched names and invalid YAML", () => {
  write(entry, valid.replace("name: example", "name: wrong"));
  expect(audit(root).errors.join("\n")).toContain("mismatched name");
  write(entry, valid.replace('description: "An example task."', "description: bad: YAML"));
  expect(audit(root).errors.join("\n")).toContain("invalid YAML");
});

test("requires catalog coverage and catches whitespace", () => {
  write(join(root, "docs/domains/engineering.md"), "# Catalog\n");
  write(entry, valid + "trailing space \n");
  const errors = audit(root).errors.join("\n");
  expect(errors).toContain("absent from domain catalogs");
  expect(errors).toContain("whitespace");
});
