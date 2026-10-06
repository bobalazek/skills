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

Follow the requested audience, tone and depth, then the project's PR template and writing conventions. Default to a short problem/result explanation plus relevant verification; expand for a requested walkthrough or a consequential mechanism a reviewer needs to assess. Include why only when established by requirements or recorded decisions. Link detailed design/ADRs rather than copying them. Explain unfamiliar terms, keep exact identifiers where they aid inspection, and omit conversational history and unsupported praise.

Include the checks that actually ran and what they establish, tied to the tested revision. For visible changes, include labeled screenshots of relevant states where available; for performance or data claims, show measured before/after values with units and comparable conditions. For other changes, concise observed results or a verified CI/artifact link may be sufficient. Label missing baseline, stale evidence, failed checks, and uninspected behavior. Distinguish author-stated rationale, demonstrated behavior, and unanswered questions. Do not manufacture a benefit, metric, or rejected alternative.

When asked to write a PR description, lead with the problem and resulting behavior, then relevant verification and limitations. Embed or link useful evidence in the PR body using verified locations accessible to its intended reviewers. Redact sensitive content before an authorized upload; a local path is not an attachment. If uploading is unavailable, include useful textual results/reproduction steps and state which artifact remains local. Preserve the project's template and unrelated author content. Posting or updating the description follows the user's actual authorization.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Completion

The explanation matches the fixed comparison, established intent, and verification evidence; it does not imply a correctness approval. Review uses `review-code`; unresolved consequential intent can use `challenge-proposal`.

Next: review the explained revision or perform the requested PR update. Do not merge, push, or publish merely because an explanation is ready.
