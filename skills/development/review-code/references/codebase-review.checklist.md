# Scoped codebase review

Define the surface and question first: a critical flow, package boundary, architecture seam, convention drift, data integrity, or selected operational risk.

Map relevant entry points, callers, state ownership, and tests. Inspect representative and high-risk paths rather than sampling only convenient files. Keep an evidence inventory with reviewed locations and material uninspected areas.

For a feature, include its shared consumers and failure/state transitions. For a data layer, trace schemas, constraints, migrations, queries, transaction boundaries, authorization/tenant filters, and readers/writers. Distinguish source inspection from executed database checks; do not infer production data integrity or unused schema from static references alone.

Look for repeated domain rules, parallel utilities, duplicated validation or transformation, and fixes that diverged between copies. Compare meaning and change ownership, not only text. Stable intentional variants can remain separate; generated code and framework-required repetition need different treatment. Check dynamic/configured consumers before proposing removal. Connect recurring review issues to existing enforcement gaps where a calibrated guard is appropriate.

Check whether a convention is documented, consistently observed, or disputed. Existing debt becomes a finding when it causes an evidenced defect or relevant risk; stylistic dislike alone is not evidence.

Separate current correctness findings from refactor opportunities. For an improvement candidate, give the current friction, affected callers, useful simpler form, and verification seam. Do not prescribe a repository rewrite without a supported requirement.

Finish with prioritized findings, scope/coverage, confidence limits, and a bounded next action. Codebase review does not authorize fixing everything found.
