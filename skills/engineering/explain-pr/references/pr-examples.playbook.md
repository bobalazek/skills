# Worked PR descriptions

Read only the scenario relevant to the change. The [default template](pr-description.template.md) owns the fields; these examples illustrate concise content, not additional rules. All systems, numbers, dates and check results below are fictional. Replace them with the project's actual observations; never publish these example results as your verification or invent an attachment.

## Documentation only

```markdown
## Summary
Correct the README spelling of “response” so the explanation reads correctly.

## Changes
`reponse` → `response`; no command, link or behavior changes.

## Evidence and testing
Reviewed the one-word diff; `git diff --check` passed. No runtime or visual claim.

## Merge prerequisites
Normal repository checks/review; no additional dependencies.

## Rollout and monitoring
Readers receive the correction after merge; no separate deployment or operating watch.

## Risk and recovery
No operational or data risk identified. A source revert restores the previous text.
```

## UI-only change

```markdown
## Summary
Keep the settings Save action visible on narrow screens.

## Changes
Before: the action overflows below the form at 390 px. After: it wraps within the existing footer; submission and permission behavior stay unchanged.

## Evidence and testing
Component and keyboard checks passed. Same-fixture desktop/mobile before-and-after captures are still needed; visual acceptance remains pending. No backend change was made.

## Merge prerequisites
Required CI/review and the missing visual/reflow comparison must complete.

## Rollout and monitoring
Use the normal frontend release. The release owner checks Save visibility and keyboard focus on supported widths within 30 minutes of deployment, then records the result at that checkpoint; no persistent scheduled effect.

## Risk and recovery
Incorrect wrapping could obscure another action. Detect through the same viewport checks; revert the layout change if needed. This does not undo saves users already submitted.
```

## Compatible database migration

```markdown
## Summary
Add an optional booking note without breaking existing readers or writers.

## Changes
Add a nullable column; shared contracts, backend and frontend consumers follow in dependent PRs. Existing values are unchanged; removal of old fields is outside this PR.

## Evidence and testing
Migration and old/new reader-writer checks passed on a representative staging fixture. Production lock duration and recovery have not been rehearsed.

## Merge prerequisites
Required CI/review and an accepted migration window. Consumer PRs must use the additive contract; destructive cleanup remains blocked until consumers migrate.

## Rollout and monitoring
Apply the compatible migration before dependent services. The database operator checks lock waits, connection pressure, query latency and errors during the window and first real workload; stop if the agreed service limits are exceeded.

## Risk and recovery
The affected booking table could experience lock contention. Old application code can run with the unused column left in place; dropping it would delete newly stored notes. Do not describe a destructive down migration as data recovery.
```

## Overnight job

```markdown
## Summary
Correct duplicate entries in the nightly invoice-summary job.

## Changes
Group by the existing invoice identity before delivery. Estimated reach: 1,200 eligible accounts from the current snapshot, assuming tenant/date filters are unchanged; confirm that population before exposure.

## Evidence and testing
Duplicate and cross-tenant fixture checks passed. The first affected production run has not happened, so its delivery and resource impact remain unverified.

## Merge prerequisites
Required CI/review, confirmed target population, working job signals and an assigned operator. No unrelated schema change is required.

## Rollout and monitoring
Effect starts at the next 02:00 Europe/Ljubljana run. The operator checks completion by 03:00, then reconciles counts by 08:00. Observe failures, duplicate deliveries, queue age, CPU/memory and provider-call volume against the previous comparable run. A quiet hour after a midday deployment proves nothing about this job.

## Risk and recovery
Bad grouping could affect the estimated cohort or increase memory and paid delivery calls. Missing completion, mismatched counts or breached agreed resource limits stop further runs. Correct and replay only unsent work through the existing runbook; already sent messages cannot be recalled. Recovery is not yet rehearsed.
```

## Metered API or AI feature

```markdown
## Summary
Enable optional AI summaries for a 50-account pilot.

## Changes
Only the approved server-side cohort can request a summary. Estimated 500–1,000 requests/day; actual token distribution and production unit cost are still unknown. Retries can add billable calls.

## Evidence and testing
Authorization, duplicate-request and bounded-retry checks passed with a fake provider. Those checks establish neither production quality nor the provider bill. Live cost and cancellation behavior remain unverified.

## Merge prerequisites
Required CI/review and proof the pilot stays disabled by default. Exposure is blocked until the owner accepts the spend basis, enforced limits and monitoring access; an informational budget alert does not cap spending.

## Rollout and monitoring
Enable the pilot only after those gates. The operating owner watches request/token counts, retries, latency, serverless duration/concurrency and errors for the first hour and again after the first 100 requests, then checks the bill at the next provider refresh. This example assumes a 24-hour billing delay; confirm the actual provider delay. Use the accepted budget/thresholds; no universal “safe” price or watch duration is assumed.

## Risk and recovery
Retries or abuse could raise API, serverless, logging or egress charges. Disable new requests and apply the existing quotas when limits are exceeded; verify whether in-flight requests can actually be cancelled. Reverting code does not refund charges or remove saved summaries. Real spend remains an open check.
```

## Date- or flag-triggered activation

```markdown
## Summary
Prepare the reporting view for an agreed launch date without exposing it early.

## Changes
Existing server-side gating keeps the feature off until the approved activation. Expected population is the 60-account launch cohort, conditional on the reviewed flag rules; do not infer that reach from the frontend toggle alone.

## Evidence and testing
Before/after-boundary and unauthorized-cohort checks passed using a controlled clock. Real activation and post-launch behavior are still pending.

## Merge prerequisites
Required CI/review, accepted cohort/timezone, verified backend compatibility and an operator for activation. Merging preparation does not authorize turning the flag on.

## Rollout and monitoring
Record the exact activation date/time/timezone in the release plan. The operator checks the actual cohort at activation and after the first representative workload, monitoring errors, latency, resource use and relevant charges. Leave follow-up open until those observations occur.

## Risk and recovery
An incorrect boundary or flag scope could expose the view early or to the wrong accounts. Stop new exposure through the existing server-side control and verify its effect. Disabling the view does not undo exports or other actions already taken; recovery beyond that is conditional on the affected operation.
```
