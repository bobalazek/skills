---
name: plan-phases
description: "Turn agreed project or feature scope into outcome-based phases with dependencies, inputs, outputs, and exit criteria. Use for milestone planning, not creating individual implementation tasks."
---

# Plan phases

## Use this skill

Use this to turn agreed scope into deliverable milestones when coordination, staged delivery or meaningful prerequisites need a plan. Own the milestone dependency graph and acceptance gates; reuse the accepted spec, technical decisions and existing plan without reopening settled choices. A phase owns a usable result or enabling prerequisite, not a file type or arbitrary week.

Use `write-spec` for unsettled required behavior, `challenge-proposal` to question a direction, or `create-tasks` for executable work and concrete ownership/isolation. A bounded change may already have enough sequence for tasks or implementation and need no separate phase plan.

## Read the accepted scope

Use the current spec, technical decisions, constraints, and existing phase plan. Inspect the relevant foundation and delivery path. Preserve accepted decisions and revise only what changed. If scope is still disputed, identify the decision instead of making a precise schedule from an assumption.

Resolve a consequential planning choice with an adaptive question about the affected outcome. Inspect factual prerequisites first; research or prototype work belongs in the graph only when its result could change feasibility, ordering or acceptance.

For a new project, establish missing foundations before their consumers and reuse suitable starters or platforms. For an existing system, account for preserved behavior, compatibility windows, data migration, operational ownership, and rollback needs. Include design, research, or prototype work only when it resolves a prerequisite.

## Design the sequence

Group work into independently checkable outcomes. For each phase, state its goal, required input artifacts, produced results, prerequisites, affected ownership, and observable exit criteria. Cover integration and the requested delivery target explicitly. Keep optional follow-up work separate from release blockers.

Order shared contracts and foundations before dependent work. Show which phases could run together after their prerequisites are accepted, separately from which are ready now. Name the prerequisite artifact or demonstrated result and its acceptance evidence; a planned deliverable or worker-complete label is insufficient. Parallel branches need outputs that can be reconciled without conflicting writes or shared-state assumptions; an unfinished foundation can be their named prerequisite. A phase graph describes dependencies; concrete task isolation and host support determine whether workers can run concurrently.

Use a compact Mermaid or existing tracker graph when branches matter, showing dependency edges and where outputs must join for integration and independent acceptance. Distinguish parallel phases from parallel tasks inside one phase. Each capability phase includes its relevant build, verification and review work; a phase need not correspond to one lifecycle stage. If a prerequisite fails or changes, block its consumers, preserve unaffected accepted outputs, and update readiness before continuing. Check a diagram in an available renderer and state any rendering gap.

A phase, task, and PR are different boundaries. One milestone can require several tasks and PRs; a shared prerequisite task can support more than one milestone. A PR groups a coherent reviewable change and may contain several tasks or one independently useful part of a larger task, with remaining work still open. Do not number milestones as PRs or infer milestone completion from one merged PR. Preserve traceability to the phase exits and spec criteria when grouping work.

Use [the phase-plan template](references/phases.template.md) for a durable plan. Do not estimate dates or effort without assumptions about scope, staffing, and dependencies. Unknown feasibility becomes a bounded investigation; it does not become a supposedly executable build phase.

## Verify and return the plan

Verify that the graph is acyclic, each result contributes to agreed scope, exits are observable, and all delivery requirements have an owner. Show which phase is ready now and which prerequisites remain unresolved.

Before acceptance, have a separate agent in fresh context challenge the graph against raw accepted scope, decisions, prerequisite evidence and the candidate plan, without the author's conversation or preferred conclusion. Ask it to find missing dependencies, unsupported readiness and unowned exits. Reconcile findings and independently recheck affected phases after fixes. Retain the returned reviewer/session identity, evaluated artifact/revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

Match the requested audience, tone and depth, then project conventions. Return the milestone graph, its purpose, current readiness, future parallel candidates, checks and unresolved prerequisites. Update the existing authorized plan and decision locations instead of creating competing summaries. For authorized PR work, include relevant scenario/evidence checks and independent findings, refreshing affected proof after edits.

## Next steps

Use `create-tasks` for the selected phase or agreed scope that has enough detail for decomposition. Pass the goal, criteria, dependency acceptance state, decisions and source artifacts. Dependent tasks may be planned, but cannot execute before prerequisites are accepted. If an unresolved premise blocks planning, use `research-topic` for discoverable facts or `build-prototype` for runtime feasibility; keep the affected outcome and question bounded.

Check skill availability and describe the plain action when absent. Stop with the requested milestone plan or continue ready work already authorized. Do not create every possible task while later phases remain uncertain, restart accepted discovery, or begin execution from planning authority alone.
