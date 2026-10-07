# Monitoring checks

Use the sections relevant to the selected signal and test. Keep the project's configuration and operating record authoritative; these checks do not require another monitoring platform or a new report.

## Match the signal to the failure

| Surface | Useful evidence | Failure to avoid |
| --- | --- | --- |
| Public entry point | External reachability and expected response/content for a critical path | A homepage returning 200 while the useful action fails; a monitor sharing the same failure domain as its target |
| Online service | User-visible failures, latency and traffic for the relevant operation | A fleet average hiding a broken low-volume path, or an empty denominator reading as healthy |
| Worker or pipeline | Age of oldest pending work, processing delay and successful completion | A running process with stalled work, or queue depth without arrival/processing context |
| Scheduled job | Last successful completion against its deadline, schedule and retry allowance | A success counter that stops increasing but never becomes an alert |
| Constrained resource | Remaining capacity and time needed to intervene | A generic utilization threshold with no consequence or response |
| Telemetry/notification path | Freshness and a bounded check reaching its destination | Quiet dashboards because collection or notification delivery stopped |

Select coverage from the actual requirement; not every service needs every row or every telemetry type. A health endpoint should expose only needed status, have bounded work and avoid state changes. Distinguish process liveness, readiness to serve and dependency health; do not make an optional downstream outage restart every instance.

For an accepted SLO, verify the measured population, good/total event definitions, window and traffic before using error-budget alerts. Low traffic may need a safe synthetic probe or a different agreed rule. Keep synthetic traffic identifiable so it cannot conceal real-user failures. An absent series, missing scrape, delayed export and true zero have different meanings.

For errors, logs or traces, verify service, environment and release attribution with a known event. Sampling, filtering and retention limit what absence can establish; sampled traces alone cannot prove every request succeeded. Source maps, symbols or request correlation are useful only where they improve the selected investigation path.

Name an error's cause only when the observed operation supports it. A broad request-handler catch cannot classify every exception as a dependency outage. Exercise a different failure with that dependency healthy and check that the signal and operator action remain accurate.

## Make alerts usable

- Tie severity to the action and agreed response window. Name the actual owner and route; do not invent round-the-clock availability.
- Check evaluation delay, grouping, deduplication, repeats and recovery behavior against expected incidents. Avoid separate pages for every downstream symptom of one failure.
- Test routing labels, including environment, against the destination. A correct rule can still notify the wrong owner.
- Bound maintenance suppression by scope and expiry. Verify the intended alerts resume and unaffected alerts remain eligible.

## Bound collection and cost

Inspect emitted payloads for secrets, authorization headers, query parameters, personal identifiers and captured bodies before enabling export. Prefer collection allowlists or source-side exclusion; verify the retained diagnostic fields still work. Hashing predictable identifiers is not a guarantee of anonymity.

Use bounded dimensions for metrics, such as known operation or status classes, instead of request IDs, users or raw URLs. Check sample volume, label combinations, retention and existing quotas. Select sampling/filtering with its diagnostic loss visible; do not buy capacity, change data destinations or relax an accepted budget implicitly. A tiny dataset does not justify a sampling subsystem.

## Exercise the actual path

Use the existing rule evaluator, provider validation or local test runner. For an existing Prometheus setup, `promtool test rules` can exercise synthetic input and missing/stale samples; use the installed version's documented format. A homemade evaluator is not proof of the provider's rule semantics.

| Case | Observe and retain |
| --- | --- |
| Healthy input and a brief breach | Expected inactive/pending state; no unexpected notification during the declared window |
| Sustained scoped failure | Known input reaches the evaluator; the actual rule fires with correct labels and useful context |
| Notification delivery | Receipt at the intended destination tied to the alert/test identity; distinguish this from provider acceptance |
| Recovery | Rule clears after the expected delay; resolution reaches the destination when configured |
| Missing or stale input | The declared no-data behavior, including any separate telemetry-loss signal |
| Changed grouping or silence | Intended suppression/deduplication and preservation of unrelated alert coverage |

Test each changed required rule and distinct route, reusing applicable current evidence. For a local-only request, direct the fixture to an isolated local sink and leave external destinations untouched. For a live test, use an authorized synthetic event or supported safe test path; do not cause a production outage to improve the evidence. Declare what any provider test bypasses.

Record the candidate/configuration identity, environment, trigger/input, expected result, timestamps, observed rule state, delivery/receipt evidence, recovery and cleanup. A dashboard should match a known input when its accuracy is claimed. If the safe test path cannot exercise a required stage, report that stage as unchecked. A local pass can complete a local-test request while live operation remains unverified.

## Primary guidance

These sources informed the checks on 2026-10-06. Verify current provider behavior and installed-version commands when applying them.

- [Prometheus alerting](https://prometheus.io/docs/practices/alerting/) covers actionable symptoms, batch freshness and testing the notification pipeline.
- [Google SRE alerting on SLOs](https://sre.google/workbook/alerting-on-slos/) explains detection/reset trade-offs and low-traffic limitations.
- [Prometheus metric and label naming](https://prometheus.io/docs/practices/naming/) explains the storage impact of unbounded label combinations.
- [OpenTelemetry sensitive-data handling](https://opentelemetry.io/docs/security/handling-sensitive-data/) covers minimization, emitted attributes and redaction limits.
- [OpenTelemetry sampling](https://opentelemetry.io/docs/concepts/sampling/) describes cost and information-loss trade-offs.
- [Prometheus rule testing](https://prometheus.io/docs/prometheus/latest/configuration/unit_testing_rules/) documents synthetic rule inputs and expected alerts.
