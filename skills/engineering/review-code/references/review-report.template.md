# Review report

Use the parts needed for the requested review. Lead with material findings or an unsupported readiness claim; an empty findings list needs coverage and limits, not filler. Keep the report proportional to the change while preserving the evidence needed to act.

## Scope and verdict

State reviewed revision/baseline, intended behavior or review question, relevant sources, surfaces, and the specific next step being assessed. Record whether accepted requirements are sufficiently clear. Missing intent limits alignment review; it does not license invented requirements.

Link the original request and accepted clarifications and state alignment: aligned behavior, necessary supporting work, missing requested outcome, added scope or unresolved intent. Record supported app targets and evidence limits. Derived tasks/tests cannot replace the source intent; later accepted changes must remain distinguishable from implementation assumptions.

Identify the independent evaluator and evaluated candidate. Without a separate reviewer or clean context from the author, label the result unreviewed rather than verified or ready. State blocking defects and required proof gaps separately. Source review alone cannot establish deployment, production data integrity, or runtime performance.

## Findings and priority

For a PR or consequential change, include a concise risk and reversibility statement: credible worst failure, blast radius across affected users/data/consumers, containment and isolation assumptions, detection signal, recovery action and owner where known, conditions or point of irreversible effects, and the proof or remaining gap. Use a short before/after flow to explain a consequential mechanism: entry point, changed decision, state or external effect, and user-visible result. Separate demonstrated reversibility from a proposal or untested assumption. A minor stateless edit can use one sentence; material data or external effects need their actual limits. Link the existing recovery plan rather than creating another report.

For each confirmed finding, give priority, concise problem, affected scenario/preconditions, file/symbol location, evidence, consequence, and the smallest useful correction or investigation. Cite the requirement or accepted convention when the finding depends on it. Order findings by demonstrated impact and credible likelihood, and deduplicate root causes across symptoms.

Use the repository's work-priority labels and meanings when established. Otherwise label actionable findings using this scale, with a short rationale and next action:

| Priority | Meaning and evidence |
| --- | --- |
| P0 — critical | Act immediately: credible active or imminent severe harm needs immediate attention; explain reachability, affected users/data and the urgent containment or investigation |
| P1 — high | Address next: significant supported impact or time sensitivity makes this the next correction; state the affected outcome and why delay matters |
| P2 — normal | Schedule a correction: an evidenced bounded problem merits planned work; state impact, conditions and prerequisites |
| P3 — low | Minor or optional improvement with a concrete benefit; omit unsupported preferences and filler |

Keep stable finding IDs separate from priority labels, for example `F-01 [P1]`. Carry IDs, ratings, rationale and disposition through repairs and rechecks; retain the previous rating and reason when evidence or an accepted decision changes it. Mark uncertain ratings provisional instead of inventing impact. Report whether the specific next step is blocked separately from priority; missing mandatory proof can block delivery without establishing a critical defect.

Severity and readiness answer different questions. A serious existing issue may fall outside a PR's change scope yet still need escalation; a missing mandatory check can block a release without proving a code defect. Describe both accurately. Do not use security, performance, or architecture labels to inflate a hypothetical concern. Nitpicks and personal naming preferences do not become blockers unless an applicable requirement establishes the violation and gate.

Keep unresolved material suspicions separate with their affected scenario, supporting clue, missing evidence, and the smallest check that would settle them. Do not count them as confirmed defects. Reconcile conflicting claims against source or observed behavior; consensus cannot dismiss a demonstrated defect. Record a discarded claim only when the reason prevents repeated work.

## Verification and coverage

Map material criteria and risks to observed evidence. A compact table is useful when multiple claims need different checks:

| Criterion or risk | Reviewed path/revision | Evidence and result | Gap or readiness effect |
| --- | --- | --- | --- |
| Accepted behavior or invariant | Actual location and candidate | Command/runtime observation/source trace, with environment where relevant | Unchecked path, failed or unavailable required check, or none |

Account for each category in the selected review checklist with `reviewed`, `not applicable` or `untested`, its observed result/evidence or the reason it was excluded or could not be checked. Use the existing table or a concise category summary; group exclusions with the same scope reason instead of adding empty rows. Within applicable categories, reconcile selected concrete checklist items and material criteria. `Reviewed` is coverage, not a passing verdict. Missing runtime/device access is an untested gap, not inapplicability. Include the original-intent walkthrough and relevant user journeys, not only code findings.

For triggered high-risk families, retain the affected caller/state/effect map, accepted invariants, actual checked scenarios and missing paths. For an oversized or coupled change, explain concrete proposed increments, dependency/compatibility gates and what can actually deploy independently; a split suggestion does not close the remaining user criteria.

For parallel or staged review, identify each reviewer's bounded question and tested revision, coverage still pending, and the combined assessment of interactions. Record the reviewer/session and host-reported model if exposed; otherwise mark the model unknown. State whether any required cross-model review was fulfilled. Record which branch results the verdict depends on. After fixes or integration, distinguish refreshed proof from retained evidence and explain why retained evidence still applies.

Open useful screenshot, recording, measurement, or test artifacts and state what they demonstrate. Before/after comparisons need comparable inputs, environment, and cache/state conditions. Identify stale evidence, missing baselines, and local-only artifacts. Local paths are not PR attachments, green CI does not prove unrelated behavior, and no findings in the inspected scope does not establish whole-system correctness.

For a PR, provide the human reviewer with accessible criterion-linked evidence, relevant check results, and independent findings with their resolution or remaining gaps. Preserve required human approval and requested stop points. Agent review does not grant delivery authority.

## Next action and recheck

Name selected fixes or discriminating investigations, any established owner of accepted residual risk, and readiness for the specifically requested step. Do not authorize unrelated cleanup or silently accept risk for the user.

After fixes, record the final revision and independently recheck affected claims, paths, and proof. Reuse evidence only for unchanged code and criteria; update stale findings and artifacts. State remaining gaps plainly instead of carrying an earlier clean verdict forward.
