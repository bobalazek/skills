# Questioning lenses

Select only questions that can change the decision.

- Purpose: Who benefits, what outcome matters, what happens without the change, and what is the smallest useful version?
- Evidence: Which premise is verified, assumed, contradicted, or dependent on access we do not have?
- Behavior: What happens at boundaries, failures, permissions, retries, partial success, and recovery where relevant?
- Scope: What is explicitly excluded, preserved, or deferred? Does an apparently small change affect shared consumers?
- Design: Which choice is hard to reverse, what simpler option exists, and what evidence would change the recommendation?
- Delivery: Which prerequisites and acceptance signals make the next work executable? Are rollout and recovery credible?
- Resources: What cost, maintenance, data, licensing, or contractual constraint could invalidate the approach?
- PR intent: Which before/after behavior is intended, what is incidental, and which claimed benefit has evidence?

For a material claim, name the condition that would make it false and check a concrete scenario against the supplied facts. For example, a proposed rollback that restores an old snapshot may lose writes accepted after that snapshot; trace what happens to those writes before treating recovery as settled. A plan's promised check is not observed proof, and the missing proof may require research or an experiment rather than another question to the user.

Ask the highest-impact unresolved question next. Do not ask all of these on every task.
