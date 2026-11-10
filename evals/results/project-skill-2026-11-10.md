# Project skill creation trial, 2026-11-10

This is a bounded synthetic trial of `create-project-skill`, not a comparison with a baseline or a scan of real user histories. The [scenario](../workflows/create-project-skill.json) retains raw inputs and separate evaluator expectations. The candidate package was supplied explicitly; automatic activation was not tested.

## Candidate and independent assessment

Candidate SHA-256 identities:

- SKILL.md: `aca41a057972d714b17e623a0b33e5f717a5a9ee005876ff33e868eba8a5f79b`
- Evidence playbook after correction: `692e6e6bed8b49b5a06082be939fcf9815ef4e388300655d382dec3c7932565a`

The host supplied fresh delegated sessions with no author conversation: `/root/trial_project_skill`, `/root/retrial_project_skill`, `/root/use_generated_skill` and independent reviewer `/root/review_project_learning`. These are reviewer/task identities, not claims about a particular CLI or model version. Trial artifacts and raw command outputs remained in private temporary directories; they are not release attachments or a retained native agent trace.

| Criterion | Observed result |
| --- | --- |
| Evidence and recurrence | Both creator trials identified two independent fixture-maintenance episodes A/B; Claude's A summary added no occurrence. Whitespace-only C did not justify another skill |
| Guard versus skill | Existing `make check` was retained for drift/formatting; one local fixture-maintenance skill captured the procedural task, without a new linter or check configuration |
| Source coverage | The reported scope distinguished supplied Codex, Claude and Pi exports, unavailable Gemini data and no project-linked OpenCode record |
| Project filtering | First trial read a complete unrelated synthetic export before excluding it, violating the intended collection boundary. The playbook was strengthened; fresh retrial outputs first exposed only association metadata and then events for the selected repository, excluding unrelated/private fields |
| Generated package | Reviewer verified local documentation links, source/check preservation and absence of both synthetic private/instruction canaries |
| Actual procedure | Refresh and check succeeded with the added example; independent use preserved the existing example and changed only the intended source and derived fixture |
| Failure and scope | Missing/invalid source probes failed without changing derived fixtures. Independent use stopped on absent source and treated a README-only request as outside the skill |
| Honest evidence limits | Commit evidence was subjects only because the fixture had no Git history; creator output retained that gap and did not claim independent acceptance before review |

The fresh retrial retained a failed harness assertion: `python3 -m json.tool` returned 1 for a missing file while the harness expected 2. The expectation was corrected in a separate harness revision and its five cases passed. This was a trial-harness defect; the failed attempt was preserved rather than counted as a successful first attempt.

The reviewer independently compared saved/current file hashes and reran safe checks. Returned assessments found no remaining demonstrated instruction or generated-artifact defect after the metadata-first correction. Historical no-refresh and complete access-scope claims from the first trial cannot be established by its final directories alone. The retrial retained read/command outputs, but no native host transcript was captured.

## Verification and limits

`bun run check` passed package validation (71 packages, 115 reachable resources), TypeScript and Biome. `bun test` passed 100 tests with no failures, including scenario integrity; those deterministic tests do not execute model behavior. The skill-creator quick validator passed through an isolated `uv run --with pyyaml` invocation.

The Corco copy uses `corco-agents` and `corco-dev` ownership while sharing the corrected evidence playbook. Its skill audit and Markdown link check passed; its push hook's lint passed. PR CI, installation/discovery and release identity evidence belong in the delivery PR/release and are not implied by these local outcomes.

Native history layouts, arbitrary export schemas, unsupported clients, automatic routing, live operational procedures and a full repository/all-agent historical audit remain untested. No measured reduction in recurring errors or maintenance cost is claimed. The package is a draft supported by these bounded behavior trials, not a universal privacy or reliability guarantee.
