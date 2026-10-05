# Web and typed-code conventions

Select the relevant stack and verify its actual version before relying on framework-specific APIs.

## TypeScript or other typed application code

Read compiler/linter policy. Model valid states explicitly where it prevents ambiguous behavior. Validate untrusted inputs at runtime; a static type is not input validation. Keep exported contracts and error/null handling consistent with consumers. Avoid type assertions that conceal a missing boundary check.

## React and related component frameworks

Inspect existing ownership of state, effects, data fetching, server/client boundaries, and forms. Derive values where possible rather than maintaining competing state. Keep effects tied to synchronization needs and verify cleanup, stale responses, and repeated rendering where relevant. Follow the project's framework-version guidance rather than transferring rules between different runtimes.

## Static and server-rendered websites

Choose interactivity per actual behavior. Preserve the project's rendering, routing, asset, content, and hydration conventions. Verify which behavior depends on client JavaScript and which can remain server/static. Check relevant navigation, responsive, and accessibility behavior in the rendered result.

## Styles and components

Use existing tokens and component contracts. Establish when a component belongs to a feature versus a shared library. Introduce variants for repeated supported behavior, not speculative combinations. Check supported surfaces rather than imposing an invented device matrix.
