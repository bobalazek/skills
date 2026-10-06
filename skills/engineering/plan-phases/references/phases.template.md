# Phase-plan template

Keep milestone names outcome-oriented and reuse existing IDs where possible.

## Milestones

Illustrative CSV-import plan: behavior is agreed, but the shared contract and fixtures are not yet accepted. Replace the rows and evidence state with the actual project facts; a bounded change may need no phase plan.

| Phase | Result | Required inputs | Dependencies and acceptance state | Exit evidence |
| --- | --- | --- | --- | --- |
| P1 | Accepted import contract and representative fixtures | Agreed import behavior and constraints | No phase prerequisite; contract acceptance pending | Accepted contract and fixtures covering the agreed rules |
| P2 | Working preview-and-confirm import | P1 contract and fixtures | P1; blocked until its outputs are accepted | Integrated import scenario demonstrates the spec criteria, including invalid rows and duplicate retries |

For each phase add only the relevant ownership, compatibility, migration, rollout, and recovery constraints. Separate missing decisions from nonblocking assumptions. A phase with a missing prerequisite is not ready.

## Readiness and parallel work

Use Mermaid or a task-system dependency graph when branches matter. Mark work that could run in parallel after named prerequisites separately from work ready now, with its isolation and reconciliation conditions. For example, UI and API work may become independent after their shared contract is accepted. Absence of a shared filename is insufficient evidence.

In the example, UI and handler tasks within P2 are future parallel candidates, subject to task isolation checks. The integrated scenario establishes P2's exit; individual task completion or PR merge does not. Add a pilot rollout milestone only if requested.

## Task links and next selection

Link task IDs and optional delivery/PR groups when they exist; do not force one phase per task or PR. Keep executable task detail in the task records and required behavior in the spec.

- **Next phase:** Selected phase and its current prerequisite evidence or blocker.
- **Task-creation scope:** Outcomes within that phase to decompose next.
- **Deferred requirements:** Explicitly deferred scope and its source IDs.

Update this plan when accepted findings change dependencies or exits.
