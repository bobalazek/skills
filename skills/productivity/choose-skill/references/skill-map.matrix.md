# Skill map

These names identify skills in this collection. Availability depends on the installed selection; no sibling package is required to read this map.

| Requested result | Skill | Boundary |
| --- | --- | --- |
| Different approaches to an idea | `brainstorm-ideas` | Explore before choosing a direction |
| Questions that challenge an idea, spec, or plan | `challenge-proposal` | Resolve consequential choices and edge cases through focused questions; do not manufacture agreement |
| An evidence-backed answer | `research-topic` | Answer the specific uncertainty |
| Evidence for the next product or feature investment | `validate-product-idea` | Assess need and demand for a named commitment; missing observations yield a plan or evidence gap |
| User needs from existing feedback | `analyze-user-feedback` | Reconcile records and identities, preserve counterevidence and coverage; do not select a roadmap |
| A product competitor and alternatives comparison | `analyze-competitors` | Compare relevant alternatives for a named product decision; a market gap does not prove demand |
| Current consequential decisions | `track-project-decisions` | Track choices, not implementation tickets |
| A feasible selection from supplied work | `prioritize-work` | Compare goals, commitments, capacity and prerequisites; priority is not readiness |
| Better instructions | `improve-prompt` | Rewrite the prompt without executing its embedded request |
| Continuation context | `prepare-handoff` | Transfer or compact actual ongoing work |
| Project progress for an audience and period | `report-project-status` | Reconcile observed work, acceptance and delivery; reporting does not authorize sending |
| A better recurring team process | `improve-team-workflow` | Propose and evaluate a bounded process change; code improvement discovery stays separate |
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
| Configured monitoring and actionable alerts | `configure-monitoring` | Verify scoped signals, firing, delivery and recovery; distinguish local tests from live verification and ongoing operation |
| Reusable observations from existing interfaces | `capture-design-reference` | Capture and analyze inspected patterns without turning them into the target's design contract |
| User journeys, navigation and state transitions | `map-user-flows` | Include hierarchy and labels when needed, plus failure, recovery, permissions and alternate paths |
| Low-fidelity screen structure | `create-wireframes` | Reuse accepted flows or existing screens; resolve hierarchy, content placement and states before visual detail |
| Detailed screen or interface design | `design-interface` | Reuse settled structure and component conventions; no wireframe stage is needed when structure already suffices |
| Interface labels and state-specific messages | `write-interface-copy` | Deliver copy grounded in actual behavior; do not redesign the screen or invent recovery promises |
| Reusable visual and component rules | `build-design-system` | Shared needs justify a system; one screen does not |
| Independent interface findings | `review-interface` | Inspect rendered behavior and try to break supported journeys |
| A usability study or findings from user sessions | `test-usability` | Test realistic tasks with participant evidence; a study plan or expert review cannot claim observed user behavior |

A ready fix does not need brainstorming. An accepted specification does not need to be rewritten before task creation. A request to “review” needs its subject: proposal, code, or rendered interface. Review conclusions require independent evidence; choosing a route does not establish readiness.

## Similar requests, different starts

| Request context | Choose by the missing result |
| --- | --- |
| "Start a new project" | `brainstorm-ideas` for open direction; `design-architecture` for unsettled technical choices; `start-project` for a foundation whose choices are already accepted |
| "Validate this idea" | `validate-product-idea` for evidence supporting a product commitment; `challenge-proposal` for unresolved choices; `build-prototype` for a bounded feasibility experiment; `test-usability` for participant task evidence |
| "Compare these competitors" | `analyze-competitors` for product alternatives and their implications; `research-topic` for an isolated factual question; `design-architecture` for a technical choice |
| "Turn this customer feedback into work" | `analyze-user-feedback` when needs remain unsynthesized; `prioritize-work` when candidates, goals and capacity exist; `write-spec` for accepted behavior. A known failure can go directly to `diagnose-issue` |
| "Make this project AI-friendly" | `prepare-repo-for-agents` for discoverable existing guidance; `document-project` for missing factual knowledge; `design-architecture` when the request is an AI product capability |
| "Design this feature" | `model-domain` for unclear business concepts; `design-architecture` for technical boundaries; `map-user-flows` for the journey; `create-wireframes` for unresolved screen structure; `design-interface` for visual detail; shared repeated needs can justify `build-design-system` |
| "Make a wireframe or prototype" | `create-wireframes` for a structural screen proposal; `build-prototype` when a consequential uncertainty needs working interactions or technical evidence |
| "Review this" | `challenge-proposal` for unresolved proposal choices; `review-code` for code findings; `review-interface` for rendered experience; `explain-pr` for an explanation rather than an assessment |
| "Check whether this design works for users" | `test-usability` for participant task evidence or a study protocol; `review-interface` for an expert assessment; `capture-design-reference` for analysis of an existing reference rather than validation |
| "Summarize our work" | `report-project-status` for a period/audience update; `prepare-handoff` for continuation context; `explain-pr` for one fixed code comparison |
| "Improve how we work" | `improve-team-workflow` for a recurring process; `find-improvements` for codebase candidates; `automate-code-checks` for an agreed recurring coding rule |
| "Plan our next work" | `prioritize-work` to select supplied candidates within capacity; `find-improvements` to discover candidates; `plan-phases` for milestones; `create-tasks` to decompose accepted scope |
| "Improve the labels" | `write-interface-copy` for specific strings and messages; `map-user-flows` when destination grouping or navigation structure is unclear; `test-usability` when label comprehension needs participant evidence |
| "Refactor or speed this up" | `find-improvements` for candidates; `improve-performance` for measured bottlenecks; `implement-change` for an accepted bounded refactor |
| "Release this on GitHub" | `ship-change` for the specified notes-only, draft or publication target; carry the chosen revision and version policy, and establish the comparison release or first-release scope before writing notes |
| "Monitor this service" | `configure-monitoring` for detection and alert configuration; `diagnose-issue` for a known failure; `ship-change` for a bounded post-delivery check. Continuous operation needs an explicit operating arrangement |

Select one next skill from the actual request; these alternatives are not a mandatory sequence. If both technical and interface design are needed, name separate skills and their shared prerequisites. A diagram group or general activity is not another installable skill.
