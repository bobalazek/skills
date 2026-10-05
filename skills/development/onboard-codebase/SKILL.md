---
name: onboard-codebase
description: "Establish a working contributor baseline for an unfamiliar repository: verified setup/checks, architecture and flow map, local conventions, operating constraints, and a concrete first-change route."
---

# Onboard codebase

Make an inherited repository usable for the intended contributor and task. The deliverable is a verified orientation and feedback path, with exact blockers where access or setup is missing.

## Inspect from the entry points

Read repository instructions and README, then the relevant manifests, lockfiles, runtime/configuration, tests, CI, and deployment references. Use the repository's required index/navigation tools. Identify the selected application or package in a larger workspace; do not survey unrelated projects.

Map the purpose, runtime entry points, important flows, module/state ownership, integrations, conventions, and delivery path needed for the adoption goal. Trace representative code instead of trusting a directory name. Distinguish current code, documented intent, observed conventions, and unknown rationale.

## Establish a feedback path

Inspect documented setup/check commands and their side effects. Run the safe relevant local path available within the requested onboarding scope. Respect project rules for dependency setup; do not reset data, replace configuration, fetch secrets, or contact production merely to make a check green.

Record each important command as verified, failed, or not run with its prerequisite. Preserve unrelated work and pre-existing failures. Where setup is blocked, provide the precise missing input and a useful read-only orientation without claiming a working environment.

## Make the next change approachable

Load [the onboarding outline](references/onboarding.template.md) when a durable orientation is requested. Reuse the existing contributor documentation and repair only authorized gaps. Identify the correct locations for a representative first change, its affected consumers, relevant standards, and verification path.

Prioritize adoption blockers and preservation risks; avoid converting onboarding into an unsolicited correctness audit or rewrite. History can explain a recorded decision but does not establish unrecorded motives.

## Completion

The contributor can find the owning code and authoritative conventions, understand the important flow, and run the verified feedback path or see its exact blocker. Report inspected scope and evidence.

Next: `define-project-conventions` for disputed/missing rules, `prepare-repo-for-agents` for agent entry points, or `implement-change` for a ready first task. Use `review-code` when a separate health/correctness assessment is requested.
