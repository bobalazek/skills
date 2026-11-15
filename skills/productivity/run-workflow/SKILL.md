---
name: run-workflow
description: "Execute or resume an accepted workflow definition using its dependencies, authority and observed run state. Return accepted outputs or exact blockers; authoring the definition is separate work."
---

# Run workflow

## Establish the accepted run

Identify the approved definition and version, requested outcome, inputs, source workspace, actual run record and stopping point. Read the definition, applicable project rules and relevant prior results. A name alone does not establish an executable contract. Reuse accepted choices and current authority; do not restart completed stages or invent a replacement definition to finish the run.

Use `delegate-to-agents` when the missing work is splitting bounded parts while retaining a coordinator, `manage-project-board` for tracker coordination, or `prepare-handoff` when responsibility transfers. Check availability or describe the equivalent plain action. Creating or materially changing a reusable workflow definition is a separate authoring task; identify the missing contract rather than silently accepting new phases or permissions.

## Resolve execution and readiness

Use [the execution contract checks](references/execution-contract.checklist.md) to reconcile inputs, dependency outputs, ownership, authority and completion. Choose the consuming project's actual runtime and state source. Inspect supported capabilities before relying on dispatch, persistence, atomic claims, scheduling or cancellation. Do not install an engine or assume a particular CLI, format, model pool or directory.

When an engine is unavailable, manual execution is appropriate only if the accepted definition can be followed safely with the available tools and the requested authority. Keep a truthful manual record and disclose missing durability or enforcement. If an essential capability is absent, return the exact blocker; prose and status labels cannot provide it.

Use the existing run format, or [the run record template](references/run-record.template.md) when no format exists. Keep run coordination separate from the source checkout and durable project knowledge. A temporary record is not a delivered artifact unless the definition says so. Record only safe references to credentials and private inputs.

## Execute dependency-ready work

Confirm each required prerequisite's actual artifact, revision and acceptance evidence before its consumer starts. A completed process, submitted report or high priority is not accepted input. Match task and artifact versions; reconcile changed requirements before reusing old proof, preserving unaffected accepted results.

Follow required sequence and explicit parallel boundaries. Parallel work also needs compatible writes, services and fixtures; use host-supported isolation and one coordinator for shared state when the host lacks atomic claims. Dispatch only authorized work with its input/output contract, ownership, allowed effects, checks and failure bounds. Direct execution needs the same boundaries. Do not force delegation when one safe action is sufficient.

Capture actual commands or interactions, results and artifact locations. Apply the definition's acceptance checks and applicable project requirements. Code, reusable instruction changes and delivery retain their required independent assessment; an author cannot supply their own required review. Missing review or human decisions remain open, with the affected consumers blocked.

## Resume and recover from observed state

For an interrupted run, pending operation, changed contract or failed branch, use [resume and recovery](references/resume-and-recovery.playbook.md). Inspect existing state before retrying any uncertain write. Honor prior approval within its actual scope without treating a new target, effect or material decision as covered.

Retain failed attempts and partial outputs. Follow the accepted retry bounds and idempotency contract; a permitted transient retry can reuse the same input. Correct a known deterministic cause before repeating its failed step. Cancellation stops only what the host confirms it stopped; it does not undo already accepted effects. Preserve unrelated work and report incomplete cleanup or unavailable recovery.

## Return the reached state

Reconcile every required final artifact, dependency and acceptance gate against observed evidence. Only then call the requested run complete. Report the definition/version, actual execution mode and state, accepted outputs, pending or failed work, approval/review gaps and next ready action. Distinguish preparation, execution, acceptance and delivery; a successful engine exit proves only that process result.

Continue only ready work already authorized by the run. A blocker or requested stopping point ends this execution with a usable continuation record; it does not authorize editing the workflow, starting another one or publishing its outputs.
