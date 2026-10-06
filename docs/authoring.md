# Maintaining the collection

This guide covers creating, changing, checking, and releasing skills. To install and use them, start with the [README](../README.md).

A skill earns its place through a distinct useful output, a decision process that improves it, and an observable completion check. Domains and categories help discovery; different nouns or phases alone do not justify duplicate procedures.

## Package conventions

```text
skills/<domain>/<skill>/
  SKILL.md
  agents/openai.yaml Codex display name, short description, and example prompt
  references/       Only conditional instructions, checklists, or artifact shapes
  assets/           Only files actually used in generated output
  scripts/          Only useful deterministic operations
```

Use an action-oriented lowercase name that tells the user what happens, preferably two or three words and no more than four. The folder and frontmatter name must match. The description says when the skill applies, what it produces, and distinguishes a likely neighboring request. Every package must work without reading repository-maintainer docs or requiring all sibling skills to be installed.

Keep the outcome, essential inputs, workflow decisions, scope, completion evidence, and next-action behavior in `SKILL.md`. Use references for substantial conditional guidance. Link each resource with a reason to load it; avoid duplicated instructions, copied manuals, and resources added only for symmetry.

Use role suffixes for reusable resources where their role matters: `.template.md`, `.checklist.md`, `.playbook.md`, or `.matrix.md`. Add executable helpers only when deterministic work justifies them and existing tools do not already cover it.

Every package in this collection includes `agents/openai.yaml` for Codex discovery UI. Keep `interface.display_name`, `short_description` (25–64 characters), and a concrete `default_prompt` mentioning `$skill-name` consistent with the workflow. Quote string values. This is host metadata, not a reference the agent must load; do not add a `SKILL.md` link just to satisfy resource reachability. Keep automatic invocation at its default unless an explicit requirement changes it. Icons, tool dependencies and other optional fields need a real use. See the [OpenAI skill metadata fields](https://developers.openai.com/plugins/deploy/submission-errors#skill-agent-metadata-errors).

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
| Independent evaluation | Before acceptance, a separate agent with fresh context tries to refute the result using raw requirements, source artifacts, and observed proof; unavailable review leaves the result unreviewed |
| Evidence | Preserve useful baseline/result artifacts, compare consistent conditions, redact shared content, and include relevant accessible evidence in authorized PRs; local paths are not attachments |
| Authority | Honor granted authority and pause only at the actual missing input, choice, permission, or failed required check |
| Knowledge | Reconcile useful facts, decisions, and learnings in existing authoritative locations |
| Handoff | Name the next useful action and owning skill, why it fits, required input and unmet prerequisite; pass accepted context and revision/evidence, or state that no follow-up is needed |
| Communication | Follow the requested audience, tone and depth, then project conventions; report outcome, purpose, relevant method, proof and gaps without a chronological transcript or another summary document |

## Choosing the right granularity

Keep essential decisions in the entrypoint and substantive conditional procedures in its references. A short package is not sufficient if it omits failure paths, evidence, examples or constraints needed to do the work. Conversely, a long reference should earn its space by guiding a decision or check; do not copy entire private manuals or repeat another skill's procedure.

A skill owns a distinct deliverable, such as a spec, phase plan, task graph, diagnosis, review, or delivered target. A mode changes depth or starting state while preserving that deliverable, such as a focused/full explanation, a PR/codebase review, or blank/template setup.

A reference supplies specialist guidance or an artifact shape. Project context supplies the consuming repository's facts and rules. Keep stack-specific detail conditional and version-aware; do not turn a private convention into a universal requirement.

Before authoring, state: “Given this input, produce this result; stop before this neighboring work; finish when this evidence exists.” Then check that the skill is useful when requested alone.

Next-step guidance belongs in the portable skill itself. Recommend from the actual result, check sibling availability, and describe the plain action if it is unavailable. A recommendation can end a bounded request; continue already-authorized work without adding a confirmation step. For phased work, preserve accepted outputs, show ready work separately from future parallel candidates, and require integration and affected independent rechecks before advancing.

In workflow diagrams, use one exact skill name per double-bordered box, rounded boxes for scenario work or inputs/results, diamonds for decisions, and labeled outer frames for stages/phases. Include a key and state whether arrows are possible handoffs or required dependencies. Never combine several skill names in one invocation node. Keep request examples consistent with the router's output boundaries, and link detailed scenarios from the README instead of turning it into the full catalog.

## Validation

Maintain executable tooling in TypeScript and run it with Bun. Run `bun run check` for frontmatter, package names, Codex interface metadata, links, resource reachability, standalone-resource boundaries, and catalog coverage. Run `bun test` when changing the checker or executable helpers. Mermaid diagrams should also parse/render in a real supported renderer when changed.

Structural checks do not establish behavior. Trial representative direct requests, neighboring requests that should route elsewhere, small tasks, missing prerequisites, and consequential actions outside authorization. Inspect actual results, loaded context, questions, side effects, and completion claims. Use a separate agent in fresh context for final evaluation, with raw artifacts and no supplied intended answer or author conversation. Authors may run checks and capture evidence; they cannot supply their own independent verdict.

Keep that requirement inside every portable skill package. Choose additional reviewers by distinct failure risks, not a fixed panel size. Give each a bounded question, accepted criteria, the candidate revision, relevant sources, and check access. Ask for concrete counterexamples and proof. Reconcile conflicting claims against evidence; votes cannot dismiss a demonstrated defect. After a fix, the affected result needs an independent recheck. A review must itself be performed independently of the work's author; this does not require an endless chain of reviewers reviewing reviewers.

Retain the returned assessment with its independent reviewer or session identity, evaluated artifact/revision, findings and coverage before claiming review. An attempted delegation, an empty wait or the author's own check is not an independent assessment. During behavioral trials, compare review claims with the actual returned result; a successful host command does not establish that review happened.

For PR work, include the independent review and criterion-linked proof when opening the PR: meaningful before/after images or video, observed behavior, test results, and remaining gaps as appropriate. Update affected evidence after changes. Agent evaluation and required human approval are distinct gates; neither grants new authority or substitutes for missing proof.

Every workflow needs a way to evaluate its own result. A planning workflow can walk scenarios and check decision readiness; a code fix needs observed behavior; a visible change needs rendered inspection; a measured improvement needs a comparable baseline. Declare the useful signal and report its actual outcome. Do not require screenshots, benchmarks, or a separate report where they cannot establish the claim. For changed behavior, preserve useful evidence during the work and carry it into review or delivery. Reassess evidence after edits instead of publishing stale results.

Compare against the agent without the skill when claiming an improvement. Validate scripts with meaningful failure cases. Verify client discovery/installation independently; do not infer compatibility from a valid Markdown file or advertise untested client support.

## Status and deprecation

Written packages begin as drafts. Experimental status requires meaningful behavior trials; stable status needs representative evidence in stated environments. A versioned 0.x release records a reviewed snapshot and its evaluation limits; it does not make every workflow stable or prove every client/model combination.

Keep names stable when categories move. A breaking change to inputs, outputs, side effects, or required authority needs a migration note. For a published rename or retirement, state the replacement or reason, affected users/contracts, migration steps, announcement date, and intended removal version/date. Preserve a working transition route for the stated window when practical; removal cannot revoke installed copies.

Unreleased drafts can be consolidated without pretending a public compatibility promise existed. Remove duplicate procedures rather than maintain two active owners indefinitely. Follow the release procedure below before distributing a version.

Renames before v0.0.1: `question-plan` → `challenge-proposal`, `research-question` → `research-topic`, `map-project-decisions` → `track-project-decisions`, `find-refactors` → `find-improvements`, and `triage-requests` → `assess-request`. Update saved invocations or local paths to the new names. After preserving local edits, remove a retired installed package when replacing it; installing the new name alone can leave both discoverable. Refactor discovery remains part of `find-improvements`; the broader scope also covers recurring defects, checks, documentation, dependencies, and performance leads.

The source domain moved from `skills/development/` to `skills/engineering/`, with its catalog at `docs/domains/engineering.md`. Update direct source paths and saved links. Domain folders organize the source; this move does not rename the other installed skills.

## Releasing the collection

Use one repository-wide version and GitHub Release for a reviewed snapshot of the collection. Keep `package.json` private: it runs maintainer checks, and this procedure distributes skill folders through Git. There is no npm publication step or per-skill version machinery.

The consumer contract includes skill names/install paths, required inputs and tools, output formats, authority and side effects, and bundled resources or helper interfaces. Version changes against those contracts. After `1.0.0`, use major versions for incompatible changes, minor versions for compatible additions or deprecations, and patches for compatible fixes. During `0.x`, this collection uses minor versions for additions or breaking changes and patches for compatible fixes; document every break. [SemVer](https://semver.org/spec/v2.0.0.html) treats `0.x` as initial development and prerelease suffixes as unstable.

Start at `v0.0.1` for the first reviewed release. Use a prerelease suffix such as `v0.2.0-alpha.1` when an upcoming version needs a separate evaluation channel. An ordinary 0.x release is still initial development; reserve stable `1.0.0` for evidence supporting the stated contracts and supported environments. A GitHub draft is unpublished metadata; publishing a release or prerelease makes it available to users with repository access. A draft does not hide an already-pushed tag in a public repository.

### Before public distribution

- Include the [license](../LICENSE) and any required third-party notices with distributed copies, including separately packaged skills. Verify rights to distribute included resources.
- Review the material that will become visible: tracked files and reachable Git history, commit metadata, issues/PRs and comments, plus Actions logs, artifacts and release assets. Resolve known secrets, private records, and material without distribution rights using the appropriate remediation. Record the scope checked and remaining gaps in the release PR; a scan is evidence only for what it inspected. GitHub documents the [effects of a visibility change](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility), including public Actions history and logs.
- Verify installation and discovery in each advertised client using the candidate's complete leaf packages. Run representative behavioral trials from Validation above, including resource loading, authority boundaries and failure cases. State tested client/model versions and limitations. Structural checks or a successful copy alone do not establish stable behavior.
- Confirm explicit authority for the chosen license, visibility change, tag push and release publication. A request to assess or prepare a release authorizes preparation; perform each consequential action only when covered by the user's instruction. Update README status and installation claims as those facts change.

### Prepare and publish a version

1. Prepare the intended changes through a PR against `main`. Use `ship-change` for release preparation or delivery. Identify the previous release for the intended channel and resolve its tag and the candidate to exact commits; for the first release, there is no previous-release range. Inspect commits, relevant merged PRs and the net diff, accounting for reverts and unreleased changes. Draft notes with the proposed version/channel, meaningful changes, affected skills, breaking changes and migration/deprecation steps, tested environments, known limitations, and install command. For a first release, describe what is actually supported. Verify generated notes against the selected changes and edit them for users. Keep proof and the independent review in the PR, and publish the notes with the release.
2. Run `bun run check`, `bun test`, and `git diff --check`; complete the relevant install and behavioral checks above. Obtain the required independent review, resolve findings, and wait for the entire required CI run. After the authorized merge, select the full commit SHA on `main`, confirm its CI result, and recheck affected evidence if integration changed the candidate. Use a clean checkout of that exact SHA for final installation checks. Record it in the notes; never let a moving branch select the release implicitly.
3. Once tag creation is authorized, confirm the version is unused locally and remotely, then create an annotated tag on that reviewed SHA and push only that tag. Use existing immutability and tag protections according to repository policy. Additional protection settings need their own authority; they are not a prerequisite for every release. Coordinate one publisher for the selected version. Replace the example values below before running them, and prepare the reviewed notes file outside the distributed skill folders:

   ```bash
   release_tag='v0.0.1'
   release_commit='REPLACE_WITH_REVIEWED_FULL_COMMIT_SHA'
   release_notes='/absolute/path/to/reviewed-release-notes.md'
   git tag -a "$release_tag" "$release_commit" -m "$release_tag"
   git push origin "refs/tags/$release_tag"
   gh release create "$release_tag" --repo bobalazek/skills --verify-tag --draft --prerelease=false --title "$release_tag" --notes-file "$release_notes"
   ```

4. Inspect the remote tag's peeled commit (`git ls-remote origin "refs/tags/$release_tag" "refs/tags/$release_tag^{}"`), draft notes, channel and contents against the reviewed candidate. `--verify-tag` checks existence, not commit identity. Stop on any mismatch. Complete intended assets while the release is a draft; the source tree is the distribution here, so custom archives need a demonstrated use. Publish the reviewed ordinary release with `gh release edit "$release_tag" --repo bobalazek/skills --tag "$release_tag" --verify-tag --draft=false --prerelease=false --latest`. For a prerelease channel, use `--prerelease --latest=false` instead. The [create](https://cli.github.com/manual/gh_release_create) and [edit](https://cli.github.com/manual/gh_release_edit) commands use explicit channel choices; the edit command pairs `--verify-tag` with `--tag`. A non-force tag push rejects an existing conflicting ref, but these checks do not lock a mutable tag against a concurrent privileged writer. Record that limitation when protections are absent and verify identity again after publication. [Release immutability](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases), when enabled, protects tags and assets after publication.
5. Verify the actual release URL, tag-to-commit identity, published status and assets. In a fresh temporary project, run the README installation command using the published tag, compare delivered package contents with the reviewed tree, check discovery, and exercise a representative invocation. For a public release, also verify access without repository credentials. Record the actual result and versions used in the release PR; a failed post-publication check means publication happened but release verification failed.
6. Leave published version tags and their contents unchanged. Correct a defective release with a new version and migration/recovery notes; while evaluating a candidate, use the next prerelease number. Where authorized, mark a bad release clearly and direct users to a known-good version or replacement. Reinstalling an older skill cannot reverse actions it already performed, and deleting a release cannot recall downloaded copies. Report those limits and verify the replacement through the same procedure.
