# Git workflow conventions

Use this when establishing contributor workflow or resolving branch, commit, PR or merge conventions. Repository rules and configured automation take precedence; then follow consistent maintained history. An isolated unprefixed commit does not revoke an accepted convention. Keep the rule in the existing contributor guide and link it from agent instructions.

## Select the workflow

Inspect the default and integration branches, recent commits and PRs, merge settings, required checks, release policy and existing commit/title tooling. Distinguish observed practice from an accepted rule and unavailable remote settings from confirmed defaults.

Commit-message format and branching strategy are separate decisions. [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) defines message meaning; it does not require Git Flow. Without local guidance, prefer short-lived topic branches into the default branch, reviewed PRs and checks before merge, following the lightweight [GitHub flow](https://docs.github.com/en/get-started/using-github/github-flow) pattern or the platform equivalent. Keep an existing Git Flow workflow; introduce integration/release branches only when the release or parallel-support model needs them.

For a new convention, choose concise branch names such as `type/short-description`, the actual base, and the merge strategy that fits the release tooling. Do not infer permission to create remotes, change protection settings or publish from a convention decision.

## Keep messages consistent through merge

Where no local message format exists, use `<type>(optional-scope)!: description`, with scope and `!` optional. Prefer a short action-oriented description and a scope only when it identifies a useful owner. Select the type from the actual change: `feat` for a capability, `fix` for a defect, and the project's maintenance types for documentation, tests, CI or refactoring. Not every improvement is a feature. Mark incompatible contract changes with `!` or a `BREAKING CHANGE:` footer and explain migration; apply the project's version policy separately.

Keep commits cohesive and independently understandable. A change and its necessary tests/docs belong together; the word “and” is not a reason to split a working change. Separate unrelated work without rewriting published history just to repair a title.

Determine which messages survive the merge. For squash, validate the PR title and the actual final squash message; provider defaults can select either the original commit or PR title. For rebase, validate every retained commit; for merge commits, follow the repository's policy for retained commits and the merge message. [GitHub's squash settings](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests) illustrate why checking branch commits alone is insufficient.

Use existing commit/title validation first. Where repeated drift warrants a guard, enforce the message that reaches permanent history in the appropriate CI or merge path. PR-title guards should run when a title is edited as well as when code changes. Treat titles as untrusted data, never interpolated shell code; local hooks alone do not cover the hosting platform's merge UI. Test invalid titles and valid scopes, breaking markers and permitted types. Syntax checks cannot determine whether `feat` or `fix` truthfully describes the diff.

## Size and sequence pull requests

Default to one self-contained, reviewable outcome with its tests and necessary documentation. Use review effort, risk and coupling rather than a hard line cap. Roughly 100 changed lines can be easy to inspect; a change approaching 1,000 hand-written lines or spanning unrelated responsibilities should prompt a split. Generated files, mechanical deletions and essential test fixtures have different review costs. These are planning signals, not CI limits. [Google’s small-change guidance](https://google.github.io/eng-practices/review/developer/small-cls.html) likewise prioritizes conceptual scope and keeping the system working.

For a substantial feature spanning persistence, shared contracts, backend and frontend, use this default sequence where the project has no accepted alternative. Omit absent stages; do not manufacture layers or abstractions just to fill the sequence.

| PR boundary | What lands here | Review focus before consumers advance |
| --- | --- | --- |
| Database/schema and domain structures | Compatible schema additions, constraints and the needed migration/backfill plan | Existing readers/writers still work; migration locks, defaults, data invariants and recovery limits are understood |
| Shared contracts and types | Actual request/response or event schemas, validation, shared DTOs/types and generated-client changes needed by the feature | Ownership and dependency direction, supported old/new payloads and consumers, serialization and contract checks; new types do not expose an unimplemented feature |
| Backend | API/domain behavior, queries, authorization, jobs or integrations using the accepted foundation | Real data/transaction boundaries, permissions, retries and failure paths, compatibility with existing clients, integration/contract checks |
| Frontend or other client | UI/client behavior consuming the available backend contract | Loading/error/empty/success and recovery states, accessible interaction, supported older clients and end-to-end integration |
| Later cleanup, when needed | Removal of obsolete fields, contracts or temporary compatibility paths | All required consumers have migrated and the data/recovery window permits removal |

Each PR names its purpose, prerequisites, supported intermediate state and useful checks. Link dependent PRs and state merge order separately from deployment order; a reviewed stack can be prepared in parallel, but dependent code cannot merge or deploy ahead of its prerequisites. Keep the default branch buildable and existing behavior usable after every merge. Separate review does not prove separate deployment is safe.

Prefer compatible expansion before consumer migration and destructive cleanup afterward. Do not publish an incomplete API as ready or leave a broken intermediate state merely to keep the PRs separate. Combine inseparable stages, or review a stack while keeping unsafe members unmerged, and explain the coupling. A small vertical fix can stay in one PR. Split unrelated cleanup or a large prerequisite refactor when it obscures the behavior change.

For an existing repository, inspect accepted rules, maintained PR history, deployment constraints and supported consumers first. Fill genuine gaps with these defaults when convention adoption is authorized; record their scope in the existing contributor guide. Preserve established alternatives unless changing them is in scope. Apply new rules to new or touched work incrementally, without rewriting history or reorganizing the whole codebase.

## Verify adoption

Record applicable outcomes in the existing task or PR; check a box only with observed evidence. Keep failed or unperformed checks unchecked with the reason and next action; mark inapplicable items explicitly. A changed title, candidate or merge strategy invalidates the affected proof.

- [ ] The contributor can identify the actual base, branch naming rule and merge strategy from the owning guidance.
- [ ] A representative change receives a truthful type/description under the repository's format, including any breaking-change explanation.
- [ ] The messages retained by the selected merge strategy satisfy the rule, including the final squash message where applicable.
- [ ] Configured guards reject a malformed message and accept legitimate variants; local and remote execution are reported separately.
- [ ] A representative cross-layer change has reviewable PR boundaries, dependency/merge/deploy order, intermediate compatibility and checks; justified combined stages or omitted layers remain explicit.
- [ ] Adoption scope and unresolved choices are explicit; history rewrites and remote-setting changes have their own authority.
