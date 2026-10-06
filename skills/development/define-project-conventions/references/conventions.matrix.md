# Convention matrix

Select topics from the project's actual surfaces and known contributor decisions. Record why a topic needs a rule; leave irrelevant topics out. This matrix helps establish conventions and does not prescribe a stack or directory tree.

## Establish the authority

Before adding standards, locate root and nested instructions, README/contributor docs, existing convention indexes, architectural decisions, package manifests, generators, and formatter/linter/compiler settings. Inspect representative maintained code and deliberate exceptions. Check whether memory or learning indexes point to stale rules or unresolved proposals.

For each relevant topic, distinguish:

| Status | Meaning and treatment |
| --- | --- |
| Accepted | A current instruction or accepted decision establishes the rule; cite its owning source and scope |
| Observed | Code repeats the pattern; record representative locations and exceptions without declaring it mandatory |
| Proposed | A new or changed rule needs a decision; identify the choice, reason, and decision owner |
| Conflicting or stale | Sources disagree or no longer match supported behavior; locate the authority and resolve or expose the conflict |

Track enforcement separately: a documented requirement can lack an automated check, and a linter setting can enforce only part of a convention. Code frequency, a memory entry, or a tool default does not establish acceptance. Do not silently weaken an accepted rule because legacy code violates it.

Keep the rule in its existing authoritative location. Add a new document only for substantial missing guidance with a clear owner and audience. Agent instructions and indexes should link to it. A rule record needs its scope, status/source, rationale, preferred local example, valid exceptions, enforcement command or review check, and adoption approach. Avoid repeating fields that are already clear from the document.

## Choose the relevant topics

| Topic | Decisions worth documenting | Useful evidence/check |
| --- | --- | --- |
| Repository and package structure | Applications/libraries, feature or layer ownership, dependency direction, package exports, test/docs/assets locations | Workspace manifests, imports, representative additions, build boundaries |
| Files and symbols | Names for files, directories, public modules, classes, functions, variables, types, and generated artifacts | Maintained examples, resolver/tool rules, public consumers |
| Types and validation | Valid states, null/error handling, external input validation, serialization | Compiler/schema settings and boundary scenarios |
| Data model | Identity, relationships, field meaning, constraints, state transitions, ownership, lifecycle | Schemas, readers/writers, invariant and migration checks |
| APIs and integrations | Contract shape, errors, permissions, retries, idempotency, compatibility | Requests/events, consumers, failure cases |
| UI | Component ownership, state, routes, tokens, supported interaction and accessibility patterns | Existing components, rendered examples and behavior checks |
| Quality and delivery | Applicable tests, formatting, lint, build, review/release rules, exceptions | Commands actually present, CI and repository policy |
| Documentation and knowledge | Canonical rules, decisions, facts, lessons, memory indexes, update triggers | Resolved links and a representative task walkthrough |

## Folder, file, and package structure

Make common placement decisions explicit using the existing project shape:

- Where a feature's entry point, domain behavior, persistence, UI, tests, fixtures, assets, and documentation belong. Describe only locations the project uses; a small application may need no layers or packages.
- What belongs beside its caller and what earns a shared module. Identify real consumers and ownership before extracting; a generic `utils` directory is not a substitute for deciding responsibility.
- Allowed dependency directions between packages or features, public export surfaces, and when internal imports are acceptable. Include configured aliases and module resolution where they affect imports.
- Source versus generated output, vendored code, build artifacts, and checked-in generated files. Name the generator/check instead of asking contributors to edit derived files.
- File/folder case, separators, extensions, index or barrel files, test/story naming, and required framework filenames. Check case-sensitive builds and avoid renames that break public imports or tooling.
- Package naming and scope, ownership of manifests, shared configuration, and version/release boundaries when the repository has multiple packages. Do not introduce a monorepo policy for a single package.

Use a small annotated example from the repository. A copied full tree ages quickly; show the boundary and decision the example is meant to teach.

## Naming by language and boundary

Document relevant names at each level, rather than one universal casing rule:

| Surface | Questions to settle from local and language/framework evidence |
| --- | --- |
| Modules and files | How do file/module names relate to exported symbols, import paths, autoloading, or routes? Which filenames are framework-defined? |
| Classes, interfaces, types, models | What identifies a domain concept, value type, persistence model, or transport shape? Are prefixes/suffixes meaningful locally or redundant? |
| Functions, methods, commands | How are actions, queries, predicates, event handlers, and asynchronous operations named? Does a name reveal a meaningful side effect? |
| Variables, parameters, constants | How are units, optional values, collections, booleans, identifiers, and acronyms expressed? When are short local names clear? |
| Properties, API fields, events | Which public names are compatibility contracts? Where is translation between external names and internal names owned? |
| Tables, columns, keys, indexes | What are the case, pluralization, identifier, relationship-key, constraint, and migration naming rules? Are SQL names explicit or derived? |
| ORM/domain/transport models | How do model names map to stored entities and API representations? Which mappings are explicit, generated, or framework-controlled? |

Inspect each relevant language separately. For example, Python module/package naming, Go package and export visibility, Rust modules/types/traits, JVM or .NET namespaces and types, and JavaScript/TypeScript exports have different constraints. Load current official guidance for the selected language or framework only when needed to settle a choice. Record the supported version or configuration when it affects the rule. Do not impose one language's casing or class model on another.

Prefer names that carry domain meaning and distinguish values that would otherwise be confused. If local conventions need a unit or currency suffix, show it with a real example. Avoid invented abbreviations or universal suffix rules. Renaming an exported symbol, database field, route, or serialized property may require a compatibility plan; a naming decision alone does not authorize the change.

## Check usability and adoption

Walk representative additions through the proposed rules: place a feature/file, name a function and domain value, and, where applicable, add a model/column or public field. Can a contributor find the owning rule, an example, exceptions, and a check without reconstructing the whole repository?

Run the existing scoped checks that establish the rules being claimed. Check that examples match actual APIs and configuration. Mark rules checked by human review honestly; do not add an enforcement claim because CI is green. For legacy inconsistencies, document whether the rule applies to new code, touched code, or a separately approved migration. Keep mass renaming and reformatting outside convention authoring unless requested.
