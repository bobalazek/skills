# Project context

| Information | Authoritative home |
| --- | --- |
| Purpose, setup, main entry points | README or existing contributor front door |
| Local agent invariants and conditional reading | Applicable agent instruction files |
| Contributor rules | Existing conventions/standards documentation |
| Current architecture and behavior | Maintained project or surface docs |
| Consequential choice and alternatives | Decision/ADR location |
| Verified observation or recurring lesson | Learning record when worth retaining |
| Incident timeline and recovery | Incident record |
| Work status and dependencies | Existing task system or plan |

A commit demonstrates a change. Its rationale needs recorded evidence. An observed pattern is not automatically a mandatory rule. Keep accepted decisions, proposals, assumptions, and current facts distinguishable.

Instructions should answer where to read next for this task, which local constraints matter, and how to verify. Avoid copying a full file tree, generic engineering advice, or all references into the entry point.

For a representative task, map the applicable instruction scope to the authoritative coding standard, a relevant local example, exceptions, and the command that checks it. Distinguish observed practice from accepted rules and from mechanically enforced behavior. A formatter, linter, compiler, contract check, and behavior test cover different properties; a green command does not prove compliance with rules it cannot inspect.

Check that documented commands exist, resolve from the documented working directory, and load the intended project configuration. State required environment or access without copying secret values. Prefer the configured client's existing discovery mechanism and task-local references over parallel instruction trees. Verify discovery when claiming a specific host works; optional capabilities remain optional.

Recurring violations may justify an automated guard after the invariant is accepted. Reuse existing tooling, calibrate legitimate and forbidden cases, and define incremental treatment of legacy violations. Do not keep expanding agent prose to compensate for an enforceable rule or silently enforce an unsettled preference.

Reconcile changed facts in their existing home. Add a new document only when it has a distinct audience or lifecycle and actual content. Do not create a separate handoff file between every phase.
