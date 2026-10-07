---
name: document-project
description: "Create or refresh canonical project knowledge from verified code, history, and accepted decisions. Use when durable documentation of the system and its lessons is the requested result; contributor setup and explanations have separate owners."
---

# Document project

## Use this skill

Create or refresh durable system knowledge from code, recorded history and accepted decisions. Reuse authoritative locations and useful human-authored explanations; one corrected section can satisfy a small request. Use `explain-codebase` for a one-time explanation, `consolidate-docs` for overlapping records, and `define-project-conventions` for unsettled rules.

Establish the requested coverage and audience. A maintainer may need detailed contracts and source references; a new contributor may need an overview linking to them. Create a document only when useful content has no suitable home.

## Establish the source baseline

Read applicable instructions, README, documentation indexes, conventions, and existing records for the selected surface. Identify the repository revision and relevant uncommitted changes. Follow required navigation tools and inspect sources needed for the requested coverage.

For an existing project, trace representative entry points, callers, state ownership, contracts, and operating paths through current code, configuration, tests, and available runtime evidence. Inspect established folder and symbol conventions, including classes, variables, tables, and data modeling where relevant. Record their authoritative rules, examples, and exceptions rather than redesigning them.

Consult relevant commit diffs and recorded discussions for changes that shaped those paths. A commit proves a change; its author, message, or age does not establish an unrecorded motive. State missing history or runtime access and the resulting limits of reconstruction.

For a new project, start from accepted requirements and design. Keep intended structure distinct from implemented behavior and verified capabilities. Preserve an existing project's useful organization and contracts; documentation work does not authorize code migration or a replacement folder structure.

## Separate evidence from interpretation

For material claims, retain source references and the revision, date, or environment needed to interpret them. Distinguish current observations, recorded intent, accepted decisions, and unresolved inference. Check contradictions against evidence and retain consequential gaps.

Code can establish current behavior, including behavior that violates an accepted requirement. Repeated patterns remain observations until adopted as conventions. Recover recorded rationale when available and leave missing rationale unknown. Retain evidenced historical acceptance; consequential inferred or retrospective choices without established acceptance remain proposals for the responsible human. Do not invent an approver or backdate acceptance.

## Reconcile durable knowledge

Load [knowledge record guidance](references/knowledge-records.playbook.md) when selecting homes or writing records.

### Current facts and historical records

Update current architecture and project facts in place. Preserve historical decisions and incidents, linking corrections or superseding records without rewriting their original meaning. Resolve duplication at the authoritative source and repair relevant indexes and incoming pointers.

### Memory and agent instructions

Keep durable memory findable through the existing documentation index, adding a focused memory index when the records warrant it. Summaries point to authoritative decisions, conventions, and evidence. Separate temporary session state from lasting knowledge, and reconcile stale or conflicting memory before using it.

Keep AGENTS.md or equivalent instructions short: local agent rules, conditional reading, and supported checks. Detailed architecture, accepted decisions, standards, and lessons belong in their authoritative project locations. Create neither empty folder trees nor a document for every discovery.

### Lessons that affect future work

Record lessons that change future work. Distinguish recurring causes from repeated reports of one incident. Identify evidence-backed candidates for an accepted convention, reusable skill, or calibrated lint/type/test check. Recording knowledge does not itself authorize adopting a disputed rule, editing global skills, or introducing enforcement.

## Verify and report

Write direct explanations with stable terminology and no unsupported praise. For substantial prose revision, use `review-writing` when available; otherwise remove filler locally while retaining technical meaning, historical context and evidence limits. Reuse accepted writing checks instead of creating a duplicate document or review stage.

Check material claims against their sources, retained history against its records, and links against actual destinations. Run documented commands when their behavior is part of the requested result and safe execution is available; distinguish a command definition from a successful observed run.

Walk a representative future task from the documentation entry point to the owning code, applicable rule, relevant decision or lesson, and supported check. Inspect the final result against the requested coverage and audience. Keep confidential source material within the authorized audience.

Before acceptance, a separate agent in fresh context must challenge accuracy, historical meaning and discoverability using the accepted scope, candidate records, raw sources and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

The requested knowledge must be populated, evidence-linked, discoverable, and clear about current facts, history and unsettled choices. Use project conventions and requested depth to report changed locations, inspected coverage, verification, and exact gaps or failed checks. Include proof, independent findings and gaps in authorized PRs at creation; refresh affected evidence after edits without adding another summary document.

## Next steps

Pass the evidenced gap and relevant records to `define-project-conventions` for disputed rules, `track-project-decisions` for unresolved choices, `prepare-repo-for-agents` for instruction discovery, or `automate-code-checks` for an accepted prevention rule. Use `consolidate-docs` only for a broader requested cleanup. If a skill is unavailable, describe the plain action. Keep valid records and stop when the requested documentation is complete.
