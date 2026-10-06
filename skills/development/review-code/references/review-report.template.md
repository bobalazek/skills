# Review report

Use the parts needed for the requested review. Lead with material findings or an unsupported readiness claim; an empty findings list needs coverage and limits, not filler. Keep the report proportional to the change while preserving the evidence needed to act.

## Scope and verdict

State reviewed revision/baseline, intended behavior or review question, relevant sources, surfaces, and the specific next step being assessed. Record whether accepted requirements are sufficiently clear. Missing intent limits alignment review; it does not license invented requirements.

Identify the independent evaluator and evaluated candidate. Without a separate reviewer or clean context from the author, label the result unreviewed rather than verified or ready. State blocking defects and required proof gaps separately. Source review alone cannot establish deployment, production data integrity, or runtime performance.

## Findings and priority

For a PR or consequential change, include a concise risk and reversibility statement: credible worst failure, affected users/data/consumers, detection signal, recovery action and owner where known, conditions or point of irreversible effects, and the proof or remaining gap. Separate demonstrated reversibility from a proposal or untested assumption. A minor stateless edit can use one sentence; material data or external effects need their actual limits. Link the existing recovery plan rather than creating another report.

For each confirmed finding, give priority, concise problem, affected scenario/preconditions, file/symbol location, evidence, consequence, and the smallest useful correction or investigation. Cite the requirement or accepted convention when the finding depends on it. Order findings by demonstrated impact and credible likelihood, and deduplicate root causes across symptoms.

Use the repository's severity scheme when established. Otherwise use plain descriptions that explain urgency and the next-step consequence:

| Treatment | Evidence needed |
| --- | --- |
| Urgent | A demonstrated active or readily reachable serious exposure, data loss, or similarly severe failure needing prompt attention; explain the reachable conditions and impact |
| Blocks the requested next step | A confirmed defect violates a material accepted requirement, or a required check/proof is missing or failed; identify exactly what must change or be demonstrated |
| Bounded follow-up | An evidenced problem has narrower impact or conditions and can follow the requested step under the applicable policy/accepted decision; state remaining risk without accepting it on the owner's behalf |
| Optional improvement | A useful adjacent simplification or polish item with concrete benefit; keep it separate and omit low-value preferences |

Severity and readiness answer different questions. A serious existing issue may fall outside a PR's change scope yet still need escalation; a missing mandatory check can block a release without proving a code defect. Describe both accurately. Do not use security, performance, or architecture labels to inflate a hypothetical concern. Nitpicks and personal naming preferences do not become blockers unless an applicable requirement establishes the violation and gate.

Keep unresolved material suspicions separate with their affected scenario, supporting clue, missing evidence, and the smallest check that would settle them. Do not count them as confirmed defects. Reconcile conflicting claims against source or observed behavior; consensus cannot dismiss a demonstrated defect. Record a discarded claim only when the reason prevents repeated work.

## Verification and coverage

Map material criteria and risks to observed evidence. A compact table is useful when multiple claims need different checks:

| Criterion or risk | Reviewed path/revision | Evidence and result | Gap or readiness effect |
| --- | --- | --- | --- |
| Accepted behavior or invariant | Actual location and candidate | Command/runtime observation/source trace, with environment where relevant | Unchecked path, failed or unavailable required check, or none |

Include relevant high-risk paths, security, performance, architecture/maintainability, behavior, design/conventions, and duplication where they apply. Do not add empty category rows to imply a comprehensive audit. Explain material exclusions and uninspected areas; distinguish not applicable from not checked.

Open useful screenshot, recording, measurement, or test artifacts and state what they demonstrate. Before/after comparisons need comparable inputs, environment, and cache/state conditions. Identify stale evidence, missing baselines, and local-only artifacts. Local paths are not PR attachments, green CI does not prove unrelated behavior, and no findings in the inspected scope does not establish whole-system correctness.

For a PR, provide the human reviewer with accessible criterion-linked evidence, relevant check results, and independent findings with their resolution or remaining gaps. Preserve required human approval and requested stop points. Agent review does not grant delivery authority.

## Next action and recheck

Name selected fixes or discriminating investigations, any established owner of accepted residual risk, and readiness for the specifically requested step. Do not authorize unrelated cleanup or silently accept risk for the user.

After fixes, record the final revision and independently recheck affected claims, paths, and proof. Reuse evidence only for unchanged code and criteria; update stale findings and artifacts. State remaining gaps plainly instead of carrying an earlier clean verdict forward.
