---
name: prepare-repo-for-agents
description: "Improve a repository’s agent instructions, context navigation, and feedback commands so a coding agent can perform relevant tasks under the project’s existing conventions."
---

# Prepare repo for agents

## Use this skill

Use this when agents cannot reliably find applicable project context, instructions or feedback commands. Produce repaired entry points and a demonstrated task path while preserving application behavior and documentation ownership. Reuse existing standards, memory indexes and verified commands; useful organization need not be replaced.

Use `onboard-codebase` for a contributor's orientation, `document-project` for missing factual content, or `define-project-conventions` for unsettled policy. This skill fixes how existing context is found and applied, not the product architecture or an agent platform.

## Inspect the current task path

Read applicable root and nested agent instructions, README, documentation entry points, conventions, relevant decisions, and actual command definitions before adding files. Discover existing memory, learning, decision, and convention indexes; inspect relevant entries, status, and source links rather than loading every record. Trace how an agent would find the context and feedback loop for a representative task. Identify missing, duplicated, stale, or overbroad instructions with evidence.

For a new repository, add only instructions supported by working capabilities. For an established repository, keep useful organization and link authoritative facts instead of copying them. Never invent conventions, commands, history, or ownership to fill a template.

## Improve the entry points

When repairing instruction placement, memory navigation or client discovery, use [project context guidance](references/project-context.playbook.md). Keep agent instructions short and focused on local invariants, conditional reading, safe operational boundaries and exact supported checks. Put general purpose/setup in README, detailed standards in their existing home, and domain facts in project documentation. Link memory indexes with their loading conditions instead of copying their records.

Use instruction scopes appropriate to the host and repository. Do not claim a client discovers a file until that behavior is verified for the target setup. Optional CLIs, indexes, connectors, and agent runtimes remain optional unless the project requires them.

Make coding standards part of the task path: identify the applicable root and surface instructions, authoritative rules, representative local examples, exceptions, and actual enforcement commands. Resolve conflicting or stale guidance at its owning source instead of adding another copied rule block. Inspect the existing agent/tool configuration before changing it; repo preparation does not authorize global agent settings, credential setup, or new external integrations.

## Verify usability

Walk a representative task through the revised pointers: locate its owning code, applicable conventions, preserved contracts, relevant memory/decision status, and safe feedback command. Use one nested surface when instruction scope matters. Check links and command definitions, run relevant available checks, and state what could not run. Confirm an outdated or superseded record cannot be mistaken for a current rule. When agent discovery itself is a requirement, exercise the configured client's discovery path; reading a file yourself does not prove the client loads it. Remove contradictory or redundant guidance found during the walk.

Before acceptance, have a separate agent in fresh context follow the revised task path using the raw request, candidate entry points, authoritative sources and check access, without the author's conversation or preferred conclusion. Ask it to challenge discovery, scope and stale-rule claims. Reconcile findings and independently recheck affected paths after fixes. Retain the returned reviewer/session identity, evaluated artifact/revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

## Return the result

Match the requested audience, tone and depth, then project conventions. Report the friction removed, changed entry points, verified task path and remaining tooling/access gaps. Maintain facts at their existing authorized source instead of adding broad policy boilerplate, empty memory folders or another orchestration system. For authorized PR work, include relevant walkthrough/check evidence and independent findings, refreshing affected proof after edits.

## Next steps

Use `document-project` for factual knowledge or record maintenance, `consolidate-docs` for wider overlap, `define-project-conventions` for unresolved rules, or `automate-code-checks` when an accepted rule needs enforcement. Use `implement-change` when the original task now has a ready context/check path. Pass the source revision, repaired pointers, verified commands and specific remaining gap. Check skill availability and describe the plain action when absent. Stop at the requested preparation result or continue already-authorized ready work; discovering a gap does not authorize every adjacent repair.
