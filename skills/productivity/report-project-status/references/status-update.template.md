# Status evidence and update guide

Use the relevant sections for a report that spans sources, periods or audiences. Keep source reconciliation behind a concise user-facing update unless the discrepancy itself changes a decision.

## Match evidence to the claim

| Claim | Useful source and check | Limit to preserve |
| --- | --- | --- |
| Work is within the agreed scope | Current accepted brief, criteria and recorded scope changes | A new ticket is not automatically an accepted commitment |
| Implementation exists | Actual change and relevant revision, including remaining criteria | A branch or worker-complete label does not establish integration |
| Review or verification passed | Evaluated revision, criteria, findings and observed checks | Later edits can invalidate proof; an empty findings list has bounded coverage |
| Change reached an environment | Release/deployment identity and observed target state | A merged PR or queued deployment does not prove the target changed |
| Milestone is accepted | Its exit evidence and required acceptance decision | One merged task or locally passing branch cannot establish combined behavior |
| Delivery is forecast for a date | Named forecast owner/source, assumptions and dependency state | A target date and a forecast are different; neither is a completed outcome |

Correlate identifiers before comparing status labels. Confirm that a release contains the intended revision, a check applies to that candidate, and a ticket's “done” means what the tracker workflow says. Do not rank every tool as globally authoritative: the tracker may own planned scope while runtime evidence establishes deployment.

If records still disagree, say what each establishes and what observation or owner decision would resolve the difference. Reuse valid evidence; do not run deployments or mutate records merely to finish a report. For unavailable systems, state the latest known observation and its date instead of presenting it as current.

## Keep periods and metrics comparable

Identify the reporting window, cutoff and comparison window. Distinguish the date an event happened from the date its record was edited or discovered. If scope changed, explain the addition, removal or reopening instead of comparing unlike totals. Carry a material unresolved blocker forward even when it predates the current period; label it as continuing.

Use a completion ratio only when an accepted definition, reliable numerator and denominator exist. State what the ratio counts and excludes; it must not become an overall project-completion claim when it measures only one work category. Do not weight tasks or convert story points into hours without an established method. Small samples, inconsistent status usage and missing records may make a qualitative account more accurate.

Separate actual results, committed targets, estimates and risks. A forecast change should identify the new evidence or assumption and the affected outcome. Do not invent an ETA because the format contains an empty date field. If the project has no health scale, describe the concrete condition instead of manufacturing a red/amber/green policy.

## Shape the report for its reader

Use an existing template when present. A compact update can contain:

- Reporting period/cutoff, intended outcome and current evidence-based status.
- Meaningful results since the prior update, with nearby evidence links.
- Work in progress and readiness: what can advance, what waits, and the required integration or acceptance.
- Material risks/blockers, their effect, established owner and next check or decision.
- Changed scope or forecast, clearly sourced; omit this section when neither changed.

Leadership may need the outcome, confidence limits and decision required; the delivery team may need revision, dependency and check details. Neither audience needs a raw activity log. Keep the same underlying facts and distinguish audience-specific omission from concealing a material blocker. Check that intended readers can use shared evidence links; retain a clear textual observation when the underlying artifact cannot be shared.

## Example of conflicting completion records

Illustrative inputs: a task is closed, its PR is merged, the deployment record names staging, and the milestone requires production verification. There is no production observation.

Useful wording: “The change is merged and deployed to staging. Production verification remains open, so the milestone is not yet accepted. The next action is to confirm the production candidate and exercise the agreed acceptance path.” Add the actual owner, dates and source links only when provided by evidence. A deployment record alone does not prove staging acceptance checks passed.

This is a reporting result. It does not authorize deployment, assign someone work or rewrite the milestone. If the user asked only for a weekly update, return that update with the gap rather than starting a release workflow.
