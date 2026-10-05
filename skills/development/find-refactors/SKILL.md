---
name: find-refactors
description: "Find and prioritize evidence-backed refactoring opportunities in a selected code surface, with concrete simpler designs, affected callers, preservation risks, and verification seams."
---

# Find refactors

Return a few useful refactor candidates tied to the user's maintenance problem. The result is a choice of improvements, not an unsolicited rewrite.

Inspect the selected code, conventions, callers, tests, and relevant history. Find actual friction: duplicated rules, changes scattered across unrelated files, interfaces that expose internal mechanics, dead code with evidence of no consumers, or tests coupled to implementation details.

Apply the deletion test: if a wrapper or abstraction disappeared, would callers become simpler or inherit necessary complexity? Prefer boundaries that hide real behavior behind a small understandable contract. A file length or unfamiliar style alone is not a refactoring reason.

For each candidate, show the current friction with locations, the proposed simpler shape, affected callers/data/contracts, expected maintenance benefit, regression risk, and the observable check. Distinguish behavior-preserving cleanup from a product or architectural behavior change.

Rank by benefit to the stated goal, confidence, cost, and blast radius. Avoid invented estimates and broad “modernization” claims. A finding without a concrete simpler form or verification route is an investigation, not a ready recommendation.

Finish with the best next candidate and its scope. Use `write-spec` if intended behavior must change, `create-tasks` for a larger accepted refactor, or `implement-change` for a bounded approved one. Do not edit while only discovery is requested.
