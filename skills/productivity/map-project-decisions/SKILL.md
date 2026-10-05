---
name: map-project-decisions
description: "Organize a large uncertain initiative into open decisions, dependencies, evidence, settled choices, and the next useful investigation before detailed implementation planning is credible."
---

# Map project decisions

Maintain a decision map for work whose important choices are not yet settled. Keep unknown areas coarse and make the next investigation precise.

Establish the intended outcome, constraints, accepted decisions, current artifacts, and relevant baseline. For an existing project, include behavior/data/operating commitments to preserve. For a new project, distinguish missing foundations from genuinely unresolved product or technical choices.

List the decisions that affect feasibility, scope, architecture, or sequencing. For each, record the question, why it matters, current evidence, credible options, owner where known, dependencies, and status. Use [the decision-map template](references/decision-map.template.md) when a durable map is needed.

Dependency edges mean that one decision needs another answer; they are not implementation tickets. Select the next high-value investigation or conversation that is ready. Research independent questions in parallel only when they do not rely on unsettled shared assumptions. Reconcile evidence and update the same map after each result.

Record accepted choices in the project's existing decision location and link them. Reopen a choice only when new evidence changes a material premise. Do not create detailed tasks for work whose required behavior or constraints are still unknown.

Finish each bounded request with the map's changed state, the next ready question, and what evidence would settle it. Once a portion is sufficiently understood, use `write-spec`, `design-architecture`, or `plan-phases` for that portion without forcing the entire initiative to be settled first.
