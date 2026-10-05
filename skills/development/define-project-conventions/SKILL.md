---
name: define-project-conventions
description: "Establish or reconcile project coding and contributor conventions from local evidence and selected stack practices, producing clear rules, exceptions, examples, and verification guidance."
---

# Define project conventions

Produce an authoritative, usable set of contributor rules for the selected surface. Distinguish established requirements, observed patterns, and proposed changes before adopting a convention.

## Gather evidence

Read existing standards, applicable instructions, formatter/linter/type settings, build/test commands, and representative code. Trace meaningful exceptions and recent decisions. For a new project, use its accepted architecture and selected stack; do not copy a private house stack into an unrelated repository.

Inspect actual versions and current official guidance when a framework-specific choice is unresolved. Local requirements and supported behavior constrain the choice. Repetition alone does not turn an accidental pattern into a rule.

## Define useful rules

Use [the convention matrix](references/conventions.matrix.md) to select relevant topics. Load [web and typed-code guidance](references/web-conventions.checklist.md) for those stacks, or [data and integration guidance](references/data-contracts.checklist.md) when those boundaries matter. These are decision prompts; established project rules take precedence.

For each rule, explain the context, preferred pattern, a short local example, exceptions, and how it is checked. Resolve contradictions explicitly. Avoid arbitrary line limits, a layer per noun, or prescriptive naming changes without a maintenance benefit.

Distinguish rules already enforced by the formatter, linter, types, schemas, or tests from rules requiring human judgment. For recurring violations, identify the smallest suitable guard and its valid exceptions; declaring the rule is not proof of enforcement. Keep one authoritative rule source and link it from agent entry points.

Update existing standards instead of creating competing documents. Mark unresolved proposals and their decision owner. Changing a convention does not authorize mass reformatting, renaming, or migration; state an incremental adoption route when existing code differs.

## Completion

A contributor can apply the rules to representative code, find exceptions, and run the relevant checks. Verify examples and commands against the repository. Link the standards from appropriate entry points without repeating them there.

Next: `prepare-repo-for-agents` for discovery, `automate-code-checks` for accepted rules needing a runnable guard, or `create-tasks` for a separately agreed adoption change.
