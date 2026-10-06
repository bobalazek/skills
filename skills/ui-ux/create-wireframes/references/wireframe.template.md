# Wireframe record

Use this inside the existing design record when several screens or states need traceability. A small screen may need only a frame and a few annotations. Keep behavior requirements in their authoritative source.

## Basis and artifact

- **Question:** The structural choice this wireframe should resolve.
- **Inputs:** Accepted requirement/flow revision and IDs; existing screen/component references; relevant constraints and unresolved choices.
- **Artifact:** Editable location, revision and opening instructions. Identify tool/format limits and supported surfaces.
- **Status:** Proposed or accepted structural choices, required human decisions and independent review status.

## Screen and state coverage

Replace these illustrative rows with actual accepted rules. Different states can share one annotated frame when the distinction remains clear.

| Screen/state | Requirement or flow ID | Hierarchy and content | Available action / destination | Frame and surface |
| --- | --- | --- | --- | --- |
| Results populated | Existing source ID | Heading, search context, result count, rows, secondary actions | Open an allowed result; preserve return context | Editable frame ID and relevant sizes |
| No matching results | Existing source ID | Keep current query visible; explain the empty result | Clear filters only if the accepted flow supports it | Frame or explicit variant |
| Loading failed | Existing source ID | Show what is unavailable and what input remains | Name supported recovery, or record the unresolved rule | Frame or explicit variant |
| Access denied | Existing source ID | Explain the boundary without exposing protected content | Use only a permitted destination; no invented access request | Frame or explicit variant |

Add relevant initial-empty, loading, validation, success, cancellation and destructive-action variants. State why a consequential state is excluded; do not fabricate a service rule merely to complete the table.

## Frame annotations

Put annotations beside the element they explain or reference a stable frame/element ID:

- Priority and grouping: what users need first, primary action, supporting content and what can move below it.
- Reuse and changes: existing shell/components retained, required structural variants and any proposed new pattern.
- Content: representative lengths, data density, long labels and missing content decisions. Mark synthetic examples.
- Responsive structure: stacking, wrapping, reading order and action placement on supported surfaces; preserve required content when space narrows.
- Accessibility intent: heading/landmark roles, visible labels, logical reading/keyboard order, focus destination after transitions, and errors associated with their controls. A drawing records intent; an HTML artifact can exercise only its implemented semantics and interactions.
- Behavior boundary: link to the accepted rule; mark controls as static, linked frames or simulated behavior. A frame link is not evidence of authentication, persistence or recovery.

## Evidence and handoff

| Criterion | Artifact revision / frame / surface | Observed check and evidence | Result or gap |
| --- | --- | --- | --- |
| A supplied requirement or structural question | Exact inspected candidate | Rendered capture, content/overflow inspection or task walkthrough | Demonstrated, failed or unverified |

Preserve useful before/after captures for changed screens under comparable content, role and size. For a new screen, compare against its accepted criteria. Record independent reviewer identity, returned findings and affected rechecks. Human structural decisions and participant findings have different evidence; do not turn an expert walkthrough into either.

Pass the accepted artifact and its requirement/state links to detailed design, with preserved components, content gaps and deferred visual choices. A blocking journey or behavior choice must be resolved before its dependent screen is accepted.

Structural guidance is consistent with [Figma's wireframing guidance](https://www.figma.com/blog/how-to-wireframe/). Accessibility annotations use [W3C page-structure guidance](https://www.w3.org/WAI/tutorials/page-structure/) and [focus-order guidance](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html); wireframes alone do not demonstrate conformance.
