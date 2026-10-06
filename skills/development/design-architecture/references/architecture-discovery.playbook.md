# Architecture discovery

Use the sections that can change the requested implementation. A focused feature needs its affected boundaries; a new system or inherited platform needs a broader baseline. Keep current, proposed, accepted, and unknown states distinct. Reconcile answers in the existing technical design rather than creating a questionnaire document for every conversation.

## Product and workload

Establish who uses the system, the important journeys, where it runs, and what must work when a dependency or connection fails. Gather these constraints from requirements, code/configuration, measurements, and the responsible people:

| Constraint | Questions and useful evidence |
| --- | --- |
| Users and tenancy | Total accounts, active users over a stated period, concurrent sessions, tenant sizes, roles, geographic distribution, accessibility and language needs |
| Traffic | Requests per second by important operation, peak/burst duration, read/write mix, payload sizes, background work and external rate limits; registered users alone do not determine traffic |
| Data | Initial volume, growth and retention, sensitive categories, residency, query patterns, integrity requirements and deletion/export needs |
| Service targets | User-visible latency percentiles, availability window, acceptable data loss (RPO), recovery time (RTO), offline/degraded behavior and contractual commitments |
| Delivery constraints | Deadline, team and operating capacity, current skills, build/migration budget, monthly running budget, ownership and support hours |

For estimates, show the calculation and range. For example, requests per second depend on active sessions and operations per session, with explicit assumptions about duration and bursts. Check measured bottlenecks before extrapolating. Carry unanswered material constraints into open decisions; a design with unproven capacity is not capacity-verified.

## Application shape

| Surface | Decisions that affect implementation |
| --- | --- |
| Web | Static/server/client rendering needs, discoverability, authenticated and public boundaries, browser support, session/cookie behavior, caching and network failure |
| Mobile | Supported platforms, native versus shared implementation, device capabilities/permissions, offline storage and sync conflicts, background limits, deep links, store distribution and older-client compatibility |
| Desktop | Supported operating systems, native versus web shell, filesystem/process privileges, local secrets/data, signing, installer/update/rollback strategy and offline use |
| API or worker | Consumers, contracts/versioning, synchronous versus queued work, bounded retries, idempotency, backpressure, ordering and job recovery |

Hybrid products can need several rows. Choose boundaries by actual capabilities and constraints, not by a preferred framework. A prototype proves only the platform behavior it exercised.

## Repositories and runtime boundaries

Decide repository topology separately from runtime architecture. A monorepo may contain independently deployed services; several repositories may still ship one application. Compare shared change frequency, ownership/access, language/build tooling, CI cost, release/versioning, cross-repository compatibility, and discoverability before choosing one repository or several.

Start with the simplest viable runtime structure. A modular monolith can keep deployment simple while isolating domain ownership. Split services when independent scaling, ownership, isolation, or release requirements justify network contracts and operating cost. Event-driven work needs a reason for asynchronous delivery and explicit ordering, deduplication, replay, and failure handling. Layers or ports/adapters should isolate a real dependency or rule; they are not folders to create by default.

For inherited software, map existing boundaries, coupling and deployed versions before proposing a target. Separate the target from the migration route. Identify coexistence, incremental cuts, data movement, contract compatibility and rollback limits. Preserve useful patterns; do not infer that old means wrong.

## Data and external services

Identify the source of truth and permitted readers/writers for each important entity. Decide whether one database, separate schemas or separate databases fit transaction boundaries, tenancy, isolation, residency and operational needs. Record consistency and reconciliation where one transaction cannot cover the change. Include schema evolution, constraints/indexes, connection limits, backup and demonstrated restore needs.

For a proposed cache or Redis service, first identify the measured or required role: disposable cache, session state, coordination, queue, or durable data. Define invalidation, TTL, miss/failure behavior, persistence expectations, eviction and capacity. A cache must not silently become an unprotected source of truth. Reuse an existing suitable service when its ownership, capacity and isolation are established.

Inventory external identity, OAuth/OIDC, payments, email, storage, search, analytics and other relevant services. For each, name purpose, owner, data exchanged, trust boundary, protocol/contract, quotas, failure/retry behavior, local test path and exit/data-portability constraints. Distinguish identity authentication from application authorization and tenant ownership. Verify actual provider capabilities and integration requirements rather than inferring them from a vendor name.

## Hosting and operation

Inspect what already exists: environments, cloud accounts, smaller providers, managed platforms, virtual machines, Kubernetes clusters, databases, secrets, networking, CI/CD, telemetry and staff who operate them. Existing infrastructure is an option, not automatic proof of capacity or permission to use it.

Compare managed and self-hosted services using total operating responsibility: provisioning, patches, upgrades, access, backups/restores, failover, monitoring, incidents, on-call work, capacity and egress. An existing Kubernetes deployment may fit; a new cluster needs a requirement that outweighs its operating burden. Check whether a simpler deployment meets the same constraints. Do not equate a smaller provider with unsuitable scale or a large cloud with necessary complexity.

Define environment separation, deployment identity, secret access, public/private ingress, storage, scaling limits, release/migration order, health signals and recovery ownership. Specify how a user-visible journey is checked after deployment and which observation window and failure signal trigger action. Diagram desired behavior separately from deployed facts; a diagram does not prove a successful restore or release.

## Architecture views

Use C4 levels to answer distinct questions:

- **Context:** people, the system boundary and external systems, with their purposes and relationships.
- **Containers:** applications and data stores, responsibilities, technologies and communication paths. A C4 container does not mean a Docker container.
- **Components:** meaningful internal responsibilities within one container when that detail helps implement or review a boundary.
- **Code:** only when a local structural question benefits from it; do not hand-maintain a duplicate of discoverable symbols.

Add a dynamic/sequence view for a critical interaction and a deployment view for the relevant environment when those explain ordering or operational placement. Keep names consistent across views; label relationship direction, meaning and protocol where relevant, and distinguish external/trust boundaries. State scope, revision/status and a small legend. Use the project's supported editable diagram format; render changed diagrams and trace a representative success and failure path against the design or code. Do not require every diagram level for every task.

## Ready for implementation

The selected work needs resolved material choices, owned contracts/data, preserved constraints, a feasible deployment path and checks tied to its risks. List remaining experiments and owner decisions instead of hiding them in implementation tasks. Update the current design, link accepted ADRs and assumptions, and identify the next prototype, migration plan, phase or task. Architecture planning alone authorizes no provisioning or live load test.
