---
name: plan-migration
description: "Plan an accepted data, API, platform, or system transition with preserved invariants, consumer compatibility, transfer/cutover checks, recovery, and retirement criteria. Produce a transition plan, not production execution or target architecture selection."
---

# Plan migration

## Use this skill

Use this when an accepted data, API, platform or system target needs a safe transition from existing state or consumers. Produce stages, compatibility and preservation rules, cutover/recovery conditions and required evidence. Reuse accepted target decisions and any supplied transition plan; planning does not mean the migration has run.

Use `design-architecture` for an unresolved target choice, `plan-phases` for delivery milestones, or `start-project` when there is no state or consumer to migrate. A template fork with customizations, records or deployed consumers still needs its actual preservation constraints assessed.

## Establish what is changing

Read the accepted outcome, current and target contracts, repository instructions, recorded decisions, and operating constraints. Identify the inspected revision, dirty state, and source evidence. If the target or need for a rewrite is unsettled, compare retaining or improving the current approach before endorsing replacement; leave that decision explicit rather than inventing an executable transition.

Inventory affected consumers, versions, data owners, integrations, background work, and deployment boundaries. Distinguish known consumers from coverage gaps. Define the invariants both states must preserve, including applicable identity, access, tenancy, lifecycle, and external contracts. Establish measurable success, failure, and cutover criteria from the accepted requirements.

## Design the transition

Describe only the stages this change needs. For each, identify prerequisites, owned changes, compatibility with still-supported consumers, verification evidence, and the condition for continuing. Resolve how old/new versions coexist, who owns reads and writes during the transition, and how in-flight work is handled. Use a direct cutover only when its interruption and compatibility assumptions are supported.

Load [transition safety checks](references/transition-safety.checklist.md) when persistent state, concurrent writes, version coexistence, or a live cutover makes those decisions relevant.

Where data moves, define mapping, bounded transfer/backfill, restart/retry behavior, reconciliation, and handling of changes made during the move. Identify the source of truth at each stage. Select mechanisms from actual system capabilities; do not prescribe dual writes or assume retries are safe.

Separate reversal from forward recovery. State what remains reversible before and after cutover, what new writes or contracts prevent returning to the old state, and how those changes would be preserved or reconciled. Restoring an old backup or application version is not a complete rollback if it loses subsequent writes.

Plan retirement of old interfaces, storage, jobs and infrastructure only after explicit consumer, reconciliation, retention and recovery-window conditions are met. Name unresolved owner decisions and the work they block. Parallel preparation is valid only with independent prerequisites and isolated ownership; shared state and cutover actions need coordinated ordering.

## Verify the plan

Migration planning does not authorize production access, data changes, provisioning, deployment or tracker writes. Walk representative success, interruption, retry, coexistence and post-cutover failure scenarios against the invariants. Define rehearsals and checks, their required environment/fixtures, expected observations and unavailable prerequisites. Planned tests and cutover conditions remain plans until observed; do not present them as passing results.

Before acceptance, have a separate agent in fresh context challenge the plan against raw accepted requirements, current/target contracts, consumer evidence and candidate stages, without the author's conversation or preferred conclusion. Ask for interruption and recovery counterexamples. Reconcile findings and independently recheck affected stages after fixes. Retain the returned reviewer/session identity, evaluated artifact/revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

## Return the result

Match the requested audience, tone and depth, then project conventions. Deliver the transition stages, purpose, consumer/invariant coverage, cutover and recovery decisions, scenario checks, evidence requirements, retirement conditions and exact gaps. Open material decisions prevent affected stages from being ready. Update the existing authorized plan and decision records rather than creating competing documents. Include relevant proof and independent findings in authorized PR work; refresh affected evidence after changes.

## Next steps

Use `design-architecture` for an unresolved target, `plan-phases` when transition milestones need coordination, `create-tasks` for an accepted stage needing executable work, or `implement-change` for a ready authorized task. Pass the candidate plan, stage prerequisites, compatibility/invariant constraints and observed versus planned evidence. Check skill availability and describe the plain action when absent. Stop with the requested plan or continue ready work already authorized; planning never grants cutover or destructive-retirement authority.
