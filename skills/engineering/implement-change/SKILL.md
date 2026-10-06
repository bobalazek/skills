---
name: implement-change
description: "Implement an agreed feature, fix, refactor, or dependency-ready task batch using repository conventions and scoped verification. Use when the requested output is working code, not a plan or review report."
---

# Implement change

Complete the authorized change and its relevant verification. A clear local fix does not need a new spec, phase plan, or interview.

## Establish the working contract

Read local instructions and the affected surface's conventions. Use accepted tasks, spec criteria, design artifacts, known checks, and relevant decisions. Inspect the working tree and preserve unrelated edits. Establish the current baseline; distinguish pre-existing failures from introduced regressions.

Before starting or resuming a task, compare its criteria and input versions with the current authoritative requirements and dependency outputs. If they changed, identify the affected work and resolve consequential differences before executing it. Retain valid results from unaffected work; do not quietly implement a superseded task because its old checks still pass.

Trace impact proportional to risk. For a leaf edit, inspect its nearest consumer and check. For shared interfaces, permissions, schemas, stateful flows, or integrations, follow affected callers, data contracts, failure paths, and consumers before editing. Use an available project index when repository instructions require it.

## Make the smallest complete change

Follow the local module, data-access, typing, error, logging, dependency, and UI patterns. Reuse existing facilities before adding a layer or package. Fix the shared cause rather than patching only the reported caller. Keep adjacent cleanup out unless it is necessary to leave a coherent result.

Select one task or the agreed ready batch. For work spanning phases, follow the accepted dependency graph and phase exits. If branches need coordination and no graph exists, record a compact dependency graph in the existing work record; use `plan-phases` or `create-tasks` when decomposition itself needs work. Keep a local fix direct.

Shared contracts and migrations precede consumers. Concurrent workers require accepted prerequisites, isolated writes/state and check environments, and clear ownership; use available host isolation rather than assuming it exists. Show what is ready now separately from future parallel candidates. Integrate and verify the combined result before accepting a phase exit. Preserve unaffected outputs if a branch fails, block its consumers, and recompute ready work after accepted outputs or requirements change.

For uncertain business behavior, stop the dependent work and resolve the specific missing decision. For technical uncertainty, inspect or run a bounded experiment. Do not replace the user's product choices with implementation preferences.

Load [the change-risk playbook](references/change-risks.playbook.md) for a task batch or resumed work, or when module ownership, collection processing, queries, concurrency, error handling, a refactor, migration, shared UI, webhook, or stateful boundary makes those checks relevant.

For AI or agent behavior, implement the accepted data/tool permissions in trusted code, validate outputs at use, bound retries and spend, and preserve cancellation and recovery. Exercise required approval/evaluation gates on the actual action path; a prompt or declared workflow node is not enforcement. Retain relevant model, prompt, tool and evaluation versions with the result.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Verify the actual result

Choose observable evidence from the acceptance criteria before changing behavior, so a useful baseline can be preserved. Use screenshots for visible states, interaction traces for user flows, comparable measurements for performance/data claims, or focused check output for code and document changes. Record the relevant input, environment, baseline, and tested revision; a build alone cannot demonstrate a repaired behavior.

Use the smallest relevant reproduction, regression test, request, build, browser path, or artifact check. There is no required test-first order. Cover meaningful failures and impacted consumers; format only touched files and use the repository's documented scoped commands.

Match test boundaries to the claim: unit checks for isolated rules; integration checks for real data/framework/service boundaries; contract checks for supported consumers; viable end-to-end checks for critical journeys. Tie acceptance to the requested observable outcome and include relevant rejection/regression cases. Reuse the existing harness and valid checks; mocked I/O, a build or a test count cannot establish an unexercised boundary. Isolate fixtures and wait for operation-specific completion before cleanup. State unavailable required proof explicitly instead of inventing a passing layer.

Inspect command exit status and output. Before completing the task, compare the current authoritative criteria and dependency outputs with those used at intake. Reconcile changed scope before claiming completion, refresh affected evidence, and inspect the final diff against the accepted criteria and observed behavior. Resolve failures caused by the change and rerun affected checks. Record unavailable checks and pre-existing blockers without claiming completion for them.

Update affected setup/behavior docs and material decisions or learnings in their existing locations. Report criteria demonstrated, failed, or not checked, with inspected results and remaining gaps. Preserve useful artifacts for review; redact sensitive content before sharing. When PR work is authorized, include the evidence there as concise results or verified accessible links. A local file path is not an uploaded attachment. Do not commit, push, send messages, or deploy unless the user or applicable repository workflow authorizes it.

Next: name the next missing result and its skill, carrying the current revision, criteria, evidence and blockers. Use `verify-change` for missing acceptance proof, `review-code` or `review-interface` for the relevant independent assessment, `explain-pr` for a needed reviewer-facing explanation, or `ship-change` when ready and delivery is authorized. For a continuing phase plan, identify the next ready task/batch and the accepted outputs that unblock it. Reuse valid evidence and completed reviews. A bounded implementation request can finish here; describe the plain next action if its skill is unavailable.
