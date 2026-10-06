---
name: prepare-handoff
description: "Prepare an owner/session transfer or context compaction with checked work state, accepted decisions, authority, evidence and a runnable next action. Use for continuation rather than a stakeholder status update."
---

# Prepare handoff

## Use this skill

Use this when work must continue with another owner or session, or after context compaction/reset. Carry the current task record and accepted artifacts forward; a concise context block may be enough. Routine phases in one active session do not each need a handoff.

Use `report-project-status` for an audience-and-period update, or `explain-pr` to explain a fixed code comparison. A handoff's defining requirement is that someone can resume the actual work.

## Inspect the current state

Read the goal, accepted scope and stop point. Inspect the relevant workspace, branch/revision, intended local edits, artifacts, decisions, command results, pending jobs and dependencies. Distinguish verified completion from partial edits, proposals, failed checks and untested claims.

Preserve established authorization without expanding it. Reference secret locations or access prerequisites without including values. Preparing a handoff does not authorize sending it or changing tracker state.

## Write the continuation context

When assembling the transfer block or record, use [the handoff template](references/handoff.template.md), adapting it to the project's existing format. Link authoritative material rather than copying documents. Retain the goal, constraints, authority, criterion status, source versions, blockers and useful file/symbol pointers.

Name the next runnable action and what makes it ready. For a pending remote operation, include its actual identifier and observed state so the recipient can inspect before retrying. Keep changed assumptions and rejected approaches only when they prevent a repeated mistake.

During compaction, remove search noise and duplicate logs before removing continuation facts. Keep temporary session state separate from durable project knowledge; update an existing authorized record rather than creating a competing one.

## Result and verification

Return the handoff or context block, exact blockers and next action at the requested depth. Check paths, links, revisions and completion claims against current state; a command invocation alone does not prove success.

Before acceptance, have a separate agent in fresh context try to identify the next safe action from the raw request, candidate handoff, source artifacts and permitted state checks, without the author's conversation or preferred answer. Retain its returned reviewer/session identity, evaluated handoff or revision, findings and coverage. Resolve missing or contradictory continuation facts and independently recheck affected parts. If that assessment is unavailable, label the handoff unreviewed.

## Next steps

Name the skill that owns the actual next task, its accepted input and unmet prerequisite; check availability or give the plain runnable action. Do not force another workflow when the handoff itself satisfies the request.

On resumption, reload applicable instructions and inspect current workspace, task and pending-operation state. Reconcile drift in material sources or evidence before acting. Carry existing authority and stop points forward; a summary neither creates permission nor upgrades a worker's claim into verified completion.
