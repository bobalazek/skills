---
name: plan-phases
description: "Turn agreed project or feature scope into outcome-based phases with dependencies, inputs, outputs and exit criteria, then break a selected phase or agreed spec into executable tasks with acceptance criteria, ownership, dependencies and verification, locally or in an authorized project-management destination. Use for milestone planning or task decomposition."
---

# Plan phases

## Use this skill

Use this to turn agreed scope into deliverable milestones when coordination, staged delivery or meaningful prerequisites need a plan, and to [break work into tasks](#break-work-into-tasks) for a selected phase or bounded spec. Own the milestone dependency graph, acceptance gates and task decomposition; reuse the accepted spec, technical decisions and existing plan without reopening settled choices. A phase owns a usable result or enabling prerequisite, not a file type or arbitrary week.

Use `write-spec` for unsettled required behavior, `challenge-proposal` to question a direction, or `implement-change` when the selected task is already executable. A bounded change may already have enough sequence to go straight to the task breakdown or implementation, with no separate phase plan.

## Read the accepted scope

Use the current spec, technical decisions, applicable project conventions, constraints, and existing phase plan. Inspect the relevant foundation and delivery path. Preserve accepted decisions and revise only what changed. If scope is still disputed, identify the decision instead of making a precise schedule from an assumption. A consequential unsettled ownership or structure rule is a prerequisite for affected work; settled conventions need no separate phase.

Resolve a consequential planning choice with an adaptive question about the affected outcome. Inspect factual prerequisites first; research or prototype work belongs in the graph only when its result could change feasibility, ordering or acceptance.

For a new project, establish missing foundations before their consumers and reuse suitable starters or platforms. For an existing system, account for preserved behavior, compatibility windows, data migration, operational ownership, and rollback needs. Include design, research, or prototype work only when it resolves a prerequisite.

## Design the sequence

Group work into independently checkable outcomes. For each phase, state its goal, required input artifacts, produced results, prerequisites, affected ownership, and observable exit criteria. Cover integration and the requested delivery target explicitly. Keep optional follow-up work separate from release blockers.

Order shared contracts and foundations before dependent work. Show which phases could run together after their prerequisites are accepted, separately from which are ready now. Name the prerequisite artifact or demonstrated result and its acceptance evidence; a planned deliverable or worker-complete label is insufficient. Parallel branches need outputs that can be reconciled without conflicting writes or shared-state assumptions; an unfinished foundation can be their named prerequisite. A phase graph describes dependencies; concrete task isolation and host support determine whether workers can run concurrently.

Use a compact Mermaid or existing tracker graph when branches matter, showing dependency edges and where outputs must join for integration and independent acceptance. Distinguish parallel phases from parallel tasks inside one phase. Each capability phase includes its relevant build, verification and review work; a phase need not correspond to one lifecycle stage. If a prerequisite fails or changes, block its consumers, preserve unaffected accepted outputs, and update readiness before continuing. Check a diagram in an available renderer and state any rendering gap.

A phase, task, and PR are different boundaries. One milestone can require several tasks and PRs; a shared prerequisite task can support more than one milestone. A PR groups a coherent reviewable change and may contain several tasks or one independently useful part of a larger task, with remaining work still open. Do not number milestones as PRs or infer milestone completion from one merged PR. Preserve traceability to the phase exits and spec criteria when grouping work.

For substantial cross-layer changes without accepted local sequencing, default to compatible database/schema foundations, shared contracts/types, backend support, then frontend/client adoption, with destructive cleanup after migration. Omit irrelevant stages and use `define-project-conventions` when missing adoption rules need settling. Give viable increments independent checks and deployment/recovery boundaries, preserving old/new consumers through the sequence. Keep genuinely coupled work together, name unavoidable deployment coupling and retain the final integration gate; a layer split or smaller diff alone does not create a safe release.

Use [the phase-plan template](references/phases.template.md) for a durable plan. Do not estimate dates or effort without assumptions about scope, staffing, and dependencies. Unknown feasibility becomes a bounded investigation; it does not become a supposedly executable build phase.

## Break work into tasks

Load for this stage: [task template](references/task.template.md) and [the graph checker](scripts/check-graph.ts).

Run this stage for a selected phase, an accepted spec or a bounded brief that needs executable tasks; a small change needs no phase plan first. The stage owns decomposition, dependencies, ownership/isolation, and task verification. Preserve the spec's behavior and existing milestone exits. Ask only unresolved questions that change scope, dependency, or acceptance; missing facts need inspection or a bounded research/experiment task with a useful result. Do not create every possible task while later phases remain uncertain.

### Preserve intent

Load the relevant accepted scope, phase exits, design decisions, repository conventions, and feedback commands. Reuse current tasks where they already meet the contract. Compare their copied criteria and dependencies with the current authoritative inputs; record source versions or snapshots where a later change would affect execution. Preserve unchanged task IDs and criteria, and revise or supersede affected work explicitly. Distinguish observed baseline from desired behavior. Do not invent missing requirements or silently change milestone acceptance criteria.

A task owns one reviewable outcome. Split work when ownership, acceptance, or dependencies are independent; combine fragments that cannot be meaningfully verified separately. Include necessary shared changes, migrations, and integration checks, keeping speculative cleanup outside the queue.

### Make tasks executable

Carry finding/task IDs, priority labels and their rationale into the existing record and next handoff. Preserve the project's scale; explain any reprioritization with changed evidence or an accepted decision. Priority does not establish dependency readiness or expand execution authority.

Use [the task template](references/task.template.md). Carry the relevant criteria into each task, with source IDs and artifact references. State owned writes, preserved contracts, prerequisites, applicable checks, and a falsifiable "done when." File locations can be investigative pointers rather than guesses presented as mandatory paths.

Choose placement, class/module boundaries and naming from written repository conventions, then maintained surrounding code; use language/framework practices only where neither settles the choice. Link useful rule sources or local code in the task. Keep paths provisional where responsibility is unsettled, and resolve only consequential gaps before marking dependent tasks ready.

### Order and isolate tasks

Order contracts, schemas, and foundations before their consumers. Confirm the graph is acyclic. Show which tasks could run together after their prerequisites are accepted, and which are ready now. Parallel execution needs isolated writes, compatible shared state/data, and suitable verification environments; otherwise serialize it. A parallel batch contains only currently ready tasks. A broader execution sequence may include dependent successors, but they cannot start before their prerequisites are accepted. Declare the acceptance evidence and remaining external inputs; dependency-free does not mean ready when access or a consequential decision is missing.

When a blocker closes, recheck the affected tasks against current criteria, accepted prerequisites, access/authority and ownership before marking them ready. Record the closure evidence and resulting readiness; an answered question or completed human action does not complete the dependent work.

When branching matters, show these dependencies in a compact Mermaid or the destination's existing graph, including integration and independent acceptance after the contributing outputs. Keep task IDs and phase exits consistent with the records; a diagram is an aid to inspecting the same task graph, not a second task store.

For a supplied JSON task snapshot, optionally run [the graph checker](scripts/check-graph.ts) using [the template's input example](references/task.template.md#optional-graph-check). It checks IDs, cycles, accepted prerequisites and declared write/resource overlaps. Inspect unknown isolation and actual environments before selecting parallel work; the helper does not schedule tasks or update a tracker.

### PR groups

Apply accepted PR-size and sequencing conventions before choosing groups, using the cross-layer default in [Design the sequence](#design-the-sequence) when no local rule exists. Each group needs a usable intermediate state, prerequisites, checks and separate merge/deploy order. Skip absent layers, combine inseparable work and keep a small vertical fix together; use `define-project-conventions` for missing rules when available, or record this scoped default in the existing contributor guide.

Group tasks into proposed PRs only when it helps review or delivery. A PR may combine compatible tasks or deliver an independently reviewable part of a larger task, while leaving its remaining criteria open. Choose groups around coherent behavior, dependencies, verification, and recovery limits. Do not combine unrelated work just to match a milestone, or confuse a PR merge with task acceptance, milestone completion, or deployment.

### Publish within authority

Use the requested local format by default. For a tracker, inspect its project, workflow states, existing items, duplicate/parent relationships, and concurrency/version requirements before writing. Create or update remote items only within existing authorization; never post messages merely because a plan exists. If tools are absent, deliver the local task set without pretending it is synchronized.

Preserve existing ownership and in-progress or completed work when reconciling the plan. Use the destination's supported identity and concurrency controls. After a timeout or uncertain write result, inspect remote state before retrying: the first request may already have succeeded. Re-read after a version conflict rather than overwriting another contributor's changes. Confirm returned IDs and stored criteria, dependencies, and state before reporting publication; report partial synchronization and unresolved writes precisely.

### Check the breakdown

Trace each in-scope acceptance criterion to a task or explicit deferral, keeping its requirement and phase links. A task linked to a requirement does not cover criteria omitted from its contract. Ensure dependencies, ownership, task criteria, and phase exits agree. No task is executable while it depends on an unmade consequential decision.

For each "done when," name the outputs it consumes and trace their producing tasks. Add missing dependency edges or separate an independently acceptable contribution from the later integration gate. An integration task cannot wait for a contributor whose own acceptance requires that integration to pass; check the written criteria as well as the declared graph for this cycle.

The breakdown is done when every in-scope criterion traces to a task or explicit deferral, ready work and blocked dependencies are named, and publication status is accurate.

## Verify and return the plan

Verify that the graph is acyclic, each result contributes to agreed scope, exits are observable, and all delivery requirements have an owner. Show which phase or task is ready now and which prerequisites remain unresolved.

Before acceptance, have a separate agent in fresh context challenge the graph against raw accepted scope, decisions, prerequisite evidence and the candidate plan, without the author's conversation or preferred conclusion. Ask it to find missing dependencies, unsupported readiness, unowned exits and, for a task breakdown, untraced criteria and integration cycles. Reconcile findings and independently recheck affected phases after fixes. Retain the returned reviewer/session identity, evaluated artifact/revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

Match the requested audience, tone and depth, then project conventions. Return the milestone graph or task graph, its purpose, current readiness, actual publication status, future parallel candidates, checks and unresolved prerequisites. Update the existing authorized plan and decision locations instead of creating competing summaries. For authorized PR work, include relevant scenario/evidence checks and independent findings, refreshing affected proof after edits.

## Next steps

Run [the task breakdown](#break-work-into-tasks) for the selected phase or agreed scope that has enough detail for decomposition, carrying the goal, criteria, dependency acceptance state, decisions and source artifacts. Dependent tasks may be planned, but cannot execute before prerequisites are accepted. Pass a ready task or agreed ready batch to `implement-change` when execution is authorized, or `start-project` for a missing foundation. If an unresolved premise blocks planning, use `research-topic` for discoverable facts or `build-prototype` for runtime feasibility; keep the affected outcome and question bounded.

Keep ongoing phase/task state in the project's existing tracker once those contracts exist; retain phase exits separately from task completion. Check skill availability and describe the plain action when absent. Stop with the requested milestone plan or task graph, or continue ready work already authorized. Do not create every possible task while later phases remain uncertain, restart accepted discovery, or begin execution from planning authority alone.
