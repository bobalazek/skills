---
name: diagnose-issue
description: "Reproduce and diagnose a software failure using evidence, hypothesis tests, and affected-caller tracing; verify a repair when requested. Use for defects or incidents, not prioritizing an unverified request queue."
---

# Diagnose issue

## Use this skill

Establish the cause of an observed failure and verify a repair when requested. Reuse the report, reproduction and prior evidence, checking their current applicability. Use `assess-request` for an unverified intake queue or `implement-change` for an already-diagnosed repair. A plausible explanation alone is not a diagnosis.

## Build the feedback loop

Collect expected versus observed behavior, environment/version, inputs, timing, recent changes, and available traces. Inspect the relevant code and callers. Preserve original logs or artifacts with secrets and sensitive data removed from reusable outputs.

Use existing monitoring, logs, traces, error reports, or metrics when they help correlate the symptom with the deployed revision and request/job. State sampling, retention, or access limits; absence of an alert is not proof of health. Read-only diagnosis does not authorize installing a monitoring provider or exporting customer data.

Choose the smallest reliable reproduction: a focused test, script, request, browser path, trace replay, or controlled harness. Confirming a diagnosis or verified repair requires an observed failing reproduction and relevant proof. For an intermittent failure, retain the actual failing attempt and conditions. If the failure is production-only and cannot be reproduced safely within authority, preserve the evidence and exact blocker; the investigation remains incomplete and must not pass diagnosis acceptance.

### Live-incident boundary

For a live incident, load [incident diagnosis](references/incident.checklist.md) before proposing mitigation. Read-only investigation does not authorize production changes or disruptive experiments.

## Test causes

Write the leading hypotheses and the observation that would distinguish them. Run focused experiments, changing one meaningful variable where possible. Check recent changes without assuming correlation proves cause. Follow shared callers and state transitions so the diagnosis covers affected paths, not just the reported symptom.

Keep a short evidence trail: hypothesis, check, result, and interpretation. Stop repeating experiments that yield no new information. Surface a missing credential, environment, input, or consequential decision as the exact blocker.

## Repair and verify

If a repair is requested, fix the underlying cause in the owning boundary and preserve local conventions. Prove that the prohibited behavior is rejected and the intended behavior still works. Add the smallest useful regression check where existing coverage does not preserve that proof; test-first is optional.

Keep the original failure and repaired outcome comparable: the same reproduction, relevant input/state, and environment, with revisions identified. Capture screenshots for visible defects, measurements for data/performance claims, or focused observed output for behavior checks. If the original failure cannot safely be reproduced, label the supplied or historical evidence and the limit of the comparison. Do not rerun a harmful operation for a better artifact.

For a broader behavioral change, produce the diagnosis and propose specification/planning rather than absorb an unrequested redesign. Update a meaningful incident or learning record where the project keeps it; do not create one for every routine typo.

## Verify and report

Report reproduced evidence, demonstrated cause or remaining uncertainty, affected consumers, repair scope when applicable, and actual verification outcomes. Carry redacted before/after evidence, independent findings and gaps into the authorized PR at creation or handoff with usable links or short inline results; identify local-only artifacts and unavailable checks. A missing check or unresolved cause remains explicit.

Before acceptance, a separate agent in fresh context must challenge the cause and any repair using the accepted request, candidate revision, raw reproduction/source evidence and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

Follow the project's format and requested depth; keep durable findings in the existing incident or learning record rather than another summary. Update affected evidence after repairs.

## Next steps

Carry the diagnosis, failing case and constraints to `implement-change` for a repair still to perform, or `write-spec` for a larger behavioral change. Use `automate-code-checks` for an established recurring cause warranting a guard, `review-code` for an outstanding repair review, or `ship-change` for authorized delivery. Name the required input/authority and use the plain action if its skill is unavailable. Diagnosis does not authorize operational recovery or deployment.
