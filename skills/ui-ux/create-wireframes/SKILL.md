---
name: create-wireframes
description: "Create low-fidelity screen, full-page or website wireframes that resolve hierarchy, content placement and states from accepted flows or existing screens, before detailed visual design."
---

# Create wireframes

## Use this skill

Produce an editable, low-fidelity screen structure that people can inspect and discuss. Start directly from accepted flows, requirements or an existing screen with understood behavior. Skip this stage when structure is already settled and only visual detail or a small implementation change is needed.

`map-user-flows` owns unresolved journeys/navigation; `design-interface` owns detailed visual design; `build-prototype` owns an experiment requiring working interactions. Wireframing does not authorize changing agreed behavior or implementing the product.

## Reuse the accepted context

Identify the task, actors, requirement/flow-state IDs, supported surfaces and structural question. Inspect existing screens and relevant component conventions; preserve useful navigation, familiar patterns and behavior. For a new screen, derive its contents from accepted requirements and label assumptions. Ask only about choices that materially change structure; route unresolved journey rules back to flow mapping while progressing independent screens.

Establish whether scope is a section, complete page, repeated page template or website. For a website redesign, inventory the affected routes/templates and meaningful states, including lower-page content and shared navigation/footer. Reuse the accepted sitemap and content plan; identify what must survive, what may change and what is excluded. A finished hero is not a complete-page wireframe, and one desktop frame cannot stand in for a whole website.

Choose an available approved design tool and the requested editable format. If no tool is required, a small local HTML/CSS wireframe with labeled states is a suitable fallback. Report an unavailable required format before substituting it. Keep files in the agreed design/scratch location; publishing, uploads and product edits require their own authority.

## Lay out the affected screens

Arrange regions, headings, realistic representative content and primary/secondary actions by task priority. Reuse relevant components structurally without reproducing brand polish. Use safe synthetic data where needed; mark uncertain copy or content instead of inventing claims. Show enough content length and density to test the proposed hierarchy.

Give regions meaningful names and enough representative text to understand their role. Carry the accepted visitor question, answer/proof and action into each section; return unsettled messaging to `plan-landing-page` and wording to `write-website-copy`. Avoid both unlabeled rectangle collections and detailed visual styling that obscures a structural decision. Compare alternative arrangements only when a consequential choice remains; explain their trade-off against the task rather than generating variants for their own sake.

Represent consequential loading, empty, error, permission and success states, plus validation, cancellation or destructive consequences where relevant. Connect screens and recovery actions to accepted flow states; do not invent retry, undo, access or persistence behavior. Annotate uncertain behavior as a decision rather than silently designing around it.

Show how the structure adapts on supported surfaces. Preserve meaningful reading order, visible labels, heading/landmark hierarchy and access to key actions. Annotate intended focus movement and keyboard order where the artifact cannot demonstrate them. For a multi-screen or stateful handoff, use [the wireframe record](references/wireframe.template.md) in the existing project format; avoid duplicating the specification.

## Inspect and review

Open or render the actual artifact at relevant sizes. Walk the primary task and consequential alternate states, checking content fit, overflow, omitted actions, permission leaks and usable exits. Record screen/state/surface coverage and inspectable captures tied to the artifact revision. Label static controls and simulated transitions; drawings do not prove runtime accessibility, service behavior or participant usability. Missing rendering access leaves visual checks unverified.

For a full page or site, inspect the complete scroll and named route/template inventory, not only the initial viewport. Check the coarse hierarchy with detail reduced, then actual reading order and content density at the intended size. Confirm that narrow layouts retain decision-critical content and required paths. Record uncovered pages/states explicitly before claiming completion.

Present the structural choices and open decisions for human review, retaining accepted choices and honoring existing authorization. A draft can finish with proposals; do not claim required human approval that has not occurred.

Before readiness, have a separate agent in fresh context challenge raw requirements, accepted flows, the candidate and actual rendered proof without the author's conversation or preferred conclusion. Have it trace missing states, conflicting hierarchy and unsupported behavior to concrete frames. Retain its returned reviewer/session identity, evaluated revision, findings and coverage. Resolve supported defects and independently recheck affected frames; unavailable review leaves the result unreviewed. Independent evaluation does not replace required human approval.

## Return and continue

Return the editable entry point, artifact revision, requirement/state links, key structural decisions and actual check/review results. Distinguish accepted choices, proposed changes and blocking gaps. Use the requested depth and existing record; include useful inspected proof in authorized PRs and label local-only artifacts honestly.

Pass accepted wireframes, component constraints and unresolved detail to `design-interface`; use `build-prototype` for remaining interaction uncertainty, `write-interface-copy` for a dedicated string set, or `map-user-flows` for changed journey rules. Check availability or give the plain action. Continue only ready work already authorized, or finish at the requested wireframe draft without adding a mandatory stage.
