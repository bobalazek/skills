# Behavior and risk checks

Use the requested feature, user journey, or release scope and its acceptance criteria. Select applicable rows; a small leaf change does not require an application-wide audit.

| Surface | Scenarios worth checking | Evidence boundary |
| --- | --- | --- |
| User journey | Happy path, empty/loading states, invalid input, recovery, cancellation/back navigation, repeated submission | Observe actual state transitions and persisted result; a screenshot only proves its visible state |
| Identity and data ownership | Signed-out access, supported roles, cross-user/tenant access, session expiry, alternate entry routes | Exercise the real server/worker boundary with controlled accounts/fixtures; UI hiding alone is insufficient |
| Stateful operations | Duplicate delivery, retries/timeouts, partial failure, ordering, concurrency, interruption/resume | Show required invariants and useful completion; avoid disruptive or destructive live experiments |
| Data changes | Constraints, representative reads/writes, migration ordering, old/new consumers, restart/retry and reconciliation | Separate code presence from executed checks and production data claims; use approved fixtures and environments |
| External dependencies | Unavailable/slow/malformed responses, bounded retries, visible failure and recovery | Mocks establish selected behavior only; identify untested integration or provider behavior |
| Interface and accessibility | Supported viewports/input methods, keyboard and focus, validation feedback, content fit, relevant assistive semantics | Inspect the rendered surface and interactions; automated scans alone do not establish conformance |
| Runtime and delivery | Actual entry-point wiring, configuration assumptions, user-visible smoke path, failure signal and recovery owner | A green build or health endpoint does not establish the affected end-to-end behavior |

For existing software, preserve important neighboring flows, supported clients, and data contracts. For new software, check the implemented path and its explicit requirements; do not invent compatibility obligations or claim unfinished flows work.

Record the scenario, role/input/state, expected result, actual observation, tested revision/environment, and proof. Label supplied evidence, assumptions, failed checks, and untested boundaries. Use observed logs/metrics/traces to explain failures when available; do not install monitoring as an implicit side effect.

Group failures that share a cause. Keep a meaningful regression check when it preserves the demonstrated behavior; test-first sequencing is optional. Required missing proof blocks readiness, while a completed QA report can truthfully describe failures and the next repair.
