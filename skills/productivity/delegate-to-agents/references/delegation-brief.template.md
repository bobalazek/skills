# Delegation brief

Use the project's existing task format when it carries these fields. Adapt this template to the available host rather than assuming a shared checkout or an isolated worktree.

```markdown
## Outcome and context
<Raw accepted requirement, why this part exists, relevant decisions and source revision.>

## Read first
<Authoritative files or supplied artifacts, exact locations and relevant sections.>

## Prerequisites
<Accepted inputs, their identities and any unresolved decision that blocks execution.>

## Ownership and isolation
<Outputs this worker may change; forbidden paths/systems; working directory or session;
shared resources and how collisions are prevented. Read access can overlap.>

## Authority and boundaries
<Permitted commands, tools and side effects; retained approval stops; secret references
through the approved mechanism, never values; actions requiring escalation.>

## Acceptance and verification
<Criterion IDs and expected observable result; actual check commands and prerequisites;
what to report if access is unavailable or a check fails.>

## Failure and return
<Existing retry/stop limits, who resolves a new question, and the expected return:
artifact locations, diff or revision, commands and outcomes, gaps and side effects.>
```

Before dispatch, confirm that the worker can access its inputs and toolchain, that no dependent decision is being guessed, and that its ownership is compatible with every concurrent brief. A plan does not establish that the host launched an agent.
