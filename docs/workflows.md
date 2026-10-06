# Workflows

Select the requested result, use the narrowest matching skill, and carry accepted context forward. A workflow describes dependencies; the host supplies any actual scheduling, workers, isolation, and tools.

If the starting point is unclear, use `choose-skill` to recommend the next action from the current state. A ready task can go straight to its owning skill.

Start with [request scenarios](#routes-by-situation), [parallel phases and tasks](#sequential-and-parallel-work), or [review and recheck](#review-and-recheck). The [portable router map](../skills/productivity/choose-skill/references/skill-map.matrix.md) distinguishes each skill's output; the scenarios below show how to use those boundaries in a request.

## Reading the graphs

Double-bordered boxes name one skill using its exact install name. Rounded boxes describe inputs, results or work within a scenario. Diamonds ask a routing or readiness question. Outer frames labeled `Stage:` or `Phase:` group work; their headings cannot be invoked. Shapes and labels carry the distinction even without color.

In skill-route graphs, arrows show possible next actions, with conditions on branches. Select the branches the requested outcome needs, reconcile all required outputs, and reuse valid completed work. A fork does not by itself authorize parallel execution. In the phase/task examples, arrows are prerequisite dependencies: a join waits for every incoming required output. Each example states which meaning applies.

## Choose the result you need

The [README graph](../README.md#from-idea-to-delivery) shows the overall route. Start from what is already known, then use this table to find the next missing result.

| You need | Skill | Result | Skip when |
| --- | --- | --- | --- |
| Alternatives to an unclear idea | `brainstorm-ideas` | Different approaches, trade-offs and a proposed direction | The direction is settled |
| Questions that challenge a proposal | `challenge-proposal` | Consequential questions answered, edge cases exposed, proposal updated | No material choice blocks the requested result |
| Evidence for an uncertain premise | `research-topic` or `build-prototype` | A sourced answer or observed experiment | Existing evidence answers the uncertainty |
| Evidence for a product investment | `validate-product-idea` | A supported decision or bounded validation plan | The relevant need and commitment already have sufficient evidence |
| Needs from existing feedback | `analyze-user-feedback` | Sourced needs with reconciled counts, contrary evidence and coverage limits | Relevant synthesis is already available |
| A comparison of product alternatives | `analyze-competitors` | Dated differences and implications for a named product decision | The existing comparison still fits the decision and date |
| Precise required behavior | `write-spec` | Scenarios, constraints and observable acceptance criteria in a spec, PRD or issue | The accepted requirements already suffice |
| Screen structure before visual detail | `create-wireframes` | Editable layouts with hierarchy, content/state placement and requirement links | Existing or accepted screen structure already resolves the question |
| Several deliverable milestones | `plan-phases` | Outcomes, prerequisites, parallel conditions and phase exits | The change fits one bounded work item or small task set |
| Executable work | `create-tasks` | Owned tasks with criteria, dependencies and checks, locally or in the authorized tracker | Suitable tasks already exist |
| Proof of a changed result | `verify-change` | Observed criterion-by-criterion evidence and gaps | Current, independently evaluated evidence already covers the result |
| Useful service monitoring and alerts | `configure-monitoring` | Configured detection and response routes with scoped firing/delivery/recovery proof | Current coverage and evidence already meet the requested need |

Research, planning, implementation, verification, delivery and operation are lifecycle stages. A **delivery phase** is a milestone inside a particular project, such as “users can preview an import.” `plan-phases` creates those project milestones; it does not require a task to traverse every lifecycle stage. `create-tasks` creates work items, not skills.

The domain catalogs organize skills by responsibility. These stages organize a particular piece of work, so a stage can use skills from more than one domain:

| Stage | Useful skills | Ready to move on when |
| --- | --- | --- |
| Understand the starting point | `assess-request`, `onboard-codebase`, `explain-codebase`, `diagnose-issue` | The requested outcome and relevant baseline are understood |
| Explore and challenge | `brainstorm-ideas`, `challenge-proposal`, `research-topic`, `capture-design-reference`, `build-prototype` | Consequential choices have answers and required premises have evidence |
| Evaluate a product opportunity | `validate-product-idea`, `analyze-user-feedback`, `analyze-competitors` | The next commitment has relevant evidence, or the decision is to stop, revise or investigate further |
| Specify and design | `write-spec`, `model-domain`, `design-architecture`, `map-user-flows`, `create-wireframes`, `design-interface`, `write-interface-copy` | Behavior and the decisions needed by the selected work are accepted |
| Plan execution | `prioritize-work`, `plan-phases`, `create-tasks` | The selected work fits its stated constraints and has accepted prerequisites, owners and checks |
| Build | `start-project`, `implement-change` and the relevant specialist skill | The selected result exists with scoped proof on its actual revision |
| Evaluate | `verify-change`, `review-code`, `review-interface`, `test-usability` | Required evidence and independent evaluation cover the selected criteria; a planned user study still awaits observations |
| Deliver and observe | `ship-change`, `configure-monitoring`, `report-project-status` | The requested delivery, monitoring configuration or status result has its scoped evidence; none promises ongoing operation |
| Learn and improve | `find-improvements`, `improve-team-workflow`, `document-project`, `automate-code-checks` | Useful findings are recorded or become a justified next change; no follow-up is also valid |

Start at the stage that matches the request. The table names alternatives, not a list of skills to run at every stage. Evaluation also applies to a plan or design before its consumers rely on it.

A spec can include intended delivery slices and known dependencies when they explain scope or rollout. `plan-phases` owns the detailed milestone graph; `create-tasks` owns executable dependencies. During brainstorming, ordering and parallelism are hypotheses until the relevant behavior and shared contracts are agreed. Reuse one authoritative document or tracker where possible, rather than copying the same requirements into several files.

## Where clarification happens

Every skill resolves missing input for its own outcome. Use `challenge-proposal` to examine a proposal with the user: inspect what can be discovered, ask the highest-impact unresolved question, follow the answer, and update the existing proposal. Ask about actors, boundaries, failures, recovery and preservation only where their answers could change the result. Explain the trade-off and let the human make choices that belong to them. Do not ask a fixed questionnaire or reopen accepted answers.

A clarified proposal is not a validated concept: demand, feasibility, and performance assumptions need relevant evidence. Use `validate-product-idea` for a product commitment, research for missing facts, or a bounded prototype for empirical feasibility. An unanswered consequential choice blocks only the work that depends on it; unrelated investigation can continue. Stop questioning when the requested result is sufficiently clear, and carry accepted answers into the spec, phases and tasks.

## Routes by situation

Match the requested result, not just words such as "new project," "review" or "AI." These examples cover every skill without requiring every skill in a workflow. Start with [exploration](#explore-and-route), [product discovery](#evaluate-a-product-opportunity), [project context](#understand-and-prepare-a-project), [design](#specify-and-design), [implementation](#plan-and-change-software), or [evaluation and delivery](#verify-review-and-deliver).

### Explore and route

| Example request | First skill | Result and conditional continuation |
| --- | --- | --- |
| "I know the goal, but which skill fits the next step?" | [choose-skill](../skills/productivity/choose-skill/SKILL.md) | A next action from the current state; invoke it only when the request includes execution |
| "I have an idea for a new product; help me compare approaches." | [brainstorm-ideas](../skills/productivity/brainstorm-ideas/SKILL.md) | Options and trade-offs; use `challenge-proposal` for unresolved choices or `write-spec` once the direction is supported |
| "Question this proposal before we commit to it." | [challenge-proposal](../skills/productivity/challenge-proposal/SKILL.md) | Consequential answers and exposed assumptions; research unsupported premises before relying on them |
| "Is this service suitable under these constraints?" | [research-topic](../skills/productivity/research-topic/SKILL.md) | A sourced answer; use `design-architecture` when the next output is an accepted technical choice |
| "Can this approach handle our workload? Test the uncertain part." | [build-prototype](../skills/engineering/build-prototype/SKILL.md) | A bounded experiment and observations; revise the relevant decision/spec before production implementation |
| "We keep losing track of unresolved decisions and what they block." | [track-project-decisions](../skills/productivity/track-project-decisions/SKILL.md) | Current choices, dependencies and next ready question; specify settled portions without waiting for the whole initiative |
| "Make this agent instruction clearer without running it." | [improve-prompt](../skills/productivity/improve-prompt/SKILL.md) | A checked rewrite preserving intent; finish with the prompt unless an evaluation or execution was requested |
| "This ticket may be a duplicate or a support question; work out what it needs." | [assess-request](../skills/engineering/assess-request/SKILL.md) | Evidence, impact and a route; choose `diagnose-issue` for a failure, `write-spec` for missing behavior, or a support/closure recommendation |

### Evaluate a product opportunity

| Example request | First skill | Result and conditional continuation |
| --- | --- | --- |
| "Should we invest in this new product idea, given these interviews and constraints?" | [validate-product-idea](../skills/product/validate-product-idea/SKILL.md) | An evidence-backed next decision or bounded test plan; use `write-spec` for accepted scope, without claiming an unexecuted test validated demand |
| "Should we add this feature to the existing product?" | [validate-product-idea](../skills/product/validate-product-idea/SKILL.md) | Assess the target segment, observed need, alternatives and commitment while preserving working behavior; skip rediscovery for an already accepted change |
| "What needs are supported by these interviews, tickets and reviews?" | [analyze-user-feedback](../skills/product/analyze-user-feedback/SKILL.md) | Deduplicated needs with sources, opposing evidence and coverage limits; use validation for uncertain demand or prioritization when work candidates and capacity exist |
| "Compare competitors and manual alternatives for this product decision." | [analyze-competitors](../skills/product/analyze-competitors/SKILL.md) | A dated, comparable assessment and supported implications; a proposed opportunity still needs user evidence before treating it as demand |

This graph shows possible handoffs. Start with the missing result and reuse existing evidence. A direct request for feedback synthesis or a comparison can finish at that result.

```mermaid
flowchart TD
  Idea(["Input: proposed product or feature"]) --> Validate[["validate-product-idea"]]
  Raw(["Input: existing interviews, tickets or reviews"]) --> Feedback[["analyze-user-feedback"]]
  Alternatives(["Input: product decision needing an alternatives comparison"]) --> Competitors[["analyze-competitors"]]
  Feedback -->|Needs inform the investment| Validate
  Competitors -->|Comparison informs the investment| Validate
  Validate --> Decision{"What does the evidence support?"}
  Decision -->|Accepted commitment needs behavior defined| Spec[["write-spec"]]
  Decision -->|Missing observations| Test(["Result: bounded test plan or authorized experiment"])
  Test -->|Actual observations available| Validate
  Decision -->|Premise needs changing| Ideas[["brainstorm-ideas"]]
  Decision -->|Stop or retain current approach| Stop(["Result: decision and reasons recorded"])
  classDef skill fill:#edf5ff,stroke:#355b85,color:#172b42;
  class Validate,Feedback,Competitors,Spec,Ideas skill;
```

Feedback synthesis and competitor research can run in parallel after the audience, job and decision are agreed, when their sources and workspaces allow independent work. Reconcile shared assumptions before a decision depending on both; neither branch is mandatory. Independent review challenges the actual sources and conclusions before acceptance. It cannot stand in for user observations, and a proposed test does not authorize recruitment, publication or spending.

### Understand and prepare a project

| Example request | First skill | Result and conditional continuation |
| --- | --- | --- |
| "I inherited this app; establish how we can work on it safely." | [onboard-codebase](../skills/engineering/onboard-codebase/SKILL.md) | A verified working baseline and preserved contracts; implement a ready first task or investigate a specific gap |
| "Explain how this feature works." | [explain-codebase](../skills/engineering/explain-codebase/SKILL.md) | Located behavior and data flow; finish with the explanation, or use `review-code` for a separately requested assessment |
| "Recover our conventions and decisions from the code and history." | [document-project](../skills/engineering/document-project/SKILL.md) | Evidence-backed records and useful indexes; unresolved rule choices go to `define-project-conventions` rather than becoming invented history |
| "Agree on coding conventions for this repository." | [define-project-conventions](../skills/engineering/define-project-conventions/SKILL.md) | Accepted local rules; use `automate-code-checks` for an enforceable rule or `create-tasks` for a scoped adoption change |
| "Make our existing project guidance easy for agents to find." | [prepare-repo-for-agents](../skills/engineering/prepare-repo-for-agents/SKILL.md) | Working entry points to authoritative context and commands; missing factual records belong to `document-project` |
| "These docs overlap and disagree; consolidate them." | [consolidate-docs](../skills/engineering/consolidate-docs/SKILL.md) | Reconciled content and repaired links; verify affected navigation without adding another summary document |
| "Hand this unfinished work to another session or owner." | [prepare-handoff](../skills/productivity/prepare-handoff/SKILL.md) | Current state, authority, evidence and next runnable action; resume from checked state instead of repeating discovery |
| "Prepare this sprint's engineering update from our tracker and deployment evidence." | [report-project-status](../skills/productivity/report-project-status/SKILL.md) | Verified progress, blockers and next decisions for the stated audience/period; sending requires its own authority, and an owner transfer uses `prepare-handoff` |
| "Our PR reviews keep waiting for the wrong person; improve that process." | [improve-team-workflow](../skills/productivity/improve-team-workflow/SKILL.md) | Current/proposed steps and a bounded trial; accepted implementation can become tasks, while a planned trial cannot claim saved time |
| "Should we automate this recurring report with AI or use an existing feature?" | [improve-team-workflow](../skills/productivity/improve-team-workflow/SKILL.md) | Compare credible options including review, exceptions and maintenance; a recommendation does not purchase or deploy a tool |

### Specify and design

| Example request | First skill | Result and conditional continuation |
| --- | --- | --- |
| "Turn this agreed feature into a PRD or structured issue." | [write-spec](../skills/engineering/write-spec/SKILL.md) | Scenarios and acceptance criteria; settle missing design, then use `plan-phases` for milestones or `create-tasks` for bounded work |
| "Clarify what an account, workspace and membership mean here." | [model-domain](../skills/engineering/model-domain/SKILL.md) | Domain concepts, invariants and ownership; carry them into `write-spec` or `design-architecture` |
| "Choose the stack, boundaries and hosting for this app or AI capability." | [design-architecture](../skills/engineering/design-architecture/SKILL.md) | Technical choices grounded in workload, data, cost and existing infrastructure; use `build-prototype` for unproven feasibility |
| "Map how a user completes this task, including errors and recovery." | [map-user-flows](../skills/ui-ux/map-user-flows/SKILL.md) | Actors, states and transitions; use `create-wireframes` for unresolved screen structure, or `design-interface` for visual detail when structure is settled |
| "People cannot find the right settings; reorganize the navigation." | [map-user-flows](../skills/ui-ux/map-user-flows/SKILL.md) | Destination inventory, hierarchy, labels and supported paths; use `test-usability` for participant findability evidence or `design-interface` for accepted composition work |
| "The journey is settled; sketch the new screen's structure and states." | [create-wireframes](../skills/ui-ux/create-wireframes/SKILL.md) | Editable low-fidelity frames with hierarchy and state annotations; carry accepted structure into `design-interface` when visual detail is needed |
| "This existing screen is cluttered; propose a clearer structure while preserving its behavior." | [create-wireframes](../skills/ui-ux/create-wireframes/SKILL.md) | Inspected current patterns and proposed structural changes; unresolved journey rules return to `map-user-flows`, and accepted layouts can continue to detailed design |
| "The screen structure is settled; design its visual detail and states." | [design-interface](../skills/ui-ux/design-interface/SKILL.md) | A design or requested rendered result; use `implement-change` for a design handoff or `review-interface` for a missing rendered assessment |
| "Write validation, empty-state and permission messages without changing the layout." | [write-interface-copy](../skills/ui-ux/write-interface-copy/SKILL.md) | Strings tied to actual states, terminology and recovery actions; use implementation for authorized wiring and verify the rendered result before claiming fit |
| "Capture these two interfaces as useful references for our dashboard." | [capture-design-reference](../skills/ui-ux/capture-design-reference/SKILL.md) | Inspected patterns with capture conditions and evidence; use `design-interface` to adapt suitable ideas to the target product |
| "Several screens need consistent shared tokens and components." | [build-design-system](../skills/ui-ux/build-design-system/SKILL.md) | Shared contracts demonstrated in real consumers; carry them into `design-interface` or implementation |
| "Plan a move to this accepted data/service architecture." | [plan-migration](../skills/engineering/plan-migration/SKILL.md) | Compatibility, transfer, cutover and recovery plan; use phases/tasks to decompose authorized execution, with gates before live changes |

Architecture and UI design answer different questions. `design-architecture` owns technical structure; `map-user-flows` owns the journey; `create-wireframes` owns low-fidelity screen structure; `design-interface` owns visual detail and complete interface states; `build-design-system` owns repeated shared interface needs. `build-prototype` tests a consequential uncertainty with an experiment. Use only the missing results and reconcile shared contracts; accepted flows or existing screens can start wireframing directly, and settled structure can skip it. UI and technical design may overlap once shared behavior is settled and their work is isolated; dependent implementation waits for accepted inputs.

### Plan and change software

| Example request | First skill | Result and conditional continuation |
| --- | --- | --- |
| "Which of these backlog items fit our next work period?" | [prioritize-work](../skills/productivity/prioritize-work/SKILL.md) | Selection, order, deferrals and capacity/prerequisite limits; decompose selected scope with `create-tasks` or begin an accepted ready task when execution is authorized |
| "Break this agreed project into deliverable phases." | [plan-phases](../skills/engineering/plan-phases/SKILL.md) | Milestones with prerequisites and exits; use `create-tasks` for the selected sufficiently understood phase |
| "Make executable tasks from this spec, with dependencies." | [create-tasks](../skills/engineering/create-tasks/SKILL.md) | Owned tasks and checks, locally or in an authorized tracker; use `implement-change` only for a selected ready batch |
| "The stack and scope are agreed; bootstrap the new repository." | [start-project](../skills/engineering/start-project/SKILL.md) | A checked foundation, blank or from an accepted template; implement the first agreed capability next |
| "Implement this ready feature, fix or selected refactor." | [implement-change](../skills/engineering/implement-change/SKILL.md) | The scoped change and proof; obtain missing independent evaluation before authorized delivery |
| "This previously working action now fails; establish why." | [diagnose-issue](../skills/engineering/diagnose-issue/SKILL.md) | Reproduction, tested cause and exact gaps; a selected repair goes to `implement-change`, while changed product behavior may need a spec |
| "Measure and reduce this feature's latency." | [improve-performance](../skills/engineering/improve-performance/SKILL.md) | A profile and, when requested, a measured repair under comparable conditions; review/deliver only within scope |
| "Update these dependencies and adapt their consumers." | [upgrade-dependencies](../skills/engineering/upgrade-dependencies/SKILL.md) | A compatible, verified change; review it and deliver when requested |
| "Find worthwhile refactors, duplication or bottlenecks in this code/data layer." | [find-improvements](../skills/engineering/find-improvements/SKILL.md) | Ranked evidenced candidates; measure suspected performance issues or implement one selected refactor with preservation checks |
| "This accepted coding rule keeps being broken; automate its check." | [automate-code-checks](../skills/engineering/automate-code-checks/SKILL.md) | A calibrated guard with invalid failures and valid passes; review the check and keep bulk remediation separately scoped |

A greenfield idea may start with exploration; an agreed greenfield foundation can start with `start-project`. A brownfield change preserves existing behavior and useful conventions, but a familiar bounded feature does not require whole-project onboarding. A small ready fix can skip spec, phase and task documents.

### Verify, review and deliver

| Example request | First skill | Result and conditional continuation |
| --- | --- | --- |
| "Prove this change meets these criteria, including before/after evidence." | [verify-change](../skills/engineering/verify-change/SKILL.md) | Observed outcomes and exact gaps; diagnose unexplained failures, repair selected defects, or obtain a missing independent assessment |
| "Review this PR, feature or bounded codebase for defects." | [review-code](../skills/engineering/review-code/SKILL.md) | Prioritized findings and inspected coverage; use `verify-change` for missing proof or implementation for authorized fixes |
| "Audit this rendered screen's usability and accessibility." | [review-interface](../skills/ui-ux/review-interface/SKILL.md) | Observed interaction/visual findings and limits; route concrete fixes to implementation and unclear runtime failures to diagnosis |
| "Find out whether new users can finish this setup flow without assistance." | [test-usability](../skills/ui-ux/test-usability/SKILL.md) | A focused study and findings from available participant observations, or a protocol with access gaps; use `map-user-flows` or `design-interface` for accepted changes and retest the relevant tasks |
| "Explain what this PR changes and why, using the available evidence." | [explain-pr](../skills/engineering/explain-pr/SKILL.md) | A fixed-comparison explanation; finish if that is the request, reusing valid completed correctness reviews |
| "Take this reviewed change to the agreed PR, release or deployment target." | [ship-change](../skills/engineering/ship-change/SKILL.md) | The authorized target and its observed checks; use `diagnose-issue` for a failure, `find-improvements` for a justified opportunity, or finish |
| "Prepare a GitHub release description from commits and merged PRs." | [ship-change](../skills/engineering/ship-change/SKILL.md) | Notes checked against the chosen previous release and candidate; stop at notes, a remote draft, or publication according to the requested target |
| "Configure useful alerts for this service using our existing monitoring tools." | [configure-monitoring](../skills/engineering/configure-monitoring/SKILL.md) | Scoped signals, owners and routes with observed checks; distinguish local tests from live delivery and use `ship-change` only for a requested delivery target |

For this collection's own release, use `ship-change` with the [release procedure](authoring.md#releasing-the-collection), the exact reviewed commit and the intended channel. For example: "Prepare GitHub release notes for this collection at the selected commit. Read the relevant history and merged PRs, summarize supported skills and limitations, and include installation instructions. Return the notes and readiness gaps." A first release has no previous-release comparison; its notes describe the supported initial scope. Creating a remote draft, pushing a tag and publishing remain distinct requested targets.

If the request stops at a spec, explanation, design or review, return that result and the next useful action. Continue a broader workflow when it is already authorized. A small change may need no new planning document. `verify-change` also applies to changed docs or plans through scenario checks, consistency, links and rendered diagrams; it does not impose a code test suite on every artifact. Reuse valid proof, with independent evaluation, instead of duplicating a completed verification pass. Testing is required where relevant; test-first sequencing is not mandatory.

After delivery, inspect the requested health signals and actual target. Route a failure back to diagnosis or a justified opportunity to `find-improvements`. Use `configure-monitoring` when the requested result is missing or noisy monitoring coverage, carrying the target, existing signals and operating constraints. Configuration and live test notifications require their own scope and authority; a bounded check or verified setup does not promise a continuous watch. Carry useful decisions, learnings and incidents into existing project records.

## Sequential and parallel work

Sequence work when one result determines another task's input. Required domain rules precede dependent contracts; shared schemas/foundations precede consumers; accepted behavior precedes its executable tasks; integration and relevant verification precede delivery.

`plan-phases` identifies which milestones can overlap and what closes each one. `create-tasks` preserves those dependencies while splitting a selected phase into owned, verifiable work. Distinguish work that could run together after named prerequisites from work ready now. A phase may start only when its own prerequisites hold; a task inside it may still wait on another task. Publish to the requested project-management destination only after checking existing work and granted write authority; reconcile uncertain writes before retrying and confirm stored results before claiming synchronization.

Parallel work needs ready inputs, independently checkable outputs, and isolated writes/state/data/verification environments. Different filenames alone do not establish independence. Read-only specialist investigations or reviews can run together on a fixed baseline. UI and technical design can run together once shared behavior is clear, with reconciliation before their consumers are implemented.

### Parallel project phases

For example, an agreed import/export release can have two capability phases after its shared data and permission contract is accepted. Each branch owns a usable outcome with its own implementation, verification and independent review. These rounded nodes are phase outcomes, and every arrow is a prerequisite; none is a skill invocation:

```mermaid
flowchart TD
  P1(["P1 result: shared contract accepted"]) --> P2(["P2 result: import journey accepted"])
  P1 --> P3(["P3 result: export journey accepted"])
  P2 --> P4(["P4 result: combined release verified and reviewed"])
  P3 --> P4
  P4 -->|Delivery authorized| Deliver(["Work: deliver and verify the target"])
```

P2 and P3 are parallel candidates only if their owned writes and test resources can be isolated and neither needs the other's output. If export depends on the new import behavior, add that dependency and run them sequentially. P4 waits for both accepted outputs, then checks cross-capability behavior on the combined revision. A failed P2 blocks P4 but need not stop independent P3 work. Preserve P3's accepted evidence unless later changes invalidate it.

### Parallel tasks within a phase

A CSV import can also have parallel tasks inside one capability phase. These rounded nodes describe work and results, with prerequisite arrows; the frame is the phase boundary. This is a dependency illustration, not a declaration that any phase or task is already accepted:

```mermaid
flowchart TD
  P1(["P1 result: import rules and contract accepted"]) --> API
  P1 --> UI
  subgraph P2["Phase: P2 - Users can preview and confirm an import"]
    API(["Task: server behavior and scoped checks"]) --> Join(["Result: integrated journey meets criteria"])
    UI(["Task: preview screen and scoped checks"]) --> Join
    Join --> Review(["Work: independently review the combined result"])
  end
  Review --> P3(["P3 work: deliver and verify the target"])
```

The server and screen tasks are parallel candidates after P1 is accepted. The screen can use contract fixtures while the server is built, provided workspaces, shared files and test state do not conflict. If both tasks edit the same generated client or reset the same database, assign that shared change to one owner or serialize it. P2 exits only after both branches integrate and their combined behavior is independently accepted; fixture-based checks cannot replace that evidence.

`create-tasks` makes the same dependencies concrete inside each selected phase: a migration precedes queries that require its schema; two read-only reviews of a fixed revision can overlap; a PR requiring both branches waits for their integrated evidence. Planning a future parallel branch does not make it ready to run today.

The coordinator owns shared decisions, reconciliation, integration, and readiness. Use host-supported workers/workspaces when available; Markdown instructions do not implement a scheduler. Small work remains sequential when delegation adds no useful independence.

Evaluation always uses a separate agent in fresh context, including for plans, research, code, and designs. Supply accepted criteria, the fixed candidate, relevant raw sources, and check access without the author's conversation or preferred conclusion. The reviewer tries to disprove material claims and inspects actual proof. Add reviewers only for distinct risks; preserve demonstrated defects through reconciliation and independently recheck affected results after fixes. Without an independent reviewer, the result remains unreviewed and cannot pass acceptance. This is separate from the user's required decisions and approvals.

A worker may not receive the parent conversation. Give it a bounded question or outcome, source scope/baseline, applicable instructions, accepted criteria, permitted actions and owned writes, expected evidence, and stop conditions. Research returns located findings and unresolved claims; the coordinator checks consequential evidence before adopting conclusions. Use host controls where available: separate context does not establish isolation of files, services, or credentials.

## Review and recheck

A large review can use stages without creating another project phase plan: establish scope and a fixed candidate, inspect distinct risks, reconcile findings across boundaries, then independently recheck authorized fixes. A small review can do this with one independent reviewer. Select extra review branches only for risks that need separate coverage.

```mermaid
flowchart TD
  Scope(["Input: fixed candidate, scope and criteria"]) --> Proof[["verify-change"]]
  Scope --> Code[["review-code"]]
  Scope -->|Rendered experience in scope| UI[["review-interface"]]
  Proof --> Join(["Work: reconcile all required findings and proof"])
  Code --> Join
  UI --> Join
  Join --> Gate{"Required defect or proof gap?"}
  Gate -->|Yes| Gap(["Result: blocker and next repair or investigation"])
  Gap -. "Fix authorized and completed" .-> Updated(["Input: new candidate with still-valid evidence"])
  Updated -->|Independent affected rechecks| Join
  Gate -->|No| Verdict(["Result: scoped verdict and remaining approval gates"])
  classDef skill fill:#edf5ff,stroke:#355b85,color:#172b42;
  class Proof,Code,UI skill;
```

This example reviews a code change with required behavioral proof and an optional rendered-interface assessment. Each double-bordered node is one skill; rounded nodes are coordination work, inputs or results. Reuse completed valid proof/reviews, and wait for every required branch before the verdict. Evidence capture and risk inspection can overlap on the same fixed candidate when their checks do not interfere. A browser session, shared test database, rate limit or mutable service can require separate fixtures or sequential checks even for read-only source reviewers. Reconcile cross-boundary behavior after the relevant branch results exist; a specialist's clean report covers only its inspected scope.

After a fix, identify which paths, criteria and artifacts changed, independently rerun affected checks, and reconcile against the updated candidate before issuing a new verdict. Keep unaffected evidence with its original tested revision and explain why it still applies. Missing required access or unresolved behavior remains a blocker; a review can finish by reporting that gap. Only the coordinator changes shared review/task records unless ownership is explicitly divided.

## Specs, tasks and PRs

A spec is the behavior contract; a phase is a deliverable milestone; a task is an owned unit of work; a PR is a review and integration boundary. They do not map one-to-one. One phase may need several PRs. Several small tasks may belong in one coherent PR. Split PRs by independently reviewable behavior, dependencies and safe integration, not merely by frontend/backend folders or task count.

Link a task's acceptance criteria to the relevant spec IDs and phase exits. A proposed PR group records included tasks, prerequisite PRs or contracts, preserved behavior, verification and recovery conditions. Follow the repository's branch/stack policy, and identify incomplete feature slices honestly. Do not invent a PR number or mark a milestone delivered because its first task merged.

At PR creation, describe the actual change and include observed checks, useful before/after evidence, independent findings and their disposition, plus remaining gaps. Use `explain-pr` when an explanation is the requested result, `review-code` for correctness and risk findings, and `ship-change` to reach an authorized delivery target. An intent question is not a correctness finding; an explanation is not approval to merge.

## Context and next actions

Pass the accepted objective, relevant artifacts and their versions where material, decisions, scope, repository revision/baseline, unresolved prerequisites, and verification evidence. Reconcile copied task criteria with authoritative inputs after a change; retain unaffected discoveries. For partial batches, preserve each task's outputs and actual disposition, stop dependent work when its prerequisite fails, and resume from observed state. Integration needs evidence for the combined revision.

Finish with the next useful action, the skill that owns it, the input to carry forward, and any unmet prerequisite. Select the next missing result instead of reciting the whole pipeline. For example: "P1's import contract is accepted; run `create-tasks` for P2 using its preview/confirm criteria. Implementation waits until the required test environment is available." If the requested result is complete and no follow-up is justified, say so.

Before context loss or an actual session transfer, condense those facts into the existing work record or a short continuation block, retaining pending operation IDs and useful file/symbol pointers. Remove repeated logs and search noise; retain authority, blockers and unchecked criteria. On resumption, reload applicable instructions and compare against current sources/state. Summaries guide that check; they do not replace evidence or require a new document or session.

| Current result | Next skill when needed | Carry forward / prerequisite |
| --- | --- | --- |
| Idea with a consequential choice unresolved | `challenge-proposal` | Options, accepted answers and the decision that changes the outcome |
| Proposal depends on an unsupported premise | `research-topic` or `build-prototype` | The falsifiable question and the evidence needed; resume the affected proposal afterward |
| Product or feature commitment depends on unproven need or demand | `validate-product-idea` | Intended users, proposed commitment, existing evidence and its limits |
| Feedback synthesis or competitor comparison | `validate-product-idea`, `prioritize-work`, or finish according to the requested decision | Source-linked findings and counterevidence; prioritization additionally needs work candidates, goals and capacity |
| Selected idea with enough evidence | `write-spec` | Accepted direction, constraints and supporting evidence |
| Spec with unresolved technical or journey choices | `design-architecture` or `map-user-flows` | Relevant behavior criteria; use `build-prototype` for unproven feasibility |
| Accepted flow or existing screen with unresolved structure | `create-wireframes` | Accepted behavior, current screens/components, supported surfaces and the structural question |
| Accepted screen structure needing visual detail | `design-interface` | Wireframes or existing layout, requirement/state links, component constraints and review evidence |
| Accepted scope and design | `plan-phases`, or `create-tasks` directly for a small change | Criteria, preserved contracts and known dependencies |
| Agreed phase | `create-tasks` | Its exits, accepted inputs and unresolved prerequisites; planning later tasks does not make them executable |
| Ready tasks | `start-project` if the selected task establishes a missing foundation; otherwise `implement-change` | One task or an agreed ready batch, ownership/isolation and accepted dependencies |
| Implemented change with proof missing | `verify-change` | Candidate revision, relevant baseline, criteria and check access |
| Verified change | `review-code` and/or `review-interface` according to risk | Fixed candidate and valid evidence; reuse an already completed independent review |
| Review findings | `diagnose-issue` for an uncertain failure; `implement-change` for selected repairs | Evidence, affected criteria and fix authority; independently recheck the result |
| Reviewed change and delivery authority | `ship-change`; `explain-pr` only when an explanation is needed | Final candidate, observed proof, recovery limits and requested target |
| Delivery observed | `diagnose-issue` for failures, `configure-monitoring` for requested coverage changes, `find-improvements` for evidenced opportunities, or finish | Actual target signals, operating constraints and existing decisions/learnings; do not restart settled planning |
| Monitoring configured | `verify-change` for missing independent proof; `ship-change` for a requested delivery target; otherwise finish | Exact configuration/environment, signal and route evidence, owner, recovery action and live verification gaps |

A bounded request finishes with its result and a recommendation. An authorized end-to-end request continues through ready stages without invented confirmation stops. Use `prepare-handoff` for an owner/session transfer or context compaction, not between every skill.

Recommendations can name another skill, but invocation depends on host support and installation. Each skill remains useful alone; describe the next plain action if its sibling is unavailable.

## Artifacts and side effects

Update existing authoritative records. Current behavior, a specification, a decision, a learning, an incident, and a contributor standard have different roles, but they do not require empty folders or a new file every time context moves. Use a memory index when it improves retrieval: link records with scope/status and a refresh trigger rather than copying their contents. Keep temporary run state separate; conflicting or stale memory requires evidence before reuse. AGENTS.md points to the applicable project knowledge.

At task or workflow completion, follow the requested audience, tone, depth and project template. Default to a concise result, its purpose, the relevant method, observed verification and exact gaps or next action. A technical walkthrough can be detailed when requested; a PR should let a reviewer understand the changed behavior and evidence quickly. Update durable knowledge in place and link it from the summary. Repeated summaries are not new sources of truth.

Keep task-system integration within the requested destination and authority. Inspect project/state/concurrency rules and existing items before remote writes. Preserve local work, secret values, and private records. Delivery, production changes, destructive operations, and external communication require the actual action's authority; already-granted authority remains valid.

A check invocation is not evidence of success. Inspect outcomes and report exact failures or unavailable checks. A prototype is not production-ready software; a scoped review does not prove the whole system correct; a command completing does not prove the remote target is healthy.

Verification records the material criterion, tested revision/environment, actual observation, and result. Visible changes use relevant rendered evidence; performance/data claims use comparable measurements; behavioral changes use reproducible interactions or check output. New behavior need not invent a historical baseline. PRs carry concise results and useful accessible artifact links, with comparison conditions and unchecked coverage. Inspect and redact evidence before authorized sharing, verify uploaded locations, and label anything still local. After follow-up edits, refresh the affected proof and PR claims.
