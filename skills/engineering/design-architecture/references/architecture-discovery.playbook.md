# Architecture discovery

Use the sections that can change the requested implementation. A focused feature needs its affected boundaries; a new system or inherited platform needs a broader baseline. Keep current, proposed, accepted, and unknown states distinct. Reconcile answers in the existing technical design rather than creating a questionnaire document for every conversation.

At greenfield intake, first establish the goal and first journey, app targets, hosting/environments, internal processes and relevant infrastructure, data, file, API, AI, MCP and delivery dependencies below. Inspect supplied templates and accepted decisions before asking. Ask only unresolved choices that could change the foundation; capture nonblocking assumptions with an owner and validation point. An empty answer is not approval for a vendor, runtime, budget or new service. Keep dependent setup blocked while independent work can continue.

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

Start from the retained request, accepted clarifications and target scope. For an otherwise unspecified greenfield app, state web as a provisional default; resolve whether mobile is responsive web or an installed app, and consider desktop where requested capabilities require it. Existing project decisions take precedence. Do not add runtimes or shared packages merely to cover every platform.

| Surface | Decisions that affect implementation |
| --- | --- |
| Web | Static/server/client rendering needs, discoverability, authenticated and public boundaries, browser support, session/cookie behavior, caching and network failure |
| Mobile | Supported platforms, native versus shared implementation, device capabilities/permissions, offline storage and sync conflicts, background limits, deep links, store distribution and older-client compatibility |
| Desktop | Supported operating systems, native versus web shell, filesystem/process privileges, local secrets/data, signing, installer/update/rollback strategy and offline use |
| API or worker | Consumers, contracts/versioning, synchronous versus queued work, bounded retries, idempotency, backpressure, ordering and job recovery |

Hybrid products can need several rows. Choose boundaries by actual capabilities and constraints, not by a preferred framework. A prototype proves only the platform behavior it exercised.

For each supported target, record the primary user outcome, relevant OS/browser/device and input support, distribution/update path, local/offline state and permissions, and available validation environment. Identify shared contracts separately from platform-specific behavior. Do not claim device, store or packaged-app coverage from a browser preview or simulator alone.

## Repositories and runtime boundaries

Decide repository topology separately from runtime architecture. A monorepo may contain independently deployed services; several repositories may still ship one application. Compare shared change frequency, ownership/access, language/build tooling, CI cost, release/versioning, cross-repository compatibility, and discoverability before choosing one repository or several.

Start with the simplest viable runtime structure. A modular monolith can keep deployment simple while isolating domain ownership. Split services when independent scaling, ownership, isolation, or release requirements justify network contracts and operating cost. Event-driven work needs a reason for asynchronous delivery and explicit ordering, deduplication, replay, and failure handling. Layers or ports/adapters should isolate a real dependency or rule; they are not folders to create by default.

For inherited software, map existing boundaries, coupling and deployed versions before proposing a target. Separate the target from the migration route. Identify coexistence, incremental cuts, data movement, contract compatibility and rollback limits. Preserve useful patterns; do not infer that old means wrong.

## Data and dependency inventory

Identify the source of truth and permitted readers/writers for each important entity. Decide whether one database, separate schemas or separate databases fit transaction boundaries, tenancy, isolation, residency and operational needs. Record consistency and reconciliation where one transaction cannot cover the change. Include schema evolution, constraints/indexes, connection limits, backup and demonstrated restore needs.

Make the relevant schema choices buildable: identities/keys, relationships and cardinality, field meaning and units, nullability, uniqueness, lifecycle/deletion, transaction boundaries and the queries each important flow needs. Keep the domain model's business meaning distinct from storage and public API representations. Record accepted naming and mapping conventions without replacing useful existing ones. Index, partition or shard only for an evidenced access, retention, isolation or capacity need; state routing, consistency and operating costs and compare a simpler design. Do not derive scale requirements from row counts alone.

For HTTP/API boundaries, settle resource and operation semantics, validation and object/field permissions, errors, list/filter/sort/page contracts, concurrency and retry behavior, supported consumers, and rollout/deprecation. Include relevant transport, cache and browser security policies with their verification path. Detailed contracts belong with the owning interface; architecture links them and explains ownership and failure behavior.

For a proposed cache or Redis service, first identify the measured or required role: disposable cache, session state, coordination, queue, or durable data. Define invalidation, TTL, miss/failure behavior, persistence expectations, eviction and capacity. A cache must not silently become an unprotected source of truth. Reuse an existing suitable service when its ownership, capacity and isolation are established.

Keep one scoped dependency inventory in the existing design. External means outside the relevant application, operating owner or trust boundary, not only an HTTP API: a database, object store, hosting platform or build service can be external too. Distinguish ownership/control from network location and managed versus self-hosted responsibility. Include only required or existing components, and distinguish a source package, running process, hosted resource and third-party dependency:

| Boundary | Discover before committing the design |
| --- | --- |
| Hosting and delivery | Cloud/account/project/region, hosted app platform or self-managed VM/cluster, networks/ingress/egress, DNS/CDN/certificates, build/CI/artifact registry, secrets and telemetry services where relevant; deployment identity, availability and operating responsibility |
| Internal processes | Frontend, API, worker/scheduler or other actual entry points; responsibility, deployment unit, synchronous/queued connections and shared contracts |
| Data services | Local, self-hosted or externally managed database/source of truth, cache/session store, queue and search roles; ownership, consistency, persistence, connection/concurrency limits and recovery |
| Files and transfer | Object/blob storage, local/shared disk or managed file-transfer endpoint; upload/download path, authorization, signed-link lifetime, metadata versus blob ownership, size/type limits, interrupted transfer, retention/deletion and recovery |
| External APIs | Identity, payment, email, analytics and other business integrations; inbound callbacks as well as outbound requests, contract/version, quotas, retries, reconciliation and portability |
| AI providers and gateways | Direct provider versus gateway responsibility, data sent and retained, model/API version, tool authority, spend/rate limits, timeout/cancellation, fallback meaning and evaluation boundary |
| MCP and tool services | Local or remote server/connector, transport and contract/version, authentication and effective tool authority, permitted data/actions, untrusted output handling, side effects, timeout/cancellation, audit and recovery |
| Runtime/build dependencies | Material SDKs, packages, runtimes, registries or generators whose compatibility, trust, licensing or availability constrains the architecture; distinguish build-time access from deployed runtime requirements |

For each relevant entry, record purpose, actual or proposed provider/placement, account/region/environment, owner or unassigned responsibility, data exchanged, trust boundary, configuration/secret names (never values), protocol/contract, capacity/quota/cost assumptions, failure/recovery and local validation path. Inspect current provider contracts before making capability claims. Distinguish identity authentication from application authorization and tenant ownership. Do not add a service or tool just to fill the inventory. Follow existing provider and hosting decisions; cloud brands, managed platforms and self-hosted options are choices to evaluate, not default architecture requirements.

Trace one important request and one relevant failure through the inventory: untrusted inputs, identities and sensitive data; durable writes and external effects; timeout/retry/duplicate handling; safe diagnostics and recovery ownership. For growth, connect workload units and burst/concurrency assumptions to the actual bottleneck, provider quota, connection pool or storage/transfer limit. Compare the smallest viable design before proposing replication, service splits or new infrastructure. Keep unmeasured capacity and unexercised threat mitigations explicit.

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
