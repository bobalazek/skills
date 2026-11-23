---
name: audit-security
description: "Use for a bounded pre-launch or change-focused security audit of source, dependencies and applicable runtime controls, or a threat model of a system, design or change before code exists, with evidenced findings, abuse paths, mitigation verification criteria and coverage gaps; fixes are separate work."
---

# Audit security

## Establish the audit

Audit one named project or change against its accepted security requirements and real threat/exposure context. Establish the candidate, environments, entry points, data, roles, integrations, available proof and permitted checks. Reuse valid evidence and existing authorization. Audit and report; changing code, credentials, accounts or infrastructure needs its own authorized scope.

Work independently of the candidate's author, with raw requirements, source and check access. If you authored it, obtain a separate fresh-context assessment before accepting security or launch readiness. Unavailable independence leaves the result unreviewed; a bounded findings report can still name that gap. A report is not certification or permission to release.

When the missing result is a threat model rather than an audit of existing code, use [the threat-model mode](#threat-model-a-design-or-change). Use `review-code` for a broader engineering assessment, or `diagnose-issue` for an observed failure or incident diagnosis. When a neighbor is unavailable, describe that action without requiring another package.

## Threat-model a design or change

Load for this mode: [threat-model template](references/threat-model.template.md).

Use this mode for a proposed system or change, often before code exists, or whenever a threat model is the requested result. Identify the system or change, assets to protect, intended users, deployment context and requested depth. Reuse accepted requirements, existing threat models, security conventions and architecture. For existing software, trace relevant entry points, data flows, stores, identities and trust boundaries through actual code and configuration. For a proposed system, distinguish intended controls from implemented and exercised controls. A bounded feature needs a bounded model: record consequential unknowns instead of inventing infrastructure, attackers or obligations, and send unresolved technical structure to `design-architecture`.

Distinguish drafting from acceptance. A request to produce or update a threat model asks for a draft; complete it with direct checks and explicit verification gaps, and state that it is unreviewed unless a valid independent assessment already exists. Do not hold a completed draft open for an acceptance workflow the user did not request. Acceptance for implementation or a security decision needs the independent assessment described in [Establish the audit](#establish-the-audit); if it is unavailable, deliver the draft with the gap and leave acceptance blocked. Producing a draft does not accept its risks or approve its controls.

### Trace plausible threats

Map who can influence each relevant input or boundary, what authority they start with, what valuable action or data they could reach, and which control should stop them. Include abuse of legitimate workflows where it can violate the system's actual rules. Use a small data-flow diagram when it clarifies boundaries; a component inventory alone is insufficient.

Use the project's threat-modeling method. If none exists, walk each relevant boundary using identity spoofing, tampering, repudiation, disclosure, availability and privilege escalation as prompts. Include privacy or AI-specific concerns only where the data and behavior warrant them. Consult current primary guidance for version-specific controls; a named methodology or generic vulnerability list is not evidence of an applicable threat.

Ground each threat in a plausible actor, prerequisite and path to an asset or invariant. Distinguish observed defects, plausible design threats, unverified controls and accepted residual risks. Existing protections are part of the model; test their coverage before prescribing another mechanism. Do not infer undocumented protections from the presence of another control. Threat modeling does not authorize active exploitation, remote scanning or production changes.

### Decide responses and checks

Rate threats on the same priority scale as audit findings (see [Report and close](#report-and-close)), prioritizing by credible impact, feasibility and exposure without invented numeric precision; mark uncertain ratings provisional and preserve finding IDs and priority through rechecks. Keep priority separate from severity, confidence and readiness; priority does not authorize extra work or waive required checks. For each material threat, identify an existing protection, a proposed mitigation, removal of the risky behavior, or an unresolved risk decision with its owner. Do not accept risk on someone else's behalf or present a proposed control as deployed.

For each mitigation, specify both an abuse rejection check and a successful legitimate-use check. Use the same control assumptions for both and confirm that the mechanism can produce the expected outcomes; checks depending on undecided controls remain conditional. Check that added prerequisites preserve accepted workflows; unsettled tradeoffs need an owner decision. Prefer controls at the actual enforcement boundary; prose, client-side checks or a diagram do not establish authorization. Keep unresolved assumptions and recovery limits visible. Use [the threat-model template](references/threat-model.template.md) when the project has no suitable format.

### Check the model

- The modeled scope and source revision are explicit; observed and proposed behavior are distinguishable.
- Material assets and trust boundaries are connected to plausible threats, including existing controls.
- Each material threat has a response or open owner decision; every mitigation has its own abuse rejection and successful legitimate-use checks.
- Unknowns, untested controls and residual risks remain visible; any accepted risk cites an existing explicit owner decision. Without that decision it remains open, including in table cells. No unsupported vulnerability or security guarantee is claimed.

Deliver the scoped model and prioritized next actions in the existing project record. Carry accepted mitigations to `write-spec`, `plan-phases` (task breakdown) or `implement-change` only when that work is requested; carry missing proof to `verify-change`. A modeling request finishes with its model and gaps.

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
