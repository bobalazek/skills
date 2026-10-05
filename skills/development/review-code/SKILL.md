---
name: review-code
description: "Review a PR, diff, branch comparison, or bounded codebase for evidenced defects and relevant engineering risks. Produce prioritized findings and coverage; edits require a requested fix scope."
---

# Review code

Produce one evidence-backed assessment of the selected code against required behavior and relevant local conventions. Review remains observational unless fixes are requested.

## Fix the scope

Identify the purpose, relevant spec/criteria, repository rules, reviewed revision, and comparison baseline. Inspect the working tree and actual diff. For a codebase review, define surfaces and review questions instead of implying total coverage. Unknown author intent is a question, not a fact inferred from a patch.

For changes, load [change review](references/change-review.checklist.md). For broader codebase work, load [codebase review](references/codebase-review.checklist.md). Use the requested scope rather than loading both by habit.

## Inspect relevant risks

Trace changed behavior through callers, contracts, data/state, and failure paths. Apply correctness, compatibility, permissions/security, architecture, simplicity, testing, performance, and operability lenses only where they can reveal a concrete problem. Evaluate local standards separately from subjective preferences.

A finding needs an affected scenario, located evidence, consequence, and actionable correction or investigation. Confirm suspected issues against code and available behavior. Do not report speculative concerns, generic style advice, duplicate symptoms, or already-handled failures as established defects.

Independent reviewers can investigate separate lenses in parallel on a fixed baseline when available; the coordinator reconciles evidence and deduplicates findings. More reviewers and majority votes do not replace verifying a claim.

## Report and verify

Use [the report shape](references/review-report.template.md). State priority based on impact and likelihood, cite the inspected location, and distinguish blocking findings from optional adjacent observations. Include coverage, commands/observations, and unavailable checks. A clean inspected area is not proof that uninspected code is correct.

When fixes are requested, verify each claim before editing, keep the authorized scope, rerun affected checks, and inspect the final revision again. Reuse previous review evidence only for unchanged code and criteria; revise stale findings after implementation changes.

Next: `diagnose-issue` for an uncertain suspected defect; `implement-change` for selected fixes; `find-refactors` for a separate improvement search; `ship-change` when the reviewed result is ready and delivery is requested.
