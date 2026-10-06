# Specification template

Use the sections that affect this change. Keep an existing project format where it serves the same role.

## Goal and scope

- **Outcome:** Who needs what result and why it matters.
- **Scope and non-goals:** What this change includes and excludes.
- **Basis:** Relevant alternatives, current behavior, and evidence behind material claims.

## Current and desired behavior

- **Current:** The relevant observed baseline.
- **Required:** Actors, permissions, inputs, outputs, and state changes in the desired behavior.
- **Preserve:** Existing contracts and behavior that must survive the change.

## Scenarios

For each meaningful path: starting state, action/input, expected result, relevant failure or recovery, and affected surfaces. Include concurrency, retries, offline behavior, or partial failure only when the feature has those properties.

## Acceptance

Replace these illustrative CSV-import rows with the accepted requirements. Partial-success and duplicate-identity rules must be decided before these become executable criteria.

| ID | Required observable behavior | Planned verification signal |
| --- | --- | --- |
| AC-01 | Preview identifies invalid rows without persisting imported records | Preview a fixture containing valid and invalid rows; inspect row feedback and confirm imported-record state is unchanged |
| AC-02 | Reconfirming the same completed import does not duplicate its completed effects | Repeat confirmation using the agreed import identity; compare persisted effects with the first confirmation |

Name the evidence needed to judge material criteria: relevant UI states/viewports, baseline/comparison conditions for measured changes, or expected behavior/check output. Define success before implementation; planned checks are not observed results. Keep evidence proportional to the claim.

These rows describe required behavior, not separate phases or PRs.

## Constraints and decisions

Separate established requirements, accepted choices, assumptions, and open questions. Include applicable cost, data, security, accessibility, contractual, delivery, or migration constraints.

## Delivery slices, when useful

Name only useful increments or explicitly deferred scope, with their criterion IDs and constraints. Link the authoritative milestone plan if one exists. A first CSV-import release and later recurring synchronization might be separate scope choices; neither requires duplicating a phase graph or implementation checklist here. Omit this section when a single bounded change needs no staged delivery.

## Readiness

- **Blockers:** Unanswered choices, affected criteria, and what would resolve them.
- **Evidence:** Accepted research/design links and criteria still dependent on unresolved evidence.
- **Next action:** Decision, bounded investigation, technical design, milestone planning, task decomposition, or already-authorized implementation.

A task cannot be ready while its behavior depends on an unanswered choice.
