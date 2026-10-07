# UI/UX

This domain owns design references, user journeys, wireframes, detailed interface design and state messages, rendered experience review, usability studies and shared interface foundations. Its eight packages are under active development.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Design research | Capture existing patterns | [capture-design-reference](../../skills/ui-ux/capture-design-reference/SKILL.md) | A reusable analysis tied to inspected interface captures, with measured values separated from estimates |
| Experience structure | Journeys and navigation | [map-user-flows](../../skills/ui-ux/map-user-flows/SKILL.md) | Actors, paths, states and recovery; destination hierarchy, labels and findability when navigation is in scope |
| Experience structure | Screen wireframes | [create-wireframes](../../skills/ui-ux/create-wireframes/SKILL.md) | Editable low-fidelity screen layouts with content hierarchy, state coverage and requirement links |
| Interface design | Detailed screen design | [design-interface](../../skills/ui-ux/design-interface/SKILL.md) | A detailed interface design or implemented surface with visual hierarchy, content, states, and supported responsive behavior |
| Interface design | Interface copy | [write-interface-copy](../../skills/ui-ux/write-interface-copy/SKILL.md) | Strings keyed by state and context, with terminology, behavior, accessibility and localization constraints |
| Quality | Rendered experience | [review-interface](../../skills/ui-ux/review-interface/SKILL.md) | Observed usability, accessibility, interaction, and visual findings with evidence and coverage |
| User research | Task-based usability | [test-usability](../../skills/ui-ux/test-usability/SKILL.md) | A focused study protocol or findings traced to actual task observations, with coverage and uncertainty |
| Shared foundations | Tokens and components | [build-design-system](../../skills/ui-ux/build-design-system/SKILL.md) | Useful tokens/themes/component contracts and representative verified consumers with a migration path when needed |

## Boundaries and use

[Content](content.md) owns website messaging and page prose. UI/UX owns the journey, screen structure and behavior-dependent interface strings, including forms embedded in a marketing page. A page can need both domains; keep each artifact with its owner and reconcile meaning and text fit. See the [product-page route](../workflows.md#plan-and-write-a-product-page).

`map-user-flows` defines how users reach an outcome and recover from meaningful failures. `create-wireframes` resolves screen, full-page or website hierarchy and content/state placement before visual detail. `design-interface` develops the selected structure into detailed visual design and complete states, distinguishing refinement from an agreed replacement of the visual direction. Reuse accepted flows or existing screens; skip wireframing when structure is settled. `build-design-system` encodes repeated needs into shared foundations. `review-interface` evaluates the actual rendered experience against tasks and supported surfaces.

Use `write-interface-copy` when the requested deliverable is the labels, messages, help and recovery instructions themselves. Routine wording can stay within `design-interface`; a copy-only request does not authorize redesign. Copy must reflect actual behavior, including what is saved, sent, reversible or still pending. A draft string does not prove fit or accessibility in the rendered interface.

Navigation work stays in `map-user-flows`: inventory destinations and access rules, propose grouping and labels, and preserve search, deep links and return paths. Carry a proposed hierarchy and its label version into `test-usability` when findability needs participant evidence. A neat sitemap alone cannot establish that users can find the right destination.

For new products, derive flows and components from actual intended behavior. For existing products, inspect the current experience, component consumers, design contract, and user expectations before changing them. Template adaptation starts by retaining useful tokens and components. A website redesign composes these existing owners through the [product-page route](../workflows.md#plan-and-write-a-product-page); it does not require another skill with duplicate planning, copy and design procedures.

Technical architecture owns module/service boundaries and data contracts. A design system owns shared interface contracts. The two can inform each other without becoming duplicate skills. [Media](media.md) owns exported videos, narration, product captures, decks and social carousels; UI/UX owns interactive carousels and interface transitions. Sharing visual conventions does not require routing a media artifact through screen design.

`capture-design-reference` records what can actually be inspected in supplied interfaces; it does not establish the target product's design rules. Reproducible captures of the user's own product for marketing, docs or media belong to Media's `capture-product-screens`. `test-usability` studies task attempts by real or likely users, or prepares that study when access is missing. `review-interface` provides an expert assessment and cannot stand in for participant evidence. Neither a simulation nor agreement on a study plan demonstrates usability.

## Resources and verification

Packages carry conditional guidance for reference capture, study protocols and evidence, flow contracts, wireframe annotations, screen/state requirements, rendered review, or design-system contracts. Load only what the requested work needs.

Verify relevant loading, empty, error, success, keyboard/focus, recovery, and responsive/platform behavior. Inspect the supported surfaces; do not impose an invented device matrix. A static mockup cannot prove runtime behavior, and a heuristic review cannot claim user-study evidence or comprehensive standards conformance.

See [workflows](../workflows.md) for design/engineering dependencies and parallel work.
