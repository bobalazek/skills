# Delivery checks

Before merging, publishing, or deploying, resolve the current candidate and compare it with the verified source revision, integration base, artifact identity, and material target configuration as applicable. Reconcile affected evidence if any changed. Bind the write to that candidate using the existing platform's expected-head/version controls or immutable artifact reference; a preflight read alone cannot prevent a moving branch or tag from changing during the write. If the delivery mechanism cannot retain that binding, report the constraint before proceeding.

## Pull request or merge

Confirm intended diff, correct base, repository-required checks, review status, and requested stop point. Explain problem/result and actual validation. If merging is authorized, wait for required checks and verify the platform records the merge; reconcile the local checkout according to repository rules.

Include a risk and reversibility summary when opening the PR. Name the credible worst failure, affected consumers/data, detection signal and recovery action with its conditions, owner where established and actual proof. A small stateless change can use one sentence. For data or external effects, separate code/traffic rollback from state recovery and record the point after which the old state cannot be restored, any accepted loss/interruption bounds and missing evidence. Recheck these conditions at delivery: new writes, migration stages or expired backups can invalidate a previously safe return path. Required recovery gaps block readiness; a reversible edit is not automatically low impact.

Include evidence when opening the PR: tested revision/environment, material criteria and observed results, useful before/after screenshots or video, test outcomes, and independent review findings with their resolution or remaining gaps. Name the separate evaluator and reviewed candidate; author checks alone do not establish independent review. Keep required human approval separate from the agent verdict. Link actual CI runs or redacted artifacts accessible to reviewers; inspect uploaded results and note meaningful access/expiry limits. Label a missing baseline or local-only artifact explicitly. Update affected evidence after follow-up fixes; retain useful unaffected results.

## Release or package

Determine what consumers receive and which contracts change: APIs, names/paths, input/output formats, required runtimes, permissions or side effects. Apply the project's version policy at its existing package or collection boundary. Distinguish the package version from build metadata, tool versions and mutable channel aliases such as `latest`. Use the established release automation; do not introduce a registry or versioning framework for a source-only collection.

Confirm destination/account and channel, an unused version, the exact reviewed source revision and artifact identity, required CI and review, and authority for each remote action. A tag push can expose source before a release is published; a draft or prerelease is not a permission boundary for already-visible artifacts. Before a first public distribution or visibility change, resolve the owner's license choice and distribution rights, and inspect the files/history and hosting metadata or artifacts that will become visible. State the review's scope and gaps without treating a scan as a guarantee.

Prepare user-facing notes covering meaningful changes, affected consumers, supported environments and known limitations. Explain breaking changes and migration steps. For deprecations, identify the replacement, transition window and intended removal version/date. Use generated notes as input, then check them against the actual diff. A change in release status does not establish stability; support that claim with the project's required behavior and compatibility evidence.

Build or assemble through the documented process and inspect the package contents, including required resources and excluded private material. Test installation and relevant behavior from the candidate artifact in a clean environment. Record the revision plus an artifact digest or immutable identifier as appropriate. Publish that verified artifact; if publication rebuilds it, verify the new artifact and its connection to the reviewed source. Apply required signing, checksums and provenance verification under project policy, and state any required check that is unavailable. A matching version label alone does not establish matching contents.

Inspect the draft's metadata and complete assets before publication where the platform locks them afterward. Verify tag-to-commit identity and bind publication to the reviewed candidate using the available platform controls. Respect immutable published versions; fix contents in a new version rather than moving a released tag or replacing bytes under an existing version. Keep prerelease/stable status and default-channel selection explicit.

After publication, verify actual visibility, version/channel and artifact identity at the destination. Install or download through the consumer's real path in a fresh environment and exercise the relevant behavior; include discovery/resource loading for source skill packages and integrity/provenance checks where required. Check upgrades or migrations when claimed. Confirm asynchronous publication jobs finished and retain the actual release link and observed result. Publication succeeded with failed verification is a partial delivery.

If a published release is defective, use the platform's authorized correction, deprecation/yank or channel-repointing procedure and publish a verified replacement where needed. Distinguish returning consumers to an older version from restoring data or reversing external effects. Check platform recovery limits before promising rollback: installed copies and downloaded artifacts may remain usable, and immutable versions may not be replaceable. Report the reached state, affected consumers, recovery action and unresolved impact.

## Deployment

Identify environment/account/cluster, release revision, configuration dependencies, migrations, readiness checks, and recovery owner. Follow the existing automation. Verify rollout completion and relevant user behavior on the actual target. For GitOps, a merged manifest is not proof of reconciliation; for a container platform, a created job is not proof of a healthy rollout.

Use the existing monitoring or logs to identify the relevant failure signal, agreed observation window, who responds, and what action follows. Report the period actually observed and the ongoing owner; a bounded release check does not provide a continuous watch. State missing instrumentation or access rather than treating silence as healthy operation. Check whether rollback remains safe after schema changes or new writes; use the accepted recovery plan instead of assuming a code revert restores data. Installing monitoring or changing live alert destinations needs its own scope and authority.

## Handover

Provide working entry points, setup/operating instructions, ownership, access references without secret values, delivered behavior, check evidence, known gaps, and the next support action. Sending the handover to another person needs actual communication authorization.
