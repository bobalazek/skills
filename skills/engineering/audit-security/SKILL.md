---
name: audit-security
description: "Use for a bounded pre-launch or change-focused security audit of source, dependencies and applicable runtime controls, with evidenced findings and coverage gaps; fixes are separate work."
---

# Audit security

## Establish the audit

Audit one named project or change against its accepted security requirements and real threat/exposure context. Establish the candidate, environments, entry points, data, roles, integrations, available proof and permitted checks. Reuse valid evidence and existing authorization. Audit and report; changing code, credentials, accounts or infrastructure needs its own authorized scope.

Work independently of the candidate's author, with raw requirements, source and check access. If you authored it, obtain a separate fresh-context assessment before accepting security or launch readiness. Unavailable independence leaves the result unreviewed; a bounded findings report can still name that gap. A report is not certification or permission to release.

Use `model-threats` when the missing result is a threat model, `review-code` for a broader engineering assessment, or `diagnose-issue` for an observed failure or incident diagnosis. When a neighbor is unavailable, describe that action without requiring another package.

## Inspect applicable controls

Use [checks by project type](references/project-type-checks.matrix.md) to select relevant surfaces. Confirm the actual enforcement path and the framework/provider's supported controls before declaring one absent. Trace protected reads, writes, exports and background/admin callers through the shared owner; a secure main route does not establish every entry point.

Inspect relevant source and built artifacts for exposed secrets, unsafe data/query/rendering boundaries, authentication/session and authorization behavior, dependencies and deployment configuration. Search hits and scanner labels are leads, not verified vulnerabilities; assess version, reachability, configuration, exploit conditions and existing protection. Parameterized SQL can be safe without an ORM; a named middleware, status code or database policy is not a universal requirement.

For browser, transport, forms, APIs or upload claims, inspect the applicable delivery and trust boundaries. Static configuration cannot establish live headers, certificate behavior, provider enforcement or first-user experience. Verify volatile vendor/advisory prescriptions against current primary guidance when material, or retain the missing evidence.

## Run scoped checks

Use [the audit commands playbook](references/audit-commands.playbook.md) before invoking tools or probing a target. Prefer existing check-only tooling and synthetic/test identities. Follow granted target and effect boundaries; a source audit does not authorize exploit attempts, brute-force or bulk scans, production mutations or third-party testing. Missing authority/access is an unchecked scope item, not itself a code vulnerability.

For each check, retain the actual candidate, command or interaction, environment/input, outcome and redacted evidence. Keep secret values and personal data out of tool output and reports. Do not install scanners, discover unrelated host credentials or remediate findings merely to finish the audit.

## Report and close

Use [the report shape](references/security-audit-report.template.md), adapted to the project's existing record. Each finding needs an affected scenario, located evidence, credible consequence and a scoped correction or discriminating check. Separate confirmed defects, unresolved hypotheses, reviewed controls and required checks not performed. No finding in the inspected scope does not prove the whole project secure.

Preserve the project's severity and priority scale. Otherwise use P0 critical/immediate, P1 high/next, P2 normal/scheduled and P3 low/optional, with impact and likelihood rationale. Keep confidence and readiness separate. Scanner severity alone does not establish exploitability or a launch gate; apply accepted release requirements and identify the accountable decision.

Pass selected authorized fixes to `implement-change` and affected rechecks to `verify-change` when available, carrying the candidate, finding IDs, invariant and missing proof. Do not turn the report into unrequested remediation, credential rotation or publication. After changes, refresh affected security evidence before reusing an earlier assessment.
