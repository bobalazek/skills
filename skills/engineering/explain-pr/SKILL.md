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

For a broad or coupled diff, explain whether it is one coherent reviewable outcome and identify sensible splits by responsibility, prerequisites and risk. For substantial cross-layer work without accepted local rules, default to compatible database/schema changes, shared contracts/types, backend behavior and frontend/client adoption, with later cleanup where needed. Skip absent layers and keep a small vertical fix or inseparable stages together; explain the dependency and compatibility reason. Name each proposed increment's checks, old/new compatibility, merge/deploy order and remaining integration criteria; distinguish independently reviewable from independently deployable. Keep coupled work together when splitting would leave broken states, and do not impose a line-count limit or restructure code from explanation authority.

Give a short before/after control-flow explanation when the mechanism matters: where the user or system enters, the changed condition or decision, calls and state changes, then the visible result or failure. Choose the smallest useful view: bullets, pseudocode/diff, a contract or type sketch, a shallow responsibility tree, or a call/component diagram. Include file names only when they clarify ownership or review order, rather than inventorying the patch. For a tiny change, an exact relevant diff excerpt can show it directly; do not paste a large patch or let the snippet replace the consequence. Identify shared callers beyond the edited file when they inherit the behavior.

Follow the requested audience, tone and depth, then the project's PR template and writing conventions. Use a specific title describing the actual change, not an internal agent process. Keep the description concise while covering the required concerns in the applicable template; expand for a consequential mechanism or requested walkthrough. Include why only when established by requirements or recorded decisions. Link detailed design/ADRs rather than copying them. Explain unfamiliar terms, keep exact identifiers where they aid inspection, and omit conversational history and unsupported praise.

### Evidence

When the explanation needs substantive prose cleanup, use `review-writing` if available, carrying the fixed diff, draft and evidence. Otherwise cut filler and repetition locally. Preserve risk, reversibility and verification gaps; editorial polish cannot upgrade a result or replace correctness review.

Include the checks that actually ran and what they establish, for the actual candidate. For visible changes, include labeled screenshots of relevant states where available; for performance or data claims, show measured before/after values with units and comparable conditions. For other changes, concise observed results or a verified CI/artifact link may be sufficient. Label missing baseline, stale evidence, failed checks, and uninspected behavior. Distinguish author-stated rationale, demonstrated behavior, and unanswered questions. Do not manufacture a benefit, metric, or rejected alternative.

When asked to write a PR description, lead with the problem and resulting behavior, then relevant verification and limitations. Embed or link useful evidence in the PR body using verified locations accessible to its intended reviewers. Redact sensitive content before an authorized upload; a local path is not an attachment. If a useful upload is unavailable, summarize the observed result or reproduction steps; mention only a material verification gap, not the existence or location of local files. Preserve the project's template and unrelated author content. Posting or updating the description follows the user's actual authorization.

Keep internal traceability separate from the description. Preserve the assessment and source identity in the working record; omit local paths, document hashes, agent/session identifiers, model details and review ceremony from human-facing text unless the user explicitly asks for them. Summarize actionable findings, their resolution and material untested behavior. A relevant commit, CI link or public comparison can identify the changed code without reproducing internal bookkeeping.

### Risk and reversibility

Include risk and reversibility at the depth the change needs: the credible worst failure, affected users/data/consumers, how it would be detected, and the recovery action with its conditions and evidence. Distinguish reverting code from undoing accepted writes or external effects. State whether recovery is demonstrated, conditional, irreversible for some effects, or unverified; name the point after which the old behavior or data cannot be restored. A short sentence can cover a stateless presentation change, while a destructive migration needs its data-loss limits, recovery owner and observed rehearsal or explicit proof gap. Do not infer low risk from a small diff or reversibility from the file type, a feature flag, a down migration, or the presence of a backup.

For a change that can materially affect resource use, include expected CPU/memory, latency, database/connection/IO, queue backlog or cost impact. Label measurements, estimates and unknowns, with a useful threshold or missing decision rather than invented capacity guarantees. For metered third-party/AI calls, serverless execution, cloud builds/runtime or storage/logging/egress, state the expected usage and cost basis, relevant rate/concurrency/retry/spending controls and runaway-cost failure path. An alert or client timeout alone does not establish an enforced spending cap.

State the blast radius in concrete terms: affected roles or tenants, entry points, shared components/services and data or external recipients as relevant. Explain what contains the impact and what evidence supports that boundary; unknown reach stays unknown. When concurrency is material, summarize the effective transaction isolation or consistency guarantee and its failure/locking/retry implications from the reviewed evidence. Keep that separate from tenant isolation and reviewer independence. A claim that a flag, transaction or deployment isolates effects needs proof of the actual scope.

### Merge prerequisites and rollout

State the checks, approvals, prerequisite PRs/contracts and environment or data conditions that must be satisfied before merge. Distinguish passed, pending, blocked and not applicable; do not treat a planned check as completed or an agent review as human approval. For a stack, show the accepted merge order and any separate deployment order.

Describe how the change reaches its consumers: migration/backfill, shared contract, backend and client ordering where applicable; exposure controls only when actually used; post-rollout observations and the condition for stopping or recovering. A merged PR is not a deployed or verified rollout. Identify unperformed rollout or recovery checks and their consequence. For delayed or scheduled effects, state the activation trigger/time, observation owner, signal/baseline, window and next checkpoint. Confidence remains limited until the relevant run or event has actually been observed; use `ship-change` for the delivery procedure and `configure-monitoring` for missing signal/alert setup when available. A small documentation change can explain applicability in one sentence instead of omitting these concerns.

### Description shape

Follow the project's PR template. Otherwise cover the following, keeping each part concise and grounded in the actual change. Brevity must not remove verification, merge prerequisites, rollout or recovery. For a small change, a one-line applicability reason is enough where a concern does not apply.

When no project template is available, read and use the [default PR template](references/pr-description.template.md). It owns the required sections and their prompts; do not substitute a shorter outline that drops substantive concerns. For a concrete scenario, read the relevant [worked PR examples](references/pr-examples.playbook.md): docs, UI, database migration, overnight work, new AI/API integrations or dated activation. They illustrate the template rather than define a second policy.

Keep the independent assessment and source traceability available in the working record. The PR should expose the substantive findings, confidence limits and useful proof, without copying private logs, machine-specific paths or unrelated review metadata. Keep related code, tests and documentation together; splitting a coherent change solely to satisfy an outline makes review harder.

## Verify and return

Check that the explanation matches the fixed comparison, established intent and verification evidence; it does not imply correctness approval. Return the requested explanation or confirm the authorized description update, with actual publication state and evidence gaps. Include relevant proof and independent findings when opening an authorized PR. Preserve valid completed reviews and refresh evidence affected by changes.

For a low-impact advisory answer or wording-only draft, verify the relevant sources and constraints directly; no delegation or separate review record is needed. Use the independent assessment below when the user or project requires it, when accepting a consequential decision, or when publishing or updating a durable shared artifact. This exception does not waive code, security, release or deployment gates. A larger word count alone does not require a deeper workflow. Never claim independent review without an actual returned assessment.

When required, a separate agent in fresh context must challenge its claims using the accepted request, candidate text, raw diff/requirements/evidence and check access. Omit the author's conversation and preferred conclusions. Prefer a different available model where practical and authorized; an explicit cross-model requirement left unmet blocks acceptance. Retain the returned assessment with reviewer/session identity, host-reported model (or unknown), evaluated artifact and base/head revisions, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

## Next steps

Carry the fixed comparison, criteria and evidence to `review-code` only for an outstanding correctness assessment, `verify-change` for missing proof, or `challenge-proposal` for unresolved consequential intent. Use the plain action if its skill is unavailable. Finish when the explanation is the whole request; do not merge, push, or publish merely because it is ready.
