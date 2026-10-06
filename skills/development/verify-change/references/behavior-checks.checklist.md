# Behavior and risk checks

Use the requested feature, user journey, or release scope and its acceptance criteria. Select applicable rows; a small leaf change does not require an application-wide audit.

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
