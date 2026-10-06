# Local project board

Use this shape only where an existing format does not already serve the project. One coordinator owns state changes. This is a file-based workflow; no background scheduler or web UI is installed.

## Location and authority

Start with `docs/project/README.md` only if the project has no established location. Link the accepted spec and phase plan where they already live. For a few short tasks, keep their complete records in that file. When separate records improve navigation, use stable paths such as `docs/project/tasks/T-001.md` and make those records authoritative. The board then links to them and labels any repeated status as a view last reconciled at a stated revision/time.

Keep restricted evidence in approved storage, with references suitable for the board's audience. Do not place credentials or private customer records in a public repository.

## Overview shape

```markdown
# Project work

Goal: <accepted outcome and source>
Coordinator: <single owner of shared state>
Task source of truth: <this file, task records, or existing tracker>
Reconciled: <actual cutoff and source revision/snapshot>
Working agreements: <state definitions, capacity/WIP, decision and review owners>

## Phases

| Phase and plan link | Exit evidence | Accepted prerequisites | Current gap / next action |
| --- | --- | --- | --- |
| <stable ID and outcome> | <observed proof or missing> | <IDs and evidence> | <owner and exact gap> |

## Work view

| Task and canonical link | Phase | State | Owner | Depends on | Blocker / next action |
| --- | --- | --- | --- | --- | --- |
| <ID and outcome> | <ID or none> | <state> | <owner or unclaimed> | <IDs> | <exact gap> |

Ready now: <checked IDs and evidence; or no_work with reasons>
Future parallel candidates: <IDs, prerequisite and isolation conditions>
Human decisions: <existing decision links and tasks they block>
```

The view can resemble Scrum columns without imposing Scrum on the team. If the project uses sprints, add its accepted Sprint Goal, date range/time zone and selected tasks; keep forecasts separate from commitments and actual results. Do not invent story points, velocity or a sprint cadence. In Scrum, the Sprint Backlog is a plan toward the Sprint Goal and work must meet the Definition of Done; a board alone does not establish the full framework. See the [Scrum Guide](https://scrumguides.org/scrum-guide.html) when Scrum terminology is required.

## Task record additions

Reuse the existing executable contract: outcome, source criterion IDs/version, scope, preserved behavior, dependencies, owned writes/resources, checks and done criteria. `create-tasks` owns missing decomposition. Add only the coordination fields the record lacks:

| Field | What to record |
| --- | --- |
| State | Current state and reason for the latest material transition |
| Claim | Coordinator, worker/session, start time, source snapshot and owned workspace; unclaimed until assigned |
| Blocker | Dependency, input, decision, access or verification gap; exact missing result, owner and next action |
| Candidate | Output revision/artifact and partial results worth preserving |
| Acceptance | Actual checks and observations, independent reviewer/session and result, required human decision, unchecked delivery target |

Avoid a second copy of criteria in the board. Preserve material state changes in the task record or existing history; repeated progress narration adds no new evidence.

## Default states

Use local meanings first. Otherwise:

| State | Entry condition | Next transition |
| --- | --- | --- |
| `backlog` | Candidate work awaiting selection or an executable contract | `ready` after requirements and readiness are established; `blocked` for an identified missing prerequisite |
| `ready` | Selected scope, accepted prerequisites, access/authority and checks suffice; no conflicting claim | Coordinator claims it as `in-progress`, or returns it to `blocked` when evidence changes |
| `in-progress` | Named worker owns the bounded task and source snapshot | `in-review` with candidate and proof; `blocked` when work cannot continue |
| `in-review` | Candidate awaits required independent assessment or acceptance | `done` when accepted; `in-progress` for authorized repair; `blocked` for missing input/proof |
| `blocked` | Exact unmet condition and next owner/action recorded | Recheck all readiness conditions before returning to `ready`, or resume an intact claim only after owner reconciliation |
| `done` | Task criteria, checks, independent assessment and applicable human decisions are satisfied | Reopen affected work when criteria or evidence become invalid; preserve the old accepted result |
| `cancelled` | Authorized scope decision removes the task | Reconcile consumers and phase exits; cancellation never supplies a prerequisite output |

Required human approval awaiting a decision may remain `in-review` under local policy, with the decision recorded as an acceptance blocker. An open question blocks only affected work. A task cannot move to `done` simply because its owner stopped, its PR merged or its estimate expired.

## Check the result

Walk one ready pickup, one unmet dependency, an active competing claim, a human decision and a failed review using real records or clearly labeled synthetic cases. Confirm no blocked work is dispatched, workers do not share mutable resources without isolation, and a completed contribution cannot close an unverified phase. Re-read saved records after updates; a screenshot of columns alone does not prove readiness.
