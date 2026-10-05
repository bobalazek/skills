# Delivery checks

## Pull request or merge

Confirm intended diff, correct base, repository-required checks, review status, and requested stop point. Explain problem/result and actual validation. If merging is authorized, wait for required checks and verify the platform records the merge; reconcile the local checkout according to repository rules.

Include an evidence section in the existing PR format: tested revision/environment, material acceptance criteria and observed results, relevant visual or measured comparisons, and failures/unavailable checks. Link actual CI runs or redacted artifacts accessible to reviewers; inspect uploaded results and note meaningful access/expiry limits. Label a missing baseline or local-only screenshot explicitly. Update affected evidence after follow-up fixes; retain useful unaffected results.

## Release or package

Confirm versioning, included artifacts, changelog/migration notes where needed, reproducible build, and publish destination. Verify the published version and usable artifact rather than only the upload command. Do not publish credentials, internal records, or unintended source files.

## Deployment

Identify environment/account/cluster, release revision, configuration dependencies, migrations, readiness checks, and recovery owner. Follow the existing automation. Verify rollout completion and relevant user behavior on the actual target. For GitOps, a merged manifest is not proof of reconciliation; for a container platform, a created job is not proof of a healthy rollout.

## Handover

Provide working entry points, setup/operating instructions, ownership, access references without secret values, delivered behavior, check evidence, known gaps, and the next support action. Sending the handover to another person needs actual communication authorization.
