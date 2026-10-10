---
name: ship-change
description: "Deliver a verified change to the requested PR, GitHub or package release, deployment, or handover target. Includes preparing release notes from commits and PRs, following repository rules and verifying the reached target."
---

# Ship change

## Use this skill

Use this to prepare checked release notes or deliver a verified change to a specified PR, release, deployment or handover target. A notes draft, prepared PR, merge, published package and deployed revision are different outcomes; establish the authorized stopping point and reuse accepted verification and reviews.

Use `verify-change` for missing acceptance proof, `review-code` for an outstanding defect assessment, or `prepare-handoff` when the output is a context transfer rather than delivery. A notes-only request can finish with checked notes and explicit release-readiness gaps; it needs no new tag or remote draft.

## Establish readiness

Read the consuming repository's delivery rules and current state. Identify the exact revision/diff, accepted requirements, relevant verification, review status, release notes/versioning needs, target environment, and recovery procedure. Reuse valid evidence and recheck what changed. Preserve unrelated local work.

Load the readiness checklist and relevant PR/merge, release/package, deployment or handover section of [delivery checks](references/delivery.checklist.md) for the selected target. Missing required verification blocks that delivery claim. Existing authorization remains valid; ask only at a consequential action outside it or when a real decision/input is missing.

For a release, resolve the project's version policy and consumer contracts, release channel, exact source/artifact identity, installation path and recovery limits. Preparation, a draft release, a pushed tag and publication have different effects; identify the authorized stopping point before writing to the remote target. Follow the release section of the delivery checks across package registries, source collections and binary distributions.

## Prepare release notes when requested

For GitHub release notes, use [the GitHub release procedure](references/delivery.checklist.md#github-release-notes-and-publication) for comparison selection, notes-only requests, remote drafts and publication readback. Identify the previous release and its commit, or establish that this is the first release. Read commits, relevant merged PRs and the actual diff through the selected candidate; account for reverts and changes absent from that candidate.

Write a user-facing title and description with meaningful changes, migration/deprecation guidance, installation or upgrade steps and known limits. Generated notes remain a draft until checked against the source. For a first release, describe supported scope and actual evaluation evidence without inventing a previous version or stability claim. Notes quality and readiness to publish are separate results.

## Confirm independent readiness

For a notes-only draft, check the supplied facts and return the draft even when independent review is unavailable, explicitly leaving it unreviewed and not ready for delivery. A reviewer must actually return an assessment before you can accept the notes or candidate for delivery.

For release notes needing a prose-quality pass, use `review-writing` when available, with the selected comparison and draft. Otherwise remove generic celebration and repeated claims locally. Preserve migration steps, compatibility limits and actual verification status. A writing review can contribute to the required assessment below; it cannot establish delivery readiness by itself.

Before accepting prepared notes or delivering the candidate, require an independent assessment appropriate to that target. Reuse a valid returned review; otherwise have a separate agent in fresh context challenge the raw accepted request, fixed candidate, source/artifact identity, notes and required proof without the author's conversation or preferred conclusion. Prefer a different available model where practical and authorized; an explicit cross-model requirement left unmet blocks acceptance. Reconcile findings and independently recheck affected results after fixes. Retain reviewer/session identity, host-reported model (or unknown), evaluated revision/artifact, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

Before stating review happened in commentary, a PR, notes or the final answer, locate the returned assessment in the actual tool/session evidence. An empty wait with no recipients or results supplies none. If no assessment returned, say independent review was not performed; do not name an imagined reviewer, infer approval or invent findings. A planned reviewer identity is not a returned result.

## Deliver through the existing path

Follow established branch, PR, CI, merge, package, and deployment automation. Use available tools and inspect their actual behavior; do not assume a particular CLI, branch name, cloud, Kubernetes cluster, or GitOps controller.

For a PR, include evidence with the problem/result: actual check outcomes and useful screenshots, before/after data, or artifact/run links. Identify the tested revision and relevant comparison conditions. Use the repository's template and approved upload mechanism, inspect shared artifacts for sensitive content, and verify returned links. Local paths and invented URLs are not attachments. If upload is unavailable, include concise observed results and reproduction steps, and state the artifact gap; a repository-required missing artifact still blocks readiness.

Before a remote write, recheck the candidate against the verified revision/artifact and use available expected-head or immutable identity controls from the delivery checks. Stage only intended files when committing is requested. Respect protections and the requested stopping point. Do not bypass failing checks, force-push shared history, expose secrets or add external communication. Before retrying an uncertain remote write, inspect whether it already succeeded.

## Verify the target

Wait for required asynchronous jobs and inspect their result. Confirm the target contains the intended revision/artifact and exercise the relevant deployed behavior or package checks. A successful command, green build, or created PR alone proves only that step.

After a fix or new commit, reassess which evidence is still valid, rerun affected checks, and update stale PR claims or artifacts before delivery. Keep failures and unavailable required checks visible. A merge result needs target verification even when source-branch checks passed.

If delivery fails, preserve evidence and use the authorized recovery path. Report the exact reached state and blocker; do not claim completion for a partial target.

## Return the reached result

Match the requested audience, tone and depth, then project conventions. Report the requested purpose and actual reached state, revision/version, notes or verified PR/release/target link, observed checks and material residual risks. Keep useful operational knowledge in the existing authorized project record rather than another summary. Refresh evidence and independent findings in the PR as the candidate changes.

## Next steps

If required proof is missing, use `verify-change` with the candidate and unmet criterion; use `diagnose-issue` for an unexplained delivery failure or `implement-change` for an agreed repair. A notes-only result can recommend the remaining release checks and authorized publication through `ship-change`, carrying its exact candidate, comparison baseline, notes and readiness gaps. Check skill availability and describe the plain action when absent. Finish when the requested target is verified; continue only ready work already authorized, without restarting planning or expanding a draft request into publication.
