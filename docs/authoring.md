# Authoring and maintaining skills

A skill earns its place through a distinct useful output, a decision process that improves it, and an observable completion check. Domains and categories help discovery; different nouns or phases alone do not justify duplicate procedures.

## Package conventions

```text
skills/<domain>/<skill>/
  SKILL.md
  references/       Only conditional instructions, checklists, or artifact shapes
  assets/           Only files actually used in generated output
  scripts/          Only useful deterministic operations
```

Use an action-oriented lowercase name that tells the user what happens, preferably two or three words and no more than four. The folder and frontmatter name must match. The description says when the skill applies, what it produces, and distinguishes a likely neighboring request. Every package must work without reading repository-maintainer docs or requiring all sibling skills to be installed.

Keep the outcome, essential inputs, workflow decisions, scope, completion evidence, and next-action behavior in `SKILL.md`. Use references for substantial conditional guidance. Link each resource with a reason to load it; avoid duplicated instructions, copied manuals, and resources added only for symmetry.

Use role suffixes for reusable resources where their role matters: `.template.md`, `.checklist.md`, `.playbook.md`, or `.matrix.md`. Add executable helpers only when deterministic work justifies them and existing tools do not already cover it.

## Shared workflow contract

| Concern | Convention |
| --- | --- |
| Entry | Start from the actual request and accepted artifacts; skip completed or irrelevant stages |
| Context | Read applicable project instructions and relevant conventions; inspect actual code/behavior before trusting stale docs |
| Facts and decisions | Distinguish observed facts, documented intent, inference, assumptions, proposals, and accepted choices |
| New/existing work | Establish missing foundations for new projects; preserve behavior/data/contracts and useful conventions in existing systems |
| Scope | Finish the requested outcome; adjacent findings do not authorize unrelated cleanup |
| Questions | Inspect discoverable facts first; ask about consequential choices that cannot be inferred safely |
| Parallelism | Use ready dependencies, isolated ownership/state, and independently checkable results; reconcile shared decisions |
| Verification | Match material criteria to observed proof, identify the tested revision/environment, and distinguish demonstrated, failed, and unchecked results; use meaningful checks without mandatory test-first sequencing |
| Evidence | Preserve useful baseline/result artifacts, compare consistent conditions, redact shared content, and include relevant accessible evidence in authorized PRs; local paths are not attachments |
| Authority | Honor granted authority and pause only at the actual missing input, choice, permission, or failed required check |
| Knowledge | Reconcile useful facts, decisions, and learnings in existing authoritative locations |
| Handoff | Pass accepted context, revision/evidence, unresolved prerequisites, and the next useful action |

## Choosing the right granularity

A skill owns a distinct deliverable, such as a spec, phase plan, task graph, diagnosis, review, or delivered target. A mode changes depth or starting state while preserving that deliverable, such as a focused/full explanation, a PR/codebase review, or blank/template setup.

A reference supplies specialist guidance or an artifact shape. Project context supplies the consuming repository's facts and rules. Keep stack-specific detail conditional and version-aware; do not turn a private convention into a universal requirement.

Before authoring, state: “Given this input, produce this result; stop before this neighboring work; finish when this evidence exists.” Then check that the skill is useful when requested alone.

## Validation

Maintain executable tooling in TypeScript and run it with Bun. Run `bun run check` for frontmatter, package names, links, resource reachability, standalone-resource boundaries, and catalog coverage. Run `bun test` when changing the checker. Mermaid diagrams should also parse/render in a real supported renderer when changed.

Structural checks do not establish behavior. Trial representative direct requests, neighboring requests that should route elsewhere, small tasks, missing prerequisites, and consequential actions outside authorization. Inspect actual results, loaded context, questions, side effects, and completion claims. For risky or substantial workflows, use an independent evaluation with raw artifacts and no supplied intended answer.

Every workflow needs a way to evaluate its own result. A planning workflow can walk scenarios and check decision readiness; a code fix needs observed behavior; a visible change needs rendered inspection; a measured improvement needs a comparable baseline. Declare the useful signal and report its actual outcome. Do not require screenshots, benchmarks, or a separate report where they cannot establish the claim. For changed behavior, preserve useful evidence during the work and carry it into review or delivery. Reassess evidence after edits instead of publishing stale results.

Compare against the agent without the skill when claiming an improvement. Validate scripts with meaningful failure cases. Verify client discovery/installation independently; do not infer compatibility from a valid Markdown file or advertise untested client support.

## Status and deprecation

Written packages begin as drafts. Experimental status requires meaningful behavior trials; stable status needs representative evidence in stated environments. This collection remains draft while evaluation and installation work continue.

Keep names stable when categories move. A breaking change to inputs, outputs, side effects, or required authority needs a migration note. For a published rename or retirement, state the replacement or reason, affected users/contracts, migration steps, announcement date, and intended removal version/date. Preserve a working transition route for the stated window when practical; removal cannot revoke installed copies.

Unreleased drafts can be consolidated without pretending a public compatibility promise existed. Remove duplicate procedures rather than maintain two active owners indefinitely. Choose a repository license and verify/document installation before a distributable release; add release notes when there is a real release or migration to record.

Current draft renames: `question-plan` → `challenge-proposal`, `research-question` → `research-topic`, `map-project-decisions` → `track-project-decisions`, and `find-refactors` → `find-improvements`. Update saved invocations or local paths to the new names. Refactor discovery remains part of `find-improvements`; the broader scope also covers recurring defects, checks, documentation, dependencies, and performance leads.
