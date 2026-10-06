---
name: assess-request
description: "Check an incoming bug report, feature request, or support question for evidence, duplicates, impact, and missing information, then recommend its next action."
---

# Assess request

## Use this skill

Triage an incoming request into an evidenced next action, project-defined priority, and specific missing information. Reuse the report, prior discussion and existing work; a reproduced defect can go directly to `diagnose-issue`. Use `write-spec` to define behavior and `implement-change` for an already-agreed repair.

## Check the report

Read the request, prior discussion, related items, current status, and relevant repository evidence. Check whether the claimed behavior exists, which version/environment is involved, who is affected, and whether the request duplicates known work. Distinguish a reproducible defect, feature request, support question, unclear report, and an already resolved issue.

## Select the next action

Assess impact, urgency, confidence, prerequisites, and ownership using the project's existing priority system. Do not invent severity from tone or assume a reported cause is correct. Inspect discoverable facts before asking for missing reproduction steps or a consequential product choice.

Recommend diagnosis, behavior definition, a support answer, related work, specific missing information, or closure with a supported reason. For ready work, supply a concise execution brief with scope, artifacts, preservation constraints, and acceptance signal. For example, “Export fails” may need the affected version and a sample input before diagnosis; do not invent severity or a cause to fill the brief.

## Apply authorized tracker changes

Tracker labels, assignments, comments, and closure are external writes. Perform only the authorized actions, using the actual project workflow and concurrency/version controls. Without tool access or authority, deliver the recommendation locally and state that the tracker was not changed.

## Verify and report

Check the recommendation against the report, duplicate candidates and inspected behavior. Return the classification, evidence, priority rationale, owner where established, missing input, and actual tracker changes. Follow the project's format and requested audience; update the existing record rather than create a second summary.

For authorized PRs, include proof, independent findings and gaps at creation; refresh affected evidence after edits.

Before acceptance, a separate agent in fresh context must challenge the triage using the accepted request, candidate result, raw reports/source evidence, and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

## Next steps

Carry the brief and unresolved prerequisite to `diagnose-issue` for a failure, `write-spec` for undefined behavior, or `create-tasks` for agreed scope needing decomposition. Answer support questions directly when the evidence suffices. Use the plain action if the skill is unavailable; continue only within the request's authority. Triage alone can finish the request.
