# System explanation

Use for system/architecture orientation, not every symbol explanation. Keep evidence in the requested answer or existing document. Select the affected boundaries; missing runtime access remains unverified rather than a reason to invent deployment facts.

## Locate the running parts

- [ ] Identify the product goal, supported app targets and important actors from current project sources. Name the revision/environment and distinguish accepted intent, observed implementation and recorded rationale.
- [ ] Map runnable frontend, API, worker/scheduler or native processes to their entry points, source packages and responsibilities. A repository folder, library or build artifact is not necessarily an independent service.
- [ ] Inspect relevant hosting/IaC, build/deployment configuration and operating docs. Explain actual cloud/platform or self-hosted placement, account/region/environment separation, public/private ingress, relevant networking/DNS/CDN, build/CI/registry, secret/configuration ownership, telemetry and release path with source links; label declared resources separately from observed deployed versions.

## Follow data and dependencies

- [ ] Include actual local, self-hosted or externally managed databases, caches/session stores, queues and search services with source-of-truth and durability roles. Show which process reads/writes each; do not infer a service is used from an installed SDK alone.
- [ ] Follow file upload/download and transfer paths through local/shared disk, object storage or transfer endpoints where present. Explain metadata/blob ownership, authorization, sensitive contents, retention and recovery from the actual implementation.
- [ ] Map external APIs, AI providers/gateways and local/remote MCP or tool services as appropriate trust boundaries, including callbacks, data leaving the system, effective tool/action authority and the application owner of failures. External dependencies also include managed data, hosting and relevant delivery/runtime/build services; network location alone does not establish ownership or trust. Keep provider capabilities, settings and deployment claims tied to evidence; do not print secrets.

## Explain useful paths and limits

- [ ] Draw a scoped system/deployment view with internal processes, hosting/environment and relevant data/external services, then a request/job/data sequence when order matters. Label arrows with operation/protocol/data, mark trust boundaries and use a small legend for implemented, declared, deployed, proposed or unknown states. Combine views for a simple system instead of drawing repetitive graphs.
- [ ] Walk a representative user operation to its result and one relevant interruption/failure through the same named nodes: authorization, state/write, queue/API/file effect, acknowledgement and recovery. Source evidence of an error branch is not proof that recovery ran.
- [ ] Explain measured workload/capacity constraints, visible bounds or known threats only where they help the requested understanding. Distinguish observed bottlenecks, source-level risks and untested hypotheses; route requested threat/scale assessment to the owning design or review rather than turning orientation into a speculative audit.
- [ ] Verify node/edge claims against source/configuration and render the diagram when a suitable renderer is available; disclose a rendering gap. Link entry points and canonical docs, note contradictions and unverified runtime facts, and check that the reader can locate where a representative change belongs.
