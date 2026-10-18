# Engineering hardening, 18 October 2026

This records bounded trials of the engineering/interface guidance correction, not a collection-wide reliability result. The four recipes are in [engineering](../cases/engineering.json) and [UI/UX](../cases/ui-ux.json). Executors received raw requests and synthetic artifacts; expected criteria stayed with the evaluator. Each case installed only its complete owning package and used a fresh read-only project/session.

## Independent observations

Reviewer `skills_behavior_review` inspected requests, command results, final responses, retained native sessions, package copies and fixture bytes. Codex CLI 0.163.0 used its default model; native traces identify `gpt-6.1-sol`. The reviewer's exact model was unavailable. Each case has four behavioral criteria; execution exit 0 alone does not establish them.

| Case | v0.5.0 baseline | Original candidate |
| --- | --- | --- |
| `verify-repeatable-integrations` | C1–C4 pass | C1–C4 pass |
| `review-history-cursors` | C1–C4 pass | C1–C4 pass |
| `review-loaded-interface` | C1–C4 pass | C1–C4 pass |
| `review-federation-upload-boundaries` | C1/C3/C4 pass; C2 partial fail | C1/C3 pass; C2/C4 partial fail |

Both original security variants diagnosed tenant/account linking, unsigned byte length and lost erasure locators. C2 failed because neither required the explicit accepted/shorter/longer persisted-object integration matrix. Original candidate C4 failed because it read a host-global skill outside its fixture; no external call, mutation or delegation was observed. The host does not isolate inherited instructions, and these traces do not establish patch causality.

The first security recheck (`af9805f…`) added the body/persistence matrix but ambiguously grouped exact-length bodies under rejection: C1/C3/C4 pass, C2 partial fail. A second recheck (`03b9660…`) met C1–C4 for the fresh-key fixture. Separate source review then found that universal object-absence wording could wrongly reject overwrite/quarantine contracts. That P2 was corrected before release; the fixture cannot establish those broader lifecycles.

The portable `f7be56b…` and explicit-per-case `8c2e80f…` blind rechecks each passed C1/C3/C4 but partially failed C2: exact success/readback and mismatch rejection were explicit, yet the final plan still omitted persistence inspection after rejected bodies. The actual guidance was read; loading was not counted as output compliance. A separately labelled, 180-second assisted continuation of the 8c session closed that missing paragraph after reviewer feedback. Its 43.880-second successful correction does not turn the blind failure into a pass.

The final reporting candidate `ed621c4…` explicitly retains unrun accepted/rejected persistence checks in the remaining proof plan. Its fresh blind recheck independently passes C1–C4 with unchanged criteria: exact success/readback, validly framed shorter/longer rejection, and object plus pending-row state after both outcomes are explicit. Reviewer `skills_behavior_review` verified the complete native trace, snapshot and unchanged fixtures; exit 0 in 179.044 seconds, no timeout or scope breach. All thirteen blind executions completed; the separately recorded assisted continuation is not substituted for blind acceptance. Each snapshot has only one attempt in this tuned regression.

All attempts and failed probe launches are retained. Read-only shell heredoc launches sometimes failed when temporary-file creation was denied; subsequent in-memory probes succeeded. No failure was converted into a passing command. Relevant skill/reference reads were observed in native traces. Local source doubles and nominal-color calculations remain distinct from actual service or rendered proof.

## Fixed identities

The runner's package SHA-256 identities cover its recorded snapshots:

| Snapshot | Source | Package SHA-256 |
| --- | --- | --- |
| Baseline | `35d25a8f73cc3fd0010de8383cd0fdf2943711e9` | `5cd212dc6ad8632cc8334b1f112e8d1a0e13126c5bb3f40c14cfc64330d085c4` |
| Original candidate | Same HEAD with six modified references | `2db09f98549f0f8b37941bf84ca99c6ea9a60bcdbf7279cc53fec2fd76651bbc` |
| First security correction | `af9805f1b2e31b80eb92e9a152152656be11023a` | `9b2f7129e2dce93ed68aa1b4a5ef16cba6afb43cfed4f765bf9397f5618cf63f` |
| Intermediate security correction | `03b9660de6dce2d96160d23d789a25fbaa0311c8` | `4f4481912f2d3ca888719769e78c2f1a4fc7a0b48dc6f0d7393ecbe6eae622dc` |
| Portable intermediate | `f7be56b36abc0919ab39dbc64df1ad524969a591` | `b7775def79c42587dc9eb45b08038a4490128fec06ed73d4269c7ad15406362a` |
| Per-case persistence candidate | `8c2e80f111675cb66a6a565a480267978a0682be` | `4989eef84239b2714cf53af9da307945c4b96ccc56773d927d4ad5eb732a669a` |
| Final reporting candidate | `ed621c490c878e3b51aa935008d2a45df6dfc60f` | `ada5c798d327e745ed53a6ea0ef85f6283de53f2014b7906d9607cb16003320f` |

Final source reviewer `skills_patch_review` inspected the complete diff against v0.5.0, fixtures, local probes, inventory and privacy/compatibility. The overwrite/quarantine P2 is closed; no source blockers remain. Assessed diff SHA-256: `c2a7c91407c728115742d1560d3e419a074d9d368e7ca6400c07f24e55f40102`. The other four changed packages are byte-identical to their original trial snapshots, so their unchanged proof is reused; performance guidance received source review but no dedicated behavioral trial.

Package/link/standalone checks, TypeScript and Biome passed. The 100 tooling tests passed with 1,421 assertions; those tests validate tooling and fixture integrity. Clean final-candidate installation verified 70 complete packages / 250 identical files, using skills CLI 1.7.0, Codex CLI 0.163.0 and OpenCode 1.18.31. Installation manifest SHA-256: `6b250d9223c6391d928d31a3739a2a8c66e4e91937c8106277b62b119f73ee5e`; this uses the installation helper's separate manifest format.

No live IdP/storage/database/queue, runtime configuration, rendered browser/keyboard/scroll journey or production load was exercised by these synthetic trials. This is a tuned regression, not a held-out quality estimate. No automatic activation, general superiority, other model reliability or OpenCode task behavior is established. Raw host transcripts remain private local evidence rather than public attachments. Publication identity, full CI and consumer verification belong in the delivery PR/release record.
