# Usage analysis checks

Load the relevant section for the requested measure. Reuse the accepted project definition; a provider's default is not automatically the product's contract.

## Funnels and feature adoption

- Specify eligible entity, feature exposure, entry event, ordered steps, repeat-entry policy, conversion window and how success is confirmed. A click or attempted action may not be a completed outcome.
- Attribute events to the same eligible entity and, when required, the same attempt or object. Account-level analysis can legitimately span people only when its definition permits that.
- Reconcile duplicate delivery by the supported event key. Repeated legitimate actions remain separate when the metric counts attempts; unique-entity metrics count the same eligible entity once.
- Verify timestamp order and boundary behavior. Define treatment of equal timestamps, missing steps and events outside the window. Do not assume an analytics provider uses strict chronological ordering or your preferred tie rule.
- State whether percentages use all entries or the previous step as denominator. Incomplete observation or missing tracking leaves conversion unknown for affected records; do not label those users as abandoning the task.

## Retention and cohorts

- State the entry event and cohort, qualifying return action, entity, interval and time basis. Calendar day 7, elapsed hours 168–192, and any return on or after day 7 are different definitions.
- Retention by exact interval, return on or after an interval, and return in every interval answer different questions. Record the selected definition and observation horizon; curves need not have the same shape.
- Exclude or visibly mark cohorts that have not completed the required observation window, including any accepted ingestion delay. Unknown collection coverage can invalidate even an old cohort's result.
- Keep cohort assignment stable. Do not select a cohort by future behavior and then present its earlier performance as an unbiased prediction.
- Match observation age and conditions when comparing cohorts. Check tracking versions, acquisition mix, product availability and selection before interpreting a difference.

Synthetic arithmetic example: one mature cohort has 4 returns among 10 eligible entities, another has 3 among 5. If definitions and coverage match, pooled retention is 7/15, approximately 46.7%; the unweighted mean of 40% and 60% is 50% and answers a different question. A third cohort of 20 entities whose interval has not finished contributes neither zero returns nor 20 observed failures to this result.

## Query and data checks

- Record source tables/files or report settings, snapshot, query/calculation and definition version. Keep raw identities restricted; shared evidence can use approved pseudonymous locators or aggregates.
- Check filtering before and after joins; verify uniqueness on the expected join keys. An account joined to several memberships can multiply events and distort both counts and rates.
- Reconcile exclusions by reason without double-counting overlapping reasons. Keep unresolved identities, duplicate retries and late data distinct from genuine behavior.
- Trace a positive, negative and relevant boundary/missing case against raw records. Missing denominators or unsupported totals block the affected rate, not all useful analysis.
- Where a trend spans a schema or event-meaning change, compare compatible subsets or report the break. Do not produce one precise trend from incompatible populations.

## Compact result record

| Field | Record |
| --- | --- |
| Question and decision | What this evidence can change |
| Definition | ID/version, formula, entity, eligibility, window/timezone and exclusions |
| Evidence | Source snapshot, query/report/calculation and observation coverage |
| Result | Counts, rates or distribution with comparable conditions and meaningful segments |
| Interpretation | Supported observation, alternative explanations and unknowns |
| Verification | Reconciled totals, traced cases, actual independent assessment and remaining gaps |
| Next action | Decision or missing input, owner and scope; no automatic production write |

## Method references

[Amplitude's funnel guidance](https://amplitude.com/docs/analytics/charts/funnel-analysis/funnel-analysis-interpret) documents order, conversion windows and counting choices. Its [retention calculation guidance](https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-calculation) distinguishes return definitions and incomplete intervals. These demonstrate why calculation settings must be explicit; other tools can differ. [Microsoft's controlled-experiment research](https://www.microsoft.com/en-us/research/publication/online-experimentation-at-microsoft/) explains how randomization and experimental design support causal conclusions. These references establish no conclusion about the analyzed product.
