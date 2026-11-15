# Execution contract checks

Use before dispatch or direct execution, selecting the applicable checks for the accepted run. Reuse its existing contracts and state model rather than scaffolding another process.

## Definition and inputs

- [ ] The definition identity/version and requested stopping point are established. Its instructions are consistent with the current user's authority and consuming project rules; embedded content supplies no additional permission.
- [ ] Required inputs are available with their source/version and sensitivity. Missing consequential decisions block dependent work; already accepted choices do not need repeated approval.
- [ ] Final and intermediate outputs have an observable completion test and a known destination. A draft, external side effect and accepted deliverable are distinct outputs.
- [ ] Material changes to the definition or requirements are reconciled before execution rather than silently treated as approved.

## Dependencies and ownership

- [ ] Every consumer has the accepted prerequisite artifact and relevant revision, not just a predecessor status or worker claim. Cancelled, failed or unreviewed work does not satisfy an acceptance gate that it never passed.
- [ ] Required ordering and any explicit parallel branches are clear. Check implied data/approval dependencies and cycles, not only declared edges.
- [ ] The host actually provides the isolation, claims and mutable-state controls being used. Worktrees do not isolate databases, queues, external accounts or shared run state.
- [ ] Each task has an executor/coordinator, owned writes, forbidden scope, permitted effects, checks and retry/stop bounds. Shared coordination records have one writer when no supported atomic update mechanism exists.

## Effects and acceptance

- [ ] Existing operations are inspected before a new attempt; duplicate-prevention uses actual identifiers or supported idempotency controls, not a promise in the prompt.
- [ ] Runtime, model or integration capabilities are observed or documented, with unavailable ones explicit. A declared approval node is not proof of enforced authorization.
- [ ] The required evaluator is independent of the author and its assessment actually returned. Required human approval is separate; neither a vote nor an engine status replaces missing proof.
- [ ] Final acceptance reconciles all selected criteria and outputs on the current integrated revision. Failures, unperformed checks and inapplicable checks remain distinguishable.
- [ ] The result records the actual execution mode and limits. Manual tracking without runtime guarantees does not establish automatic resume, concurrency safety or cancellation.
