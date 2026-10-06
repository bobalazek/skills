# Interface review checks

Select checks for actual tasks and supported surfaces. Inspect a suspected pattern in context: its appearance alone is not a defect or evidence that the author intended manipulation.

- Orientation and hierarchy: users can identify purpose, current state, primary action, and important content.
- Navigation and content: labels, information structure, back/exit paths, and instructions match the task and domain language.
- Interaction: controls behave as signaled; validation, loading, progress, success, and recovery are clear; repeated or interrupted actions are handled.
- Accessibility: inspect relevant semantics/names, keyboard access, focus order/visibility, error communication, contrast, zoom/reflow, and motion preferences with suitable tools.
- Responsive/platform behavior: verify real layout, overflow, density, input, navigation, and state changes on supported surfaces.
- Visual consistency: typography, spacing, alignment, tokens, and component states serve a coherent hierarchy; preferences require a stated rationale.
- Trust and consequences: permissions, costs, destructive actions, and data handling are understandable; avoid manipulative or misleading interaction.

Record actual observations and limits. Do not report a checklist item as passed because the code appears to contain a matching attribute.

## Patterns to investigate

| Suspected problem | What to inspect | Useful finding or correction |
| --- | --- | --- |
| Every section competes for attention | Read headings/actions together and inspect the full page at coarse and normal scale | Name the competing priorities and the task obscured; restore a meaningful hierarchy rather than banning a visual style |
| Generic composition ignores the content | Compare actual text/data density and user task with the chosen cards, columns or oversized hero | Show the information hidden, fragmented or pushed away; propose grouping that serves the actual content |
| Promise and destination disagree | Follow the action to its supported consequence; compare price, eligibility and commitment | Quote the mismatch and locate the condition; do not silently change the offer to match the copy |
| False urgency or unsupported social proof | Trace the countdown, scarcity statement, logo or testimonial to verified facts and public-use permission | Remove or qualify the unsupported claim; a persuasive appearance is not evidence |
| A choice is steered through hidden costs or obstructed refusal | Compare accepting, declining, cancelling and recovering, including defaults and information revealed late | Record the asymmetric effort or missing information and its consequence; preserve an understandable, usable choice |
| Control looks available but has no supported result | Exercise links, icon controls, clickable cards and disabled/loading states | Distinguish a labeled prototype from a broken implemented action; provide feedback and a legitimate next step |
| Essential information relies on hover, color or placeholder text | Use keyboard and supported touch input; inspect persistent labels and error context | Identify the lost information and an accessible way to retain it |
| Overlay or sticky content blocks work | Open/close it, follow focus, zoom and narrow the viewport; try keyboard exit and return | Record trapped focus, covered targets or lost context; demonstrate the affected recovery path |
| Motion interrupts routine work | Repeat and interrupt the interaction; test the reduced-motion setting and content visibility when animation is absent | Check final state, continuity, feedback and control; use a recording or interaction trace for timing claims |
| Redesign loses a working path | Compare named baseline routes, content, forms, search/help and deep links with the candidate | Separate intentional accepted changes from missing behavior; retain a preservation/regression gap until exercised |

These are diagnostic prompts, not automatic severity scores. Rank by the affected task, actual consequence, reach and available recovery. Aesthetic preference needs an explicit brief or rationale. A dark-pattern concern needs the observable choice/information problem; this review alone does not establish a legal violation.

## Decision and evidence

For each material concern, ask what the user is trying to understand or do, what information is available at that moment, what effort the interface demands, and how they can recover. A proposed psychological explanation remains a hypothesis until appropriate participant or behavioral evidence exists. Do not infer confusion, trust or motivation merely from a screenshot or metric.

Use current primary guidance when checking standards: [W3C page structure](https://www.w3.org/WAI/tutorials/page-structure/), [focus order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html) and [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). These checks cover their inspected criteria; they do not establish complete accessibility conformance.
