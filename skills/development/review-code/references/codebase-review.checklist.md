# Scoped codebase review

Define the surface and question first: a critical flow, package boundary, architecture seam, convention drift, data integrity, or selected operational risk. Identify the revision/environment, relevant requirements, and what readiness claim the review is meant to support. Avoid implying whole-system coverage from a sample.

## Establish the map

Read existing project/surface docs, applicable root and nested rules, accepted decisions, convention or memory indexes, and relevant check definitions. Verify claims against current code. Separate accepted policy, observed practice, deliberate exceptions, and stale or disputed records.

Map entry points, callers, state ownership, persistence, external effects, and tests for the chosen surface. Inspect representative and high-risk paths rather than only convenient files. Include dynamic/configured consumers, generated code boundaries, and public interfaces before concluding that code is unused or duplicated.

Keep a concise evidence inventory: reviewed flow/location, relevant invariant or requirement, source/runtime/check evidence, and material uninspected areas. Record source inspection and executed checks separately.

## Select risk by actual behavior

Use the applicable sections of [the review checklist](change-review.checklist.md) for high-risk flows, security, performance/reliability, architecture/maintainability, duplication, design/conventions, and verification. These checks also apply without a diff; do not force a comparison baseline that does not exist.

Prioritize critical flows whose failure exposes data, crosses tenant or privilege boundaries, changes money or entitlements, loses durable data, or makes a migration unrecoverable. Trace relevant auth/session/permission paths, sensitive records, destructive operations, jobs/integrations, and migrations end to end. Identify real preconditions and accepted invariants before claiming a risk. A search hit, absent filename, or generic best practice does not establish one.

For a feature, include shared consumers, failure/state transitions, and supported alternate entry points. For a data layer, inspect schema/model meaning, naming and mappings, constraints, queries, transaction boundaries, authorization/tenant filters, migrations, and readers/writers. Static references cannot establish production integrity, workload, or an unused column. State the additional safe observation required when those claims matter.

For performance, locate the expensive or unbounded path and the workload that activates it. Use available measurements or scoped checks to evaluate query amplification, memory growth, repeated work, caching, or concurrency. Describe an unmeasured concern as a hypothesis; a broad review does not authorize speculative optimization.

For architecture and maintainability, examine domain ownership, package boundaries, dependency direction, state ownership, public contracts, and the cost of a representative change. Connect structural concerns to a concrete defect or repeated change hazard. Do not prescribe a rewrite because another architecture is familiar.

## Compare repeated behavior

Look for repeated domain rules, parallel utilities, duplicated validation/transformation, and fixes that diverged between copies. Compare inputs, semantics, failure handling, consumers, and ownership. Similar syntax alone does not justify consolidation; stable intentional variants and generated/framework repetition can remain separate.

For a proposed simplification, show the affected locations, current friction or failure, simpler owner, and a check that preserves intentional differences. Check dynamic/configured consumers before recommending deletion. Use complexity, dependency, or clone-tool output as leads, then verify the actual consequence.

Check naming, folder/file/package placement, models/tables/columns, and design/component consistency against accepted local rules and exceptions. Existing debt becomes a finding when it produces an evidenced defect or risk relevant to the review question. Keep subjective style and unrelated cleanup out of the required work.

## Challenge and report

Try a plausible counterexample for each material behavior or protection claim. Trace or safely execute the risky boundary: a different tenant, a repeated/concurrent write, a failure between effects, an interrupted migration, or a supported large input, as applicable. Verify whether an existing guard or recovery mechanism already handles it.

Separate current defects and blocking proof gaps from refactor opportunities. For an improvement candidate, state the current cost, affected callers, useful simpler form, and verification seam. Connect recurring established rules to existing enforcement gaps only when a calibrated guard can address them.

Report confirmed findings in impact order, unresolved material suspicions with the missing check, and the bounded review coverage. Apply the [report's priority guidance](review-report.template.md) so urgent failures and blockers stay distinct from optional polish. A codebase review does not authorize fixing everything found or establish a release verdict for uninspected paths.
