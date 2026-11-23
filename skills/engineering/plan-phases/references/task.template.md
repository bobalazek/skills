# Task template

## ID and outcome

Stable task ID and a user-visible result or required technical prerequisite.

## Context

- **Sources:** Relevant spec criteria/phase, accepted decisions, current-state evidence, and links.
- **Priority:** Source finding/task label and rationale under the project's scale; retain the finding ID and explain an accepted reprioritization. Unassigned priority remains explicit and does not imply readiness.
- **Intent and targets:** Original requested outcome and accepted clarifications through their authoritative source; supported app surfaces and versions this task must satisfy or preserve.
- **Validity:** Source versions or snapshots that could invalidate the task; compare them with authoritative inputs before execution.
- **Conventions:** Applicable authoritative rules and exceptions for placement, class/module boundaries and naming; include only those this task needs.

Include only context this task depends on; preserve source vocabulary.

## Scope and ownership

- **Own:** Files, modules, artifacts, or interfaces this task changes.
- **Preserve/exclude:** Behavior and data to preserve; work outside this task.
- **Workspace:** Source-workspace isolation when another task writes nearby code.

## Dependencies

- **Prerequisites:** Required accepted outputs and their current evidence/state.
- **Ready now:** Whether prerequisites, access, and blocking decisions are resolved, including blockers outside the graph.
- **Parallel candidates:** Work eligible to run together after named prerequisites. Establish write, state/data, and verification isolation, not just different paths.

### Human decisions and actions, when blocking

Use the existing blocker or human-task record only for work that needs human judgment, missing authority or unavailable human-controlled access/action. Determine this from current tools and granted authority; an external system alone does not make a task human-only. Continue independent ready work.

Record the decision or action needed, the actual owner (or unassigned), affected task/criterion IDs, and the answer or observable evidence that would close it. Keep secrets out of task records. A pending choice is not an accepted ADR. Once resolved, link the actual decision/action evidence, reconcile the pending record and recheck dependent readiness; an answer does not by itself complete implementation or verification.

## Acceptance

Concrete criteria with the original source IDs where available. Changes to criteria are product decisions, not task-writing conveniences.

## Verify

### Planned checks

Known runnable commands or direct behavior checks, prerequisites, and expected observable outcomes. Label unavailable commands instead of inventing them. Name the relevant environment/input/state, baseline to preserve, and proof to capture: comparable screenshots, measured data, observed interaction results, or focused check output, as useful.

### Completion evidence

Record the tested revision, actual outcomes, usable evidence links in the existing task/PR, and remaining gaps. Planned checks are not executed results.

## Done when

The specified outcome is demonstrated, relevant checks pass, required docs agree with behavior, and the handoff identifies revision/evidence and remaining risks.

For an ongoing batch, update the existing task record with its actual disposition, owner/workspace, output revision, accepted evidence, and blocker or next action. Preserve useful completed outputs when another task fails. Follow the destination's status meanings; worker completion alone does not establish integration, review, or delivery.

## Optional delivery grouping

Name a proposed PR/group only when useful, with the task criteria it covers, merge prerequisites, and remaining integration or rollout checks. Keep these annotations in the task record; the optional graph-check JSON below has a fixed schema. Task, phase, and PR IDs express different boundaries and need not match.

Assess a broad change by cohesive outcome, module ownership, dependencies and risk rather than a line threshold. Where viable, separate shared contracts/foundations, compatible backend support and frontend adoption with their own checks and recovery boundaries. Record old/new compatibility and deploy order; independently reviewable does not imply independently deployable. Preserve integrated work when a layer split would break behavior, and keep remaining criteria open until integration is demonstrated.

Example relationships for an agreed CSV import; actual tasks still need their own ownership and isolation checks:

| Task outcome | Required accepted outputs | Contribution to the milestone |
| --- | --- | --- |
| Preview UI | Shared import contract | Preview interaction and row feedback |
| Import handler | Shared import contract | Validation and confirmation behavior |
| Integrated import | Preview UI and import handler | Confirmation, invalid-row handling, and duplicate retries demonstrated together |

These tasks may land through several PRs or one coherent PR if review and isolation allow it. Record any deliberately split task's unfinished criteria; merging its first PR does not close the task.

## Optional graph check

When useful, supply a JSON snapshot to the package's `scripts/check-graph.ts`. Keep the original task format and tracker; this optional snapshot checks only the supplied declarations.

```json
{
  "tasks": [
    { "id": "contract", "status": "accepted", "dependencies": [], "writes": ["src/contracts/"], "resources": [] },
    { "id": "page", "status": "pending", "dependencies": ["contract"], "writes": ["src/pages/example.tsx"], "resources": ["shared-preview"] }
  ]
}
```

With Bun 1.3.9 or newer, run from this skill's directory (`--help` prints usage):

```bash
bun scripts/check-graph.ts /path/to/task-snapshot.json
```

Use exactly the shown keys; unknown fields are rejected to catch declaration typos. Map actual task states explicitly to `pending`, `running`, `accepted`, `blocked` or `failed`; `accepted` means its required output has been accepted, not merely that a worker finished. IDs and dependency arrays are required. Accepted or running tasks must have accepted prerequisites; reconcile inconsistent states before using the frontier. `writes` names literal repository-relative file/directory paths; `resources` names shared state such as a test database or preview. Explicit empty arrays declare no use; omitting either field yields `unknownIsolation`.

The result reports structural errors, `dependencyReady` pending tasks whose prerequisites are all accepted, and overlap pairs among unfinished tasks. `bothDependencyReady` marks pairs currently on that frontier; other overlaps may be legitimate sequential work. Exit 1 means malformed input or an invalid graph. Exit 0 only validates the supplied graph: inspect conflicts and unknown isolation before parallel work. Square brackets are literal characters, including Next.js `src/app/[slug]/page.tsx` and Astro `src/pages/[id].astro` routes; no character classes are expanded. The helper rejects `*`/`?` wildcards, brace syntax, NUL, absolute paths and traversal. It does not establish filesystem/symlink, worktree, environment or runtime isolation, validate acceptance evidence, execute tasks, or write to a tracker.
