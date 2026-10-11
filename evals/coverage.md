# Behavioral coverage record

The original 2026-10-10 pass is retained below; the 2026-10-11 follow-up records later engineering checks separately.

This pass covers the collection's selected engineering and evaluation regressions, including actual correction, implementation and continuation. It is evidence for these fixtures and environments, not a reliability percentage for all 65 skills.

## Identity and method

The starting source was `0897bcb298133250cc99d793c4420bf222a406ef`. Complete package-manifest SHA-256 before the threat-model correction: `595b2b1500c5a128d96e52b516009838aeffcf9eb9654ced7e76f6bd85e387f2`; after: `6dd779f95679a2b116db888420aee0056214b7c43ee265528fa6d06189ecb066`. These identify working snapshots, not a claim that the edited source equals its base commit. Only the `model-threats` package changed; its final entrypoint SHA-256 is `f15d06868e8a9f7384a0bbe575b5579562a9b55ad074e5276975e8e4750a138c`.

The [read-only catalog](cases.json) contained 23 cases at that revision, with raw requests, fixture files and separate expectations. Codex CLI 0.162.1 ran 28 fresh-session trials with a 180-second limit, including repeated earlier cases and affected rechecks. Its default model was preserved; actual model identity is not exposed in these event records. OpenCode 1.18.31 ran three fresh sessions with the same reset fixture and 180-second bound; session exports identify `togetherai/zai-org/GLM-5.2`. All 31 processes completed, with unchanged read-only fixture manifests. Process completion is separate from the assessments below.

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


## Engineering checklist follow-up — 2026-10-11

This pass starts from `e49557bceadc6bb53d546f1cbaf408e89be1df99`. The three added catalog cases exercise criterion coverage, supplied command claims and per-mitigation checks. Candidate snapshots are identified by package hashes in the private `skills-engineering-vOk1hN` evidence bundle; its initial baseline digest is `6dd779f95679a2b116db888420aee0056214b7c43ee265528fa6d06189ecb066`, and the final threat correction snapshot is `f2e5748fd6c7273f3a43b69920ff1d47259a04dc98ccdc97372f53da36da0ea7`. These are working snapshots, not clean-commit claims.

The separate evaluator `assess_checklist_trials` assessed 28 retained trials: 16 Codex CLI 0.162.1 and 12 OpenCode 1.18.31, each bounded to 180 seconds. All top-level processes completed and read-only fixtures stayed unchanged. Across repeated fixed criteria, 95 observations passed, three failed and five remained unchecked. Counts cover historical and corrected outputs and are not a reliability rate. Native records identify `gpt-6.1-sol` with `xhigh` for the two retained Codex investigations; earlier Codex models remain unknown. OpenCode exports identify `togetherai/zai-org/GLM-5.2`. Evaluator model identity is unknown.

The first candidate omitted the reason for excluding a visual check. An intermediate threat draft asserted accepted risk and an existing session policy without a supporting decision. These failures remain retained. The corrected verification template requests an explicit exclusion reason and actionable next checks; the threat template keeps owner decisions open until evidence exists. Latest assessed checklist and supplied-report investigations passed their fixed criteria, as did the latest paired-control and acceptance-boundary cases. Baseline and candidate often both met the same criteria; no general improvement rate is claimed.

**Remaining threat-model limitation:** both latest OpenCode reset repeats still proposed conditional checks with mismatched assumptions: an attack was expected to fail under an undecided extra factor while legitimate recovery could succeed without it. Another row expected rejection of a fresh leaked bearer token without a distinguishing mechanism. Their original broader fixture criteria passed, but these stronger semantic checks failed. The skill now explicitly requires matching assumptions; the observed variation remains unresolved and needs semantic review of generated models. A filled table alone does not establish a sound mitigation.

**Evidence-capture correction:** native Codex records exposed actual command failures and a returned independent assessment omitted by the exec JSON stream. A fresh retained checklist run contains the real denied heredoc attempt; a retained supplied-report run contains the actual reviewer spawn and returned assessment. Earlier fabrication interpretations are withdrawn. Five earlier claim origins remain unchecked because their native records were unavailable; later runs do not prove those earlier events. The runner's opt-in `--retain-session` captures a matched native record without changing its default ephemeral behavior. Raw records contain private host context and remain unpublished.

Two additional writable workflows were independently assessed by `evaluate_engineering_workflows`, with fixed requests/criteria, separate executors and actual returned assessments. Evidence is retained privately as `skills-writable-engineering-y9je7zut`:

- [Diagnosis and correction](workflows/diagnose-issue.json): all seven workflow criteria passed. The executor reproduced a cross-currency cache error and repaired the shared key for both consumers. A predetermined second accepted requirement then exposed a real case-insensitive lookup failure; the executor consumed the returned finding, repaired it, refreshed affected proof and reconciled a final assessment. Six configured tests and independent probes passed, with unchanged catalog evidence retained by hash. Live-provider parity remains unchecked. The second turn is disclosed assisted requirement change, not an autonomous first-turn discovery.
- [Automated guard](workflows/automate-code-checks.json): all eight workflow criteria passed. The existing JSON syntax check missed duplicate keys; the added guard rejected five duplicate forms plus malformed JSON through the actual `make check`, while five valid near-matches passed. Four configured tests passed, excluded examples and user edits were preserved, and CI wiring invokes the same command. An early proof-wrapper assertion failed on absolute versus relative path spelling; its correction and successful recheck are retained, with no guard change. Live CI and its Python 3.12 were not exercised; local Python was 3.14.4.

Both writable trials completed within their 15-minute execution windows. Complete host event streams, actual models and token counts were unavailable; actual local commands, outputs, artifacts and returned assessments were retained. These are current-version workflow checks, not comparisons against previous skills or proof of automatic activation. The new simplicity guidance and test relocation do not change either tested leaf package.

After removing redundant reviewer-identity wording, two final capture-enabled Codex runs rechecked the checklist and supplied-report cases against the final verification package. All nine fixed criteria passed, and the evaluator matched the installed package to the current source. Native records again show the actual denied command and returned review; both parent sessions report `gpt-6.1-sol` / `xhigh`. These are two additional passes, preserving the earlier 28 attempts and their failures/gaps. The verification-run package-set digest is `b15eace120cf92ed87fb9f9cae629532ffb6db546dd5b9fe7d99c0abd265312c`.


## Simplicity and local conventions — 2026-10-11

The three `simplicity-` catalog cases were fixed and assessed by the separate `assess_simplicity_guidance` evaluator. Codex CLI 0.162.1 ran them against snapshot `b15eace120cf92ed87fb9f9cae629532ffb6db546dd5b9fe7d99c0abd265312c`, retaining native records with the existing 180-second bound. All three completed without changing fixtures: 14 of 15 criteria passed. The review case reproduced a JPY formatting error and lost validation, chose the existing money owner, and preserved the deliberate percentage variant. The instruction-discovery case proposed one linked AGENTS sentence, preserved existing constraints and grouped-class conventions, ran the two existing tests, and retained a returned review and affected recheck.

The original architecture result preserved the current synchronous runtime and safeguards but omitted a shared implementation for the active/inactive export flow. It reused low-level helpers without assigning the common admin/query/CSV logic to one owner used by both consumers. This failed one fixed design criterion; it is a handoff omission, not observed duplicated production code. The architecture skill now asks for the shared implementation and each current consumer's path to it, while preserving deliberate contract differences.

These are explicit current-candidate trials, not automatic-routing or causal improvement evidence. Global Ponytail instructions were loaded by the host, so the collection's contribution is not isolated. Native records retain actual entrypoint/reference reads, checks and returned review assessments; private host context remains unpublished. Earlier shared-rule implementation coverage predates these wording changes; this pass does not claim a new writable implementation trial for every changed instruction.

One affected architecture recheck used corrected snapshot `7539b70e47da80dca60e62e0634a7d02307a63ad3087cd8585c961e55da108a8` and the same fixed request/criteria. It selected a shared function but reached the 180-second bound (SIGKILL/137, native `taskComplete=false`) just after a real reviewer returned two findings: an unsupported claim of existing tenant-ID validation and a missing serialization-failure check. No reconciled final handoff existed at that cutoff, so the autonomous attempt remains incomplete.

A single assisted continuation resumed that same retained thread for an additional 180-second allowance and completed in 133.2 seconds. Its final design passed all five fixed criteria, with a private export flow used by both literal-status entrypoints, retained safeguards and explicit failure checks. The native record contains the actual D2 affected recheck resolving both findings, and fixture hashes remained unchanged. This is completion after 180.0 + 133.2 seconds and an evaluator continuation prompt, not a successful original 180-second trial or comparable latency. No further prompt tuning or fresh retry replaced the failed attempt. Evidence and criterion records remain in the private `simplicity-independent` subdirectory of the engineering bundle.

## Git conventions and checklist evidence — 2026-10-11

The baseline is `fc73884643ecd2884bca1c4ce5ebf157167e7284`, package digest `7539b70e47da80dca60e62e0634a7d02307a63ad3087cd8585c961e55da108a8`. The three new catalog cases ran against it and working candidate `7232227f2fcb591a934da214a3bdc299a8df73bb6bd2b90bade64aab37230d24`. Codex CLI 0.162.1 retained native sessions identifying `gpt-6.1-sol`, with a 180-second bound per attempt. Separate evaluator `review_git_navigation` assessed raw requests, responses and native tool evidence in private bundle `skills-git-conventions-ARYkKQ`.

All six original attempts completed: 22 criterion observations passed. Both variants preserved a repository's non-Conventional-Commit workflow, corrected the proposed squash title, rejected stale or missing proof, and distinguished supplied, unperformed and inapplicable foundation checks. The foundation prompt's original ban on commands was clarified to permit local file inspection while forbidding project/verification execution. Both original attempts used file APIs; the separately retained clarified pair also passed all eight observations. Neither pair is discarded.

After moving the title validator into `ship-change`, one affected candidate-only trial used package digest `10e2e55d40d4768bea93bdabab3f93b23e08e21fd875ed29d319cf21d79a11b2`. It passed all four criteria and actually ran the installed helper with Bun 1.3.9. The result limited its checked item to the proposed local title/subject; provider fields, current CI and returned review remained unverified. All nine attempts left fixtures unchanged, with 34 passing criterion observations overall. Baseline and candidate both passed; this is bounded non-regression evidence, not measured improvement or a reliability rate.

The subsequent checklist-format pass audited all 24 references, preserving wording and line order while adding task markers. Independent review and a line-by-line comparison support retaining unaffected behavioral evidence; all 24 workflows were not rerun. Package checks now require unchecked tasks and reject prechecked template items, including tests that distinguish real tasks from fenced examples. Global host instructions remain a possible influence. Raw native records stay private, and these local trials do not establish live GitHub enforcement or behavior across all clients and skills.

## Project knowledge and runtime contracts — 2026-10-11

Four new [catalog cases](cases.json) exercise current product facts versus requirements, human blockers, runtime handoffs and inventory parity. The initial working snapshot became `f0f40514eb2054dee3f5320b745ceb3e5e7a3703`, package digest `8c3e7f4ea30515ad47307e4538cac2b3c67a43ea5c8b99a4db8eccf449f142e0`. The task-readiness correction is `11b3ba141d3466cde1197319153a73ace6d6d9fd`, digest `9c50e5bf6003e9f57653af0ee5fe0f05a47415a36e12cf11e25178f0f1078042`. Other tested leaf packages were unchanged by that correction.

Separate evaluator `review_template_guidance` assessed six retained Codex CLI 0.162.1 attempts against fixed criteria and native traces in private bundle `skills-template-guidance-q2zSI2`. Native records identify `gpt-6.1-sol`; evaluator model is unknown. All fixture files remained unchanged. These are candidate-only checks, with no baseline or measured improvement claim.

| Case | Observed result and limits |
| --- | --- |
| `knowledge-product-state` | All four criteria passed: uses the existing overview, distinguishes source-supported and planned capabilities, preserves requirement IDs, and catches the stale feature inventory. |
| `tasks-human-blockers` | Initial attempt passed three of four criteria but omitted readiness rechecking after blocker closure. The skill entrypoint now states that step; a fresh 66.1-second recheck passed all four unchanged criteria. The original omission remains retained. |
| `architecture-runtime-handoff` | Initial attempt timed out at 180 seconds with no completed design; its interim observations do not establish completion. One fresh attempt with a 300-second limit completed in 222.2 seconds and passed all five criteria, including durable handoff, authorization, package/process boundaries and failure checks. This does not erase the timeout or demonstrate a runtime-speed improvement. |
| `checks-inventory-parity` | All four content criteria passed, including missing/stale entries, optional-provider exceptions and calibrated checks through existing tooling. However, the executor read global Corco and Ponytail skill files outside the fixture, violating the project-only trial boundary. It acknowledged those reads; this is a host/coverage limitation, not isolated standalone behavior or a demonstrated defect in the parity guidance. |

The evaluator returned no remaining source finding after the readiness correction. Package validation, type/lint checks and 97 tests with 1,008 assertions passed. A clean installation check at `11b3ba1` copied 65 packages / 218 files identically and verified Codex/OpenCode discovery. Installation is separate from behavioral proof. These read-only drafts do not demonstrate production operation, writable guard implementation, automatic activation or every consuming repository's behavior; inherited host instructions remain a possible influence. Raw records stay private.

## Concrete checklists, original intent and app targets — 2026-10-11

Source candidate `3b3c75e1eeb0be0ce36276c7cae79018eb18cc37` has package digest `a705093b8ad92e55343e5bc1fe999e14244077e43e309523bde56ad1589781d0`. Independent evaluator `review_checklist_coverage` found no blocking source finding: both implementation and review provide at least three concrete items in each of the 13 requested categories, with intent and target handoffs through the affected workflow. This is source coverage, not proof of every check in a consuming application.

Three candidate-only catalog attempts ran on Codex CLI 0.162.1 with a 300-second bound and retained native sessions identifying `gpt-6.1-sol`. All completed and left fixture files unchanged. Private evidence is in `skills-checklist-coverage-DoJtFl`; no baseline or comparative improvement was measured.

| Case | Independent result and limits |
| --- | --- |
| `spec-original-intent-targets` | Four criteria passed in 123.1 seconds: preserves original/accepted intent, covers the tutor's actual decision, keeps web provisional and rejects unrequested clients/features. Draft and unanswered choices remain explicit. |
| `review-intent-category-coverage` | Four content criteria passed in 200.5 seconds: confirms selection leakage against owner intent, preserves local contracts, accounts for all categories and limits native/SEO claims. **The fifth criterion failed:** the executor read a global Ponytail file outside the fixture despite the local-only boundary. It acknowledged the read. No candidate instruction directed it; this remains a host-boundary failure, not isolated standalone proof or an all-pass case. |
| `verify-app-target-proof` | Four criteria passed in 76.4 seconds: retains supplied static proof while leaving installed offline/restart/keyboard/update criteria open with closing observations and readiness consequences. It performs no project checks or native runtime verification. |
| `implement-intent-selection` | Fresh writable executor `execute_intent_selection` made the shared export correction in a disposable fixture, preserved owner edits and reconciled a real returned independent assessment. All five bounded criteria passed. Candidate manifest `235b8c97e3c268786b278e9957965de05f73bcd737ccad4269094dd3bf8388a2` remained unchanged after review. The initial reproduction and regression failures remain retained; configured checks, four tests and independent exact-byte/order/empty/unknown/duplicate probes passed. |

The writable trial used Python 3.14.4 on macOS; executor/evaluator model identities are unknown. Its captured command records and artifacts establish those observations, but a complete executor-session transcript was unavailable. Native rendering, input/accessibility, files/IPC, restart, installer/update and workload performance remain untested. The successful correction is one local rule, not desktop application acceptance or a full host-action audit. Inherited host instructions can influence every trial.

Package/type/lint checks and 97 tests with 1,052 assertions passed. A clean installation at `3b3c75e` verified 65 packages / 219 identical files and Codex/OpenCode discovery; an earlier malformed invocation failed immediately because a revision was supplied where a checkout path was required. Installation is separate from behavior. The independent assessment accepts scoped package content with the failed boundary and observation limits retained; raw host context stays private.

## Dependency architecture and high-risk investigation — 2026-10-11

Source candidate `33d281d2e1634e08a45e17f4c2ffd34bbdafe261` has package digest `12a30bf0180e780cf8af8d43c612e46a7f331971dce7abbed49613a764fb44d7`. Separate evaluator `review_architecture_risk` checked the raw expanded requirements, source routing and all five cases, returning no blocking source finding. [The request map](../docs/engineering-improvements.md#request-to-guidance-map) identifies owners for the template, concrete checklist/intent/target and architecture/high-risk requests, including the final clarification that dependencies extend beyond APIs to managed data, infrastructure, delivery and MCP/tool services. This is guidance coverage, not evidence that every consuming system or domain has been exercised.

All five candidate-only attempts completed within their 300-second bound on Codex CLI 0.162.1; retained native records identify `gpt-6.1-sol`. The two batches used identical package snapshots. Private evidence is in `skills-architecture-risk-23UhWz`; evaluator model is unknown. Every fixture's inputs remained identical and no extra fixture files were created.

| Case | Independent result and limits |
| --- | --- |
| `architecture-dependency-intake` | Five criteria passed, 153.5 seconds: preserves consequential open hosting/data/ownership choices, inventories managed database/storage/infrastructure/AI/MCP dependencies and treats tool actions as authority-bearing effects. No provider or scale choice is invented. |
| `explain-system-dependency-map` | Five criteria passed, 98.0 seconds: distinguishes package/process/deployment, includes managed data and delivery dependencies, produces useful architecture and flow diagrams with source links and declared/unverified status. It discloses missing runtime wiring and diagram rendering evidence; no deployed state is claimed. |
| `review-commercial-alternate-paths` | Five criteria passed, 296.5 seconds: traces UI/API/job paths, demonstrates authorization/tenant bypasses and repeated charge invocations with synthetic probes, and retains provider/concurrency/recovery proof gaps. This completed close to the bound, not a measured speed improvement. |
| `review-lifecycle-decision-data` | Five criteria passed, 166.9 seconds: traces approval/queue/support retry, identifies broadened destructive selection and missing current authority, demonstrates join inflation/ignored completeness with pure report probes, and preserves unresolved recovery/compliance evidence. It does not execute cleanup. |
| `pr-dependency-slices` | Three criteria passed, 67.0 seconds: proposes coherent compatible increments, preserves generated-fixture ownership and old clients, and avoids a line limit or new flag system. The fourth criterion's content is sound but its authority boundary **failed**: a successful read loaded global Ponytail instructions outside the fixture. The raw command and native evidence are retained privately. |

The independent result is four passing cases and 23 of 24 passing criteria, with the failed PR boundary preserved. Both high-risk review trials first encountered a read-only restriction on heredoc temporary files, then used safe `python3 -B -c` probes; the failed commands are retained. All observed project checks were synthetic/local. The external skill read is a host contamination/authority failure, not a directed action in the changed package, and prevents a clean five-case pass.

Package/type/lint checks, 97 tests with 1,105 assertions and diff checks passed. A clean installation at `33d281d` verified 65 packages / 221 identical files and Codex 0.162.1 / OpenCode 1.18.31 discovery. No baseline, automatic activation, real cloud/provider/MCP operation, production deployment, concurrent execution, restore rehearsal, native application or whole-domain reliability is established. Inherited host instructions may influence these bounded results; raw host context remains private.

## 2026-10-11 — Video development and production handoffs

This local, uncommitted pass adds `plan-video`, `write-video-script` and `create-storyboard`, narrows motion production's overlapping responsibilities, and adds concrete production checklists and flexible narration timing. The [case catalog](cases.json) now has 55 read-only cases; this pass adds 11 video cases and the writable [human story handoff](workflows/video-human-story-handoff.json). Fixture definitions are not themselves passing evidence.

The fixed production baseline is `017d73eee0c58eeab64b4e2f7464a58c5a217c16`. Complete candidate package digests identify dirty working snapshots, not that commit: initial `5518b2314b4c856853db327eb6f920b54f0dbd88ffdddcc1e97a8ad87b43c4db`; corrected rendering reference `fd3c5b1b321a811681acfb4dac0b9f5b34a4b6a20e2882b663c2351bc783a36e`; final discovery clarification `dd57469540cda1f1c38b2a971079fdd38dacea24c48d98694fae440e881f139a`. Independent snapshot comparisons confirmed the unchanged relevant leaves and scoped affected rechecks.

Codex CLI 0.162.1 ran 19 read-only attempts with a 180-second limit and one writable resumed-feedback attempt with a 300-second limit. Captured native sessions report `gpt-6.1-sol`. All 20 exited zero without timeout; the 19 read-only fixtures remained unchanged, and an independent before/after hash comparison found only the authorized `brief.md` and `script.md` edits in the writable trial. These are execution and mutation observations, separate from the behavioral judgment.

Independent reviewer `/root/review_video_skills` returned source and criterion-level assessments: all **12 distinct current-candidate scenarios** pass within their fixed scope. Across 20 retained attempts, 63 criterion rows pass and one historical discovery row is partial; its unchanged-criteria rerun closes that omission. This is not a reliability percentage. Six baseline production attempts also pass, so those comparisons show bounded compatibility, not general superiority. New skills have direct verification rather than a no-skill control.

| Scenario | Observed result |
| --- | --- |
| Discovery and concept brainstorming | Questions establish type, purpose, audience and constraints; distinct ideas retain human selection. The corrected discovery response explicitly preserves answers and choices in the conversation. |
| Hook-only writing and silent story outline | Unsupported promises are narrowed to evidence; continuation and payoff stay aligned. Silent reflective work remains silent and scoped, with no forced CTA or production. |
| Storyboard action coverage | Shots distinguish opening/action/ending states and missing footage; described stills do not prove falling/rebuilding actions. Both requested layouts remain in scope. |
| Continuous narration and ambiguous provider job | Continuous takes and stable spans survive; script/actual-word differences, direction tags and anchored cues are handled explicitly. An uncertain submitted job is reconciled before another paid request. |
| Edit and motion acceptance from notes | Missing native speech, source/output caption timing, lost qualifiers, stale narration cues, absent variants and unobserved playback/review remain concrete open checks. |
| Motion cue handoff | Supplied 1s/7s/11s cues and fixed anchors survive a scoped pickup; no mandatory line files or invented listening proof. |
| Implicit script route | Actual local reads selected `write-video-script` without loading prohibited production skills for a bounded opening rewrite. This is one activation case. |
| Writable human story handoff | Owner answers supersede an unaccepted promotional proposal; original intent and stable IDs survive. A silent 45-second script covers pin/unpin with estimated timing, records checks and gaps, and asks for wording confirmation before storyboarding. Visual direction stays open. |

Two findings were corrected and independently rechecked: the rendering reference still mandated sequential per-line audio despite the new continuous/anchored contract; the first discovery response omitted where decisions would be retained. The failed initial discovery coverage is preserved. The writable trial uses the pre-clarification planning leaf but begins with supplied answers, after opening discovery; its script leaf matches the final candidate.

Local raw records remain in `/tmp/skills-video-new-20261011`, `/tmp/skills-video-production-20261011`, `/tmp/skills-video-render-recheck-20261011`, `/tmp/skills-video-discovery-recheck-20261011` and `/tmp/skills-video-handoff-20261011`. Returned assessments are `/tmp/skills-video-source-review-20261011.md`, `/tmp/skills-video-behavior-review-20261011.md` and its JSON criterion/digest ledger. They are local evidence, not public attachments; raw host context is not published.

Package/metadata/resource/link/checklist checks pass for 68 skills and 105 reachable resources; type/lint checks, 97 tests with 1,181 assertions and diff whitespace checks pass. No new dependency, production helper or release was introduced.

Limits: synthetic notes and document work do not establish filming, provider generation, real playback/listening, readability, product behavior or audience impact. New leaves were copied and discovered in Codex fixtures; a new full installer/OpenCode smoke check was not run. Three nested review bodies were unavailable despite native spawn/completion evidence (both edit-note variants and the baseline cue trial); their contents remain unverified, rather than treated as fabricated or accepted media review. Resumed supplied feedback is not live human research or proof of every future conversation path. Everything remains local for user review; nothing was committed, pushed or published in this pass.

### Full scripts and channel discovery follow-up — 2026-10-11

The user subsequently authorized verification, commit, push and an open PR. This follow-up makes purpose, audience, narrative format and destination/surface explicit in discovery, and requires complete requested script words through the ending. The catalog now has 59 read-only cases. Four new fixed cases challenge those additions; the preceding attempts, corrections and limits remain retained.

The complete 241-file candidate package digest is `6f37ab068cdd8ac2ff96ee9f8053a49c10c1c62a43d2f52d31dd0890ef15c9f3`, independently matched to current source and both runner snapshots. It identifies the working package contents based on `017d73eee0c58eeab64b4e2f7464a58c5a217c16`, not that baseline commit. Codex CLI 0.162.1/native `gpt-6.1-sol` completed all four attempts within their 180/240-second bounds, without timeouts or fixture changes.

Independent reviewer `/root/review_video_delivery` assessed complete outputs and tool/native records: **four cases and all 14 fixed criteria pass**. Reviewer model identity is unknown. These are actual output assessments, separate from successful process exits.

| Case | Observed result |
| --- | --- |
| `video-purpose-channel-brainstorm` | Three distinct personal/product concepts, channel/surface tradeoffs and grouped discovery questions; a bounded pilot and retained human choices without inventing acceptance. |
| `video-full-youtube-script` | Complete seven-beat product tutorial with 207 spoken words, separate visual directions and plausible estimated two-minute delivery; unsupported features and capture claims excluded. |
| `video-personal-channel-scripts` | Two complete personal-story drafts: narrated TikTok and silent Instagram Reel, each with actual words, progression and payoff. Timing estimates and human wording confirmation remain explicit. |
| `video-motion-script-fallback` | A standalone motion leaf returns complete five-part narration and matched visual beats for a queue explainer, preserving one worker, ordering and visible failure without invented retries or production. |

The reviewer also rechecked changed source, matched all 84 prior raw-artifact hashes and retained unchanged-case evidence. Together these passes cover 16 distinct video scenarios across 24 attempts, including baseline and historical attempts; they do not establish general reliability across all 68 skills. Package/resource checks pass for 68 skills and 105 resources; TypeScript/Biome, 97 tests with 1,209 assertions and whitespace checks pass.

Raw follow-up records remain local in `/tmp/skills-video-pr-planning-20261011` and `/tmp/skills-video-pr-scripts-20261011`; the returned assessment and criterion/hash ledger are `/tmp/skills-video-delivery-review-20261011.md` and `.json`. They are not public attachments. Full installer/OpenCode checks, actual media generation, rendering/listening, provider integration and audience impact remain untested here. Human acceptance of draft creative work remains separate; merge and release are outside this delivery target.


### v0.3.2 delivery preparation — 2026-10-11

The user subsequently extended authority to merge and publish a patch release. Version `v0.3.2` is that explicit choice, an exception to the collection's default minor increment for added skills. Existing names and install paths remain available; the three new skills are optional. This changes the delivery target, not the prior trials' observations.

A clean candidate installation at `2a6a8c6e6f520a07ccb165423ad3c5ee7d26ddf0` passed: 68 complete packages / 241 identical files, skills CLI 1.7.0, Codex CLI 0.162.1 and OpenCode 1.18.31 discovery. The installation manifest digest is `3e1f37b775cae2b2bc3779cc1542c26afd1ee9172ef987ad10246b1f4d42bc1d`; its file-list format differs from the evaluation snapshot digest above. Raw installation evidence remains local in `/tmp/skills-032-candidate-install-20261011`. Discovery does not prove behavior; the scoped output assessments above supply separate evidence. Exact merged-source and published-tag checks, final CI and release readback will be recorded in the delivery PR rather than presumed complete here.


## 2026-10-11 — Clarification before dependent work

This patch tightens 13 standalone entrypoints and their relevant checklists/playbooks: unanswered intent, requirements or preferences block dependent work, while accepted answers, explicitly delegated choices and requested alternatives remain usable. Evaluation scope distinguishes instruction/text checks from production execution. Five fixed `clarify-` cases bring the read-only catalog to 64 cases; the existing full-script case is a ready-input control.

The initial package snapshot over `b7a8eefcb03a4b65e00ae7a1d21bc03f6da69f6f` is `6630e770575d7e2f99ba523c63b72ee208153948a809db51c8c9a46638ffa9c8`. Independent reviewer `/root/review_clarification_gates` inspected all changed source and six native text traces: 17 of 19 fixed criteria passed. The brainstorming response omitted a practical-constraints question; the evaluation response named test modes without explaining the bounded text path. Both original misses remain retained.

Two concise instruction corrections produced package snapshot `6e2f6abb21d9d4291001f9ed3afed210a6273824be2d61a19a4929706323d32f`. Unchanged-criteria rechecks independently demonstrate both previously missing clauses: brainstorming asks about time, money, tools and access, and evaluation explains checking clarity, ready/missing inputs, questions, stopping points and outputs before waiting for the scope choice. These digests identify package contents, not the base commit or a measured improvement over the previous release.

All 19 current instruction criteria are demonstrated across six distinct cases, carrying forward unchanged-package evidence. The three fresh rechecks pass all nine criteria, including the delegated-direction control. All nine retained attempts exited zero without timeout or fixture changes; the initial two failed criteria and the separate foundation boundary deviation remain visible. This is a bounded instruction assessment, not a clean nine-attempt or whole-collection reliability claim.

| Case | Observed instruction behavior |
| --- | --- |
| `clarify-video-before-script` | Asks grouped discovery questions, preserves two proposed directions and waits before a dependent script. |
| `clarify-brainstorm-before-direction` | Corrected response asks about users/problem/outcome and practical constraints, compares three alternatives and keeps direction and implementation open. |
| `clarify-foundation-before-setup` | Asks about users/workflow, data/target and operations before choosing a foundation; no scaffolding or provider selection. Its three criteria pass, with the separate host-boundary limit below. |
| `clarify-evaluation-level` | Corrected response explains the text path and asks which evaluation level is intended; no production, credentials or provider execution. |
| `clarify-delegated-direction` | Accepted facts and delegated judgment produce three options, a recommendation and proposed brief without another approval round or actual execution. |
| `video-full-youtube-script` | Accepted brief produces eight complete beats and 213 narrated words, with supported create/start/pause/resume behavior and explicitly estimated timing. |

The foundation attempt also read the globally installed Ponytail entrypoint outside its local-only fixture boundary. This is retained as a host/fixture deviation; it prevents a clean isolation claim even though the clarification criteria pass and no fixture changed. The changed skill did not request that read. No broader isolation or whole-collection reliability claim follows from these cases.

Evidence uses Codex CLI 0.162.1 and native `gpt-6.1-sol`, with 240-second bounds. Reviewer model identity is unknown. Initial records are private in `/tmp/skills-clarity-{media,engineering,ready}-20261011`; corrected records are in `/tmp/skills-clarity-{brainstorm,evaluation}-recheck-20261011`. The returned assessment and exact criterion/session ledger are `/tmp/skills-clarity-review-20261011.md` and `/tmp/skills-clarity-criterion-ledger-20261011.json`, with initial versions preserved separately. These local files are not public attachments.

Package checks cover 68 skills / 105 resources; TypeScript/Biome, 97 tests with 1,244 assertions and whitespace checks pass. Four changed skills have bounded behavior evidence; the other nine entrypoints have source review only. This pass does not establish live answer capture across sessions, automatic activation, a previous-version comparison, media production or provider integration. Exact installation, final CI and published release proof belong in the delivery PR.


## 2026-10-11 — Priorities through reviews and fixes

This patch applies repository-defined priority labels and meanings, falling back to P0 critical, P1 high, P2 normal and P3 low for actionable findings and repairs. It preserves finding IDs, ratings and rationale through rechecks and handoffs, records evidence-based reprioritization, and keeps priority separate from severity, confidence, readiness and authority. Conditional critique/repair guidance leaves clean copy and media free of issue lists. Five fixed cases bring the read-only catalog to 69.

Independent reviewer `/root/review_priority_conventions` found one P2 source omission: five explicit standalone critique/repair owners lacked the convention. `write-website-copy`, `write-interface-copy`, `edit-video`, `create-motion-video` and `improve-team-workflow` were corrected and independently rechecked. The final source review has no remaining blocker. All **five text cases / 16 fixed criteria pass**, with complete native calls/results inspected independently of the author. Reviewer model identity is unknown; executor sessions report Codex CLI 0.162.1 / `gpt-6.1-sol`.

| Case | Observed result |
| --- | --- |
| `priority-review-defaults` | Unsupported plan promise is P1; bounded wording polish is P3; rationale and correction follow supplied facts. |
| `priority-feedback-local-scale` | NOW/LATER and finding IDs survive; claimed patch completion does not close the required export check or grant execution authority. |
| `priority-revisit-evidence` | F-07 retains its former P1 and recommends P3 from the corrected impact/workaround, without claiming tracker changes or performed validation. |
| `priority-website-critique` | Standalone website critique returns bounded P1 findings and corrections; headline/CTA share a cause, while unsupported reassurance is distinct. No replacement hero or publication. |
| `priority-media-repair` | Required negation repair remains F-01/P1 ahead of optional F-02/P3 pacing; actual playback and post-fix review stay pending. No media execution. |

The base is released commit `675932745577dd5339e624fd47023c0a76710d28`. Package snapshots: initial `3ef84cdd8dc6c3e2a9cd73fa62bbd0676c37bf7aedb9297c1d00dde1a1d685dc`; website correction `c393629a603ee21aeef85b4dc2da3919d0cd69473eb4aa78d961c4aa81e1d60c`; final `7ef2f0ce0f2d8b3ce66637fa1193fb4c40be969b6eff51e357e01f6553ca18f8`. These identify dirty package contents, not the base commit. The reviewer matched all tested leaves and unchanged criteria to final source. All five executions completed within their 240-second bounds, without timeouts, fixture changes or observed boundary violations.

Private evidence remains in `/tmp/skills-priority-{defaults,local-scale,website,media}-20261011`; the returned assessment and criterion/digest ledger are `/tmp/skills-priority-review-20261011.md` and `/tmp/skills-priority-criterion-ledger-20261011.json`. They are local evidence, not public attachments. Package/type/lint checks pass for 68 packages / 105 resources; 97 tests pass with 1,285 assertions, and whitespace/title checks pass. A direct Biome command on the fixture JSON processed no files because that path is outside its configured scope; the normal check and fixture integrity tests passed.

Five changed leaves have behavioral evidence; the remaining changed entrypoints have source review only. No baseline comparison, general reliability rate, automatic activation, live media/provider operation or production acceptance is established. Exact installation, CI, merged-source and published-release verification are recorded separately in the delivery PR.
