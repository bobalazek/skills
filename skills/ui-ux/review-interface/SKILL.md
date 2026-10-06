---
name: review-interface
description: "Review a rendered interface against user tasks, visual hierarchy, interaction states, usability, accessibility, and supported surfaces, producing evidence-backed findings and coverage."
---

# Review interface

Produce a scoped assessment of the actual user experience. Establish the target URL/app/artifact, revision where available, user tasks, accepted design/behavior, and supported surfaces.

Inspect the rendered interface through available browser/native tools. Read source or design documentation as supporting evidence, but do not use it as proof of keyboard, layout, focus, or runtime behavior. For a static mockup, limit claims to what it can show.

Use [interface review checks](references/interface-review.checklist.md) to select relevant tasks and states. Walk the primary journey, important failures/recovery, and supported input methods. Observe concrete problems before reporting them; distinguish functional defects, accessibility barriers, and visual preferences.

Try to break the supported journey within the review's authority: use relevant boundary inputs, denied permissions, repeated or interrupted actions, and supported keyboard/zoom paths. Challenge assumptions about feedback, focus restoration, and recovery. Use synthetic or approved data and safe states; a review does not authorize destructive live experiments.

Choose distinct review lenses from the actual risks, such as navigation comprehension, state/recovery, or keyboard access. The agent performing this assessment must be independent of the interface's author. Add other reviewers only where a distinct risk needs coverage, using the same revision and stated conditions. Reconcile findings through reproduction and evidence rather than votes. Preserve a demonstrated defect even when only one reviewer observes it, and keep an unresolved conflicting claim visible for follow-up.

For a review spanning journeys or delivery phases, establish the shared baseline and behavior first, then inspect independent paths in parallel only with separate sessions/fixtures where state can conflict. Keep shared navigation, permissions and cross-journey recovery in the combined assessment after branch findings arrive. A phase's screenshots or local review cannot establish the integrated experience; recheck affected paths independently after authorized fixes and retain valid evidence from unchanged paths.

For each finding, identify the affected task/state, location, evidence, consequence, priority, and useful correction. Include screenshots or reproduction steps when they clarify the issue. Record the revision and capture conditions; before/after screenshots need comparable viewport, route, role, fixture, and state. Keep visual evidence separate from observed interaction/focus/recovery results. Reconcile duplicate symptoms and separate optional polish from blocked user behavior.

If formal standards conformance is requested, establish the applicable target and verify criteria against current authoritative guidance. A limited audit does not establish universal compliance. State inspected and uninspected coverage, unavailable tools, and any reliance on heuristics instead of user research.

Review does not itself authorize a redesign or code edit. When fixes are requested, keep scope and recheck the changed tasks/states after implementation. Add useful redacted findings, before/after screenshots or video, interaction observations, and relevant regression-test results to authorized PR work as they become available, with verified accessible links or inline observations. Label local-only evidence, missing recordings, stale captures, and unavailable checks.

Run this assessment in a separate agent with fresh context from the interface's author, using raw accepted requirements, the candidate interface, and observed proof without the author's planning conversation. If you authored the interface, delegate the review. Reproduce consequential findings or retain their exact verification gap; a minority demonstrated defect survives reconciliation. If an independent agent is unavailable, report unreviewed and not ready. Independent review does not replace required human approval.

Next: select `design-interface` for an agreed design revision, `diagnose-issue` for unclear runtime failures, `implement-change` for selected authorized fixes, or `verify-change` for missing acceptance proof. A ready result can proceed to `ship-change` when delivery is authorized; a review-only request ends with its assessment. Carry the candidate, inspected states, evidence and exact gaps, and describe the plain action if the selected skill is unavailable.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.
