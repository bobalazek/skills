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

Follow applicable repository instructions, documented conventions and tool configuration first. Where they leave a choice open, infer and follow consistent maintained surrounding code for the selected surface; this needs no new policy document. Only where neither provides guidance, use current best practices for the selected language/framework. Both written rules and established local code conventions override the defaults below. Expose conflicting or stale patterns rather than silently replacing local conventions or copying an isolated accident.

Keep the rule in its existing authoritative location. Add a new document only for substantial missing guidance with a clear owner and audience. Agent instructions and indexes should link to it. A rule record needs its scope, status/source, rationale, preferred local example, valid exceptions, enforcement command or review check, and adoption approach. Avoid repeating fields that are already clear from the document.

## Choose the relevant topics

| Topic | Decisions worth documenting | Useful evidence/check |
| --- | --- | --- |
| Repository and package structure | Applications/libraries, feature or layer ownership, dependency direction, package exports, test/docs/assets locations | Workspace manifests, imports, representative additions, build boundaries |
| Files and symbols | Names for files, directories, public modules, classes, functions, variables, types, and generated artifacts | Maintained examples, resolver/tool rules, public consumers |
| Types and validation | Valid states, null/error handling, external input validation, serialization | Compiler/schema settings and boundary scenarios |
| Code and dependencies | Reuse boundaries, collection operations, mutation ownership, control flow, error propagation, dependency additions/updates | Current callers, runtime behavior, supported APIs, manifests/lockfiles, focused checks |
| Data model | Identity, relationships, field meaning, constraints, state transitions, ownership, lifecycle | Schemas, readers/writers, invariant and migration checks |
| APIs and integrations | Resources/methods, response/error contracts, headers, permissions, retries, idempotency, pagination, compatibility | Requests/events, middleware, consumers, failure cases |
| Queries and storage | Database filtering and scope, relation loading, measured index choices, partitioning or sharding when justified | Generated queries, execution plans, workload and migration evidence |
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

For greenfield work without local guidance, use the language/framework's idiomatic structure. Keep related responsibilities together and add modules or shared boundaries only when the current work needs them. Match the layout to project size; do not create speculative layers or packages.

For a feature addition, identify its existing owning module and the nearest maintained equivalent before choosing paths. Keep feature-local behavior with its owner according to the repository's feature or layer structure; extract shared code when current consumers need the same contract. Similar-looking fragments with different domain rules can remain separate. A change in one consumer should not require flags or dependencies that only another consumer understands.

## Classes and file boundaries

Use the project's class/module model and keep responsibilities cohesive. Without local guidance, prefer one primary class per file and a corresponding filename where idiomatic for the selected language/framework. Keep supporting definitions together when that model calls for it. This default does not require introducing classes, splitting existing modules or renaming files.

## Code and dependency choices

Use these prompts for recurring decisions, then document only relevant adopted rules and exceptions. Preserve equivalent local styles; brevity or a favored language feature alone does not justify churn.

| Choice | Guidance and evidence |
| --- | --- |
| Reuse before adding | Inspect existing helpers/components and their callers, then language, standard-library, platform, and already-installed facilities. Reuse a matching contract; do not contort a near-match or create a general abstraction for hypothetical callers. A small local implementation can be clearer than a new dependency. |
| Collection lookup | For material repeated key lookup or membership work, consider a keyed collection or set instead of rescanning a sequence. Account for construction and memory cost; one lookup or a small collection may need only a scan. Define duplicate-key, missing-value, equality, and ordering behavior before replacing it. |
| Grouping and joins | Group once when multiple consumers need the same groups. Use a supported native or existing grouping operation, or a clear local loop. Choose one-to-one lookup versus one-to-many grouping deliberately; deduplication or map insertion must not silently discard meaningful duplicates. Fetching related data first still requires scope and missing-record handling. |
| Transformations | Preserve caller-owned inputs and shared state when the contract expects a new result. Allocate or copy only the parts that change; a new outer collection/object can still share nested objects. Mutation of a fresh local accumulator can be appropriate. Do not deep-clone everything or impose immutability on an API whose accepted contract is explicitly mutable. |
| Control flow | Guard clauses or early returns can make rejection paths and the successful path clearer. Check relevant input and permissions before avoidable work or effects, while preserving validation/error-order and information-disclosure requirements. Ensure every exit releases resources and completes required cleanup; avoid style-only rewrites. |
| Errors | Preserve the established exception or result-value contract. Catch where the caller can recover, translate at a boundary, or add useful context; retain the cause and distinguish absent data from a failed read. Logging alone does not turn a failed required operation into success. Explicit best-effort behavior needs a defined consequence and observable failure, without duplicate logs or sensitive payloads. |

Check the selected language's key equality, hashing, ordering, ownership and concurrency rules before adopting a collection pattern. Do not assume object identity, value equality or constant-time lookup across implementations. Grouping preserves multiple values per key; a single-value lookup can discard them. Record concrete APIs and examples in the project's language-specific conventions only when relevant.

Dependency conventions should name the configured package manager, manifest/lockfile ownership, and supported runtime targets. Before adding a package, establish the missing capability and check its actual API, maintenance/support, license, transitive footprint, and runtime or browser cost. Existing installation does not make a dependency suitable for every layer.

For updates, identify the reason and exact candidate using current official release notes, migration guidance, and relevant advisories. Check runtime/peer constraints and packages that must move together. Follow the project's manager and update policy, inspect manifest and lockfile changes, and verify the affected behavior plus relevant build/type/test checks. Keep unrelated upgrades separate unless needed for compatibility. A successful install or permissive version range alone does not prove compatibility; record unresolved gaps and the recovery route.

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

Use local naming rules and maintained surrounding code before selecting language/framework defaults. Consult current official guidance only for unresolved choices, accounting for the supported version and tooling. Do not impose one language's casing or class model on another.

Prefer names that carry domain meaning and distinguish values that would otherwise be confused. If local conventions need a unit or currency suffix, show it with a real example. Avoid invented abbreviations or universal suffix rules. Renaming an exported symbol, database field, route, or serialized property may require a compatibility plan; a naming decision alone does not authorize the change.

## Extend language guidance from evidence

A recurring language/framework mistake can justify a short conditional supplement. First retain the failure or repeated review evidence and check whether an existing local rule, compiler, formatter or linter already resolves it. Prefer configuring that guard; prose should explain the remaining decision and valid exceptions. Do not add a language catalog merely for coverage.

Put project-specific guidance in the existing convention source. A portable supplement must resolve a reusable demonstrated gap: name its trigger, supported language/framework versions, current primary source, rule and exceptions, and a representative failing/valid case. Link it only from the relevant decision point and load it only for that stack. Repository rules and maintained surrounding code still take precedence over its defaults. Recheck or retire the supplement when the toolchain or evidence changes; a stale example cannot override supported behavior.

## Check usability and adoption

Walk representative additions through the proposed rules: place a feature/file, name a function and domain value, and, where applicable, add a model/column or public field. Exercise a relevant collection edge case, failed operation, or dependency compatibility choice when adopting those rules. Can a contributor find the owning rule, an example, exceptions, and a check without reconstructing the whole repository?

Run the existing scoped checks that establish the rules being claimed. Check that examples match actual APIs and configuration. Mark rules checked by human review honestly; do not add an enforcement claim because CI is green. For legacy inconsistencies, document whether the rule applies to new code, touched code, or a separately approved migration. Keep mass renaming and reformatting outside convention authoring unless requested.

Encode mechanically checkable rules and recurring issues in the existing static checks or suitable automated guards. Verify the guard runs and accepts legitimate code. Use results from static checks before subjective review, leaving manual assessment for uncovered behavior and decisions; a passing static check proves only its own coverage.
