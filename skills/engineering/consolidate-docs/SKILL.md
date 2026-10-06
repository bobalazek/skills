---
name: consolidate-docs
description: "Consolidate overlapping or stale project documentation into clear authoritative locations while preserving useful facts, decisions, conventions, human voice, and working links."
---

# Consolidate docs

## Use this skill

Reconcile overlapping or stale documentation in a bounded set of files. Reuse authoritative facts, records and useful human-authored explanations. Use `document-project` when missing system knowledge needs to be researched and written; consolidation owns the existing material's homes and reading paths.

## Inspect the selected material

Inventory the requested docs and their readers, purpose, authority, freshness, callers/links, and actual content. Verify material behavior/setup claims against current code or commands. Mark unsupported claims rather than preserving them as established facts.

Establish the intended output and audience: short task result, reviewer-facing PR, onboarding guide, exact technical explanation, or reference. Follow explicit tone/depth preferences and existing writing conventions; concise does not mean deleting necessary evidence, exceptions or rationale. Load [consolidation checks](references/consolidation.checklist.md) for a broad cleanup or when memory and historical records overlap.

## Choose authoritative homes

Assign each kind of information a home: purpose/setup, contributor rules, current architecture, specifications, decisions/ADRs, learnings, incidents, and work status. These roles can share a file when useful; their different lifecycles should remain clear. Preserve useful existing structure and human-authored voice.

Choose retained locations before moving content. Merge unique useful material, resolve contradictions with evidence, and remove duplication. Preserve historical decisions as historical rather than rewriting them to match the present. Do not invent missing motives from commits or promote observed patterns into mandatory standards.

## Move content and repair pointers

Update incoming links, indexes, and instruction pointers. Check external consumers or stable published URLs before deleting a location; provide a migration/redirect route when it is actually needed. Avoid keeping permanent duplicate content solely to avoid making an ownership decision.

## Verify and report

Verify links, preserved information, and the reader's main lookup path. Run relevant documentation audits and direct checks for changed setup instructions. Report changed authoritative locations, unresolved factual conflicts and actual checks. Include accessible evidence, independent findings and gaps in authorized PRs at creation; refresh affected proof after edits. Update the existing front door rather than create a consolidation report or handoff file.

Before acceptance, a separate agent in fresh context must challenge preservation and navigation using the accepted scope, original and candidate artifacts, raw sources, and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

## Next steps

Use `document-project` only for an evidenced knowledge gap, or `prepare-repo-for-agents` when contributor discovery still needs work. Carry the retained locations, unresolved facts and checks; use the plain action if the skill is unavailable. Do not restart consolidation or expand to neighboring records without scope.
