---
name: plan-migration
description: "Plan an accepted data, API, platform, or system transition with preserved invariants, consumer compatibility, transfer/cutover checks, recovery, and retirement criteria. Produce a transition plan, not production execution or target architecture selection."
---

# Plan migration

Produce a transition plan that explains how the accepted target can replace the current state without losing required behavior or data. Define the safety and evidence needed for each step; do not claim the migration has run.

## Establish what is changing

Read the accepted outcome, current and target contracts, repository instructions, recorded decisions, and operating constraints. Identify the inspected revision, dirty state, and source evidence. If the target or need for a rewrite is unsettled, compare retaining or improving the current approach before endorsing replacement; leave that decision explicit rather than inventing an executable transition.

Inventory affected consumers, versions, data owners, integrations, background work, and deployment boundaries. Distinguish known consumers from coverage gaps. Define the invariants both states must preserve, including applicable identity, access, tenancy, lifecycle, and external contracts. Establish measurable success, failure, and cutover criteria from the accepted requirements.

For a new project or unmodified starter with no existing state or consumers to move, say which migration work is unnecessary and recommend ordinary foundation setup. A template fork with customizations, records, or deployed consumers still needs its actual preservation constraints assessed.

## Design the transition

Describe only the stages this change needs. For each, identify prerequisites, owned changes, compatibility with still-supported consumers, verification evidence, and the condition for continuing. Resolve how old/new versions coexist, who owns reads and writes during the transition, and how in-flight work is handled. Use a direct cutover only when its interruption and compatibility assumptions are supported.

Load [transition safety checks](references/transition-safety.checklist.md) when persistent state, concurrent writes, version coexistence, or a live cutover makes those decisions relevant.

Where data moves, define mapping, bounded transfer/backfill, restart/retry behavior, reconciliation, and handling of changes made during the move. Identify the source of truth at each stage. Select mechanisms from actual system capabilities; do not prescribe dual writes or assume retries are safe.

Separate reversal from forward recovery. State what remains reversible before and after cutover, what new writes or contracts prevent returning to the old state, and how those changes would be preserved or reconciled. Restoring an old backup or application version is not a complete rollback if it loses subsequent writes.

Retire old interfaces, storage, jobs, and infrastructure only after explicit consumer, reconciliation, retention, and recovery-window conditions are met. Name unresolved owner decisions and the work they block. Parallel preparation is valid only with independent prerequisites and isolated ownership; shared state and cutover actions need coordinated ordering.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Verify and hand off the plan

Walk representative success, interruption, retry, coexistence, and post-cutover failure scenarios against the invariants. Define rehearsals and checks, their required environment/fixtures, expected observations, and unavailable prerequisites. Planned tests and cutover conditions remain plans until observed; do not present them as passing results.

Deliver the transition stages, consumer/invariant coverage, cutover and recovery decisions, evidence requirements, retirement conditions, and next ready action in the existing planning location. Update a supplied plan rather than create competing records. Open material decisions prevent affected stages from being ready.

Migration planning does not authorize production access, data changes, provisioning, deployment, or tracker writes. Use architecture work for unresolved target choices, phase/task planning for delivery decomposition, and implementation for an accepted ready stage when requested. Carry the same criteria, compatibility constraints, and evidence forward.
