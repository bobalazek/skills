---
name: report-project-status
description: "Prepare an audience- and period-specific project update from current delivery evidence, reconciling work, review, deployment, acceptance, blockers and next actions. Use for status communication, not a new delivery plan or session handoff."
---

# Report project status

Give the intended audience an accurate account of what changed, what is established now, what threatens the agreed outcome, and what action or decision is needed. A short update can be the complete result; do not create another status system or planning document.

## Establish the reporting boundary

Identify the project, audience, reporting period and cutoff, requested format, accepted goals or milestones, and existing status definitions. Use the previous update when available to establish changes, not as proof that its claims remain current. Ask only for missing context that materially changes the report; name the time zone when it affects which events belong in the period.

Inspect the relevant authoritative records and available tools: accepted scope, task tracker, PRs and revisions, verification, deployment/release state, acceptance decisions and operating signals. Match each source to the claim it can establish. Preserve source links, observation times and material versions. Missing access limits coverage; a useful partial update can still state what is known.

## Reconcile outcomes and evidence

Trace each material claim to its actual task, artifact, revision or environment. Separate proposed, in progress, implemented, reviewed, merged, deployed and accepted where those distinctions affect the audience. A closed ticket, merged PR or successful build does not establish all later states. Reconcile conflicting records through their definitions and current evidence; retain an unresolved discrepancy rather than selecting the most favorable status.

Report changes within the requested period separately from older work discovered or updated during it. Compare against the agreed scope and prior baseline, identifying added, removed, reopened or deferred work. Preserve required acceptance gaps and distinguish a partial milestone from an accepted one. For parallel phases, show accepted outputs, independent work still ready, blocked consumers and the integration result still required.

Use [the status evidence and update guide](references/status-update.template.md) when several systems disagree, metrics need interpretation, or a recurring report needs a consistent shape. Use existing measures only with their definition, denominator, source and period. Do not infer completion percentages, productivity, savings or delivery confidence from ticket counts, commits or elapsed calendar time. Label a forecast as a forecast with its source, assumptions and dependencies; distinguish an agreed target from a demonstrated outcome.

## Write the useful update

Lead with the outcome and material change since the last report. Include achieved results with evidence, current work, blockers or risks with their consequence, and the next ready action or decision. Name owners and dates only when established; show an unassigned action or missing decision plainly. Use the project's health labels only with the criteria and evidence that justify them.

For example, if a tracker says “done,” the PR is merged and staging checks pass but production deployment and acceptance are unverified, report those separate facts. Do not say the capability is delivered or silently change the tracker to make the records agree.

Match detail and sensitive content to the intended audience. Keep internal reasoning, personal information and unrelated incidents out of a shareable update unless necessary and authorized. Preparing the report does not authorize sending it, editing tracker state or changing commitments. If publication is requested and authorized, use the specified destination and verify the stored result without widening the audience.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate update, relevant raw sources and check access. Omit the author's conversation and preferred conclusions. Check completion, health and forecast claims, reconcile findings, and independently recheck affected claims after corrections. If independent review is unavailable, report the update as unreviewed and stop before acceptance.

## Communicate and continue

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the update, relevant evidence, coverage limits and exact next action; use the existing authorized reporting location instead of creating a duplicate summary. For authorized PR work, include the observed proof and independent findings, refreshing affected claims after edits.

Next: `verify-change` for missing acceptance evidence, `track-project-decisions` for consequential unresolved choices, or `improve-team-workflow` for a selected recurring process problem. Use `prepare-handoff` only for an actual owner/session transfer. Carry the reporting cutoff, source versions, agreed outcome and exact gap; check skill availability and describe the plain action if unavailable. A status-only request can finish with the report and no additional work.
