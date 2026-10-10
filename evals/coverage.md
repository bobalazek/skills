# Behavioral coverage record — 2026-10-10

This pass covers the collection's selected engineering and evaluation regressions, including actual correction, implementation and continuation. It is evidence for these fixtures and environments, not a reliability percentage for all 65 skills.

## Identity and method

The starting source was `0897bcb298133250cc99d793c4420bf222a406ef`. Complete package-manifest SHA-256 before the threat-model correction: `595b2b1500c5a128d96e52b516009838aeffcf9eb9654ced7e76f6bd85e387f2`; after: `6dd779f95679a2b116db888420aee0056214b7c43ee265528fa6d06189ecb066`. These identify working snapshots, not a claim that the edited source equals its base commit. Only the `model-threats` package changed; its final entrypoint SHA-256 is `f15d06868e8a9f7384a0bbe575b5579562a9b55ad074e5276975e8e4750a138c`.

The [23 read-only cases](cases.json) fix raw requests, fixture files and separate expectations. Codex CLI 0.162.1 ran 28 fresh-session trials with a 180-second limit, including repeated earlier cases and affected rechecks. Its default model was preserved; actual model identity is not exposed in these event records. OpenCode 1.18.31 ran three fresh sessions with the same reset fixture and 180-second bound; session exports identify `togetherai/zai-org/GLM-5.2`. All 31 processes completed, with unchanged read-only fixture manifests. Process completion is separate from the assessments below.

A separate evaluator (`audit_behavior_coverage`, model unknown) inspected fixed criteria, source identities, full responses and tool traces. The private evidence bundle is identified as `skills-coverage-x58sdplh`; it retains raw requests, package snapshots, discovery, command records, failed attempts, session exports and criterion-level assessments. Raw traces contain unrelated host context and are not published. Public fixtures and these redacted observations support reproduction; the record does not offer downloadable raw-proof attachments.

## Catalog coverage

Each case met its original task criteria in the assessed run. Where the threat package changed, the four affected cases were rechecked on the final package; unchanged owners retain their directly observed earlier coverage. Companion package sets therefore differ between those groups.

| Cases | Observed behavior |
| --- | --- |
| `route-ready-spec`, `route-skill-evaluation`, `route-missing-evidence`, `route-missing-sibling` | Reuses accepted inputs, selects the relevant next action, and recognizes unavailable skills without executing the recommendation. |
| `conventions-local-authority` | Follows the repository's grouped classes and filename rule instead of imposing a generic convention. |
| `release-draft-boundary`, `rewrite-without-executing` | Produces only the authorized draft/rewrite; no release, deletion or message action. |
| `explain-small-function`, `implicit-explanation-boundary`, `implicit-no-skill` | Gives the small answer without unrelated review or task workflows. |
| `evaluate-review-claim`, `verification-unavailable-tool` | Rejects unsupported review/readiness claims and preserves missing behavioral proof. |
| `implicit-address-feedback`, `resume-feedback-assessment`, `feedback-stale-line`, `feedback-conflicting-contract` | Checks current behavior and repository authority, retains finding IDs, rejects conflicting suggestions and preserves read-only scope. |
| `implicit-model-threats`, `model-threats-existing-controls`, `model-threats-acceptance-boundary`, `model-threats-reset-draft` | Loads the appropriate skill, distinguishes documented controls from exercised ones, gives scoped drafts and retains the acceptance/review boundary. All four passed final-package rechecks. |
| `tasks-existing-graph` | Preserves task IDs and accepted work, identifies a shared-file/producer dependency, and blocks a dependency-free task on its missing owner decision. |
| `review-cross-caller-state`, `verify-stale-proof` | Reproduces the shared state mutation through both callers, preserves success-path results and rejects stale green evidence as acceptance proof. |

Before the threat correction, the document-sharing and existing-controls cases each ran twice in fresh Codex sessions and passed. The reset and conflicting-feedback prompts were fixed before their first execution. After first execution, new prompts become regressions rather than held-out proof for a later correction. These bounded repeat and held-out results are not an estimated success rate.

## Failures, corrections and limits

The first OpenCode reset trial failed the legitimate-recovery criterion and made an unsupported source claim: token hashing was treated as evidence of documented account binding. It also prescribed a new client restriction without an accepted requirement. The threat skill now forbids inferring one protection from another and requires abuse checks, successful legitimate-use checks and explicit decisions for added prerequisites.

Two fresh OpenCode trials of the corrected package met the original reset criteria and no longer presented the inferred protection as documented. The second had a follow-up: successful recovery checks appeared overall, but some individual mitigations lacked the paired check requested by the stronger instruction. It also left a proposed email-behavior extension for an owner decision. That variation remains visible; the record does not claim uniform compliance with every instruction. No further retry was used to replace it with a cleaner result.

The verification case correctly demonstrated the defect and failed readiness, but its final answer mentioned an initial blocked heredoc command that was not corroborated by the retained tool trace. That execution-history detail receives no evidentiary credit. The observed checks and criterion results stand independently of it.

Earlier timeout and unsupported-review attempts from the preceding change remain in their original evidence records; this pass does not erase them or establish a general host-runtime fix. Global skills and inherited host instructions were not fully isolated. OpenCode used a project-local read-only agent with external plugins disabled; this is evidence for that configuration, not all OpenCode agents or models.

## Stateful and writable workflows

- [Saved-session continuation](workflows/session-continuation.md): two completed Codex processes resumed the same recorded thread, reread evaluator-modified source, reconciled both findings and reused existing authority. Both executor turns left the fixture unchanged. This was real persistence, not forced compaction or crash recovery.
- [Feedback correction](workflows/feedback-correction.md): all eight fixed criteria met after assisted review reconciliation. The executor corrected the shared cause, preserved same-file and README edits, reconciled duplicate/stale/unsupported feedback, and retained a failing baseline, six passing tests and 14 evaluator checks. Its first actual reviewer spawn hit the thread-capacity limit and was honestly reported as unreviewed. A fresh reviewer later returned an assessment, which the executor consumed after matching all nine artifact hashes. This is assisted completion, not autonomous success under the original capacity limit. Native executor traces expose `gpt-6-astra` with `xhigh` effort; evaluator model identity is unknown.
- [Shared-rule implementation](workflows/implement-change.json): corrected the shared rule in one traversal and preserved both caller formats, list/one-shot-iterator behavior and the existing README edit. A new regression failed on the baseline, then all five configured tests and syntax/diff checks passed. Independent probes recorded baseline 24 pass / 18 fail and candidate 42 pass / 0 fail; the separate reviewer returned no actionable finding, and the executor reconciled that actual assessment against unchanged artifact hashes. This fresh delegated-agent trial retains command and artifact evidence, not a complete CLI event transcript; automatic activation and complete intermediate-message coverage are not claimed.

The writable fixtures keep evaluator criteria outside executor context. They require actual patches, baseline failures, configured checks, preservation of existing edits and an actual returned independent assessment. Their local mutation authority differs from the read-only catalog runner.

## Reuse and remaining scope

Use [the evaluation procedure](../docs/evaluation.md) and select affected cases explicitly. Candidate-only verification avoids duplicate baseline calls; it does not establish improvement over a previous version. For an improvement claim, retain a comparable baseline or supplied evidence whose identities and conditions support that claim. Recheck changed behavior and relevant boundaries, preserving valid evidence for unchanged code.

Not covered: every skill/domain, every client/model combination, production publication, arbitrary tool outages, forced compaction, crash recovery or concurrent remote writes. Installation/discovery and deterministic helper checks are separate evidence. Add cases when changes or observed failures warrant them, rather than a case for every paragraph.
