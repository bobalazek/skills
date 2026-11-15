# Security audit report

Use the existing report or PR when available. A small assessment can combine sections while preserving findings, evidence and material limits.

## Scope and decision

Record project/change, candidate, environment, accepted requirements, reviewed surfaces, permitted checks and the specific readiness question. State whether the result is source-only, observed locally, observed on a target, or mixed. Identify missing independent assessment or required evidence without claiming certification or accepted risk.

## Findings

For each material finding, retain its ID, project severity/priority, confidence, affected scenario and population, source location or observed target evidence, consequence and smallest correction or closing check. Explain actual exploit conditions and existing mitigations. Separate unresolved hypotheses from confirmed defects and retain earlier failed attempts after a correction.

## Coverage and limits

| Control or criterion | Scope and expected behavior | Actual evidence and outcome | Gap or next action |
| --- | --- | --- | --- |
| Named requirement or selected check | Surface, role and invariant | Candidate/environment, command or interaction and observed result | Missing proof, consequence, owner and the check that closes it |

Use reviewed/passed only for the behavior actually demonstrated. A source-confirmed guard is not an observed deployed permission check. Mark a check not applicable with the scope fact; missing tools, authority or live access remain not checked. Empty findings need these coverage limits, not a blanket clean bill of health.

## Readiness and next action

Reconcile the requested next step with accepted release gates, observed risk and material missing proof. Keep severity, confidence and readiness distinct; no universal dependency-severity launch rule is supplied by this template. Name proposed fixes, follow-up verification and the accountable decision rather than accepting risk for the owner. A findings report may finish while release remains unverified.
