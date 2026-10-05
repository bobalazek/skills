---
name: ship-change
description: "Deliver a verified change to the requested PR, release, deployment, or handover target using repository rules, existing automation, and observed target verification."
---

# Ship change

Reach the specifically requested delivery target and verify it. A prepared PR, merged branch, published package, deployed revision, and operational handover are different outcomes; establish which one is authorized.

## Establish readiness

Read the consuming repository's delivery rules and current state. Identify the exact revision/diff, accepted requirements, relevant verification, review status, release notes/versioning needs, target environment, and recovery procedure. Reuse valid evidence and recheck what changed. Preserve unrelated local work.

Use [delivery checks](references/delivery.checklist.md) for the selected target. Missing required verification blocks the delivery claim. Existing authorization remains valid; ask only at a consequential action that is outside it or when a real decision/input is missing.

## Deliver through the existing path

Follow established branch, PR, CI, merge, package, and deployment automation. Use available tools and inspect their actual behavior; do not assume a particular CLI, branch name, cloud, Kubernetes cluster, or GitOps controller.

For a PR, include evidence with the problem/result: actual check outcomes and useful screenshots, before/after data, or artifact/run links. Identify the tested revision and relevant comparison conditions. Use the repository's template and approved upload mechanism, inspect shared artifacts for sensitive content, and verify returned links. Local paths and invented URLs are not attachments. If upload is unavailable, include concise observed results and reproduction steps, and state the artifact gap; a repository-required missing artifact still blocks readiness.

Stage only intended files when committing is requested. Respect protections and the requested stopping point. Do not bypass failing checks, force-push shared history, expose secrets, or add external communication to a delivery task. Before retrying a remote write after an uncertain response, inspect whether it already succeeded.

## Verify the target

Wait for required asynchronous jobs and inspect their result. Confirm the target contains the intended revision/artifact and exercise the relevant deployed behavior or package checks. A successful command, green build, or created PR alone proves only that step.

After a fix or new commit, reassess which evidence is still valid, rerun affected checks, and update stale PR claims or artifacts before delivery. Keep failures and unavailable required checks visible. A merge result needs target verification even when source-branch checks passed.

If delivery fails, preserve evidence and use the authorized recovery path. Report the exact reached state and blocker; do not claim completion for a partial target.

Finish with the revision/version, actual PR/release/target link, verification evidence, and material residual risks. Capture useful operational observations in the existing project record. Next work comes from observed results, not an automatic new planning cycle.
