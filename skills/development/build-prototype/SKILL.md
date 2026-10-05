---
name: build-prototype
description: "Build a bounded technical or interaction experiment that answers a named uncertainty, with an acceptance signal, observed results, limitations, and a recommendation."
---

# Build prototype

Answer one consequential uncertainty with the smallest useful experiment. A prototype is successful when it supplies decision evidence, including evidence that an approach fails.

Define the question, hypothesis, inputs, acceptance signal, time/resource bounds, and what the experiment will not prove. Reuse accepted requirements and available code or starter capabilities. If a fact can be established by inspecting documentation or existing behavior, use that cheaper check first.

Choose an isolated scratch area or agreed project surface. Preserve unrelated work, use safe representative data, and avoid live credentials or production side effects. Add only the setup necessary to exercise the uncertain boundary; label shortcuts that would matter to production use.

Run the experiment and inspect actual output. For performance or cost questions, record workload, environment, units, repetitions where needed, and sources/assumptions. For UI questions, exercise the interaction and relevant states rather than treating a static image as behavior proof.

Report the experiment, observations, acceptance result, limitations, and the decision it supports. Distinguish a measured result from a hypothesis and a prototype from production readiness. Keep or remove experimental artifacts according to the agreed scope; do not silently promote them into the product.

Next: update the existing specification or technical decision, run a specifically justified follow-up experiment, or create implementation work for the accepted approach. Passing a prototype does not authorize integration or deployment.
