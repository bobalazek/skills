# Query and storage conventions

Load when establishing repeated query rules, index policy, or a response to measured storage/workload growth. The deliverable is a usable convention with evidence and exceptions. Database tuning or a storage migration needs its own authorized implementation. Vendor details below were checked against the linked official documentation on 2026-10-06; verify the deployed engine/version before adoption.

## Find the actual workload

For existing code, trace caller input and authorization through the query builder/ORM to emitted queries, connection routing, and result handling. Inspect all meaningful callers of the shared access path, including jobs, exports, counts, and admin operations. Record implicit default scopes, relation loading, generated SQL, transaction boundaries, and cache behavior. ORM method names do not establish how much data the database reads.

Use representative request/query evidence before deciding what is slow: parameter distribution, data volume and skew, returned rows/bytes, query count, latency distribution, throughput, and wait/resource metrics. Record engine/version, schema/index state, concurrent workload, and cache conditions. Redact sensitive values in shared plans and logs. A single fast development query is not a capacity measurement; an arbitrary row-count threshold is not a scaling requirement.

For a new feature, list its expected reads/writes and the source of any volume assumption. Check scope and query shape with representative test data; identify what production signal would justify more work. Avoid inventing benchmark numbers or an index for every selectable field.

## Keep work in the query

Use the existing access owner for filtering, authorization/tenant scope, ordering, projection, aggregation, and limits. Apply scope consistently to relations and counts. Return only fields the caller may see. Map dynamic identifiers to an allowlist and bind values through the existing query API. Follow [HTTP/API conventions](http-api.checklist.md) for collection contracts.

Inspect query count for list views and loops. Resolve demonstrated N+1 access with a bounded relation load, join, batch, or aggregate that preserves authorization and row cardinality. One giant join can multiply rows; fetching every related row can replace round trips with a memory problem. Check both query count and returned volume. For bounded related-record loads, collect needed keys, deduplicate only where semantics permit, then associate results by the correct key or group. Preserve caller order where promised and handle missing or unauthorized records without silently losing entries.

Use deterministic order for limited results and keyset traversal. For example, a tenant-scoped feed sorted by `(created_at, id)` needs both values in its cursor comparison; an index candidate must reflect the scope and order. Validate the actual query plan and ties. Do not claim constant-time pagination: filters, data distribution, and access paths still matter.

## Batching, concurrency, and transactions

Choose execution shape from dependencies, failure semantics, and capacity. A bulk statement or bounded batch can remove round trips; parallel individual calls retain their query count and may add contention. Use the existing bulk API when it preserves validation, authorization, required hooks, and result/error semantics. Bound batches by driver parameter limits, payload size, lock duration, and observed workload. Sequential execution is appropriate for dependent operations or required ordering, and can be sufficient for a small workload.

Independent calls can overlap when latency matters and the driver/upstream permits it. Bound active work and queued inputs using existing facilities, accounting for concurrent requests, workers, application instances, pool capacity, and operational headroom. The concurrency limit should come from workload evidence rather than a fixed universal number. Inspect pool wait time and held connections before increasing capacity.

Define what happens when one operation fails. Check whether the selected concurrency primitive waits for, cancels, or leaves sibling work running; none of those outcomes establishes that completed effects were undone. Inspect every collected failure and wait for work to settle before releasing shared resources or retrying. Cancellation, deadlines, and partial success need explicit support and behavior in the underlying operations. Use the language/runtime's established task-lifetime and error-handling model.

Use a transaction when an identified invariant requires database operations to commit or abort together. Keep every participating query in the transaction context supplied by the database API; inspect helpers for accidental use of an unrelated session or global pool. Verify the driver's connection ownership and concurrency restrictions. Parallel syntax alone cannot establish parallel execution or a shared transaction.

Atomic commit does not by itself prevent every concurrency anomaly or guarantee one stable snapshot for separate reads. Select constraints, conditional updates, locks, or an isolation level that enforces the actual invariant. Check the deployed database's guarantees and defaults; test the competing operation rather than merely checking that both statements use a transaction.

Keep the transaction's work and resource lifetime bounded. Complete its queries before commit/rollback and release the client on every exit; preserve failure when a helper rejects. Avoid unrelated network waits inside a transaction unless the accepted design requires them and accounts for lock duration and failure. An external message or payment is not undone by a database rollback; use the project's delivery/reconciliation mechanism for effects spanning systems.

Retry only identified transient failures within a bounded attempt/time budget, with backoff when appropriate. Follow the database's retry unit: a failure may require rerunning the whole transaction and decisions based on its reads, not just the last statement. Ensure retryable code does not duplicate external effects; a connection loss near commit can leave the outcome unknown and needs reconciliation or idempotency before repeating.

Check a representative batch boundary, partial failure, competing write, and relevant retry path before claiming the convention preserves correctness. Measure both end-to-end behavior and database/pool impact for a claimed concurrency improvement. Do not wrap every read in a transaction or replace every awaited loop with parallel work as a style rule.

## Measure a proposed query change

Start with the engine's estimated plan and available production telemetry. An executed plan adds runtime evidence but can be expensive. PostgreSQL `EXPLAIN ANALYZE` executes the statement, including effects; even a `SELECT` can invoke effectful functions. Use a safe representative environment and inspect the statement first. A transaction rollback is not a blanket safeguard for external effects, sequences, locks, or load. [PostgreSQL EXPLAIN](https://www.postgresql.org/docs/current/sql-explain.html).

Compare estimated and actual cardinality, scans, join loops, sort/hash spills, and buffers where available. Separate execution work from connection/pool waits, lock contention, network transfer, and result conversion. A sequential scan can be appropriate; an index scan is not proof of improvement. Row-estimate errors prompt investigation of statistics, skew, correlations, and parameter-sensitive plans. [PostgreSQL plan interpretation](https://www.postgresql.org/docs/current/using-explain.html).

Change one meaningful cause at a time, then compare equivalent data, parameters, concurrency, and cache conditions. Check result equivalence, relevant latency/throughput, memory or I/O, and write cost. Repeat enough to distinguish a useful difference from noise. Do not flush production caches to create a benchmark or claim a cold-cache run merely because a session was reset. Keep the plan and measurement tied to the tested revision and environment.

## Choose and maintain indexes

Start from a recurring access path or enforced invariant. Record the query family, predicates/order, expected benefit, write/storage cost, and migration method. Reuse an adequate existing index when evidence supports it.

| Candidate | Decision and verification |
| --- | --- |
| Composite index | Match useful equality/range/order combinations. Leading columns matter for B-trees, but optimizer behavior depends on engine/version and data; avoid a universal "most selective first" rule or claim that later columns can never be used. [PostgreSQL multicolumn indexes](https://www.postgresql.org/docs/current/indexes-multicolumn.html). |
| Partial or expression index | Tie it to a predicate/expression the real query can use, including parameterization, casts, and collation. Check generated SQL and the plan. [PostgreSQL partial indexes](https://www.postgresql.org/docs/current/indexes-partial.html), [expression indexes](https://www.postgresql.org/docs/current/indexes-expressional.html). |
| Covering index | Include selected values only for a demonstrated read benefit. PostgreSQL index-only scans also depend on visibility, so covering columns do not guarantee zero heap visits; extra payload increases index size. [Index-only scans](https://www.postgresql.org/docs/current/indexes-index-only-scans.html). |
| Foreign-key access | Inspect joins and parent update/delete checks. PostgreSQL does not automatically index referencing columns; choose useful indexes from access patterns and integrity operations. [Foreign-key behavior](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-FK). |
| Specialized index | Select full-text, spatial, JSON, range, or other supported access methods only for the relevant operators and workload. Confirm engine support and measured benefit rather than prescribing a type by column name. |

Before removing an index, inspect constraint ownership, overlapping definitions, query plans, and usage over a representative operating cycle. Statistics resets, failovers, replicas, infrequent reporting, and maintenance jobs can hide usage. Similar prefixes do not prove redundancy; key order, predicates, uniqueness, collation, and included columns can change the role.

Choose index creation/rebuild procedures from the engine's actual locking and transactional behavior. PostgreSQL concurrent builds reduce write blocking but still wait, use resources, cannot run inside a transaction block, and can leave an invalid index on failure. Define monitoring, cancellation/recovery, and a validity check; do not describe an online operation as lock-free. [PostgreSQL concurrent index builds](https://www.postgresql.org/docs/current/sql-createindex.html#SQL-CREATEINDEX-CONCURRENTLY).

## Match capacity measures to evidence

Before distributing storage, investigate the measured limit: unnecessary reads, bad access paths, contention, connection pressure, memory/I/O, or an actual capacity ceiling. Use the connection/concurrency budget above. Replicas need explicit lag and read-after-write behavior. Caches or precomputed aggregates need freshness limits, authorization-safe keys, invalidation, and repair ownership. A cache hit rate alone does not establish correctness or usefulness.

Use an analytical store or offline pipeline only when analytical work, retention, or freshness requirements justify another data copy. Define ownership, change/deletion propagation, reconciliation, and how stale results are represented. Storage additions do not remove the need to preserve source invariants.

## Partitioning and sharding are different choices

| Choice | Evidence that can justify it | Costs and checks |
| --- | --- | --- |
| Table partitioning | Queries can prune by a useful key, or retention/maintenance benefits from managing bounded table segments. | Check pruning for real parameters, partition count/planning cost, missing/future partitions, skew, maintenance, and cross-partition constraints. A local partitioned table does not by itself add independent write capacity. |
| Sharding | A measured capacity/isolation/locality need requires distributing data across independent storage nodes, and simpler measures do not meet it. | Define routing/key ownership, hotspots, rebalancing, cross-shard queries/transactions, uniqueness/IDs, backup/restore, and failure behavior. Include operating cost and migration evidence. |

For PostgreSQL partitioning, evaluate range/list/hash against actual access and retention. Pruning needs predicates the engine can use; queries without a useful key may touch many partitions. Partitioned primary/unique constraints must include the partition key columns under the documented limitations, which can conflict with a required global identity. Partition detach/drop can help retention but still needs authority, lock checks, and recovery planning. [PostgreSQL partitioning](https://www.postgresql.org/docs/current/ddl-partitioning.html).

For sharding, choose a key using both query targeting and load distribution. A tenant key can simplify locality but concentrate a large tenant; hashing a monotonic key can spread writes while losing range locality. Identify operations that must span shards and verify the selected engine's guarantees. For example, MongoDB routes using the shard key and may broadcast queries that cannot target shards. This illustrates a routing cost, not a requirement to use MongoDB. [MongoDB sharding](https://www.mongodb.com/docs/manual/sharding/).

Neither technique is a mandatory next stage after an arbitrary number of rows, nor must partitioning precede sharding. Record the measured constraint, rejected simpler options, representative workload proof, failure/recovery approach, and owner before proposing either. Load [data lifecycle and migration guidance](data-contracts.checklist.md) for schema compatibility and recovery limits.

## Publish an enforceable rule

A useful rule names the access path and boundary, an example from the project, valid exceptions, and a check. For instance, a protected collection might require database-scoped pagination and matching counts, checked with another tenant's rows and tied sort values. An index proposal needs a before/after plan plus workload measurements; it remains a proposal until accepted. Record unmeasured assumptions and production-only checks separately, and do not present a convention document as a completed performance improvement.
