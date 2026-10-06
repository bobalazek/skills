# API and data review

Select the relevant sections after establishing accepted behavior, current engine/framework versions and local conventions. For an inherited system, include actual deployed clients, integrations, schema history and operating constraints. For new work, challenge the proposed contract and first supported workload. This reference supports a PR, feature or scoped codebase review; source inspection does not establish live database health.

## Trace the feature

Follow a representative request through routing, authentication, authorization, input parsing, domain rules, data access, serialization, errors and external effects. Include jobs, imports, admin paths, exports and alternate clients that use the same rules. Identify transaction boundaries and response/side-effect ordering. Check how updates race, time out or resume; an isolated CRUD handler can look correct while the combined flow violates an invariant.

Compare API descriptions or schemas with actual routes, client behavior and observed requests. Preserve accepted public field names, nullability, error behavior and supported versions. A naming preference does not justify breaking an existing contract. Distinguish implemented behavior from a proposed spec or a migration that has not run.

## HTTP and CRUD contracts

| Concern | Evidence to inspect or challenge |
| --- | --- |
| Resources and methods | The resource or domain operation has clear meaning; safe methods do not request state changes; replacement and partial update semantics match supported consumers |
| Status and response | Success, validation, authentication/authorization, absence, conflict and server failures communicate the actual result; async acceptance is not claimed as completed work; body and media type match the contract |
| Partial and bulk changes | Omitted versus null fields, writable-field allowlists, validation, authorization per object, atomic versus partial outcomes and bounded batch size |
| Lost updates and retries | Actual concurrency controls, conditional writes where applicable, stable operation identity, duplicate side effects and retry limits; a method name is not proof of the implementation's guarantees |
| Query interface | Allowed filter/sort fields and operators, typed values, valid ranges, bounded page sizes, stable ordering, supported cursor/offset semantics and explicit consistency limits |
| Compatibility | Unknown fields/enum values, old clients, deprecation windows, errors and generated schema/client drift; rollout order preserves supported combinations |

Follow the actual framework and HTTP contract for statuses, headers and validation. Verify disputed protocol claims against the relevant primary standard; do not import a preferred response envelope or require a REST rewrite of a valid existing API.

## Access, headers and resource limits

Authentication must lead to server-side action, object and field authorization. Trace tenant predicates through joins, counts, pagination, exports, background work and caches. Test a different supported actor or tenant rather than checking only a successful owner request. Client-supplied ownership fields and hidden buttons do not establish authority.

Check parameterized values and allowlisted dynamic identifiers/operators; validation must cover query parameters, path values and bodies, including writable properties. Bound request sizes, search cost, page/batch sizes, upload handling and expensive operations. Evaluate rate limits using the actual identity, proxy trust and failure behavior; do not invent a universal rate.

Inspect content-type handling, content negotiation, relevant cache policy, validators and conditional requests where used. Confirm sensitive data is not shared through caches or diagnostic headers. Inspect responses from the real application/proxy boundary, including errors; a middleware declaration does not prove a header reaches the client.

Select security headers for the actual consumers and response types: TLS/HSTS policy, MIME sniffing protection, browser content/frame policy and referrer exposure where applicable. CORS is a browser access policy and does not replace authorization or CSRF protection. Credentialed browser requests need a deliberate origin policy; test preflight and the actual response when CORS matters. Check session-cookie flags and CSRF controls for the chosen authentication flow. Do not report the absence of a browser-only header as a demonstrated server-to-server vulnerability without an applicable threat path.

Keep credentials and unnecessary sensitive content out of URLs, error bodies, logs, traces and sample artifacts. Trace proxy-provided identity or forwarded headers to configured trusted hops before accepting them. A security scan or header count supplies leads, not a complete security verdict.

## Query placement and schema integrity

Verify that growing collections use data-store filtering, authorization scope, projection, sorting, pagination and aggregation before materialization where the store supports them. A bounded local transformation can be appropriate; fetching all records and filtering afterward needs an actual bound and reason. Pagination before authorization can expose totals or omit valid results. Push-down queries still need tenant predicates and parameterization.

Inspect entity identity, keys, relationships, cardinality, nullability, domain types/units, uniqueness scope and deletion behavior against accepted rules. Follow constraints and validation through every writer. Check transaction/isolation behavior, concurrent transitions, cascade effects and any soft-delete or retention policy the project actually uses. A read-then-write precheck may race; a database constraint alone does not authorize the caller.

Use actual access paths to assess relation loading, N+1 queries, repeated counts, unbounded scans and unnecessary payloads. Distinguish query shape from measured production cost. Inspect query plans, representative cardinalities, statistics and parameters when needed. An index existing does not prove it is used, and a sequential scan is not automatically wrong.

For index changes, evaluate predicates and ordering, selectivity, composite-key order, partial/expression/covering options supported by the engine, uniqueness semantics, write/storage cost and overlap with existing indexes. Check creation/removal locking and deployment constraints for the deployed version. Do not prescribe an index for every foreign key or filtered field without considering its workload and existing coverage.

## Scaling and change safety

Partitioning divides a logical dataset into partitions; sharding distributes ownership across separately managed data locations. Verify the actual system's implementation. Neither follows from a row-count threshold alone. Inspect the observed bottleneck, routing/key distribution, hot tenants, pruning or fan-out, global uniqueness, cross-boundary transactions, rebalancing, backup/restore and operating ownership before recommending either. Compare simpler query, index, retention, capacity or connection improvements against the same workload.

For replicas and caches, establish read-after-write behavior, lag or staleness limits, tenant-aware keys, invalidation, failure behavior and source-of-truth ownership. Explain what adding capacity does not fix. Distinguish proposed scale from demonstrated capacity, and do not run load against shared or production services without authority.

Review schema expansion, backfill, validation, mixed-version reads/writes and contraction in actual deployment order. Check lock acquisition, transaction duration, restart/retry, rejected records and progress evidence. Treat removed information, accepted new writes, emitted events and external changes as separate recovery concerns. A down script, flag or backup does not prove lossless reversal.

Plan inspection has its own side effects. Commands such as PostgreSQL `EXPLAIN ANALYZE` execute the statement; a transaction rollback does not guarantee that every sequence or external effect disappears. Use an authorized isolated environment and safe representative data when executing such checks. Never infer production results from a small fixture.

## Report what was established

Tie each finding to a supported scenario, location, requirement and observation. Include the credible worst impact and recovery limits where they affect readiness. Separate source-verified defects, measured results, planned checks and untested hypotheses. Carry relevant request/response, query-plan or migration evidence into the PR with secrets removed; preserve the tested revision, environment and comparison conditions.
