# Workflow trial playbook

Use this when a process recommendation needs a credible baseline, a bounded experiment or an adoption decision. A small request may need only a short trial contract in the existing work record.

## Describe the actual path

For representative eligible work, trace the trigger through its useful accepted outcome. Record the input needed at each handoff, the responsible role, decision or output, and available evidence of work/wait/rework. Include exceptions such as missing information, rejected reviews or failed release checks. A diagram is optional when a short sequence explains the path.

Compare the written procedure with actual records before attributing delays to noncompliance. A queue might reflect missing ownership, unavailable skills, incomplete inputs, batched decisions, a tooling failure or a necessary control. Test the supported explanation against both delayed and ordinary cases. Do not infer an absent handoff from a missing log entry or ask for broad surveillance to reconstruct one process.

## Choose measures that match the outcome

| Concern | Possible observation | Check against a misleading improvement |
| --- | --- | --- |
| Slow handoff | Time from agreed ready state to the next substantive action | Earlier “ready” labels or automatic acknowledgements can change the metric without advancing work |
| Rework | Returns for missing or incorrect inputs, with an identified cause | Fewer recorded returns may hide silent corrections, abandoned work or weaker checks |
| Long delivery path | End-to-end time for comparable accepted outcomes, separating work and wait where observed | Speed in one step may shift delay or effort to another team |
| Unclear ownership | Eligible items that lack a responsible next actor or wait for reassignment | Assigned names do not prove capacity, agreement or a completed handoff |
| Repeated failures | Relevant failure/recovery observations per eligible attempt | Dropped attempts, reduced scope or weaker verification must not disappear from the denominator |

Choose the existing measure or simplest manual observation that can test the hypothesis. Define the start/end events, eligibility, units, business/calendar time, sample window and exclusions before interpreting a change. Record volume, work mix and missing observations. Do not equate elapsed time with active effort or estimate time saved without a credible baseline.

Keep a balancing observation for the risk the change could worsen: acceptance failures, rework, missed reviews, escalation burden or downstream delay. Quality and required controls remain criteria, even if the speed measure improves. A small sample or noisy process may support only a tentative observation; a convenient percentage is not a substitute for adequate evidence.

## When automation is a candidate

First establish whether the recurring output is still needed and whether the process is stable enough to specify. Compare only credible options for the actual task:

| Option | What would justify it | What to check |
| --- | --- | --- |
| Remove or simplify the work | The output or duplicated step no longer serves a required outcome | Preserve the actual obligation, useful information and necessary control |
| Keep it manual | Frequency, variation or judgment makes the current method appropriate | Count real effort and errors rather than treating manual work as free |
| Use an existing native feature | A supported capability already covers the needed behavior | Verify the current tool/version, permissions, limits, failure behavior and ongoing cost |
| Use deterministic automation | The rules and exception boundaries can be specified | Include implementation, validation, operation and recovery work |
| Use AI assistance | Variable inputs require interpretation and output quality can be evaluated | Include human checking, uncertain outputs, privacy constraints and change/drift evaluation |

Choose from the observed process, required quality, mistake consequences and available controls. Recurrence alone does not justify automation, and AI is not a default upgrade from a script or native feature. A high-consequence output may require a different approach or an accountable human decision regardless of potential time savings.

Compare total cost over the same stated horizon: setup and migration, usage or license charges where known, normal operation, human review, exceptions and corrections, monitoring, maintenance, retraining or revalidation when needed, and eventual removal or replacement. Keep money, active effort and elapsed delay distinct unless there is an explicit conversion basis. Label unknown quantities and estimates; do not manufacture a payback figure or fixed trial duration.

Make expected savings a hypothesis until a bounded trial observes them. Inspect ordinary and failure cases, required human checks and effort shifted to other roles. For example, saving two hours of manual work while adding three hours of checking and maintenance does not establish a labor saving, even if another measured quality benefit might justify the change.

Record who operates the chosen approach, how exceptions reach an accountable owner, what stops unsafe or repeated effects, and how work continues when the automation is unavailable. Tie the revisit or retirement trigger to the task's actual costs, quality and continued need. The process proposal can hand accepted technical work to implementation; it does not grant authority to purchase a tool, send messages, migrate records or change production behavior.

## Make the trial executable

Record the following in the existing process or work item, omitting fields that add no decision value:

- Problem and evidence: where the recurrence was observed and which outcome it harms.
- Hypothesis and one meaningful change: why it should affect that mechanism; an alternative explanation to check.
- Scope and ownership: eligible work, participating roles with actual agreement, permitted changes and excluded queues or systems.
- Comparison: baseline/source period, trial duration or sample boundary, unchanged definitions, relevant operating conditions and retained evidence.
- Decision criteria: success signal, preserved control/quality outcomes, failure or stop conditions, and who owns the adoption decision.
- Recovery: how the prior process resumes, how in-flight items keep an owner, and which completed effects cannot be reversed.

If there is no usable baseline, the first bounded step can be observation. If people or required decisions are unavailable, keep dependent execution blocked while independent evidence collection proceeds. A proposed trial is not an accepted policy or an instruction to message the team.

Run one meaningful intervention at a time when that is needed to interpret the result. Independent queues may support parallel trials only when owners, work and effects are sufficiently isolated. Multiple interventions in the same queue, shared reviewers or a changed release cadence can invalidate a simple before/after attribution. Record those changes rather than claiming the trial caused all movement.

## Review and decide

At the agreed boundary, compare actual observations with the baseline and decision criteria. Include failed cases, withdrawals and balancing outcomes. Explain changed conditions and distinguish the observed association from a supported causal explanation. Do not remove an inconvenient case retrospectively without showing the effect on the conclusion.

Recommend retaining, adjusting or ending the change, or collecting the specific missing observation. An inconclusive or unsuccessful trial is a useful result. A favorable metric does not authorize organization-wide adoption, a policy rewrite or tooling procurement. Follow actual decision ownership and authorization, then update the existing process record and preserve relevant evidence.

## Worked proposal

Illustrative request: “Reviews regularly stall after a PR is ready. Propose one improvement; do not change the workflow yet.”

Inspect the agreed ready state, queue records and actual next actions. If the evidence supports an ownership gap, propose an explicit reviewer handoff for a bounded eligible queue, retaining required review and checks. Measure ready-to-first-substantive-review time and inspect review omissions, rework and load shifted to that reviewer. Reuse the same eligibility and time definitions for baseline and trial; disclose unavailable timestamps or unusual work mix.

Finish with the proposal, evidence, agreed or missing owner, comparison plan and adoption/stop decision. Do not schedule a rota, assign PRs or notify reviewers under proposal-only authority. If the observed cause is failing CI rather than ownership, investigate that constraint instead of forcing the handoff intervention.
