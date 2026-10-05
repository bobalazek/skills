---
name: challenge-proposal
description: "Challenge a proposed idea, specification, architecture, delivery plan, or stated PR intent through focused questions that resolve consequential assumptions and choices."
---

# Challenge proposal

Improve a proposed direction by resolving the questions that could change its outcome. The result is an amended decision or artifact, or a precise investigation that remains necessary.

Read the proposal, accepted answers, evidence, and relevant current behavior first. Separate factual unknowns from choices the user owns. Answer discoverable questions through inspection; do not ask the user to recite the repository.

Identify the material claims the proposal depends on and try to disprove them with realistic scenarios. For a new project, test assumed needs, capabilities, and starter limits. For an existing system, test preservation of current users, data, consumers, and operating constraints. A counterexample must follow the actual scope, not introduce a requirement the user never requested.

Select the highest-impact uncertainty and ask a focused question with enough context to answer. Offer options when useful, including trade-offs and a recommendation supported by evidence. Follow the answer into the next consequential question rather than reading a fixed questionnaire.

Use [questioning lenses](references/questions.checklist.md) when the proposal spans several concerns. Skip lenses already settled or irrelevant. Preserve accepted choices and record their effect in the existing artifact. Stop questioning when the remaining uncertainty no longer blocks the requested result.

Before calling the final proposal ready, at least one reviewer must evaluate it in a separate sub-agent or new clean context from its author. Scale additional lenses and depth by distinct consequential risks. Give the reviewer raw accepted requirements, the candidate proposal, relevant sources, and permitted check access without the author's conversation or rationale as conclusions. Independently check supplied evidence and material claims, then reconcile competing claims. Agreement cannot override a demonstrated contradiction; unsupported suspicions remain separate open questions. If an independent reviewer is unavailable, label the proposal unreviewed and do not claim it verified or ready.

For PR intent, distinguish the author's stated purpose, behavior demonstrated by the diff, and unanswered rationale. Clarifying intent does not establish correctness; `review-code` evaluates that separately.

Finish with decisions, changed assumptions/scope, unanswered questions, and the next check or action. Check that material edge cases and trade-offs have an answer or a named investigation. Agreement clarifies intent; it does not validate demand, feasibility, or other external assumptions without evidence. Do not convert questioning into an unrequested spec, implementation, or mandatory ceremony for a clear task.

Next: `research-topic` or `build-prototype` for an unsupported premise; `write-spec` when the direction has enough evidence to define requirements. Continue ready stages already included in the user's request.
