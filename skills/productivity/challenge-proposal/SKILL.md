---
name: challenge-proposal
description: "Test a proposed idea, specification, architecture, delivery plan or PR intent through focused questions, resolving consequential assumptions and choices before dependent work."
---

# Challenge proposal

## Use this skill

Start with a candidate direction, even a rough one, when the requested result is a stronger decision or a precise unresolved investigation. Reuse its accepted answers and evidence. `brainstorm-ideas` compares directions before selection; `write-spec` turns a sufficiently settled direction into a behavior contract. An ordinary clarifying question does not require a separate challenge session.

## Find the consequential uncertainty

Read the proposal, current behavior and relevant constraints. Separate factual unknowns from choices the user owns; inspect repository facts instead of asking the user to recite them.

Identify the material claims and try to disprove them with realistic scenarios. For a new project, examine assumed needs, capabilities and starter limits. For an existing system, examine effects on users, data, consumers and operations. Keep counterexamples within the requested scope rather than inventing requirements.

For a proposal spanning several concerns, select relevant [questioning lenses](references/questions.checklist.md). Skip settled or irrelevant lenses; the checklist is not an interview to administer in full.

## Ask, inspect and amend

Ask the highest-impact unresolved question with enough context to answer. Give options and their trade-offs when useful. Let the answer determine the next question, and challenge inconsistent answers with a concrete consequence. Record a recommendation as a proposal until the actual decision owner accepts it.

Investigate factual unknowns through sources or a bounded experiment; agreement cannot verify them. Continue independent questions while a factual check is pending. Preserve accepted choices in the existing artifact and reopen them only when material evidence changes. Stop when further answers would not change the requested result and each consequential gap has an answer or a named investigation.

For PR intent, distinguish stated purpose, behavior demonstrated by the diff and unanswered rationale. Clarifying that intent does not establish code correctness.

## Result and verification

Return changed decisions, assumptions or scope, remaining questions, and the check that would settle each material gap. Use the requested audience and depth and the project's existing format. Do not manufacture a new specification or task queue for a challenge-only request.

Before calling the proposal ready, have a separate agent in fresh context examine the raw accepted requirements, candidate, sources and permitted checks without the author's conversation or preferred conclusions. Ask it to test edge cases and supplied evidence. Retain the returned reviewer/session identity, evaluated artifact or revision, findings and coverage; reconcile claims against proof and independently recheck affected results after changes. An unsupported suspicion remains an open question, while a demonstrated contradiction cannot be voted away. Without an independent assessment, label the proposal unreviewed and do not claim readiness. Human agreement and empirical evidence establish different things.

## Next steps

Pass unsupported premises to `research-topic` for factual investigation or `build-prototype` for an empirical test. Use `write-spec` when the chosen direction has enough evidence to define requirements, or `review-code` when the remaining question is a candidate diff's correctness. Carry the amended artifact, accepted choices and exact gap; check availability or describe the plain action.

Finish a bounded challenge with its decisions and gaps. Continue ready stages already authorized without repeating settled questions or granting new authority.
