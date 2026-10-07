---
name: explain-pr
description: "Explain a selected PR or diff through intended purpose, before/after behavior, affected paths, and verification evidence. Use for communication, not correctness review or invented author rationale."
---

# Explain PR

## Use this skill

Explain a selected PR/diff or write its reviewer-facing description from the fixed comparison, accepted purpose and existing evidence. Reuse valid checks and reviews. Use `review-code` for correctness assessment and `verify-change` for missing behavior proof; this skill owns the explanation.

## Establish the comparison

Identify the PR/diff, base and head revision, supplied description, linked requirements, and relevant accepted decisions. Inspect the actual comparison and affected callers. PR text can state intent; it does not prove implementation behavior. A commit can prove a change without establishing its motivation.

## Describe the result

Group changes by behavior and responsibility rather than listing every file. Show a concrete before/after example where useful. Explain data/contract changes, compatibility or migration concerns, and which supported surfaces are affected. Keep internal implementation detail only where it helps a reviewer understand the consequence.

Give a short before/after control-flow explanation when the mechanism matters: where the user or system enters, the changed condition or decision, calls and state changes, then the visible result or failure. Use an arrow sequence or small diagram only when clearer than prose. For a tiny change, an exact relevant diff excerpt can show it directly; do not paste a large patch or let the snippet replace the consequence. Identify shared callers beyond the edited file when they inherit the behavior.

Follow the requested audience, tone and depth, then the project's PR template and writing conventions. Default to a short problem/result explanation plus relevant verification; expand for a requested walkthrough or a consequential mechanism a reviewer needs to assess. Include why only when established by requirements or recorded decisions. Link detailed design/ADRs rather than copying them. Explain unfamiliar terms, keep exact identifiers where they aid inspection, and omit conversational history and unsupported praise.

### Evidence

When the explanation needs substantive prose cleanup, use `review-writing` if available, carrying the fixed diff, draft and evidence. Otherwise cut filler and repetition locally. Preserve risk, reversibility and verification gaps; editorial polish cannot upgrade a result or replace correctness review.

Include the checks that actually ran and what they establish, tied to the tested revision. For visible changes, include labeled screenshots of relevant states where available; for performance or data claims, show measured before/after values with units and comparable conditions. For other changes, concise observed results or a verified CI/artifact link may be sufficient. Label missing baseline, stale evidence, failed checks, and uninspected behavior. Distinguish author-stated rationale, demonstrated behavior, and unanswered questions. Do not manufacture a benefit, metric, or rejected alternative.

When asked to write a PR description, lead with the problem and resulting behavior, then relevant verification and limitations. Embed or link useful evidence in the PR body using verified locations accessible to its intended reviewers. Redact sensitive content before an authorized upload; a local path is not an attachment. If uploading is unavailable, include useful textual results/reproduction steps and state which artifact remains local. Preserve the project's template and unrelated author content. Posting or updating the description follows the user's actual authorization.

### Risk and reversibility

Include risk and reversibility at the depth the change needs: the credible worst failure, affected users/data/consumers, how it would be detected, and the recovery action with its conditions and evidence. Distinguish reverting code from undoing accepted writes or external effects. State whether recovery is demonstrated, conditional, irreversible for some effects, or unverified; name the point after which the old behavior or data cannot be restored. A short sentence can cover a stateless presentation change, while a destructive migration needs its data-loss limits, recovery owner and observed rehearsal or explicit proof gap. Do not infer low risk from a small diff or reversibility from the file type, a feature flag, a down migration, or the presence of a backup.

State the blast radius in concrete terms: affected roles or tenants, entry points, shared components/services and data or external recipients as relevant. Explain what contains the impact and what evidence supports that boundary; unknown reach stays unknown. When concurrency is material, summarize the effective transaction isolation or consistency guarantee and its failure/locking/retry implications from the reviewed evidence. Keep that separate from tenant isolation and reviewer independence. A claim that a flag, transaction or deployment isolates effects needs proof of the actual scope.

### Description shape

When no project template applies, use the fields below, collapsing them into a short paragraph for a small change. Fill them from evidence; omit inapplicable detail rather than inventing it.

```markdown
## Change
[Problem, established purpose and resulting behavior; affected user/system entry point and short before/after flow or tiny diff when useful.]

## Evidence
[Tested revision, observed checks/results and accessible artifacts; independent findings and exact gaps.]

## Risk and recovery
[Credible failure, blast radius and containment/isolation assumptions, detection and recovery conditions; demonstrated or unverified limits.]
```

## Verify and return

Check that the explanation matches the fixed comparison, established intent and verification evidence; it does not imply correctness approval. Return the requested explanation or confirm the authorized description update, with actual publication state and evidence gaps. Include relevant proof and independent findings when opening an authorized PR. Preserve valid completed reviews and refresh evidence affected by changes.

Before accepting the explanation, a separate agent in fresh context must challenge its claims using the accepted request, candidate text, raw diff/requirements/evidence and check access. Omit the author's conversation and preferred conclusions. Prefer a different available model where practical and authorized; an explicit cross-model requirement left unmet blocks acceptance. Retain the returned assessment with reviewer/session identity, host-reported model (or unknown), evaluated artifact and base/head revisions, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

## Next steps

Carry the fixed comparison, criteria and evidence to `review-code` only for an outstanding correctness assessment, `verify-change` for missing proof, or `challenge-proposal` for unresolved consequential intent. Use the plain action if its skill is unavailable. Finish when the explanation is the whole request; do not merge, push, or publish merely because it is ready.
