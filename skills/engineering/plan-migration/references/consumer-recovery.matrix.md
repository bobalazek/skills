# Consumer retirement and recovery

Use when an API, package, event, configuration or stored representation changes, or when recovery depends on restoring/replaying state. Keep accepted project compatibility and recovery requirements; do not invent a deprecation duration or service tier.

## Establish the real compatibility contract

| Boundary | Inspect before calling a change compatible | Transition evidence |
| --- | --- | --- |
| Response/event shape | Strict decoders, required/optional fields, unknown enum handling, error contracts and meaning of values. | Representative old/new consumers accept the actual emitted payloads and preserve behavior. Adding a field can break a strict consumer. |
| Writes and configuration | Defaults, validation, omitted versus null values, old credentials/permissions and producer versions. | Both supported directions work through the real writer/loader, including rejects and persisted round trips. |
| Package/CLI interface | Exports, parameters, exit/status behavior, installed entry points and dynamic/configured loading. | Installed consumers and existing automation exercise their supported paths; source imports alone are partial proof. |
| Scheduled/offline clients | Rare jobs, queued messages, external integrators, old mobile clients and unobserved use. | A coverage window matches actual schedules and rollout commitments, with unresolved owners explicit. A quiet short log cannot establish absence. |

Identify the accepted replacement, affected owners and support/removal policy. Where needed, introduce the compatible replacement, communicate its use and retirement conditions, move known consumers, then observe/reconcile remaining use. Choose notices, versioning and the evidence window from real contracts and operational needs. Unknown consumers remain a blocker or an explicitly accepted risk, not an invented zero count.

## Recover by stage and retained information

| Failure point | Recovery question | Evidence needed before relying on the answer |
| --- | --- | --- |
| Before switching reads | Can incumbent code still consume current schema and all writes? | Old/new read/write matrix, failed-batch handling and preserved originals. |
| During transfer/cutover | Can work resume or reconcile without duplication, overwrite or a gap? | Committed checkpoints, replay identity, concurrent-change handling and representative interruption results. |
| After new writes | What state or meaning can the incumbent no longer represent? | Identify those writes and rehearse replay, compensating/forward repair or an accepted lossy restore. Reverting code alone is insufficient. |
| After destructive contraction | What information, keys or external effects have disappeared? | Retained source/archive, actual restore/replay method, compatibility and named limits. Do not promise reversal without the information it needs. |

Use required recovery time and tolerated data loss from the owner, including the measurement window and scope. If unset, record the decision and affected readiness rather than assigning a default. Backups, logs, uploads, configuration and external service state may need separate recovery paths; a database dump does not cover them all.

For a proposed restore, name target/environment, backup identity and age, what post-backup writes it would discard, how current state is retained, the write-freeze/reconciliation procedure, responsible operator and required authority. Rehearse restore/readback safely and report observed duration/integrity alongside missing production conditions. A backup's existence or a down script is not recovery proof.

## Retirement decision

Contraction needs known consumers and delayed work handled, semantic reconciliation accepted, required retention satisfied, and the agreed recovery window closed. Retain the evidence and owner decision for each condition. A calendar date, low traffic or green new-path check alone does not establish that old storage/interfaces can be removed. Planning these steps grants no live restore, cutover or destructive-retirement authority.
