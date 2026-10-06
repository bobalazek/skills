---
name: build-design-system
description: "Create or evolve shared tokens, themes, component contracts and usage rules from recurring interface needs, checking representative consumers and migration effects. Use for shared foundations rather than a single screen."
---

# Build design system

## Use this skill

Use this when actual consumers need shared visual or component rules. Reuse accepted flows, visual direction and existing implementation contracts; scale the system to the product's current needs.

`design-interface` owns screen composition. `capture-design-reference` records observed patterns in another interface; those samples are inputs to a decision, not automatically the target's tokens or component API.

## Inspect existing foundations and consumers

Read the authoritative design contract, implemented tokens/themes/components, supported surfaces and local code conventions. Search for existing components and extensions before adding equivalents. For a new system, start with representative screens and flows. For an existing system or template, inspect relevant consumers and preserve useful contracts.

Identify the recurring need, its owner and the smallest shared responsibility. Keep domain behavior in its feature unless sharing has a concrete purpose; a system should not accumulate hypothetical variants or abstraction layers.

## Define and build the contracts

Define token meanings, component responsibilities, supported variants/states and usage rules. Introduce semantic names where themes or consumers need the distinction. Include content constraints, accessibility behavior, relevant controlled/uncontrolled behavior and supported platform differences.

When recording foundations, governance or a breaking change, use [system contracts](references/system-contracts.template.md) in the existing authoritative location. Give extension versus new-component criteria and useful usage examples.

If code is requested, implement the selected contracts under local conventions and demonstrate them in representative consumers or an existing preview harness. Reuse installed tooling rather than adding a component platform by default. Contract design alone does not authorize unrelated migrations or delivery.

## Result and verification

Return the requested design contract or working foundations, usage examples, consumer effects and known gaps. Match the requested audience/depth and project format. A token file alone cannot establish a usable system.

Inspect meaningful states, themes, keyboard/focus behavior, content extremes and supported surfaces. Trace consumers after shared changes. For renamed tokens or breaking APIs, record migration steps, compatibility where needed, removal criteria and evidence that affected consumers work. Distinguish proposed behavior from rendered and exercised behavior; record the tested revision and uninspected coverage.

Before acceptance, have a separate agent in fresh context challenge raw requirements, candidate contracts/components, consumer evidence and checks without the author's conversation or preferred answer. Retain its returned reviewer/session identity, evaluated revision, findings and coverage. Reconcile defects and independently recheck affected consumers after fixes. Without that assessment, report unreviewed. For authorized PR work, include safe relevant rendered/interaction proof and independent findings, refreshing evidence after affected edits; human approval remains separate.

## Next steps

Pass accepted contracts and migration limits to `design-interface` for consumer design or `implement-change` for requested integration. Use `review-interface` for an independent assessment of rendered representative consumers once they are available. Check skill availability and state the plain action when absent. Continue only ready work already authorized; a shared-contract request can end with the contract and its limitations.
