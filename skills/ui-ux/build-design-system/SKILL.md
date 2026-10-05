---
name: build-design-system
description: "Create or evolve shared design tokens, themes, component contracts, and usage conventions from actual interface needs, verifying representative components and migration impacts."
---

# Build design system

Build the shared interface foundation the product needs now. Start from recurring interface behavior and accepted visual direction; scale the system to real consumers.

## Inspect the foundation

Read the project's design contract, implemented tokens/themes/components, supported surfaces, and local code conventions. For a new system, use representative screens and flows. For an existing system or template, preserve useful contracts and inspect all relevant consumers before changing shared behavior.

## Define and build

Establish token meaning, component responsibilities, variants/states, and usage rules. Introduce semantic names where themes or consumers need that distinction; avoid token layers and variant combinations without a real use. Keep domain behavior in the owning feature unless sharing it has a concrete purpose.

Use [system contracts](references/system-contracts.template.md) to record foundations and governance in the existing authoritative location, such as a design document. Define extension versus new-component criteria, controlled/uncontrolled behavior where relevant, content constraints, accessibility behavior, and supported platform differences.

When code is requested, implement the selected tokens/components under local conventions and demonstrate them in representative consumers or an existing preview harness. Reuse installed tooling rather than adding a component platform by default.

## Verify and evolve

Check meaningful component states, themes, keyboard/focus behavior, content extremes, and supported surfaces. Trace shared consumers after a change. For renamed tokens or breaking component APIs, identify migration steps, compatibility period where needed, removal criteria, and verification of consumers.

Finish with working shared foundations or the requested design contract, usage examples, verified coverage, and known gaps. A token file alone does not establish a usable system. Next: `design-interface` or `implement-change` for consumers; `review-interface` for rendered experience review.
