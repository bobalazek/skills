# Security remediation during upgrades

Use when the upgrade request includes known vulnerabilities or an audit produces advisory matches. This establishes dependency remediation, not a complete application security audit.

## Establish what the audit says

Run the configured manager's audit against every in-scope lockfile it supports. Retain its exit status and output. Separate security advisories from deprecation notices and engine/peer warnings. Count packages and advisory matches separately; repeated versions or affected-range records may describe the same advisory. State the counting method when comparing results.

For each actionable match, retain package identity, resolved versions, advisory identifier, fixed range, dependency path and affected feature/runtime. Check the current upstream advisory and release/migration guidance. A matched vulnerable range is evidence of an affected dependency; proving an exposed application path requires inspecting real consumers.

## Select and apply a fix

1. Prefer a supported patched release compatible with its consumers. Check whether a maintained version line has a backport; a same-major update can still remain vulnerable.
2. Trace transitive matches to their parents. Upgrade the parent or refresh its compatible resolution before considering an override. Exact upstream pins can retain old vulnerable copies after all direct dependencies update.
3. An override across API boundaries needs consumer evidence. Never force an ORM, parser, bundler or validator to a different major merely to make the audit quiet. When a parent has no compatible fix, report the remaining path and a bounded replacement or mitigation.
4. If a framework upgrade removes an integration, inspect its actual use before deleting it. Persistent data, generated modules, seed/build hooks, schema serialization and deployed assets may depend on it. Get a material migration decision before changing those contracts, then test the accepted migration with isolated data. An upgrade is not permission to run production migrations.
5. Keep native runtime and packaged-runtime pins aligned. Rebuilding a dependency for the development runtime does not prove the packaged runtime or another operating system works.

## Verify and report

Rerun install consistency, the affected consumer checks and the audit against the final lockfiles. Compare using the same scope and counting method. Inspect remaining paths individually; do not suppress advisories or exclude development dependencies to manufacture a clean result. Development-server vulnerabilities can still matter when that server is reachable.

Report fixed and remaining dependencies, their exposure evidence or uncertainty, supported targets actually tested and the next action for each gap. A clean audit means no matches returned by those sources for that resolution at that time; it does not establish absence of vulnerabilities. An audit service failure is unavailable evidence, not a clean result.
