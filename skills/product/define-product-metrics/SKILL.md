---
name: define-product-metrics
description: "Define a small measurement contract for a product decision, including metric formulas, data semantics, owners and quality checks. Use for new or existing products; analyzing observed usage and implementing instrumentation are separate work."
---

# Define product metrics

## Name the decision

Turn the requested product question into the smallest set of measures that can change a named decision. Establish the intended user outcome, eligible population, decision owner and when the evidence is needed. A public service, internal tool or occasional task may succeed through completion, reduced effort or avoided harm; repeat use and growth are not universal goals.

Start from the product's purpose and the benefit users should receive, following the purpose-to-measurement approach in [GOV.UK's performance metrics guidance](https://www.gov.uk/service-manual/measuring-success/how-to-set-performance-metrics-for-your-service). Apply the relevant reasoning without importing its government reporting obligations or suggested metric counts.

Read project instructions and reuse the accepted brief, existing metric dictionary, tracking plan, event schemas and relevant queries. Inspect current source behavior where accessible rather than assuming an event name describes what it records. For a new product, mark proposed sources and missing foundations. For an existing product, identify who owns the definitions and which reports or decisions depend on them. Ask only for consequential input that available evidence cannot establish.

Finish with a measurement contract. Use `analyze-product-usage` for conclusions from actual usage, `implement-change` for instrumentation code, or `configure-monitoring` for service health signals and alert delivery. A metric definition does not establish product demand or authorize automatic dashboards, recurring collection or provider selection.

## Choose measures with a use

For each candidate, state what observation would change the decision and why it represents the intended outcome. Distinguish direct outcome evidence from a proxy. A click, visit or account creation needs a supported connection to the outcome; label that connection as an assumption when untested. Drop measures whose movement would not change an action. Include a countermeasure when optimizing the main measure could hide harm or shift work elsewhere.

Reuse a suitable definition before adding another. Keep the existing ID and meaning when unchanged. An incompatible change to eligibility, identity, source or calculation needs a new version, effective date and a record of affected consumers. Preserve the previous definition. Explain whether old and new series can be compared, require an authorized recalculation, or must show a break; never silently rewrite history or splice incompatible series.

Define activation only when an early action plausibly marks receipt of value. Name the value event and allowed time since entry. Define a funnel only for a relevant journey, specifying entry eligibility, ordered or unordered steps, conversion window, repeated attempts and skipped steps. Define retention only when return behavior matters, specifying cohort entry, qualifying return, exact-period versus on-or-after return and observation horizon. Do not add these measures just to complete a standard growth model.

## Make the contract computable

Use the project's existing record. A compact table or a few metric entries suffice; include these fields only once when they are shared:

| Field | Record |
| --- | --- |
| Identity and purpose | Metric ID/version, proposed or accepted status, intended decision, user outcome, proxy limitation and measurement owner |
| Calculation | Eligible entity such as person, account or completed job; unit; exact formula with numerator and eligible denominator for rates; aggregation for counts or durations; zero-denominator behavior |
| Population | Inclusion and exclusion rules, relevant segments, cohort entry and whether repeated attempts or entities count once or several times |
| Time | Window boundaries, timezone, event time versus ingestion time, late-event policy, reporting cutoff and when an observation is mature |
| Source semantics | Authoritative source and version, event trigger and required properties, identity/join rules, deduplication key and scope, known coverage limits |
| Decision criteria | Sourced baseline with period, target and rationale, harm limit or guardrail with rationale, review date and action for an inconclusive result |
| Readiness | Available versus proposed data, permitted access and collection, quality checks with expected results, check owner and unresolved gaps |

Keep the numerator and denominator on compatible entity and time rules. Specify how bots, staff/test traffic, cancellations, duplicate submissions and unavailable identities are treated when relevant. Do not infer a person from a device or merge anonymous and signed-in activity without an evidenced identity rule. Identify the authoritative source when client and server events overlap; a deduplication rule must preserve legitimate repeat actions.

Define how incomplete observation is handled. A cohort whose return window has not elapsed cannot yet be counted as failing to return. Record which entities are right-censored or excluded from a mature cohort calculation, and expose their count separately. Delayed ingestion, outages or consent-related coverage gaps remain unknown where evidence is missing. Specify a distinct result for no eligible denominator; do not turn absent data into zero activity or success.

Keep a baseline, target and guardrail separate. A baseline describes observed or supplied prior performance under a named definition; a target is a desired result by a date; a guardrail limits acceptable harm. Cite the origin and approval state of each value. Without a reliable baseline, record it as unknown and name the smallest observation needed. Propose thresholds from the decision's costs, user needs or accepted commitments, with rationale; never invent a universal conversion, activation or retention benchmark.

## Check data needs and meaning

Prefer existing approved data and the least detail needed to answer the question. Record collection, access, retention and export constraints before proposing new fields or joins. Keep sensitive values out of shared examples and external queries. Existing credentials do not grant authority for new collection, identity stitching, export or a paid analytics service. Preserve granted authority and expose only the specific missing permission or access that blocks the next action.

Walk a small labeled synthetic example through the definitions, including a qualifying case and relevant boundary cases such as a duplicate event, missing identity, late arrival, empty denominator or immature cohort. Show expected inclusion and calculation. This checks the definition; it is not product evidence. Compare reused definitions with the current schema and consumers where accessible.

Specify source quality checks that would make the measure usable: required fields and event trigger fidelity, unique keys, join coverage, expected freshness, exclusion accounting and reconciliation to an authoritative total where one exists. Give each check an owner, expected result and response to failure. Distinguish checks actually performed from planned instrumentation checks; do not claim a proposed event is available. A material ambiguity leaves the affected metric provisional.

Before acceptance, a separate agent in fresh context must challenge the raw request, candidate contract/revision, source artifacts and worked checks without the author's conversation or preferred answer. Retain the actual returned reviewer/session identity, evaluated artifact or revision, findings and coverage. Resolve supported defects and independently recheck affected definitions. An attempted delegation is not a review; without a returned assessment, label the result unreviewed. Required human acceptance and collection authority remain separate.

## Finish at the requested boundary

Return the contract, its supported decisions, demonstrated checks and exact unresolved inputs. Preserve it in the authorized existing project record. Distinguish definition readiness from available data and accepted targets; a checked contract can still require instrumentation before measurement.

When authorized data is ready, pass the metric definition/version, intended decision, eligible entity and time window, events/source/identity rules, exclusions, denominator, owner and quality checks to `analyze-product-usage`. Pass an accepted contract and bounded data gap to `implement-change` for instrumentation, or to `configure-monitoring` when the missing result is an operational alert with an owner and response. Check skill availability and describe the plain action if absent. End a definition-only request here; continue ready work already authorized without treating a recommendation as additional permission.
