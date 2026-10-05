---
name: track-project-decisions
description: "Track open, accepted, and superseded project decisions with evidence, owners, dependencies, and the next ready investigation before planning dependent work."
---

# Track project decisions

Keep a project's open, accepted, and superseded decisions current, with evidence, owners, and dependencies. For example, a hosting choice may wait for a data-residency requirement. Keep unknown areas coarse and make the next investigation precise.

Establish the intended outcome, constraints, accepted decisions, current artifacts, and relevant baseline. For an existing project, include behavior/data/operating commitments to preserve. For a new project, distinguish missing foundations from genuinely unresolved product or technical choices.

List the decisions that affect feasibility, scope, architecture, or sequencing. For each, record the question, why it matters, current evidence, credible options, owner where known, dependencies, and status. Use [the decision template](references/decision-map.template.md) when a durable record is needed.

Dependencies mean that one decision needs another answer; they are not implementation tickets. Select the next high-value investigation or conversation that is ready. Research independent questions in parallel only when they do not rely on unsettled shared assumptions. Reconcile evidence and update the same record after each result.

Record accepted choices in the project's existing decision location and link them. Reopen a choice only when new evidence changes a material premise. Do not create detailed tasks for work whose required behavior or constraints are still unknown.

Finish each bounded request with changed decisions, affected dependent work, the next ready question, and what evidence would settle it. Once a portion is sufficiently understood, use `write-spec`, `design-architecture`, or `plan-phases` for that portion without forcing the entire initiative to be settled first.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.
