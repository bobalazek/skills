---
name: write-spec
description: "Write or revise a software specification from agreed intent, including behavior, constraints, scenarios, non-goals, and observable acceptance criteria. Use before decomposition when requirements need definition."
---

# Write spec

Produce the smallest specification that makes the selected change unambiguous. A PRD, feature brief, or structured issue can express the same requirements; use the requested format and existing authoritative location, with depth matched to uncertainty and risk. Do not create all three for the same scope.

## Establish the contract

Gather requirements from the user's brief, accepted decisions, flows, and relevant research. Identify who needs the result, the problem, desired outcomes, constraints, and evidence supporting the direction. Inspect current behavior and affected consumers for an existing system. For new software, establish actors, useful outcomes, available foundations, and constraints without inventing demand or an existing architecture.

Separate current behavior, desired behavior, assumptions, and unresolved decisions. Discover factual answers from the repository before questioning the user. Resolve choices that affect scope or acceptance; keep nonblocking unknowns explicit. A spec must not hide a product decision inside a technical recommendation.

## Define behavior

Describe the primary scenarios and the failure, boundary, recovery, permission, and compatibility scenarios that could materially change the result. Cover data ownership and lifecycle, interfaces or integrations, UI states, and measurable operational requirements where relevant. Include rollout or migration constraints when users or stored data already exist.

Give acceptance criteria stable IDs and observable outcomes. Tie each criterion to the intended behavior and a plausible verification method. Avoid subjective criteria such as “fast” or “user friendly” without a context and signal. Mark provisional thresholds as decisions rather than facts.

Load [the specification template](references/spec.template.md) when a durable structured spec is needed. Update an existing authoritative specification instead of creating a competing document. Do not fill sections that have no purpose for this change. Writing into a remote tracker requires the requested destination and authority; a local issue draft does not imply publication.

## Finish and continue

Check that scenarios and criteria agree, non-goals bound the scope, and no blocking choice is presented as settled. The result identifies the source context, decisions, and remaining questions. It does not silently create a task queue, select every technology, or start implementation.

Next: `design-architecture` for unresolved technical choices; `plan-phases` for a multi-stage outcome; `create-tasks` for sufficiently agreed work. Continue those actions when they are part of the authorized request, carrying the same accepted specification forward.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.
