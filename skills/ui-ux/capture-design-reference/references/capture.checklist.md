# Design reference capture

Use this for a reusable reference, comparison across sources or a request for token/component detail. Keep the project's existing format when it supports these decisions; a short analysis with linked captures may be enough.

## Establish source identity

For every source or materially different state, retain:

- URL, app view, design frame or supplied artifact; date and revision when available.
- Capture method, viewport/platform and zoom or scale that affects interpretation.
- Visible state, role and synthetic fixture where relevant, without credentials or personal data.
- What was directly inspected and what was unavailable, such as a hover state or mobile version.
- File or artifact location and whether it is accessible to the intended recipient.

Use a bounded set of pages and states that answers the design question. The user's supplied capture can be the source of truth for its appearance without being proof of the site's current rendering. If browser content changed between captures, retain the distinction rather than presenting both as one revision.

## Collect useful evidence

| Question | Useful evidence | Limit to preserve |
| --- | --- | --- |
| How is the page structured? | Full-page context plus relevant sections or frames | Crops can hide adjacent content, sticky elements or the actual reading order |
| Which type and spacing values are used? | Inspected computed properties or design-file values with element/state references | Pixel estimates from a scaled image are estimates; a declared font family does not by itself prove the intended face rendered |
| How does layout adapt? | Observed layouts at relevant widths, with conditions recorded | Two screenshots do not identify the exact breakpoint or all intermediate behavior |
| What makes a component reusable? | Repeated instances and observed variants, content limits and interaction states | A single card is insufficient evidence for an entire component API |
| How does an interaction work? | The action, resulting state and relevant recording or observation | A still image cannot establish focus, recovery, motion or persistence |
| Which visual values are shared? | Repeated, attributable values and their apparent roles | Similar values can be local exceptions; extracted samples are not automatically semantic tokens |

Keep captures of loading, empty, error or restricted states only when they are accessible within the task's authority. Prefer test data. Do not submit live payments, send messages or alter another user's data just to complete a state matrix.

## Organize the interpretation

Use a compact record for each pattern that matters:

| Field | Required distinction |
| --- | --- |
| Observation | The visible or measured detail and its evidence pointer |
| Interpretation | The inferred purpose or relationship, labeled as inference |
| Adaptation | How it might serve the target's task and what must change |
| Constraint | Content, brand, accessibility, platform or interaction assumptions |
| Coverage | Sampled pages/states and consequential unknowns |

For example, observing a narrow reading column and a separate navigation rail supports a layout reference. It does not establish that the layout improves comprehension; that claim would need user evidence. A suggested adaptation can still be useful when its rationale and untested outcome are explicit.

If structured tokens are requested, preserve the value, source element/state, measured or estimated status and intended role where supported. Use the requested format or an existing project format. Check syntax with available tooling if emitting machine-readable output; do not invent a taxonomy or framework export the consuming project does not need.

## Rights, access and storage

Reference access, capture and asset reuse are separate permissions. Keep reference imagery in its authorized context; do not imply that collected logos, fonts or artwork may ship with the target product. Store only what is needed, preserve attribution/provenance when required, and follow project rules for private screenshots or design files. Do not upload them to external tools merely to obtain a convenient analysis format.

Never overwrite the target's existing design contract or shared tokens as a side effect of capture. A source reference informs a subsequent design decision; it is not that decision.

## Final challenge

Open the retained evidence rather than checking only that files exist. Sample every material claim against its cited capture or inspected property. Check for wrong page/state labels, failed or blank captures, image scaling mistaken for measurements, unobserved variants presented as facts, contradictory reference states and missing rights/access limits.

The capture is complete for its declared scope when the intended recipient can inspect the evidence and distinguish observations, estimates, inference and proposals. If required source access or rendering is missing, report partial coverage and what would resolve it; do not fill the missing state with a plausible design.
