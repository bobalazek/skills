# Technical design

## Scope and constraints

Accepted behavior/spec references, current baseline, preserved contracts, and relevant operating constraints.

## Structure

| Boundary | Owned behavior/state | Public contract | Consumers | Failure behavior |
| --- | --- | --- | --- | --- |
| Module or service | Concrete responsibility | Inputs, outputs, invariants | Actual callers | Error, recovery, retry, or consistency contract |

Show a small system/data-flow diagram when it clarifies ownership. Walk a representative scenario through the boundaries.

## Decisions

Selected approach, credible alternatives, evidence, trade-offs, assumptions, and revisit conditions. Link durable decisions instead of copying them into multiple documents.

## Change and verification

Integration order, compatibility or data migration, rollback/recovery, observability, and the checks that demonstrate the design. List unresolved decisions separately from implementation tasks.
