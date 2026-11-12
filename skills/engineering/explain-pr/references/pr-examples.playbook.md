# Worked PR descriptions

Read only the scenario relevant to the change. The [default template](pr-description.template.md) owns the fields; these examples illustrate concise content, not additional rules. All systems, numbers, dates and check results below are fictional. Replace them with the project's actual observations; never publish these example results as your verification or invent an attachment.

Explanation patterns draw on [Matt Pocock's PR skill](https://github.com/mattpocock/skills/blob/5863806dd4e15c63174bee4e7515a4256792ecfa/skills/engineering/pr/SKILL.md) and [HumanLayer's visual PR template](https://github.com/humanlayer/skills/blob/4d69d20f6e9b57b4fcf0d501ccfb1be961f0f329/plugins/visual-pr/skills/visual-pr/references/pr_description_template.md), checked 12 November 2026: show the smallest useful explanation and concrete evidence, with meaningful reversibility and impact. Our template also retains the required merge, observation and recovery concerns; these fictional examples are written for this collection.

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
- Effect starts at the next 02:00 Europe/Ljubljana run; the operator checks completion by 03:00 and reconciles counts by 08:00.
- Compare failures, duplicate deliveries, queue age, CPU/memory and provider-call volume with the previous comparable run. A quiet hour after a midday deployment proves nothing about this job.

## Risk and recovery
- Bad grouping could affect the estimated cohort or increase memory and paid delivery calls. Missing completion, mismatched counts or breached agreed resource limits stop further runs.
- Correct and replay only unsent work through the existing runbook; already sent messages cannot be recalled. Recovery is not yet rehearsed.
```

## Metered API or AI feature

```markdown
## Summary
Introduce optional summaries from a new AI provider for a 50-account pilot.

## Changes
- Gate requests behind the existing server-side feature flag and approved cohort; default off.
- Estimated 500–1,000 requests/day; actual token distribution and production unit cost are still unknown. Retries can add billable calls.

## Evidence and testing
Authorization, duplicate-request and bounded-retry checks passed with a fake provider. Those checks establish neither production quality nor the provider bill. Live cost and cancellation behavior remain unverified.

## Merge prerequisites
- Before merge: required CI/review and proof the pilot stays disabled by default.
- Before exposure: owner acceptance of provider/data handling, server-side credentials, spend basis, enforced limits and monitoring access. An informational budget alert does not cap spending.

## Rollout and monitoring
- Enable the pilot flag only after those gates. The operating owner checks request/token counts, retries, latency, serverless duration/concurrency and errors for the first hour and again after the first 100 requests.
- Check the bill at the next provider refresh. This example assumes a 24-hour billing delay; confirm the actual delay and accepted budget/thresholds.

## Risk and recovery
- Retries or abuse could raise API, serverless, logging or egress charges. Disable the flag and apply existing quotas when limits are exceeded; verify whether in-flight requests can actually be cancelled.
- Provider output and data handling remain risks outside fake-provider checks. Reverting code does not refund charges, retract transmitted data or remove saved summaries. Real spend remains an open check.
```

## New third-party API integration

````markdown
## Summary
Add optional address validation before label purchase, initially disabled.

## Changes
- Put the new provider behind the existing server-side integration flag; retain manual review when validation is unavailable.
- Keep credentials on the server and send only the address fields needed for validation.

```text
Before: shipping form → manual review → label purchase
After:  shipping form → flagged validation → result or manual review → label purchase
```

## Evidence and testing
- Sandbox checks passed for valid/invalid addresses, timeout and rate-limit responses; no label purchase occurs in these checks.
- Live credentials, provider limits, production latency, charges and data-retention terms remain unverified.

## Merge prerequisites
- Before merge: required CI/review and proof the flag defaults off without changing the existing purchase path.
- Before exposure: accept provider/data terms, verify credentials and retry/rate/concurrency limits, and assign an operator with signal access. Confirm quota exhaustion leaves manual review available.

## Rollout and monitoring
- Enable only for the approved 20-account cohort. Estimate 200 validations/day from current shipping volume, assuming one validation per address; confirm provider pricing and retry amplification before exposure.
- The integration owner compares errors, rate limits, latency and call counts with the existing flow for the first hour and first 100 validations. Check charges at the confirmed billing refresh; stop new calls if agreed limits or privacy conditions fail.

## Risk and recovery
- A provider outage, incorrect result or exhausted quota could delay shipping; retries could raise the bill. Keep validation separate from label purchase and verify the fallback before exposure.
- Disable the integration flag and verify manual review still works. Sent addresses and incurred charges cannot be recalled by reverting code; provider deletion and in-flight cancellation remain conditional on verified capabilities.
````

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
