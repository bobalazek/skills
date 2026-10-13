# Skill evals

The collection uses a custom TypeScript/Bun runner around Codex CLI. Promptfoo is not installed or configured. The runner executes and records trials; it does not automatically grade the prose expectations or call an LLM judge.

## What each check establishes

| Check | Runs a model? | Evidence produced |
| --- | --- | --- |
| `bun run check` | No | Package metadata, local links, resource boundaries/catalogs, TypeScript and Biome |
| `bun test` | No | Tooling behavior, fixture integrity, timeouts, cancellation and trace handling; runner integration tests use a fake Codex executable |
| `bun run check:install` | No task execution | Complete installed copies and Codex/OpenCode discovery; does not demonstrate skill behavior |
| `bun run eval` | Yes | Isolated Codex responses, tool traces, source identity, timeout/exit state and unassessed criteria |
| Independent assessment | Depends on evaluator | Criterion-level pass/fail/not-checked against the actual response and trace |

## Files and responsibilities

| Location | Role |
| --- | --- |
| [cases/](cases/README.md) | Read-only requests, minimal project files and evaluator expectations, split by owning domain |
| `workflows/` | Writable or multi-turn scenarios with separate setup and authority; outside the read-only runner |
| [coverage.md](coverage.md) | Index and limits of recorded behavioral evidence |
| `results/` | Dated, redacted observations tied to tested source/environment; no automatic current pass claim |
| [docs/evaluation.md](../docs/evaluation.md) | How to run, assess and retain a trial or installation check |
| `scripts/run-evals.ts` | Codex execution, fixture isolation, source snapshots and trace capture |
| `scripts/tests/` | Deterministic tests for maintainer tooling and fixture integrity |

## Run selected read-only cases

```bash
bun run eval --candidate "$PWD" --cases route-ready-spec --output /tmp/skills-eval-new
```

Case IDs stay the same across domain files. `--baseline /path/to/previous-source` runs a comparison; omitting it verifies only the candidate. `--fixtures /path/to/file.json` still accepts a custom array, and a directory loads its top-level JSON arrays. Always use a new output directory outside the supplied sources.

The output contains source snapshots, prompts, `criteria.json`, execution records, responses/traces and a comparison table. `executed` means the process completed under the runner's checks; criteria remain `not checked` until separately assessed. Keep expectations out of the executor's context. Model and token/spend limits are not inferred from a timeout.

## Writable and multi-turn scenarios

- [Shared-rule implementation](workflows/implement-change.json) and [intent/selection correction](workflows/implement-intent-selection.json).
- [Diagnosis and correction](workflows/diagnose-issue.json) and [automated guard](workflows/automate-code-checks.json).
- [Video collaboration](workflows/video-human-story-handoff.json).
- [Feedback correction](workflows/feedback-correction.md) and [saved-session continuation](workflows/session-continuation.md).

Use their documented setup and permitted actions. Their integrity is checked by `bun test`; they are not automatically executed by `bun run eval` or CI.
