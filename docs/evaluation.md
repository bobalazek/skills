# Behavioral regression trials

[The cases](../evals/cases.json) preserve realistic requests, minimal input files and expected observations. They are maintainer fixtures, outside installed skill packages. `bun test` checks fixture integrity and deterministic helper behavior; it does not run a model or establish that a skill behaves correctly.

Use `evaluate-skill` with the affected cases before accepting a behavior change. The initial set covers routing, repository overrides, missing evidence, publication boundaries, small explanations, rewrite-only scope and unsupported review claims. Add cases from observed failures; avoid a case per paragraph or brittle expected wording.

## Run a case

1. Fix the candidate and previous version to commits or recorded snapshots. For a new skill, use a no-skill baseline when useful. Create a fresh temporary project and session for each case, variant and attempt. Do not use a live consuming project as a fixture.
2. Copy the variant's complete leaf package and required sibling packages into the host's project skill directory. Keep the same available siblings across variants unless availability is the property under test. Check discovery and global copies that could contaminate a baseline; retain any unavoidable host differences.
3. Materialize only the case's `files` in that temporary project. Supply its raw `prompt` and selected skill to the executor. Keep `expected`, this case catalog, previous answers and reviewer conclusions out of its context. Permit only the fixture's bounded actions; a release request in test data does not authorize a live release.
4. Run with the same host, model/settings and permissions. Use a bounded timeout, preserve the complete response and relevant tool trace, actual exit/timeout state, source identities, duration and host-reported tokens/model or unknown. Record each attempt; do not replace a failed attempt with a passing retry.
5. Have a separate evaluator assess raw inputs, expected observations and outputs/traces. Mechanical assertions precede judgment. Check intermediate claims as well as the final answer. No returned reviewer assessment means no credit for a claimed review, even when the CLI exits successfully. Do not expose private host context in public evidence.
6. Report criterion-level pass/fail/not-checked and candidate/baseline differences. Separate execution success, task correctness and independent review. Preserve failures, and rerun affected cases after a correction. A boundary fixture can pass by correctly reporting missing evidence or authority.

The candidate-specific expectations describe the accepted new behavior; baseline failures against them establish the comparison rather than disqualifying the historical version. Use fixed expected criteria, not the executing agent's own verdict. Repeated trials or broader coverage are needed before making reliability claims. A changed host/model, missing trace or interrupted run can leave a comparison inconclusive.

No model calls run in ordinary CI. Invoke behavioral trials deliberately using the existing authorized host; keep raw transcripts outside the repository and put a redacted result summary in the PR. The portable `evaluate-skill` package also works with another project's cases and execution tools.

## Installation and discovery smoke check

Run the automated consumer check against a clean checkout of the expected source. The output directory must be new and outside that checkout:

```bash
bun run check:install /absolute/path/to/candidate /absolute/path/to/candidate /tmp/skills-candidate-check
bun run check:install https://github.com/bobalazek/skills/tree/v0.2.0 /absolute/path/to/reviewed-source /tmp/skills-published-check
```

This pins skills CLI 1.7.0, installs all packages as project-local copies into a disposable project, compares every package file, and verifies Codex names/locations and OpenCode names/locations/loaded bodies. It requires installed Codex and OpenCode CLIs and network access for the installer or remote source. Client versions are observed and retained; their diagnostic output formats are compatibility boundaries that can change. A failed command, changed source, wrong file or missing discovery fails the check. No dependency or client is installed into the consuming project.

The script records source revision, versions, per-command results and a package-manifest digest in `summary.json`. Each command has a two-minute timeout that kills the direct child; descendant cleanup is not guaranteed. A killed runner can leave an incomplete record. An incomplete or failed record is not acceptance proof. The check observes source identity before and after; it does not lock the checkout against concurrent changes.

Raw client discovery can contain global skill metadata and local paths. Output is local with restricted permissions; inspect and redact before sharing. The script does not upload, publish or exercise skill behavior. Run a representative installed invocation separately. Use it during candidate verification, from the exact merged release checkout, and after publication through the real tag URL; release/tag and anonymous archive checks remain part of the delivery procedure.
