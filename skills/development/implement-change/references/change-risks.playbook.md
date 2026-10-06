# Change-risk playbook

Load the applicable section; do not turn every edit into a full risk audit.

## Task batches and resumed work

Use the existing task records to establish ownership, current status, accepted inputs, and available outputs before dispatch. Follow any claim or concurrency controls in the requested task system; do not take over work owned by another contributor or assume a prior attempt did nothing.

Give each worker enough context to act without the parent history: role/outcome, current criteria and source references, applicable instructions, permitted actions, owned writes, expected evidence, and stop conditions. Use available host controls for tool access and isolation. A separate context or process does not itself isolate files, services, credentials, or shared dependencies; prose alone does not enforce those boundaries.

Record each task's disposition, workspace/output revision, evidence, and remaining blocker. If one task fails, preserve successful and partial outputs, block its dependent work, and continue independent ready work within scope. Before retrying, inspect what the previous attempt changed, including remote operations that may have succeeded despite a timeout. Reconcile uncertain state before repeating a mutation; a retry needs a changed approach or resolved prerequisite.

After combining outputs, check the accepted behavior on the integrated revision and refresh evidence affected by integration or changed inputs. A worker's passing check applies to its tested state; it does not prove the combined result. Follow the project's completion statuses and identify work still awaiting integration, review, or delivery. Report a partial batch as partial, preserving the next resumable action in the same task records rather than another handoff document.

## Refactors

Identify behavior to preserve, callers, public contracts, and the seam being improved. Establish a representative baseline, change one coherent boundary, and compare behavior afterward. Removal needs evidence that code is unused or that all consumers migrate. Keep behavior changes separately identifiable.

## Data and public-contract migrations

Inspect the deployed compatibility window and migration workflow. Prefer additive steps when old and new versions must coexist. Define backfill/retry/idempotency behavior, ownership, recovery, and when obsolete structure can be removed. Verify ordering and realistic failure cases in an appropriate controlled environment. Production data changes need the actual task's authority.

## Stateful and integration boundaries

For an API-backed feature, trace the accepted request through validation, action/object/field permissions, domain state transitions, query and transaction boundaries, serialization and error handling. Preserve supported methods, status/media types, caching, pagination and client versions. Apply tenant scope and supported filtering, ordering, projection and pagination at the data store before materializing growing collections. Validate dynamic query fields and values rather than concatenating client input. Keep bounded local transformations explicit. Check real success and rejection paths, duplicate/concurrent writes and affected consumers; update the existing contract documentation when behavior changes.

Check input validation, authorization, ownership/tenancy, duplicate delivery, retries/timeouts, partial failure, concurrency, and error visibility where these properties exist. Do not log secrets or sensitive payloads for convenience. A retry must have a safe repetition contract.

Preserve the identity and material request meaning of the same logical operation across retries, within the destination's deduplication window. Reconcile uncertain outcomes before resending, including after that window expires. Follow accepted or queued work to its operation-specific completion signal, and verify required dependency readiness before serving traffic. Scope test fixtures and cleanup to the current run and wait for its asynchronous work to settle.

## Shared interfaces

Find supported consumers and states. For UI, inspect loading, empty, error, success, responsive, keyboard, and accessibility behavior relevant to those consumers. A passing typecheck cannot establish rendered behavior.

## Reversibility

Before exposing a consequential change, identify the credible worst failure, affected users/data/consumers, detection signal and the actual recovery action. Distinguish reverting code or traffic from restoring data, undoing external effects or repairing forward. Record prerequisites, owner, accepted loss/interruption bounds, the point at which reversal stops being safe and observed proof or exact gaps. Some effects, such as disclosed data or sent messages, cannot be undone by reverting the component that caused them.

Reassess after new writes, backfills and contract cleanup. A feature flag or down migration is only useful within its actual compatibility and state limits; a backup needs relevant restore/replay evidence. Use a safe rehearsal when warranted, not a destructive production experiment. Carry the result into the authorized PR at creation and update it after material changes. Ordinary stateless edits need a proportionate explanation, not an incident plan.
