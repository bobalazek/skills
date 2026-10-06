# Engineering

This domain covers the software lifecycle, including requirements, architecture, coding, quality, delivery, monitoring, and maintenance. Its 26 packages are under active development; links open their actual instructions. Use the narrowest result that matches the request. UI/UX owns user journeys and interface decisions; productivity owns idea exploration and decision support.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Understanding | Contributor onboarding | [onboard-codebase](../../skills/engineering/onboard-codebase/SKILL.md) | Verified setup/check path, current-system map, preservation constraints, and first-change route |
| Understanding | Durable project knowledge | [document-project](../../skills/engineering/document-project/SKILL.md) | Evidence-linked architecture, conventions, decisions, learnings, incidents, and useful memory indexes in authoritative project docs |
| Understanding | Code and flow explanation | [explain-codebase](../../skills/engineering/explain-codebase/SKILL.md) | Reader-appropriate explanation linked to actual entry points, callers, state, and behavior |
| Understanding | Change communication | [explain-pr](../../skills/engineering/explain-pr/SKILL.md) | Established purpose and before/after behavior of a fixed comparison, with real verification evidence |
| Intake | Incoming work | [assess-request](../../skills/engineering/assess-request/SKILL.md) | Evidence, duplicates, impact, missing information, and a recommended next action for a request |
| Specification | Requirements and behavior | [write-spec](../../skills/engineering/write-spec/SKILL.md) | Agreed requirements, scenarios, constraints, non-goals, and observable criteria in a spec, PRD, or structured issue |
| Domain design | Language and rules | [model-domain](../../skills/engineering/model-domain/SKILL.md) | Consistent concepts, relationships, valid states, invariants, and representative scenarios |
| Architecture | Technology and structure | [design-architecture](../../skills/engineering/design-architecture/SKILL.md) | Selected stack/technical choices, boundaries, state ownership, contracts, failure behavior, and trade-offs |
| Planning | Milestones | [plan-phases](../../skills/engineering/plan-phases/SKILL.md) | Outcome-based phases with inputs, outputs, dependencies, and exit evidence |
| Planning | Executable work | [create-tasks](../../skills/engineering/create-tasks/SKILL.md) | A dependency graph of bounded tasks with ownership, acceptance, verification, and readiness |
| Planning | System or data transition | [plan-migration](../../skills/engineering/plan-migration/SKILL.md) | An ordered compatibility, transfer, cutover, recovery, and retirement plan for an accepted target |
| Foundations | New project or starter | [start-project](../../skills/engineering/start-project/SKILL.md) | A minimal runnable foundation with one checked path and contributor setup |
| Foundations | Contributor standards | [define-project-conventions](../../skills/engineering/define-project-conventions/SKILL.md) | Evidence-backed rules, exceptions, local examples, and verification guidance |
| Foundations | Agent context | [prepare-repo-for-agents](../../skills/engineering/prepare-repo-for-agents/SKILL.md) | Useful local instructions, authoritative pointers, and a verified representative task path |
| Investigation | Bounded experiment | [build-prototype](../../skills/engineering/build-prototype/SKILL.md) | Observed answer to a named uncertainty, with acceptance signal and production limitations |
| Implementation | Feature, fix, refactor, or batch | [implement-change](../../skills/engineering/implement-change/SKILL.md) | The scoped working change, affected documentation, and inspected verification evidence |
| Diagnosis | Defect or incident | [diagnose-issue](../../skills/engineering/diagnose-issue/SKILL.md) | Reproduction/evidence, demonstrated cause or precise uncertainty, and a verified repair when requested |
| Improvement | Opportunity discovery | [find-improvements](../../skills/engineering/find-improvements/SKILL.md) | Ranked, deduplicated candidates across a repository, feature, or data layer, with evidence, affected consumers, risk, and a next action |
| Maintenance | Dependency compatibility | [upgrade-dependencies](../../skills/engineering/upgrade-dependencies/SKILL.md) | A justified compatible upgrade, adapted consumers, and observed resolution/runtime evidence |
| Maintenance | Measured performance | [improve-performance](../../skills/engineering/improve-performance/SKILL.md) | A demonstrated bottleneck and, when requested, an improvement measured against comparable behavior |
| Quality | Automated prevention | [automate-code-checks](../../skills/engineering/automate-code-checks/SKILL.md) | An accepted rule enforced by the smallest reliable check, with invalid/valid cases and an explicit adoption path |
| Quality | Change or codebase review | [review-code](../../skills/engineering/review-code/SKILL.md) | Prioritized evidenced findings and explicit reviewed/unchecked coverage |
| Quality | Acceptance and evidence | [verify-change](../../skills/engineering/verify-change/SKILL.md) | Observed acceptance results with relevant screenshots, comparable measurements, or check output, ready for review or delivery |
| Delivery | PR, release, deploy, or handover | [ship-change](../../skills/engineering/ship-change/SKILL.md) | The authorized target reached and verified through repository automation |
| Operations | Monitoring and alerting | [configure-monitoring](../../skills/engineering/configure-monitoring/SKILL.md) | Scoped signals and actionable alert routes with observed firing, delivery and recovery evidence, distinguishing local tests from live verification |
| Documentation | Consolidation | [consolidate-docs](../../skills/engineering/consolidate-docs/SKILL.md) | Clear authoritative locations, preserved useful knowledge, reduced duplication, and repaired links |

## Boundaries that matter

| Similar requests | Choose by the requested result |
| --- | --- |
| Onboard, explain, or review | Onboarding establishes a contributor's working baseline; explanation teaches current behavior; review evaluates evidenced defects and risks |
| Document, consolidate, or track decisions | Documentation reconstructs and updates durable knowledge; consolidation reconciles overlapping sources; decision tracking resolves open choices and their dependencies |
| Assess a request or diagnose a failure | Request assessment checks whether work is understood, duplicated, and ready; diagnosis reproduces a failure and establishes its cause |
| Specification, domain model, or architecture | The spec defines required behavior; the domain model resolves business meaning/rules; architecture assigns technical structure and contracts |
| Spec, phases, or tasks | The spec defines required behavior and acceptance; phases group deliverable outcomes and dependencies; tasks assign executable work, owned writes and checks. A bounded spec can go directly to tasks |
| Conventions, checks, agent context, or consolidation | Conventions establish rules; automated checks enforce suitable rules; agent preparation makes applicable context/checks discoverable; consolidation removes competing documentation |
| Find improvements, review, or implement | Discovery prioritizes useful opportunities; review investigates defects and risks; implementation performs the selected authorized change |
| Discovery or performance investigation | Discovery identifies leads and missing measurements; performance work profiles a representative path and evaluates comparable results |
| Architecture, migration, or delivery phases | Architecture selects a target; migration plans a safe transition from current state; phases organize the overall delivery, including that transition |
| Explain a PR or review it | Explanation communicates established intent and behavior; review evaluates correctness and relevant risks |
| Verify or review a change | Verification demonstrates criteria with observed checks; review investigates defects and risks using that evidence and the code. Documentation and plan changes need scenario/consistency checks, not an unrelated test suite |
| Monitoring, diagnosis, or delivery | Monitoring configures detection and alert response paths; diagnosis establishes an observed failure's cause; delivery reaches a requested target and checks available signals. None establishes a continuous watch |

## New projects and inherited systems

For a new project, brainstorm the useful outcome, investigate consequential unknowns, specify behavior, and make the necessary technical decisions. Inspect available templates, generators, or software factories before rebuilding their capabilities. `start-project` configures or builds the missing foundation and verifies one complete path.

For an inherited system, `onboard-codebase` establishes the runnable baseline, architecture/flow map, existing conventions, deployment context, and preservation risks. Use the actual code and observed checks to distinguish current behavior from stale documentation. Keep useful conventions; propose a rule change explicitly rather than silently modernizing the repository.

Both routes converge on the same spec, phase, task, implementation, review, and delivery contracts. A known feature or ready task skips broad onboarding. Existing systems additionally need compatibility, data, consumer, and operating constraints carried through the work.

## Supporting resources

Resources are bundled with their owning package and loaded conditionally. They are not a second library that every skill must read.

| Need | Resource owner and content |
| --- | --- |
| Consistent specifications and work items | `write-spec`, `plan-phases`, and `create-tasks` carry templates for their distinct artifacts; `create-tasks` also checks a declared task graph for invalid dependencies, ready work and ownership conflicts |
| Stack choice and architecture | `design-architecture` carries discovery for app types, workload, repository/runtime boundaries, data/services, hosting and C4 views, plus a technology-selection matrix and technical-design template |
| AI capabilities and workflows | Architecture selects bounded calls, retrieval, workflows or agents; its conditional checklist covers data/tool authority, memory, actual runtime gates, evaluation, budgets and recovery; implementation and verification check those contracts |
| Cost, obligations, and security constraints | Architecture's checklist covers applicable evidence, quantities/price dates, jurisdiction/data/contracts, trust boundaries, and unresolved owner decisions |
| Traditional stack conventions | `define-project-conventions` carries a topic matrix, web/typed-code checks, and data/integration checks; verify actual versions and official guidance for unsettled framework details |
| HTTP APIs and database scaling | Conventions cover resource/CRUD contracts, headers and trust boundaries, schema design, query placement, measured indexes and conditional partitioning/sharding; review checks those choices against actual consumers and evidence |
| Agent-friendly project knowledge | `prepare-repo-for-agents` carries guidance for README, agent instructions, current facts, standards, decisions, learnings, incidents, and task state |
| Institutional knowledge and memory | `document-project` reconstructs facts and recorded intent from code/history, populates canonical records and indexes, preserves uncertainty, and promotes evidenced lessons through their appropriate owner |
| Repeated manual fixes | `automate-code-checks` selects existing lint, type, schema, or behavior mechanisms, with false-positive checks and visible legacy debt |
| Improvement backlog | `find-improvements` records confirmed candidates and scope/coverage; TODOs and duplicated text are investigation leads, not automatic tasks |
| Upgrades and transitions | `upgrade-dependencies` checks compatibility boundaries; `plan-migration` covers coexistence, backfill, cutover, new writes, and recovery limits |
| Performance | `improve-performance` defines representative measurements, causal evidence, preserved correctness, and comparable results |
| Change safety | `implement-change` covers refactors, migrations, shared interfaces, stateful boundaries, and recovery |
| Incident diagnosis | `diagnose-issue` carries containment/evidence/recovery checks for live failures |
| Monitoring and alerting | `configure-monitoring` carries signal selection, ownership/routing, bounded collection and firing/delivery/recovery checks using existing tools |
| PR and codebase review | `review-code` has separate conditional checklists and one report shape |
| Risk and reversibility | PR explanation, review, implementation and delivery carry credible worst impact, affected consumers/state, detection, recovery conditions and proof; reverting code does not necessarily undo data or external effects |
| Result evaluation and PR evidence | `verify-change` carries evidence selection, comparison conditions, criterion results, reviewer-accessible reporting, conditional journey/security/reliability checks, and an optional command runner that records actual outcomes |
| Delivery | `ship-change` has PR/merge, package, deployment, and handover checks |

Cost analysis and legal applicability are scoped engineering inputs, with current primary evidence when used. They do not become invented budgets or compliance assurances. A dedicated specialist skill is justified when its independent recurring output requires a fuller procedure.

## Coverage and limits

Code review and improvement discovery support a whole repository, a feature/flow, or a data layer. Trace schemas, migrations, queries, consumers, and state invariants as the scope requires. A static repository inspection does not claim to have audited a live database. Duplication matters when it splits one rule or causes drift; deliberate variants need not become abstractions.

QA follows the changed behavior and risks through verification, review, and delivery. Diagnosis can use existing logs, traces, errors, and monitoring. Delivery names a failure signal, observation window, owner, and recovery action using available facilities. `configure-monitoring` owns scoped monitoring and alert-route changes, with separate local and live evidence. A release check does not implicitly configure monitoring, and a verified setup does not promise a continuous watch or staffed response.

## Conventions and project knowledge

Local instructions and accepted project rules govern implementation. References provide reusable decision criteria; they do not impose a universal framework, ORM, folder tree, branch name, deployment platform, or mandatory test-first process.

Keep current behavior separate from desired behavior and from historical decisions. A commit demonstrates a change; its rationale needs recorded evidence. Repeated code is an observed convention until a contributor rule is established. Record consequential decisions, useful discoveries, and incidents in existing authoritative locations, and update affected docs during the actual change. Use `document-project` when reconstructing that durable knowledge is the requested deliverable. Memory indexes link current records with their scope and status; AGENTS.md contains agent rules and reading pointers, not a parallel decision archive.

See [workflow phases and handoffs](../workflows.md) for sequencing and [authoring](../authoring.md) for package conventions.
