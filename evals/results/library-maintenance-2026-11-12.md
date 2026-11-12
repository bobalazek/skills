# Library maintenance review, 12 November 2026

Gate: **pass with follow-ups** for the bounded source and tooling review. This is not a release, automatic-activation or whole-library behavioral certification.

## Scope and source

The request was to review the whole collection, examine recent additions, improve supported inconsistencies and keep discovery documentation current. The follow-up explicitly requested repository instructions requiring the affected files to be maintained whenever a skill is added, removed or changed.

Reviewed base: `35d3a8a17d88e066b9464b4c3d9e09a07f10a85e`, with the local maintenance changes. All **71 entrypoints and 71 Codex metadata files** were inspected across seven domains; references, catalogs, workflows, matrices, recent diffs and existing evidence were inspected as relevant. Recent work includes project-local skill creation, launch-video handoffs, short-video/persona selection and motion/sound checks. No new package was justified: existing owners cover the identified work.

The two candidate-only execution sets used the same package snapshot digest, `d9498d5e2b8c16e69b2479abd453fbea25857d648f8bf988d899de63b43e1d6e`. The base commit alone does not identify that dirty candidate; the retained snapshot does. Maintainer documentation continued changing after snapshot capture without changing those skill packages. Codex CLI was `0.167.2`; retained native turn context identifies `gpt-6.1-sol`. Each selected case ran once with a 150-second execution timeout in a separate disposable read-only fixture. No baseline was run.

## Findings and treatment

| ID / priority | Evidence and consequence | Treatment |
| --- | --- | --- |
| L-01 / P2 | The old validator required only a link from any domain catalog; missing router entries, wrong owning catalogs and stale current README counts could pass | Validate owning catalogs, one primary route per package/domain, unknown/duplicate routes and README counts in the existing command; test actual invalid and legitimate cases |
| L-02 / P2 | `map-user-flows`, `create-carousel` and `create-presentation` lacked an explicit wait boundary for consequential unanswered choices required by `docs/authoring.md` | Add a scoped wait for dependent work, preserving accepted/delegated decisions and independent inspection; add unresolved and settled-choice recipes |
| L-03 / P2 | The short-video catalogue turned YouTube's active-claim rule into a blanket third-party-asset duration limit | Distinguish actual claim status, asset rights and track limits using [YouTube Help](https://support.google.com/youtube/answer/15424877?hl=en-SD), checked 12 November 2026; add a cleared-versus-claimed recipe |
| L-04 / P3 | The router's voice boundary sent standalone script wording to Media despite Content owning that output | Name `write-video-script` for standalone narration wording; retain integrated production wording with the media owner |
| L-05 / P3 | Some packages had no request example in their own domain workflow guide; the router map was less visible from the README | Fill the missing examples, add map links and its self-routing row, and document exact maintenance locations in `docs/authoring.md` with root `AGENTS.md` discovery |
| L-06 / P2 coverage opportunity | None of Product's six packages had an owning read-only recipe | Add one synthetic boundary case per Product owner; do not infer a package defect or behavioral pass from missing or added recipes |

Sixteen new recipes bring the inventory to **100 recipes across 41 owning skills**, including nine implicit requests. The inventory-count test checks the documented counts against the actual files. Recipes remain distinct from executed and assessed evidence.

The independent code review found two defects in the first guard candidate: compact Markdown rows bypassed validation, and fenced examples could satisfy a missing live row. Both were corrected using the installed Bun Markdown parser and independently rechecked with compact-row and backtick/tilde-fence regressions.

## Deterministic checks and review coverage

`bun run check` passed package validation, TypeScript and Biome. `bun test` passed **115 tests and 1,576 assertions** across eight files; `git diff --check` passed. The final guard hash is `fe40f0e8f979b9faca861f5ddae732c2061b2f89fd0cf35644aab104f5dc6d91`; its test hash is `10f0a4e28646cb420a843934e382e7e843f5e7315b643f3234cadb9c74110a70`. The independent final guard/inventory recheck passed 53 focused tests and 961 assertions.

| Category | Coverage and outcome |
| --- | --- |
| Conventions and consistency | Reviewed: entrypoints/metadata, package ownership, inventories and maintenance rules; supported discrepancies corrected |
| Requirements and intent alignment | Reviewed: full-library source review and explicit ongoing documentation requirement covered; no new package justified |
| Correctness and regression | Reviewed: guard invalid/valid boundaries and selected skill trials; incomplete attempts remain visible below |
| Architecture and maintainability | Reviewed: extended existing validator/tests and owners without a generator framework or dependency |
| Data, API and compatibility | Reviewed for package names, standalone references and tooling consumers; consumer-client installation not rerun |
| Testing and verification | Reviewed: deterministic suite, fixture integrity and selected independent criterion assessment; wider behavior remains untested |
| Security and privacy | Reviewed for trial authority, session association and package instruction boundaries; no production credential/security audit |
| Performance, reliability and scalability | Untested as a measured property; timeout outcomes retained without inferred reliability claims |
| UX, QA, accessibility, SEO and content | Reviewed at the instruction/prose boundary; rendered interfaces, accessibility results and user studies not exercised |
| Operability, observability and release safety | Not applicable to a deployment: no release or runtime service changed |
| Dependencies, tooling and docs | Reviewed: existing Bun/CI integration, unchanged dependencies and synchronized discovery/evaluation docs |

Conditional lenses: agent-authored instructions/code, source evidence, code complexity, domain ownership and change shape were triggered and reviewed. Live billing/auth/data flows, migrations, webhooks, jobs, feature flags, analytics collection, localization, compliance, provider integrations and deploy sequencing were not changed; fictional fixture subjects do not imply those production lanes were exercised. Scope alignment is aligned. Project review memory was not initialized or applied. No unresolved owner decision or release approval is claimed.

## Independent assessments

| Reviewer | Fixed scope / returned assessment |
| --- | --- |
| `/root/review_engineering` | All 28 engineering entrypoints, 28 metadata files, 41 references and three portable helpers at the base; no confirmed P0–P2 source defects. Independently challenged and rechecked the guard, new recipes and documentation changes; both guard findings resolved |
| `/root/review_media_productivity` | All eight media and 13 productivity entrypoints and metadata, relevant references/history/docs; returned the production-wait and Shorts findings, then independently rechecked the changed instructions, router, maintenance requirements and count test |
| `/root/review_product_design_content` | All 22 Product, Brand, Content and UI/UX entrypoints and metadata, 28 references and relevant docs; returned the flow-boundary, Product recipe gap and narration-route findings. Authored the Product fixtures, subsequently checked by the coordinator and engineering reviewer |
| `/root/assess_skill_trials` | Assessed raw requests, inputs, criteria, actual outputs and traces/native records separately from the instruction changes; criterion results and remaining gaps are recorded below |

Independent source review is distinct from executing a skill. Trial authors' claims of review were checked against actual returned assessments where present; a successful host command alone was insufficient. The assessor initially compared raw request bytes with the runner's JSON-encoded request digest; after inspecting the implementation and recomputing the encoded digest, it retracted that provenance concern.

## Executed criteria

The independent evaluator returned **21 criterion passes across nine completed cases**. Two attempts timed out, leaving six criteria **not checked**; no criterion failure was demonstrated. Both runner commands exited nonzero because their failed attempts are retained. These are bounded candidate-only observations, not an improvement or reliability rate.

| Case | Assessment |
| --- | --- |
| `route-narration-wording` | 2/2 criteria pass: standalone narration owner; routing only |
| `route-collection-maintenance` | 2/2 pass: scoped repository repair through the available owner; no project-skill creation or execution |
| `flow-unsettled-refund-authority` | 2/2 pass: asks consequential questions and leaves dependent branches pending |
| `flow-settled-refund-authority` | 2/2 pass: preserves accepted/delegated policy and marks the map as an unreviewed draft |
| `carousel-unsettled-delivery` | Timed out after approximately 150 seconds, exit 137/SIGKILL; 2 criteria not checked; partial trace retained |
| `carousel-delegated-outline` | 2/2 pass: requested four-panel text outline/transcript without export or compatibility claims |
| `presentation-unsettled-delivery` | 2/2 pass: asks delivery/format questions and explicitly waits before dependent production |
| `presentation-delegated-outline` | 2/2 pass: requested asynchronous outline, accepted choices reused, no production |
| `shorts-cleared-versus-claimed` | 3/3 pass: distinguishes claim/provenance/rights and qualifies unverified live rules/upload evidence |
| `product-metrics-deadline-boundaries` | Timed out after approximately 150 seconds, exit 137/SIGKILL; 4 criteria not checked; partial arithmetic trace is not completion |
| `product-usage-maturity-and-event-change` | 4/4 pass: 7/15 pooled retention, immature cohort excluded, changed event semantics separated and no causal claim |

Raw execution evidence remains private in `/tmp/skills-library-audit.KMHed8/trials` and `/tmp/skills-product-audit.g4uz6q/trials`; these paths are local records, not public attachments. The assessor verified request identities using the runner's SHA-256 of JSON-encoded strings and source identities against the retained snapshot. The current skill-package digest still matches both tested snapshots.

The two outline cases claimed independent review. Both have actual returned child assessments tied to their drafts. The presentation review found a minor unsupported inference in draft r1; draft r2 corrected it and received a returned recheck. The assessor retained only the exact fixture-associated child sessions privately, verified native thread/cwd association and file mode 0600: carousel reviewer thread `01a1cf99-59b5-74d1-94f2-a7a8d240b7d2`, SHA-256 `c97f88d4827d56af7eb57d3523507be5d2f023a57145122e8f94aa6e598b69ae`; presentation reviewer thread `01a1cf9a-a3d5-7100-b124-ec65eac83ad9`, SHA-256 `ef4fc0f814ee9b3e8de02e3dc4c0b7dda3d709f0a529040e132151e088f6dc55`. No unsupported review or completion claim remained in the completed cases.

## Remaining coverage and limits

No production media rendering/listening, consumer installation, live publication, credential discovery or provider integration was performed. The Shorts source check is a bounded correction, not a fresh verification of every external link or platform claim. Explicit skill invocation does not establish automatic activation. Candidate-only trials cannot establish improvement over a previous version or reliability across requests.

Priority follow-ups are persona/format and launch-readiness boundaries, motion-event/loop/decoded-audio checks, monitoring receipt, dependency runtime compatibility, migration recovery preserving later writes, and board/decision/status/handoff scenarios. Thirty owning skills still have no read-only recipe; absence of a recipe does not imply a defect, and recipe ownership does not establish execution coverage.

The structural guard checks inventory relationships and counts, not the semantic quality of every description, handoff or specialist matrix. The README's leading count paragraph and domain table remain the maintained current-summary convention; historical releases and evaluations retain their original facts. No global skill installation, new dependency, release, PR or remote mutation was part of the source-review phase described above.

## PR delivery follow-up

The owner subsequently authorized committing and merging these fixes through a separate PR. [PR #70](https://github.com/bobalazek/skills/pull/70) initially contained candidate `f8e042b83144c38a7e946e4a3c74a2878cdec186`; its skill-package digest remains the tested snapshot above.

Fresh-context reviewer `/root/final_pr_review` independently inspected the complete candidate, raw retained evidence and guard counterexamples. It found **FPR-01 / P2**: after the last package in a domain was removed, a stale README count for its retained catalog could pass because validation visited only domains still containing packages. The correction also validates domains listed in the current README. Regressions reject a stale count of six while allowing an explicitly empty retained catalog with count zero.

The reviewer independently rechecked FPR-01 as resolved, running `bun run check` and 55 focused tests with 963 assertions; no other confirmed blocker remained. The corrected checker SHA-256 is `3daa210ba32c133573c968fb2d6f7200fb5958f7a9387aa8fd426e9df4a4c69e`, and its test hash is `b1ed2b8c07d8f41b5f48f02260859a8ad17a3d5718bda2c290d3fd423196ace0`. Coordinator validation passed `bun run check`, **117 tests / 1,578 assertions**, and `git diff --check`. This maintainer-only correction changes no skill package, so the prior behavioral evidence remains applicable with its original limits, including the two timeouts. No new version or tag publication was requested.

## PR description and observation correction

[PR #72](https://github.com/bobalazek/skills/pull/72) reduced the default description to Summary/Testing and made substantive risk/rollout requirements optional. The corrective candidate restores those concerns, adds merge prerequisites and delayed/resource/cost observation guidance, and gives `explain-pr` one canonical template with a checked GitHub mirror and seven fictional worked examples.

Four candidate-only synthetic cases ran once each with Codex CLI 0.167.2, host-default selection and a 240-second bound. Retained native records identify `gpt-6.1-sol`; all four exited successfully with unchanged fixtures. Their recorded snapshot was based on `e0ac4ed` plus the working changes introducing the portable template and monitoring/cost guidance. The retained manifests identify that snapshot separately from the commit. The worked examples, their entrypoint link, summary/change-outline clarification, a template prerequisite clarification, observation prose deduplication and criterion spacing followed capture; those additions received source review, not behavioral execution.

The independent evaluator assessed the raw requests, criteria, outputs and traces, returning **13/13 criterion passes**:

| Case | Observed outcome |
| --- | --- |
| `pr-description-preserve-rollout-recovery` | 4/4: full description, supplied versus missing proof, backend prerequisite and stored-data recovery limit retained |
| `pr-description-small-doc-required-applicability` | 2/2: brief applicability statements without invented operational work or personally executed checks |
| `pr-metered-cost-and-resource-risk` | 4/4: measured staging memory separated from unknown provider cost; spend decision, nightly activation, billing delay and recovery limits retained |
| `rollout-delayed-night-job-observation` | 3/3: actual overnight run and morning checkpoint retained; delayed verification pending, with no deployment, scheduling or monitoring promise |

The canonical template was actually loaded in the description trials. Independent source review found a missing UI-example observation window/checkpoint; the example was corrected to a bounded check within 30 minutes of deployment. The mirror guard rejects missing, non-file and divergent mirrors and accepts the exact copy. Coordinator checks passed `bun run check`, **118 tests / 1,670 assertions** and `git diff --check`.

These results establish bounded instruction behavior and template consistency. They do not establish automatic activation, example-file influence on generated output, live provider charges, deployment, production observation or rehearsed data recovery. Earlier results and unsuccessful attempts above retain their original limits.
