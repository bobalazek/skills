# Threat model

Use the project's format and omit irrelevant fields. Keep the model proportional to the selected system or change.

## Scope and evidence

System/change, source revision, assets and invariants, intended actors, data flows and trust boundaries. Link the existing architecture and applicable requirements. Separate implemented behavior, proposed design and unknowns.

## Threats and responses

| Threat | Actor, prerequisite and abuse path | Affected asset / impact | Existing control and evidence | Response / owner / decision evidence | Abuse rejection check | Successful legitimate-use check |
| --- | --- | --- | --- | --- | --- | --- |
| Stable ID | Entry through boundary to consequence | Supported impact and priority rationale | Observed, documented or untested | Proposed response or open decision; link an existing owner decision if supplied | Input and expected rejection at the enforcing boundary | Allowed workflow and expected successful outcome under that mitigation |

Keep both checks attached to each mitigation, using separate lines if a table becomes unwieldy. Give proposed alternatives their own assumptions and paired checks, or leave mitigation selection as an open decision. A general happy-path check for the whole system does not establish that each mitigation preserves its legitimate workflow. These are planned criteria until exercised evidence exists.

## Remaining decisions and coverage

Material assumptions, excluded surfaces, untested controls, residual risks and authorized decision owners. Preserve actual acceptance records; absence of an objection is not risk acceptance.

Record checks and the returned independent assessment with reviewer/session identity, evaluated revision, findings and coverage. Link accepted follow-up work without claiming it implemented or granting execution authority.

For method selection or unresolved security terminology, consult the [OWASP threat-modeling guidance](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html). Apply the project's actual context; a checklist category alone does not establish an applicable threat.
