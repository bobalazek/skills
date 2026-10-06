---
name: document-project
description: "Create or refresh canonical project knowledge from verified code, history, and accepted decisions. Use when durable documentation of the system and its lessons is the requested result; contributor setup and explanations have separate owners."
---

# Document project

Leave future contributors an accurate account of how the selected system works, what shaped it, and which lessons still matter. Populate existing authoritative locations; create a document only when useful content has no suitable home.

Establish the requested coverage and audience. A maintainer may need detailed contracts and source references; a new contributor may need a concise overview linking to them. A small update can be one corrected section. Preserve useful structure and human-authored explanations without creating parallel summaries that must be maintained separately.

## Establish the source baseline

Read applicable instructions, README, documentation indexes, conventions, and existing records for the selected surface. Identify the repository revision and relevant uncommitted changes. Follow required navigation tools and inspect sources needed for the requested coverage.

For an existing project, trace representative entry points, callers, state ownership, contracts, and operating paths through current code, configuration, tests, and available runtime evidence. Inspect established folder and symbol conventions, including classes, variables, tables, and data modeling where relevant. Record their authoritative rules, examples, and exceptions rather than redesigning them.

Consult relevant commit diffs and recorded discussions for changes that shaped those paths. A commit proves a change; its author, message, or age does not establish an unrecorded motive. State missing history or runtime access and the resulting limits of reconstruction.

For a new project, start from accepted requirements and design. Keep intended structure distinct from implemented behavior and verified capabilities. Preserve an existing project's useful organization and contracts; documentation work does not authorize code migration or a replacement folder structure.

## Separate evidence from interpretation

For material claims, retain source references and the revision, date, or environment needed to interpret them. Distinguish current observations, recorded intent, accepted decisions, and unresolved inference. Check contradictions against evidence and retain consequential gaps.

Code can establish current behavior, including behavior that violates an accepted requirement. Repeated patterns remain observations until adopted as conventions. Recover recorded rationale when available and leave missing rationale unknown. Retain evidenced historical acceptance; consequential inferred or retrospective choices without established acceptance remain proposals for the responsible human. Do not invent an approver or backdate acceptance.

## Reconcile durable knowledge

Use [knowledge record guidance](references/knowledge-records.playbook.md) when selecting homes or writing records. Update current architecture and project facts in place. Preserve historical decisions and incidents, linking corrections or superseding records without rewriting their original meaning. Resolve duplication at the authoritative source and repair relevant indexes and incoming pointers.

Keep durable memory findable through the existing documentation index, adding a focused memory index when the records warrant it. Summaries point to authoritative decisions, conventions, and evidence. Separate temporary session state from lasting knowledge, and reconcile stale or conflicting memory before using it.

Keep AGENTS.md or equivalent instructions short: local agent rules, conditional reading, and supported checks. Detailed architecture, accepted decisions, standards, and lessons belong in their authoritative project locations. Create neither empty folder trees nor a document for every discovery.

Record lessons that change future work. Distinguish recurring causes from repeated reports of one incident. Identify evidence-backed candidates for an accepted convention, reusable skill, or calibrated lint/type/test check. Recording knowledge does not itself authorize adopting a disputed rule, editing global skills, or introducing enforcement.

## Verify usefulness

Check material claims against their sources, retained history against its records, and links against actual destinations. Run documented commands when their behavior is part of the requested result and safe execution is available; distinguish a command definition from a successful observed run.

Walk a representative future task from the documentation entry point to the owning code, applicable rule, relevant decision or lesson, and supported check. Inspect the final result against the requested coverage and audience. Keep confidential source material within the authorized audience.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author's conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Completion

The requested knowledge is populated, evidence-linked, discoverable, and clear about current facts, history, and unsettled choices. Report changed authoritative locations, inspected coverage, verification, and exact gaps or failed checks.

Next: establish disputed rules with `define-project-conventions`, resolve choices with `track-project-decisions`, improve instruction discovery with `prepare-repo-for-agents`, or build accepted prevention with `automate-code-checks`. Use `consolidate-docs` for a broader documentation cleanup. If those skills are unavailable, describe the corresponding next action; this package needs no sibling to produce its documentation result.
