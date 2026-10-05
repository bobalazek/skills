# Change-risk playbook

Load the applicable section; do not turn every edit into a full risk audit.

## Task batches and resumed work

Use the existing task records to establish ownership, current status, accepted inputs, and available outputs before dispatch. Follow any claim or concurrency controls in the requested task system; do not take over work owned by another contributor or assume a prior attempt did nothing.

Record each task's disposition, workspace/output revision, evidence, and remaining blocker. If one task fails, preserve successful and partial outputs, block its dependent work, and continue independent ready work within scope. Before retrying, inspect what the previous attempt changed, including remote operations that may have succeeded despite a timeout. Reconcile uncertain state before repeating a mutation; a retry needs a changed approach or resolved prerequisite.

After combining outputs, check the accepted behavior on the integrated revision and refresh evidence affected by integration or changed inputs. A worker's passing check applies to its tested state; it does not prove the combined result. Follow the project's completion statuses and identify work still awaiting integration, review, or delivery. Report a partial batch as partial, preserving the next resumable action in the same task records rather than another handoff document.

## Refactors

Identify behavior to preserve, callers, public contracts, and the seam being improved. Establish a representative baseline, change one coherent boundary, and compare behavior afterward. Removal needs evidence that code is unused or that all consumers migrate. Keep behavior changes separately identifiable.

## Data and public-contract migrations

Inspect the deployed compatibility window and migration workflow. Prefer additive steps when old and new versions must coexist. Define backfill/retry/idempotency behavior, ownership, recovery, and when obsolete structure can be removed. Verify ordering and realistic failure cases in an appropriate controlled environment. Production data changes need the actual task's authority.

## Stateful and integration boundaries

Check input validation, authorization, ownership/tenancy, duplicate delivery, retries/timeouts, partial failure, concurrency, and error visibility where these properties exist. Do not log secrets or sensitive payloads for convenience. A retry must have a safe repetition contract.

## Shared interfaces

Find supported consumers and states. For UI, inspect loading, empty, error, success, responsive, keyboard, and accessibility behavior relevant to those consumers. A passing typecheck cannot establish rendered behavior.

## Reversibility

For a risky change, name the failure signal, recovery path, and what the checks cannot prove. A feature flag or rollback strategy is useful only if it matches the system and is actually verified.
