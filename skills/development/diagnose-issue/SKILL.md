---
name: diagnose-issue
description: "Reproduce and diagnose a software failure using evidence, hypothesis tests, and affected-caller tracing; verify a repair when requested. Use for defects or incidents, not prioritizing an unverified request queue."
---

# Diagnose issue

Establish the cause of the observed failure, or state precisely why the available evidence cannot yet establish it. A plausible explanation is not a diagnosis.

## Build the feedback loop

Collect expected versus observed behavior, environment/version, inputs, timing, recent changes, and available traces. Inspect the relevant code and callers. Preserve original logs or artifacts with secrets and sensitive data removed from reusable outputs.

Use existing monitoring, logs, traces, error reports, or metrics when they help correlate the symptom with the deployed revision and request/job. State sampling, retention, or access limits; absence of an alert is not proof of health. Read-only diagnosis does not authorize installing a monitoring provider or exporting customer data.

Choose the smallest reliable reproduction: a focused test, script, request, browser path, trace replay, or controlled harness. If the failure is production-only, preserve its evidence and identify the closest controlled signal; do not fabricate local reproduction.

For a live incident, load [incident diagnosis](references/incident.checklist.md). Read-only investigation does not authorize production changes or disruptive experiments.

## Test causes

Write the leading hypotheses and the observation that would distinguish them. Run focused experiments, changing one meaningful variable where possible. Check recent changes without assuming correlation proves cause. Follow shared callers and state transitions so the diagnosis covers affected paths, not just the reported symptom.

Keep a short evidence trail: hypothesis, check, result, and interpretation. Stop repeating experiments that yield no new information. Surface a missing credential, environment, input, or consequential decision as the exact blocker.

## Repair and verify

If a repair is requested, fix the underlying cause in the owning boundary and preserve local conventions. Prove that the prohibited behavior is rejected and the intended behavior still works. Add the smallest useful regression check where existing coverage does not preserve that proof; test-first is optional.

Keep the original failure and repaired outcome comparable: the same reproduction, relevant input/state, and environment, with revisions identified. Capture screenshots for visible defects, measurements for data/performance claims, or focused observed output for behavior checks. If the original failure cannot safely be reproduced, label the supplied or historical evidence and the limit of the comparison. Do not rerun a harmful operation for a better artifact.

For a broader behavioral change, produce the diagnosis and propose specification/planning rather than absorb an unrequested redesign. Update a meaningful incident or learning record where the project keeps it; do not create one for every routine typo.

## Completion

Report reproduced evidence, demonstrated cause or remaining uncertainty, affected consumers, repair scope when applicable, and actual verification outcomes. Carry the redacted before/after evidence into the authorized PR or handoff with usable links or short inline results; identify local-only artifacts and unavailable checks. A missing check or unresolved cause remains explicit.

Next: `implement-change` for a diagnosed repair not yet authorized; `write-spec` for a larger change; `automate-code-checks` when an established recurring cause warrants a calibrated guard; `review-code` for a verified repair; operational recovery or delivery only within the actual authorization.
