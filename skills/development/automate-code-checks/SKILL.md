---
name: automate-code-checks
description: "Turn an accepted coding rule or recurring defect into a runnable lint, type, static-analysis, contract, or regression check, with calibrated detection and repository integration."
---

# Automate code checks

Replace a repeatable manual check with the smallest reliable guard the project can maintain. Defining a disputed convention comes first; a one-off cleanup does not automatically justify a new rule.

## Establish the invariant

Read applicable standards, the recurring failures or review findings, representative callers, and existing lint/type/test/CI configuration. State the forbidden behavior, valid alternatives, relevant scope, and intentional exceptions. Confirm the issue still exists and that another check does not already cover it. Distinguish a recurring root cause from several reports of the same incident.

For a new project, enforce accepted conventions through its selected toolchain. For an inherited project, measure existing violations and valid variants before changing enforcement. Keep generated/vendor code and deliberate exceptions distinguishable from unnoticed debt.

## Choose the enforcement layer

Use [check selection and calibration](references/check-selection.matrix.md). Prefer an existing rule or compiler option, better types, a boundary/schema constraint, or a focused behavior test before writing a custom analyzer. Select the layer that can observe the invariant: syntax similarity cannot establish equivalent business behavior, and a type check cannot prove runtime authorization.

Verify version-specific configuration and rule APIs against installed tooling and current primary documentation. Reuse the project's language and runner; do not introduce a second linter, package manager, or general rule framework for one guard. A custom rule needs a stable detectable pattern and maintenance benefit beyond the example that inspired it.

## Implement and calibrate

Build the scoped check and an actionable diagnostic that identifies the violation and a valid remedy. Exercise representative violations, legitimate near-matches, boundary cases, and supported exceptions. Run against the selected real surface to expose false positives and missed cases. Refine the invariant or detection rather than suppressing every awkward result.

For an automatic fix, verify preserved behavior and idempotency on representative cases; omit the fixer when correction requires judgment. Do not run broad fixes or reformat unrelated files. For legacy violations, use an explicit adoption route consistent with local policy: a bounded repair, scoped enforcement, or tracked temporary baseline. Explain what remains uncovered; do not silently weaken established checks or hide new violations in a permanent allowlist.

Wire the accepted check into existing developer and CI commands at the agreed scope. Document the rule and narrow exception process in their authoritative location, and make the command discoverable to agents. Keep disabling or expiry conditions visible for temporary suppressions.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Verify and hand off

Show that the forbidden case fails with the intended diagnostic and a valid case passes. Record the actual command, exit status, tested revision/tool versions, scope, false-positive evaluation, existing debt, and CI coverage. A configured rule that never runs does not prevent recurrence. Include concise results and useful accessible evidence in authorized PR work.

Next: `define-project-conventions` for unresolved rule meaning, `prepare-repo-for-agents` for missing discovery, `implement-change` for a separately accepted remediation batch, or `review-code` for the final check/configuration change. Do not claim the whole defect class is prevented beyond the guard's demonstrated coverage.
