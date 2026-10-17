# Behavioral coverage

This is an index of recorded behavioral evidence. It is not code coverage, a current pass count, or a reliability score for the collection. A fixture is a test recipe; a result requires an executed trial and an actual assessment tied to its source and environment.

## Recorded results

| Record | Scope and limits |
| --- | --- |
| [Development readiness, 17 October 2026](results/development-readiness-2026-10-17.md) | Two focused `verify-change` and two Corco synthetic candidate-only trials; source-loaded execution and independent assessment, without automatic-activation, client or compliance claims |
| [Social content, 17 October 2026](results/social-content-2026-10-17.md) | Six synthetic candidate-only draft/plan trials; 23 original criteria pass and one non-material partial remains; corrected timing count and failed CLI startup are retained |
| [Runner smoke, 13 October 2026](results/runner-smoke-2026-10-13.md) | Two selected read-only Codex cases; six criteria independently assessed, with exact runner identity and retained trace limits |
| [Engineering, 10–11 October 2026](results/engineering-2026-10-10-11.md) | Selected routing, evaluation and engineering trials; retains failures, corrections, source identities and untested scope |
| [Media, 11 October 2026](results/media-2026-10-11.md) | Video development, scripts and production handoffs; draft/model results remain distinct from real playback, listening and publication |
| [Shared rules, 11 October 2026](results/shared-rules-2026-10-11.md) | Clarification and finding-priority trials; local scale, human decisions, review evidence and incomplete acceptance remain visible |

Each record describes its tested source and environment, not a pass for every current package. The 10–11 October observations were reorganized with their failures and limits intact; they were not rerun by this cleanup. The 13 October smoke is a separate, newly executed two-case check. Private evidence paths are local records rather than public attachments.

## Current recipes and gaps

The [case inventory](cases/README.md) describes runnable read-only recipes. Writable and multi-turn scenarios live under [workflows](README.md#writable-and-multi-turn-scenarios). Recipe counts must not be used as passed-case counts.

The new brand packages have a returned local draft review and manual text trials recorded in [PR #55](https://github.com/bobalazek/skills/pull/55). The additional CLI run on 13 October was interrupted before its criteria were assessed; it is not a completed six-case pass and is not added to the historical results above.

Add or update a result record only from an actual returned assessment. Record source identity, host/model or unknown, case IDs, attempt/failure state, criterion outcomes and limits. Preserve unsuccessful attempts. Link public evidence where available; local raw traces are private artifacts, not downloadable attachments.

See [the eval front door](README.md) for the file roles and [the procedure](../docs/evaluation.md) for execution and assessment.
