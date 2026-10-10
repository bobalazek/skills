---
name: implement-change
description: "Implement an agreed feature, fix, refactor, or dependency-ready task batch using repository conventions and scoped verification. Use when the requested output is working code, not a plan or review report."
---

# Implement change

## Use this skill

Deliver working code for an agreed feature, fix, refactor or ready task batch. Reuse accepted tasks, specifications, design and valid proof; a clear local fix needs no new spec, phase plan or interview. Use `address-review-feedback` to reconcile supplied review findings when that is the requested result, `diagnose-issue` for an unknown cause, `write-spec` for unsettled behavior and `create-tasks` when decomposition is the missing result.

## Establish the working contract

Read local instructions, the affected surface's conventions and maintained surrounding code before choosing paths or abstractions. Use accepted tasks, spec criteria, design artifacts, known checks, and relevant decisions. Inspect the working tree and preserve unrelated edits. Establish the current baseline; distinguish pre-existing failures from introduced regressions.

Follow written repository rules, then consistent surrounding code; use language/framework best practices only where neither settles the choice. Resolve consequential conflicts through `define-project-conventions` when available, or a scoped decision. Routine work needs no new handbook or planning stage.

Before starting or resuming a task, compare its criteria and input versions with the current authoritative requirements and dependency outputs. If they changed, identify the affected work and resolve consequential differences before executing it. Retain valid results from unaffected work; do not quietly implement a superseded task because its old checks still pass.

Trace impact proportional to risk. For a leaf edit, inspect its nearest consumer and check. For shared interfaces, permissions, schemas, stateful flows, or integrations, follow affected callers, data contracts, failure paths, and consumers before editing. Use an available project index when repository instructions require it.

## Select and coordinate ready work

Select one task or the agreed ready batch. For work spanning phases, follow the accepted dependency graph and phase exits. If branches need coordination and no graph exists, record a compact dependency graph in the existing work record; use `plan-phases` or `create-tasks` when decomposition itself needs work. Keep a local fix direct.

Shared contracts and migrations precede consumers. Concurrent workers require accepted prerequisites, isolated writes/state and check environments, and clear ownership; use available host isolation rather than assuming it exists. Show what is ready now separately from future parallel candidates. Integrate and verify the combined result before accepting a phase exit. Preserve unaffected outputs if a branch fails, block its consumers, and recompute ready work after accepted outputs or requirements change.

For uncertain business behavior, stop the dependent work and resolve the specific missing decision. For technical uncertainty, inspect or run a bounded experiment. Do not replace the user's product choices with implementation preferences.

## Check risks before editing

Load [the change-risk playbook](references/change-risks.playbook.md) for a task batch or resumed work, or when module ownership, collection processing, queries, concurrency, error handling, a refactor, migration, shared UI, webhook, or stateful boundary makes those checks relevant.

Choose observable evidence from the acceptance criteria before changing behavior, so a useful baseline can be preserved. Use screenshots for visible states, interaction traces for user flows, comparable measurements for performance/data claims, or focused check output for code and document changes. Record the relevant input, environment, baseline, and tested revision; a build alone cannot demonstrate a repaired behavior.

Do not commit, push, send messages, mutate production data or deploy unless the user or applicable repository workflow authorizes it. The playbook's migration and reversibility checks apply before exposing consequential changes.

## Make the smallest complete change

Follow the local module, data-access, typing, error, logging, dependency, and UI patterns. Before adding a function, helper, component, layer or dependency, look for an existing owner and inspect its contract, callers and tests. Reuse or extend it when the responsibility fits; similar syntax alone does not justify coupling unrelated behavior. Check accepted work and existing issues before creating parallel implementations or duplicate tasks. Fix the shared cause rather than patching only the reported caller. Keep adjacent cleanup out unless it is necessary to leave a coherent result.

For AI or agent behavior, implement the accepted data/tool permissions in trusted code, validate outputs at use, bound retries and spend, and preserve cancellation and recovery. Exercise required approval/evaluation gates on the actual action path; a prompt or declared workflow node is not enforcement. Retain relevant model, prompt, tool and evaluation versions with the result.

## Verify the actual result

Use the smallest relevant reproduction, regression test, request, build, browser path, or artifact check. There is no required test-first order. Cover meaningful failures and impacted consumers; format only touched files and use the repository's documented scoped commands.

Run applicable configured static checks before subjective review. Enforce uncovered mechanically checkable rules or recurring issues through existing tooling within the agreed scope, with valid-case and violation checks; do not replace practical guards with prose reminders.

Match test boundaries to the claim:

| Claim | Suitable check when relevant |
| --- | --- |
| Isolated rule | Unit check |
| Real data/framework/service boundary | Integration check |
| Supported consumer contract | Contract check |
| Critical user journey | Viable end-to-end check |

Tie acceptance to the requested observable outcome and include relevant rejection/regression cases. Reuse the existing harness and valid checks; mocked I/O, a build or a test count cannot establish an unexercised boundary. Isolate fixtures and wait for operation-specific completion before cleanup. State unavailable required proof explicitly instead of inventing a passing layer.

Inspect command exit status and output. Before completing the task, compare the current authoritative criteria and dependency outputs with those used at intake. Reconcile changed scope before claiming completion, refresh affected evidence, and inspect the final diff against the accepted criteria and observed behavior. Resolve failures caused by the change and rerun affected checks. Record unavailable checks and pre-existing blockers without claiming completion for them.

Before acceptance, a separate agent in fresh context must challenge the integrated result using accepted criteria, the candidate revision, raw source/behavior evidence and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

## Report the result

Update affected setup/behavior docs and material decisions or learnings in their existing locations. Follow the project's format and requested depth; report the outcome, purpose, criteria demonstrated/failed/unchecked, actual checks and remaining gaps. Preserve useful artifacts and redact sensitive content before sharing. Include evidence and independent findings when opening authorized PRs as concise results or verified accessible links; refresh affected proof after edits. A local file path is not an uploaded attachment.

## Next steps

Carry the current revision, criteria, evidence and blockers to `verify-change` for missing acceptance proof, `review-code` or `review-interface` for an outstanding independent assessment, `explain-pr` for a needed explanation, or `ship-change` when ready and delivery is authorized. For a continuing phase plan, identify the next ready task/batch and its accepted prerequisites. Reuse valid evidence and completed reviews. A bounded implementation request can finish here; use the plain action if its skill is unavailable.
