# Skills

Workflows for developing software, making decisions, and designing interfaces. Each skill owns a concrete result and can be used on its own or as a step in a larger process.

The collection contains 30 draft skills across development, productivity, and UI/UX. Supporting templates and references live with the skills that use them. These are authored workflows under evaluation; client installation and cross-client compatibility are not yet verified.

## Find the right skill

| I want to… | Start with |
| --- | --- |
| Explore a project or feature idea | [brainstorm-ideas](skills/productivity/brainstorm-ideas/SKILL.md) |
| Challenge a proposed direction | [question-plan](skills/productivity/question-plan/SKILL.md) |
| Get productive in an inherited codebase | [onboard-codebase](skills/development/onboard-codebase/SKILL.md) |
| Understand current code or a PR | [explain-codebase](skills/development/explain-codebase/SKILL.md) or [explain-pr](skills/development/explain-pr/SKILL.md) |
| Define behavior, phases, then tasks | [write-spec](skills/development/write-spec/SKILL.md) → [plan-phases](skills/development/plan-phases/SKILL.md) → [create-tasks](skills/development/create-tasks/SKILL.md) |
| Choose the stack and technical structure | [design-architecture](skills/development/design-architecture/SKILL.md) |
| Establish conventions or agent context | [define-project-conventions](skills/development/define-project-conventions/SKILL.md) or [prepare-repo-for-agents](skills/development/prepare-repo-for-agents/SKILL.md) |
| Build an agreed change or fix a failure | [implement-change](skills/development/implement-change/SKILL.md) or [diagnose-issue](skills/development/diagnose-issue/SKILL.md) |
| Demonstrate the result and prepare review evidence | [verify-change](skills/development/verify-change/SKILL.md) |
| Find useful refactors or review code | [find-refactors](skills/development/find-refactors/SKILL.md) or [review-code](skills/development/review-code/SKILL.md) |
| Design or evaluate an interface | [UI/UX catalog](docs/domains/ui-ux.md) |
| Deliver a change | [ship-change](skills/development/ship-change/SKILL.md) |
| Reduce overlapping documentation | [consolidate-docs](skills/development/consolidate-docs/SKILL.md) |

Start at the action the request needs. A ready task can go directly to implementation; a small change may need no new planning document. New projects establish foundations. Existing projects preserve users, data, contracts, and useful conventions while improving the selected behavior.

## Full catalogs

- [Development](docs/domains/development.md): 20 skills for understanding, foundations, specification, technical design, delivery planning, implementation, diagnosis, verification, review, and delivery.
- [Productivity](docs/domains/productivity.md): 6 skills for ideas, questioning, research, decision maps, prompts, and handoffs.
- [UI/UX](docs/domains/ui-ux.md): 4 skills for flows, interface design, rendered review, and shared design systems.

The catalogs describe categories, outputs, boundaries, and conditional resources. The [workflow map](docs/workflows.md) shows lifecycle phases, entry points, dependencies, parallel work, and next steps.

## Use a workflow

From this checkout, point a filesystem-capable agent to the selected skill and give it the actual task. For example:

```text
Use skills/development/write-spec/SKILL.md to define the requested feature.
Use skills/development/review-code/SKILL.md to review this branch against main.
```

The skill supplies its procedure and links conditional resources. Reuse its result for the next needed action; installation and invocation through a client-specific skill menu require separate verification.

## Working on the collection

Each package lives at `skills/<domain>/<skill>/SKILL.md` and carries its required resources. Read [authoring and maintenance](docs/authoring.md) for conventions, validation, and deprecation. A skill should not need the whole collection installed or the entire repository loaded.

Use Bun 1.3.9 or newer. Run `bun run check` for the collection audit and `bun test` for the TypeScript checker's tests. There are no package dependencies to install. Behavioral trials and client installation checks are separate from this audit.
