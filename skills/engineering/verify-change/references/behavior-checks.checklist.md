# Behavior and risk checks

Use the requested feature, user journey, or release scope and its acceptance criteria. Select applicable rows; a small leaf change does not require an application-wide audit.

## Select the test boundaries

Map each material acceptance criterion and regression risk to the smallest reliable check that can disprove it. Follow the existing harness and test locations; do not install another framework merely to complete a list. Select layers by the boundary being claimed, not by a fixed ratio or coverage percentage.

| Check | Use it to establish | Limit to state |
| --- | --- | --- |
| Unit | Isolated domain rules, transformations, validation, state transitions and edge cases with controlled inputs | Mocked collaborators do not establish actual database, network, framework or deployment behavior |
| Integration | Real interaction between relevant modules and infrastructure: queries, constraints, transactions, routing/middleware, serialization, queues or filesystem | Identify which boundaries are real and which are substituted; a different database engine may not reproduce production semantics |
| Contract | Supported request/response or event shapes and semantics across producers, consumers and versions | Schema agreement alone does not prove authorization, transport, persistence or the full business result |
| End-to-end | Viable critical journeys through actual supported entry points to their visible and persisted/terminal outcome | State browser/device/environment and third-party substitutions; a local journey is not proof of every deployed combination |
| Acceptance | The requested user/business outcome, allowed failures and constraints, checked against an explicit expected result | Acceptance is an objective, not necessarily a separate suite; it can reuse the layers above or an observed manual check, with required human acceptance recorded separately |

Include applicable rejection, permission, boundary, retry and regression cases alongside success. For a bug fix, show the check distinguishes the failure from the repair when a safe baseline is available; confirm failure is caused by the target behavior, not broken setup. Tests should assert outcomes and invariants, not merely repeat implementation branches. Type/lint/build checks complement behavior tests; screenshots complement interaction checks.

Keep test state isolated and cleanup limited to run-owned fixtures. Control clock, randomness and asynchronous readiness where needed; do not hide a race with arbitrary sleeps. Use authorized test services and prevent real charges/messages or destructive shared cleanup. Inspect failed attempts and flakes; a retry or quarantined test is not a silent pass. Run affected existing tests as well as new checks, and report unavailable required environments as gaps. Test-first ordering is optional.

For the PR, record criterion, selected layer/check, expected and observed outcome, tested revision/environment, relevant mocks/fixtures, command/steps and proof. Identify omitted layers with the scoped reason, and keep failed or unrun required checks visible. A new test file, test count or coverage number alone does not establish acceptance.

## Select the risk scenarios

| Surface | Scenarios worth checking | Evidence boundary |
| --- | --- | --- |
| User journey | Happy path, empty/loading states, invalid input, recovery, cancellation/back navigation, repeated submission | Observe actual state transitions and persisted result; wait for the relevant rendered outcome before the next action, since a generic response/load event may precede UI completion; a screenshot only proves its visible state |
| Identity and data ownership | Signed-out access, supported roles, cross-user/tenant access, session expiry, alternate entry routes | Exercise the real server/worker boundary with controlled accounts/fixtures; UI hiding alone is insufficient |
| Stateful operations | Duplicate delivery, retries/timeouts, partial failure, ordering, concurrency, interruption/resume | Follow queued work to its operation-specific terminal result; check stable retry identity/payload and deduplication limits; settle work before scoped fixture cleanup |
| Data changes | Constraints, representative reads/writes, migration ordering, old/new consumers, restart/retry and reconciliation | Separate code presence from executed checks and production data claims; use approved fixtures and environments |
| HTTP and query contracts | Methods/status/media types, writable fields, permissions, filters/order/pagination, conditional writes, cache/header behavior and bounded queries | Exercise the actual route and relevant proxy boundary, including rejection paths; source configuration does not prove deployed headers or query cost |
| Reversibility | Failure before and after new writes, external effects or destructive cleanup; rollback, restore/replay or forward repair as applicable | Observe the named recovery in a safe authorized environment and its retained/lost state; a revert, down script, flag or backup file alone is not proof, and some effects cannot be undone |
| External dependencies | Unavailable/slow/malformed responses, bounded retries, visible failure and recovery | Exercise relevant real-client serialization, headers and meaningful payload/readback; mocks or local protocol checks leave provider/deployment behavior unverified |
| AI and agent workflows | Representative and adversarial inputs, retrieval permissions, unsafe tool requests, malformed output, cost/iteration bounds, cancellation, approval gates and recovery | Observe actual trusted-code enforcement and action parameters; a prompt, declared gate, evaluator vote or plausible answer is not proof. Record model/prompt/tool/data versions and distinguish mocked from provider behavior |
| Interface and accessibility | Supported viewports/input methods, keyboard and focus, validation feedback, content fit, relevant assistive semantics | Inspect the rendered surface and interactions; automated scans alone do not establish conformance |
| Runtime and delivery | Actual entry-point wiring, configuration assumptions, user-visible smoke path, failure signal and recovery owner | Check dependency readiness under the relevant configuration and observe the affected path; a green build or health endpoint alone does not establish it |

For existing software, preserve important neighboring flows, supported clients, and data contracts. For new software, check the implemented path and its explicit requirements; do not invent compatibility obligations or claim unfinished flows work.

For asynchronous checks, use observed state or controlled synchronization for the specific operation. Fixed sleeps do not establish readiness. Keep fixtures, cleanup and fault simulation bounded to the authorized environment; preserve evidence from failed attempts even when a retry succeeds.

Record the scenario, role/input/state, expected result, actual observation, tested revision/environment, and proof. Label supplied evidence, assumptions, failed checks, and untested boundaries. Use observed logs/metrics/traces to explain failures when available; do not install monitoring as an implicit side effect.

Group failures that share a cause. Keep a meaningful regression check when it preserves the demonstrated behavior; test-first sequencing is optional. Required missing proof blocks readiness, while a completed QA report can truthfully describe failures and the next repair.
