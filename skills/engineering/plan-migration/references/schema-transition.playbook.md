# Schema transitions under live use

Use for persistent schema changes, backfills or indexes while readers and writers remain active. Start from the actual engine/version, migration runner, deployment model and accepted availability/data-loss limits. A rehearsal on another engine establishes only that engine's behavior.

## Select compatible stages

| Change | Expansion and coexistence | Transfer and validation | Contraction gate |
| --- | --- | --- | --- |
| New derived required value | Introduce a representation old consumers can tolerate; establish how new writes populate it. | Backfill under a defined concurrent-write rule, quarantine invalid transformations, verify domain invariants, then enforce the requirement. | All required records and writers meet the new contract; enforcement and recovery are rehearsed. |
| Rename or type/meaning change | Keep an old-compatible path while introducing the replacement; identify which version owns each read/write. | Convert representative values including rejected/lossy cases, reconcile changes during the move, then switch readers. | Incompatible readers/jobs have drained and the recovery/retention window permits retiring originals. |
| Remove stored data | Locate reads, writes, scheduled work, exports and external consumers; stop dependence in a compatible order. | Observe the agreed consumer window and verify retention, archive and recovery obligations. | Explicit retirement evidence and authority, including effects of new writes and delayed consumers. |
| Index or constraint | Confirm the required query/invariant and the supported build/validation procedure for this version and runner. | Rehearse locks, resource use, uniqueness violations, failure state and retry/cleanup. | Verify a valid usable structure and accepted write/read behavior, rather than existence or command dispatch alone. |

Separate compatibility preparation from irreversible retirement even when the delivery system groups them in one release. A coordinated write pause can replace coexistence only when its duration, in-flight work and recovery conditions are accepted and supported.

## Make the backfill resumable

Define the source of truth, deterministic selection key, transformation version, eligibility rule and reject handling. A cursor is progress, not proof that values behind it remain current.

- Commit data and its progress checkpoint atomically where supported, or persist progress only after confirmed commit with safe replay. Exercise a crash before commit, after commit before acknowledgement, and on retry; an advanced checkpoint must not skip rolled-back work.
- Recheck the row's eligibility/version at the write, or use the system's documented locking/change-capture mechanism. A value selected before a concurrent update must not overwrite that newer valid value. Explain what happens to deletes, late inserts, writes behind the cursor and old-version writers.
- Bound transactions and tune batches from measured duration, blocking, replication/change-log load and resource headroom. Choose stop thresholds from the accepted operating budget; row count alone cannot establish safety.
- Reconcile semantic equality, tenant/identity ownership, null/reject counts and representative records alongside totals. Retain rejected rows and replayable provenance needed for repair; equal counts can conceal stale values or changed meaning.
- Name how retries deduplicate external effects, who can pause/resume, and which reconciliation closes the transition. Test interruption and interleaved writes in a run-owned fixture before claiming the mechanism works.

## Check engine and runner behavior

The examples below describe PostgreSQL 18, not universal SQL. Recheck the deployed version and tool's transaction policy before proposing executable commands.

In PostgreSQL 18, many `ALTER TABLE` forms acquire `ACCESS EXCLUSIVE`; a fast metadata change is not necessarily free of blocking. A non-volatile added default can avoid a table rewrite, while volatile defaults and some type changes can require one. Inspect the exact operation, conversion and constraints rather than treating all adds or type changes alike. See [ALTER TABLE](https://www.postgresql.org/docs/18/sql-altertable.html).

For PostgreSQL 18 write-available builds, `CREATE INDEX CONCURRENTLY` runs outside a transaction block and still adds scans, waits and resource load. Failure can leave an invalid index that costs update work; a failed concurrent unique index can continue enforcing uniqueness. Inspect catalog state and the cause before choosing documented cleanup/rebuild and controlled retry. Partitioned tables need their version-specific procedure. A maintenance window may instead justify a regular build. See [CREATE INDEX](https://www.postgresql.org/docs/18/sql-createindex.html#SQL-CREATEINDEX-CONCURRENTLY).

Check lock/statement timeouts, aborted transaction handling and connection-setting cleanup against the actual engine. A timeout does not prove other clients were unblocked or that no partial artifact remains. Inspect state before retrying; do not mark an operation ready from a generated migration file or an absent error alone.

## Close the stage

Record the engine/version, candidate/mapping, fixture/load, actual command, committed progress, rejected records, concurrency scenario and observed lock/resource limits. Local simulated interleaving is useful proof of application logic; it does not establish production locking or capacity. Carry remaining differences, named stop/recovery owners and next evidence into the plan.
