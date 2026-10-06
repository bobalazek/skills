---
name: review-interface
description: "Independently assess a rendered interface against user tasks, visual hierarchy, interaction, accessibility and supported surfaces, returning evidenced findings and coverage. Use participant studies for claims about actual user behavior."
---

# Review interface

## Use this skill

Use this for a scoped expert assessment of an actual interface. Reuse accepted requirements, candidate identity and valid prior evidence. `test-usability` supplies participant task evidence; `design-interface` creates a design; `capture-design-reference` analyzes reusable patterns from a reference.

Perform the assessment independently of the interface's author, in a separate agent or fresh context with raw requirements, candidate and check access, without the author's conversation or preferred conclusions. If you authored the interface, delegate it. Without an independent assessor, label the result unreviewed and not ready. This assessment can itself satisfy the independent review requirement; it does not require another review of the review.

## Establish the candidate and coverage

Identify the target URL/app/artifact, available revision, user tasks, accepted behavior/design and supported surfaces. Inspect through available browser/native tools. Source and design documents support the review but cannot prove layout, focus, keyboard or runtime behavior. Limit static-mockup claims to visible evidence.

Select task-relevant lenses from [interface review checks](references/interface-review.checklist.md). Establish which routes, roles, states and input methods will be inspected, and preserve unknown coverage.

## Exercise consequential paths

Walk the primary journey, failures and recovery. Try relevant boundary inputs, denied permissions, repeated/interrupted actions, keyboard and zoom paths. Inspect feedback, focus restoration and usable escape routes. Use synthetic or approved data and safe states; a review does not authorize destructive live experiments.

Distinguish observed functional defects, accessibility barriers and optional visual preferences. If formal conformance is requested, identify the applicable standard and check criteria against current authoritative guidance. Limited coverage cannot establish universal compliance. Agent walkthroughs cannot be relabeled as participant observations.

Add reviewers only for distinct risks needing coverage. Keep the same candidate and conditions, and use separate sessions/fixtures where mutable state can conflict. Reconcile branch findings into shared navigation, permissions and cross-journey recovery. A phase's screenshots do not establish the integrated experience.

## Reconcile findings

For each finding, identify the affected task/state, location, evidence, consequence, priority and useful correction. Reproduce consequential claims or retain the exact verification gap. Combine duplicate symptoms without hiding severe minority findings; votes cannot dismiss an observed defect. Keep unresolved conflicting observations visible.

Record the tested revision and capture conditions. Before/after screenshots need comparable route, viewport, role, fixture and state. Keep visual proof separate from exercised interaction/focus/recovery results. Review does not authorize redesign or code edits; after authorized fixes, independently recheck affected paths and retain still-valid evidence from unchanged ones.

## Result and verification

Return the scoped assessment, prioritized findings, inspected/uninspected coverage and exact blockers at the requested audience/depth and project format. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. An attempted delegation, empty wait or the author's self-check cannot establish independent review.

For authorized PR work, include useful redacted findings, captures, interaction observations and relevant regression outcomes through verified accessible links or inline evidence. Label local-only proof, stale captures and unavailable checks. Refresh affected evidence after changes; required human approval remains separate.

## Next steps

Use `design-interface` for an agreed design revision, `diagnose-issue` for an unclear runtime cause, `implement-change` for selected authorized fixes, or `verify-change` for missing acceptance proof. Use `test-usability` when the unresolved question needs actual participant behavior. A ready candidate can proceed to `ship-change` only when delivery is authorized.

Pass the candidate, inspected states, findings and exact prerequisite. Check availability or describe the plain action. A review-only request ends with the assessment; continue only ready work already included in the user's authority.
