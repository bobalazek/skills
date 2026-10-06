---
name: build-prototype
description: "Build a bounded technical or interaction experiment that answers a named uncertainty, with an acceptance signal, observed results, limitations, and a recommendation."
---

# Build prototype

## Use this skill

Answer one consequential technical or interaction uncertainty through a bounded experiment. Reuse accepted requirements and existing code or starter capabilities. Inspect documentation or current behavior first when that can answer the question; use `implement-change` for a settled production change. Failure can be a useful experimental result.

## Define the experiment

State the question, hypothesis, inputs, acceptance signal, time/resource bounds, and what the experiment will not prove.

## Build within the bounds

Choose an isolated scratch area or agreed project surface. Preserve unrelated work, use safe representative data, and avoid live credentials or production side effects. Add only the setup necessary to exercise the uncertain boundary; label shortcuts that would matter to production use.

For an interaction question, inspect available tools, the requested editable artifact, and existing component constraints. When it can answer the question, use a small local HTML/CSS prototype with SVG and minimal interaction code rather than adding a framework. An available design tool may provide the agreed prototype; if a required format is unavailable, report that gap. Keep graphs editable and connect their states to the screens, but do not count drawn transitions as working interactions.

## Run and inspect

Run the experiment and inspect actual output. For performance or cost questions, record workload, environment, units, repetitions where needed, and sources/assumptions. For UI questions, exercise the interaction and relevant states rather than treating a static image as behavior proof.

Exercise the paths needed by the hypothesis, including relevant validation, cancellation, repeated actions, and recovery from a dead end. Use synthetic data and identify simulated services or static controls. A local fallback cannot establish real authentication, payments, persistence, or native behavior unless those boundaries are actually exercised within scope.

## Verify and report

Report the experiment, observations, acceptance result, limitations, and supported decision in the project's format and requested depth. Distinguish measured results from hypotheses and prototypes from production readiness. Keep or remove artifacts according to the agreed scope; do not silently promote them into the product.

When retaining the experiment, include its editable source or document revision, runnable entry point, minimal prerequisites, and reproduction steps so the next person can repeat the observation. Keep its decision evidence separate from untested implementation assumptions.

Before acceptance, a separate agent in fresh context must try to refute the result using the raw question/accepted requirements, candidate experiment, actual evidence and check access, without the author's conversation or preferred conclusions. For an interaction prototype, the reviewer exercises relevant paths and checks simulated boundaries. Retain the returned assessment with reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and not ready. Independent review does not replace required human approval.

Put useful screenshots/video, observed results, relevant test proof, independent findings and gaps in authorized PRs at creation; refresh affected evidence after edits. Update the existing specification or decision record with accepted findings instead of a competing summary.

## Next steps

Carry the experiment and its limits to `write-spec` for changed required behavior, `design-architecture` for a technical choice, `create-tasks` for an accepted approach needing decomposition, or `implement-change` for ready production work already authorized. Another experiment needs a remaining consequential question. Use the plain action if its skill is unavailable; a passing prototype does not authorize integration or deployment.
