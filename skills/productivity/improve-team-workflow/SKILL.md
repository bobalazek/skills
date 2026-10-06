---
name: improve-team-workflow
description: "Investigate one recurring development or team-process problem and propose or evaluate a bounded improvement trial using current steps, ownership, delays, failures and comparable evidence. Use for process improvement, not code refactoring or a feature delivery plan."
---

# Improve team workflow

Improve one recurring way the team gets work done, such as request intake, review handoffs or release coordination. Produce a supported diagnosis and bounded trial, or the observed result of an authorized trial. A process map, new meeting or new tool is useful only when it addresses the demonstrated problem.

## Establish the current process

Identify the selected process, participants, trigger, useful outcome, recurrence and the user's requested stopping point. Read existing agreements, ownership, operating constraints and representative recent records. Preserve settled product requirements and controls. Use available evidence before asking people to reconstruct facts that are already recorded.

Map the actual steps, inputs/outputs, decisions, handoffs, queues, active work, waits, rework and failure/recovery paths. Compare the documented process with observed practice. Establish who owns each transition where known; do not invent an owner or infer individual productivity from activity counts. A missing timestamp or one unusual incident is a limitation, not proof of a recurring cause.

Separate symptoms from hypotheses about their cause. Follow a few relevant examples, including ordinary successes and failures, to find where work waits or loses required information. Distinguish delays from necessary review, safety, approval or compatibility checks. Use only the records needed for the process question; avoid collecting unrelated personal or customer information.

## Select a bounded improvement

Compare a small set of changes against the actual problem, including keeping the process when evidence does not justify intervention. Prefer clarifying a handoff, removing demonstrated duplicate work or adjusting an existing feedback loop before introducing another platform or recurring ceremony. Explain the mechanism, expected benefit, trade-off and uncertainty rather than promising a percentage improvement.

Use [the workflow trial playbook](references/workflow-trial.playbook.md) when defining measures, comparing alternatives or running a trial across people or stages. Specify the selected change, owner where agreed, eligible work, duration or sample boundary, baseline, success signal, preserved quality/control checks, stop conditions and recovery. Identify missing decisions or access before calling the trial ready.

Preserve required approvals, independent review, privacy, security and acceptance controls. A faster path that bypasses a required gate is not a successful improvement. Changing an established control needs the actual decision owner's agreement and corresponding authority; do not silently redefine “done” or exclude difficult work to improve the metric.

For example, if PRs repeatedly wait because no reviewer owns the handoff, a bounded trial might make that ownership explicit for one eligible queue while retaining the existing review requirements. First verify that missing ownership is the cause; elapsed review time alone does not establish it.

## Run or assess the trial within scope

For an analysis or proposal request, stop with the supported recommendation and trial design. If execution is already authorized, use the existing team tools and agreed bounds; do not add an approval ceremony for ordinary in-scope steps. Messages, assignments, automation, policy changes and remote writes require their actual authority. Missing tools can leave a useful trial proposal without pretending it ran.

Compare baseline and trial using equivalent work, definitions, time windows and operating conditions. Record changed workload, staffing, holidays, concurrent initiatives and missing observations that affect the comparison. Inspect quality, rework and displaced effort alongside speed. Independent investigations may overlap, but trials sharing a queue, owner or mutable process need coordination; one trial can contaminate another's comparison.

Report observed results, confounders and remaining uncertainty. A small or changed sample may justify extending the observation or no conclusion, not a success claim. Recommend adoption, adjustment, another specific observation or stopping the trial. Adoption is a separate decision unless it is already within the authorized scope; retain useful existing controls and update the authoritative process record only when authorized.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate diagnosis/trial, relevant raw records and check access. Omit the author's conversation and preferred conclusions. Try alternative explanations, inspect comparability and preserved controls, reconcile findings, and independently recheck affected results after changes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

Retain the returned assessment with its independent reviewer or session identity, evaluated artifact/revision, findings and coverage before claiming review. An attempted delegation, an empty wait or the author's own check is not an independent assessment.

## Communicate and continue

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the process problem, relevant evidence, selected trial or observed outcome, limitations and next action. Use the existing authorized process or work record instead of creating another report by default. Include observed proof and independent findings in authorized PR work, refreshing affected evidence after edits.

Next: `create-tasks` for accepted implementation work that needs decomposition, `automate-code-checks` for an accepted repeatable coding guard, or `report-project-status` when an audience needs the resulting status. Use `find-improvements` for a separate code-level investigation; `plan-phases` owns a feature's delivery milestones, not this process trial. Carry the hypothesis, baseline, constraints, decision and exact prerequisite; check skill availability or describe its plain action. No change or a completed bounded trial can be the final result.
