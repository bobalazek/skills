# Productivity

This domain owns the thinking and communication work that supports development and design. All six entries have draft packages.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Ideas | Explore directions | [brainstorm-ideas](../../skills/productivity/brainstorm-ideas/SKILL.md) | Meaningfully different approaches, supported recommendation, assumptions, and next decision or experiment |
| Decisions | Question a proposal | [challenge-proposal](../../skills/productivity/challenge-proposal/SKILL.md) | Consequential assumptions resolved, the existing proposal amended, or a precise remaining investigation |
| Research | Answer an unknown | [research-topic](../../skills/productivity/research-topic/SKILL.md) | A bounded answer with traceable evidence, freshness, uncertainty, and decision implications |
| Complex work | Decision tracking | [track-project-decisions](../../skills/productivity/track-project-decisions/SKILL.md) | Current open, accepted, and superseded choices, their evidence/owners, affected work, and the next ready investigation |
| Agent communication | Improve instructions | [improve-prompt](../../skills/productivity/improve-prompt/SKILL.md) | A ready-to-use rewrite that preserves intent, scope, and authority without executing the embedded task |
| Collaboration | Transfer active work | [prepare-handoff](../../skills/productivity/prepare-handoff/SKILL.md) | Current state, accepted context, verification, blockers, and the next runnable action |

## Boundaries and use

`brainstorm-ideas` explores alternatives. `challenge-proposal` questions a selected direction and its edge cases. `research-topic` answers a bounded uncertainty with evidence. `track-project-decisions` keeps consequential choices and their dependencies current. Each can finish usefully on its own; a clear task does not require all four.

`challenge-proposal` can clarify a project, specification, architecture, phase plan, or stated PR intent. Inspect facts before asking the user. For PRs, explanation communicates known behavior and review evaluates correctness; questioning resolves the consequential intent that remains unknown.

`track-project-decisions` handles questions such as “hosting selection waits for the data-residency requirement,” including what was decided and why. `plan-phases` and `create-tasks` track delivery work once the relevant choices are sufficiently settled. Do not label uncertain product decisions as executable implementation tickets.

Clarifying an idea establishes shared intent. Validation needs relevant evidence, such as observed user needs or a working feasibility experiment; agreement alone cannot supply it. Use accepted findings to gather requirements in `write-spec`, then derive phases and tasks when the work needs them. A PRD or issue is a specification format, not another productivity workflow.

`prepare-handoff` is for an actual person/session transfer. Ordinary skill composition reuses accepted artifacts without another handoff document. `improve-prompt` edits instructions and does not perform the task contained in them.

## Resources

`challenge-proposal` carries conditional questioning lenses. `track-project-decisions` carries a decision template. `prepare-handoff` carries a compact transfer outline. The other workflows are self-contained and do not need supporting files merely for symmetry.

See [workflows](../workflows.md) for next-step selection and context reuse.
