# Productivity

This domain owns idea exploration, decision support, agent coordination and communication, and agent instructions. Its nine packages are under active development. Engineering owns software specifications and execution plans; UI/UX owns user journeys and interfaces.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Routing | Pick the next action | [choose-skill](../../skills/productivity/choose-skill/SKILL.md) | One fitting starting skill, its expected result, and any missing input |
| Coordination | Bounded parallel work | [delegate-to-agents](../../skills/productivity/delegate-to-agents/SKILL.md) | Self-contained briefs, host-supported ownership and independently checked integration while retaining the lead role |
| Exploration | Explore directions | [brainstorm-ideas](../../skills/productivity/brainstorm-ideas/SKILL.md) | Meaningfully different approaches, supported recommendation, assumptions, and next decision or experiment |
| Exploration | Answer an unknown | [research-topic](../../skills/productivity/research-topic/SKILL.md) | A bounded answer with traceable evidence, freshness, uncertainty, and decision implications |
| Decisions | Question assumptions | [challenge-proposal](../../skills/productivity/challenge-proposal/SKILL.md) | Focused human questions, tested assumptions and edge cases, an amended proposal, or a precise remaining investigation |
| Communication | Improve instructions | [improve-prompt](../../skills/productivity/improve-prompt/SKILL.md) | A ready-to-use rewrite that preserves intent, scope, and authority without executing the embedded task |
| Agent instructions | Capture recurring project work | [create-project-skill](../../skills/productivity/create-project-skill/SKILL.md) | Deduplicated code/history/session patterns, check recommendations and tested project-local skills when justified |
| Agent instructions | Evaluate behavior | [evaluate-skill](../../skills/productivity/evaluate-skill/SKILL.md) | Observed candidate/baseline comparisons, criterion-linked findings and reusable regressions |
| Communication | Transfer active work | [prepare-handoff](../../skills/productivity/prepare-handoff/SKILL.md) | Current state, accepted context, verification, blockers, and the next runnable action |

## Boundaries and use

`brainstorm-ideas` explores alternatives. `challenge-proposal` questions a selected direction and its edge cases. `research-topic` answers a bounded uncertainty with evidence. Each can finish usefully on its own; a clear task does not require all three.

`challenge-proposal` questions a project, specification, architecture, phase plan, or stated PR intent, following answers into the next consequential uncertainty. Inspect facts before asking the user, preserve settled answers, and stop when the requested result is sufficiently clear. For PRs, explanation communicates known behavior and review evaluates correctness; questioning resolves the consequential intent that remains unknown.

`plan-phases` and `create-tasks` define delivery work once the relevant choices are sufficiently settled. Do not label uncertain product decisions as executable implementation tickets. Keep ongoing task state, ownership and blockers in the project's existing tracker; a local list does not provide atomic multi-agent claims or a scheduler.

Clarifying an idea establishes shared intent. Use `research-topic` for existing evidence supporting a product commitment (collecting new demand evidence has no package here), or `build-prototype` for an unproven feasibility claim; agreement alone cannot supply either. Use accepted findings to gather requirements in `write-spec`, then derive phases and tasks when the work needs them. A PRD or issue is a specification format, not another productivity workflow.

`choose-skill` routes an unclear request using its desired result and current state. A ready task can use its owning skill directly. `prepare-handoff` is for a person/session transfer or context compaction. Ordinary skill composition reuses accepted artifacts without another handoff document. `improve-prompt` edits instructions and does not perform the task contained in them. `evaluate-skill` runs or assesses comparable behavioral trials; it preserves cases and evidence instead of inferring effectiveness from wording.

`prepare-handoff` equips the next owner to resume execution; it is not an audience status report. `find-improvements` discovers improvements in a repository, feature or data layer.

`create-project-skill` mines code, corrective commits and available agent histories to decide what belongs in automated checks, authoritative docs or a project-local skill. It creates the justified procedural skill when requested; `find-improvements` retains general code improvement discovery and `automate-code-checks` implements selected guards. Repeated mentions of one incident are not independent recurrence, and private transcripts stay outside public packages.

`delegate-to-agents` splits bounded work and checks integration while retaining a lead; `prepare-handoff` transfers responsibility. Neither supplies a missing runtime or grants side effects beyond the accepted request.

## Resources

`choose-skill` carries the routing map. `challenge-proposal` carries conditional questioning lenses. `prepare-handoff` carries a compact transfer outline. Other workflows remain self-contained where a separate resource would not change the work.

See [workflows](../workflows.md) for next-step selection and context reuse.
