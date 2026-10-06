---
name: build-prototype
description: "Build a bounded technical or interaction experiment that answers a named uncertainty, with an acceptance signal, observed results, limitations, and a recommendation."
---

# Build prototype

Answer one consequential uncertainty with the smallest useful experiment. A prototype is successful when it supplies decision evidence, including evidence that an approach fails.

Define the question, hypothesis, inputs, acceptance signal, time/resource bounds, and what the experiment will not prove. Reuse accepted requirements and available code or starter capabilities. If a fact can be established by inspecting documentation or existing behavior, use that cheaper check first.

Choose an isolated scratch area or agreed project surface. Preserve unrelated work, use safe representative data, and avoid live credentials or production side effects. Add only the setup necessary to exercise the uncertain boundary; label shortcuts that would matter to production use.

For an interaction question, inspect available tools, the requested editable artifact, and existing component constraints. When it can answer the question, use a small local HTML/CSS prototype with SVG and minimal interaction code rather than adding a framework. An available design tool may provide the agreed prototype; if a required format is unavailable, report that gap. Keep graphs editable and connect their states to the screens, but do not count drawn transitions as working interactions.

Run the experiment and inspect actual output. For performance or cost questions, record workload, environment, units, repetitions where needed, and sources/assumptions. For UI questions, exercise the interaction and relevant states rather than treating a static image as behavior proof.

Exercise the paths needed by the hypothesis, including relevant validation, cancellation, repeated actions, and recovery from a dead end. Use synthetic data and identify simulated services or static controls. A local fallback cannot establish real authentication, payments, persistence, or native behavior unless those boundaries are actually exercised within scope.

Report the experiment, observations, acceptance result, limitations, and the decision it supports. Distinguish a measured result from a hypothesis and a prototype from production readiness. Keep or remove experimental artifacts according to the agreed scope; do not silently promote them into the product.

When retaining the experiment, include its editable source or document revision, runnable entry point, minimal prerequisites, and reproduction steps so the next person can repeat the observation. Keep its decision evidence separate from untested implementation assumptions.

Before declaring the result ready for a decision, require a separate agent in fresh context to try to refute the acceptance result using the raw question/accepted requirements, candidate experiment, and actual evidence, without the author's planning conversation. For an interaction prototype, the reviewer exercises relevant paths and checks which boundaries are simulated. Resolve demonstrated gaps; if independent review is unavailable, report unreviewed and not ready. Add useful screenshots/video, observed results, and relevant regression-test proof to authorized PR work as available, with missing evidence explicit. Independent review does not replace required human approval.

Next: update the existing specification or technical decision, run a specifically justified follow-up experiment, or create implementation work for the accepted approach. Passing a prototype does not authorize integration or deployment.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.
