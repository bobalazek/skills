---
name: design-interface
description: "Design, refine or redesign an interface at the needed fidelity, from low-fidelity screen, full-page or website wireframes to visual hierarchy, content, states and responsive behavior, delivering a design artifact, implementation handoff or rendered surface. Use when an interface needs a structural or visual decision."
---

# Design interface

## Use this skill

Use this for interface design at the requested fidelity. Establish whether the result is a wireframe, an editable design artifact, implementation handoff or implemented surface, reusing accepted flows, wireframes, content and design decisions. Existing settled screen structure can skip the wireframe and start at visual detail.

Use `map-user-flows` when the journey or navigation is unresolved, and `build-prototype` for an experiment requiring working interactions. Keep labels and state messages within screen design. A copy-only request for those strings does not authorize redesign: ground each in actual behavior, consistent terminology and accessible wording, and leave the layout unchanged. Repeated shared contracts belong in the project's existing design system or component library when one exists; otherwise note the repeated need for its owner.

This skill owns interactive UI motion and its task behavior; exported motion graphics and explainer videos are separate media work.

## Choose the fidelity

Load for wireframe fidelity: [wireframe record](references/wireframe.template.md).

Pick wireframe fidelity when the structure (regions, content placement, hierarchy or states) is still open and visual polish would hide that decision. Skip it when structure is already settled and only visual detail or a small implementation change is needed. Wireframing does not authorize changing agreed behavior or implementing the product.

### Reuse the accepted context

Identify the task, actors, requirement/flow-state IDs, supported surfaces and structural question. Inspect existing screens and relevant component conventions; preserve useful navigation, familiar patterns and behavior. For a new screen, derive its contents from accepted requirements and label assumptions. Ask only about choices that materially change structure; route unresolved journey rules back to flow mapping while progressing independent screens.

Establish whether scope is a section, complete page, repeated page template or website. For a website redesign, inventory the affected routes/templates and meaningful states, including lower-page content and shared navigation/footer. Reuse the accepted sitemap and content plan; identify what must survive, what may change and what is excluded. A finished hero is not a complete-page wireframe, and one desktop frame cannot stand in for a whole website.

Choose an available approved design tool and the requested editable format. If no tool is required, a small local HTML/CSS wireframe with labeled states is a suitable fallback. Report an unavailable required format before substituting it. Keep files in the agreed design/scratch location; publishing, uploads and product edits require their own authority.

### Lay out the affected screens

Arrange regions, headings, realistic representative content and primary/secondary actions by task priority. Reuse relevant components structurally without reproducing brand polish. Use safe synthetic data where needed; mark uncertain copy or content instead of inventing claims. Show enough content length and density to test the proposed hierarchy.

Give regions meaningful names and enough representative text to understand their role. Carry the accepted visitor question, answer/proof and action into each section; return unsettled messaging or final wording to its owner as an open question. Avoid both unlabeled rectangle collections and detailed visual styling that obscures a structural decision. Compare alternative arrangements only when a consequential choice remains; explain their trade-off against the task rather than generating variants for their own sake.

Represent consequential loading, empty, error, permission and success states, plus validation, cancellation or destructive consequences where relevant. Connect screens and recovery actions to accepted flow states; do not invent retry, undo, access or persistence behavior. Annotate uncertain behavior as a decision rather than silently designing around it.

Show how the structure adapts on supported surfaces. Preserve meaningful reading order, visible labels, heading/landmark hierarchy and access to key actions. Annotate intended focus movement and keyboard order where the artifact cannot demonstrate them. For a multi-screen or stateful handoff, use [the wireframe record](references/wireframe.template.md) in the existing project format; avoid duplicating the specification.

### Inspect the wireframe

Open or render the actual artifact at relevant sizes. Walk the primary task and consequential alternate states, checking content fit, overflow, omitted actions, permission leaks and usable exits. Label static controls and simulated transitions; drawings do not prove runtime accessibility, service behavior or participant usability. Missing rendering access leaves visual checks unverified.

For a full page or site, inspect the complete scroll and named route/template inventory, not only the initial viewport. Check the coarse hierarchy with detail reduced, then actual reading order and content density at the intended size. Confirm that narrow layouts retain decision-critical content and required paths. Record uncovered pages/states explicitly before claiming completion.

The wireframe is done when the rendered frames cover the named scope, the primary task and alternate states walk through without dead ends, and uncovered pages or states are listed. Present the structural choices and open decisions for human review, distinguishing accepted choices, proposed changes and blocking gaps; a draft can finish with proposals, and required human approval that has not occurred is not claimed. The independent assessment in [Result and verification](#result-and-verification) also traces missing states, conflicting hierarchy and unsupported behavior to concrete frames. Continue to visual detail only when that is requested or already authorized.

## Inspect the surface and choose the format

Read the design contract, tokens/components, brand direction and supported platforms. Inspect existing UI in its rendered state. Determine whether the request refines an existing design, replaces its visual direction, or creates a new surface. Existing code, content and accepted decisions remain evidence when a design document is missing; a new page inside an established product normally inherits its system.

For a redesign, unsettled visual direction or a substantial composition/type refinement, read [visual direction and craft](references/visual-direction.playbook.md). Establish the page or screen's task, what must survive, and the design choices still open. Reuse accepted reference analysis and content plans; a local refinement needs only its affected decisions. Do not fill missing content with invented testimonials or claims presented as real.

Check available tools and access before choosing a format. Use the requested tool when it supports the result. Preserve editable artifacts, revision and opening/export instructions; inspect whether export retains structure, component constraints, content and states. State an unavailable required format before offering a substitute.

## Design states and implementation behavior

For a detailed handoff, use [screen and state requirements](references/screen.template.md). Specify meaningful loading, empty, error, success, selected, focus and disabled states. Include accessibility, recovery and supported responsive/adaptive differences in the behavior contract.

Reuse existing components and patterns before proposing additions. Identify a shared need without turning one screen into a new design system. If implementation is requested, follow local code conventions and verify the rendered result.

When an external component or pattern would fill a specific gap, [component sources](references/component-sources.playbook.md) lists task-specific candidates and adoption checks. Use it for discovery; preserve the target's framework, tokens and component behavior.

When motion is requested or needed to explain a consequential transition, read [motion decisions and checks](references/motion.playbook.md). Define its purpose, repetition and interruption behavior before selecting an effect; keep state and task completion usable with reduced or unavailable motion.

When the requested fidelity allows it, a small local HTML/CSS prototype with SVG can be an editable fallback. Use synthetic data and only interactions needed for the design question, reusing product components where applicable. Label static controls, simulated services and native/platform behavior it cannot establish. Connected drawings alone do not demonstrate navigation, validation or recovery.

## Result and verification

Walk the primary task and consequential states, including escape from errors, cancellation and dead ends. Inspect hierarchy, content fit, overflow, feedback, keyboard behavior and supported surface changes. Distinguish design intent from exercised behavior; state missing rendering access and uninspected states.

For changed surfaces, retain useful baseline/result captures at comparable routes, viewports, roles, fixtures and states. For new surfaces, capture against agreed criteria. Record revision, interaction outcomes and relevant regression results. Screenshots cannot prove keyboard or recovery behavior. Inspect sensitive content before sharing proof; authorized PRs need actual accessible evidence or explicitly labeled local artifacts.

For a wireframe, the reviewer also traces missing states, conflicting hierarchy and unsupported behavior to concrete frames. Before readiness, have a separate agent in fresh context challenge raw requirements, candidate, component constraints and observed proof without the author's conversation or preferred answer. Retain its returned reviewer/session identity, evaluated artifact or revision, findings and coverage. Resolve blocking defects and independently recheck affected states after fixes. Without that assessment, report unreviewed and not ready; required human approval remains separate.

Return the design/result, key decisions, editable entry point, verified state/surface coverage and unresolved choices. For a wireframe, also return its requirement/state links and key structural decisions. Use the requested audience/depth and authoritative project format, updating existing design knowledge rather than duplicating it.

## Next steps

Record accepted repeated shared needs in the project's design system when one exists, or note them for its owner; use `build-prototype` when interaction uncertainty remains after a wireframe, `map-user-flows` when a wireframe exposed changed journey rules, `implement-change` for an accepted design awaiting implementation, or `review-interface` for independent evaluation of an available rendered candidate. Carry the design revision, accepted behavior, component constraints and evidence limits; check availability or describe the plain action. Continue ready authorized work without reopening settled design, or finish at the requested fidelity.
