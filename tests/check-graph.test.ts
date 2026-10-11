import { afterEach, expect, test } from "bun:test";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { checkGraph } from "../skills/engineering/create-tasks/scripts/check-graph";

const task = (
  id: string,
  dependencies: string[] = [],
  status = "pending",
  writes: string[] = [],
  resources: string[] = [],
) => ({ id, status, dependencies, writes, resources });
const directories: string[] = [];
const script = fileURLToPath(new URL("../skills/engineering/create-tasks/scripts/check-graph.ts", import.meta.url));
const cli = (content: string) => {
  const directory = mkdtempSync(join(tmpdir(), "skills-graph-"));
  directories.push(directory);
  const path = join(directory, "tasks.json");
  writeFileSync(path, content);
  const result = spawnSync(process.execPath, [script, path], { encoding: "utf8" });
  expect(readFileSync(path, "utf8")).toBe(content);
  return result;
};
afterEach(() => {
  for (const directory of directories.splice(0)) rmSync(directory, { recursive: true, force: true });
});

test("CLI explains usage without requiring a snapshot", () => {
  const help = spawnSync(process.execPath, [script, "--help"], { encoding: "utf8" });
  expect(help.status).toBe(0);
  expect(help.stdout).toContain("Usage:");
  const missing = spawnSync(process.execPath, [script], { encoding: "utf8" });
  expect(missing.status).toBe(1);
  expect(missing.stderr).toContain("Usage:");
});

test("rejects malformed snapshots, states and declarations", () => {
  for (const input of [
    null,
    [],
    {},
    { tasks: null },
    { tasks: [null] },
    { tasks: [{ id: "a", status: "done", dependencies: [] }] },
    { tasks: [{ id: "a", status: "pending" }] },
    { tasks: [{ ...task("a"), writes: "src/a.ts" }] },
    { tasks: [{ ...task("a"), resources: [42] }] },
  ]) {
    expect(() => checkGraph(input)).toThrow();
  }
});

test("rejects unknown fields instead of silently losing dependency or ownership declarations", () => {
  expect(() => checkGraph({ tasks: [], taskz: [] })).toThrow("unknown snapshot fields");
  for (const key of ["needs", "write", "resource"]) {
    expect(() => checkGraph({ tasks: [{ ...task("a"), [key]: [] }] })).toThrow("unknown fields");
  }
});

test("reports duplicate IDs and refuses to infer a frontier", () => {
  const result = checkGraph({ tasks: [task("a"), task("a")] });
  expect(result.valid).toBe(false);
  expect(result.errors).toContain("duplicate task id: a");
  expect(result.dependencyReady).toEqual([]);
});

test("reports a missing prerequisite instead of treating it as accepted", () => {
  const result = checkGraph({ tasks: [task("a", ["missing"])] });
  expect(result.valid).toBe(false);
  expect(result.errors).toEqual(["a: missing dependency missing"]);
  expect(result.dependencyReady).toEqual([]);
});

test("detects indirect and self cycles even when their states say accepted", () => {
  const cycle = checkGraph({
    tasks: [task("a", ["b"], "accepted"), task("b", ["c"], "accepted"), task("c", ["a"], "accepted")],
  });
  expect(cycle.valid).toBe(false);
  expect(cycle.errors).toEqual(["dependency cycle: a -> b -> c -> a"]);
  expect(checkGraph({ tasks: [task("self", ["self"])] }).valid).toBe(false);
});

test("uses accepted prerequisites and pending state rather than future topological readiness", () => {
  const result = checkGraph({
    tasks: [
      task("contract", [], "accepted"),
      task("page", ["contract"]),
      task("integration", ["page"]),
      task("running", [], "running"),
      task("waiting", ["running"]),
      task("blocked", [], "blocked"),
      task("failed", [], "failed"),
      task("retry-consumer", ["failed"]),
      task("independent"),
    ],
  });
  expect(result.valid).toBe(true);
  expect(result.dependencyReady).toEqual(["page", "independent"]);
});

test("requires reconciliation of accepted or running nodes with unaccepted prerequisites", () => {
  for (const status of ["accepted", "running"]) {
    for (const prerequisiteStatus of ["pending", "blocked", "failed", "running"]) {
      const result = checkGraph({
        tasks: [task("b", [], prerequisiteStatus), task("a", ["b"], status), task("c", ["a"])],
      });
      expect(result.valid).toBe(false);
      expect(result.errors).toEqual([`a: ${status} task has unaccepted dependency b (${prerequisiteStatus})`]);
      expect(result.dependencyReady).toEqual([]);
    }
  }
});

test("reports exact and ancestor write overlaps without matching sibling prefixes", () => {
  const result = checkGraph({
    tasks: [
      task("directory", [], "pending", ["src/components/"]),
      task("button", [], "pending", ["src/components/button.ts"]),
      task("same", [], "pending", ["src/components/button.ts"]),
      task("sibling", [], "pending", ["src/components-old/button.ts"]),
    ],
  });
  expect(result.conflicts.map((item) => item.tasks)).toEqual([
    ["directory", "button"],
    ["directory", "same"],
    ["button", "same"],
  ]);
  expect(result.conflicts.every((item) => item.bothDependencyReady)).toBe(true);
  expect(result.conflicts[0].writes).toEqual([["src/components", "src/components/button.ts"]]);
});

test("reports shared resources independently of file paths", () => {
  const result = checkGraph({
    tasks: [task("a", [], "pending", ["src/a.ts"], ["test-db"]), task("b", [], "pending", ["src/b.ts"], ["test-db"])],
  });
  expect(result.conflicts).toEqual([
    { tasks: ["a", "b"], writes: [], resources: ["test-db"], bothDependencyReady: true },
  ]);
});

test("task order cannot change readiness or declared conflicts", () => {
  const tasks = [
    task("contract", [], "accepted"),
    task("api", ["contract"], "pending", ["src/shared/"], ["schema"]),
    task("ui", ["contract"], "pending", ["src/shared/types.ts"], ["schema"]),
    task("integration", ["api", "ui"], "pending", [], ["schema"]),
  ];
  const permutations = <T>(items: T[]): T[][] =>
    items.length === 0
      ? [[]]
      : items.flatMap((item, index) =>
          permutations(items.filter((_, other) => other !== index)).map((rest) => [item, ...rest]),
        );
  for (const order of permutations(tasks)) {
    const input = { tasks: order };
    const before = JSON.stringify(input);
    const result = checkGraph(input);
    expect(result.valid).toBe(true);
    expect(result.dependencyReady.toSorted()).toEqual(["api", "ui"]);
    expect(result.conflicts.map((conflict) => conflict.tasks.toSorted().join("/")).toSorted()).toEqual([
      "api/integration",
      "api/ui",
      "integration/ui",
    ]);
    expect(
      result.conflicts.flatMap((conflict) => conflict.writes.map((pair) => pair.toSorted().join("|"))).toSorted(),
    ).toEqual(["src/shared|src/shared/types.ts"]);
    expect(result.conflicts.every((conflict) => conflict.resources.join() === "schema")).toBe(true);
    expect(
      result.conflicts.filter((conflict) => conflict.bothDependencyReady).map((conflict) => conflict.tasks.toSorted()),
    ).toEqual([["api", "ui"]]);
    expect(JSON.stringify(input)).toBe(before);
    const cyclic = checkGraph({
      tasks: order.map((item) => (item.id === "api" ? { ...item, dependencies: ["integration"] } : item)),
    });
    expect(cyclic.valid).toBe(false);
    expect(cyclic.dependencyReady).toEqual([]);
  }
});

test("treats prototype property names as ordinary task identifiers", () => {
  const result = checkGraph({
    tasks: [task("__proto__", [], "accepted"), task("constructor", ["__proto__"]), task("toString", ["constructor"])],
  });
  expect(result.valid).toBe(true);
  expect(result.dependencyReady).toEqual(["constructor"]);
  expect(checkGraph({ tasks: [task("__proto__", ["toString"]), task("toString", ["__proto__"])] }).valid).toBe(false);
});

test("distinguishes sequential overlap from two dependency-ready tasks", () => {
  const result = checkGraph({
    tasks: [task("a", [], "pending", ["src/a.ts"]), task("b", ["a"], "pending", ["src/a.ts"])],
  });
  expect(result.valid).toBe(true);
  expect(result.dependencyReady).toEqual(["a"]);
  expect(result.conflicts[0].bothDependencyReady).toBe(false);
});

test("accepted tasks do not create unfinished-work conflicts", () => {
  expect(
    checkGraph({ tasks: [task("a", [], "accepted", ["src/"]), task("b", ["a"], "pending", ["src/a.ts"])] }).conflicts,
  ).toEqual([]);
});

test("missing declarations remain unknown while explicit empty arrays declare no use", () => {
  const result = checkGraph({
    tasks: [
      { id: "unknown", status: "pending", dependencies: [] },
      { ...task("partial"), resources: undefined },
      task("declared"),
    ],
  });
  expect(result.unknownIsolation).toEqual([
    { id: "unknown", missing: ["writes", "resources"] },
    { id: "partial", missing: ["resources"] },
  ]);
  expect(result.dependencyReady).toEqual(["unknown", "partial", "declared"]);
});

test("rejects absolute, traversal, wildcard, NUL and ambiguous path syntax", () => {
  for (const path of [
    "/tmp/file",
    "../file",
    "src/../file",
    "./src",
    "src//file",
    "src/*.ts",
    "src/a?.ts",
    "src/{a,b}.ts",
    "!src/file",
    "C:/file",
    "src\\file",
    "src/a\0.ts",
  ]) {
    expect(() => checkGraph({ tasks: [task("a", [], "pending", [path])] })).toThrow();
  }
});

test("detects literal Next route ancestor and file overlaps while keeping distinct route paths separate", () => {
  const result = checkGraph({
    tasks: [
      task("directory", [], "pending", ["src/app/[slug]/"]),
      task("page", [], "pending", ["src/app/[slug]/page.tsx"]),
      task("same", [], "pending", ["src/app/[slug]/page.tsx"]),
      task("other", [], "pending", ["src/app/[id]/page.tsx", "src/app/[[...slug]]/page.tsx"]),
    ],
  });
  expect(result.valid).toBe(true);
  expect(result.conflicts.map((item) => item.tasks)).toEqual([
    ["directory", "page"],
    ["directory", "same"],
    ["page", "same"],
  ]);
});

test("treats Astro routes and square brackets as literal paths rather than character classes", () => {
  const result = checkGraph({
    tasks: [
      task("astro", [], "pending", ["src/pages/[id].astro"]),
      task("same", [], "pending", ["src/pages/[id].astro"]),
      task("other", [], "pending", ["src/pages/[slug].astro", "src/pages/i.astro"]),
      task("bracket", [], "pending", ["src/[ab].ts"]),
      task("letter", [], "pending", ["src/a.ts"]),
    ],
  });
  expect(result.valid).toBe(true);
  expect(result.conflicts.map((item) => item.tasks)).toEqual([["astro", "same"]]);
});

test("CLI reads a valid snapshot and emits the observed frontier without changing input", () => {
  const result = cli(
    JSON.stringify({
      tasks: [
        task("a", [], "accepted"),
        task("b", ["a"], "pending", ["src/app/[slug]/page.tsx", "src/pages/[id].astro"]),
      ],
    }),
  );
  expect(result.status).toBe(0);
  expect(JSON.parse(result.stdout).dependencyReady).toEqual(["b"]);
});

test("CLI returns nonzero for malformed JSON and a cyclic graph", () => {
  const malformed = cli("{broken");
  expect(malformed.status).toBe(1);
  expect(malformed.stderr.length).toBeGreaterThan(0);
  const cyclic = cli(JSON.stringify({ tasks: [task("a", ["a"])] }));
  expect(cyclic.status).toBe(1);
  expect(JSON.parse(cyclic.stdout).valid).toBe(false);
});
