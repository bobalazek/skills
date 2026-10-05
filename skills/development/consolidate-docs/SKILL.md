---
name: consolidate-docs
description: "Consolidate overlapping or stale project documentation into clear authoritative locations while preserving useful facts, decisions, conventions, human voice, and working links."
---

# Consolidate docs

Reduce documentation friction in a bounded set of files. Finish with fewer competing sources and a clear route to the information readers need.

Inventory the requested docs and their readers, purpose, authority, freshness, callers/links, and actual content. Verify material behavior/setup claims against current code or commands. Mark unsupported claims rather than preserving them as established facts.

Establish the intended output and audience: short task result, reviewer-facing PR, onboarding guide, exact technical explanation, or reference. Follow explicit tone/depth preferences and existing writing conventions; concise does not mean deleting necessary evidence, exceptions or rationale. Load [consolidation checks](references/consolidation.checklist.md) for a broad cleanup or when memory and historical records overlap.

Assign each kind of information a home: purpose/setup, contributor rules, current architecture, specifications, decisions/ADRs, learnings, incidents, and work status. These roles can share a file when useful; their different lifecycles should remain clear. Preserve useful existing structure and human-authored voice.

Choose retained locations before moving content. Merge unique useful material, resolve contradictions with evidence, and remove duplication. Preserve historical decisions as historical rather than rewriting them to match the present. Do not invent missing motives from commits or promote observed patterns into mandatory standards.

Update incoming links, indexes, and instruction pointers. Check external consumers or stable published URLs before deleting a location; provide a migration/redirect route when it is actually needed. Avoid keeping permanent duplicate content solely to avoid making an ownership decision.

Verify links, preserved information, and the reader's main lookup path. Run relevant documentation audits and direct checks for changed setup instructions. Report consolidation decisions, unresolved factual conflicts, and checks.

This workflow does not require a new consolidation report or a Markdown file per handoff. Update the existing front door and finish with the useful result. Next: `prepare-repo-for-agents` only when contributor navigation still needs work.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.
