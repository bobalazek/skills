import { afterEach, beforeEach, expect, test } from "bun:test";
import {
  existsSync,
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
import { captureSession } from "../lib/codex-session.ts";

let root: string;
const thread = "01a129b4-173f-7810-91a2-c266b3beed11";
const events = JSON.stringify({ type: "thread.started", thread_id: thread });
beforeEach(() => {
  root = realpathSync(mkdtempSync(join(tmpdir(), "skills-session-")));
});
afterEach(() => {
  rmSync(root, { recursive: true, force: true });
});

function fixture() {
  const sessions = join(root, "sessions"),
    project = join(root, "project"),
    output = join(root, "captured.jsonl");
  mkdirSync(sessions);
  mkdirSync(project);
  const source = join(sessions, `rollout-${thread}.jsonl`);
  const records = [
    { type: "session_meta", payload: { id: thread, cwd: project } },
    { type: "turn_context", payload: { model: "host-reported-model" } },
    {
      type: "response_item",
      payload: { type: "custom_tool_call_output", output: "heredoc denied before command event" },
    },
    { type: "event_msg", payload: { type: "task_complete" } },
  ];
  const save = () => writeFileSync(source, records.map((row) => JSON.stringify(row)).join("\n") + "\n");
  save();
  return { sessions, project, output, source, records, save };
}

test("captures matched native tool results and host model without turning them into a verdict", () => {
  const f = fixture();
  const result = captureSession(events, f.project, f.output, f.sessions);
  expect(result).toMatchObject({ state: "captured", thread, taskComplete: true, models: ["host-reported-model"] });
  expect(readFileSync(f.output, "utf8")).toBe(readFileSync(f.source, "utf8"));
  expect(result.sha256).toMatch(/^[a-f0-9]{64}$/);
  expect(captureSession(events, f.project, f.output, f.sessions).state).toBe("unavailable");
  expect(readFileSync(f.output, "utf8")).toContain("heredoc denied");
});

test("keeps incomplete native execution distinct from a completed task", () => {
  const f = fixture();
  f.records.pop();
  f.save();
  expect(captureSession(events, f.project, f.output, f.sessions)).toMatchObject({
    state: "captured",
    taskComplete: false,
  });
});

test("refuses missing, ambiguous, mismatched, malformed and aliased session evidence", () => {
  const f = fixture();
  const unavailable = (raw = events) => {
    expect(captureSession(raw, f.project, f.output, f.sessions).state).toBe("unavailable");
    expect(existsSync(f.output)).toBe(false);
  };
  unavailable("{}");
  unavailable(JSON.stringify({ type: "thread.started", thread_id: "../escape" }));
  unavailable(
    events + "\n" + JSON.stringify({ type: "thread.started", thread_id: "01a129b4-173f-7810-91a2-c266b3beed12" }),
  );
  const duplicate = join(f.sessions, `duplicate-${thread}.jsonl`);
  writeFileSync(duplicate, readFileSync(f.source));
  unavailable();
  rmSync(duplicate);
  writeFileSync(f.source, JSON.stringify({ type: "session_meta", payload: { id: "another-thread", cwd: f.project } }));
  unavailable();
  writeFileSync(f.source, JSON.stringify({ type: "session_meta", payload: { id: thread, cwd: root } }));
  unavailable();
  writeFileSync(f.source, "truncated");
  unavailable();
  rmSync(f.source);
  unavailable();
  const external = join(root, "external.jsonl");
  writeFileSync(external, "private unrelated evidence");
  symlinkSync(external, f.source);
  unavailable();
});
