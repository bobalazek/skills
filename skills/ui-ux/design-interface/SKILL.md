---
name: design-interface
description: "Design or improve a concrete screen, page, or interface with clear visual hierarchy, content, states, responsive behavior, and a usable implementation handoff or rendered result."
---

# Design interface

Deliver the requested interface design at the agreed fidelity: a screen blueprint, design artifact, or implemented surface. Establish that target from the request and available project context.

## Understand the surface

Read the existing design contract, tokens/components, accepted flows, content, brand direction, and supported platforms. For existing UI, inspect its rendered behavior and retain useful patterns. For a new surface, establish its primary user task and content hierarchy before selecting decoration.

Choose a coherent composition and visual direction using the actual audience and task. Make typography, spacing, density, imagery, and emphasis support that direction. Avoid filling gaps with generic claims, invented testimonials, or placeholder content presented as real.

Inspect available design tools and access before choosing an artifact format. Use a requested available tool when it supports the agreed result; retain the editable file/document, relevant revision, and opening/export instructions. Check that handed-off structure, component constraints, content, and states survive an export rather than assuming a screenshot or exported markup preserves them. If a required tool or format is unavailable, state that gap before substituting another deliverable.

## Design the complete behavior

Use [screen and state requirements](references/screen.template.md) when the interface needs a detailed handoff. Specify meaningful loading, empty, error, success, selected, focus, and disabled behavior. Include responsive/adaptive differences only for supported surfaces. Keep accessibility and recovery part of the behavior rather than a final visual pass.

Reuse the existing component system; identify a genuinely shared token/component need without turning every page into a new design system. If implementation is requested, follow local code conventions and verify the actual rendered result with available tools.

When the requested fidelity permits it, a small local HTML/CSS prototype with SVG diagrams or illustrations is an editable fallback. Use synthetic data and only the interactions needed to answer the design question; reuse existing components when working inside a product. Mark static controls, simulated backend behavior, and native/platform behavior the fallback cannot establish. Flow graphs complement the screens; connected drawings alone do not demonstrate working navigation, validation, or recovery.

## Verify and hand off

Walk the primary task and important states, including the route out of an error, cancellation, or dead end. Inspect hierarchy, content fit, overflow, interaction feedback, keyboard behavior, and supported viewport/surface changes. Distinguish a visual proposal from behavior proven in a runnable interface. State uninspected states or unavailable rendering access.

For a changed rendered surface, preserve useful baseline and result screenshots or video at matching routes, viewports, roles, fixture data, and states. For a new surface, capture the result against the agreed design criteria. Record the tested revision, interaction outcomes, and relevant regression-test results; screenshots alone do not prove keyboard or recovery behavior. Inspect artifacts for sensitive data and add useful proof to an authorized PR as it becomes available, using actual accessible uploads or clearly labeled local artifacts. State missing recordings or checks rather than inventing them.

Before declaring the result ready, require a separate agent in fresh context to challenge the candidate against raw accepted requirements, current component constraints, and actual design/interaction evidence, without the author's planning conversation. The reviewer must distinguish a proposal from exercised behavior and preserve demonstrated defects. If independent review is unavailable, report unreviewed and not ready; resolve blocking findings before handoff. Independent review does not replace required human approval.

Finish with the design/result, key decisions, state/surface coverage, verification, and unresolved product choices. Next: `build-design-system` for repeated shared needs, `implement-change` for a design handoff, or `review-interface` for independent evaluation.
