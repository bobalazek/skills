---
name: design-architecture
description: "Resolve technical choices and system structure for an agreed capability, including stack fit, module boundaries, data ownership, contracts, failure behavior, and migration trade-offs."
---

# Design architecture

## Use this skill

Resolve technical choices or system boundaries for an agreed capability. Reuse accepted requirements, existing architecture and decisions; keeping the stack is a valid result. Use `write-spec` for unresolved behavior and `implement-change` when the design is already sufficient for the selected work.

## Establish constraints

Read the accepted behavior, domain rules, existing architecture, conventions, delivery environment, and consequential decisions. Separate requirements from preferences. Inspect actual versions and capabilities before recommending a dependency or platform.

For new software, identify the smallest useful runtime and available templates/platforms. For existing software, trace consumers, data, operational commitments, and compatibility windows. A preferred stack is a starting hypothesis, not a reason to replace working infrastructure.

Load [architecture discovery](references/architecture-discovery.playbook.md) for unresolved application, workload, data, repository, hosting, or operating decisions. Read discoverable facts first, then ask focused questions about consequential unknowns. Record estimates as assumptions, with units and a validation path; do not turn an imagined scale or budget into a requirement.

## Make the needed decisions

### Technology choice

Load [technology selection](references/technology-selection.matrix.md) when choosing a stack or dependency. Compare plausible options against the same requirements, including the current approach and a simpler alternative. Verify volatile vendor, version, price, and license claims using current primary material.

### Ownership and failure behavior

For structure, assign ownership of behavior and state, define the interfaces consumers need, and walk representative success/failure paths. Hide real complexity behind useful boundaries; avoid services, adapters, queues, or caches without a current requirement. Make transaction, consistency, retry, authorization, and recovery behavior explicit where applicable.

Before decomposition, map responsibilities to folder/package ownership, dependency directions and public boundaries. Follow written repository conventions, then maintained surrounding code; use language/framework practices only where neither settles the choice. Resolve consequential conflicts without inventing layers or a speculative file tree.

Load [cost and obligation checks](references/cost-and-obligations.checklist.md) when these constrain the choice. For an AI capability or agent workflow, load [AI architecture](references/ai-architecture.checklist.md) for access boundaries, orchestration, evaluation, cost, and recovery.

## Record and verify the design

Use [the design template](references/technical-design.template.md) when a structured design is needed, preserving the project's format. Record consequential choices in the existing decision location, including alternatives, consequences and a revisit trigger. Keep current architecture/deployment views in project docs; AGENTS.md links to them rather than storing the design or its history.

Check the design against behavior and failure scenarios, affected consumers, operational constraints, and known costs. A decision that depends on unverified feasibility remains open; propose a bounded prototype instead of claiming readiness.

Before acceptance, a separate agent in fresh context must challenge the design using accepted behavior/constraints, candidate artifacts, raw sources and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

Deliver the scoped design, accepted choices, open decisions, evidence, and migration/recovery constraints at the requested depth. Include proof, independent findings and gaps in authorized PRs at creation; refresh affected evidence after edits. Architecture work does not authorize provisioning or a rewrite.

## Next steps

Carry the design and exact unresolved premise to `build-prototype` for uncertain feasibility; use `plan-phases` for necessary milestone sequencing or `create-tasks` for settled work needing decomposition. Use the plain action if its skill is unavailable. Reuse accepted decisions and continue only within the authorized scope.
