# Engineering improvement work

This is the working record for the user's requests of 2026-10-11. It preserves the requested outcomes and execution order; package instructions and evaluation results remain in their existing authoritative locations.

## Accepted intent

Use the personal SaaS template and the Corco development/review guidance as inspiration for portable skills. Repository instructions and maintained surrounding code override shared defaults. Keep procedures modular, use the smallest complete solution, and prefer calibrated automated checks for rules that tools can enforce.

The user clarified that broad category names are insufficient: each development and review category needs several concrete checkbox items. Preserve the original request and accepted clarifications so final verification checks the intended user outcome as well as derived specifications and tests. Support web by default for unspecified greenfield planning, with mobile and desktop where required; responsive web is distinct from an installed application.

Requested categories: requirements/intent; correctness/regressions; architecture/maintainability/reuse; conventions/consistency; data/API/contracts and backward compatibility; security/privacy; performance/reliability/scalability; design/UX; behavioral decisions; accessibility/SEO/content; operability/observability/release safety; dependencies/tooling/docs; and tests/validation. Apply relevant items with evidence, preserve failed or missing checks, and explain exclusions instead of claiming every platform or category passed.

The next architecture pass must clarify infrastructure and hosting at greenfield intake, map internal processes and external dependencies (including data stores, caches/queues, file storage, AI/API providers and gateways), explain existing deployments with useful graphs, consider threats and scaling, and assess sensible PR splits with independently deployable increments where viable. This pass follows the first two passes below. Merge duplicate skills only when they actually own the same deliverable; consolidate overlapping guidance otherwise.

The user also requires deeper review of high-risk flows: billing, invoices, payments/refunds, subscriptions, credits, taxes/discounts/pricing/metering and commercial bids/quotes/proposals/estimates; authentication, authorization, tenant/object ownership, grants and account recovery; sensitive records/PII, imports/exports, deletion/retention and established compliance obligations; migrations/backfills, destructive cleanup and reconciliation; decision-driving financial/analytics calculations; and background, privileged admin, impersonation or automated workflows. Trace their full affected execution and failure paths rather than treating a module name or one guard as sufficient review.

## Pass 1 — Template-inspired project guidance

- [x] Compare the template with current skill owners and preserve local-convention priority.
- [x] Add product/PRD separation, human blocker closure, runtime/package traces and inventory-parity guidance.
- [x] Add and independently assess bounded cases, retaining the initial omission, timeout and host-isolation limits in [the coverage record](../evals/coverage.md).
- [x] Publish and merge [PR #48](https://github.com/bobalazek/skills/pull/48); merged revision `584112d` has the reviewed candidate tree and passing main CI run `38136189221`.

## Pass 2 — Concrete engineering checklists and app targets

- [x] Give implementation and review each concrete, evidence-backed checkbox items across every requested category, using Corco's relevant prompts.
- [x] Preserve original intent and accepted changes through intake, specs, tasks, implementation, verification and delivery.
- [x] Carry explicit web/mobile/desktop targets and their validation limits through those stages without adding unrequested applications.
- [x] Validate and independently assess the four intent/category/target cases; retain the global-skill boundary failure and native/session evidence limits in [coverage](../evals/coverage.md).
- [ ] Review, publish, wait for CI, merge and verify this pass.

## Pass 3 — Infrastructure, explanation and review depth

- [ ] Audit architecture and explanation owners for missing or duplicate guidance after passes 1 and 2 are complete.
- [ ] Clarify goals, hosting/environments, operating ownership, internal API/frontend/worker processes and deployment boundaries before consequential greenfield choices.
- [ ] Inventory actual database/cache/queue, object/file-transfer storage, external API/AI/gateway services, trust boundaries, data flows, configuration and failure/recovery responsibilities.
- [ ] Provide scoped architecture/deployment and request/data-flow diagrams for existing-codebase explanations, distinguishing implemented, deployed, proposed and unverified facts.
- [ ] Cover relevant threats, privacy, workload/capacity, bottlenecks, dependency failure and recovery without speculative infrastructure.
- [ ] Review oversized PRs by responsibility, dependency and risk; propose shared-contract/foundation, backend and frontend increments where independently testable/deployable, with compatibility and integration gates.
- [ ] Deepen financial/commercial review for calculations, state transitions, authorization, concurrency, retries, external effects, auditability and reconciliation across actual callers.
- [ ] Deepen identity and ownership review for authentication versus authorization, tenant/object boundaries, grants/revocation, recovery and impersonation through alternate entry points.
- [ ] Deepen sensitive-data and lifecycle review for PII, import/export selection, retention/deletion scope, established compliance requirements and irreversible effects.
- [ ] Deepen migration, destructive cleanup and decision-driving analytics review for mixed versions, resumability, reconciliation, units/source/provenance and consequences of incorrect results.
- [ ] Deepen background/admin/workflow review for effective actor and authority, duplicate/partial execution, replay, recovery and operator visibility.
- [ ] Verify the affected skills with realistic fixtures, independent review and the repository's delivery checks.
- [ ] Reconcile all three expanded request groups against changed guidance and observed proof, preserving every missing or untested requirement before the final report.

## Completion evidence

Use the relevant PR and [behavioral coverage record](../evals/coverage.md) for candidate identities, checks and review results. A checked work item means that scoped result exists; it does not turn broader untested behavior into a pass. No release is requested by this work record.
