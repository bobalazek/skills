---
name: design-architecture
description: "Resolve technical choices and system structure for an agreed capability, including stack fit, module boundaries, data ownership, contracts, failure behavior, and migration trade-offs."
---

# Design architecture

Produce a technical design that makes the selected capability buildable. Use technology-choice mode, system-structure mode, or both; keeping the existing stack is a valid decision.

## Establish constraints

Read the accepted behavior, domain rules, existing architecture, conventions, delivery environment, and consequential decisions. Separate requirements from preferences. Inspect actual versions and capabilities before recommending a dependency or platform.

For new software, identify the smallest useful runtime and available templates/platforms. For existing software, trace consumers, data, operational commitments, and compatibility windows. A preferred stack is a starting hypothesis, not a reason to replace working infrastructure.

## Make the needed decisions

For stack choice, load [technology selection](references/technology-selection.matrix.md). Compare plausible options against the same requirements, including the current approach and a simpler alternative. Verify volatile vendor, version, price, and license claims using current primary material.

For structure, assign ownership of behavior and state, define the interfaces consumers need, and walk representative success/failure paths. Hide real complexity behind useful boundaries; avoid services, adapters, queues, or caches without a current requirement. Make transaction, consistency, retry, authorization, and recovery behavior explicit where applicable.

Use [the design template](references/technical-design.template.md) when recording the result. Load [cost and obligation checks](references/cost-and-obligations.checklist.md) when these constrain the choice. Record consequential decisions in the project's existing decision location, including alternatives, consequences, and a revisit trigger.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Completion and handoff

Check the design against behavior and failure scenarios, affected consumers, operational constraints, and known costs. A decision that depends on unverified feasibility remains open; propose a bounded prototype instead of claiming readiness.

Deliver the scoped design, accepted choices, open decisions, evidence, and migration/recovery constraints. Architecture work does not authorize provisioning or a rewrite. Next: `build-prototype` for uncertain feasibility, `plan-phases` for milestones, or `create-tasks` for settled work.
