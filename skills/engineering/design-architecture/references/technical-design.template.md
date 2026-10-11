# Technical design

## Scope and constraints

Accepted behavior/spec references, application surfaces, current revision/baseline, preserved contracts, and relevant operating constraints. Record measured versus assumed users/traffic/data volume, service targets, budgets, team/operating capacity, and unresolved questions with units and evidence.

## Structure

| Boundary | Owned behavior/state | Public contract | Consumers | Failure behavior |
| --- | --- | --- | --- | --- |
| Module or service | Concrete responsibility | Inputs, outputs, invariants | Actual callers | Error, recovery, retry, or consistency contract |

Separate repository layout from runtime boundaries. Identify source-of-truth data, transaction/consistency rules, external identity and services, and owned contracts. Use the useful C4 levels: context and container views for the system, component detail only where needed. Include sequence/failure and environment-specific deployment views when relevant; render diagrams and walk representative paths.

Link applicable conventions and exceptions. Show the affected feature/package location, allowed dependency direction, public export boundary, and a representative class or function with its filename and test location. Explain any new class/module boundary without inventing files for unsettled responsibilities.

Where code crosses runtime targets, identify browser-safe, server-only and build/tooling dependencies, including transitive imports. Map each deployed process to its entry point and owned work; a source package is not necessarily a separately deployed service.

## Runtime paths, when affected

Trace the relevant synchronous request, background job or inbound event through its actual owners. Reuse the project's diagram or concise sequence; do not invent missing layers to fill a standard flow. Show the points that determine correctness:

- Input validation, caller/event authenticity and resource authorization, including alternate entry points. UI visibility or an authenticated connection alone does not establish authority for each operation.
- Domain work, persistence/commit, enqueue or external effect, and acknowledgement. Identify failure gaps between them; a queue with retries alone does not prove durable handoff, safe duplicate effects or eventual completion.
- Public serialization and the consuming caller's observed shape; shared types alone do not establish the runtime wire contract.
- Correlation across process/job boundaries, safe diagnostic context, and who owns failure reporting and recovery. Keep these as design requirements until exercised.

## Deployment and operation

Existing versus proposed hosting/services, managed/self-hosted responsibilities, environments, access/secrets, capacity limits, backups/restore, release/migration order, observation signals and recovery ownership. Link comparable cost scenarios. For AI behavior, include tool/data authority, orchestration gates, memory lifecycle, evaluation and spend/latency bounds.

Link or include the scoped dependency inventory from discovery: internal frontend/API/worker processes; local, self-hosted or externally managed databases/caches/queues; file storage/transfer; hosting/network/delivery services; APIs, AI providers/gateways, MCP/tool services and material runtime/build dependencies that actually apply. Map each to its hosting/environment and operator, configuration names, data/trust boundary, contract, capacity assumption, failure and validation path. Show implemented, deployed, proposed and unverified states separately in the deployment and request/data-flow views; source or infrastructure declarations alone do not establish a running deployment.

For affected long-running processes, distinguish startup, readiness and graceful shutdown/draining from an individual request's lifecycle. State where durable state lives and what a restart or lost dependency can lose, including accepted but unfinished work. Separate build-time configuration from runtime configuration when that changes deployment or secret exposure.

## Decisions

Selected approach, credible alternatives, evidence, trade-offs, assumptions, status/acceptance source, and revisit conditions. Link durable decisions in the project's decision/ADR location instead of copying them into multiple documents or AGENTS.md.

## Change and verification

Integration order, compatibility or data migration, rollback/recovery, observability, and the checks that demonstrate the design. List unresolved decisions separately from implementation tasks.

For consequential choices, state the credible worst failure, affected consumers/data, reversibility before and after accepted writes or destructive cleanup, and the point where recovery requires forward repair or accepts loss. Identify the recovery owner and evidence needed; keep proposed rehearsals distinct from executed proof.
