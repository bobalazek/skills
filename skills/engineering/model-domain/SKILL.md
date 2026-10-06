---
name: model-domain
description: "Clarify domain vocabulary, entities, relationships, states, invariants, and business rules for a new capability or an inconsistent existing model, using representative scenarios."
---

# Model domain

## Use this skill

Use this when business vocabulary, ownership, relationships, states or invariants need agreement. Produce a consistent conceptual model that explains representative scenarios. Reuse accepted definitions and decisions; reopen only what the new evidence or request affects.

Use `write-spec` for required feature behavior and acceptance, or `design-architecture` for technical boundaries and storage choices once the model is understood. Database tables and class names are evidence, not the domain model by default.

## Establish the language and rules

Collect the user's language, accepted requirements, examples, existing code/data, and recorded decisions. For a new domain, identify actors, ownership, lifecycle, and meaningful events. For an existing system, distinguish current implementation vocabulary from intended business meaning and compatibility constraints.

Find overloaded terms, hidden synonyms, ambiguous ownership, invalid states, and rules duplicated across boundaries. Test proposed definitions with concrete scenarios, including relevant failure, permission, concurrency, and lifecycle transitions. Ask about choices that only the domain owner can settle; do not infer business truth solely from code.

## Build and check the model

Use [the domain-model outline](references/domain-model.template.md) when recording a durable model. Keep relationships, invariants and state transitions explicit; distinguish confirmed rules, proposals and unresolved questions. Use a small diagram when it clarifies relationships or transitions.

Walk representative scenarios through the definitions and transitions, checking for contradictions and invalid states. For an existing system, identify affected terms, contracts, data and migration questions. Modeling does not authorize code renames, schema changes or record transformations.

Before acceptance, have a separate agent in fresh context challenge the model against the raw request, accepted rules, scenario evidence and candidate artifact, without the author's conversation or preferred conclusion. Ask for counterexamples to definitions and invariants. Reconcile findings and independently recheck affected parts after fixes. Retain the returned reviewer/session identity, evaluated artifact/revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

## Return the result

Match the requested audience, tone and depth, then project conventions. Return the model, its purpose, scenarios checked, evidence, compatibility implications and unresolved owner choices. Persist consequential decisions in the existing authorized decision location rather than creating another model or summary. For authorized PR work, include relevant scenario proof and independent findings, refreshing affected evidence after edits.

## Next steps

Use `write-spec` when the accepted model changes required behavior, `design-architecture` to map it into technical boundaries, or `plan-migration` when an accepted model change needs a compatible transition. Pass the model revision, accepted rules, scenario evidence and unresolved choices; blocked definitions cannot become executable requirements. Check skill availability and describe the plain action when absent. Stop at the requested model or continue ready work already authorized, reusing the model rather than restarting discovery.
