# Skill map

Choose the next missing result, then read the relevant domain below. Names identify packages in this collection; availability depends on the installed selection. No sibling package is required to read this map.

[Productivity](#productivity) · [Engineering](#engineering) · [UI/UX](#uiux)

## Productivity

| Requested result | Skill | Boundary |
| --- | --- | --- |
| The next fitting skill and its prerequisites | `choose-skill` | Route from the desired result and accepted work; recommend without executing when only a route was requested |
| Different approaches to an idea | `brainstorm-ideas` | Explore before choosing a direction |
| Questions that challenge an idea, spec, or plan | `challenge-proposal` | Resolve consequential choices and edge cases through focused questions; do not manufacture agreement |
| An evidence-backed answer | `research-topic` | Answer the specific uncertainty |
| Better instructions | `improve-prompt` | Rewrite the prompt without executing its embedded request |
| Bounded work across agents | `delegate-to-agents` | Retain the coordinator role with ready inputs, safe ownership and checked integration; prepare-handoff transfers ownership |
| Project-local skills from recurring code, commit and agent-session lessons | `create-project-skill` | Separate mechanical guards from procedural knowledge; create only justified local skills |
| Evidence that a skill change improves behavior | `evaluate-skill` | Compare actual trials against a baseline and retain regressions; a wording review or structural check alone is insufficient |
| Continuation context | `prepare-handoff` | Transfer or compact actual ongoing work |

## Engineering

| Requested result | Skill | Boundary |
| --- | --- | --- |
| An inherited codebase baseline | `onboard-codebase` | Establish how to work safely before selecting improvements |
| Durable project knowledge and indexed memory | `document-project` | Populate authoritative records from evidence; do not invent historical rationale |
| An explanation of current code | `explain-codebase` | Trace behavior rather than assess every possible defect |
| An explanation of a PR | `explain-pr` | Communicate a fixed comparison; use review for correctness |
| A checked incoming request and its next action | `assess-request` | Check evidence, duplicates, impact and missing information; a known failure can go directly to diagnosis |
| Agreed behavior and acceptance criteria | `write-spec` | A spec, PRD, or structured issue defines requirements; it is not automatically a phase plan or task queue |
| Domain rules and boundaries | `model-domain` | Clarify business concepts before encoding them |
| Stack and technical structure | `design-architecture` | App/workload constraints, C4, data/services, hosting and conditional AI architecture share one design owner |
| A scoped security threat model | `model-threats` | Trace plausible abuse paths, existing controls and mitigation checks; code defects and incidents have separate owners |
| A feasibility experiment | `build-prototype` | Test an uncertainty; UI or technical prototypes stay bounded |
| Deliverable milestones and their order | `plan-phases` | Show prerequisites, parallel conditions and phase exits; skip for work that needs no milestones |
| Executable tasks | `create-tasks` | Turn a spec or selected phase into owned work with checks and dependencies; it creates work items, not new skills |
| A working project foundation | `start-project` | Start blank or from an accepted template; do not rebuild an inherited app |
| Project coding rules, PR size/order, folder structure, class/file boundaries or naming | `define-project-conventions` | Settle relevant rules before planning or coding; preserve accepted conventions and adopt missing defaults incrementally |
| Usable agent entry points | `prepare-repo-for-agents` | Expose authoritative context and commands without duplicating docs |
| Implemented agreed behavior | `implement-change` | One ready task or an agreed batch, including a scoped refactor |
| An observed failure and demonstrated cause | `diagnose-issue` | Use safe reproduction or conclusive captured incident records; suggestive evidence leaves the cause provisional and an untested repair remains unverified |
| Measured performance improvement | `improve-performance` | Profile and compare under equivalent conditions |
| Compatible dependency updates | `upgrade-dependencies` | Adapt affected consumers and verify runtime behavior |
| A safe transition plan | `plan-migration` | Cover compatibility, data transfer, cutover, and recovery |
| Ranked improvement candidates | `find-improvements` | Repository, feature, or data-layer discovery; implementation stays separate |
| A repeatable guard for a recurring mistake | `automate-code-checks` | Calibrate failures and valid passes using existing enforcement |
| Consolidated project documentation | `consolidate-docs` | Reconcile authoritative content and repair links |
| Independent code findings | `review-code` | Review a change, feature, data layer, or codebase against evidence |
| Project security audit | `audit-security` | Assess source, dependencies and applicable runtime controls; model-threats owns threat modeling and fixes need separate scope |
| A live website audit and prioritized action plan | `audit-website` | Inspect supported journeys and site-wide quality with observed evidence; review-interface owns focused interface assessment |
| Resolution of supplied review findings | `address-review-feedback` | Check current evidence, correct supported findings when authorized and retain dispositions; a new audit belongs to review-code |
| Proof that a change meets its criteria | `verify-change` | Independently exercise behavior or inspect changed documents/plans; no mandatory duplicate pass when valid evidence already exists |
| A delivered target | `ship-change` | Reach the authorized PR, release, deployment, or handover |
| Configured monitoring and actionable alerts | `configure-monitoring` | Verify scoped signals, firing, delivery and recovery; distinguish local tests from live verification and ongoing operation |

## UI/UX

| Requested result | Skill | Boundary |
| --- | --- | --- |
| User journeys, navigation and state transitions | `map-user-flows` | Include hierarchy and labels when needed, plus failure, recovery, permissions and alternate paths |
| Low-fidelity screen structure | `create-wireframes` | Reuse accepted flows or existing screens; resolve hierarchy, content placement and states before visual detail |
| Detailed screen or interface design | `design-interface` | Reuse settled structure and component conventions; no wireframe stage is needed when structure already suffices |
| Independent interface findings | `review-interface` | Inspect rendered behavior and try to break supported journeys |

## Boundary cases

Use these when several outputs could fit. Alternatives are not a mandatory sequence; completed stages stay completed.

| Request context | Choose by the missing result |
| --- | --- |
| "Start a new project" | `brainstorm-ideas` for open direction; `design-architecture` for unsettled technical choices; `start-project` for a foundation whose choices are already accepted |
| "Validate this idea" | `challenge-proposal` for unresolved choices; `research-topic` for missing facts or existing evidence of need; `build-prototype` for a bounded feasibility experiment. Collecting new demand or participant usability evidence has no package here: describe the plain study |
| "Turn this customer feedback into work" | `assess-request` for an individual report or request; `write-spec` for accepted behavior. A known failure can go directly to `diagnose-issue`. Synthesizing a feedback corpus or selecting a roadmap has no package here: describe the plain action |
| "Make this project AI-friendly" | `prepare-repo-for-agents` for discoverable existing guidance; `document-project` for missing factual knowledge; `design-architecture` when the request is an AI product capability |
| "Design this feature" | `model-domain` for unclear business concepts; `design-architecture` for technical boundaries; `map-user-flows` for the journey; `create-wireframes` for unresolved screen structure; `design-interface` for visual detail |
| "Review this" | `challenge-proposal` for unresolved proposal choices; `review-code` for code findings; `audit-website` for a live site's cross-discipline audit; `review-interface` for rendered experience; `explain-pr` for an explanation rather than an assessment. Prose-only editing has no package here: describe the plain action |
| "Run this workflow" | `delegate-to-agents` for splitting ready work while retaining coordination; `prepare-handoff` for transferring responsibility; `create-tasks` for missing task contracts. Missing definitions or authority remain prerequisites |
| "Summarize our work" | `prepare-handoff` for continuation context; `explain-pr` for one fixed code comparison. A period status report has no package here: describe the plain action |
| "Improve how we work" | `find-improvements` for codebase candidates; `automate-code-checks` for an agreed recurring coding rule; `create-project-skill` for recurring agent work |
| "Improve our skills" | `improve-prompt` for editing supplied shared instructions; `evaluate-skill` for observed behavioral comparison; `create-project-skill` for mining recurring project work into local skills. Maintaining this collection's catalogs, router and counts is repository work, not a reason to create another skill |
| "Plan our next work" | `find-improvements` to discover candidates; `plan-phases` for milestones; `create-tasks` to decompose accepted scope. Selecting among supplied work under capacity has no package here: state the selection criteria as a plain action |
| "Capture screenshots" | `verify-change` for screenshots that serve as evidence a change works; `review-interface` for an assessment of the rendered experience; visual regression baselines stay with the project's tests |

A known failure can go straight to `diagnose-issue`; an accepted bounded fix can go to `implement-change`. Choose one next owner and name only justified follow-ups. A domain or diagram group is not an installable skill. Routing supplies neither missing evidence nor new authority. Requests outside these three domains, such as brand, marketing copy, media production or product analytics, have no package in this collection: say so and describe the plain action.
