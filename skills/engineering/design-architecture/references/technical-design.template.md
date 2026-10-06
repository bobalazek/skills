# Technical design

## Scope and constraints

Accepted behavior/spec references, application surfaces, current revision/baseline, preserved contracts, and relevant operating constraints. Record measured versus assumed users/traffic/data volume, service targets, budgets, team/operating capacity, and unresolved questions with units and evidence.

## Structure

| Boundary | Owned behavior/state | Public contract | Consumers | Failure behavior |
| --- | --- | --- | --- | --- |
| Module or service | Concrete responsibility | Inputs, outputs, invariants | Actual callers | Error, recovery, retry, or consistency contract |

Separate repository layout from runtime boundaries. Identify source-of-truth data, transaction/consistency rules, external identity and services, and owned contracts. Use the useful C4 levels: context and container views for the system, component detail only where needed. Include sequence/failure and environment-specific deployment views when relevant; render diagrams and walk representative paths.

## Deployment and operation

Existing versus proposed hosting/services, managed/self-hosted responsibilities, environments, access/secrets, capacity limits, backups/restore, release/migration order, observation signals and recovery ownership. Link comparable cost scenarios. For AI behavior, include tool/data authority, orchestration gates, memory lifecycle, evaluation and spend/latency bounds.

## Decisions

Selected approach, credible alternatives, evidence, trade-offs, assumptions, status/acceptance source, and revisit conditions. Link durable decisions in the project's decision/ADR location instead of copying them into multiple documents or AGENTS.md.

## Change and verification

Integration order, compatibility or data migration, rollback/recovery, observability, and the checks that demonstrate the design. List unresolved decisions separately from implementation tasks.

For consequential choices, state the credible worst failure, affected consumers/data, reversibility before and after accepted writes or destructive cleanup, and the point where recovery requires forward repair or accepts loss. Identify the recovery owner and evidence needed; keep proposed rehearsals distinct from executed proof.
