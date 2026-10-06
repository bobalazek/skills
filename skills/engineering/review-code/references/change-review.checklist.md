# Change review

Start from the fixed candidate, its comparison baseline, accepted behavior, and applicable instructions. Inspect existing docs and local conventions before judging the patch. Trace affected consumers beyond changed lines. Select the checks below by the actual surface; record material uninspected paths and missing proof.

## Behavior and contracts

Map material requirements to the implementation and supplied checks. Confirm the intended outcome, excluded behavior, supported inputs, and observable error states. If intent is missing, identify the question instead of inventing a product requirement.

Follow entry points through callers, shared helpers, data/state changes, and external effects. Include alternate routes, workers, imports, and admin tools where they share the affected behavior. Check boundary values, empty/missing states, partial success, retry, cancellation, and concurrency when the flow can encounter them. Confirm that a protective check is on the real path and cannot be bypassed through a sibling caller.

Inspect compatibility of public APIs, events, serialized fields, schemas, package exports, persisted state, and supported old/new deployed versions. A locally correct function can still break a consumer or rollout sequence.

## High-risk flows

When a row applies, trace the full affected flow and its state transitions, not only the added guard. Identify the accepted invariant, every relevant actor/entry point, durable writes and external effects, and the check that can disprove the claimed protection. These are review prompts; report a defect only when evidence establishes an affected scenario.

| Trigger | Trace and challenge |
| --- | --- |
| Authentication or account recovery | Identity/session creation, validation, expiry/revocation, recovery and privilege changes; rejected/expired credentials and alternate entry points |
| Authorization, tenant data, admin actions | Actor, resource ownership, tenant scope, roles and privileged overrides across reads/writes, joins, exports, jobs, caches, and direct object access; a cross-user or cross-tenant attempt |
| Money, billing, balances, entitlement changes | Units/currency, precision/rounding, permitted transitions, duplicate/concurrent requests, external payment success versus local failure, reconciliation and auditability where required |
| Deletion, overwrite, bulk import/export | Selection and scope, preview/confirmation where required, validation, partial application, retention and recovery, retries; the record set actually affected and an interrupted operation |
| Schema migrations and backfills | Old/new reader and writer compatibility, constraints/defaults, deploy order, locking/runtime, partial progress/restart, destructive cleanup, and demonstrated recovery limits |
| Jobs, webhooks, queues, external writes | Authenticity, duplicate/out-of-order delivery, idempotency scope, retries/timeouts, concurrent execution, poison items, partial external effects and recovery ownership |
| Sensitive records or secrets | Authorized access, transport/storage handling, logs/errors/exports, retention/deletion obligations actually established for this system |

Use a safe test environment, source trace, or existing trustworthy evidence. Do not exercise destructive operations or real payments in production to establish a review claim. If a material path cannot be checked, state the missing proof and its readiness impact.

## Security and privacy

Identify the actual trust boundaries and supported threat scenarios. Inspect server-side authentication/authorization and tenant isolation, input/schema validation, injection-sensitive queries or commands, rendered untrusted content, file/path handling, and externally supplied URLs when relevant. Check the controls the chosen framework and configuration already provide before declaring one absent.

Follow secrets and sensitive data through client bundles, logs, errors, fixtures, exports, and third-party calls where the patch affects them. Inspect introduced dependencies and permission changes in their real execution context. A scanner alert is a lead: confirm the version, reachable usage, relevant advisory or official guidance, and consequence before reporting a vulnerability.

Apply CSRF/session, upload, redirect, or network-request protections to the routes that need them. Do not mandate a named middleware, database authorization mechanism, or security product when the project's existing mechanism satisfies the requirement.

## Performance and reliability

Trace the costly operation and workload affected by the change: query count and relation loading, scans/index use, pagination bounds, repeated computation, memory retention, rendering, bundles, cache correctness, and external calls as relevant. Include growing input sizes and concurrency when they are supported. An N+1 suspicion needs the actual query path; a large file or dependency is not a measured slowdown.

Compare available before/after measurements under equivalent input, environment, and cache conditions. When no measurement exists, distinguish a demonstrated unbounded path from a performance hypothesis needing a benchmark. Avoid optimization demands without a relevant cost or accepted budget.

For failure handling, check timeout/cancellation, bounded retries, backpressure, resource cleanup, stale state/cache behavior, and recovery where the flow needs them. Do not infer reliability from a single happy-path run or add distributed-system machinery to a local operation without cause.

Challenge concurrency and transaction claims. Input-driven fan-out needs a bound compatible with pool/service capacity; independent reads may still need a consistent snapshot. A driver may serialize or reject concurrent work in one transaction. Check what the runtime actually does with sibling tasks after failure or cancellation, and whether completed effects remain. Trace atomic groups to the actual transaction context, isolation/constraints and retry boundary. Exercise a partial failure or concurrent update where material; external effects need their own recovery rather than an assumed database rollback.

## Architecture, maintainability, and duplication

Check whether state and domain rules have a clear owner, imports follow accepted boundaries, and the change belongs in the feature/package it modifies. Trace public interfaces and affected callers before proposing another layer. Identify concrete coupling, circular dependencies, hidden side effects, or change hazards instead of enforcing a preferred architecture.

Search for existing behavior before accepting a new helper, dependency, configuration switch, or abstraction. Compare duplicated validation, transformations, and business rules by meaning and ownership. Confirm that apparent duplicates are not intentional variants, generated output, or required framework structure. A consolidation finding should name the diverging behavior or maintenance cost, the simpler existing owner, and a preservation check.

Evaluate readability, error handling, naming, test seams, and unnecessary indirection against the real task and established conventions. File length, nesting, or clone-tool thresholds can point to an area to inspect; they do not establish a defect on their own. Prefer the smallest correction that addresses the root cause across affected callers.

For collection/transformation changes, check lookup/grouping semantics, duplicate keys, ordering, key identity, memory and shared nested references. Maps, sets and shallow copies are tools with tradeoffs, not mandatory rewrites. Guard clauses must retain authorization, existence privacy and cleanup; mutable preconditions need protection at the write. Catch-and-log must not report success for a failed required operation. Before adding a dependency, check suitable native or already-installed support and target compatibility; dependency upgrades need the scoped compatibility evidence required by the project.

## Design and convention consistency

Locate accepted root/surface rules, formatter/linter/type configuration, representative code, and documented exceptions. Distinguish mandatory policy from observed practice or a proposed preference. Check relevant folder/file/package placement; names for symbols, classes, functions, variables, models, tables/columns; API/data conventions; and framework-specific structure. Cite the applicable rule and effect of a violation rather than importing a house style.

For a visible change, inspect the rendered result against accepted design, shared tokens/components, supported responsive states, semantics, keyboard/focus behavior, and loading/error/empty states. Include content or route metadata when the request touches them. A screenshot supports visible appearance in that state; it does not prove interaction, accessibility, or data correctness.

Keep mechanical lint/format feedback in the existing tool when it covers the issue. Do not inflate style preferences into blocking findings or repeat the same automated failure as many comments.

## Verification and delivery evidence

Assess reversibility at the relevant stages: before exposure, after new writes or external effects, and after destructive cleanup. State the credible worst supported failure and its affected population, including shared consumers. Keep severity, likelihood and reversibility distinct: an easy revert does not undo an exposure that already happened.

Check the proposed recovery operation and its prerequisites: deployable old artifact, compatible readers/writers, retained data, restore/replay coverage, available authority and an owner. Reverting a commit, switching a flag, compensating an external action and restoring data have different effects. A UI-only change can be straightforward to revert, but a UI action that sends money or deletes data leaves consequences after the component is reverted.

Classify recovery as demonstrated reversible, conditional on named limits, irreversible for specified effects, or unverified. Record which observation or rehearsal supports the claim and when the safe return window closes. A migration may become irreversible only when old data is dropped; a backup may miss subsequent writes or take longer to restore than the accepted outage window. Do not demand disruptive recovery experiments on a live system. Missing material recovery proof blocks the affected readiness claim.

Confirm the supplied commands exercised material changed scenarios and relevant rejection/regression cases on the candidate revision. Inspect proof rather than relying on filenames, test counts, or green CI. Reuse sound checks; run a focused counterexample when useful and authorized. A test that reproduces the implementation can miss a wrong requirement or an untested entry point.

Check whether the chosen unit, integration, contract and viable end-to-end boundaries actually support acceptance. Pure mocked tests cannot establish a real query, transaction or middleware path; a broad end-to-end test may miss an important domain edge case. Acceptance criteria can reuse these layers without duplicate suites. Inspect assertions, fixtures, isolation, asynchronous readiness, failed attempts and disclosed provider substitutions. Ask for missing proof of a material behavior, not every test type for every edit; test-first order and a coverage percentage are not acceptance criteria unless explicitly required by the project.

Check rollout/recovery needs, configuration/setup changes, logging or monitoring, and relevant documentation for the affected surface. Inspect command definitions and environment assumptions before trusting operational instructions. Required missing proof is a readiness gap; do not relabel it as a proven runtime defect.

Rank confirmed findings by impact and credible likelihood. Separate an urgent exposure from a blocker for the requested next step, a bounded follow-up, and an optional suggestion. Do not expand the review into unrelated legacy cleanup or generate nitpicks to fill an empty findings list.
