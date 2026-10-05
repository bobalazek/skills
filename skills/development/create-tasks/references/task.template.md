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
