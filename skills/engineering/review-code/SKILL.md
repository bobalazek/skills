---
name: review-code
description: "Review a PR, diff, branch comparison, or bounded codebase for evidenced defects and relevant engineering risks. Produce prioritized findings and coverage; edits require a requested fix scope."
---

# Review code

## Use this skill

Use this for an evidence-backed defect and engineering-risk assessment of a PR, diff, branch comparison or bounded codebase. Reuse accepted requirements and valid proof; review remains observational unless fixes are requested. Use `explain-pr` for established purpose and behavior without an audit, `verify-change` for missing acceptance proof, or `review-interface` for a rendered experience assessment.

Perform the review in an agent with fresh context from the work's author. Supply raw accepted requirements, the fixed candidate, relevant sources and check access without the author's conversation or preferred conclusions. If you authored the work, delegate the review; if independence is unavailable, label the result unreviewed and do not claim the candidate verified or ready. This is the independent assessment, not a requirement for an endless review of reviewers.

## Set the review scope

Identify the purpose, relevant spec/criteria, repository rules and reviewed revision. Read existing documentation and applicable conventions before judging compliance. Inspect the working tree; for changed work, establish the comparison baseline and actual diff. For a codebase review, define surfaces and questions without inventing a diff baseline or implying total coverage. Unknown author intent is a question, not a fact inferred from a patch.

Use valid results from configured static checks before subjective review; run missing applicable checks in check-only mode when available. Their results take precedence on the rules they cover. Keep missing checks explicit and focus manual assessment on uncovered questions, without treating static success as proof of runtime behavior. Route recurring mechanically detectable findings to existing automated enforcement.

For new code, check the requested behavior and foundation assumptions. For an inherited system, also identify existing consumers, data, and contracts the change must preserve.

Load resources by the selected scope:

- For a PR, diff or branch comparison, use [change review](references/change-review.checklist.md).
- For a bounded codebase question, use [codebase review](references/codebase-review.checklist.md); do not load both entry checklists by habit.
- When HTTP APIs, queries, schemas or storage scaling are involved, add [API and data review](references/api-data-review.checklist.md), including real consumers and alternate writers.

## Sequence the review

For a broad or multi-phase review, organize the existing record into scope/baseline, risk inspection, reconciliation and affected rechecks. Use a small dependency graph when branches make the order unclear. Assign distinct questions and coverage to reviewers on the same fixed candidate; scale reviewers by distinct failure risks, not a fixed panel. One independent reviewer can cover a small change.

When selecting an independent reviewer, prefer a different available model or model family where practical and authorized. Follow an explicit project or user requirement for cross-model review; if unavailable, report that unmet gate. Record the host-reported model when exposed, otherwise mark it unknown rather than guessing. Model choice supplements fresh context and distinct risk questions; several agreeing models do not establish correctness.

Parallel inspection requires ready inputs and noninterfering checks. Source readers may inspect separate questions together; runtime checks that reset the same database or mutate shared services, fixtures or working files must be isolated or sequenced. Disjoint review questions alone do not make those checks safe to overlap.

Wait for the required branch evidence before reconciling cross-boundary behavior and issuing the verdict. Phase-local reviews can establish their scoped results, but the combined revision still needs integration evidence and assessment of interactions. Before authorized fixes, verify each claim and keep the requested scope. After fixes, identify affected paths and proofs, rerun their checks, independently recheck the new candidate, then reconcile again. Preserve valid coverage only for unchanged code and criteria, and revise stale findings; missing required evidence remains a readiness gap. Reviews can end with findings without initiating fixes.

## Inspect relevant risks

Trace changed behavior through callers, contracts, data/state, and failure paths. Select relevant correctness, compatibility, security/privacy, performance/reliability, architecture/maintainability, design/convention consistency, duplication, and verification checks from the loaded checklist. Prioritize auth and tenancy, money, sensitive records, destructive operations, migrations, and retry/concurrency paths when present; trace their affected flow end to end. Evaluate accepted local standards separately from observed patterns and subjective preferences.

Establish the blast radius through actual dependencies: the user or system entry point, changed decision, shared consumers, writes or external effects, and visible result. Check isolation boundaries that contain propagation, such as tenant scope, process state, caches, queues or rollout cohorts; a folder boundary, feature flag or separate deployment alone proves no containment. For transaction isolation, use the API and data checklist. Explain the supported affected population and any unknown extent rather than inferring low impact from diff size.

Check for an existing implementation of newly introduced behavior and for duplicated business rules with diverging fixes, validation, or ownership. Compare callers and intentional variants before recommending consolidation. A useful finding identifies the conflicting responsibility, concrete cost or defect, proposed simpler owner, and preservation check; similar syntax or a clone percentage alone is insufficient. For feature or data-layer review, include the relevant schema/query/migration and consumer boundaries without implying a live database audit.

Inspect the supplied verification evidence against the material acceptance criteria. Check the tested revision, relevant environment/state, and whether before/after comparisons use comparable conditions. Open useful artifacts and check what they actually demonstrate; green CI or a screenshot does not establish unrelated behavior. Missing required proof is a readiness gap, not an invented code defect. Run a scoped check when authorized and useful; reuse sound evidence rather than repeat it by default.

## Challenge impact and claimed protections

Evaluate the credible worst failure and reversibility separately from likelihood and severity. Identify the affected users, data and external effects, the detection signal, the recovery conditions and the proof behind them. A code revert may leave writes, published contracts or external actions intact. Carry material limits and recovery gaps into the PR or review verdict; do not label a change reversible merely because it changes a component or includes a down migration.

Try to disprove material behavior claims. Choose a plausible counterexample within supported inputs and conditions, then trace the actual path or run a safe focused check. For example, a successful sequential retry does not prove that concurrent retries cannot duplicate a write. Check the intended result as well as the failure; do not invent requirements to produce findings.

A finding needs an affected scenario, located evidence, consequence, and actionable correction or investigation. Confirm suspected issues against code and available behavior. Keep unresolved material suspicions separate, with the evidence missing and a check that could settle them. Do not report speculative concerns, generic style advice, duplicate symptoms, or already-handled failures as established defects.

## Reconcile and return the assessment

Use [the report shape](references/review-report.template.md). State priority based on impact and credible likelihood, cite the inspected location, and explain whether a finding blocks the requested next step. Distinguish urgent failures, required corrections, and optional adjacent observations; omit unsupported nitpicks. Include coverage, commands/observations, and unavailable checks. A clean inspected area is not proof that uninspected code is correct.

Reconcile evidenced disagreements and deduplicate findings; agreement cannot override a demonstrated defect. Retain each returned assessment with reviewer/session identity, evaluated revision, findings and coverage before claiming review. An attempted delegation, empty wait or author check is not an independent assessment.

Match the requested audience, tone and depth, then project conventions. Lead with material findings or a blocking proof gap, followed by purpose, method, evidence and limits. Update the existing authorized review/knowledge record rather than creating another summary. For human PR review, include useful before/after proof, checks and independent findings with their resolution or remaining gaps; refresh affected artifacts after edits. Preserve required human approval and requested stop points.

## Next steps

Choose the action justified by the verdict: `diagnose-issue` for an uncertain suspected defect, `implement-change` for selected authorized fixes, `verify-change` for missing behavioral evidence, `automate-code-checks` for an accepted recurring rule needing enforcement, or `ship-change` when ready and delivery is requested. Pass the candidate revision, findings, proof and unmet prerequisite. Check skill availability and describe the plain action when absent. A review can finish with its report; do not restart valid reviews, initiate fixes or search for improvements merely because another skill exists.
