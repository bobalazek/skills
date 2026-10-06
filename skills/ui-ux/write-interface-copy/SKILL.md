---
name: write-interface-copy
description: "Write or revise interface labels, instructions and state messages as context-keyed strings grounded in terminology and actual behavior. Use for a copy deliverable rather than screen design or marketing content."
---

# Write interface copy

## Use this skill

Use this for focused wording, a string handoff or authorized edits to existing resources. Reuse accepted behavior, terminology and stable resource keys. Routine wording can remain within `design-interface`; navigation structure belongs to `map-user-flows`, and unresolved required behavior to `write-spec`.

## Establish meaning and scope

Read the task, accepted flows, current strings, supported locales/platforms and relevant content/accessibility conventions. Inspect the actual interface or supplied state evidence. Record the candidate revision and distinguish observed behavior, accepted requirements and assumptions.

Identify each string's audience, location, trigger and available action. Cover requested states that exist, such as help, validation, loading, empty, error, permission, confirmation and success. Do not create product behavior to fill a copy template.

When wording depends on unknown behavior, name the fact or decision and continue unaffected strings. Do not invent consent, legal obligations, retention, permissions, undo, retry safety or completion. Preserve approved legal/consent wording and meaning unless a change is explicitly authorized; route consequential uncertainty to its owner.

## Write strings in context

Use accepted vocabulary consistently. Explain actions, consequences and recovery where needed. Distinguish no data from no matches, permission denial from request failure, and confirmed failure from an unknown outcome. Offer only supported recovery; do not promise nothing changed or that retry is safe without evidence.

Return actual strings. For multi-state handoffs, variables or localization-sensitive work, use [the copy contract](references/copy.template.md), adapting the project's existing source/format. Preserve resource keys and message syntax; identical text does not necessarily mean identical context.

Preserve variable types, plural/select forms, formatting and escaping. Use complete localizable messages rather than grammatical fragments or English-only assumptions. Record supported locales and actual length constraints; do not invent universal limits or present unreviewed translations as approved.

Keep visible labels, accessible names, instructions and announced feedback consistent in meaning. Do not rely only on color, position or placeholders. Specify needed context and intended announcements while recognizing that wording cannot prove focus management, live-region behavior or assistive-technology support.

## Result and verification

Check changed strings against triggers, variables, terminology and available actions, including relevant empty/error/permission distinctions. Exercise supported variable boundaries and plural forms with non-sensitive values. Retain a useful before/after record by key or screen/state and the reason for material changes.

With rendering access, inspect actual candidate states and supported surfaces for fit, truncation, wrapping, ambiguous controls and missing context. Record revision, locale, role and state. Verify interaction/announcement claims through observation rather than screenshots alone. Name unavailable cases: a draft can finish with limits, while requested implementation or rendered verification remains incomplete without its required proof.

Before acceptance, have a separate agent in fresh context challenge the raw request, accepted behavior, terminology, candidate strings and state evidence without the author's conversation or preferred answer. It must test misleading promises, unsupported recovery, missing context and coverage claims. Retain its returned reviewer/session identity, evaluated artifact/revision, findings and coverage. Resolve defects and independently recheck affected strings/states after fixes. Without that assessment, report unreviewed rather than ready; human approval remains separate.

Return strings, behavior/terminology constraints, verified coverage and unresolved choices at the requested audience/depth. Keep accepted copy in its authorized source. For authorized PR work, include safe before/after proof and the actual assessment, refreshed after affected edits.

## Next steps

Use `write-spec` for missing behavior agreement, `map-user-flows` for changed recovery/navigation, `design-interface` for layout/state presentation, or `implement-change` for accepted copy awaiting integration. Use `test-usability` when comprehension needs participant evidence. Pass the strings, source revision, constraints and exact gap; check availability or give the plain action. Finish the copy-only result or continue ready work already authorized without reopening accepted context.
