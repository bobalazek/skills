---
name: review-code
description: "Review a PR, diff, branch comparison, or bounded codebase for evidenced defects and relevant engineering risks. Produce prioritized findings and coverage; edits require a requested fix scope."
---

# Review code

Produce one evidence-backed assessment of the selected code against required behavior and relevant local conventions. Review remains observational unless fixes are requested.

## Fix the scope

Identify the purpose, relevant spec/criteria, repository rules, reviewed revision, and comparison baseline. Read existing documentation and applicable conventions before judging compliance. Inspect the working tree and actual diff. For a codebase review, define surfaces and review questions instead of implying total coverage. Unknown author intent is a question, not a fact inferred from a patch.

For new code, check the requested behavior and foundation assumptions. For an inherited system, also identify existing consumers, data, and contracts the change must preserve.

For changes, load [change review](references/change-review.checklist.md). For broader codebase work, load [codebase review](references/codebase-review.checklist.md). Use the requested scope rather than loading both by habit.

When the scope touches HTTP APIs, queries, schemas or storage scaling, load [API and data review](references/api-data-review.checklist.md). Apply it to the changed feature or selected data layer, including its real consumers and alternate writers.

## Sequence the review

For a broad or multi-phase review, organize the existing review record into scope/baseline, risk inspection, reconciliation, and affected rechecks. Use a small dependency graph when branches make the order unclear. Assign distinct questions and coverage to independent reviewers on the same fixed candidate; parallel inspection is useful only when inputs are ready and checks do not interfere through shared services, fixtures or working files. One independent reviewer can cover a small change.

Wait for the required branch evidence before reconciling cross-boundary behavior and issuing the verdict. Phase-local reviews can establish their scoped results, but the combined revision still needs integration evidence and assessment of interactions. After authorized fixes, identify affected paths and proofs, independently recheck them on the new candidate, then reconcile again. Preserve valid coverage from unchanged areas; missing required evidence remains a readiness gap. Reviews can end with findings without initiating fixes.

## Inspect relevant risks

Trace changed behavior through callers, contracts, data/state, and failure paths. Select relevant correctness, compatibility, security/privacy, performance/reliability, architecture/maintainability, design/convention consistency, duplication, and verification checks from the loaded checklist. Prioritize auth and tenancy, money, sensitive records, destructive operations, migrations, and retry/concurrency paths when present; trace their affected flow end to end. Evaluate accepted local standards separately from observed patterns and subjective preferences.

Check for an existing implementation of newly introduced behavior and for duplicated business rules with diverging fixes, validation, or ownership. Compare callers and intentional variants before recommending consolidation. A useful finding identifies the conflicting responsibility, concrete cost or defect, proposed simpler owner, and preservation check; similar syntax or a clone percentage alone is insufficient. For feature or data-layer review, include the relevant schema/query/migration and consumer boundaries without implying a live database audit.

Inspect the supplied verification evidence against the material acceptance criteria. Check the tested revision, relevant environment/state, and whether before/after comparisons use comparable conditions. Open useful artifacts and check what they actually demonstrate; green CI or a screenshot does not establish unrelated behavior. Missing required proof is a readiness gap, not an invented code defect. Run a scoped check when authorized and useful; reuse sound evidence rather than repeat it by default.

Evaluate the credible worst failure and reversibility separately from likelihood and severity. Identify the affected users, data and external effects, the detection signal, the recovery conditions and the proof behind them. A code revert may leave writes, published contracts or external actions intact. Carry material limits and recovery gaps into the PR or review verdict; do not label a change reversible merely because it changes a component or includes a down migration.

Try to disprove material behavior claims. Choose a plausible counterexample within supported inputs and conditions, then trace the actual path or run a safe focused check. For example, a successful sequential retry does not prove that concurrent retries cannot duplicate a write. Check the intended result as well as the failure; do not invent requirements to produce findings.

A finding needs an affected scenario, located evidence, consequence, and actionable correction or investigation. Confirm suspected issues against code and available behavior. Keep unresolved material suspicions separate, with the evidence missing and a check that could settle them. Do not report speculative concerns, generic style advice, duplicate symptoms, or already-handled failures as established defects.

At least one reviewer must evaluate the final candidate in a separate sub-agent or new clean context from its author. Scale additional reviewers and depth by distinct failure risks. Supply raw accepted requirements, the fixed candidate, relevant sources, and check access; do not supply the author's conversation or rationale as conclusions. The reviewer independently checks proofs and material claims. The coordinator reconciles evidenced disagreements and deduplicates findings; agreement cannot override a demonstrated defect. If an independent reviewer is unavailable, mark the result unreviewed and do not claim the candidate verified or ready.

## Report and verify

Use [the report shape](references/review-report.template.md). State priority based on impact and credible likelihood, cite the inspected location, and explain whether a finding blocks the requested next step. Distinguish urgent failures, required corrections, and optional adjacent observations; omit unsupported nitpicks. Include coverage, commands/observations, and unavailable checks. A clean inspected area is not proof that uninspected code is correct.

For human PR review, carry observed before/after evidence, relevant test/check results, and independent findings with their resolution or remaining gaps. Preserve existing approval requirements and requested stop points; an independent agent review does not replace a required human approval.

When fixes are requested, verify each claim before editing, keep the authorized scope, rerun affected checks, and inspect the final revision again. Reuse previous review evidence only for unchanged code and criteria; revise stale findings after implementation changes.

Next: select the action justified by the verdict, carrying its candidate revision, findings, proof and unmet prerequisites. Use `diagnose-issue` for an uncertain suspected defect, `implement-change` for selected authorized fixes, or `verify-change` for missing behavioral evidence. Use `automate-code-checks` for an accepted recurring rule that needs enforcement, or `ship-change` when ready and delivery is requested. A requested review can finish with its report; do not require another review or improvement search merely because those skills exist. If a selected skill is unavailable, describe its plain action.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.
