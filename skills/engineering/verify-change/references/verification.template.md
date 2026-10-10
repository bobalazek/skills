# Verification evidence

Use the project's existing result or PR format. Include only sections that support the change's claims; keep large logs and recordings in the approved artifact store.

## Context and outcome

- Requested result and material acceptance criteria.
- Baseline and tested revision/artifact; identify uncommitted changes when present.
- Environment and relevant versions, fixture, role, configuration, and observation time.
- Demonstrated behavior, failures, and required checks still unavailable.
- Independent evaluator, candidate reviewed, counterexamples checked, findings and resolution; keep human approval separate.

| Criterion | Check and expected observation | Actual observation | Result | Evidence |
| --- | --- | --- | --- | --- |
| Existing criterion ID or behavior | Runnable command or reproducible interaction | Observed output, state, or value | Demonstrated / failed / not checked | Inline excerpt or verified artifact/run link |

Use this table as the completion checklist, including relevant items selected from the loaded checklists. Do not fill it with planned checks presented as results. A criterion may need several evidence types; one valid observation may cover several criteria. Record inapplicable checks with their reason outside the required-criterion rows.

## Select evidence

| Change | Useful proof | Record with it |
| --- | --- | --- |
| Visual layout or state | Baseline/candidate screenshots where a baseline exists | Same route, viewport, role, fixture, state, and capture method; label each image |
| Interaction or accessibility behavior | Steps and observed state transitions, focus/keyboard checks, or a short recording | Starting state, input method, expected/observed result, important recovery path |
| Bug or regression | Reproduction and repaired result; a regression test where useful | Original failure evidence, candidate outcome, affected neighboring behavior |
| Performance or cost | Comparable measured values | Units, workload/data size, environment, warm/cold cache conditions, repeat count and spread; separate estimates from measurements |
| Data or migration | Representative records and invariant/reconciliation checks | Fixture/source, counts and relevant invariants, retry/recovery evidence, differences that prevent comparison |
| Build, type, or automated behavior | Command outcome and focused output or CI run | Exact command, exit status, relevant result/counts, tested revision; preserve failure details |
| Spec, docs, or workflow | Scenario walkthrough, consistency/link checks, rendered output where applicable | Criteria inspected, example input/result, changed contracts, unresolved ambiguity |

A picture of a passing terminal adds little when a readable result or CI link carries the same proof. Screenshots cannot establish authorization, data integrity, keyboard behavior, or performance on their own.

## PR evidence

Include this evidence when opening the PR, then update it as the candidate changes. Explain the trigger and before/after behavior, observed checks, and independent review findings and resolution. Put visual comparisons together with labels; use a short before/after video when motion or an interaction matters, and include a regression test that exercises a repaired failure where suitable. Show measured comparisons with units and conditions. State whether a baseline was captured, reconstructed safely, supplied, or unavailable.

Use inline text for short results and existing CI/run/artifact links for larger proof. Verify that links point to the actual result for the tested revision and are usable by the intended reviewers. Note expiry or access restrictions that affect review. Do not invent upload URLs or publish private artifacts to make a link work.

Keep required failures and unavailable checks visible. After a repair, update stale claims and evidence for affected criteria before reporting readiness. PR edits retain the repository's required template and unrelated author content.
