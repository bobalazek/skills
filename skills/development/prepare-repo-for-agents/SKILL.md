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

## Verify usability

Walk a representative task through the revised pointers: locate its owning code, applicable conventions, preserved contracts, and safe feedback command. Check links and command definitions, run relevant available checks, and state what could not run. Remove contradictory or redundant guidance found during the walk.

## Completion

Report the friction removed, changed entry points, verification, and remaining tooling/access gaps. Do not add broad policy boilerplate, empty memory folders, or a new orchestration system.

Next: `consolidate-docs` for wider documentation overlap; `define-project-conventions` for unresolved contributor rules; ordinary implementation when the task path is ready.
