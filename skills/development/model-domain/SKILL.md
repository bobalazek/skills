---
name: model-domain
description: "Clarify domain vocabulary, entities, relationships, states, invariants, and business rules for a new capability or an inconsistent existing model, using representative scenarios."
---

# Model domain

Produce a consistent domain model that explains the business behavior the software must represent. Work on concepts and rules before treating database tables or class names as the model.

Collect the user's language, accepted requirements, examples, existing code/data, and recorded decisions. For a new domain, identify actors, ownership, lifecycle, and meaningful events. For an existing system, distinguish current implementation vocabulary from intended business meaning and compatibility constraints.

Find overloaded terms, hidden synonyms, ambiguous ownership, invalid states, and rules duplicated across boundaries. Test proposed definitions with concrete scenarios, including relevant failure, permission, concurrency, and lifecycle transitions. Ask about choices that only the domain owner can settle; do not infer business truth solely from code.

Use [the domain-model outline](references/domain-model.template.md) to record a durable result. Keep relationships, invariants, and state transitions explicit. Separate confirmed rules, proposals, and unresolved questions. Use a small diagram when it clarifies relationships or transitions.

Check that the model explains the representative scenarios without contradictions. For a changed existing model, identify affected terms/contracts/data and the migration questions, without silently renaming code or transforming records.

Next: update `write-spec` behavior or use `design-architecture` to map the accepted model into technical boundaries. Persist consequential choices in the existing decision location and reuse the model during task creation.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.
