---
name: define-project-conventions
description: "Establish or reconcile project coding and contributor conventions from local evidence and selected stack practices, producing clear rules, exceptions, examples, and verification guidance."
---

# Define project conventions

Produce an authoritative, usable set of contributor rules for the selected surface. Distinguish established requirements, observed patterns, and proposed changes before adopting a convention.

## Gather evidence

Inventory existing standards, root and nested instructions, documentation and memory indexes, accepted decisions, formatter/linter/type settings, build/test commands, and representative code before creating a document. Check what each source owns, whether its pointers are current, and where rules conflict. Trace meaningful exceptions and recent decisions. For a new project, use its accepted architecture and selected stack; do not copy a private house stack into an unrelated repository.

Inspect actual versions and current official guidance when a framework-specific choice is unresolved. Local requirements and supported behavior constrain the choice. Repetition alone does not turn an accidental pattern into a rule.

## Define useful rules

Use [the convention matrix](references/conventions.matrix.md) for authority, folder/file/package structure, language-specific naming, and the relevant rule topics. Load only references needed by the selected surface:

| Condition | Reference |
| --- | --- |
| Typed code, component frameworks, or rendered websites | [Web and typed-code conventions](references/web-conventions.checklist.md) |
| Domain models, stored schemas, invariants, migrations, or integration lifecycle | [Data model and schema conventions](references/data-contracts.checklist.md) |
| HTTP endpoints, REST CRUD, API consumers, or request/response policy | [HTTP and API conventions](references/http-api.checklist.md) |
| Repeated query patterns, index policy, measured database performance, or storage growth | [Query and storage conventions](references/query-storage.checklist.md) |

These are decision prompts. Preserve accepted project choices within supported protocol and platform behavior; expose conflicts and security defects instead of promoting them to conventions. In an existing system, trace one representative request or job through authorization, domain behavior, queries, and serialization, then inspect sibling callers and exceptions. For a new feature, state which rules apply at each boundary and where a proposed exception needs a decision.

For each rule, record its scope and accepted/observed/proposed status, source, preferred pattern, a short local example, exceptions, and how it is checked. Resolve contradictions explicitly rather than silently promoting frequent code or stale memory to policy. Avoid arbitrary line limits, a layer per noun, or prescriptive naming changes without a maintenance benefit.

Distinguish rules already enforced by the formatter, linter, types, schemas, or tests from rules requiring human judgment. For recurring violations, identify the smallest suitable guard and its valid exceptions; declaring the rule is not proof of enforcement. Keep one authoritative rule source and link it from agent entry points.

Update existing standards instead of creating competing documents. Mark unresolved proposals and their decision owner. Changing a convention does not authorize mass reformatting, renaming, or migration; state an incremental adoption route when existing code differs.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Completion

A contributor can place and name a representative addition, apply the relevant data or API rules, find exceptions, and run the relevant checks. Verify examples and commands against the repository. Link the standards from appropriate entry points and indexes without repeating them there; leave a short conditional reading path in agent instructions.

Next: `prepare-repo-for-agents` for discovery, `document-project` for missing factual project knowledge, `automate-code-checks` for accepted rules needing a runnable guard, or `create-tasks` for a separately agreed adoption change.
