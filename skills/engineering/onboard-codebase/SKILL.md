---
name: onboard-codebase
description: "Establish a working contributor baseline for an unfamiliar repository: verified setup/checks, architecture and flow map, local conventions, operating constraints, and a concrete first-change route."
---

# Onboard codebase

## Use this skill

Use this when a contributor needs to start work in an unfamiliar repository. Produce an orientation, checked feedback path or exact setup blocker, and a bounded first-change route. Reuse current contributor documentation and known setup evidence; verify its applicability instead of repeating completed onboarding.

Use `explain-codebase` for an explanation without contributor setup, `review-code` for a correctness assessment, or `prepare-repo-for-agents` when the requested output is improved agent entry points. Onboarding does not authorize an unsolicited audit or rewrite.

## Inspect from the entry points

Read repository instructions and README, then the relevant manifests, lockfiles, runtime/configuration, tests, CI, and deployment references. Use the repository's required index/navigation tools. Identify the selected application or package in a larger workspace; do not survey unrelated projects.

Map the purpose, runtime entry points, important flows, module/state ownership, integrations, conventions and delivery path needed for the adoption goal. Trace representative code instead of trusting a directory name. Locate authoritative standards, decisions and memory indexes; distinguish current code, documented intent, observed patterns, exceptions and unknown rationale. History can explain a recorded decision, not unrecorded motives.

## Establish a feedback path

Before setup or dependency repair, inspect documented commands, relevant lifecycle/Git hooks and shared dependency locations, especially in worktrees. A command or checkout operation can trigger installation or affect another workspace; establish the actual write scope before running it. Do not reset data, replace configuration, fetch secrets or contact production merely to make a check green.

Run the safe relevant local path within the requested scope and project setup rules. A read-only request can inspect check definitions and prerequisites without executing setup; mark those commands as unrun rather than verified.

Record each important command as verified, failed, or not run with its prerequisite. Preserve unrelated work and pre-existing failures. Where setup is blocked, provide the precise missing input and a useful read-only orientation without claiming a working environment.

## Make the next change approachable

Load [the onboarding outline](references/onboarding.template.md) when a durable orientation is requested. Trace a representative feature's file/test placement, imports, reuse, data access, errors and dependency choices. Identify the owning files, consumers, applicable standards and verification path for a first bounded change. Keep accepted policy separate from merely observed patterns, and repair documentation only within the authorized scope.

Prioritize adoption blockers and preservation risks. Static source inspection can explain an API/data flow but cannot establish production performance or integrity.

## Verify and return the orientation

Check that the contributor can locate owning code and authoritative conventions, follow the important flow, and run the verified feedback path or see its exact blocker. Keep the inspected revision and scope visible.

Before acceptance, have a separate agent in fresh context challenge the orientation and first-change route against the raw request, repository sources, candidate artifact and observed checks, without the author's conversation or preferred conclusion. Reconcile unsupported claims and independently recheck affected results after fixes. Retain the returned reviewer/session identity, evaluated artifact/revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

Match the requested audience, tone and depth, then project conventions. Return the orientation, purpose, verified feedback path, first-change route and precise gaps. Update useful durable facts in existing authorized contributor/knowledge locations instead of creating competing summaries. For authorized PR work, include relevant observations and independent findings, refreshing affected evidence after edits.

## Next steps

Use `define-project-conventions` for disputed or missing rules, `prepare-repo-for-agents` for broken agent entry points, or `implement-change` for a ready first task. A separately requested health/correctness assessment belongs to `review-code`. Pass the source revision, conventions, owning files, check evidence and unmet setup prerequisite. Check skill availability and describe the plain action when absent. Stop at the requested orientation or continue ready work already authorized; a completed orientation needs no follow-up unless another result is required.
