# Measuring a performance change

Use the existing profiler or benchmark that can answer the question. Keep raw samples or a useful summary so reviewers can assess the claim; do not build a general benchmark system for one change.

## Select a signal

| Problem | Inspect | Preserve and count |
| --- | --- | --- |
| Slow request or background job | End-to-end latency, relevant percentiles, trace spans, queue/dependency waits | Completed work, failures, timeouts, retries, authorization and output correctness |
| Slow data access | Representative query plan, examined/returned data, round trips, lock waits | Same filters, tenant scope, ordering, data distribution and concurrent writes |
| Unresponsive interface | Actual journey, input-to-visible-result timing, frame/main-thread trace | Same viewport/device, input method, visible content, accessibility and supported states |
| Excess memory or resource use | Comparable steady-state/peak use, allocation/lifetime evidence, sustained workload | Same useful work, duration, retained state, cleanup behavior and resource limits |
| Cost concern | Observed resource quantities and utilization for a defined workload | Current dated price assumptions, useful-work volume and costs shifted to other services |

Pick the relevant row, not every metric. Verify version-specific profiling commands and vendor pricing in primary documentation before relying on them. A query-plan tool may execute the query; understand its side effects before using it against live data.

## Make the comparison valid

Record baseline and candidate identities, exact procedure, dataset/fixture, request mix, concurrency, relevant runtime/device/configuration, cache/warm-up policy, run duration, and repetitions. Keep these stable or explain why the comparison cannot establish causality. Protect private data in traces and profiles.

Separate cold-start and warm behavior when both matter. Use enough repeated samples to expose the noise relevant to the claim; include spread and sample count. Tail-latency claims need a sample population that supports the percentile, not a tiny average relabeled as p95. Do not silently discard errors, timeouts, outliers, or slower runs. State exclusions and their reason.

Pair speed with useful-work correctness and completion. Check representative inputs, output/ordering invariants, authorization boundaries, freshness, retry/failure behavior, and newly introduced cache or concurrency risks as applicable. If a queue moves work out of a request, measure time to the result users actually need. If processing fewer requests lowers latency, retain the error rate and completed throughput in the comparison.

## Report the result

| Criterion | Baseline | Candidate | Conditions and coverage | Outcome |
| --- | --- | --- | --- | --- |
| Named target with units | Observed value, spread, samples, revision | Same measures and candidate identity | Workload, environment, errors, correctness check and evidence | Demonstrated / failed / inconclusive |

Include absolute values as well as a ratio or percentage when useful. Explain trade-offs such as higher memory use, delayed completion, or reduced freshness. A result from one fixture or environment does not establish production capacity. Carry the summary and useful redacted trace/report links into authorized PR work; do not represent a local file as an uploaded artifact.
