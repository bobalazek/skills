---
name: write-spec
description: "Write or revise a software specification from agreed intent, including behavior, constraints, scenarios, non-goals, observable acceptance criteria and, when disputed, the domain model: vocabulary, entities, relationships, states, invariants and business rules. Use before decomposition when requirements or domain terms need definition."
---

# Write spec

## Use this skill

Use this when agreed intent needs observable behavior, constraints, non-goals and acceptance criteria, or an existing specification needs revision. A PRD, feature brief or structured issue can serve that role; use the requested format and authoritative location with depth matched to uncertainty and risk, rather than creating all three.

Reuse accepted decisions, flows and research without requiring earlier ceremonies. Use `brainstorm-ideas` to compare directions, `challenge-proposal` to probe consequential choices, or `plan-phases` (its task breakdown) when requirements are already sufficient and only executable decomposition is requested. The spec owns required behavior and acceptance, not the task queue or milestone graph. When business vocabulary or rules are disputed, [model the domain](#model-the-domain-when-it-is-disputed) as part of the spec.

## Establish the contract

Gather requirements from the user's brief, accepted decisions, flows, and relevant research. Identify who needs the result, the problem, desired outcomes, constraints, and evidence supporting the direction. Inspect current behavior and affected consumers for an existing system. For new software, establish actors, useful outcomes, available foundations, and constraints without inventing demand or an existing architecture.

Keep the original requested outcome, its source and accepted clarifications in the existing specification or issue. Use a faithful bounded excerpt/summary and an accessible source reference; retain only material context appropriate for that audience. Record later accepted changes without erasing the original basis. Derive criteria from that intent, then check that the criteria still cover it.

Establish supported application targets and the first end-to-end user outcome before choosing implementation. For an unspecified greenfield app, use web as an explicit provisional assumption; identify whether mobile means responsive web or an installed app, and include desktop when requested or required by accepted capabilities. Repository/product decisions override that default. Resolve consequential platform choices before committing architecture or claiming scope settled; do not silently add three applications.

For greenfield work, surface infrastructure constraints at intake: where the app and its frontend/API/workers will run, which relevant dependencies it requires (including managed databases, data/file services, hosting/delivery services, APIs, AI and MCP/tool services), and who operates them. Preserve settled answers and route consequential technical choices to `design-architecture` when available, or the existing design record. The spec records requirements and open decisions; it need not choose unrequested providers or treat unknown hosting as approved.

Identify applicable project conventions as constraints and link their authoritative source. Carry consequential structural or naming conflicts to the owning design/convention decision before dependent planning; the spec need not choose a folder tree or class hierarchy to define behavior.

Separate current behavior, desired behavior, assumptions, and unresolved decisions. Discover factual answers from the repository before questioning the user. Resolve choices that affect scope or acceptance; keep nonblocking unknowns explicit. A spec must not hide a product decision inside a technical recommendation.

Ask the next question whose answer could change a requirement, adapting to prior answers. Use `challenge-proposal` when a sustained interrogation of the direction is the requested work. Missing external facts need primary-source research; uncertain runtime behavior may need a bounded experiment. Record an unresolved premise and its effect on readiness instead of inventing a requirement or researching unrelated topics.

Wait for the user's answer before specifying dependent behavior as agreed or handing it to implementation. Record questions and answers alongside the original intent; a recommendation, provisional default or unanswered question is not acceptance. A requested exploratory spec may show alternatives and open decisions, while already accepted or explicitly delegated choices need no repeated approval.

## Model the domain when it is disputed

Load for this section: [domain-model outline](references/domain-model.template.md).

Add this section when business vocabulary, ownership, relationships, states or invariants are inconsistent or not yet agreed, for a new capability or an existing system whose names have drifted. A spec whose terms are settled skips it, and a request for only the model can stop once the model is accepted. Reuse accepted definitions and decisions; reopen only what the new evidence or request affects. Database tables and class names are evidence about the model, not the model itself, and technical boundaries and storage choices belong to `design-architecture` once the model is understood.

Collect the user's language, accepted requirements, examples, existing code/data, and recorded decisions. For a new domain, identify actors, ownership, lifecycle, and meaningful events. For an existing system, distinguish current implementation vocabulary from intended business meaning and compatibility constraints. Find overloaded terms, hidden synonyms, ambiguous ownership, invalid states, and rules duplicated across boundaries. Ask about choices that only the domain owner can settle; do not infer business truth solely from code.

Use [the domain-model outline](references/domain-model.template.md) when recording a durable model. Keep relationships, invariants and state transitions explicit; distinguish confirmed rules, proposals and unresolved questions. Use a small diagram when it clarifies relationships or transitions.

The model is done when representative scenarios, including relevant failure, permission, concurrency and lifecycle transitions, walk through the definitions without contradictions or invalid states, and an existing system's affected terms, contracts, data and migration questions are named. The independent assessment below also asks for counterexamples to definitions and invariants. Persist consequential decisions in the existing authorized decision location. Modeling does not authorize code renames, schema changes or record transformations; blocked definitions cannot become executable requirements, and an accepted model change needing a compatible transition goes to `plan-migration`.

## Define behavior

Describe the primary scenarios and the failure, boundary, recovery, permission, and compatibility scenarios that could materially change the result. Cover data ownership and lifecycle, interfaces or integrations, UI states, and measurable operational requirements where relevant. Include rollout or migration constraints when users or stored data already exist.

Give acceptance criteria stable IDs and observable outcomes. Tie each criterion to the intended behavior and a plausible verification method. Avoid subjective criteria such as “fast” or “user friendly” without a context and signal. Mark provisional thresholds as decisions rather than facts.

Load [the specification template](references/spec.template.md) when a durable structured spec is needed. Update an existing authoritative specification instead of creating a competing document. Do not fill sections that have no purpose for this change. Writing into a remote tracker requires the requested destination and authority; a local issue draft does not imply publication.

Include lightweight delivery slices only when they clarify usable increments, staged acceptance, or scope deferred from the first release. Give each slice its relevant criteria and preservation constraints. Link an existing phase plan for milestone dependencies; do not duplicate its graph, task assignments, or PR plan inside the spec. A bounded feature may be ready for tasks or implementation without any separate phase plan.

## Verify the specification

Check that scenarios and criteria agree, non-goals bound the scope, and no blocking choice is presented as settled. The result identifies the source context, decisions, and remaining questions. It does not silently create a task queue, select every technology, or start implementation.

Before acceptance, have a separate agent in fresh context challenge the candidate against the raw request, accepted decisions, source behavior and scenario/criterion evidence, without the author's conversation or preferred conclusion. Ask for contradictory scenarios, invented requirements, hidden choices and, when a domain model is included, counterexamples to its definitions and invariants. Reconcile findings and independently recheck affected criteria after fixes. Retain the returned reviewer/session identity, evaluated artifact/revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

## Return the result

For a model-only request, return the accepted model, scenarios checked, compatibility implications and unresolved owner choices instead of a full specification. Match the requested audience, tone and depth, then project conventions. Return the specification, its purpose, scenario/criterion checks, source evidence, accepted decisions and precise readiness gaps. Update the existing authorized specification and decision records instead of creating another summary. For authorized PR work, include relevant evidence and independent findings, refreshing affected proof after edits; planned verification remains distinct from observed results.

## Next steps

Use `design-architecture` for unresolved technical choices, `plan-phases` when milestones or coordination need their own plan or agreed work needs task decomposition, `plan-migration` when an accepted domain-model change needs a compatible transition, or `implement-change` for an already bounded executable change. An unsupported premise may first need `research-topic` for external facts or `build-prototype` for runtime uncertainty. Pass the same specification revision, criterion IDs, accepted decisions, source evidence and blocking choice; do not label dependent work ready before that choice is settled.

Check skill availability and describe the plain action when absent. Stop with the requested specification or continue ready work already authorized, without restarting accepted discovery or treating specification approval as permission to publish or implement.
