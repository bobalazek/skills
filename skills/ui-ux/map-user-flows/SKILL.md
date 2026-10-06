---
name: map-user-flows
description: "Define or improve user journeys, navigation, decision points, and failure/recovery paths for a product capability, grounded in user goals and existing behavior where available."
---

# Map user flows

Produce a flow the product and implementation can use: actors, entry points, actions, states, decisions, outcomes, and recovery. Match detail to the requested capability.

Read the accepted goal, scenarios, domain rules, available user evidence, and supported surfaces. For existing software, inspect the actual journey before proposing changes. Preserve useful familiar behavior and identify what must change. For a new product, label untested assumptions about users and their context.

Map the primary path and relevant branches: missing input, validation, permission, empty/loading/error/success states, cancellation, repeated actions, and recovery. Include offline, background, cross-device, or multi-actor behavior only when the capability needs it. Explain what the user sees and can do at each meaningful state.

Reduce unnecessary decisions and steps while preserving informed consent, clear consequences, and recoverability. Keep navigation labels consistent with domain language. Distinguish the interface decision from backend ownership or implementation mechanics.

Use [the flow contract](references/flow.template.md) for a durable map. Where branches or transitions need a graph, use an editable Mermaid or SVG diagram with named states, triggers/guards, return paths, and observable outcomes. Connect its states to the relevant screens or prototype interactions; a drawing describes behavior but does not implement it. Check generated diagrams in an available renderer and record any rendering gap.

Validate through representative task walkthroughs and available evidence. Follow each important failure or cancellation branch to a usable exit or recovery; identify unreachable states and unintended dead ends. Distinguish intended paths from interactions observed in the product or prototype. A heuristic walkthrough is not a user study.

Before declaring the flow ready, have a separate agent in fresh context adversarially walk it against the raw accepted requirements, candidate map, and available journey evidence, without the author's planning conversation. Resolve demonstrated gaps and preserve unverified claims; if an independent reviewer is unavailable, report unreviewed and not ready. Include useful map/walkthrough evidence in authorized PR work as it becomes available. Independent review does not replace required human approval.

Finish with the agreed flow, affected current behavior, state/recovery requirements, and unresolved decisions. Next: `design-interface` for composition, `write-spec` for behavior acceptance, or `build-prototype` when interaction uncertainty needs observation.
