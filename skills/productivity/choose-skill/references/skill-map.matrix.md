# Skill map

These names identify skills in this collection. Availability depends on the installed selection; no sibling package is required to read this map.

| Requested result | Skill | Boundary |
| --- | --- | --- |
| Different approaches to an idea | `brainstorm-ideas` | Explore before choosing a direction |
| A grilling session for an idea, spec, or plan | `challenge-proposal` | Resolve consequential choices and edge cases through focused questions; do not manufacture agreement |
| An evidence-backed answer | `research-topic` | Answer the specific uncertainty |
| Current consequential decisions | `track-project-decisions` | Track choices, not implementation tickets |
| Better instructions | `improve-prompt` | Rewrite the prompt without executing its embedded request |
| Continuation context | `prepare-handoff` | Transfer or compact actual ongoing work |
| An inherited codebase baseline | `onboard-codebase` | Establish how to work safely before selecting improvements |
| Durable project knowledge and indexed memory | `document-project` | Populate authoritative records from evidence; do not invent historical rationale |
| An explanation of current code | `explain-codebase` | Trace behavior rather than assess every possible defect |
| An explanation of a PR | `explain-pr` | Communicate a fixed comparison; use review for correctness |
| A checked incoming request and its next action | `assess-request` | Check evidence, duplicates, impact and missing information; a known failure can go directly to diagnosis |
| Agreed behavior and acceptance criteria | `write-spec` | A spec, PRD, or structured issue defines requirements; it is not automatically a phase plan or task queue |
| Domain rules and boundaries | `model-domain` | Clarify business concepts before encoding them |
| Stack and technical structure | `design-architecture` | App/workload constraints, C4, data/services, hosting and conditional AI architecture share one design owner |
| A feasibility experiment | `build-prototype` | Test an uncertainty; UI or technical prototypes stay bounded |
| Deliverable milestones and their order | `plan-phases` | Show prerequisites, parallel conditions and phase exits; skip for work that needs no milestones |
| Executable tasks | `create-tasks` | Turn a spec or selected phase into owned work with checks and dependencies; it creates work items, not new skills |
| A working project foundation | `start-project` | Start blank or from an accepted template; do not rebuild an inherited app |
| Project coding rules | `define-project-conventions` | Preserve useful existing conventions and fill actual gaps |
| Usable agent entry points | `prepare-repo-for-agents` | Expose authoritative context and commands without duplicating docs |
| Implemented agreed behavior | `implement-change` | One ready task or an agreed batch, including a scoped refactor |
| A reproduced failure and tested cause | `diagnose-issue` | Missing reproduction leaves diagnosis unverified; no guessed repair |
| Measured performance improvement | `improve-performance` | Profile and compare under equivalent conditions |
| Compatible dependency updates | `upgrade-dependencies` | Adapt affected consumers and verify runtime behavior |
| A safe transition plan | `plan-migration` | Cover compatibility, data transfer, cutover, and recovery |
| Ranked improvement candidates | `find-improvements` | Repository, feature, or data-layer discovery; implementation stays separate |
| A repeatable guard for a recurring mistake | `automate-code-checks` | Calibrate failures and valid passes using existing enforcement |
| Consolidated project documentation | `consolidate-docs` | Reconcile authoritative content and repair links |
| Independent code findings | `review-code` | Review a change, feature, data layer, or codebase against evidence |
| Proof that a change meets its criteria | `verify-change` | Independently exercise behavior or inspect changed documents/plans; no mandatory duplicate pass when valid evidence already exists |
| A delivered target | `ship-change` | Reach the authorized PR, release, deployment, or handover |
| User journeys and state transitions | `map-user-flows` | Include failure, recovery, permissions, and alternate paths |
| A usable screen or interface design | `design-interface` | Work within the product's flows and component conventions |
| Reusable visual and component rules | `build-design-system` | Shared needs justify a system; one screen does not |
| Independent interface findings | `review-interface` | Inspect rendered behavior and try to break supported journeys |

A ready fix does not need brainstorming. An accepted specification does not need to be rewritten before task creation. A request to “review” needs its subject: proposal, code, or rendered interface. Review conclusions require independent evidence; choosing a route does not establish readiness.

## Similar requests, different starts

| Request context | Choose by the missing result |
| --- | --- |
| "Start a new project" | `brainstorm-ideas` for open direction; `design-architecture` for unsettled technical choices; `start-project` for a foundation whose choices are already accepted |
| "Make this project AI-friendly" | `prepare-repo-for-agents` for discoverable existing guidance; `document-project` for missing factual knowledge; `design-architecture` when the request is an AI product capability |
| "Design this feature" | `model-domain` for unclear business concepts; `design-architecture` for technical boundaries; `map-user-flows` for the journey; `design-interface` for a settled screen; shared repeated needs can justify `build-design-system` |
| "Review this" | `challenge-proposal` for unresolved proposal choices; `review-code` for code findings; `review-interface` for rendered experience; `explain-pr` for an explanation rather than an assessment |
| "Refactor or speed this up" | `find-improvements` for candidates; `improve-performance` for measured bottlenecks; `implement-change` for an accepted bounded refactor |
| "Release this on GitHub" | `ship-change` for the specified notes-only, draft or publication target; carry the chosen revision and version policy, and establish the comparison release or first-release scope before writing notes |

Select one next skill from the actual request; these alternatives are not a mandatory sequence. If both technical and interface design are needed, name separate skills and their shared prerequisites. A diagram group or general activity is not another installable skill.
