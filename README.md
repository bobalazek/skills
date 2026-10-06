# Skills

Workflows for developing software, making decisions, and designing interfaces. Each skill owns a concrete result and can be used on its own or as a step in a larger process.

The collection contains 36 draft skills across development, productivity, and UI/UX. Each package carries its own templates, references, and optional helpers. Start with [choose-skill](skills/productivity/choose-skill/SKILL.md) when the next action is unclear.

Each final result requires an adversarial review by a separate agent in fresh context. The reviewer checks accepted requirements and raw proof without the author's conversation. Tests, meaningful before/after evidence, and review findings go into the PR when it is opened; required human approval remains separate. A host without independent agents can produce a draft, but cannot satisfy this collection's acceptance gate.

## Install

From your project directory, choose the skills you need:

```bash
bunx skills@1.7.0 add bobalazek/skills --list
bunx skills@1.7.0 add bobalazek/skills --skill choose-skill create-tasks verify-change --agent opencode --copy
```

This installs selected packages into the project, including their supporting files. Inspect the install summary before confirming. Use `--skill '*'` to select the whole collection, or choose a different agent supported by the installer and check discovery in that client. Avoid replacing locally edited skills without comparing those edits first.

Local package installation and discovery were checked with skills CLI 1.7.0 and OpenCode 1.18.31. This verifies package discovery and file delivery; model behavior, other clients, and automatic routing need their own checks. The workflows remain drafts under evaluation.

Without an installer, point a filesystem-capable agent at a skill in this checkout. To copy one manually, preserve the entire leaf folder containing `SKILL.md` and its resources in your client's skills location, then verify discovery. Domain folders organize this repository; they are not individual skills.

## Find the right skill

| I want to… | Start with |
| --- | --- |
| Find the next skill from my current task | [choose-skill](skills/productivity/choose-skill/SKILL.md) |
| Explore a project or feature idea | [brainstorm-ideas](skills/productivity/brainstorm-ideas/SKILL.md) |
| Challenge a proposed direction | [challenge-proposal](skills/productivity/challenge-proposal/SKILL.md) |
| Get productive in an inherited codebase | [onboard-codebase](skills/development/onboard-codebase/SKILL.md) |
| Reconstruct project knowledge, decisions, and indexed memory | [document-project](skills/development/document-project/SKILL.md) |
| Understand current code or a PR | [explain-codebase](skills/development/explain-codebase/SKILL.md) or [explain-pr](skills/development/explain-pr/SKILL.md) |
| Define behavior, phases, then tasks | [write-spec](skills/development/write-spec/SKILL.md) → [plan-phases](skills/development/plan-phases/SKILL.md) → [create-tasks](skills/development/create-tasks/SKILL.md) |
| Choose the stack and technical structure | [design-architecture](skills/development/design-architecture/SKILL.md) |
| Establish conventions or agent context | [define-project-conventions](skills/development/define-project-conventions/SKILL.md) or [prepare-repo-for-agents](skills/development/prepare-repo-for-agents/SKILL.md) |
| Build an agreed change or fix a failure | [implement-change](skills/development/implement-change/SKILL.md) or [diagnose-issue](skills/development/diagnose-issue/SKILL.md) |
| Demonstrate the result and prepare review evidence | [verify-change](skills/development/verify-change/SKILL.md) |
| Find improvements or review code | [find-improvements](skills/development/find-improvements/SKILL.md) or [review-code](skills/development/review-code/SKILL.md) |
| Prevent a recurring coding mistake | [automate-code-checks](skills/development/automate-code-checks/SKILL.md) |
| Improve performance, upgrade dependencies, or plan a migration | [Development maintenance skills](docs/domains/development.md) |
| Design or evaluate an interface | [UI/UX catalog](docs/domains/ui-ux.md) |
| Deliver a change | [ship-change](skills/development/ship-change/SKILL.md) |
| Reduce overlapping documentation | [consolidate-docs](skills/development/consolidate-docs/SKILL.md) |

Start at the action the request needs. A ready task can go directly to implementation; a small change may need no new planning document. New projects establish foundations. Existing projects preserve users, data, contracts, and useful conventions while improving the selected behavior.

## Full catalogs

- [Development](docs/domains/development.md): 25 skills covering understanding, project knowledge, planning, architecture, implementation, verification, delivery, and maintenance.
- [Productivity](docs/domains/productivity.md): 7 skills for routing work, exploring ideas, challenging proposals, researching topics, tracking decisions, improving prompts, and transferring work.
- [UI/UX](docs/domains/ui-ux.md): 4 skills for flows, interface design, rendered review, and shared design systems.

The catalogs describe categories, outputs, boundaries, and conditional resources. The [workflow map](docs/workflows.md) shows lifecycle phases, entry points, dependencies, parallel work, and next steps.

## Use a workflow

From this checkout, point a filesystem-capable agent to the selected skill and give it the actual task. For example:

```text
Use skills/development/write-spec/SKILL.md to define the requested feature.
Use skills/development/review-code/SKILL.md to review this branch against main.
```

The skill supplies its procedure and links conditional resources. Reuse its result for the next needed action; check discovery and invocation in the client you use.

Two optional Bun helpers support the work itself:

- [Task-graph checks](skills/development/create-tasks/SKILL.md): validate dependencies and inspect ready work, declared write conflicts, and unknown isolation before selecting a batch.
- [Command evidence](skills/development/verify-change/SKILL.md): run an explicit check and retain its actual result and observed source state for review. A successful command does not establish that every acceptance criterion passed.

## Working on the collection

Each package lives at `skills/<domain>/<skill>/SKILL.md` and carries its required resources. Read [authoring and maintenance](docs/authoring.md) for conventions, validation, and deprecation. A skill should not need the whole collection installed or the entire repository loaded.

Use Bun 1.3.9 or newer. Run `bun run check` for the collection audit and `bun test` for the audit and helper tests. There are no package dependencies to install. Behavioral trials and client installation checks are separate from this audit.
