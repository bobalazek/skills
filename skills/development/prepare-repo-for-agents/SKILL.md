---
name: prepare-repo-for-agents
description: "Improve a repository’s agent instructions, context navigation, and feedback commands so a coding agent can perform relevant tasks under the project’s existing conventions."
---

# Prepare repo for agents

Make the repository's useful context easy to discover and its checks easy to run. Improve actual contributor friction while preserving application behavior and established documentation ownership.

## Inspect the current task path

Read applicable agent instructions, README, documentation entry points, conventions, relevant decisions, and actual command definitions. Trace how an agent would find the context and feedback loop for a representative task. Identify missing, duplicated, stale, or overbroad instructions with evidence.

For a new repository, add only instructions supported by working capabilities. For an established repository, keep useful organization and link authoritative facts instead of copying them. Never invent conventions, commands, history, or ownership to fill a template.

## Improve the entry points

Use [project context guidance](references/project-context.playbook.md). Keep agent instructions focused on local invariants, conditional reading, safe operational boundaries, and exact supported checks. Put general project purpose/setup in README, detailed standards in their existing home, and domain facts in project documentation.

Use instruction scopes appropriate to the host and repository. Do not claim a client discovers a file until that behavior is verified for the target setup. Optional CLIs, indexes, connectors, and agent runtimes remain optional unless the project requires them.

Make coding standards part of the task path: identify the applicable root and surface instructions, authoritative rules, representative local examples, exceptions, and actual enforcement commands. Resolve conflicting or stale guidance at its owning source instead of adding another copied rule block. Inspect the existing agent/tool configuration before changing it; repo preparation does not authorize global agent settings, credential setup, or new external integrations.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Verify usability

Walk a representative task through the revised pointers: locate its owning code, applicable conventions, preserved contracts, and safe feedback command. Use one nested surface when instruction scope matters. Check links and command definitions, run relevant available checks, and state what could not run. When agent discovery itself is a requirement, exercise the configured client's discovery path; reading a file yourself does not prove the client loads it. Remove contradictory or redundant guidance found during the walk.

## Completion

Report the friction removed, changed entry points, verification, and remaining tooling/access gaps. Do not add broad policy boilerplate, empty memory folders, or a new orchestration system.

Next: `consolidate-docs` for wider documentation overlap; `define-project-conventions` for unresolved contributor rules; `automate-code-checks` for accepted rules that need enforcement; ordinary implementation when the task path is ready.
