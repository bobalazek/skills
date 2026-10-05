---
name: verify-change
description: "Evaluate a change against its acceptance criteria using observed checks, screenshots, or comparable before/after measurements, and prepare evidence for review or delivery."
---

# Verify change

Establish what the selected change demonstrably does. Produce a scoped verification result and usable evidence; a code review separately evaluates defects and engineering risks.

## Choose the proof

Read the request, acceptance criteria, local checks, change diff, and existing evidence. Identify the baseline and candidate revision, including uncommitted changes. Tie each material criterion to an observable result. Reuse evidence whose code, inputs, environment, and criteria remain valid.

Choose the smallest check that can establish the claim. A screenshot can show layout; keyboard navigation needs interaction evidence. A build establishes buildability; it cannot establish a repaired workflow. For a spec or documentation change, inspect scenarios, consistency, links, and rendered diagrams where relevant. No screenshot or benchmark is required for a change it cannot evaluate.

Before editing, preserve the affected baseline when available. For an existing fix, use an isolated baseline checkout or recorded evidence only when it is safe and useful. Do not overwrite the user's work or rerun a destructive failure to manufacture a comparison. New behavior can be checked against an expected result without inventing a historical baseline.

## Run and capture

Use [evidence selection and reporting](references/verification.template.md) for the relevant evidence types. Record the actual command or interaction, prerequisites, input/state, environment, observation, and result. Keep failed attempts and changed conditions distinguishable from final results.

Compare like with like. Use the same fixture, user role, viewport, workload, and configuration where they affect the result; explain unavoidable differences. Repeat noisy measurements enough to establish whether the claimed change exceeds the observed variation. Preserve failures and important neighboring behavior, not only the happy path.

Use synthetic or approved data. Inspect artifacts for secrets, personal data, internal URLs, and unrelated windows before sharing. Capture only what the claim needs. Verification authority does not imply permission to run production load tests, change live data, or upload private evidence.

## Decide and hand off

For each criterion, report demonstrated, failed, or not checked, with its evidence and limitations. A failed or missing required check blocks readiness; an optional uninspected surface limits the claim. Do not convert a risk acceptance or tool failure into a pass. When fixes are requested, repair the cause and rerun affected checks; otherwise report the finding within scope.

Record the tested revision and any dirty diff. Later edits require an impact check before reusing evidence; a changed artifact or behavior invalidates its proof. Keep the result in the existing task, PR, or handoff rather than creating a parallel report by default.

Include reviewer-accessible artifacts or concise inline results in the PR when PR work is authorized. Upload only through an approved repository or host mechanism; verify the returned location and intended access. A local screenshot path is not a PR attachment. If upload is unavailable, keep the local evidence, include useful textual observations and reproduction steps, and state the attachment gap.

Next: `implement-change` for failed criteria that need a repair, `review-code` for independent assessment, or `ship-change` for the authorized delivery target. Pass the evidence with the tested revision so the next step can reuse it.
