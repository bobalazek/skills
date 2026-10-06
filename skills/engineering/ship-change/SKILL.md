---
name: ship-change
description: "Deliver a verified change to the requested PR, GitHub or package release, deployment, or handover target. Includes preparing release notes from commits and PRs, following repository rules and verifying the reached target."
---

# Ship change

Reach the specifically requested delivery target and verify it. A prepared PR, merged branch, published package, deployed revision, and operational handover are different outcomes; establish which one is authorized.

## Establish readiness

Read the consuming repository's delivery rules and current state. Identify the exact revision/diff, accepted requirements, relevant verification, review status, release notes/versioning needs, target environment, and recovery procedure. Reuse valid evidence and recheck what changed. Preserve unrelated local work.

Use [delivery checks](references/delivery.checklist.md) for the selected target. Missing required verification blocks the delivery claim. Existing authorization remains valid; ask only at a consequential action that is outside it or when a real decision/input is missing.

For a release, resolve the project's version policy and consumer contracts, release channel, exact source/artifact identity, installation path and recovery limits. Preparation, a draft release, a pushed tag and publication have different effects; identify the authorized stopping point before writing to the remote target. Follow the release section of the delivery checks across package registries, source collections and binary distributions.

For GitHub release notes, identify the previous release and its commit, or establish that this is the first release. Read the commits, relevant merged PRs and actual diff through the selected candidate; account for reverts and changes absent from that candidate. Write a user-facing title and description with meaningful changes, migration/deprecation guidance, installation or upgrade steps, and known limits. Generated notes are a draft to verify. Use [the GitHub release procedure](references/delivery.checklist.md#github-release-notes-and-publication) for comparison selection, notes-only requests, remote drafts and publication readback.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Deliver through the existing path

Follow established branch, PR, CI, merge, package, and deployment automation. Use available tools and inspect their actual behavior; do not assume a particular CLI, branch name, cloud, Kubernetes cluster, or GitOps controller.

For a PR, include evidence with the problem/result: actual check outcomes and useful screenshots, before/after data, or artifact/run links. Identify the tested revision and relevant comparison conditions. Use the repository's template and approved upload mechanism, inspect shared artifacts for sensitive content, and verify returned links. Local paths and invented URLs are not attachments. If upload is unavailable, include concise observed results and reproduction steps, and state the artifact gap; a repository-required missing artifact still blocks readiness.

Stage only intended files when committing is requested. Respect protections and the requested stopping point. Do not bypass failing checks, force-push shared history, expose secrets, or add external communication to a delivery task. Before retrying a remote write after an uncertain response, inspect whether it already succeeded.

## Verify the target

Wait for required asynchronous jobs and inspect their result. Confirm the target contains the intended revision/artifact and exercise the relevant deployed behavior or package checks. A successful command, green build, or created PR alone proves only that step.

After a fix or new commit, reassess which evidence is still valid, rerun affected checks, and update stale PR claims or artifacts before delivery. Keep failures and unavailable required checks visible. A merge result needs target verification even when source-branch checks passed.

If delivery fails, preserve evidence and use the authorized recovery path. Report the exact reached state and blocker; do not claim completion for a partial target.

Finish with the revision/version, actual PR/release/target link, verification evidence, and material residual risks. Capture useful operational observations in the existing project record. Next work comes from observed results, not an automatic new planning cycle.
