# Change-risk playbook

Load the applicable section; do not turn every edit into a full risk audit.

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
