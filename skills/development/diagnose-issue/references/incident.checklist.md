# Incident diagnosis

Use when a live runtime or deployed service is failing.

- Establish impacted users/surfaces, the failing revision/environment, time window, available alerts, and the incident owner.
- Preserve evidence before mitigation changes it. Use bounded logs/traces and avoid leaking credentials or personal data.
- Separate immediate containment from the root-cause repair. Rank mitigations by expected benefit, reversibility, data risk, and authority.
- Inspect the existing recovery/runbook, health checks, last known good revision, and relevant dependency health before proposing action.
- Never use a destructive reset, broad restart, live migration, or repeated retry without understanding its side effects and authorization.
- Verify mitigation on the target and check for data/state inconsistencies. A quiet alert or successful restart alone does not prove recovery.
- Record observed cause, timeline, accepted action, recovery evidence, residual risk, and useful prevention work in the existing incident location.
