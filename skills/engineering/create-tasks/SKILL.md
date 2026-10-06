---
name: create-tasks
description: "Convert an agreed specification or selected phase into executable tasks with acceptance criteria, ownership, dependencies, and verification. Use for local tasks or an authorized project-management destination."
---

# Create tasks

## Use this skill

Turn an accepted spec, selected phase, or bounded brief into executable tasks. Reuse existing tasks and decisions; a small change needs no separate phase plan. Use `write-spec` for unsettled required behavior, `plan-phases` for milestone sequencing, and `implement-change` when the selected task is already executable.

This skill owns decomposition, dependencies, ownership/isolation, and task verification. Preserve the spec's behavior and existing milestone exits. Ask only unresolved questions that change scope, dependency, or acceptance. Broader interrogation belongs to `challenge-proposal`; missing facts need inspection or a bounded research/experiment task with a useful result.

## Preserve intent

Load the relevant accepted scope, phase exits, design decisions, repository conventions, and feedback commands. Reuse current tasks where they already meet the contract. Compare their copied criteria and dependencies with the current authoritative inputs; record source versions or snapshots where a later change would affect execution. Preserve unchanged task IDs and criteria, and revise or supersede affected work explicitly. Distinguish observed baseline from desired behavior. Do not invent missing requirements or silently change milestone acceptance criteria.

A task owns one reviewable outcome. Split work when ownership, acceptance, or dependencies are independent; combine fragments that cannot be meaningfully verified separately. Include necessary shared changes, migrations, and integration checks, keeping speculative cleanup outside the queue.

## Make tasks executable

Use [the task template](references/task.template.md). Carry the relevant criteria into each task, with source IDs and artifact references. State owned writes, preserved contracts, prerequisites, applicable checks, and a falsifiable “done when.” File locations can be investigative pointers rather than guesses presented as mandatory paths.

## Order and isolate work

Order contracts, schemas, and foundations before their consumers. Confirm the graph is acyclic. Show which tasks could run together after their prerequisites are accepted, and which are ready now. Parallel execution needs isolated writes, compatible shared state/data, and suitable verification environments; otherwise serialize it. A parallel batch contains only currently ready tasks. A broader execution sequence may include dependent successors, but they cannot start before their prerequisites are accepted. Declare the acceptance evidence and remaining external inputs; dependency-free does not mean ready when access or a consequential decision is missing.

When branching matters, show these dependencies in a compact Mermaid or the destination's existing graph, including integration and independent acceptance after the contributing outputs. Keep task IDs and phase exits consistent with the records. Check the rendered view when available and report a rendering gap; a diagram is an aid to inspecting the same task graph, not a second task store.

### PR groups

Group tasks into proposed PRs only when it helps review or delivery. A phase can span several tasks and PRs; a shared prerequisite can support several phases. A PR may combine compatible tasks or deliver an independently reviewable part of a larger task, while leaving its remaining criteria open. Choose groups around coherent behavior, dependencies, verification, and recovery limits. Do not combine unrelated work just to match a milestone, or confuse a PR merge with task acceptance, milestone completion, or deployment. Publication and execution remain subject to the requested scope.

### Optional graph check

For a supplied JSON task snapshot, optionally run [the graph checker](scripts/check-graph.ts) using [the template's input example](references/task.template.md#optional-graph-check). It checks IDs, cycles, accepted prerequisites and declared write/resource overlaps. Inspect unknown isolation and actual environments before selecting parallel work; the helper does not schedule tasks or update a tracker.

## Publish within authority

Use the requested local format by default. For a tracker, inspect its project, workflow states, existing items, duplicate/parent relationships, and concurrency/version requirements before writing. Create or update remote items only within existing authorization; never post messages merely because a plan exists. If tools are absent, deliver the local task set without pretending it is synchronized.

Preserve existing ownership and in-progress or completed work when reconciling the plan. Use the destination's supported identity and concurrency controls. After a timeout or uncertain write result, inspect remote state before retrying: the first request may already have succeeded. Re-read after a version conflict rather than overwriting another contributor's changes. Confirm returned IDs and stored criteria, dependencies, and state before reporting publication; report partial synchronization and unresolved writes precisely.

## Verify and report

Trace each in-scope acceptance criterion to a task or explicit deferral, keeping its requirement and phase links. A task linked to a requirement does not cover criteria omitted from its contract. Ensure dependencies, ownership, task criteria, and phase exits agree. Identify ready work and unresolved blockers. No task is executable while it depends on an unmade consequential decision.

For each “done when,” name the outputs it consumes and trace their producing tasks. Add missing dependency edges or separate an independently acceptable contribution from the later integration gate. An integration task cannot wait for a contributor whose own acceptance requires that integration to pass; check the written criteria as well as the declared graph for this cycle.

Before acceptance, a separate agent in fresh context must challenge the graph against accepted criteria, candidate task records, source artifacts, and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

Return the task graph in the requested/project format with ready work, blocked dependencies, verification and actual publication status. Link canonical context instead of creating another summary; keep the result concise for its audience. Include proof, independent findings and gaps in authorized PRs at creation; refresh affected evidence after edits.

## Next steps

Stop with the graph when decomposition is the request. Use `manage-project-board` when the requested next result is ongoing Markdown task state, blockers and bounded agent pickup; pass the accepted contracts and preserve their authoritative location. Pass the selected contract, accepted outputs, evidence and blockers to `start-project` for a missing foundation, or `implement-change` for one task or agreed ready batch when execution is authorized. Use the plain action if its skill is unavailable. Reuse accepted context rather than restart discovery.
