---
name: design-interface
description: "Design or improve a concrete screen, page, or interface with clear visual hierarchy, content, states, responsive behavior, and a usable implementation handoff or rendered result."
---

# Design interface

Deliver the requested interface design at the agreed fidelity: a screen blueprint, design artifact, or implemented surface. Establish that target from the request and available project context.

## Understand the surface

Read the existing design contract, tokens/components, accepted flows, content, brand direction, and supported platforms. For existing UI, inspect its rendered behavior and retain useful patterns. For a new surface, establish its primary user task and content hierarchy before selecting decoration.

Choose a coherent composition and visual direction using the actual audience and task. Make typography, spacing, density, imagery, and emphasis support that direction. Avoid filling gaps with generic claims, invented testimonials, or placeholder content presented as real.

## Design the complete behavior

Use [screen and state requirements](references/screen.template.md) when the interface needs a detailed handoff. Specify meaningful loading, empty, error, success, selected, focus, and disabled behavior. Include responsive/adaptive differences only for supported surfaces. Keep accessibility and recovery part of the behavior rather than a final visual pass.

Reuse the existing component system; identify a genuinely shared token/component need without turning every page into a new design system. If implementation is requested, follow local code conventions and verify the actual rendered result with available tools.

## Verify and hand off

Walk the primary task and important states. Inspect hierarchy, content fit, overflow, interaction feedback, keyboard behavior, and supported viewport/surface changes. Distinguish a visual proposal from behavior proven in a runnable interface. State uninspected states or unavailable rendering access.

Finish with the design/result, key decisions, state/surface coverage, verification, and unresolved product choices. Next: `build-design-system` for repeated shared needs, `implement-change` for a design handoff, or `review-interface` for independent evaluation.
