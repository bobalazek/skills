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

## Adaptive example

Suppose the proposal is "Let a team import records from a CSV file." First inspect existing record rules and accepted requirements. If partial success is still undecided, ask: "When a row fails validation, should valid rows still import, or should the file stay uncommitted for correction?" Explain the recovery tradeoff using the actual workflow.

- If valid rows should import, follow the answer into how the user identifies failed rows and retries them without duplicating completed work. Inspect existing identity/deduplication behavior before asking the user to choose a conflicting rule.
- If the file must remain uncommitted, explore whether users can preview errors and whether changes between preview and confirmation must be revalidated. Skip partial-import recovery unless it remains relevant.
- If the user says "Just make it easy," show a concrete mixed-validity file and recommend the smallest behavior supported by their goal. Record the choice only after it is actually accepted; uncertainty can remain explicit in a draft.
- If the decisive uncertainty is an external provider's import limit, verify its current official contract. If it is whether a representative file can be processed within the required time, run an authorized bounded experiment. Neither answer comes from further preference questions.

Each answer changes which branch is worth pursuing. Stop after the consequential behavior, preservation constraints, and evidence gaps are clear for the requested scope. For a challenge-only request, return those decisions and gaps in the existing proposal; creating a full spec or task queue is a separate outcome.
