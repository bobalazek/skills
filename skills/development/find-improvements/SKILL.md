---
name: find-improvements
description: "Find and prioritize useful improvements in a codebase, feature, or data layer, using current behavior, refactoring evidence, TODOs, checks, and available operational signals."
---

# Find improvements

Produce a bounded, deduplicated set of improvement candidates tied to the user's goal. Refactoring is one focus of this skill. A candidate is a decision or investigation input; discovery does not authorize implementing every item.

## Select the scope and evidence

Establish the requested surface and concern: whole codebase, selected feature/flow, package boundary, or data layer; maintainability, reliability, contributor friction, or another stated outcome. For a repository sweep, map coverage and prioritize high-impact paths instead of implying every line was inspected. For a feature, follow its entry points, consumers, state, and checks. For a data layer, inspect schemas, migrations, queries, constraints, ownership, and callers; live data access requires its own authority.

Read local conventions, relevant history, existing backlog, and accepted decisions. Use safe scoped checks and available logs, metrics, traces, or issue records as evidence. Missing monitoring access is a stated gap, not permission to configure a vendor, export customer data, or claim a production diagnosis. For a new foundation, inspect its actual capabilities and selected requirements; do not invent legacy debt.

Treat TODO/FIXME comments, scanner warnings, slow-looking code, and clone matches as leads. Confirm current relevance, prior resolution, intent, and affected behavior before turning them into candidates. Keep a comment sweep bounded by the requested scope; do not mechanically convert every match into a task.

## Find the useful change

Look for repeated business rules that drift, changes scattered across owners, unused facilities with consumer evidence, weak checks around recurring failures, costly contributor steps, or demonstrated user/operational friction. Explain the actual maintenance or behavior cost. A long file, old dependency, unfamiliar style, or repeated syntax alone is insufficient.

For refactors, identify the behavior to preserve and the concrete simpler form. Check existing utilities and ownership before proposing another abstraction. Shared code should represent the same stable responsibility; keep intentional variants separate when merging them would add flags or couple unrelated changes. Check dynamic/configured consumers before calling code dead. For data refactors, account for deployed readers/writers and migration state.

Separate demonstrated defects from opportunities and untested hypotheses. A suspected bottleneck becomes a profiling investigation until measured. Group candidates by root cause, search existing work items, and link related or duplicate items instead of creating competing tickets.

## Prioritize and hand off

Use [the candidate outline](references/candidates.template.md) when a durable list helps. For each useful item, include evidence and location, affected users/callers, the proposed treatment, expected benefit, preservation risk, and a check that would demonstrate success. Label uncertainty; do not invent savings, dates, or effort scores.

Rank against the user's goal using demonstrated impact, confidence, dependencies, cost, and blast radius. State what was inspected and what remains unexamined. Prefer a few actionable candidates over an exhaustive smell list. Existing valid decisions and intentional repetition can lead to no change.

Finish with the next justified action: `diagnose-issue` for an unresolved failure, `improve-performance` for a measurable bottleneck investigation, `automate-code-checks` for an accepted repeatable guard, `plan-migration` for a transition with compatibility/data constraints, or `implement-change` for a selected bounded refactor. Use `write-spec` when desired behavior needs agreement and `create-tasks` for an accepted larger scope. Tracker writes and repairs follow actual authorization.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.
