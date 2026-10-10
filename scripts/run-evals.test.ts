import { afterEach, beforeEach, expect, test } from "bun:test";
import {
  chmodSync,
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
import { join, resolve } from "node:path";
import { boundedInteger, execute, inspectTrace, main, parseCases, requestFor, selectCases } from "./run-evals.ts";

let root: string;
const sample = {
  id: "sample",
  skill: "explain-codebase",
  prompt: "Explain this.",
  files: {},
  expected: ["PRIVATE-RUBRIC"],
};
beforeEach(() => {
  root = realpathSync(mkdtempSync(join(tmpdir(), "skills-evals-")));
});
afterEach(() => {
  rmSync(root, { recursive: true, force: true });
});

test("validates raw fixture paths and rejects settings, traversal and duplicate IDs", () => {
  expect(parseCases([sample])[0]).toEqual(sample);
  for (const path of [
    "../escape",
    "/absolute",
    "C:\\escape",
    "a//b",
    "a/./b",
    ".git/config",
    ".agents/skills/x/SKILL.md",
    ".codex/config.toml",
  ]) {
    expect(() => parseCases([{ ...sample, files: { [path]: "bad" } }])).toThrow("Unsafe fixture");
  }
  for (const value of [
    null,
    [],
    [sample, sample],
    [{ ...sample, expected: [] }],
    [{ ...sample, invocation: "wrong" }],
    [{ ...sample, shouldLoad: ["x"], shouldNotLoad: ["x"] }],
  ]) {
    expect(() => parseCases(value)).toThrow();
  }
  expect(() => selectCases([sample], "sample,missing")).toThrow();
  expect(() => selectCases([sample], "sample,sample")).toThrow();
});

test("keeps assertions out of requests and does not name implicit or unavailable skills", () => {
  expect(requestFor(sample, [sample.skill])).toContain("Use $explain-codebase");
  expect(requestFor(sample, [])).not.toContain("$explain-codebase");
  const implicit = requestFor({ ...sample, invocation: "implicit", shouldLoad: [sample.skill] }, [sample.skill]);
  expect(implicit).not.toContain("explain-codebase");
  expect(implicit).not.toContain("PRIVATE-RUBRIC");
  expect(implicit).toContain(sample.prompt);
});

test("bounds selected work without coercing malformed numbers", () => {
  expect(boundedInteger("3", 3)).toBe(3);
  for (const value of ["0", "4", "1e0", "1.5", "-1", "NaN"]) expect(() => boundedInteger(value, 3)).toThrow();
});

test("only successful observed output supplies positive read evidence; completion is separate", () => {
  const body = "---\nname: sample\n---\n# Sample\n";
  const event = {
    type: "item.completed",
    item: { id: "call-1", type: "command_execution", exit_code: 0, aggregated_output: body },
  };
  const trace = inspectTrace(
    `${JSON.stringify(event)}\n${JSON.stringify({ type: "turn.completed", usage: { output_tokens: 7 } })}`,
    { sample: body },
  );
  expect(trace.observedSkillReads).toEqual([{ skill: "sample", event: "call-1" }]);
  expect(trace.completed).toBe(true);
  expect(trace.usage).toEqual([{ output_tokens: 7 }]);
  expect(
    inspectTrace(JSON.stringify({ type: "agent_message", text: body }), { sample: body }).observedSkillReads,
  ).toEqual([]);
  event.item.exit_code = 1;
  expect(inspectTrace(JSON.stringify(event), { sample: body }).observedSkillReads).toEqual([]);
  expect(inspectTrace('{"type":"turn.failed"}\ntruncated', {}).failed).toBe(true);
  expect(inspectTrace('{"type":"turn.failed"}\ntruncated', {}).malformed).toBe(1);
  expect(inspectTrace("", {}).completed).toBe(false);
});

test("reuses bounded command evidence, retains output and rejects overwriting an attempt", async () => {
  const output = join(root, "attempt");
  const result = await execute(
    [process.execPath, "-e", 'console.log("retained"); process.exit(2)'],
    root,
    output,
    1000,
  );
  expect(result.exitCode).toBe(2);
  expect(readFileSync(`${output}.stdout`, "utf8")).toBe("retained\n");
  await expect(execute([process.execPath, "-e", "process.exit(0)"], root, output, 1000)).rejects.toThrow();
  const timeout = await execute([process.execPath, "-e", "await Bun.sleep(10000)"], root, join(root, "timeout"), 80);
  expect(timeout.timedOut).toBe(true);
  expect(timeout.exitCode).not.toBe(0);
});

test("rejects source-contained and aliased output or existing evidence before launching the host", async () => {
  const fixtures = join(root, "cases.json");
  writeFileSync(fixtures, JSON.stringify([sample]));
  const args = ["--candidate", root, "--baseline", root, "--fixtures", fixtures, "--cases", sample.id];
  await expect(main([...args, "--output", join(root, "evidence")])).rejects.toThrow("outside");
  expect(existsSync(join(root, "evidence"))).toBe(false);
  const source = join(root, "source");
  mkdirSync(source);
  const alias = join(root, "alias");
  symlinkSync(source, alias);
  const independent = ["--candidate", source, "--baseline", source, "--fixtures", fixtures, "--cases", sample.id];
  await expect(main([...independent, "--output", join(alias, "evidence")])).rejects.toThrow("outside");
  const existing = join(root, "existing");
  mkdirSync(existing);
  writeFileSync(join(existing, "retained"), "untouched");
  await expect(main([...independent, "--output", existing])).rejects.toThrow();
  expect(readFileSync(join(existing, "retained"), "utf8")).toBe("untouched");
});

test("runs a full comparison against a fake host, preserving failed attempts without claiming behavior", async () => {
  const source = join(root, "source");
  const skill = join(source, "skills/engineering/explain-codebase");
  mkdirSync(skill, { recursive: true });
  writeFileSync(
    join(skill, "SKILL.md"),
    "---\nname: explain-codebase\ndescription: Explain code.\n---\n# Explain codebase\n",
  );
  const bin = join(root, "bin");
  mkdirSync(bin);
  const host = join(bin, "codex");
  writeFileSync(
    host,
    `#!${process.execPath}
import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const args = process.argv.slice(2);
if (args.includes("--version")) { console.log("fixture-host"); process.exit(0); }
const project = args[args.indexOf("-C") + 1];
const installed = join(project, ".agents/skills");
if (args.includes("prompt-input")) {
  const text = "- \u0060r0\u0060 = \u0060" + installed + "\u0060\\n" + readdirSync(installed).map(name => "- " + name + ": Description (file: r0/" + name + "/SKILL.md)").join("\\n");
  console.log(JSON.stringify([{content:[{text}]}])); process.exit(0);
}
if (process.env.EVAL_TEST_HANG) { writeFileSync(process.env.EVAL_TEST_HANG, String(process.pid)); await Bun.sleep(30000); }
if (args.at(-1).includes("PRIVATE-RUBRIC")) throw new Error("rubric leaked");
if (args.at(-1).includes("FAIL-FIXTURE")) { console.log(JSON.stringify({type:"turn.failed"})); process.exit(2); }
writeFileSync(args[args.indexOf("-o")+1], "Fixture result\\n");
console.log(JSON.stringify({type:"turn.completed",usage:{output_tokens:3}}));
`,
  );
  chmodSync(host, 0o700);
  const fixtures = join(root, "cases.json");
  writeFileSync(fixtures, JSON.stringify([sample, { ...sample, id: "failure", prompt: "FAIL-FIXTURE" }]));
  const output = join(root, "evidence");
  const child = Bun.spawn(
    [
      process.execPath,
      resolve(import.meta.dir, "run-evals.ts"),
      "--candidate",
      source,
      "--baseline",
      source,
      "--fixtures",
      fixtures,
      "--cases",
      "failure,sample",
      "--output",
      output,
    ],
    { env: { ...process.env, PATH: `${bin}:${process.env.PATH}` }, stdout: "ignore", stderr: "pipe" },
  );
  const error = await new Response(child.stderr).text();
  expect(await child.exited, error).toBe(1);
  const report = JSON.parse(readFileSync(join(output, "summary.json"), "utf8"));
  expect(report.state).toBe("failed");
  expect(report.assessment).toBe("not checked");
  expect(report.attempts.map((item: { state: string }) => item.state)).toEqual([
    "failed",
    "failed",
    "executed",
    "executed",
  ]);
  expect(readFileSync(join(output, "sample-candidate-1/request.txt"), "utf8")).not.toContain("PRIVATE-RUBRIC");
  expect(existsSync(join(output, "sample-candidate-1/project/criteria.json"))).toBe(false);
  expect(readFileSync(join(output, "comparison.md"), "utf8")).toContain("Not checked");
  for (const phase of ["discovery", "model"]) {
    const cancelled = join(root, `cancelled-${phase}`);
    const ready = join(root, `ready-${phase}.pid`);
    const interrupted = Bun.spawn(
      [
        process.execPath,
        resolve(import.meta.dir, "run-evals.ts"),
        "--candidate",
        source,
        "--baseline",
        source,
        "--fixtures",
        fixtures,
        "--cases",
        "sample",
        "--output",
        cancelled,
      ],
      {
        env: { ...process.env, PATH: `${bin}:${process.env.PATH}`, EVAL_TEST_HANG: ready },
        stdout: "ignore",
        stderr: "ignore",
        timeout: 5000,
        killSignal: "SIGKILL",
      },
    );
    try {
      const deadline = Date.now() + 3000;
      const gate = phase === "model" ? ready : join(cancelled, "sample-baseline-1/discovery.stdout");
      while (!existsSync(gate) && Date.now() < deadline) await Bun.sleep(1);
      expect(existsSync(gate)).toBe(true);
      interrupted.kill("SIGTERM");
      expect(await interrupted.exited).toBe(143);
      const result = JSON.parse(readFileSync(join(cancelled, "summary.json"), "utf8"));
      expect(result.state).toBe("interrupted");
      expect(result.attempts).toHaveLength(1);
      expect(result.attempts[0].interrupted).toBe("SIGTERM");
    } finally {
      if (interrupted.exitCode === null) interrupted.kill("SIGKILL");
      if (existsSync(ready)) {
        try {
          process.kill(Number(readFileSync(ready, "utf8")), "SIGKILL");
        } catch {}
      }
    }
  }
});
