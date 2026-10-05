# Web and typed-code conventions

Load the sections for the selected stack. Inspect supported versions, router/runtime, compiler settings, and local examples before defining a rule. Use current official guidance to settle unresolved framework behavior; do not transfer rules between runtimes with similar APIs.

## Typed application code

Read compiler/linter policy and exported contracts. Establish where inference is sufficient and where explicit types document a boundary. Inspect how the project represents absent values, errors, identifiers, units, and discriminated states. Prefer a representation that excludes invalid states when it makes the domain clearer; a type assertion does not establish that external data is valid.

Document the validation boundary for requests, storage reads, environment values, and third-party responses where relevant. Show how parsed data reaches domain code and how rejected input becomes a supported error. Distinguish runtime schemas, persistence models, and public payloads when their responsibilities differ; do not create parallel types solely to fill layers.

Use the project's names for types/classes/interfaces, functions, variables, booleans, constants, generics, and files. Verify whether export naming, extension choice, case, and aliases affect the build or framework. Avoid imposing prefixes, suffixes, or export styles without a local reason. Changes to public names must consider consumers.

## React and related component frameworks

Inspect component/file naming, feature versus shared ownership, props, hooks or composables, state stores, event handlers, and data-fetching conventions. Find established contracts before creating another form, modal, table, or loading-state implementation. Match the project's supported framework and renderer.

Decide which state is local, shared, URL-owned, or server-owned. Derive values where practical and identify the owner when state must be synchronized. For effects or subscriptions, check lifecycle, cleanup, stale responses, and repeated execution in the relevant runtime. Document existing rules for request cancellation and cache invalidation where they affect the component contract.

For server/client boundaries, identify which code may access secrets, persistent state, browser APIs, or interactive events. Verify serialization, authorization, caching, and data exposure at the actual boundary. A client-side permission check does not establish server-side access control.

Follow existing patterns for forms, validation messages, pending/submitted/error states, disabled controls, and duplicate actions. Explain how the component is checked through observable behavior rather than internal implementation details alone.

## Static and server-rendered websites

Preserve established routing, layouts, partials, content schemas, asset handling, rendering, and hydration rules. Identify required route filenames and the source of metadata and redirects. Use client interactivity when the requested behavior requires it; document how it is introduced in this project's runtime.

Check which behavior depends on JavaScript and which is available in the rendered HTML. For relevant routes, verify navigation, canonical URL and locale behavior, content loading, error/not-found handling, and framework-generated output. Require only the supported environments and indexing requirements established by the project.

## Styles and component design

Locate tokens, themes, shared primitives, and accepted design references. Document component naming, style scoping, variant ownership, responsive rules, and where one-off layout belongs. Reuse supported variants before introducing new tokens or a second styling system; repeated supported behavior can justify a shared component.

Keep semantic controls, labels, keyboard use, focus behavior, and meaningful error states in the convention's examples. Match the project's accessibility requirements and check the rendered result. Visual consistency should refer to existing tokens, components, or an accepted design; personal aesthetic preference is not a contributor rule.

## Checks and exceptions

For each adopted stack rule, identify the configured formatter/linter/compiler/build check or a specific review scenario. Distinguish configuration enforcement from runtime evidence. Preserve framework-required exceptions and generated code rules. When the existing approach differs from a proposal, state what changes for future work and what needs a separate migration.
