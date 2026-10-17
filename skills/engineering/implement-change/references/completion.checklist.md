# Implementation completion

Select applicable categories before editing and reconcile them before handoff. Keep the checklist in the existing task or PR; no separate report is required. Each selected item needs an observed result, candidate/environment and useful proof before it is checked. Failed or unperformed items stay unchecked with the next action. Mark excluded categories inapplicable with a scope reason; missing access leaves an applicable check untested. Follow repository rules and current accepted requirements first.

## Requirements and intent alignment

- [ ] Retain the original requested outcome and its source in the existing issue, brief or spec. Separate later accepted clarifications from assumptions; do not replace the original goal with the implementation plan.
- [ ] Map each material requirement to the actual user/system outcome and its acceptance evidence. Walk the original scenario as well as the derived criteria; a test suite can agree with an incorrectly narrowed spec.
- [ ] Reconcile missing requested behavior, necessary supporting work and added scope. Preserve accepted changes to intent and criterion IDs; leave disputed choices open instead of quietly changing the goal to fit the code.
- [ ] Decisions affecting intent, behavior or scope were answered or explicitly delegated before dependent edits; open questions still block the affected work.

## Correctness and regressions

- [ ] Exercise the normal path, validation/permission rejection, empty and boundary values, and relevant failure/recovery states. Preserve valid zero, false or empty values when the domain permits them.
- [ ] Trace affected shared callers, state transitions and external effects. Check repeated actions, stale state, concurrency and partial success where possible; a failed required effect must not be reported as success.
- [ ] Recheck the important existing consumers and behavior the change must preserve. For a repair, retain its reproduction and corrected result rather than relying on unrelated green tests.

## Architecture, maintainability and reuse

- [ ] Put domain rules, state and side effects in the existing owning modules; check dependency direction and browser/server/native boundaries through actual callers.
- [ ] Search for an existing owner before adding helpers, layers or duplicated rules. Share matching contracts while preserving intentional variants; avoid abstractions, options or extension points without a current consumer or accepted need.
- [ ] Keep the result understandable to the next maintainer: explicit responsibilities, clear names, useful test seams and no dead integration paths. Simplify with a concrete smaller form that preserves safeguards and local conventions.

## Conventions and consistency

- [ ] Apply written repository/surface rules, then maintained surrounding code, before language/framework defaults. Check folders, files, classes/modules, symbols, imports and test locations against their real owners.
- [ ] Preserve the project's data-access, error, state, UI and naming contracts. Identify deliberate exceptions and resolve consequential conflicts; do not turn an isolated legacy pattern into a new rule.
- [ ] Run applicable formatter/linter/type/static checks before subjective review. Encode accepted mechanically detectable recurring rules in existing tooling; verify legitimate cases and narrow exceptions instead of broadly suppressing findings.

## Data, API and compatibility

- [ ] Trace validation, authorization, data invariants, serialization and errors through actual API/event/storage consumers and alternate writers. Match runtime payloads to the supported contract, including omitted/null fields and failure responses.
- [ ] Check required old/new client, worker and schema combinations through rollout. Preserve stored data, public names, version/deprecation commitments and recovery limits; inspect migrations and resumable backfills when affected.
- [ ] Keep contracts cohesive and understandable for known consumers. Assess an accepted next extension when one exists, without speculative version layers or generic interfaces; additive-looking fields or enum values still need consumer compatibility checks.

## Security and privacy

- [ ] Trace untrusted input to storage, rendering, filesystem/process operations and external calls. Enforce the relevant authentication, action/object/field authorization and tenant boundaries on every affected entry point.
- [ ] Inspect secrets and sensitive data in bundles, local storage, logs, analytics, errors, exports and third-party payloads. Apply accepted minimization, consent, retention and deletion rules without inventing legal requirements.
- [ ] Exercise relevant rejected inputs, unauthorized actors and legitimate use through the real protection. Check supported replay, injection, upload or permission-revocation scenarios; a declared guard or scan alone is insufficient proof.

## Performance, reliability and scalability

- [ ] Check relevant query/compute/render/network costs, payload bounds and memory growth against supported workloads or accepted budgets. Use comparable measurements for improvement claims; do not invent scale targets.
- [ ] Bound retries, fan-out and queued work according to actual capacity. Check timeout/cancellation, duplicate delivery, stale caches, resource cleanup and recovery from partial effects where relevant.
- [ ] Exercise the credible bottleneck or dependency failure and preserve result correctness. Add caches, services or scaling machinery only for a demonstrated requirement; distinguish source-level risk from measured capacity.

## Design and user experience

- [ ] Follow the primary journey from entry to the requested outcome and a consequential failure/recovery path. Check task clarity, navigation, status, error feedback and the meaning of each important action.
- [ ] Inspect real rendered states and supported inputs/viewports against the local design contract, tokens and components. Check loading, empty, disabled, error and success states; code presence is not rendered evidence.
- [ ] Confirm hierarchy, content density and controls help the user complete the task. Keep observed usability problems separate from aesthetic preference or untested assumptions about user behavior.

## Behavioral design and decisions

- [ ] Inspect decision effort, information needed, defaults and progress at the primary and highest-commitment step. Defaults must be understandable and changeable; progress must reflect real work.
- [ ] Check consequences, prices/comparisons, permission requests and consent before commitment. Value, personalization and reminders should support the user's goal; do not manufacture urgency, hide costs or make refusal harder to find.
- [ ] Exercise cancel, undo, correction and interruption/resume when supported. Treat proposed behavioral patterns as hypotheses, not mandatory conversion techniques or proof of user trust.

## Accessibility, SEO and content

- [ ] Check applicable semantic names/roles, keyboard or assistive input, focus, contrast, text scaling/reflow and motion preferences on the supported surface. Combine relevant automation with interaction evidence; a scan does not prove complete conformance.
- [ ] For public web surfaces, preserve indexability, meaningful titles/headings, canonical/redirect behavior, internal links and relevant structured data. Keep private pages private; SEO does not require adding indexable routes to native or authenticated apps.
- [ ] Verify task copy, labels, factual claims, assets and relevant translations or RTL behavior. Remove placeholders and check long/localized text, missing assets and actionable errors without changing accepted product meaning.

## Operability, observability and release safety

- [ ] Give affected operations useful failure/progress signals through the existing logs, metrics or traces, with safe payloads and cross-boundary correlation where needed. Verify a known success/failure reaches the actual signal; silence is not health.
- [ ] Check startup/readiness, shutdown/draining, configuration and unfinished-work recovery for affected processes. Establish who responds, the diagnostic or runbook path and relevant alert behavior without inventing an on-call team.
- [ ] Sequence schema, backend, client, job and configuration changes safely; identify rollback versus data/external-effect recovery and its limits. Keep independently reviewable work separable, and carry unresolved operating proof into delivery.

## Dependencies, tooling and documentation

- [ ] Justify additions against existing/platform capabilities; check supported targets, licenses, maintenance and relevant supply-chain exposure. For updates, inspect actual version/migration requirements and the lockfile rather than assuming installation proves compatibility.
- [ ] Reconcile local and CI commands, generators, safe environment examples and required setup. Document newly needed variables or manual steps without secret values; verify instructions through the real supported path.
- [ ] Update affected product, API, architecture, setup and operating references in their canonical locations. Preserve accepted decisions and lessons; correct stale inventories and incoming links rather than creating competing documents.

## Tests and validation

- [ ] Map material claims to suitable unit, integration, contract, end-to-end or direct artifact checks. Exercise meaningful success and failure paths; mocks and assertions that mirror implementation cannot prove an unexercised boundary.
- [ ] Run applicable existing checks on the integrated candidate with isolated fixtures. Inspect exit/output, failed attempts and flakes; retain environment or device gaps instead of presenting plans or retries as passes.
- [ ] Reconcile every material criterion and selected checklist item with current proof. Obtain the required fresh-context independent assessment, resolve findings and recheck affected results before claiming acceptance.

## Supported application targets

Use the accepted target matrix. Web is the provisional default only for an otherwise unspecified greenfield app; mobile and desktop are supported options, not automatic extra deliverables. A narrow browser viewport does not establish native mobile or desktop coverage.

- [ ] Web: exercise supported browsers, responsive/input states, navigation/history and relevant session/cache/network behavior; observe the affected user journey rather than only a successful build.
- [ ] Mobile, when supported: check OS/device constraints, permissions and revocation, app links, foreground/background or interruption/resume, offline/sync and older installed-client compatibility where affected. Distinguish simulator evidence from device or distribution evidence.
- [ ] Desktop, when supported: check OS/window/input behavior, local files and secrets, process/IPC boundaries and privileges, offline/restart behavior, and relevant install/sign/update/uninstall paths. A renderer or development launch alone does not prove the packaged application's behavior.

## Selected service-readiness details

For launch/hardening work, `verify-change` owns the comprehensive readiness assessment when available. These local checks remain usable without sibling packages. Apply only the affected product/contract/risk surface; keep applicability/source, expected/observed result, candidate/environment, evidence, owner and gaps in the existing task. Missing proof remains open.

- [ ] For identity, exercise literal-plus email input, reset expiry/reuse, MFA recovery and all-session revocation where supported. Test real object/field/tenant rejection; contracted SSO/SAML/SCIM and support impersonation additionally need tenant mapping, replay/offboarding and actor-audited revocation evidence. Do not add those features merely to pass a list.
- [ ] For data, check domain invariants, representative query/connection budgets, deep pagination and migration locks/mixed-version recovery after new writes. Exercise any relied-on backup/PITR/undo mechanism safely; soft deletes and a down script do not prove lossless recovery.
- [ ] Round-trip supported apostrophes, plus addresses, Unicode/RTL, locale values and relevant DST schedule cases. For required exports/imports, verify tenant scope, formula safety, legacy CSV encodings/quoting, bounds and partial-failure/retry behavior.
- [ ] For money, use exact decimals or minor units under accepted precision/currency/rounding/tax rules. Exercise concurrent duplicate payment/submission, provider-success/local-failure and applicable subscriptions, dunning, PO invoices, refunds, metering and finance reconciliation; unresolved commercial policy stays with its owner.
- [ ] At affected boundaries, exercise server validation, parameterized queries, context-specific output encoding, CSRF and upload quarantine/non-executable serving as applicable. Inspect real origin/header responses and intended package identity/lockfile; CORS does not authorize users and a generic sanitizer cannot prove protection.
- [ ] For integrations/jobs, exercise signed webhooks, retry/replay and failure logs, API version/key revocation/rates, OAuth refresh, response drift and promised sandbox separation. Verify terminal job outcomes, backoff/exhaustion, scheduler overlap, cache invalidation and cancellation through existing mechanisms.
- [ ] For privacy/AI, verify actual allowed payloads, least privilege, safe audit/read logs, retention/erasure and backup-restore controls. Establish legal/contract scope with the owner; test trusted-code prompt-injection defenses, customer spend bounds, evals, provider failure/deprecation and action-bound approval where required.
- [ ] For interface/operation, observe applicable slow-network/older-device journeys, preserved safe form entries, actionable errors, back/undo, keyboard/screen reader, locale/email-client and optional-notification behavior. Verify actual failure/cost/email-delivery signals reach an owner, docs/asset ownership and backup-maintainer access; infrastructure scale, flags/CDN/multi-region and fixed cadences stay conditional.
