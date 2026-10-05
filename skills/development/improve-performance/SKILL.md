---
name: improve-performance
description: "Investigate and improve a measured latency, throughput, memory, rendering, or resource-cost problem while preserving required behavior and comparing representative before/after evidence."
---

# Improve performance

Resolve the selected performance problem and demonstrate the result. An investigation-only request ends with a supported diagnosis and proposed change; implementation authority permits the bounded repair, not a platform replacement or live load test.

## Define the problem and baseline

Identify the affected user task or workload, current symptom, accepted target, and constraints. Inspect local instructions, relevant code/callers, existing traces, and checks. Separate an observed regression from a hypothetical scaling concern. For a new project, measure a representative implemented path or prototype; do not add caches or distributed infrastructure for traffic that has not been established.

Choose a metric that describes the problem and a correctness guard that an optimization must preserve. Record baseline revision, input/data size, concurrency, device/runtime, relevant configuration, cache state, measurement procedure, and failed work. Reuse existing instrumentation before adding a harness. If no baseline is available, establish one safely or report the missing evidence; do not invent an improvement target or result.

Use [the measurement playbook](references/measurement.playbook.md) for evidence selection and comparison. Keep experiments within authorized environments and resource limits; expensive tests, production writes, or customer-data exports require their actual authority.

## Locate and change the constraint

Trace where time or resources are spent across the real path, including waiting, queries, dependencies, rendering, and background work where relevant. Test a specific hypothesis before choosing a fix. A slow function in isolation may contribute little to the user's delay; a faster response that defers the same required work needs an end-to-end completion check.

Prefer the smallest change supported by the profile: remove unnecessary work, reduce transferred or retained data, or fix the demonstrated access path. Evaluate batching, concurrency, caching, scheduling, or infrastructure changes only when the observed constraint justifies them. Preserve ordering, permissions, freshness, durability, and failure semantics. For a shared change, check affected consumers and boundary cases.

Change one meaningful factor at a time where practical. Preserve the benchmark procedure and workload; if they must change, rerun the baseline under those conditions. Do not report a faster sample caused by dropped requests, missing work, stale data, reduced quality, or smaller inputs as an equivalent improvement.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Verify and deliver evidence

Repeat the relevant measurement under comparable conditions and inspect variation, error/timeout counts, correctness checks, and any shifted resource cost. Include a representative end-to-end check alongside a narrow benchmark when the claim concerns a user flow. If results are inconclusive or another constraint dominates, report that outcome and avoid retaining unsupported complexity merely because it was implemented.

Report baseline/candidate revisions, procedure, units, observed values and spread, preserved behavior, failed or unavailable checks, and limits of extrapolation. Distinguish measured results from estimates. For visible changes, capture relevant rendered states; a screenshot alone cannot demonstrate latency. Keep useful evidence in the existing task or authorized PR with accessible links or concise inline results, redacting sensitive content and identifying local-only artifacts.

Finish when the scoped target and preservation checks are demonstrated, or return the precise unresolved measurement or decision. Next: `verify-change` for missing acceptance proof, `review-code` for the final change, `design-architecture` if the measured constraint requires a consequential structural choice, or `ship-change` for authorized delivery.
