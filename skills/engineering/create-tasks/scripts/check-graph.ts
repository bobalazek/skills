import { readFileSync } from "node:fs";

type Status = "pending" | "running" | "accepted" | "blocked" | "failed";
type Task = { id: string; status: Status; dependencies: string[]; writes?: string[]; resources?: string[] };
type Conflict = { tasks: [string, string]; writes: [string, string][]; resources: string[]; bothDependencyReady: boolean };
const statuses = new Set<Status>(["pending", "running", "accepted", "blocked", "failed"]);
const usage = "Usage: bun check-graph.ts <task-snapshot.json>\nRequires Bun 1.3.9 or newer. Reads one JSON snapshot; reports dependency readiness, declared conflicts and unknown isolation. Does not execute tasks or validate acceptance evidence.";
const record = (value: unknown): value is Record<string, unknown> => !!value && typeof value === "object" && !Array.isArray(value);
const name = (value: unknown): value is string => typeof value === "string" && !!value.trim() && value === value.trim();

function strings(value: unknown, label: string): string[] {
  if (!Array.isArray(value) || !value.every(name)) throw new Error(`${label} must be an array of nonempty strings`);
  if (new Set(value).size !== value.length) throw new Error(`${label} contains duplicate entries`);
  return value;
}

function writePath(value: string): string {
  const path = value.endsWith("/") ? value.slice(0, -1) : value;
  if (/[*?{}\\:\0]/.test(path) || path.startsWith("!") || path.split("/").some(part => !part || part === "." || part === "..")) {
    throw new Error(`unsupported write path ${JSON.stringify(value)}: use literal repo-relative paths without wildcard/brace syntax, NUL or traversal`);
  }
  return path;
}

export function checkGraph(input: unknown) {
  if (!record(input) || !Array.isArray(input.tasks)) throw new Error("snapshot must contain a tasks array");
  const extra = Object.keys(input).filter(key => key !== "tasks");
  if (extra.length) throw new Error(`unknown snapshot fields: ${extra.join(", ")}`);
  const tasks: Task[] = input.tasks.map((value, index) => {
    if (!record(value) || !name(value.id) || !statuses.has(value.status as Status)) {
      throw new Error(`tasks[${index}] needs an id and status: pending, running, accepted, blocked or failed`);
    }
    const extra = Object.keys(value).filter(key => !["id", "status", "dependencies", "writes", "resources"].includes(key));
    if (extra.length) throw new Error(`${value.id}: unknown fields ${extra.join(", ")}`);
    const task: Task = { id: value.id, status: value.status as Status, dependencies: strings(value.dependencies, `${value.id}.dependencies`) };
    if (value.writes !== undefined) task.writes = strings(value.writes, `${value.id}.writes`).map(writePath);
    if (value.resources !== undefined) task.resources = strings(value.resources, `${value.id}.resources`);
    return task;
  });
  const errors: string[] = [];
  const byId = new Map<string, Task>();
  for (const task of tasks) {
    if (byId.has(task.id)) errors.push(`duplicate task id: ${task.id}`);
    byId.set(task.id, task);
  }
  for (const task of tasks) {
    for (const dependency of task.dependencies) {
      if (!byId.has(dependency)) errors.push(`${task.id}: missing dependency ${dependency}`);
      else if ((task.status === "accepted" || task.status === "running") && byId.get(dependency)!.status !== "accepted") {
        errors.push(`${task.id}: ${task.status} task has unaccepted dependency ${dependency} (${byId.get(dependency)!.status})`);
      }
    }
  }
  const visited = new Set<string>();
  const active: string[] = [];
  function visit(id: string) {
    const start = active.indexOf(id);
    if (start >= 0) {
      errors.push(`dependency cycle: ${[...active.slice(start), id].join(" -> ")}`);
      return;
    }
    if (visited.has(id)) return;
    active.push(id);
    for (const dependency of byId.get(id)!.dependencies) if (byId.has(dependency)) visit(dependency);
    active.pop();
    visited.add(id);
  }
  for (const id of byId.keys()) visit(id);
  const dependencyReady = errors.length ? [] : tasks.filter(task => task.status === "pending" && task.dependencies.every(id => byId.get(id)!.status === "accepted")).map(task => task.id);
  const ready = new Set(dependencyReady);
  const conflicts: Conflict[] = [];
  const unfinished = tasks.filter(task => task.status !== "accepted");
  for (let i = 0; i < unfinished.length; i++) {
    const left = unfinished[i]!;
    for (const right of unfinished.slice(i + 1)) {
      const writes: [string, string][] = [];
      for (const a of left.writes ?? []) for (const b of right.writes ?? []) {
        if (a === b || a.startsWith(`${b}/`) || b.startsWith(`${a}/`)) writes.push([a, b]);
      }
      const resources = (left.resources ?? []).filter(resource => right.resources?.includes(resource));
      if (writes.length || resources.length) conflicts.push({ tasks: [left.id, right.id], writes, resources, bothDependencyReady: ready.has(left.id) && ready.has(right.id) });
    }
  }
  const unknownIsolation = tasks.filter(task => task.writes === undefined || task.resources === undefined).map(task => ({
    id: task.id,
    missing: [task.writes === undefined ? "writes" : null, task.resources === undefined ? "resources" : null].filter(Boolean),
  }));
  return { valid: errors.length === 0, errors, dependencyReady, conflicts, unknownIsolation };
}

if (import.meta.main) {
  try {
    const args = process.argv.slice(2);
    if (args.length === 1 && args[0] === "--help") console.log(usage);
    else {
      if (args.length !== 1) throw new Error(usage);
      const result = checkGraph(JSON.parse(readFileSync(args[0], "utf8")));
      console.log(JSON.stringify(result, null, 2));
      if (!result.valid) process.exitCode = 1;
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
