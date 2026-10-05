---
name: prepare-handoff
description: "Prepare ongoing work for an owner/session transfer or context compaction, preserving current state, authority, decisions, evidence, blockers, and a checked path to resume."
---

# Prepare handoff

Make it possible to continue the work without reconstructing the conversation. Use this for an owner/session transfer or when a long task needs a continuation summary before compaction or reset, not between every phase of one active session. Reuse the current task record or a concise context block; a new file or session is optional.

Inspect the current goal, accepted scope, relevant repository/branch/revision and working-tree state, artifacts, decisions, command results, pending jobs, and remaining dependencies. Distinguish completed and verified work from partial edits, proposals, failed checks, and untested claims.

Use [the handoff outline](references/handoff.template.md). Carry the minimum context the next owner needs, with links to authoritative material rather than copied documents. Preserve existing user authorization and requested stop points; do not expand them. Reference secret locations or access prerequisites without including secret values.

Name the next runnable action and the condition that makes it ready. For a pending remote operation, provide its actual identifier and observed state so the next owner can inspect before retrying. Explain changed assumptions and material rejected approaches only when they prevent repeating a mistake.

When compressing context, preserve the goal, constraints, authorization, criterion status, blockers, source versions, pending operations, and evidence locations. Keep a short map of relevant files or symbols; remove search noise and repeated logs before removing facts needed to continue. Distinguish durable project knowledge from temporary session state.

Check that file paths, revisions, links, and completion claims match the current state. Update an existing handoff or task record when suitable. Preparing a handoff does not authorize sending it to someone or changing tracker state.

For resumption, reload the applicable instructions and inspect current workspace, task, and remote-operation state. Recheck material source/evidence pointers and reconcile drift before acting. Carry forward established authorization and stop points; a summary does not create additional authority or turn a worker's claim into verified completion.

Finish with the transfer artifact or concise context block, exact blockers, and the next action. Avoid a chronological transcript and avoid claiming that a command invocation proves success.
