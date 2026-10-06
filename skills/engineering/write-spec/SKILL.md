---
name: write-spec
description: "Write or revise a software specification from agreed intent, including behavior, constraints, scenarios, non-goals, and observable acceptance criteria. Use before decomposition when requirements need definition."
---

# Write spec

## Use this skill

Use this when agreed intent needs observable behavior, constraints, non-goals and acceptance criteria, or an existing specification needs revision. A PRD, feature brief or structured issue can serve that role; use the requested format and authoritative location with depth matched to uncertainty and risk, rather than creating all three.

Reuse accepted decisions, flows and research without requiring earlier ceremonies. Use `brainstorm-ideas` to compare directions, `challenge-proposal` to probe consequential choices, or `create-tasks` when requirements are already sufficient and only executable decomposition is requested. The spec owns required behavior and acceptance, not the task queue or milestone graph.

## Establish the contract

Gather requirements from the user's brief, accepted decisions, flows, and relevant research. Identify who needs the result, the problem, desired outcomes, constraints, and evidence supporting the direction. Inspect current behavior and affected consumers for an existing system. For new software, establish actors, useful outcomes, available foundations, and constraints without inventing demand or an existing architecture.

Separate current behavior, desired behavior, assumptions, and unresolved decisions. Discover factual answers from the repository before questioning the user. Resolve choices that affect scope or acceptance; keep nonblocking unknowns explicit. A spec must not hide a product decision inside a technical recommendation.

Ask the next question whose answer could change a requirement, adapting to prior answers. Use `challenge-proposal` when a sustained interrogation of the direction is the requested work. Missing external facts need primary-source research; uncertain runtime behavior may need a bounded experiment. Record an unresolved premise and its effect on readiness instead of inventing a requirement or researching unrelated topics.

## Define behavior

Describe the primary scenarios and the failure, boundary, recovery, permission, and compatibility scenarios that could materially change the result. Cover data ownership and lifecycle, interfaces or integrations, UI states, and measurable operational requirements where relevant. Include rollout or migration constraints when users or stored data already exist.

Give acceptance criteria stable IDs and observable outcomes. Tie each criterion to the intended behavior and a plausible verification method. Avoid subjective criteria such as “fast” or “user friendly” without a context and signal. Mark provisional thresholds as decisions rather than facts.

Load [the specification template](references/spec.template.md) when a durable structured spec is needed. Update an existing authoritative specification instead of creating a competing document. Do not fill sections that have no purpose for this change. Writing into a remote tracker requires the requested destination and authority; a local issue draft does not imply publication.

Include lightweight delivery slices only when they clarify usable increments, staged acceptance, or scope deferred from the first release. Give each slice its relevant criteria and preservation constraints. Link an existing phase plan for milestone dependencies; do not duplicate its graph, task assignments, or PR plan inside the spec. A bounded feature may be ready for tasks or implementation without any separate phase plan.

## Verify the specification

Check that scenarios and criteria agree, non-goals bound the scope, and no blocking choice is presented as settled. The result identifies the source context, decisions, and remaining questions. It does not silently create a task queue, select every technology, or start implementation.

Before acceptance, have a separate agent in fresh context challenge the candidate against the raw request, accepted decisions, source behavior and scenario/criterion evidence, without the author's conversation or preferred conclusion. Ask for contradictory scenarios, invented requirements and hidden choices. Reconcile findings and independently recheck affected criteria after fixes. Retain the returned reviewer/session identity, evaluated artifact/revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

## Return the result

Match the requested audience, tone and depth, then project conventions. Return the specification, its purpose, scenario/criterion checks, source evidence, accepted decisions and precise readiness gaps. Update the existing authorized specification and decision records instead of creating another summary. For authorized PR work, include relevant evidence and independent findings, refreshing affected proof after edits; planned verification remains distinct from observed results.

## Next steps

Use `design-architecture` for unresolved technical choices, `plan-phases` when milestones or coordination need their own plan, `create-tasks` for agreed work needing decomposition, or `implement-change` for an already bounded executable change. An unsupported premise may first need `research-topic` for external facts or `build-prototype` for runtime uncertainty. Pass the same specification revision, criterion IDs, accepted decisions, source evidence and blocking choice; do not label dependent work ready before that choice is settled.

Check skill availability and describe the plain action when absent. Stop with the requested specification or continue ready work already authorized, without restarting accepted discovery or treating specification approval as permission to publish or implement.
