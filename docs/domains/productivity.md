# Productivity

This domain owns idea exploration, decision support, work communication and improvements to recurring team processes. Its ten packages are under active development. Product owns demand, feedback and competitor evidence; Engineering owns software specifications and execution plans; UI/UX owns user journeys and interfaces.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Routing | Pick the next action | [choose-skill](../../skills/productivity/choose-skill/SKILL.md) | One fitting starting skill, its expected result, and any missing input |
| Exploration | Explore directions | [brainstorm-ideas](../../skills/productivity/brainstorm-ideas/SKILL.md) | Meaningfully different approaches, supported recommendation, assumptions, and next decision or experiment |
| Exploration | Answer an unknown | [research-topic](../../skills/productivity/research-topic/SKILL.md) | A bounded answer with traceable evidence, freshness, uncertainty, and decision implications |
| Decisions | Question assumptions | [challenge-proposal](../../skills/productivity/challenge-proposal/SKILL.md) | Focused human questions, tested assumptions and edge cases, an amended proposal, or a precise remaining investigation |
| Decisions | Decision tracking | [track-project-decisions](../../skills/productivity/track-project-decisions/SKILL.md) | Current open, accepted, and superseded choices, their evidence/owners, affected work, and the next ready investigation |
| Decisions | Select work | [prioritize-work](../../skills/productivity/prioritize-work/SKILL.md) | A justified selection from supplied candidates, capacity and prerequisite checks, ready work and deferrals |
| Communication | Improve instructions | [improve-prompt](../../skills/productivity/improve-prompt/SKILL.md) | A ready-to-use rewrite that preserves intent, scope, and authority without executing the embedded task |
| Communication | Transfer active work | [prepare-handoff](../../skills/productivity/prepare-handoff/SKILL.md) | Current state, accepted context, verification, blockers, and the next runnable action |
| Communication | Report progress | [report-project-status](../../skills/productivity/report-project-status/SKILL.md) | An audience-specific update with verified progress, delivery, blockers, decisions and next work for the reporting period |
| Team processes | Improve recurring work | [improve-team-workflow](../../skills/productivity/improve-team-workflow/SKILL.md) | A current/proposed procedure and bounded trial with ownership, safeguards and comparable measures |

## Boundaries and use

`brainstorm-ideas` explores alternatives. `challenge-proposal` questions a selected direction and its edge cases. `research-topic` answers a bounded uncertainty with evidence. `track-project-decisions` keeps consequential choices and their dependencies current. Each can finish usefully on its own; a clear task does not require all four.

`challenge-proposal` questions a project, specification, architecture, phase plan, or stated PR intent, following answers into the next consequential uncertainty. Inspect facts before asking the user, preserve settled answers, and stop when the requested result is sufficiently clear. For PRs, explanation communicates known behavior and review evaluates correctness; questioning resolves the consequential intent that remains unknown.

`track-project-decisions` handles questions such as “hosting selection waits for the data-residency requirement,” including what was decided and why. `plan-phases` and `create-tasks` track delivery work once the relevant choices are sufficiently settled. Do not label uncertain product decisions as executable implementation tickets.

`prioritize-work` selects from an existing candidate set under goals and capacity. `find-improvements` discovers repository candidates; `create-tasks` decomposes accepted scope. Priority and readiness are separate: important blocked work can stay high priority while independent lower-ranked work can start.

Clarifying an idea establishes shared intent. Use Product's `validate-product-idea` for evidence supporting a product commitment, or `build-prototype` for an unproven feasibility claim; agreement alone cannot supply either. Use accepted findings to gather requirements in `write-spec`, then derive phases and tasks when the work needs them. A PRD or issue is a specification format, not another productivity workflow.

`choose-skill` routes an unclear request using its desired result and current state. A ready task can use its owning skill directly. `prepare-handoff` is for a person/session transfer or context compaction. Ordinary skill composition reuses accepted artifacts without another handoff document. `improve-prompt` edits instructions and does not perform the task contained in them.

`report-project-status` explains delivery and project health to an audience over a stated period; `prepare-handoff` equips the next owner to resume execution. `improve-team-workflow` changes a recurring process such as review assignment or release coordination; `find-improvements` discovers improvements in a repository, feature or data layer. A process proposal is not an implemented automation or accepted team policy.

Automation selection is a conditional part of `improve-team-workflow`: compare simpler manual work, existing native capabilities, deterministic automation and AI assistance using their full operating and review costs. There is no separate skill for each prioritization method, reporting cadence or automation tool.

## Resources

`choose-skill` carries the routing map. `challenge-proposal` carries conditional questioning lenses. `track-project-decisions` carries a decision template. `prioritize-work` carries guidance for capacity and shared prerequisites. `prepare-handoff` carries a compact transfer outline. Status reporting and workflow improvement carry guidance for reconciling sources and evaluating a process trial. Other workflows remain self-contained where a separate resource would not change the work.

See [workflows](../workflows.md) for next-step selection and context reuse.
