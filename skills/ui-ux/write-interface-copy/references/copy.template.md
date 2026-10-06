# Interface copy contract

Use this shape when strings span several states, need implementation handoff, or contain variable/localization behavior. A single wording change can keep the same information beside the existing resource entry instead of creating a separate document.

## Context and terminology

Record the product task, affected surface and source revision, audience/role, supported locale and platform, and accepted behavior references. Identify whether this is proposed wording, approved wording or implemented copy. Keep rendering and comprehension evidence separate from approval.

| Term | Accepted meaning and source | Use in this flow | Avoid or unresolved |
| --- | --- | --- | --- |
| Existing domain term | What it names, supported by the product contract | Consistent label or action wording | Synonyms that change meaning; choices still awaiting an owner |

Reuse established terms; a proposed rename needs an explicit reason and its affected locations. Do not silently rename a domain concept to make one screen read better. Retain the approved source and owner for wording constrained by policy or consent.

## Strings and conditions

| Key or context identifier | Location, audience and trigger | Proposed string | Variables and variants | Action or behavior constraint | Evidence or open choice |
| --- | --- | --- | --- | --- | --- |
| Existing resource key, or clearly proposed identifier | Named screen/state and visible or accessible use | Actual wording | Typed values, formatting, plural/select rules | What this wording asserts and what the user can do | Source and verification status |

Keep identifiers stable when implementation already provides them. A draft context identifier is not an instruction to add a new localization architecture. Do not collapse entries solely because their current text matches: distinct triggers or consequences may need separate wording later.

Check relevant state distinctions:

- A first-use empty state can explain an available first action; no matches should explain the active search/filter context and a supported way to change it.
- Field validation identifies the input and supported correction. Do not imply entered work was preserved unless the behavior supports that claim. Keep guidance available outside placeholders and connect it to the field in the implementation handoff.
- A permission state must not reveal protected information or offer an unavailable action. Explain the supported next step only when that route exists.
- Loading or pending means completion is not yet established. A terminal success message needs the corresponding confirmed result; an unknown outcome needs wording and actions that respect that uncertainty.
- A destructive confirmation explains the actual object and effect. Include undo, cancellation, retained data or recovery only when the accepted behavior supports those claims.

## Variable and localization contract

For each variable, record its name, type, source, representative boundary values, formatting, allowed absence and display constraints. Keep user-provided content safely rendered; a copy change does not authorize raw markup interpolation or exposing hidden identifiers. Specify a supported fallback for a missing value only if the behavior permits it.

Preserve the project's message syntax and translator context. Use complete messages and locale-aware plural/select forms rather than assembling grammatical fragments. State whether a count refers to selected, attempted, successful or failed items. Check long names, zero/one/many where relevant, text expansion, supported scripts/direction and actual UI constraints. Do not claim translation quality or supported locales from a source-language draft.

## Worked example

Suppose the accepted contract says an export job reports `pending`, `complete` with a returned result count, or `failed` with a retry action. The product uses “export” consistently. These are example strings tied to those supplied facts, not requirements for every export feature:

| Context | String | Required constraint |
| --- | --- | --- |
| Job pending | Export pending… | Completion has not been confirmed; do not show a result count yet |
| Complete with zero results | Export complete. No items were exported. | Zero is a confirmed result count, not a missing response |
| Complete with results | 1 item exported. / {count} items exported. | Use the project's locale-aware plural mechanism and confirmed result count |
| Confirmed failure | Export failed. Try again. | The failed state exposes an authorized, safe retry action |

If the only evidence is a timed-out request and the server outcome is unknown, the last row does not apply. Keep that state's wording and recovery pending the actual contract; do not infer that the export failed, was cancelled or can safely be repeated.

## Evidence to retain

Link changed entries to accepted behavior and to inspected states at the candidate revision. Record the actual locale, role, values and surface used for checks. Compare wording in context, including overflow, accessible naming and recovery consequences; retain useful captures without treating them as proof of keyboard or announcement behavior. Mark draft-only checks, unavailable states and unsupported claims explicitly. An independent assessment should identify which strings and evidence it examined so later changes can receive a focused recheck.
