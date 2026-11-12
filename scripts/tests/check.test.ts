import { afterEach, beforeEach, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { audit } from "../check";

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
  write(
    join(root, "README.md"),
    "# Example\n\n1 skill for examples.\n\n| [Engineering · 1 skill](docs/domains/engineering.md) | Examples |\n",
  );
  write(join(root, "docs/domains/engineering.md"), "[example](../../skills/engineering/example/SKILL.md)\n");
  write(
    join(root, "skills/productivity/choose-skill/references/skill-map.matrix.md"),
    "# Skill map\n\n## Engineering\n\n| Requested result | Skill | Boundary |\n| --- | --- | --- |\n| An example | `example` | Examples only |\n",
  );
  write(entry, valid);
  write(agentFile, Bun.YAML.stringify({ interface: agentInterface }));
});

afterEach(() => rmSync(root, { recursive: true, force: true }));

test("accepts a standalone package without a Markdown link to agent metadata", () => {
  expect(audit(root)).toEqual({ errors: [], packages: 1, resources: 0 });
});

test("keeps the GitHub PR template synchronized with its portable owner", () => {
  const canonical = join(root, "skills/engineering/explain-pr/references/pr-description.template.md");
  const github = join(root, ".github/pull_request_template.md");
  write(canonical, "## Summary\n\n## Evidence and testing\n");
  expect(audit(root).errors.join("\n")).toContain("PR template must match");
  mkdirSync(github, { recursive: true });
  expect(audit(root).errors.join("\n")).toContain("PR template must match");
  rmSync(github, { recursive: true });
  write(github, "## Summary\n");
  expect(audit(root).errors.join("\n")).toContain("PR template must match");
  write(github, readFileSync(canonical, "utf8"));
  expect(audit(root).errors).toEqual([]);
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

test("checks eval documentation links and accepts their repaired targets", () => {
  write(join(root, "evals/README.md"), "[recipes](cases/README.md)\n");
  expect(audit(root).errors.join("\n")).toContain("evals/README.md: broken/outside local link");
  write(join(root, "evals/cases/README.md"), "# Recipes\n");
  expect(audit(root).errors).toEqual([]);
});

test("checks repository agent-instruction links when the file exists", () => {
  write(join(root, "AGENTS.md"), "Read [authoring](docs/authoring.md).\n");
  expect(audit(root).errors.join("\n")).toContain("AGENTS.md: broken/outside local link");
  write(join(root, "docs/authoring.md"), "# Authoring\n");
  expect(audit(root).errors).toEqual([]);
});

test("requires catalog coverage and catches whitespace", () => {
  write(join(root, "docs/domains/engineering.md"), "# Catalog\n");
  write(entry, valid + "trailing space \n");
  const errors = audit(root).errors.join("\n");
  expect(errors).toContain("absent from its owning domain catalog");
  expect(errors).toContain("whitespace");
});

test("requires a skill in its own catalog even if another catalog links it", () => {
  write(join(root, "docs/domains/engineering.md"), "# Engineering\n");
  write(join(root, "docs/domains/product.md"), "[example](../../skills/engineering/example/SKILL.md)\n");
  expect(audit(root).errors.join("\n")).toContain("absent from its owning domain catalog");
});

test.each([
  ["| An example | `example` | Examples only |\n", "", "missing routed skill: example"],
  ["`example`", "`removed-skill`", "unknown routed skill: removed-skill"],
  ["## Engineering", "## Product", "routed skill in wrong domain: example"],
  [
    "Examples only |",
    "Examples only |\n| Another result | `example` | Same owner |",
    "duplicate routed skill: example",
  ],
])("rejects routing inventory drift: %s", (before, after, error) => {
  const router = join(root, "skills/productivity/choose-skill/references/skill-map.matrix.md");
  write(router, readFileSync(router, "utf8").replace(before, after));
  expect(audit(root).errors.join("\n")).toContain(error);
});

test("requires the routing map and ignores skill mentions outside its inventory rows", () => {
  const router = join(root, "skills/productivity/choose-skill/references/skill-map.matrix.md");
  write(router, readFileSync(router, "utf8") + "\nA boundary can mention `example` or a non-skill `third-party`.\n");
  expect(audit(root).errors).toEqual([]);
  rmSync(router);
  expect(audit(root).errors.join("\n")).toContain("missing skill routing map");
});

test.each([
  ["|Historical|`removed-skill`|Stale owner|", "unknown routed skill: removed-skill"],
  ["|Again|`example`|Same owner|", "duplicate routed skill: example"],
])("checks compact Markdown routing rows: %s", (row, error) => {
  const router = join(root, "skills/productivity/choose-skill/references/skill-map.matrix.md");
  write(router, readFileSync(router, "utf8").trimEnd() + "\n" + row + "\n");
  expect(audit(root).errors.join("\n")).toContain(error);
});

test.each(["```markdown", "~~~markdown"])("does not count fenced examples as routing inventory: %s", (fence) => {
  const router = join(root, "skills/productivity/choose-skill/references/skill-map.matrix.md");
  const content = readFileSync(router, "utf8");
  write(router, "# Skill map\n\n" + fence + "\n" + content + fence.slice(0, 3) + "\n");
  expect(audit(root).errors.join("\n")).toContain("missing routed skill: example");
});

test.each([
  ["1 skill for", "2 skills for", "summary must report 1 skills"],
  ["Engineering · 1 skill", "Engineering · 2 skills", "domain catalog row must report 1 engineering skills"],
])("rejects current README count drift: %s", (before, after, error) => {
  const readme = join(root, "README.md");
  write(readme, readFileSync(readme, "utf8").replace(before, after));
  expect(audit(root).errors.join("\n")).toContain(error);
});

test("leaves historical release counts outside the current inventory check", () => {
  const readme = join(root, "README.md");
  write(readme, readFileSync(readme, "utf8") + "\nThe previous release contained 70 skills.\n");
  expect(audit(root).errors).toEqual([]);
});

test.each([0, 6])("checks listed domain counts after its last skill is removed: %i", (count) => {
  const readme = join(root, "README.md");
  write(join(root, "docs/domains/product.md"), "# Product\n");
  write(
    readme,
    readFileSync(readme, "utf8") + `| [Product · ${count} skills](docs/domains/product.md) | Retained catalog |\n`,
  );
  const errors = audit(root).errors;
  if (count === 0) expect(errors).toEqual([]);
  else expect(errors.join("\n")).toContain("domain catalog row must report 0 product skills");
});

test.each([
  ["- [ ] Verify the result.\n", undefined],
  [
    "1. [ ] Verify the result.\n\nExplanation.\n\n| Choice | Reason |\n| --- | --- |\n| A | Existing convention |\n\n~~~text\n- [x] Completed example.\n~~~\n",
    undefined,
  ],
  ["- Verify the result.\n", "checklist needs unchecked task items"],
  ["~~~text\n- [ ] Example only.\n~~~\n", "checklist needs unchecked task items"],
  ["- [ ] Pending.\n- [x] Already done.\n", "reusable checklist contains prechecked task items"],
])("validates reusable checklist task state: %s", (content, error) => {
  write(entry, valid + "\n[checks](references/review.checklist.md)\n");
  write(join(dirname(entry), "references/review.checklist.md"), content);
  const errors = audit(root).errors;
  if (error) expect(errors.join("\n")).toContain(error);
  else expect(errors).toEqual([]);
});
