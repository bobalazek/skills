---
name: explain-codebase
description: "Explain how a repository, module, or code path works using current source, data flow, and concrete entry points. Tailor depth to the reader; use onboarding only when requested."
---

# Explain codebase

## Use this skill

Explain a named code path or orient a reader to the system using current source. Reuse supplied questions, entry points and accepted context, checking them against the current revision. Use `onboard-codebase` for contributor setup and `document-project` when durable project documentation is the requested result.

## Trace the behavior

Read repository entry instructions and relevant docs, then verify them against the code. Use an existing project index where required. For a focused request, start from the named route, symbol, or feature and trace meaningful callers, data/state changes, side effects, failure behavior, and external boundaries.

For orientation, identify purpose, runnable entry points, modules, domain vocabulary, data ownership, integrations, delivery path, and the conventions the next contributor actually needs. Avoid dumping a file tree or describing every dependency. A useful map connects responsibilities to locations and one representative execution path.

When structure or conventions are part of the question, show how a representative feature, class or function maps to its folder, filename, imports and tests. Identify accepted rules and deliberate exceptions before describing where an addition would belong; missing rules remain questions, not permission to redesign the repository.

Inspect history or decisions when the user asks why a design exists. Distinguish recorded rationale, observed implementation, and inference. Current code determines current behavior; repeated patterns do not automatically establish contributor rules.

## Explain at the right level

Lead with what the system or flow does. Walk a concrete input through the important boundaries and show where state changes. Link specific files/symbols. Use a small Mermaid sequence or flow diagram when it clarifies the path, with names that match the code.

Describe relevant conventions and limits without turning the explanation into an unsolicited audit. For missing behavior or contradictory docs, name the evidence and unknown rather than inventing the intended design. Known bugs can be noted, but diagnosing or repairing them is a separate requested result.

## Verify and report

Check that the explanation matches inspected source and the reader can locate the entry point, owning boundary, and appropriate feedback command. State unverified runtime claims and the inspected revision where it matters. Match the requested audience/depth and project format; link canonical material rather than creating another summary. Do not mutate code or create onboarding documents unless requested.

For a low-impact advisory answer or wording-only draft, verify the relevant sources and constraints directly; no delegation or separate review record is needed. Use the independent assessment below when the user or project requires it, when accepting a consequential decision, or when publishing or updating a durable shared artifact. This exception does not waive code, security, release or deployment gates. A larger word count alone does not require a deeper workflow. Never claim independent review without an actual returned assessment.

When required, a separate agent in fresh context must challenge the explanation using the reader's request, candidate explanation, raw source and check access. Omit the author's conversation and preferred conclusions. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance.

For authorized PRs, include relevant source/behavior evidence, independent findings and gaps at creation; refresh proof affected by changes.

## Next steps

Carry the inspected entry points and unresolved question to `onboard-codebase` for setup, `diagnose-issue` for a failure, `find-improvements` for requested improvement discovery, or `write-spec` for desired behavior differing from the baseline. Use the plain action if its skill is unavailable. An explanation can finish the request without starting those workflows.
