---
name: model-threats
description: "Model plausible security threats to a system or proposed change, producing traceable abuse paths, mitigations and verification criteria. Use for a threat model; code defect review and incident diagnosis have separate owners."
---

# Model threats

## Establish the system and scope

Identify the system or change, assets to protect, intended users, deployment context and requested depth. Reuse accepted requirements, existing threat models, security conventions and architecture. For existing software, trace relevant entry points, data flows, stores, identities and trust boundaries through actual code and configuration. For a proposed system, distinguish intended controls from implemented and exercised controls.

Distinguish drafting from acceptance. A request to produce or update a threat model asks for a draft; complete it with direct checks and explicit verification gaps. Arrange independent review when the requested result is acceptance for implementation or a security decision. Producing a draft does not accept its risks or approve its controls.

A bounded feature needs a bounded model. Record consequential unknowns instead of inventing infrastructure, attackers or obligations. Follow repository conventions and supported framework controls. Use `design-architecture` for unresolved technical structure, `review-code` for evidenced implementation defects, or `diagnose-issue` for an observed incident. Describe the plain action if its skill is unavailable.

## Trace plausible threats

Map who can influence each relevant input or boundary, what authority they start with, what valuable action or data they could reach, and which control should stop them. Include abuse of legitimate workflows where it can violate the system's actual rules. Use a small data-flow diagram when it clarifies boundaries; a component inventory alone is insufficient.

Use the project's threat-modeling method. If none exists, walk each relevant boundary using identity spoofing, tampering, repudiation, disclosure, availability and privilege escalation as prompts. Include privacy or AI-specific concerns only where the data and behavior warrant them. Consult current primary guidance for version-specific controls; a named methodology or generic vulnerability list is not evidence of an applicable threat.

Ground each threat in a plausible actor, prerequisite and path to an asset or invariant. Distinguish observed defects, plausible design threats, unverified controls and accepted residual risks. Existing protections are part of the model; test their coverage before prescribing another mechanism. Threat modeling does not authorize active exploitation, remote scanning or production changes.

## Decide responses and checks

Prioritize by credible impact, feasibility and exposure; avoid invented numeric precision. For each material threat, identify an existing protection, a proposed mitigation, removal of the risky behavior, or an unresolved risk decision with its owner. Do not accept risk on someone else's behalf or present a proposed control as deployed.

Give mitigations an observable verification criterion, including the rejected abuse path and preserved legitimate behavior. Prefer controls at the actual enforcement boundary; prose, client-side checks or a diagram do not establish authorization. Keep unresolved assumptions and recovery limits visible. Use [the threat-model template](references/threat-model.template.md) when the project has no suitable format.

## Verify and deliver

Check the applicable items against evidence:

- The modeled scope and source revision are explicit; observed and proposed behavior are distinguishable.
- Material assets and trust boundaries are connected to plausible threats, including existing controls.
- Each material threat has a response or open owner decision and an observable check.
- Unknowns, untested controls and residual risks remain visible; no unsupported vulnerability or security guarantee is claimed.

For a drafting request, deliver the scoped model after these checks and state that it is unreviewed unless a valid independent assessment already exists. Do not hold a completed draft open for an acceptance workflow the user did not request.

For acceptance, a separate agent in fresh context must challenge the raw requirements, sources, candidate and threat/control paths. Withhold the author's preferred conclusion. Use an available reviewer mechanism and wait only on an actual returned reviewer/session. Retain the returned assessment, reviewer/session identity, artifact revision, findings and coverage; resolve findings and obtain affected rechecks. A requested delegation, empty wait or self-check is not an assessment, including for progress claims. If independent review is unavailable, deliver the draft with the gap and leave acceptance blocked.

Deliver the scoped model and prioritized next actions in the existing project record. Carry accepted mitigations to `write-spec`, `create-tasks` or `implement-change` only when that work is requested; carry missing proof to `verify-change`. Reuse settled decisions and existing authorization. A modeling request finishes with its model and gaps.
