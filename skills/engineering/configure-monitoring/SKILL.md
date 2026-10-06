---
name: configure-monitoring
description: "Configure or tune service monitoring and actionable alert routes, with observed signal, firing, delivery and recovery evidence. Use diagnose-issue to establish an existing failure's cause."
---

# Configure monitoring

## Use this skill

Make selected failures detectable and actionable in a named service/environment. Reuse existing instrumentation, monitoring providers, routes and runbooks. Finish at the requested state: a prepared configuration, locally tested change or verified live setup. These establish different things; none promises a continuous watch or staffed response.

Use `diagnose-issue` for an unexplained incident, `design-architecture` for consequential platform choices, or `automate-code-checks` for a recurring coding rule. Product success definitions belong to `define-product-metrics`, and adoption or retention findings to `analyze-product-usage`. Monitoring setup does not replace those procedures or silently include deployment.

## Establish coverage and authority

Read project instructions, current configuration, relevant service flows and operational commitments. Identify critical journeys or jobs, actual traffic, existing signals and gaps, operating owner, accepted objectives, and the available check/apply path. Inspect versions and primary documentation for the tools actually used. New infrastructure needs a demonstrated gap; an existing provider or native platform check may suffice.

Establish the requested environment and stopping point before a write. Local preparation does not authorize production changes, paid services, customer-data export, disruptive fault injection or contacting alert recipients. Honor authorization already given; resolve only missing consequential inputs or authority. Continue independent local work while a live step is blocked.

## Select useful signals

Choose the smallest coverage that detects the scoped user harm or operating obligation. Derive thresholds, evaluation windows and recovery conditions from accepted objectives, observed behavior, job deadlines or resource limits. Do not invent an uptime promise or copy example percentages into production. Record assumptions and unresolved choices; a provisional rule is not an accepted service commitment.

For each alert, record the service/environment, signal and query, threshold/window with its basis, missing-data behavior, severity, destination, responsible owner and response action. Include a runbook or the first useful diagnostic check, plus escalation where the operating agreement requires it. Signals with no useful response may belong on a dashboard instead.

For signal selection, low traffic, background jobs, noise controls or an end-to-end test, load the relevant sections of [monitoring checks](references/monitoring-checks.checklist.md). Preserve working coverage and avoid duplicate instrumentation or alerts for the same symptom.

## Configure within scope

Use the existing configuration format and deployment path. Keep credentials as secret references. Limit collected fields, metric-label cardinality, retention, sampling and ingestion volume to the task and accepted budget. Inspect representative emitted data before export; redacting a report afterward does not prevent telemetry disclosure.

Configure only the selected signals and routes. Keep changes to application health endpoints or instrumentation bounded to the agreed monitoring need; a larger behavior change needs its own implementation scope. Preserve the previous configuration and a recovery action for a bad rule or route. Temporary silences need a scoped matcher, owner and expiry; they must not hide unrelated failures.

Run the available configuration/rule checks. For authorized live changes, inspect current state before applying and read back the result; if a write's outcome is uncertain, inspect before retrying. A saved file alone does not prove the running system loaded it.

## Verify the configured path

Choose synthetic data and an isolated target where possible. Name the trigger, expected evaluation/firing time, destination, recovery condition, maximum test duration and cleanup before the test. Sending notifications needs authority for that destination and test; an existing webhook is not that authority.

Exercise required alerts and distinct routes, reusing valid evidence for unchanged paths. Observe the signal reaching the configured evaluator, the rule firing, receipt at the intended destination, and the cleared state after recovery, including a resolution notification when configured. Also check a healthy or brief-failure case and relevant missing-data behavior. A provider's test message may bypass the rule; provider acceptance or an HTTP success response alone does not prove destination receipt.

Identify the tested revision/configuration, environment, times and actual observations. Local simulation proves only its exercised behavior. If live access, receipt evidence or a required check is missing, state the exact gap and leave live verification incomplete. Restore test state and verify temporary overrides, silences or test resources are removed.

Before acceptance, a separate agent in fresh context must challenge the configuration and proof using the accepted request, candidate revision, raw evidence and check access without the author's conversation or preferred conclusions. Retain reviewer/session identity, evaluated artifact, findings and coverage. Resolve supported findings and independently recheck affected results. Without a returned assessment, report unreviewed and stop before acceptance.

## Return the reached result

Report the configured coverage, authoritative configuration/runbook locations, observed checks and exact remaining gaps at the requested depth. Distinguish prepared, locally tested, applied and live verified states. Keep useful evidence and operating ownership in existing project records; include redacted proof and independent findings in authorized PRs and refresh them after changes.

For missing acceptance proof, pass the candidate and unmet criterion to `verify-change`; use `ship-change` for a separately requested delivery target, `diagnose-issue` for an unexplained observed failure, or `implement-change` for an agreed application repair. Check skill availability and describe the plain action if absent. Continue already-authorized ready work; otherwise finish with the next required input or no follow-up.
