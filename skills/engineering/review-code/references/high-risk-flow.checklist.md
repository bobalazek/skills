# High-risk flow investigation

Load the affected families when behavior can change money, authority, sensitive data, consequential decisions or durable/irreversible state. Use actual semantics and reachable paths, not directory names. Select applicable items in the existing review record, with evidence or an explicit gap; no separate audit report or fixed reviewer panel is required.

## Establish the complete affected path

- [ ] State the accepted invariant and credible consequence, affected population and next-step claim. Identify the original requirement, candidate/baseline, schema/configuration and deployed-version evidence actually available.
- [ ] Map relevant external and internal entry points to the shared owner and downstream effects: UI, API/SDK, webhook, cron/queue, CLI, import/export and admin paths where present. Inspect actual callers, configured/dynamic dispatch and known shared consumers; record unknown reach rather than inventing future users.
- [ ] Follow validation, effective actor, tenant/project/object ownership and field/action permissions into state transitions, database commit, file/queue/provider effects, acknowledgement, audit and customer/operator-visible state. A front-door guard cannot establish protection for alternate writers.
- [ ] Inspect success and rejected inputs, empty/malformed/boundary values, expired/stale state, duplicate/replayed/out-of-order events and concurrent updates where applicable. Check each material partial-failure point and what a timeout, cancellation, provider rejection/rate limit or restart leaves behind.
- [ ] Locate actual transaction/constraint and idempotency scope, stable operation identity, retry windows, reconciliation/compensation and recovery ownership. Database rollback does not undo external effects; a logged exception or successful enqueue does not prove required work completed.

## Money and commercial commitments

Applies to billing, invoices, payments, refunds, subscriptions, credits, taxes, discounts, pricing, metering, bids, quotes, proposals, estimates, approvals and related entitlements or payouts.

- [ ] Verify source-of-truth amounts, units/currencies, precision/rounding, tax/discount/credit order, proration and effective dates against accepted domain rules. Check zero/negative/maximum values where allowed; do not invent finance or tax policy.
- [ ] Trace view/edit/approve/accept/cancel/refund/resubmit permissions and state transitions, including stale prices, expired quotes/bids, reused approvals and concurrent changes. Check whether totals or committed terms can change between authorization and the atomic write.
- [ ] Challenge duplicate/missed/over/under charges or credits, provider success with local failure, delayed callbacks, usage aggregation and reconciliation. Verify audit provenance and customer/support visibility; growing batch/tenant volume must preserve bounds, ordering and financial correctness, not only throughput.

## Identity, authorization and ownership

- [ ] Distinguish authentication from authorization through sessions, recovery, invitations, role/permission grants and revocation. Check expiry, replay and effective privileges after changes using the actual supported identity mechanism.
- [ ] Trace tenant, project, object and field ownership through reads/writes, joins, caches, exports/imports, jobs and alternate API/admin paths. Try relevant wrong-user/wrong-tenant/wrong-role access and legitimate owner access; hidden UI controls are not enforcement.
- [ ] For federated login, identify which claims the validated signature covers and check the protocol's accepted issuer, recipient/audience, request/replay and initiating-browser bindings before provisioning or linking accounts. Check tenant mapping and existing-account membership policy separately from provider authentication. Exercise supported browser transport and legitimate provider claims; SDK validation alone does not establish these application bindings.
- [ ] Examine account recovery, support overrides and impersonation: who authorizes the action, whose authority executes it, scope/duration, actor attribution and session termination. Verify established audit and notification rules without assuming every admin may bypass ownership.

## Sensitive records and lifecycle

- [ ] Follow sensitive records/PII through selection, serialization, logs/errors, downloads, caches, files and external recipients. Confirm field-level minimization and access on the actual data path, including bulk and background variants.
- [ ] Check import/export scope, validation and partial application; deletion/overwrite selection, retention, backups/replicas and downstream copies. Repeated or interrupted operations must preserve accepted recovery and privacy boundaries; a UI confirmation alone does not establish correct scope. Include concurrent producers and delayed jobs: retain cleanup locators until external deletion is acknowledged, and check that completion/audit writes do not recreate erased sensitive data.
- [ ] Apply the system's established consent, retention, deletion, audit and compliance obligations with their authoritative source. Separate missing policy decisions from proven violations; identify irreversible disclosure/deletion and the actual limits of repair.

## Migrations, backfills and destructive repair

- [ ] Check old/new readers, writers, workers and schema during expansion, backfill, cutover and cleanup. Inspect constraints/defaults, lock/runtime/load implications and the exact point where rollback loses compatibility or data.
- [ ] Exercise representative partial progress, restart, duplicate work, changed source data and concurrent writes in a safe environment. Check checkpoint/selection semantics, bounded batches and reconciliation counts or invariants; equal row counts alone do not establish correct values.
- [ ] Verify destructive cleanup eligibility, retained data, recovery prerequisites and operator authority. Distinguish reverting code, restoring a tested backup, replaying later writes and forward repair; report unproven restore/data-loss limits explicitly.

## Reconciliation and decision-driving analytics

- [ ] Trace a ledger, financial report, forecast or decision-driving metric to its source, grain, units/currency, timezone/window, filters/joins and calculation/version provenance. Identify who acts on the result and the consequence of wrong or stale values.
- [ ] Check duplicate/missing/late events, reprocessing, corrections, join amplification, partial periods and stale snapshots. Reconcile values as well as counts against the authoritative source; inspect legitimate zero versus missing data and accepted rounding/aggregation rules.
- [ ] Verify freshness/completeness signals, access/redaction and failure presentation. Partial or unavailable data must not silently appear as an authoritative total; preserve any accepted limitation or uncertainty through the report/API consumer.

## Jobs, privileged administration and workflows

- [ ] Trace trigger authenticity, effective actor/tenant and current authority into each job, admin mutation, impersonated action and workflow transition. Check stale grants, direct invocation and state overrides through alternate callers.
- [ ] Challenge duplicate/concurrent/out-of-order execution, bounded retries, poison items, cancellation and partial external effects. Verify stable identity, resumption/replay scope and completion/acknowledgement; waiting for a job to be queued is not observing its outcome.
- [ ] Inspect audit/correlation, customer/operator status, repair controls and ownership. Recovery tools need their own authorization and selection checks; an administrator's retry must not repeat already-completed destructive or financial work.

## Evidence and readiness

- [ ] Retain the relevant caller/callee and state/effect map with file/symbol/config references, contract/schema evidence and representative checks. Use current provider contracts for external behavior; a mock cannot establish a provider or database guarantee.
- [ ] Reconcile selected success, failure, permission, concurrency/retry and recovery checks against actual source/runtime evidence. Missing material paths or integration/migration proof remain untested; inspection alone cannot pass a runtime claim.
- [ ] Separate confirmed defects, unresolved hypotheses and required proof gaps in the existing verdict. Explain consequence, smallest correction or closing observation and readiness effect. Recheck affected paths after fixes without repeating unrelated work or escalating hypothetical risk.
