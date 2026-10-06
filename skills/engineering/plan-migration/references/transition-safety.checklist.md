# Transition safety

Apply only the sections supported by the transition's actual data, contracts, and runtime behavior.

## Coexistence and transfer

- Identify active consumer versions, delayed jobs/events, external clients, and read/write owners. Describe how each supported combination behaves; unknown consumers remain a compatibility gap.
- Define field/identity mapping, invalid-record handling, ordering, bounded batches, progress checkpoints, and safe repetition. A retry after partial success must not duplicate, overwrite, or drop valid state.
- Account for writes and deletes during backfill. Choose an actual mechanism for capture, reconciliation, or a bounded write pause; explain failure handling instead of assuming two writes commit atomically.
- Reconcile semantic invariants and representative records as well as counts. Define the discrepancy threshold and owner decision required for cutover; equal row counts do not establish equal data.

## Cutover and recovery

- Name readiness evidence, the source of truth after switch-over, treatment of in-flight work, monitoring signals, and who can halt or recover the transition. Bound any interruption using accepted requirements.
- Rehearse failure before and after new writes occur. Distinguish reverting traffic/code from reversing transformed state. Identify which new data/contracts the old system cannot represent and whether replay, reconciliation, or forward repair is required.
- State backup scope, restore/replay assumptions, and any accepted loss or recovery bounds. A backup is useful only for the states it captures; do not promise zero loss without a mechanism and evidence.
- Remove obsolete structures only after supported consumers have moved, pending work is handled, reconciliation is accepted, and required retention/recovery conditions hold. Recheck dependencies before destructive retirement.

Keep the evidence source and baseline visible. Label rehearsal commands and expected results as proposed until they are executed in an authorized environment. Record the next ready check and its exact blocker where evidence is missing.
