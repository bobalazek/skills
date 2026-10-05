---
name: explain-codebase
description: "Explain how a repository, module, or code path works using current source, data flow, and concrete entry points. Tailor depth to the reader; use onboarding only when requested."
---

# Explain codebase

Give the reader a usable mental model grounded in current code. Choose a focused explanation or a broader orientation according to the question and audience.

## Trace the behavior

Read repository entry instructions and relevant docs, then verify them against the code. Use an existing project index where required. For a focused request, start from the named route, symbol, or feature and trace meaningful callers, data/state changes, side effects, failure behavior, and external boundaries.

For orientation, identify purpose, runnable entry points, modules, domain vocabulary, data ownership, integrations, delivery path, and the conventions the next contributor actually needs. Avoid dumping a file tree or describing every dependency. A useful map connects responsibilities to locations and one representative execution path.

Inspect history or decisions when the user asks why a design exists. Distinguish recorded rationale, observed implementation, and inference. Current code determines current behavior; repeated patterns do not automatically establish contributor rules.

## Explain at the right level

Lead with what the system or flow does. Walk a concrete input through the important boundaries and show where state changes. Link specific files/symbols. Use a small Mermaid sequence or flow diagram when it clarifies the path, with names that match the code.

Describe relevant conventions and limits without turning the explanation into an unsolicited audit. For missing behavior or contradictory docs, name the evidence and unknown rather than inventing the intended design. Known bugs can be noted, but diagnosing or repairing them is a separate requested result.

## Completion

The explanation matches inspected source and the reader can locate the entry point, owning boundary, and appropriate feedback command. State unverified runtime claims and the inspected revision where it matters. Do not mutate code or create onboarding documents unless requested.

Next: `onboard-codebase` for a verified contributor setup; `diagnose-issue` for a failure; `find-refactors` for improvement candidates; `write-spec` for desired behavior that differs from the baseline.
