# Evaluation record

Reuse the project's format. Keep expected behavior with the evaluator, outside the executing agent's workspace. Case inputs need only an identifier, raw prompt, input files, applicable skill and test authority. Record expected outcomes and assertions separately; distinguish required criteria from preferences.

## Comparison

- Accepted outcome, candidate and baseline source identities.
- Host/client, model/settings, available tools, instructions and permissions; unknowns and differences.
- Fixture identity, allowed effects and timeout/repeat bound.

## Per-case evidence

| Case / variant / attempt | Execution | Criterion | Observation and evidence | Outcome |
| --- | --- | --- | --- | --- |
| Existing identifier | Exit, timeout or unavailable | Requirement-derived expected behavior | Actual output/artifact or trace location | Pass / fail / not checked |

Record duration and host-reported tokens when available. Preserve failed attempts. A missing prerequisite can be the expected outcome; absence of evidence cannot become evidence of completion.

## Assessment and decision

- Per-case improvement, regression, unchanged behavior or non-comparability.
- Independent evaluator/session, model or unknown, exact artifacts assessed, findings and coverage; otherwise unreviewed.
- Remaining gaps, bounded conclusion, proposed correction and affected cases to rerun.

Small selected trials support only the observed scenarios. They do not establish production acceptance, automatic activation, every client/model, or a general reliability percentage.
