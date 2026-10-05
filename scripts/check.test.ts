import { afterEach, beforeEach, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { audit } from "./check";

let root: string;
let entry: string;
const valid = '---\nname: example\ndescription: "An example task."\n---\n\n# Example\n';
const write = (path: string, value: string) => {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, value);
};

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), "skills-check-"));
  entry = join(root, "skills/development/example/SKILL.md");
  write(join(root, "README.md"), "# Example\n");
  write(join(root, "docs/domains/development.md"), "[example](../../skills/development/example/SKILL.md)\n");
  write(entry, valid);
});

afterEach(() => rmSync(root, { recursive: true, force: true }));

test("accepts a standalone cataloged package", () => {
  expect(audit(root)).toEqual({ errors: [], packages: 1, resources: 0 });
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
  write(join(root, "docs/domains/development.md"), "# Catalog\n");
  write(entry, valid + "trailing space \n");
  const errors = audit(root).errors.join("\n");
  expect(errors).toContain("absent from domain catalogs");
  expect(errors).toContain("whitespace");
});
