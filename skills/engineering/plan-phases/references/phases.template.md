# Phase-plan template

Keep milestone names outcome-oriented and reuse existing IDs where possible.

| Phase | Result | Required inputs | Dependencies and acceptance state | Exit evidence |
| --- | --- | --- | --- | --- |
| P1 | A prerequisite or usable outcome | Accepted scope and relevant decisions | None, or named prerequisite with its accepted evidence / missing result | A concrete working behavior or verified artifact |

For each phase add only the relevant ownership, compatibility, migration, rollout, and recovery constraints. Separate missing decisions from nonblocking assumptions. A phase with a missing prerequisite is not ready.

Use Mermaid or a task-system dependency graph when branches matter. Mark work that could run in parallel after named prerequisites separately from work ready now, with its isolation and reconciliation conditions. For example, UI and API work may become independent after their shared contract is accepted. Absence of a shared filename is insufficient evidence.

For a multi-stage CSV import, a milestone might establish accepted import rules and representative fixtures, followed by a milestone demonstrating safe preview-and-confirm behavior, then a pilot rollout only if requested. UI and handler tasks within the second milestone can be parallel candidates after contract acceptance; they are not ready while it remains disputed. The integrated import scenario establishes that milestone's exit. Individual task completion or PR merge does not establish it automatically.

Link task IDs and optional delivery/PR groups when they exist; do not force one phase per task or PR. Keep executable task detail in the task records and required behavior in the spec.

Record the next selected phase, its task-creation scope, and any requirement explicitly deferred. Update this plan when accepted findings change dependencies or exits.
