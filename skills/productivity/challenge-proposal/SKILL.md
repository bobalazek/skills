---
name: challenge-proposal
description: "Challenge a proposed idea, specification, architecture, delivery plan, or stated PR intent through adaptive questioning. Use for 'grill me on this' or to resolve consequential assumptions and choices."
---

# Challenge proposal

Improve a proposed direction by resolving the questions that could change its outcome. The result is an amended decision or artifact, or a precise investigation that remains necessary.

This is the focused home for adaptive human grilling. Start from a candidate, even a rough one. `brainstorm-ideas` owns comparing directions when the user has not selected one; `write-spec` owns the resulting behavior and acceptance contract. Other workflows can ask a necessary clarifying question without requiring a separate challenge session.

Read the proposal, accepted answers, evidence, and relevant current behavior first. Separate factual unknowns from choices the user owns. Answer discoverable questions through inspection; do not ask the user to recite the repository.

Identify the material claims the proposal depends on and try to disprove them with realistic scenarios. For a new project, test assumed needs, capabilities, and starter limits. For an existing system, test preservation of current users, data, consumers, and operating constraints. A counterexample must follow the actual scope, not introduce a requirement the user never requested.

Select the highest-impact uncertainty and ask a focused question with enough context to answer. Offer options when useful, including trade-offs and a recommendation supported by evidence. Follow the answer into the next consequential question rather than reading a fixed questionnaire. Challenge inconsistent answers with a concrete case and explain what changes depending on the answer. Do not imply that a recommendation is the user's accepted choice or demand an answer to questions that would not change the requested result.

Use [questioning lenses and an adaptive example](references/questions.checklist.md) when the proposal spans several concerns. Skip lenses already settled or irrelevant. Preserve accepted choices and record their effect in the existing artifact. Investigate factual unknowns through sources or a bounded experiment; asking the user to agree cannot verify them. Continue useful independent questions while a factual check is pending. Stop questioning when the material choices have an answer or a named investigation and further answers would not change the requested result.

Before calling the final proposal ready, at least one reviewer must evaluate it in a separate sub-agent or new clean context from its author. Scale additional lenses and depth by distinct consequential risks. Give the reviewer raw accepted requirements, the candidate proposal, relevant sources, and permitted check access without the author's conversation or rationale as conclusions. Independently check supplied evidence and material claims, then reconcile competing claims. Agreement cannot override a demonstrated contradiction; unsupported suspicions remain separate open questions. If an independent reviewer is unavailable, label the proposal unreviewed and do not claim it verified or ready.

For PR intent, distinguish the author's stated purpose, behavior demonstrated by the diff, and unanswered rationale. Clarifying intent does not establish correctness; `review-code` evaluates that separately.

Finish with decisions, changed assumptions/scope, unanswered questions, and the next check or action. Check that material edge cases and trade-offs have an answer or a named investigation. Agreement clarifies intent; it does not validate demand, feasibility, or other external assumptions without evidence. Do not convert questioning into an unrequested spec, implementation, or mandatory ceremony for a clear task.

Next: `research-topic` or `build-prototype` for an unsupported premise; `write-spec` when the direction has enough evidence to define requirements. Continue ready stages already included in the user's request.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.
