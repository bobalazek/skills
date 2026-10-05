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

Stage only intended files when committing is requested. Respect protections and the requested stopping point. Do not bypass failing checks, force-push shared history, expose secrets, or add external communication to a delivery task. Before retrying a remote write after an uncertain response, inspect whether it already succeeded.

## Verify the target

Wait for required asynchronous jobs and inspect their result. Confirm the target contains the intended revision/artifact and exercise the relevant deployed behavior or package checks. A successful command, green build, or created PR alone proves only that step.

If delivery fails, preserve evidence and use the authorized recovery path. Report the exact reached state and blocker; do not claim completion for a partial target.

Finish with the revision/version, actual PR/release/target link, verification evidence, and material residual risks. Capture useful operational observations in the existing project record. Next work comes from observed results, not an automatic new planning cycle.
