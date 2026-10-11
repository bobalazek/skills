# Engineering improvement work

This is the working record for the user's requests of 2026-10-11. It preserves the requested outcomes and execution order; package instructions and evaluation results remain in their existing authoritative locations.

## Accepted intent

Use the personal SaaS template and the Corco development/review guidance as inspiration for portable skills. Repository instructions and maintained surrounding code override shared defaults. Keep procedures modular, use the smallest complete solution, and prefer calibrated automated checks for rules that tools can enforce.

The user clarified that broad category names are insufficient: each development and review category needs several concrete checkbox items. Preserve the original request and accepted clarifications so final verification checks the intended user outcome as well as derived specifications and tests. Support web by default for unspecified greenfield planning, with mobile and desktop where required; responsive web is distinct from an installed application.

Requested categories: requirements/intent; correctness/regressions; architecture/maintainability/reuse; conventions/consistency; data/API/contracts and backward compatibility; security/privacy; performance/reliability/scalability; design/UX; behavioral decisions; accessibility/SEO/content; operability/observability/release safety; dependencies/tooling/docs; and tests/validation. Apply relevant items with evidence, preserve failed or missing checks, and explain exclusions instead of claiming every platform or category passed.

The next architecture pass must clarify infrastructure and hosting at greenfield intake, map internal processes and external dependencies (including data stores, caches/queues, file storage, AI/API providers and gateways), explain existing deployments with useful graphs, consider threats and scaling, and assess sensible PR splits with independently deployable increments where viable. This pass follows the first two passes below. Merge duplicate skills only when they actually own the same deliverable; consolidate overlapping guidance otherwise.

The user also requires deeper review of high-risk flows: billing, invoices, payments/refunds, subscriptions, credits, taxes/discounts/pricing/metering and commercial bids/quotes/proposals/estimates; authentication, authorization, tenant/object ownership, grants and account recovery; sensitive records/PII, imports/exports, deletion/retention and established compliance obligations; migrations/backfills, destructive cleanup and reconciliation; decision-driving financial/analytics calculations; and background, privileged admin, impersonation or automated workflows. Trace their full affected execution and failure paths rather than treating a module name or one guard as sufficient review.

The final clarification extends the inventory to **any relevant dependency**, including external/managed databases, cloud or self-hosted infrastructure, hosted application platforms, storage, networking/delivery services, APIs, AI, MCP/tool services and material runtime/build dependencies. Ownership and trust are separate from hosting location. Recheck the full request history after implementation.

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
- [x] Review and merge [PR #49](https://github.com/bobalazek/skills/pull/49); merged revision `536b09a` matches the reviewed tree and passed main CI run `38137260452`.

## Pass 3 — Infrastructure, explanation and review depth

- [x] Audit architecture and explanation owners for missing or duplicate guidance after passes 1 and 2 are complete.
- [x] Clarify goals, hosting/environments, operating ownership, internal API/frontend/worker processes and deployment boundaries before consequential greenfield choices.
- [x] Inventory actual database/cache/queue, object/file-transfer storage, external API/AI/gateway services, trust boundaries, data flows, configuration and failure/recovery responsibilities.
- [x] Provide scoped architecture/deployment and request/data-flow diagrams for existing-codebase explanations, distinguishing implemented, deployed, proposed and unverified facts.
- [x] Cover relevant threats, privacy, workload/capacity, bottlenecks, dependency failure and recovery without speculative infrastructure.
- [x] Review oversized PRs by responsibility, dependency and risk; propose shared-contract/foundation, backend and frontend increments where independently testable/deployable, with compatibility and integration gates.
- [x] Deepen financial/commercial review for calculations, state transitions, authorization, concurrency, retries, external effects, auditability and reconciliation across actual callers.
- [x] Deepen identity and ownership review for authentication versus authorization, tenant/object boundaries, grants/revocation, recovery and impersonation through alternate entry points.
- [x] Deepen sensitive-data and lifecycle review for PII, import/export selection, retention/deletion scope, established compliance requirements and irreversible effects.
- [x] Deepen migration, destructive cleanup and decision-driving analytics review for mixed versions, resumability, reconciliation, units/source/provenance and consequences of incorrect results.
- [x] Deepen background/admin/workflow review for effective actor and authority, duplicate/partial execution, replay, recovery and operator visibility.
- [x] Verify affected guidance with five realistic cases, returned independent source/behavior review, package/type/lint checks, 97 tests and clean installation/discovery. Retain the failed host boundary and runtime limits in [coverage](../evals/coverage.md); current PR/merge CI remains part of delivery.
- [x] Reconcile all three expanded request groups and the final dependency clarification in the map below. All requested guidance has an owner; untested deployment/provider/native behavior, diagram rendering and host isolation remain explicit in coverage rather than being reported as passing.

## Request-to-guidance map

This maps the expanded requests to their authoritative skill resources. Behavioral coverage remains bounded by the cases and limits in the evaluation record.

| Requested outcome | Owning guidance |
| --- | --- |
| Template-inspired product/PRD, decisions/learnings/incidents and human blocker records | [Project knowledge](../skills/engineering/document-project/references/knowledge-records.playbook.md), [task sources and human actions](../skills/engineering/create-tasks/references/task.template.md), [runtime and deployment design](../skills/engineering/design-architecture/references/technical-design.template.md) |
| Original request, accepted clarifications and supported web/mobile/desktop targets through delivery | [Spec](../skills/engineering/write-spec/SKILL.md), [implementation](../skills/engineering/implement-change/SKILL.md), [verification](../skills/engineering/verify-change/SKILL.md), [delivery gates](../skills/engineering/ship-change/references/delivery.checklist.md); intake, tasks and foundation carry the same source links |
| Multiple concrete checks for every requested engineering category, local conventions and evidence over claims | [Implementation completion](../skills/engineering/implement-change/references/completion.checklist.md) and [change review](../skills/engineering/review-code/references/change-review.checklist.md), also used by scoped codebase review |
| Early infrastructure/hosting questions, internal processes and **all relevant dependencies**, including managed databases, MCP and delivery/build services | [Architecture discovery and inventory](../skills/engineering/design-architecture/references/architecture-discovery.playbook.md), [technical design](../skills/engineering/design-architecture/references/technical-design.template.md), [foundation setup](../skills/engineering/start-project/SKILL.md) and spec intake |
| Useful existing-system infrastructure/deployment and request/data-flow diagrams; facts versus declared/proposed/unknown | [System explanation checks](../skills/engineering/explain-codebase/references/system-map.checklist.md) and architecture views in discovery |
| Threat, privacy, capacity, external failure and recovery questions without speculative infrastructure | Architecture discovery, [development risk checks](../skills/engineering/implement-change/references/change-risks.playbook.md), and the review checklists |
| Reviewable PR scope and viable foundation/contracts, backend and frontend increments with compatibility and integration gates | [Change-size review](../skills/engineering/review-code/references/change-review.checklist.md), [PR explanation](../skills/engineering/explain-pr/SKILL.md), [phase sequencing](../skills/engineering/plan-phases/SKILL.md) and task delivery grouping |
| Finance and commercial commitments; identity, tenant/project/object authority; sensitive lifecycle; migrations/destructive repair; decision-driving analytics; privileged/background workflows | [High-risk investigation](../skills/engineering/review-code/references/high-risk-flow.checklist.md), with complete affected path, family-specific checks and evidence/readiness gates; development risk checks prepare the same relevant boundaries |

The skill ownership audit keeps distinct deliverables: architecture chooses the design, explanation maps the current system, review judges evidence/readiness, PR explanation communicates the change, and phase/task planning owns sequencing. No duplicate deliverable justified merging or adding a skill. High-risk detail has one review reference, and the existing review checklist routes to it instead of retaining a second trigger table.

## Completion evidence

Use the relevant PR and [behavioral coverage record](../evals/coverage.md) for candidate identities, checks and review results. A checked work item means that scoped result exists; it does not turn broader untested behavior into a pass. No release is requested by this work record.
