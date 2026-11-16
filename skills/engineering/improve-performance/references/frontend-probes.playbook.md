# Frontend loading and runtime probes

Use when the user's delay is in page loading, rendering or interaction. Start with the route/task, supported device/input conditions and accepted target; do not borrow another project's byte, resource-count or frame-rate budget.

## Locate the delayed stage

Capture a representative run with the project's available browser profiler or existing measurement tool. State browser/device, viewport, network/CPU settings, cache/warm-up and fixture state. Separate an actual device run from emulation and lab results from field data.

For slow loading, distinguish server response, resource discovery/transfer and render delay. Identify the actual important content and its dependency chain. For an interaction, follow input through event handling, work, layout/paint and the required visible result. A quick response or generic load event can precede completion.

## Select a probe from the observed trace

| Trace or observation | Bounded experiment | What must remain true |
| --- | --- | --- |
| Important image/content discovered late | Inspect the actual loading dependency, request priority and render prerequisites; compare a targeted discovery/priority change. | The same important content renders on supported layouts; removing needed content or preloading everything is not an equivalent improvement. |
| Heavy optional widget delays required work | Compare when its code/media downloads and executes against when the user needs it; try a documented demand-load/static-preview path. | Essential navigation/action/content remain available, required consent is honored, and later widget startup/errors work. |
| Long task or repeated render dominates interaction | Attribute its work using the profiler; vary the suspected computation/update while keeping inputs and visible output equal. | Event ordering, state freshness, keyboard/focus and error/recovery behavior remain correct. |
| Layout work repeats after DOM reads/writes | Inspect the relevant call sequence and rendering trace; compare a targeted batching/layout change. | Same geometry/content and supported transitions; source patterns alone do not prove forced layout. |
| Animation/canvas continues when unused | Observe off-screen, hidden-tab, reduced-motion and resume behavior when those states are relevant. | Required content remains usable, state catches up correctly and listeners/resources are cleaned up. |
| Third-party work dominates | Identify its actual business purpose, timing, bytes and main-thread/connection cost; compare an authorized delayed or removed variant. | Required functionality, privacy/consent and measurement contracts are preserved; script count alone is not a defect. |

For LCP-related work, use the actual element and delay breakdown described in [Optimize LCP](https://web.dev/articles/optimize-lcp); a faster resource transfer may leave render delay unchanged. Use the current metric definitions and project requirements when interpreting results.

## Compare the relevant states

Use the same route, device/input, content, cache policy and useful work before and after. Repeat enough to expose relevant variation; retain failures and slower samples. Include affected narrow layouts, reduced-motion/static fallbacks or older supported devices when the changed mechanism depends on them. Label unavailable conditions instead of treating a desktop score as their proof.

Record bytes, timings, long-task/frame evidence or another metric that answers the actual claim, alongside behavior checks and shifted costs. A smaller bundle can add startup latency; lazy work can delay the first use; a screenshot cannot establish interaction time. Report the measured result and trade-offs without extrapolating a local lab run to every visitor or production conversion.
