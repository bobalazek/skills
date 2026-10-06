# Specification template

Use the sections that affect this change. Keep an existing project format where it serves the same role.

## Goal and scope

Who needs what outcome, why it matters, and which alternatives or current behavior inform it. State non-goals and the evidence behind material claims.

## Current and desired behavior

Describe the relevant baseline separately from the proposed behavior. Name actors, permissions, inputs, outputs, state changes, and contracts to preserve.

## Scenarios

For each meaningful path: starting state, action/input, expected result, relevant failure or recovery, and affected surfaces. Include concurrency, retries, offline behavior, or partial failure only when the feature has those properties.

## Acceptance

| ID | Required observable behavior | Verification signal |
| --- | --- | --- |
| AC-01 | A concrete result in a defined context | A test, request, browser path, measurement, or inspected artifact |

Name the evidence needed to judge material criteria: relevant UI states/viewports, baseline/comparison conditions for measured changes, or expected behavior/check output. Define success before implementation; planned checks are not observed results. Keep evidence proportional to the claim.

For a CSV import whose accepted behavior includes preview and confirmation, one criterion could require a preview to identify invalid rows without persisting records. Another could require a repeated confirmation of the same import to avoid duplicating its completed effects. Define partial-success and duplicate-identity rules from accepted decisions before treating these as executable criteria. This describes required behavior, not separate phases or PRs.

## Constraints and decisions

Separate established requirements, accepted choices, assumptions, and open questions. Include applicable cost, data, security, accessibility, contractual, delivery, or migration constraints.

## Delivery slices, when useful

Name only useful increments or explicitly deferred scope, with their criterion IDs and constraints. Link the authoritative milestone plan if one exists. A first CSV-import release and later recurring synchronization might be separate scope choices; neither requires duplicating a phase graph or implementation checklist here. Omit this section when a single bounded change needs no staged delivery.

## Readiness

List blocking decisions and what would resolve them. Link accepted research or design artifacts and identify which criteria depend on unresolved evidence. State whether the next useful action is a decision, bounded investigation, technical design, milestone planning, task decomposition, or implementation already covered by the request. A task cannot be ready while its behavior depends on an unanswered choice.
