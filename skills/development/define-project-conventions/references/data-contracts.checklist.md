# Data and integration conventions

Use this reference when the surface stores data, exposes a contract, or coordinates state changes. Inspect the existing schema/model, real readers and writers, migrations, authorization, and failure behavior before selecting a pattern. A convention should protect an identified invariant or make an existing boundary easier to use.

## Model the domain

For each relevant entity or value, establish its meaning and owner, identity, lifecycle, and relationship to other records. Document cardinality, optionality, uniqueness scope, and allowed state transitions. Distinguish an absent value, unknown value, empty collection, and zero when they have different business meanings.

Inspect accepted representations for identifiers, dates/times and time zones, money/currency and rounding, measurements/units, enumerated states, and free text. Use the domain's actual requirements and database/runtime capabilities. Do not invent precision, retention, deletion, or compliance rules to fill a template.

Separate the domain concept from its storage and transport representation when they differ. Record how an ORM model maps to tables/collections and fields, how public payloads are serialized, and where conversion happens. Establish naming from existing language and database practice: model/type names, table/column case and pluralization, relationship keys, join tables, indexes/constraints, and migration names. Preserve external field names as contracts until a change is agreed.

## Locate the invariants

Write important invariants as concrete statements with an enforcing owner and failure behavior. Depending on the domain, examples might include tenant-scoped uniqueness, a non-negative quantity, permitted status transitions, or an operation that creates only one business effect for a repeated request. These are prompts, not requirements for every project.

| Concern | Establish and verify |
| --- | --- |
| Validation | What is checked at each untrusted boundary; how malformed input, unknown fields, and invalid state are rejected |
| Constraints | Which invariants belong in schema constraints, application/domain code, or both; what every writer must respect |
| Authorization and tenancy | Who can read/change which record; how ownership and tenant scope survive joins, background work, caches, and bulk operations |
| Atomicity | Which updates must succeed together; transaction scope and behavior if a dependent step fails |
| Concurrency | Lost updates, competing transitions, uniqueness races, or duplicate delivery relevant to the flow; the existing locking/versioning/idempotency mechanism |
| Derived data | Source of truth, recomputation or invalidation, and acceptable staleness where established |

An application precheck alone may race with another writer; inspect the database or domain mechanism that enforces the accepted invariant. A database constraint cannot establish caller authorization by itself. Trace alternate writers such as imports, jobs, admin tools, and migrations before claiming a rule covers all writes.

Use the owning data-access pattern already present. Introduce a service/repository layer only for an identified responsibility. Specify query placement, relation loading, pagination/order, index expectations, and connection/transaction handling only where those choices recur or affect correctness and supported scale. Verify query costs rather than mandating an index for every field.

## Evolve durable data

Use the project's migration and versioning mechanism. Establish schema/model ownership and the rule for generated versus editable files. Include a representative change with its applicable checks.

For durable environments, examine the actual rollout sequence: old and new readers/writers, schema expansion, nullable/default behavior, backfill, validation, and later cleanup when needed. Check whether a migration can block traffic, exceed the operating window, or expose mixed data. Define resumability and retry behavior for long-running backfills where relevant.

State recovery limits honestly. Reversing a schema change does not necessarily recover removed or transformed data. Destructive changes need an authorized retention/deletion decision and an appropriate backup, restore, or forward-recovery plan. Do not claim rollback works without evidence. Tests or a safe representative rehearsal should exercise the affected compatibility and invariant boundaries; do not run destructive production checks to validate a convention.

## APIs and integration boundaries

Document the owner and consumers of an API, event, file format, or job contract. Follow the project's conventions for identifiers, naming, serialization, optional fields, validation, errors, pagination/order, and version/deprecation policy. Distinguish client-visible failures from internal diagnostic details. Confirm a contract against actual consumers and supported versions.

For external requests, state relevant authentication, authorization, timeouts, cancellation, retry/backoff, rate limits, and partial-failure behavior. Retries must respect the operation's effects; do not infer safe repetition from the HTTP method or a success-only test.

For webhooks and jobs, establish authenticity, replay/duplicate handling, ordering, idempotency scope and expiry, concurrency, and recovery ownership where applicable. Trace a failure between persisting local state and performing an external effect. Document the existing reconciliation or delivery mechanism if atomicity cannot span both systems; do not prescribe a queue or distributed transaction without a demonstrated need.

## Lifecycle and evidence

Follow accepted rules for retention, archival, soft/hard deletion, audit history, and recovery. Consider copies in caches, indexes, exports, backups, logs, and third-party systems when the stated requirement reaches them. Limit sensitive payloads and secrets in logs and test fixtures; preserve enough diagnostic context to investigate a failure.

Choose checks that exercise the invariant and observable contract, including the relevant rejection, retry/concurrency, or migration scenario. Internal mocks alone do not establish integration behavior. Record which claims came from source inspection, which were executed against a test environment, and which remain undecided. Put accepted rules in their canonical home and link the relevant schema, decision, and check.
