---
name: design-interface
description: "Design or improve a concrete screen, page or interface with visual hierarchy, content, states and responsive behavior, delivering an agreed design artifact, implementation handoff or rendered surface."
---

# Design interface

## Use this skill

Use this for a concrete interface at the requested fidelity. Establish whether the result is a screen blueprint, editable design artifact or implemented surface, reusing accepted flows, content and design decisions.

Use `map-user-flows` when the journey or navigation is unresolved, `capture-design-reference` for reusable analysis of existing interfaces, or `write-interface-copy` for a dedicated set of labels/state messages. Keep routine wording within screen design. Repeated shared contracts can belong to `build-design-system`.

## Inspect the surface and choose the format

Read the design contract, tokens/components, brand direction and supported platforms. Inspect existing UI in its rendered state and preserve useful patterns. For a new surface, establish the primary task and content hierarchy before selecting decoration.

Choose a coherent composition for the audience and task. Make typography, spacing, density, imagery and emphasis serve it. Do not fill missing content with invented testimonials or claims presented as real.

Check available tools and access before choosing a format. Use the requested tool when it supports the result. Preserve editable artifacts, revision and opening/export instructions; inspect whether export retains structure, component constraints, content and states. State an unavailable required format before offering a substitute.

## Design states and implementation behavior

For a detailed handoff, use [screen and state requirements](references/screen.template.md). Specify meaningful loading, empty, error, success, selected, focus and disabled states. Include accessibility, recovery and supported responsive/adaptive differences in the behavior contract.

Reuse existing components and patterns before proposing additions. Identify a shared need without turning one screen into a new design system. If implementation is requested, follow local code conventions and verify the rendered result.

When the requested fidelity allows it, a small local HTML/CSS prototype with SVG can be an editable fallback. Use synthetic data and only interactions needed for the design question, reusing product components where applicable. Label static controls, simulated services and native/platform behavior it cannot establish. Connected drawings alone do not demonstrate navigation, validation or recovery.

## Result and verification

Walk the primary task and consequential states, including escape from errors, cancellation and dead ends. Inspect hierarchy, content fit, overflow, feedback, keyboard behavior and supported surface changes. Distinguish design intent from exercised behavior; state missing rendering access and uninspected states.

For changed surfaces, retain useful baseline/result captures at comparable routes, viewports, roles, fixtures and states. For new surfaces, capture against agreed criteria. Record revision, interaction outcomes and relevant regression results. Screenshots cannot prove keyboard or recovery behavior. Inspect sensitive content before sharing proof; authorized PRs need actual accessible evidence or explicitly labeled local artifacts.

Before readiness, have a separate agent in fresh context challenge raw requirements, candidate, component constraints and observed proof without the author's conversation or preferred answer. Retain its returned reviewer/session identity, evaluated artifact or revision, findings and coverage. Resolve blocking defects and independently recheck affected states after fixes. Without that assessment, report unreviewed and not ready; required human approval remains separate.

Return the design/result, key decisions, editable entry point, verified state/surface coverage and unresolved choices. Use the requested audience/depth and authoritative project format, updating existing design knowledge rather than duplicating it.

## Next steps

Use `build-design-system` for accepted repeated shared needs, `implement-change` for an accepted design awaiting implementation, or `review-interface` for independent evaluation of an available rendered candidate. Carry the design revision, accepted behavior, component constraints and evidence limits; check availability or describe the plain action. Continue ready authorized work without reopening settled design, or finish at the requested fidelity.
