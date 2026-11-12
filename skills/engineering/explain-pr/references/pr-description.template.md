<!-- Canonical default PR template for explain-pr; the repository GitHub template mirrors this file. -->

## Summary

<!-- What problem does this solve, why, and what changes for the user or contributor? -->

## Changes

<!-- Brief approach and a useful before/after example or flow. Note affected consumers and compatibility. -->

## Evidence and testing

<!-- What ran and what was observed? Link usable CI/results and include relevant comparisons.
For visual changes, add labeled screenshots or a recording. State material failed or unperformed checks.
Do not replace results with a test count alone, or link private local files as attachments. -->

## Merge prerequisites

<!-- Required checks/approvals, dependent PRs, and data/environment conditions. State passed, pending or blocked.
Include required observation ownership/access and cost controls where affected; distinguish pre-merge from pre-exposure gates. -->

## Rollout and monitoring

<!-- How will consumers receive this change? State dependency/deployment order and post-rollout checks.
State when the effect starts (immediate, scheduled, date/flag/data-triggered), with timezone when relevant.
Name the observation owner, signals/baseline (including resource use and metered usage/spend where affected), check window and next checkpoint; delayed/overnight work stays pending until its actual run is checked.
For a change with no separate deployment, explain that briefly. A merge or quiet dashboard does not prove a future effect. -->

## Risk and recovery

<!-- State reversibility, credible failure/blast radius, detection, and the recovery action with its conditions.
Include material CPU/memory, latency, database/connection/IO or backlog impact. For paid APIs/AI, serverless, cloud builds/runtime, storage/logging/egress: state expected usage/cost basis, relevant rate/concurrency/retry or spending controls, and unbounded-cost risks.
Distinguish measured results, estimates and unknowns; a budget alert is not an enforced spending cap.
State failure thresholds and the action they trigger. Distinguish reverting code from restoring data or undoing external effects. Name actual proof and remaining limits.
Use a short applicability reason where appropriate; do not omit the concern. -->
