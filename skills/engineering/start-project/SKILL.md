---
name: start-project
description: "Create a minimal runnable project from agreed requirements and technical choices, using a suitable starter when available and verifying one complete path plus contributor setup."
---

# Start project

## Use this skill

Use this to create a minimal runnable foundation from accepted requirements and technical choices, including a suitable starter when available. Finish with one working path and a reliable contributor feedback loop. Reuse supplied stack, design and convention decisions; do not restart technology selection.

Use `design-architecture` for unresolved foundational choices or `implement-change` when a product already exists. A requested new project does not justify scaffolding over existing work, implementing every future feature or producing only an empty directory tree.

## Confirm the foundation

Inspect the requested destination and existing work. Resolve only missing decisions that materially change setup. Identify the first supported behavior, required runtime boundaries and accepted constraints before creating files.

Inspect any proposed template, generator, or software factory before use. Check capability fit, licensing, maintenance/update strategy, extension boundaries, setup hooks, and inherited operating responsibilities. Adopt useful existing auth, billing, storage, or UI capabilities by configuration and verification. Do not assume a particular starter is installed or approved.

## Build the first complete path

Use the selected tooling's current documented setup and compatible versions. Keep credentials out of generated files; document required variable names and safe setup. Inspect scripts before running them, especially hooks that provision services or alter data. Provisioning, remote repository creation and publication need their actual authority.

Implement a narrow path through the actual runtime and its required boundaries. Add only dependencies, containers, databases, or shared packages that path needs. Establish the repository's relevant development and verification commands and run them with output inspected.

Write useful README setup and local contributor instructions, preserving a template's authoritative documentation where it remains correct. Remove misleading template-specific claims and examples only within the requested project copy.

## Verify the foundation

Use [foundation readiness](references/foundation.checklist.md) to check the runnable path and contributor setup before handoff. Demonstrate the actual runtime result and inspect relevant command output; name missing services or environment prerequisites. A locally working foundation is not a production deployment.

Before acceptance, have a separate agent in fresh context challenge the candidate against the raw accepted requirements, stack constraints, setup instructions and observed checks, without the author's conversation or preferred conclusion. Ask it to follow the documented path and check inherited template claims. Reconcile findings and independently recheck affected results after fixes. Retain the returned reviewer/session identity, evaluated revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

## Return the result

Match the requested audience, tone and depth, then project conventions. Return the foundation's purpose and working path, setup prerequisites, verified feedback commands, candidate revision and exact environment gaps. Maintain setup and decisions in existing authorized project locations instead of another summary. For authorized PR work, include useful behavior/check evidence and independent findings, refreshing affected proof after edits.

## Next steps

Use `create-tasks` when the next accepted capability needs decomposition, or `implement-change` when it is already bounded and ready. Pass established conventions, commands, decisions, working-path evidence and unresolved prerequisites. Check skill availability and describe the plain action when absent. Stop at the requested foundation or continue ready work already authorized; setup success does not authorize deployment or a new planning cycle.
