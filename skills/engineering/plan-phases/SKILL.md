---
name: plan-phases
description: "Turn agreed project or feature scope into outcome-based phases with dependencies, inputs, outputs, and exit criteria. Use for milestone planning, not creating individual implementation tasks."
---

# Plan phases

Produce a phase plan that shows how the agreed outcome becomes deliverable. A phase owns a usable result or a prerequisite that makes later work possible; file types and arbitrary weeks are poor phase boundaries.

This skill owns the milestone dependency graph and its acceptance gates. The spec remains authoritative for required behavior; tasks own executable work, concrete ownership/isolation, and checks. Use a separate phase plan when coordination, staged delivery, or meaningful prerequisites justify it. For a small change, the accepted spec or brief may already give enough sequence to create tasks or implement directly.

## Read the accepted scope

Use the current spec, technical decisions, constraints, and existing phase plan. Inspect the relevant foundation and delivery path. Preserve accepted decisions and revise only what changed. If scope is still disputed, identify the decision instead of making a precise schedule from an assumption.

Resolve a consequential planning choice with an adaptive question about the affected outcome. Inspect factual prerequisites first; research or prototype work belongs in the graph only when its result could change feasibility, ordering, or acceptance. A broader request to grill the direction belongs to `challenge-proposal`; phase planning does not reopen settled product choices.

For a new project, establish missing foundations before their consumers and reuse suitable starters or platforms. For an existing system, account for preserved behavior, compatibility windows, data migration, operational ownership, and rollback needs. Include design, research, or prototype work only when it resolves a prerequisite.

## Design the sequence

Group work into independently checkable outcomes. For each phase, state its goal, required input artifacts, produced results, prerequisites, affected ownership, and observable exit criteria. Cover integration and the requested delivery target explicitly. Keep optional follow-up work separate from release blockers.

Order shared contracts and foundations before dependent work. Show which phases could run together after their prerequisites are accepted, separately from which are ready now. Name the prerequisite artifact or demonstrated result and its acceptance evidence; a planned deliverable or worker-complete label is insufficient. Parallel branches need outputs that can be reconciled without conflicting writes or shared-state assumptions; an unfinished foundation can be their named prerequisite. A phase graph describes dependencies; concrete task isolation and host support determine whether workers can run concurrently.

A phase, task, and PR are different boundaries. One milestone can require several tasks and PRs; a shared prerequisite task can support more than one milestone. A PR groups a coherent reviewable change and may contain several tasks or one independently useful part of a larger task, with remaining work still open. Do not number milestones as PRs or infer milestone completion from one merged PR. Preserve traceability to the phase exits and spec criteria when grouping work.

Use [the phase-plan template](references/phases.template.md) for a durable plan. Do not estimate dates or effort without assumptions about scope, staffing, and dependencies. Unknown feasibility becomes a bounded investigation; it does not become a supposedly executable build phase.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Completion

Verify that the graph is acyclic, each result contributes to agreed scope, exits are observable, and all delivery requirements have an owner. Show which phase is ready now and which prerequisites remain unresolved.

Stop with the milestone plan when that is the requested outcome. Next: `create-tasks` for the selected phase or agreed scope that has enough detail for decomposition. Hand forward the phase goal, criteria, dependency acceptance state, decisions, and source artifacts. Dependent tasks may be planned, but cannot start before their prerequisites are accepted. Do not create every possible task when later phases remain uncertain or start execution unless the request includes it.
