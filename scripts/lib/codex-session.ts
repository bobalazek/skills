import { createHash } from "node:crypto";
import { lstatSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { inside } from "./skill-packages.ts";

// Exec events omit some nested tool results; retain the native record when explicitly requested.
export function captureSession(rawEvents: string, project: string, output: string, sessionsRoot: string) {
  try {
    const events = rawEvents
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line));
    const threads = [
      ...new Set(events.filter((event) => event?.type === "thread.started").map((event) => event.thread_id)),
    ];
    const thread = threads[0];
    if (threads.length !== 1 || typeof thread !== "string" || !/^[a-f0-9-]{36}$/.test(thread))
      throw new Error("Expected one observed Codex thread ID.");
    const root = realpathSync(sessionsRoot);
    const paths = [
      ...new Bun.Glob(`**/*${thread}.jsonl`).scanSync({ cwd: root, absolute: true, followSymlinks: false }),
    ];
    if (paths.length !== 1) throw new Error(`Expected one native session file, found ${paths.length}.`);
    const path = paths[0];
    if (!lstatSync(path).isFile() || !inside(root, realpathSync(path)))
      throw new Error("Native session must be a regular file inside the session directory.");
    const raw = readFileSync(path, "utf8");
    const records = raw
      .trim()
      .split("\n")
      .map((line) => JSON.parse(line));
    const metadata = records.filter((record) => record?.type === "session_meta");
    if (
      metadata.length !== 1 ||
      metadata[0].payload?.id !== thread ||
      typeof metadata[0].payload?.cwd !== "string" ||
      realpathSync(metadata[0].payload.cwd) !== realpathSync(project)
    )
      throw new Error("Native session identity or working directory does not match this trial.");
    writeFileSync(output, raw, { flag: "wx", mode: 0o600 });
    return {
      state: "captured",
      thread,
      path: output,
      sha256: createHash("sha256").update(raw).digest("hex"),
      taskComplete: records.some((record) => record?.type === "event_msg" && record.payload?.type === "task_complete"),
      models: [
        ...new Set(
          records
            .filter((record) => record?.type === "turn_context")
            .map((record) => record.payload?.model)
            .filter((model): model is string => typeof model === "string"),
        ),
      ],
    };
  } catch (error) {
    return { state: "unavailable", reason: String(error) };
  }
}
