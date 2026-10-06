# UI/UX

This domain owns design references, user journeys, concrete interface design, rendered experience review, usability studies and shared interface foundations. Its six packages are under active development.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Design research | Capture existing patterns | [capture-design-reference](../../skills/ui-ux/capture-design-reference/SKILL.md) | A reusable analysis tied to inspected interface captures, with measured values separated from estimates |
| Experience structure | Journeys and navigation | [map-user-flows](../../skills/ui-ux/map-user-flows/SKILL.md) | Actors, entry points, actions, states, decisions, outcomes, and recovery paths |
| Interface design | Screen/page composition | [design-interface](../../skills/ui-ux/design-interface/SKILL.md) | A concrete interface design or implemented surface with content, hierarchy, states, and supported responsive behavior |
| Quality | Rendered experience | [review-interface](../../skills/ui-ux/review-interface/SKILL.md) | Observed usability, accessibility, interaction, and visual findings with evidence and coverage |
| User research | Task-based usability | [test-usability](../../skills/ui-ux/test-usability/SKILL.md) | A focused study protocol or findings traced to actual task observations, with coverage and uncertainty |
| Shared foundations | Tokens and components | [build-design-system](../../skills/ui-ux/build-design-system/SKILL.md) | Useful tokens/themes/component contracts and representative verified consumers with a migration path when needed |

## Boundaries and use

`map-user-flows` defines how users reach an outcome and recover from meaningful failures. `design-interface` defines the composition and complete states of the selected screen or page. `build-design-system` encodes repeated needs into shared foundations. `review-interface` evaluates the actual rendered experience against tasks and supported surfaces.

For new products, derive flows and components from actual intended behavior. For existing products, inspect the current experience, component consumers, design contract, and user expectations before changing them. Template adaptation starts by retaining useful tokens and components.

Technical architecture owns module/service boundaries and data contracts. A design system owns shared interface contracts. The two can inform each other without becoming duplicate skills.

`capture-design-reference` records what can actually be inspected in supplied interfaces; it does not establish the target product's design rules. `test-usability` studies task attempts by real or likely users, or prepares that study when access is missing. `review-interface` provides an expert assessment and cannot stand in for participant evidence. Neither a simulation nor agreement on a study plan demonstrates usability.

## Resources and verification

Packages carry conditional guidance for reference capture, study protocols and evidence, flow contracts, screen/state requirements, rendered review, or design-system contracts. Load only what the requested work needs.

Verify relevant loading, empty, error, success, keyboard/focus, recovery, and responsive/platform behavior. Inspect the supported surfaces; do not impose an invented device matrix. A static mockup cannot prove runtime behavior, and a heuristic review cannot claim user-study evidence or comprehensive standards conformance.

See [workflows](../workflows.md) for design/engineering dependencies and parallel work.
