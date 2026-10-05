# Development

This domain owns software engineering outputs. All 19 entries have draft packages; links open their actual instructions. Use the narrowest result that matches the request.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Understanding | Contributor onboarding | [onboard-codebase](../../skills/development/onboard-codebase/SKILL.md) | Verified setup/check path, current-system map, preservation constraints, and first-change route |
| Understanding | Code and flow explanation | [explain-codebase](../../skills/development/explain-codebase/SKILL.md) | Reader-appropriate explanation linked to actual entry points, callers, state, and behavior |
| Understanding | Change communication | [explain-pr](../../skills/development/explain-pr/SKILL.md) | Established purpose and before/after behavior of a fixed comparison, with real verification evidence |
| Intake | Request disposition | [triage-requests](../../skills/development/triage-requests/SKILL.md) | Verified intake, impact/readiness, recommended disposition, or an actionable brief |
| Specification | Required behavior | [write-spec](../../skills/development/write-spec/SKILL.md) | Agreed scenarios, constraints, non-goals, and observable acceptance criteria |
| Domain design | Language and rules | [model-domain](../../skills/development/model-domain/SKILL.md) | Consistent concepts, relationships, valid states, invariants, and representative scenarios |
| Architecture | Technology and structure | [design-architecture](../../skills/development/design-architecture/SKILL.md) | Selected stack/technical choices, boundaries, state ownership, contracts, failure behavior, and trade-offs |
| Planning | Milestones | [plan-phases](../../skills/development/plan-phases/SKILL.md) | Outcome-based phases with inputs, outputs, dependencies, and exit evidence |
| Planning | Executable work | [create-tasks](../../skills/development/create-tasks/SKILL.md) | A dependency graph of bounded tasks with ownership, acceptance, verification, and readiness |
| Foundations | New project or starter | [start-project](../../skills/development/start-project/SKILL.md) | A minimal runnable foundation with one checked path and contributor setup |
| Foundations | Contributor standards | [define-project-conventions](../../skills/development/define-project-conventions/SKILL.md) | Evidence-backed rules, exceptions, local examples, and verification guidance |
| Foundations | Agent context | [prepare-repo-for-agents](../../skills/development/prepare-repo-for-agents/SKILL.md) | Useful local instructions, authoritative pointers, and a verified representative task path |
| Investigation | Bounded experiment | [build-prototype](../../skills/development/build-prototype/SKILL.md) | Observed answer to a named uncertainty, with acceptance signal and production limitations |
| Implementation | Feature, fix, refactor, or batch | [implement-change](../../skills/development/implement-change/SKILL.md) | The scoped working change, affected documentation, and inspected verification evidence |
| Diagnosis | Defect or incident | [diagnose-issue](../../skills/development/diagnose-issue/SKILL.md) | Reproduction/evidence, demonstrated cause or precise uncertainty, and a verified repair when requested |
| Improvement | Refactor discovery | [find-refactors](../../skills/development/find-refactors/SKILL.md) | Ranked candidates with current friction, concrete simpler shape, callers, risk, and checks |
| Quality | Change or codebase review | [review-code](../../skills/development/review-code/SKILL.md) | Prioritized evidenced findings and explicit reviewed/unchecked coverage |
| Delivery | PR, release, deploy, or handover | [ship-change](../../skills/development/ship-change/SKILL.md) | The authorized target reached and verified through repository automation |
| Documentation | Consolidation | [consolidate-docs](../../skills/development/consolidate-docs/SKILL.md) | Clear authoritative locations, preserved useful knowledge, reduced duplication, and repaired links |

## Boundaries that matter

| Similar requests | Choose by the requested result |
| --- | --- |
| Onboard, explain, or review | Onboarding establishes a contributor's working baseline; explanation teaches current behavior; review evaluates evidenced defects and risks |
| Triage or diagnose | Triage decides what kind of incoming work is justified; diagnosis establishes the cause of a failure |
| Specification, domain model, or architecture | The spec defines required behavior; the domain model resolves business meaning/rules; architecture assigns technical structure and contracts |
| Phase plan or tasks | Phases define milestones and exit evidence; task creation decomposes sufficiently agreed work into executable contracts |
| Conventions, agent context, or consolidation | Conventions establish contributor rules; agent preparation makes context/checks discoverable; consolidation removes competing documentation |
| Find refactors or implement | Discovery proposes useful changes; implementation performs the selected authorized change and verifies it |
| Explain a PR or review it | Explanation communicates established intent and behavior; review evaluates correctness and relevant risks |

## New projects and inherited systems

For a new project, brainstorm the useful outcome, investigate consequential unknowns, specify behavior, and make the necessary technical decisions. Inspect available templates, generators, or software factories before rebuilding their capabilities. `start-project` configures or builds the missing foundation and verifies one complete path.

For an inherited system, `onboard-codebase` establishes the runnable baseline, architecture/flow map, existing conventions, deployment context, and preservation risks. Use the actual code and observed checks to distinguish current behavior from stale documentation. Keep useful conventions; propose a rule change explicitly rather than silently modernizing the repository.

Both routes converge on the same spec, phase, task, implementation, review, and delivery contracts. A known feature or ready task skips broad onboarding. Existing systems additionally need compatibility, data, consumer, and operating constraints carried through the work.

## Supporting resources

Resources are bundled with their owning package and loaded conditionally. They are not a second library that every skill must read.

| Need | Resource owner and content |
| --- | --- |
| Consistent specifications and work items | `write-spec`, `plan-phases`, and `create-tasks` carry templates for their distinct artifacts |
| Stack choice and architecture | `design-architecture` carries a technology-selection matrix and technical-design template |
| Cost, obligations, and security constraints | Architecture's checklist covers applicable evidence, quantities/price dates, jurisdiction/data/contracts, trust boundaries, and unresolved owner decisions |
| Traditional stack conventions | `define-project-conventions` carries a topic matrix, web/typed-code checks, and data/integration checks; verify actual versions and official guidance for unsettled framework details |
| Agent-friendly project knowledge | `prepare-repo-for-agents` carries guidance for README, agent instructions, current facts, standards, decisions, learnings, incidents, and task state |
| Change safety | `implement-change` covers refactors, migrations, shared interfaces, stateful boundaries, and recovery |
| Incident diagnosis | `diagnose-issue` carries containment/evidence/recovery checks for live failures |
| PR and codebase review | `review-code` has separate conditional checklists and one report shape |
| Delivery | `ship-change` has PR/merge, package, deployment, and handover checks |

Cost analysis and legal applicability are scoped engineering inputs, with current primary evidence when used. They do not become invented budgets or compliance assurances. A dedicated specialist skill is justified when its independent recurring output requires a fuller procedure.

## Conventions and project knowledge

Local instructions and accepted project rules govern implementation. References provide reusable decision criteria; they do not impose a universal framework, ORM, folder tree, branch name, deployment platform, or mandatory test-first process.

Keep current behavior separate from desired behavior and from historical decisions. A commit demonstrates a change; its rationale needs recorded evidence. Repeated code is an observed convention until a contributor rule is established. Record consequential decisions, useful discoveries, and incidents in existing authoritative locations, and update affected docs during the actual change.

See [workflow phases and handoffs](../workflows.md) for sequencing and [authoring](../authoring.md) for package conventions.
