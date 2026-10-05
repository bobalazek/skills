# UI/UX

This domain owns user journeys, concrete interface design, rendered experience review, and shared interface foundations. All four entries have draft packages.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Experience structure | Journeys and navigation | [map-user-flows](../../skills/ui-ux/map-user-flows/SKILL.md) | Actors, entry points, actions, states, decisions, outcomes, and recovery paths |
| Interface design | Screen/page composition | [design-interface](../../skills/ui-ux/design-interface/SKILL.md) | A concrete interface design or implemented surface with content, hierarchy, states, and supported responsive behavior |
| Quality | Rendered experience | [review-interface](../../skills/ui-ux/review-interface/SKILL.md) | Observed usability, accessibility, interaction, and visual findings with evidence and coverage |
| Shared foundations | Tokens and components | [build-design-system](../../skills/ui-ux/build-design-system/SKILL.md) | Useful tokens/themes/component contracts and representative verified consumers with a migration path when needed |

## Boundaries and use

`map-user-flows` defines how users reach an outcome and recover from meaningful failures. `design-interface` defines the composition and complete states of the selected screen or page. `build-design-system` encodes repeated needs into shared foundations. `review-interface` evaluates the actual rendered experience against tasks and supported surfaces.

For new products, derive flows and components from actual intended behavior. For existing products, inspect the current experience, component consumers, design contract, and user expectations before changing them. Template adaptation starts by retaining useful tokens and components.

Technical architecture owns module/service boundaries and data contracts. A design system owns shared interface contracts. The two can inform each other without becoming duplicate skills.

## Resources and verification

Each package includes its relevant artifact shape or checklist: flow contract, screen/state requirements, rendered review checks, or design-system contracts. Load them only when the requested work needs that level of detail.

Verify relevant loading, empty, error, success, keyboard/focus, recovery, and responsive/platform behavior. Inspect the supported surfaces; do not impose an invented device matrix. A static mockup cannot prove runtime behavior, and a heuristic review cannot claim user-study evidence or comprehensive standards conformance.

See [workflows](../workflows.md) for design/engineering dependencies and parallel work.
