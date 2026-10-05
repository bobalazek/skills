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

Select one task or the agreed ready batch. Shared contracts and migrations precede consumers. Concurrent workers require ready dependencies, isolated writes/state, and clear ownership; use available host isolation rather than assuming it exists. Integrate and verify their combined result.

For uncertain business behavior, stop the dependent work and resolve the specific missing decision. For technical uncertainty, inspect or run a bounded experiment. Do not replace the user's product choices with implementation preferences.

Load [the change-risk playbook](references/change-risks.playbook.md) for a task batch or resumed work, or when a refactor, migration, shared UI, webhook, or stateful boundary makes those checks relevant.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Verify the actual result

Choose observable evidence from the acceptance criteria before changing behavior, so a useful baseline can be preserved. Use screenshots for visible states, interaction traces for user flows, comparable measurements for performance/data claims, or focused check output for code and document changes. Record the relevant input, environment, baseline, and tested revision; a build alone cannot demonstrate a repaired behavior.

Use the smallest relevant reproduction, regression test, request, build, browser path, or artifact check. There is no required test-first order. Cover meaningful failures and impacted consumers; format only touched files and use the repository's documented scoped commands.

Inspect command exit status and output. Before completing the task, compare the current authoritative criteria and dependency outputs with those used at intake. Reconcile changed scope before claiming completion, refresh affected evidence, and inspect the final diff against the accepted criteria and observed behavior. Resolve failures caused by the change and rerun affected checks. Record unavailable checks and pre-existing blockers without claiming completion for them.

Update affected setup/behavior docs and material decisions or learnings in their existing locations. Report criteria demonstrated, failed, or not checked, with inspected results and remaining gaps. Preserve useful artifacts for review; redact sensitive content before sharing. When PR work is authorized, include the evidence there as concise results or verified accessible links. A local file path is not an uploaded attachment. Do not commit, push, send messages, or deploy unless the user or applicable repository workflow authorizes it.

Next: `verify-change` for a dedicated acceptance/evidence pass; `review-code` for independent change review; `explain-pr` for a reviewer-facing explanation; `ship-change` when delivery is requested. Reuse valid evidence instead of repeating completed checks.
