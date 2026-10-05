---
name: triage-requests
description: "Verify and classify incoming issues or change requests, assess impact and readiness, and produce a disposition or actionable brief without silently implementing or closing the request."
---

# Triage requests

Determine what the incoming work actually is and where it should go next. Triage owns the intake decision; diagnosis establishes cause, specification defines behavior, and implementation changes the product.

Read the request, prior discussion, related items, current status, and relevant repository evidence. Check whether the claimed behavior exists, which version/environment is involved, who is affected, and whether the request duplicates known work. Distinguish a reproducible defect, feature request, support question, unclear report, and an already resolved issue.

Assess impact, urgency, confidence, prerequisites, and ownership using the project's existing priority system. Do not invent severity from tone or assume a reported cause is correct. Inspect discoverable facts before asking for missing reproduction steps or a consequential product choice.

Produce a recommended disposition with evidence: proceed to diagnosis, define requested behavior, answer a support question, link related work, request specific information, or propose closure with a supported reason. For ready work, write a concise execution brief with scope, relevant artifacts, preservation constraints, and acceptance signal.

Tracker labels, assignments, comments, and closure are external writes. Perform only the authorized actions, using the actual project workflow and concurrency/version controls. Without tool access or authority, deliver the recommendation locally and state that the tracker was not changed.

Next: `diagnose-issue`, `write-spec`, `create-tasks`, or a direct explanation according to the evidence. A triage result does not require every later phase.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.
