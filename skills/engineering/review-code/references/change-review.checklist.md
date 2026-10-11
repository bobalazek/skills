# Change review

Start from the fixed candidate, its comparison baseline, original request, accepted clarifications, and applicable instructions. Inspect existing docs and local conventions before judging the patch. Trace affected consumers beyond changed lines. Account for each category as reviewed, inapplicable with a scope reason, or untested with its missing proof. Within applicable categories, track relevant items in the existing review record; check an item only after its actual inspection/check is evidenced. Reviewed does not mean passed. A small change may group exclusions with the same reason.

## Requirements and intent alignment

- [ ] Locate the original requested outcome and later accepted clarifications in their authoritative issue, brief or spec. Preserve source meaning and acceptance history; a generated task or the author's implementation summary is not independent evidence of intent.

- [ ] Map material requirements to actual behavior and proof, then walk the original entry-to-outcome scenario. Check that the derived spec/tests did not omit the user's real goal, supported targets, roles or constraints. If intent is unavailable, leave alignment untested instead of inferring it from the patch.

- [ ] Distinguish aligned work, necessary supporting changes, missing requested behavior, added scope and unresolved choices. Cite the source for a requirements finding; later accepted changes may supersede earlier intent, while incidental implementation choices cannot.

## Correctness and regressions

- [ ] Follow entry points through callers, shared helpers, data/state changes, and external effects. Include alternate routes, workers, imports, and admin tools where they share the affected behavior. Check boundary values, empty/missing states, partial success, retry, cancellation, and concurrency when the flow can encounter them. Confirm that a protective check is on the real path and cannot be bypassed through a sibling caller.

- [ ] Check normal and rejected inputs against domain meaning, including valid zero/false/empty values and state transitions. Follow error propagation and cleanup; fallback data or a logged error must not disguise failure of a required operation.

- [ ] Inspect the affected existing consumers and preserved workflows. For a refactor or repair, compare meaningful baseline and candidate behavior, including failure/recovery paths; unchanged types do not prove unchanged behavior.

## Data, API and compatibility

- [ ] Inspect compatibility of public APIs, events, serialized fields, schemas, package exports, persisted state, and supported old/new deployed versions. A locally correct function can still break a consumer or rollout sequence.

- [ ] Trace actual validation, authorization, domain invariants, serialization and errors through consumers and alternate writers. Check schema/migration and data lifecycle changes against accepted ownership, retention and recovery rules; use [API and data depth](api-data-review.checklist.md) for affected boundaries.

- [ ] Challenge contract meaning and evolution with current consumers and any accepted next use. Check mixed-version clients/workers/schema, unknown fields or enum values and deprecation commitments. Require a cohesive supported contract, not speculative generic interfaces or a versioning layer for hypothetical features.

## High-risk flows

- [ ] Check whether the affected behavior touches financial/commercial decisions, identity/ownership, sensitive data/lifecycle, migrations/reconciliation, decision-driving analytics or privileged/background work. Use [the high-risk investigation](high-risk-flow.checklist.md) for applicable families; a harmless edit near such code does not require an unrelated system audit.
- [ ] Trace the complete affected flow and relevant alternate/shared entry points, durable state and external effects. Account for missing paths and proof before deciding readiness; a module name, one guard or green happy-path test is insufficient.
- [ ] Keep inspections and tests within a safe authorized environment. Do not create real payments, destructive production changes or sensitive exports to establish a review claim. Material unavailable proof stays untested and affects the requested next-step decision.

## Security and privacy

- [ ] Identify the actual trust boundaries and supported threat scenarios. Inspect server-side authentication/authorization and tenant isolation, input/schema validation, injection-sensitive queries or commands, rendered untrusted content, file/path handling, and externally supplied URLs when relevant. Check the controls the chosen framework and configuration already provide before declaring one absent.

- [ ] Follow secrets and sensitive data through client bundles, logs, errors, fixtures, exports, and third-party calls where the patch affects them. Inspect introduced dependencies and permission changes in their real execution context. A scanner alert is a lead: confirm the version, reachable usage, relevant advisory or official guidance, and consequence before reporting a vulnerability.

- [ ] Apply CSRF/session, upload, redirect, or network-request protections to the routes that need them. Do not mandate a named middleware, database authorization mechanism, or security product when the project's existing mechanism satisfies the requirement.

## Performance and reliability

- [ ] Trace the costly operation and workload affected by the change: query count and relation loading, scans/index use, pagination bounds, repeated computation, memory retention, rendering, bundles, cache correctness, and external calls as relevant. Include growing input sizes and concurrency when they are supported. An N+1 suspicion needs the actual query path; a large file or dependency is not a measured slowdown.

- [ ] Compare available before/after measurements under equivalent input, environment, and cache conditions. When no measurement exists, distinguish a demonstrated unbounded path from a performance hypothesis needing a benchmark. Avoid optimization demands without a relevant cost or accepted budget.

- [ ] For failure handling, check timeout/cancellation, bounded retries, backpressure, resource cleanup, stale state/cache behavior, and recovery where the flow needs them. Do not infer reliability from a single happy-path run or add distributed-system machinery to a local operation without cause.

- [ ] Challenge concurrency and transaction claims. Input-driven fan-out needs a bound compatible with pool/service capacity; independent reads may still need a consistent snapshot. A driver may serialize or reject concurrent work in one transaction. Check what the runtime actually does with sibling tasks after failure or cancellation, and whether completed effects remain. Trace atomic groups to the actual transaction context, isolation/constraints and retry boundary. Exercise a partial failure or concurrent update where material; external effects need their own recovery rather than an assumed database rollback.

## Architecture, maintainability, and duplication

- [ ] Check whether state and domain rules have a clear owner, imports follow accepted boundaries, and the change belongs in the feature/package it modifies. Trace public interfaces and affected callers before proposing another layer. Identify concrete coupling, circular dependencies, hidden side effects, or change hazards instead of enforcing a preferred architecture.

- [ ] Search for existing behavior before accepting a new helper, dependency, configuration switch, or abstraction. Compare duplicated validation, transformations, and business rules by meaning and ownership. Confirm that apparent duplicates are not intentional variants, generated output, or required framework structure. A consolidation finding should name the diverging behavior or maintenance cost, the simpler existing owner, and a preservation check.

- [ ] Apply YAGNI to added layers, options and dependencies: identify the current requirement each serves and compare a concrete simpler form using the existing owner, suitable platform facilities or installed dependencies. Report unnecessary complexity only with its actual cost and a smaller correction that preserves required behavior, validation, error handling, security and accessibility. Fewer lines alone do not establish an improvement, and simplicity does not override local conventions.

- [ ] Evaluate readability, error handling, naming, test seams, and unnecessary indirection against the real task and established conventions. File length, nesting, or clone-tool thresholds can point to an area to inspect; they do not establish a defect on their own. Prefer the smallest correction that addresses the root cause across affected callers.

- [ ] For collection/transformation changes, check lookup/grouping semantics, duplicate keys, ordering, key identity, memory and shared nested references. Maps, sets and shallow copies are tools with tradeoffs, not mandatory rewrites. Guard clauses must retain authorization, existence privacy and cleanup; mutable preconditions need protection at the write. Catch-and-log must not report success for a failed required operation. Before adding a dependency, check suitable native or already-installed support and target compatibility; dependency upgrades need the scoped compatibility evidence required by the project.

## Conventions and consistency

- [ ] Locate accepted root/surface rules, formatter/linter/type configuration, representative code, and documented exceptions. Distinguish mandatory policy from observed practice or a proposed preference. Check relevant folder/file/package placement; names for symbols, classes, functions, variables, models, tables/columns; API/data conventions; and framework-specific structure. Cite the applicable rule and effect of a violation rather than importing a house style.

- [ ] Check class/module boundaries and filenames against written repository rules, then maintained surrounding code. Use language/framework defaults only where neither settles the choice; do not demand restructuring to satisfy a shared preference.

- [ ] Use configured static checks before subjective convention judgments. Keep mechanical feedback in the tool that covers it and add practical guards for recurring detectable issues within an authorized fix scope. Do not inflate style preferences into blocking findings or repeat the same automated failure as many comments.

## Design and user experience

- [ ] Resolve the surface's design/UX contract, shared tokens/components and supported platforms before judging consistency. Inspect actual layout, hierarchy, density and states; a personal aesthetic preference is not convention drift.

- [ ] Follow the primary user journey and its highest-risk or highest-commitment step from entry to outcome. Check navigation, action meaning, status, loading/empty/disabled/error/success states and recovery. Correct code or an isolated screenshot alone does not establish a usable flow.

- [ ] Observe relevant responsive/window and input behavior, including text/content fit and interrupted actions. Ground a UX finding in what the user sees, cannot do or must work around, with a concrete correction and validation signal. Missing rendered or interaction evidence remains untested; use `review-interface` for deeper experience assessment when available.

## Behavioral design and decisions

- [ ] Inspect orientation, decision effort, useful defaults and truthful progress at important decisions. Check whether users can understand and change defaults and resume interrupted work; a shorter form can still impose more decisions or external lookups.

- [ ] Check value before commitment, meaningful ownership/personalization, and factual cost/consequence comparisons where relevant. Treat these as task-dependent hypotheses, not required persuasion tactics or evidence of improved conversion.

- [ ] Compare committing with declining, cancelling, correcting or undoing. Flag observed hidden costs, misleading urgency, preselected consequential choices or obstructed refusal; require evidence of the choice problem rather than an assumed psychological effect.

## Accessibility, SEO and content

- [ ] Inspect relevant semantic names/roles, keyboard or assistive input, focus order/visibility, error announcements, contrast, text scaling/reflow and reduced motion on the supported target. Automated results and screenshots cover only what they actually observe.

- [ ] For public web surfaces, check titles/headings, indexability, canonical URLs, redirects, links and relevant structured data against intended discoverability. Protect authenticated/private content; native apps do not inherit website SEO checks without a public web surface.

- [ ] Check task language, factual claims, placeholders, media alternatives and accepted localization/RTL behavior. Inspect long or missing content and relevant responsive states; neither code quality nor metadata alone proves readable, accurate output.

## Operability, observability and release safety

- [ ] Trace a meaningful operation or failure into the actual logs, metrics or traces. Check safe payloads, useful correlation, signal freshness and relevant volume/cardinality; a logging call or quiet dashboard alone does not prove diagnosability.

- [ ] Check process startup/readiness, shutdown/draining and unfinished-work recovery where affected. Inspect alert/action routes, operating instructions and ownership that actually exist; leave missing access or untested notification delivery explicit.

- [ ] Examine review/rollout shape and sequencing across schema, API, workers, clients, configuration and support. Identify independent chunks that should be separated and steps whose order preserves compatibility. Recovery and post-release signals need evidence, not just a deployment command.

## Change size and delivery sequence

- [ ] Assess reviewability by coherent outcomes, domain/module ownership, dependency edges, risk and proof. Separate unrelated cleanup, generated churn or independent behavior when it obscures the change; file or line counts are clues, not universal limits.
- [ ] When a change is too broad, propose concrete increments with owned scope, prerequisite outputs and acceptance checks. A shared contract/foundation may precede backend support and frontend adoption; retain integrated vertical work where splitting by layer would leave broken or unverifiable states.
- [ ] Check each proposed increment's supported old/new schema, API, worker and client combinations, merge/deploy order, exposure and recovery boundary. Distinguish independently reviewable, mergeable and deployable; use the existing stacking/flag/migration workflow only when warranted. Do not introduce abstraction or infrastructure solely to manufacture independence.
- [ ] Keep remaining user criteria, cross-increment integration, rollout and post-deploy observations visible. One merged prerequisite PR does not complete the feature; document coupling when independent deployment is not viable and block unsafe consumers.

## Dependencies, tooling and documentation

- [ ] Check the purpose of dependency additions against existing or platform support, supported runtime targets, relevant license/security/maintenance constraints and transitive cost. Upgrades need actual compatibility/migration evidence; an installed package is not automatically a justified dependency.

- [ ] Inspect manifest/lockfile consistency, local versus CI commands, generated artifacts and safe environment/setup examples. Check newly required variables and manual steps; do not accept undocumented author-only setup or infer a runnable check from its name.

- [ ] Compare affected product, API, architecture, contributor and operating docs with the candidate. Check canonical inventories and links, accepted decision changes and material learnings; retain historical meaning and avoid competing copies of the same rule.

## Supported application targets

- [ ] Confirm the accepted target matrix and exclusions. Apply a provisional web default only to otherwise unspecified greenfield planning; do not apply it over a mobile/desktop requirement or infer installed-app coverage from viewport size.

- [ ] For web, inspect supported browsers, responsive/input behavior, navigation/history and relevant session/cache/network boundaries. For installed mobile, inspect relevant device/OS permissions, app links, foreground/background transitions, interruption, offline/sync and older-client compatibility; identify simulator versus physical-device evidence.

- [ ] For desktop, inspect relevant OS/window/input behavior, local files/secrets, renderer/native process or IPC trust boundaries, offline/restart recovery and installer/sign/update/uninstall behavior. Browser rendering or a development launch cannot establish a packaged application's permissions or update safety.

## Verification and delivery evidence

- [ ] Assess reversibility at the relevant stages: before exposure, after new writes or external effects, and after destructive cleanup. State the credible worst supported failure and its affected population, including shared consumers. Keep severity, likelihood and reversibility distinct: an easy revert does not undo an exposure that already happened.

- [ ] Check the proposed recovery operation and its prerequisites: deployable old artifact, compatible readers/writers, retained data, restore/replay coverage, available authority and an owner. Reverting a commit, switching a flag, compensating an external action and restoring data have different effects. A UI-only change can be straightforward to revert, but a UI action that sends money or deletes data leaves consequences after the component is reverted.

- [ ] Classify recovery as demonstrated reversible, conditional on named limits, irreversible for specified effects, or unverified. Record which observation or rehearsal supports the claim and when the safe return window closes. A migration may become irreversible only when old data is dropped; a backup may miss subsequent writes or take longer to restore than the accepted outage window. Do not demand disruptive recovery experiments on a live system. Missing material recovery proof blocks the affected readiness claim.

- [ ] Confirm the supplied commands exercised material changed scenarios and relevant rejection/regression cases on the candidate revision. Inspect proof rather than relying on filenames, test counts, or green CI. Reuse sound checks; run a focused counterexample when useful and authorized. A test that reproduces the implementation can miss a wrong requirement or an untested entry point.

- [ ] Check whether the chosen unit, integration, contract and viable end-to-end boundaries actually support acceptance. Pure mocked tests cannot establish a real query, transaction or middleware path; a broad end-to-end test may miss an important domain edge case. Acceptance criteria can reuse these layers without duplicate suites. Inspect assertions, fixtures, isolation, asynchronous readiness, failed attempts and disclosed provider substitutions. Ask for missing proof of a material behavior, not every test type for every edit; test-first order and a coverage percentage are not acceptance criteria unless explicitly required by the project.

- [ ] Reconcile all material intent/acceptance criteria and selected checklist items against current proof, including relevant target surfaces. Record failed, unperformed and inapplicable items distinctly with their consequence or scope reason. Required missing proof is a readiness gap; do not relabel it as a proven runtime defect.

- [ ] Rank confirmed findings by impact and credible likelihood. Separate an urgent exposure from a blocker for the requested next step, a bounded follow-up, and an optional suggestion. Do not expand the review into unrelated legacy cleanup or generate nitpicks to fill an empty findings list.
