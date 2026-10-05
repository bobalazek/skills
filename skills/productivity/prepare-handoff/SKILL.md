---
name: prepare-handoff
description: "Prepare a compact, evidence-backed transfer of ongoing work to another person or agent session, including current state, decisions, artifacts, verification, blockers, and the next executable action."
---

# Prepare handoff

Make it possible to continue the work without reconstructing the conversation. Use this when context actually transfers, not between every phase of one active session.

Inspect the current goal, accepted scope, relevant repository/branch/revision and working-tree state, artifacts, decisions, command results, pending jobs, and remaining dependencies. Distinguish completed and verified work from partial edits, proposals, failed checks, and untested claims.

Use [the handoff outline](references/handoff.template.md). Carry the minimum context the next owner needs, with links to authoritative material rather than copied documents. Preserve existing user authorization and requested stop points; do not expand them. Reference secret locations or access prerequisites without including secret values.

Name the next runnable action and the condition that makes it ready. For a pending remote operation, provide its actual identifier and observed state so the next owner can inspect before retrying. Explain changed assumptions and material rejected approaches only when they prevent repeating a mistake.

Check that file paths, revisions, links, and completion claims match the current state. Update an existing handoff or task record when suitable. Preparing a handoff does not authorize sending it to someone or changing tracker state.

Finish with the transfer artifact or concise context block, exact blockers, and the next action. Avoid a chronological transcript and avoid claiming that a command invocation proves success.
