---
name: map-user-flows
description: "Map user journeys, navigation, decisions and recovery for a product capability, grounded in accepted goals and current behavior. Use for paths and state transitions before detailed screen composition or string writing."
---

# Map user flows

## Use this skill

Use this for a usable map of actors, entry points, actions, states, outcomes and recovery. Reuse accepted goals, domain rules, user evidence and supported surfaces. `design-interface` owns screen composition; `write-interface-copy` owns a dedicated string set; `write-spec` owns the behavior acceptance contract.

For existing software, inspect the actual journey and preserve useful familiar behavior. For a new product, label assumptions about users and their context rather than treating them as observed needs.

## Trace paths and decisions

Map the primary path and relevant branches: missing input, validation, permission, loading/empty/error/success states, cancellation, repeated actions and recovery. Add offline, background, cross-device or multi-actor behavior only where the capability requires it. Describe what the user sees and can do at each meaningful state.

Reduce unnecessary decisions and steps while preserving informed consent, understandable consequences and recoverability. Use domain language for labels. Keep interface decisions distinct from backend ownership and implementation mechanics.

## Map navigation when it is unsettled

For content grouping, destination structure or findability, use [the navigation and findability guide](references/navigation.playbook.md). Inventory relevant destinations and current entry paths before regrouping them. Produce the affected hierarchy, label/destination map and connected journeys; a settled transactional flow does not need a navigation redesign.

Check alternate entries, permissions, meaningful back/return paths and moved or unavailable destinations against actual behavior. A labeling problem does not itself justify new search infrastructure. Keep proposed grouping or labels separate from participant evidence that people can find them.

## Represent the flow

For a durable map, use [the flow contract](references/flow.template.md) in the existing project format. When branches need a graph, retain editable Mermaid or SVG with named states, triggers/guards, return paths and observable outcomes. Connect those states to screens or prototype interactions and accepted criteria, avoiding a parallel product specification.

Check generated diagrams in an available renderer and record rendering gaps. A connected graph describes behavior; it does not implement or validate it.

## Result and verification

Walk representative tasks from their actual starting conditions. Follow important failure and cancellation branches to usable exits or recovery, checking unreachable states and unintended dead ends. Distinguish intended paths from interactions observed in the product/prototype. An expert walkthrough is not a user study.

Before readiness, have a separate agent in fresh context walk the raw requirements, candidate map and available journey evidence without the author's conversation or preferred conclusion. Retain its returned reviewer/session identity, evaluated map revision, findings and coverage. Resolve demonstrated gaps and independently recheck affected paths after changes; without the assessment, report unreviewed and not ready. Required human approval remains separate.

Return the map, affected current behavior, state/recovery requirements, observed checks and unresolved decisions, distinguishing proposals from accepted choices. Match requested depth and project format. Include useful safe map/walkthrough proof and independent findings in authorized PR work; refresh evidence affected by shared navigation changes.

## Next steps

Pass the accepted map and exact gaps to `design-interface` for composition, `write-interface-copy` for detailed strings, or `write-spec` for behavior criteria. Use `build-prototype` for interaction uncertainty. For findability or comprehension needing participants, use `test-usability` with the versioned hierarchy/labels, target destinations and neutral question.

Check availability or describe the plain action, carrying revision and evidence limits. Finish a mapping-only request or continue ready work already authorized; no follow-up is required for its own sake.
