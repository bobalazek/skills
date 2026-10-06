---
name: start-project
description: "Create a minimal runnable project from agreed requirements and technical choices, using a suitable starter when available and verifying one complete path plus contributor setup."
---

# Start project

Build a usable foundation for the selected project. Finish with one working path and a reliable local feedback loop, rather than an empty directory tree or every future feature.

## Confirm the foundation

Use accepted requirements, stack/design decisions, conventions, and the requested destination. Resolve decisions that materially change setup; reuse supplied choices. Inspect the destination and preserve existing work. If a product already exists, implement its change rather than scaffold over it.

Inspect any proposed template, generator, or software factory before use. Check capability fit, licensing, maintenance/update strategy, extension boundaries, setup hooks, and inherited operating responsibilities. Adopt useful existing auth, billing, storage, or UI capabilities by configuration and verification. Do not assume a particular starter is installed or approved.

## Build and verify

Use the selected tooling's current documented setup and compatible versions. Keep credentials out of generated files; document required variable names and safe setup. Inspect scripts before running them, especially hooks that provision services or alter data.

Implement a narrow path through the actual runtime and its required boundaries. Add only dependencies, containers, databases, or shared packages that path needs. Establish the repository's relevant development and verification commands and run them with output inspected.

Load [foundation readiness](references/foundation.checklist.md) before handoff. Write useful README setup and local contributor instructions, preserving a template's authoritative documentation where it remains correct. Remove misleading template-specific claims and examples only within the requested project copy.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Completion

Demonstrate the working path, setup prerequisites, feedback commands, and known environment gaps. A locally working foundation is not a production deployment. Provisioning, remote repository creation, and publication follow the actual user authorization.

Next: `create-tasks` or `implement-change` for the first agreed capability. Carry established conventions, commands, and decisions forward.
