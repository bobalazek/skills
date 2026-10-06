---
name: define-project-conventions
description: "Establish or reconcile project coding and contributor conventions from local evidence and selected stack practices, producing clear rules, exceptions, examples, and verification guidance."
---

# Define project conventions

## Use this skill

Establish or reconcile contributor rules for a selected surface using local standards, maintained examples and accepted decisions. Reuse authoritative rules instead of drafting a second handbook. Use `document-project` to record factual system knowledge and `automate-code-checks` when an already-accepted rule needs enforcement.

## Gather evidence

Inventory existing standards, root and nested instructions, documentation and memory indexes, accepted decisions, formatter/linter/type settings, build/test commands, and representative code before creating a document. Check what each source owns, whether its pointers are current, and where rules conflict. Trace meaningful exceptions and recent decisions. For a new project, use its accepted architecture and selected stack; do not copy a private house stack into an unrelated repository.

Inspect actual versions and current official guidance when a framework-specific choice is unresolved. Local requirements and supported behavior constrain the choice. Repetition alone does not turn an accidental pattern into a rule.

## Load the relevant guidance

Use [the convention matrix](references/conventions.matrix.md) for authority, folder/file/package structure, language-specific naming, and the relevant rule topics. Load only references needed by the selected surface:

| Condition | Reference |
| --- | --- |
| Typed code, component frameworks, or rendered websites | [Web and typed-code conventions](references/web-conventions.checklist.md) |
| Domain models, stored schemas, invariants, migrations, or integration lifecycle | [Data model and schema conventions](references/data-contracts.checklist.md) |
| HTTP endpoints, REST CRUD, API consumers, or request/response policy | [HTTP and API conventions](references/http-api.checklist.md) |
| Repeated query patterns, index policy, measured database performance, or storage growth | [Query and storage conventions](references/query-storage.checklist.md) |

These are decision prompts. Preserve accepted project choices within supported protocol and platform behavior; expose conflicts and security defects instead of promoting them to conventions. In an existing system, trace one representative request or job through authorization, domain behavior, queries, and serialization, then inspect sibling callers and exceptions. For a new feature, state which rules apply at each boundary and where a proposed exception needs a decision.

## Define rules and adoption

For each useful rule, record:

- Scope, source, and accepted/observed/proposed status.
- Preferred pattern, short local example, and valid exceptions.
- Actual enforcement or human check, plus the adoption approach.

Resolve contradictions explicitly; frequent code and stale memory do not establish policy. Avoid arbitrary line limits, a layer per noun, or naming changes without a maintenance benefit.

Distinguish rules already enforced by the formatter, linter, types, schemas, or tests from rules requiring human judgment. For recurring violations, identify the smallest suitable guard and its valid exceptions; declaring the rule is not proof of enforcement. Keep one authoritative rule source and link it from agent entry points.

Update existing standards instead of creating competing documents. Mark unresolved proposals and their decision owner. Changing a convention does not authorize mass reformatting, renaming, or migration; state an incremental adoption route when existing code differs.

## Verify and report

A contributor can place and name a representative addition, apply the relevant data or API rules, find exceptions, and run the relevant checks. Verify examples and commands against the repository. Link the standards from appropriate entry points and indexes without repeating them there; leave a short conditional reading path in agent instructions.

Before acceptance, a separate agent in fresh context must challenge the rules using the accepted scope, candidate standards, representative code/configuration and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

Use the project's format and requested depth. Report changed authoritative rules, decisions still proposed, checked examples, enforcement limits and adoption scope. Put proof, independent findings and gaps in authorized PRs at creation; refresh affected evidence after edits rather than add another policy summary.

## Next steps

Carry accepted rules and remaining prerequisites to `prepare-repo-for-agents` for missing discovery, `document-project` for factual knowledge gaps, `automate-code-checks` for a runnable guard, or `create-tasks` for a separately agreed adoption change. Use the plain action if its skill is unavailable; a convention decision does not authorize mass changes.
