# Phase-plan template

Keep milestone names outcome-oriented and reuse existing IDs where possible.

| Phase | Result | Required inputs | Dependencies | Exit evidence |
| --- | --- | --- | --- | --- |
| P1 | A prerequisite or usable outcome | Accepted scope and relevant decisions | None or named prerequisites | A concrete working behavior or verified artifact |

For each phase add only the relevant ownership, compatibility, migration, rollout, and recovery constraints. Separate missing decisions from nonblocking assumptions. A phase with a missing prerequisite is not ready.

Use Mermaid or a task-system dependency graph when branches matter. Mark work that could run in parallel after named prerequisites separately from work ready now, with its isolation and reconciliation conditions. For example, UI and API work may become independent after their shared contract is accepted. Absence of a shared filename is insufficient evidence.

Record the next selected phase, its task-creation scope, and any requirement explicitly deferred. Update this plan when accepted findings change dependencies or exits.
