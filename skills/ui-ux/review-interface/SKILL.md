---
name: review-interface
description: "Review a rendered interface against user tasks, visual hierarchy, interaction states, usability, accessibility, and supported surfaces, producing evidence-backed findings and coverage."
---

# Review interface

Produce a scoped assessment of the actual user experience. Establish the target URL/app/artifact, revision where available, user tasks, accepted design/behavior, and supported surfaces.

Inspect the rendered interface through available browser/native tools. Read source or design documentation as supporting evidence, but do not use it as proof of keyboard, layout, focus, or runtime behavior. For a static mockup, limit claims to what it can show.

Use [interface review checks](references/interface-review.checklist.md) to select relevant tasks and states. Walk the primary journey, important failures/recovery, and supported input methods. Observe concrete problems before reporting them; distinguish functional defects, accessibility barriers, and visual preferences.

For each finding, identify the affected task/state, location, evidence, consequence, priority, and useful correction. Include screenshots or reproduction steps when they clarify the issue. Record the revision and capture conditions; before/after screenshots need comparable viewport, route, role, fixture, and state. Keep visual evidence separate from observed interaction/focus/recovery results. Reconcile duplicate symptoms and separate optional polish from blocked user behavior.

If formal standards conformance is requested, establish the applicable target and verify criteria against current authoritative guidance. A limited audit does not establish universal compliance. State inspected and uninspected coverage, unavailable tools, and any reliance on heuristics instead of user research.

Review does not itself authorize a redesign or code edit. When fixes are requested, keep scope and recheck the changed tasks/states after implementation. Carry useful redacted findings and repaired-state evidence into authorized PR work with verified accessible links or inline observations. Label local-only evidence, stale captures, and unavailable checks.

Next: `design-interface` for an agreed design revision, `diagnose-issue` for unclear runtime failures, or `implement-change` for selected concrete fixes.
