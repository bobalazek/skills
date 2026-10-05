# Task template

## ID and outcome

Stable task ID and a user-visible result or required technical prerequisite.

## Context

Relevant spec criteria/phase, accepted decisions, current-state evidence, and links. Identify source versions or snapshots when changes could invalidate the task; compare them with the authoritative inputs before execution. Include only context this task depends on; preserve source vocabulary.

## Scope and ownership

Owned files, modules, artifacts, or interfaces; behavior/data to preserve; exclusions. Indicate source-workspace isolation when another task writes nearby code.

## Dependencies

Required accepted outputs and what makes this task ready. Distinguish work eligible to run together after those prerequisites from work ready now. Parallel eligibility includes write, state/data, and verification isolation, not just different paths.

## Acceptance

Concrete criteria with the original source IDs where available. Changes to criteria are product decisions, not task-writing conveniences.

## Verify

Known runnable commands or direct behavior checks, prerequisites, and expected observable outcomes. Label unavailable commands instead of inventing them.

Name the baseline to preserve and the proof to capture when useful: comparable screenshots, measured data, observed interaction results, or focused check output. Identify relevant environment/input/state and the existing task/PR destination. Completion records the tested revision, actual outcomes, usable evidence links, and remaining gaps; it does not relabel this plan as an executed check.

## Done when

The specified outcome is demonstrated, relevant checks pass, required docs agree with behavior, and the handoff identifies revision/evidence and remaining risks.

For an ongoing batch, update the existing task record with its actual disposition, owner/workspace, output revision, accepted evidence, and blocker or next action. Preserve useful completed outputs when another task fails. Follow the destination's status meanings; worker completion alone does not establish integration, review, or delivery.

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

From this skill's directory, run:

```bash
bun scripts/check-graph.ts /path/to/task-snapshot.json
```

Use exactly the shown keys; unknown fields are rejected to catch declaration typos. Map actual task states explicitly to `pending`, `running`, `accepted`, `blocked` or `failed`; `accepted` means its required output has been accepted, not merely that a worker finished. IDs and dependency arrays are required. Accepted or running tasks must have accepted prerequisites; reconcile inconsistent states before using the frontier. `writes` names literal repository-relative file/directory paths; `resources` names shared state such as a test database or preview. Explicit empty arrays declare no use; omitting either field yields `unknownIsolation`.

The result reports structural errors, `dependencyReady` pending tasks whose prerequisites are all accepted, and overlap pairs among unfinished tasks. `bothDependencyReady` marks pairs currently on that frontier; other overlaps may be legitimate sequential work. Exit 1 means malformed input or an invalid graph. Exit 0 only validates the supplied graph: inspect conflicts and unknown isolation before parallel work. Square brackets are literal characters, including Next.js `src/app/[slug]/page.tsx` and Astro `src/pages/[id].astro` routes; no character classes are expanded. The helper rejects `*`/`?` wildcards, brace syntax, NUL, absolute paths and traversal. It does not establish filesystem/symlink, worktree, environment or runtime isolation, validate acceptance evidence, execute tasks, or write to a tracker.
