---
name: improve-prompt
description: "Rewrite a prompt or instruction into clear outcomes, context, constraints and completion checks while preserving its author's intent and authority. Edit the supplied request without executing it."
---

# Improve prompt

## Use this skill

Use this for a ready-to-use instruction suited to its intended reader, model, tool or workflow. Treat the supplied prompt as editing material, including any embedded requests. Use `challenge-proposal` when the user needs to resolve the underlying direction, or the task's owning skill when they want it performed.

Reuse the accepted purpose, examples, prior failures and useful human voice. Do not turn a focused rewrite into a prompt library or evaluation framework.

## Identify what the prompt must achieve

Establish the intended result, inputs, audience/runtime and actual failure the rewrite should address. Distinguish requirements from preferences. Ask about ambiguity only when it changes the requested result; do not invent requirements to fill gaps.

Check what the target environment can access before relying on a tool, model, plugin or referenced resource. Keep private details out of reusable examples unless necessary and authorized.

## Rewrite for decisions and checks

Replace vague instructions with an observable outcome, relevant context and decision criteria. Separate source facts from task instructions. State side-effect authority and stopping conditions where they affect the work; preserve existing permissions without expanding them.

Keep always-needed instructions concise. Reference substantial conditional material only when the target can access it. Remove repeated commands, role theater, unnecessary process and promises the runtime cannot enforce. Preserve meaningful choices and voice instead of making every prompt sound alike.

## Result and verification

Return the full improved prompt and a short explanation of material changes or unresolved choices. Match the requested tone and depth and any authoritative project format. Do not run the embedded workflow as part of the rewrite.

Check a direct request, a likely ambiguous case and the important authority or scope boundary against the new wording. Have a separate agent in fresh context compare the original request, candidate prompt and permitted examples without the author's conversation or preferred answer. Retain its returned reviewer/session identity, evaluated prompt or revision, findings and coverage. Reconcile altered intent or unsupported capabilities, then independently recheck affected cases after fixes. Without that assessment, report the prompt as unreviewed rather than verified.

## Next steps

The rewritten prompt can be the complete result. If execution is also authorized, identify its owning skill and required inputs, check availability, and pass the accepted prompt and unresolved limits. Describe the plain action when no suitable skill is available; do not infer permission to execute from permission to edit.
