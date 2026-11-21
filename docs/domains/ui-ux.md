# UI/UX

This domain owns user journeys, wireframes, detailed interface design with its state messages, and rendered experience review. Its four packages are under active development.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Experience structure | Journeys and navigation | [map-user-flows](../../skills/ui-ux/map-user-flows/SKILL.md) | Actors, paths, states and recovery; destination hierarchy, labels and findability when navigation is in scope |
| Experience structure | Screen wireframes | [create-wireframes](../../skills/ui-ux/create-wireframes/SKILL.md) | Editable low-fidelity screen layouts with content hierarchy, state coverage and requirement links |
| Interface design | Detailed screen design | [design-interface](../../skills/ui-ux/design-interface/SKILL.md) | A detailed interface design or implemented surface with visual hierarchy, content, states, and supported responsive behavior |
| Quality | Rendered experience | [review-interface](../../skills/ui-ux/review-interface/SKILL.md) | Observed usability, accessibility, interaction, and visual findings with evidence and coverage |

## Boundaries and use

UI/UX owns the journey, screen structure and behavior-dependent interface strings, including forms embedded in a marketing page. Website messaging and page prose are outside this collection; keep them with their owner and reconcile meaning and text fit.

`map-user-flows` defines how users reach an outcome and recover from meaningful failures. `create-wireframes` resolves screen, full-page or website hierarchy and content/state placement before visual detail. `design-interface` develops the selected structure into detailed visual design and complete states, distinguishing refinement from an agreed replacement of the visual direction. Reuse accepted flows or existing screens; skip wireframing when structure is settled. `review-interface` evaluates the actual rendered experience against tasks and supported surfaces.

Labels, messages, help and recovery instructions stay within `design-interface`; a copy-only request does not authorize redesign. Copy must reflect actual behavior, including what is saved, sent, reversible or still pending. A draft string does not prove fit or accessibility in the rendered interface.

Navigation work stays in `map-user-flows`: inventory destinations and access rules, propose grouping and labels, and preserve search, deep links and return paths. When findability needs participant evidence, prepare a bounded study with the proposed hierarchy and its label version. A neat sitemap alone cannot establish that users can find the right destination.

For new products, derive flows and components from actual intended behavior. For existing products, inspect the current experience, component consumers, design contract, and user expectations before changing them. Template adaptation starts by retaining useful tokens and components.

Technical architecture owns module/service boundaries and data contracts. Shared interface contracts belong in the project's existing design system when one exists. UI/UX owns interactive carousels and interface transitions; exported videos, narration and social media are outside this collection.

`review-interface` provides an expert assessment and cannot stand in for participant evidence. Neither a simulation nor agreement on a study plan demonstrates usability.

## Resources and verification

Packages carry conditional guidance for flow contracts, wireframe annotations, screen/state requirements and rendered review. Load only what the requested work needs.

Verify relevant loading, empty, error, success, keyboard/focus, recovery, and responsive/platform behavior. Inspect the supported surfaces; do not impose an invented device matrix. A static mockup cannot prove runtime behavior, and a heuristic review cannot claim user-study evidence or comprehensive standards conformance.

See [workflows](../workflows.md) for design/engineering dependencies and parallel work.
