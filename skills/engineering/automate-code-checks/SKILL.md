---
name: automate-code-checks
description: "Turn an accepted coding rule or recurring defect into a runnable lint, type, static-analysis, contract, or regression check, with calibrated detection and repository integration."
---

# Automate code checks

## Use this skill

Enforce mechanically checkable established conventions and recurring defects with the smallest maintainable automated guard. Prefer configured formatter, linter, type checker or static-analysis rules over repeated subjective review comments. Reuse established standards, failure evidence and existing tooling. Resolve disputed meaning through `define-project-conventions`; a one-off repair belongs to `implement-change` and does not automatically justify a rule.

Static checks cover formatting, linting, type checking and source analysis without running application behavior. Automated checks also include executed tests.

## Establish the invariant

Read applicable standards, the recurring failures or review findings, representative callers, and existing lint/type/test/CI configuration. State the forbidden behavior, valid alternatives, relevant scope, and intentional exceptions. Confirm the issue still exists and that another check does not already cover it. Distinguish a recurring root cause from several reports of the same incident.

For a new project, enforce accepted conventions through its selected toolchain. For an inherited project, measure existing violations and valid variants before changing enforcement. Keep generated/vendor code and deliberate exceptions distinguishable from unnoticed debt.

## Choose the enforcement layer

Load [check selection and calibration](references/check-selection.matrix.md) when choosing the enforcement mechanism and its test cases. Prefer an existing rule or compiler option, better types, a boundary/schema constraint, or a focused behavior test before writing a custom analyzer. Select the layer that can observe the invariant: syntax similarity cannot establish equivalent business behavior, and a type check cannot prove runtime authorization.

Verify version-specific configuration and rule APIs against installed tooling and current primary documentation. Reuse the project's language and runner; do not introduce a second linter, package manager, or general rule framework for one guard. A custom rule needs a stable detectable pattern and maintenance benefit beyond the example that inspired it.

## Implement and calibrate

Build the scoped check and an actionable diagnostic that identifies the violation and a valid remedy. Exercise representative violations, legitimate near-matches, boundary cases, and supported exceptions. Run against the selected real surface to expose false positives and missed cases. Refine the invariant or detection rather than suppressing every awkward result.

### Fixers and existing violations

- For an automatic fix, verify preserved behavior and idempotency on representative cases; omit the fixer when correction requires judgment. Do not run broad fixes or reformat unrelated files.
- For legacy violations, choose an explicit adoption route consistent with local policy: bounded repair, scoped enforcement, or a tracked temporary baseline. Explain uncovered cases; do not silently weaken established checks or hide new violations in a permanent allowlist.

## Integrate the guard

Wire the accepted check into existing developer and CI commands at the agreed scope. Document the rule and narrow exception process in their authoritative location, and make the command discoverable to agents. Keep disabling or expiry conditions visible for temporary suppressions.

## Verify and report

Show that the forbidden case fails with the intended diagnostic and a valid case passes. Record the actual command, exit status, tested revision/tool versions, scope, false-positive evaluation, existing debt, and CI coverage. A configured rule that never runs does not prevent recurrence. Include results, accessible proof, independent findings and gaps when opening authorized PRs; refresh affected evidence after edits.

Before acceptance, a separate agent in fresh context must challenge detection and integration using the accepted invariant, candidate revision, raw valid/invalid cases and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

Use the project's format and requested depth; link the authoritative rule and observed proof instead of another report. Do not claim prevention beyond demonstrated coverage.

## Next steps

Pass the accepted invariant and evidence to `implement-change` for a separately authorized remediation batch, `prepare-repo-for-agents` for missing command discovery, or `review-code` for an outstanding review of the guard/configuration. Reuse valid checks and reviews. Describe the plain action if its skill is unavailable; do not expand a guard request into general cleanup.
