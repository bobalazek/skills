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

## Verify adoption

Record applicable outcomes in the existing task or PR; check a box only with observed evidence. Keep failed or unperformed checks unchecked with the reason and next action; mark inapplicable items explicitly. A changed title, candidate or merge strategy invalidates the affected proof.

- [ ] The contributor can identify the actual base, branch naming rule and merge strategy from the owning guidance.
- [ ] A representative change receives a truthful type/description under the repository's format, including any breaking-change explanation.
- [ ] The messages retained by the selected merge strategy satisfy the rule, including the final squash message where applicable.
- [ ] Configured guards reject a malformed message and accept legitimate variants; local and remote execution are reported separately.
- [ ] Adoption scope and unresolved choices are explicit; history rewrites and remote-setting changes have their own authority.
