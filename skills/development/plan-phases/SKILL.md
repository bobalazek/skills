---
name: plan-phases
description: "Turn agreed project or feature scope into outcome-based phases with dependencies, inputs, outputs, and exit criteria. Use for milestone planning, not creating individual implementation tasks."
---

# Plan phases

Produce a phase plan that shows how the agreed outcome becomes deliverable. A phase owns a usable result or a prerequisite that makes later work possible; file types and arbitrary weeks are poor phase boundaries.

## Read the accepted scope

Use the current spec, technical decisions, constraints, and existing phase plan. Inspect the relevant foundation and delivery path. Preserve accepted decisions and revise only what changed. If scope is still disputed, identify the decision instead of making a precise schedule from an assumption.

For a new project, establish missing foundations before their consumers and reuse suitable starters or platforms. For an existing system, account for preserved behavior, compatibility windows, data migration, operational ownership, and rollback needs. Include design, research, or prototype work only when it resolves a prerequisite.

## Design the sequence

Group work into independently checkable outcomes. For each phase, state its goal, required input artifacts, produced results, prerequisites, affected ownership, and observable exit criteria. Cover integration and the requested delivery target explicitly. Keep optional follow-up work separate from release blockers.

Order shared contracts and foundations before dependent work. Declare a parallel branch only when its inputs are ready and its outputs can be reconciled without conflicting writes or shared-state assumptions. A phase graph describes dependencies; host support determines whether workers can run concurrently.

Use [the phase-plan template](references/phases.template.md) for a durable plan. Do not estimate dates or effort without assumptions about scope, staffing, and dependencies. Unknown feasibility becomes a bounded investigation; it does not become a supposedly executable build phase.

## Completion

Verify that the graph is acyclic, each result contributes to agreed scope, exits are observable, and all delivery requirements have an owner. Show which phase is ready now and which prerequisites remain unresolved.

Next: `create-tasks` for the selected ready phase or agreed scope. Hand forward the phase goal, criteria, dependencies, decisions, and source artifacts. Do not create every possible task when later phases remain uncertain.
