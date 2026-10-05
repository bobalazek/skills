---
name: explain-pr
description: "Explain a selected PR or diff through intended purpose, before/after behavior, affected paths, and verification evidence. Use for communication, not correctness review or invented author rationale."
---

# Explain PR

Produce a reviewer-appropriate explanation of what the selected change does and why its established purpose matters.

## Establish the comparison

Identify the PR/diff, base and head revision, supplied description, linked requirements, and relevant accepted decisions. Inspect the actual comparison and affected callers. PR text can state intent; it does not prove implementation behavior. A commit can prove a change without establishing its motivation.

## Describe the result

Group changes by behavior and responsibility rather than listing every file. Show a concrete before/after example where useful. Explain data/contract changes, compatibility or migration concerns, and which supported surfaces are affected. Keep internal implementation detail only where it helps a reviewer understand the consequence.

Include the checks that actually ran and what they establish. Label missing evidence. Distinguish author-stated rationale, behavior demonstrated by the diff/runtime, and unanswered questions. Do not manufacture a benefit, metric, or rejected alternative.

When asked to write a PR description, lead with the problem and resulting behavior, then relevant verification and limitations. Preserve the project's template and scope. Posting or updating the description is an external write and follows the user's actual authorization.

## Completion

The explanation matches the fixed comparison, established intent, and verification evidence; it does not imply a correctness approval. Review uses `review-code`; unresolved consequential intent can use `question-plan`.

Next: review the explained revision or perform the requested PR update. Do not merge, push, or publish merely because an explanation is ready.
