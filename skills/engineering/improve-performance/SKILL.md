---
name: improve-performance
description: "Investigate and improve a measured latency, throughput, memory, rendering, or resource-cost problem while preserving required behavior and comparing representative before/after evidence."
---

# Improve performance

## Use this skill

Use this for a latency, throughput, memory, rendering or resource-cost problem that needs measurement and a bounded improvement. Return a supported diagnosis for investigation-only work, or a repair with comparable before/after evidence when implementation is authorized. Reuse an accepted target, profile and workload whose conditions still apply.

Use `diagnose-issue` for an unexplained functional failure, `find-improvements` to select an opportunity, or `design-architecture` for an unresolved structural choice. A performance task does not authorize a platform replacement or live load test.

## Define the problem and baseline

Identify the affected user task or workload, current symptom, accepted target, and constraints. Inspect local instructions, relevant code/callers, existing traces, and checks. Separate an observed regression from a hypothetical scaling concern. For a new project, measure a representative implemented path or prototype; do not add caches or distributed infrastructure for traffic that has not been established.

Choose a metric that describes the problem and a correctness guard that an optimization must preserve. Record baseline revision, input/data size, concurrency, device/runtime, relevant configuration, cache state, measurement procedure, and failed work. Reuse existing instrumentation before adding a harness. If no baseline is available, establish one safely or report the missing evidence; do not invent an improvement target or result.

Use [the measurement playbook](references/measurement.playbook.md) when selecting signals or comparing measurements. Before experiments, establish the authorized environment and resource limits; expensive tests, production writes and customer-data exports need their actual authority.

## Locate and change the constraint

Trace where time or resources are spent across the real path, including waiting, queries, dependencies, rendering, and background work where relevant. Test a specific hypothesis before choosing a fix. A slow function in isolation may contribute little to the user's delay; a faster response that defers the same required work needs an end-to-end completion check.

Prefer the smallest change supported by the profile: remove unnecessary work, reduce transferred or retained data, or fix the demonstrated access path. Evaluate batching, concurrency, caching, scheduling, or infrastructure changes only when the observed constraint justifies them. Preserve ordering, permissions, freshness, durability, and failure semantics. For a shared change, check affected consumers and boundary cases.

Change one meaningful factor at a time where practical. Preserve the benchmark procedure and workload; if they must change, rerun the baseline under those conditions. Do not report a faster sample caused by dropped requests, missing work, stale data, reduced quality, or smaller inputs as an equivalent improvement.

## Verify the improvement

Repeat the relevant measurement under comparable conditions and inspect variation, error/timeout counts, correctness checks, and any shifted resource cost. Include a representative end-to-end check alongside a narrow benchmark when the claim concerns a user flow. If results are inconclusive or another constraint dominates, report that outcome and avoid retaining unsupported complexity merely because it was implemented.

For visible changes, inspect and capture relevant rendered states; a screenshot alone cannot demonstrate latency. Finish when the scoped target and preservation checks are demonstrated, or name the unresolved measurement or decision. Do not turn inconclusive measurements into a success claim.

Before acceptance, have a separate agent in fresh context challenge the result against raw accepted requirements, baseline/candidate artifacts, measurements and correctness evidence, without the author's conversation or preferred conclusion. Ask it to test comparability, missing work and shifted costs. Reconcile findings and independently recheck affected results after fixes. Retain the returned reviewer/session identity, evaluated revision, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

## Return the result

Match the requested audience, tone and depth, then project conventions. Report the outcome and purpose, baseline/candidate revisions, procedure, units, observed values and spread, preserved behavior, failed or unavailable checks, and limits of extrapolation. Distinguish measurements from estimates. Keep durable findings in their existing authorized home. Include useful redacted proof and independent findings when opening an authorized PR, with accessible links or concise inline results; label local-only artifacts and refresh affected evidence after edits.

## Next steps

Use `verify-change` for a named acceptance-proof gap, `review-code` for an outstanding code-risk assessment, `design-architecture` when the measured constraint requires a structural decision, or `ship-change` when proof and reviews support the authorized delivery target. Pass the profile, tested revision, preservation constraints and unresolved prerequisite. Check skill availability and describe the plain action when absent. Stop at the requested result or continue already-authorized ready work; do not restart completed investigation or add follow-up work without a reason.
