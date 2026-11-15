# Grading and calibration

Use when a trial mixes artifact validity with task correctness, has subjective criteria or relies on a model judge. Choose the grader per criterion; a whole response need not have one aggregate score.

| Criterion | Useful check | Limit to retain |
| --- | --- | --- |
| Exact contractual value or classification | Deterministic comparison with the actual accepted expectation | Harmless variation is a failure only when the contract forbids it |
| Structured output | Schema, required fields and invariants | A valid shape can contain a wrong answer, invented fact or unauthorized action |
| Factual or procedural correctness | Compare with authoritative source, observed behavior and required outcome | Successful execution or a plausible explanation does not establish correctness |
| Qualitative decision or writing | Specific rubric items grounded in the request and raw evidence | Style preference, verbosity or wording similarity is not a substitute for the requested result |
| Tool use and authority | Inspect actual calls, arguments, results and side effects | A correct final answer can coexist with an unsafe action or fabricated intermediate claim |

## Define the rubric before evaluating

Give each criterion an observable pass condition, meaningful failure and any not-checked boundary. Keep expected observations outside the executor's supplied project. Use cases that discriminate the behavior at issue; a small curated set has coverage limits, and no universal case count establishes reliability.

Retain criterion-level outcomes rather than allowing an average to hide an authorization failure or missing required evidence. Schema success and semantic failure can both be true. Where reference answers permit several valid forms, compare the underlying contract instead of forcing exact wording.

## If a model judge is used

Use a stated rubric and traceable reference evidence. Before relying on its grades, compare representative correct, incorrect and ambiguous cases with trusted independent labels or review. Record the calibration set, observed disagreements and limits; self-reported confidence or agreement between judges does not establish calibration.

Check plausible length, ordering and style effects when they could alter the grade. Blind candidate/baseline labels and vary order where useful. A different model or model family can add a distinct perspective but is not proof of independence or accuracy; do not require an unavailable model merely for its name.

Keep unresolved rubric ambiguity, missing trusted labels or an uncalibrated judge explicit. A bounded manual assessment can still report what the supplied evidence establishes; it does not need new paid judge calls. Repeat only to resolve a named uncertainty within the accepted evaluation bounds, retaining every unsuccessful attempt.
