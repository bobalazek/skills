---
name: verify-change
description: "Evaluate a change against its acceptance criteria using observed checks, screenshots, or comparable before/after measurements, and prepare evidence for review or delivery."
---

# Verify change

## Use this skill

Use this to establish what a selected change demonstrably does against acceptance criteria, returning observed results and usable evidence. Reuse proof whose revision, inputs, environment and criteria remain valid. Use `review-code` for a defect/engineering-risk assessment, `review-interface` for a rendered experience review, or `diagnose-issue` to establish an unexplained failure's cause.

Perform this verification in a separate agent with fresh context from the work's author, using the raw accepted request, constraints, candidate artifacts, relevant sources and check access without the author's conversation or preferred conclusions. Prefer a different available model where practical and authorized; an explicit cross-model requirement left unmet blocks acceptance. If you authored the work, delegate this evaluation; unavailable independence leaves the result unreviewed and blocks acceptance. This evaluation needs no endless review-of-review chain.

## Choose the proof

Read the request, acceptance criteria, local checks, change diff and existing evidence. Identify the baseline and candidate revision, including uncommitted changes. Tie each material criterion to an observable result.

Inspect the project's actual command definitions and CI rules for required lint/format checks, type checking, static analysis, builds and tests. Run missing applicable checks and reuse valid results for the candidate. Record unavailable checks and justified exclusions; a skipped check is not a pass. Use check-only modes where available so verification does not silently rewrite the candidate. Automated checks complement behavior evidence and source review of architecture and conventions.

Choose the smallest check that can establish the claim. A screenshot can show layout; keyboard navigation needs interaction evidence. A build establishes buildability; it cannot establish a repaired workflow. For a spec or documentation change, inspect scenarios, consistency, links, and rendered diagrams where relevant. No screenshot or benchmark is required for a change it cannot evaluate.

Before an authorized edit, preserve the affected baseline when available. For an existing fix, use an isolated baseline checkout or recorded evidence only when it is safe and useful. Do not overwrite the user's work or rerun a destructive failure to manufacture a comparison. New behavior can be checked against an expected result without inventing a historical baseline.

## Establish safe check conditions

Use synthetic or approved data. Inspect artifacts for secrets, personal data, internal URLs and unrelated windows before sharing. Capture only what the claim needs. Verification authority does not imply permission to run production load tests, change live data or upload private evidence.

For phased or parallel work, verify accepted prerequisite outputs before their consumers and the integrated revision after branches join. Independent checks may overlap on a fixed candidate only when their fixtures, services and mutable state are isolated; otherwise sequence them. Reconcile criterion coverage before accepting the result, preserving unaffected proof when a branch fails. A phase-local pass does not prove interactions with another phase.

## Run and capture the relevant proof

Use [evidence selection and reporting](references/verification.template.md) when choosing or recording the evidence types. For feature, journey or release QA, add [test boundaries and risk checks](references/behavior-checks.checklist.md) to select unit, integration, contract and viable end-to-end proof. Acceptance can reuse these checks without a duplicate suite. Derive coverage from the product and changed risks, not a fixed website checklist; missing access or unclear expected behavior remains explicit.

Record the actual command or interaction, prerequisites, input/state, environment, observation and result. Keep failed attempts and changed conditions distinguishable from final results. Compare like with like: fixture, role, viewport, workload and configuration where they affect the claim. Explain unavoidable differences, repeat noisy measurements enough to assess variation, and preserve failures and important neighboring behavior.

### Optional command evidence

For an explicitly authorized command check, the optional [check runner](scripts/run-check.ts), requiring Bun 1.3.9 or newer, records its argv, directory, timings, actual exit or launch failure, and Git state before/after while showing output live:

```text
bun run /path/to/verify-change/scripts/run-check.ts --cwd /path/to/project --out /tmp/check-result.json --timeout-ms 60000 -- bun test
```

Choose the project's actual check and a new output file; run `--help` for usage. The parent directory must exist, and an existing file is refused before execution. Prefer evidence outside the worktree. The record preserves failures and propagates a failing exit; it does not capture output, attest untracked/ignored contents, prove a reviewed commit, or decide acceptance criteria. Inspect recorded arguments and evidence before sharing; no upload is performed.

Choose a timeout appropriate to the command; omit `--timeout-ms` for an unbounded check. A timeout exits 124, and runner SIGINT/SIGTERM exits 130/143, with the actual child result and termination reason recorded separately. Cancellation hard-kills only the direct child; its descendants and external work may continue, and graceful cleanup is not guaranteed. Git observation subprocesses are individually limited to five seconds; unavailable state stays explicit. An incomplete or truncated record has no verified outcome. SIGKILL or a host crash can prevent final capture and leave a live child; inspect and clean up run-owned resources through the project's existing procedure.

## Decide what the evidence establishes

For each criterion, report demonstrated, failed, or not checked, with its evidence and limitations. A failed or missing required check blocks readiness; an optional uninspected surface limits the claim. Do not convert a risk acceptance or tool failure into a pass. When fixes are requested, repair the cause and rerun affected checks; otherwise report the finding within scope.

Record the tested revision and any dirty diff. Later edits require an impact check before reusing evidence; a changed artifact or behavior invalidates its proof. Keep the result in the existing task, PR, or handoff rather than creating a parallel report by default.

As the independent evaluator, try relevant counterexamples and inspect raw proof, reconcile findings, and independently recheck affected results after fixes. Retain the returned assessment with reviewer/session identity, host-reported model (or unknown), evaluated revision, findings and criterion coverage before claiming review. An attempted delegation, empty wait or author check is not an independent assessment. Required human approval remains separate.

## Return the result

Match the requested audience, tone and depth, then project conventions. Report the outcome and purpose, criterion-linked observations, method, independent findings and exact gaps. Update durable facts in the existing authorized knowledge location rather than another summary. Keep failures visible and refresh affected claims and artifacts after edits.

Include reviewer-accessible artifacts or concise inline results in the PR when PR work is authorized. Upload only through an approved repository or host mechanism; verify the returned location and intended access. A local screenshot path is not a PR attachment. If upload is unavailable, keep the local evidence, include useful textual observations and reproduction steps, and state the attachment gap.

## Next steps

Use `diagnose-issue` for an unexplained failure, `implement-change` for a selected authorized repair, `review-code` or `review-interface` for a missing assessment of their respective risks, or `ship-change` when ready for the authorized target. Name the unmet result and prerequisite, and pass evidence with the tested revision; reuse completed valid reviews. Check skill availability and describe the plain action when absent. A verification-only request finishes with its result and recommendation, including failures; continue only ready work already authorized.
