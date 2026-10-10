---
name: find-improvements
description: "Find and prioritize useful improvements in a codebase, feature, or data layer, using current behavior, refactoring evidence, TODOs, checks, and available operational signals."
---

# Find improvements

## Use this skill

Discover and rank evidenced improvement candidates in a selected codebase or feature; refactoring is one focus. Reuse the existing backlog, accepted decisions and valid findings. Use `prioritize-work` to select from an already-evidenced supplied backlog under capacity, or `implement-change` for a selected executable improvement. Discovery does not authorize every repair.

## Select the scope and evidence

Establish the requested surface and concern: whole codebase, selected feature/flow, package boundary, or data layer; maintainability, reliability, contributor friction, or another stated outcome. For a repository sweep, map coverage and prioritize high-impact paths instead of implying every line was inspected. For a feature, follow its entry points, consumers, state, and checks. For a data layer, inspect schemas, migrations, queries, constraints, ownership, and callers; live data access requires its own authority.

Read local conventions, relevant history, existing backlog, and accepted decisions. Use safe scoped checks and available logs, metrics, traces, or issue records as evidence. Missing monitoring access is a stated gap, not permission to configure a vendor, export customer data, or claim a production diagnosis. For a new foundation, inspect its actual capabilities and selected requirements; do not invent legacy debt.

Treat TODO/FIXME comments, scanner warnings, slow-looking code, and clone matches as leads. Confirm current relevance, prior resolution, intent, and affected behavior before turning them into candidates. Keep a comment sweep bounded by the requested scope; do not mechanically convert every match into a task.

## Find the useful change

Look for repeated business rules that drift, changes scattered across owners, unused facilities with consumer evidence, weak checks around recurring failures, costly contributor steps, or demonstrated user/operational friction. Explain the actual maintenance or behavior cost. A long file, old dependency, unfamiliar style, or repeated syntax alone is insufficient.

For refactors, identify the behavior to preserve and the concrete simpler form. Check existing utilities and ownership before proposing another abstraction. Shared code should represent the same stable responsibility; keep intentional variants separate when merging them would add flags or couple unrelated changes. Check dynamic/configured consumers before calling code dead. For data refactors, account for deployed readers/writers and migration state.

For structural or convention analysis, compare feature placement, dependency direction, class/module responsibilities and filename mapping with accepted local rules and relevant stack constraints. Show a concrete navigation or change hazard; multiple classes in one file or a different folder layout alone is not a defect. Route consequential missing rules to `define-project-conventions`, or state the specific rule decision when that skill is unavailable, before planning adoption work.

Use existing static-check results before subjective convention assessment. For recurring issues or mechanically checkable rules, identify the smallest guard in the current toolchain and carry it to `automate-code-checks`, or describe the direct configuration change when unavailable. Repeated manual review should not substitute for practical automated enforcement.

Separate demonstrated defects from opportunities and untested hypotheses. A suspected bottleneck becomes a profiling investigation until measured. Group candidates by root cause, search existing work items, and link related or duplicate items instead of creating competing tickets.

## Rank evidenced candidates

Use [the candidate outline](references/candidates.template.md) when a durable list helps. For each useful item, include evidence and location, affected users/callers, the proposed treatment, expected benefit, preservation risk, and a check that would demonstrate success. Label uncertainty; do not invent savings, dates, or effort scores.

Rank against the user's goal using demonstrated impact, confidence, dependencies, cost, and blast radius. State what was inspected and what remains unexamined. Prefer a few actionable candidates over an exhaustive smell list. Existing valid decisions and intentional repetition can lead to no change.

## Verify and report

Check each retained candidate against current source, existing work and accepted constraints. Confirm that the evidence supports its classification, proposed treatment and proof needed; keep hypotheses and uninspected surfaces explicit. Follow the project's format and requested depth, using its backlog or existing review instead of a competing summary.

Before acceptance, a separate agent in fresh context must challenge the candidates using the user's goal, selected scope, candidate list, raw source/operational evidence and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

Include useful evidence, independent findings and limitations in authorized PRs at creation; refresh affected proof after edits. Tracker writes and repairs require their actual authorization.

## Next steps

Carry the selected finding, evidence and missing prerequisite to its owner:

- `diagnose-issue` for an unresolved failure; `improve-performance` for a bottleneck needing measurement.
- `automate-code-checks` for an accepted recurring guard; `plan-migration` for compatibility/data transitions.
- `write-spec` for unsettled behavior; `create-tasks` for accepted larger scope; `implement-change` for a bounded ready change.
- `prioritize-work` when selection among these and other supplied candidates needs a capacity decision.

Use the plain action if its skill is unavailable. Reuse accepted findings; a discovery request can finish with the list.
