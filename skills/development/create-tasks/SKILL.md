---
name: create-tasks
description: "Convert an agreed specification or selected phase into executable tasks with acceptance criteria, ownership, dependencies, and verification. Use for local tasks or an authorized project-management destination."
---

# Create tasks

Produce a coherent task graph that another developer or agent can execute without reconstructing the whole discussion. Inputs may be an accepted spec, a selected phase, or a bounded change brief.

## Preserve intent

Load the relevant accepted scope, phase exits, design decisions, repository conventions, and feedback commands. Reuse current tasks where they already meet the contract. Distinguish observed baseline from desired behavior. Do not invent missing requirements or silently change milestone acceptance criteria.

A task owns one reviewable outcome. Split work when ownership, acceptance, or dependencies are independent; combine fragments that cannot be meaningfully verified separately. Include necessary shared changes, migrations, and integration checks, keeping speculative cleanup outside the queue.

## Make tasks executable

Use [the task template](references/task.template.md). Carry the relevant criteria into each task, with source IDs and artifact references. State owned writes, preserved contracts, prerequisites, applicable checks, and a falsifiable “done when.” File locations can be investigative pointers rather than guesses presented as mandatory paths.

Order contracts, schemas, and foundations before their consumers. Confirm the graph is acyclic. Mark parallel work only when ready inputs, isolated writes, shared state/data, and verification environments permit it; otherwise serialize it. A selected batch includes only tasks whose prerequisites can be satisfied within the agreed execution.

Use the requested local format by default. For a tracker, inspect its project, workflow states, existing items, duplicate/parent relationships, and concurrency/version requirements before writing. Create or update remote items only within existing authorization; never post messages merely because a plan exists. If tools are absent, deliver the local task set without pretending it is synchronized.

## Completion

Trace every in-scope requirement to a task or explicit deferral. Ensure dependencies, ownership, task criteria, and phase exits agree. Identify ready work and unresolved blockers. No task is executable while it depends on an unmade consequential decision.

Next: `start-project` when a required foundation is missing; otherwise `implement-change` for one selected task or an agreed ready batch. Pass the task contract and accepted context rather than restarting discovery.
