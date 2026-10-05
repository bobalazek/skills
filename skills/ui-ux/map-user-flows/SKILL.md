---
name: map-user-flows
description: "Define or improve user journeys, navigation, decision points, and failure/recovery paths for a product capability, grounded in user goals and existing behavior where available."
---

# Map user flows

Produce a flow the product and implementation can use: actors, entry points, actions, states, decisions, outcomes, and recovery. Match detail to the requested capability.

Read the accepted goal, scenarios, domain rules, available user evidence, and supported surfaces. For existing software, inspect the actual journey before proposing changes. Preserve useful familiar behavior and identify what must change. For a new product, label untested assumptions about users and their context.

Map the primary path and relevant branches: missing input, validation, permission, empty/loading/error/success states, cancellation, repeated actions, and recovery. Include offline, background, cross-device, or multi-actor behavior only when the capability needs it. Explain what the user sees and can do at each meaningful state.

Reduce unnecessary decisions and steps while preserving informed consent, clear consequences, and recoverability. Keep navigation labels consistent with domain language. Distinguish the interface decision from backend ownership or implementation mechanics.

Use [the flow contract](references/flow.template.md) for a durable map. A Mermaid flow/state diagram can clarify branches; pair it with observable outcomes and open questions. Validate through representative task walkthroughs and available evidence. A heuristic walkthrough is not a user study.

Finish with the agreed flow, affected current behavior, state/recovery requirements, and unresolved decisions. Next: `design-interface` for composition, `write-spec` for behavior acceptance, or `build-prototype` when interaction uncertainty needs observation.
