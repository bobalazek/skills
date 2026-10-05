# Consolidation checks

## Decide what survives

For each selected source, identify reader, question answered, authority, current versus historical role, incoming links, sensitivity and evidence. Include relevant README/index files, agent instructions, ADRs, convention docs, lessons, review memory, task summaries and generated inventories. Do not scan unrelated private records merely because they are nearby.

Choose one current owner for each fact or rule. Preserve unique useful detail, local examples and accepted exceptions. Resolve contradictions against code/runtime evidence for present behavior and recorded decisions for intent; behavior can violate an accepted requirement. Retain unresolved conflicts explicitly rather than choosing the newest prose by default.

Keep historical ADRs and incidents faithful to their time. Correct them with a visible note or link to a superseding record. A convenient summary must not erase the original evidence or silently turn a proposal into an accepted choice. Remove repeated status chatter that no longer helps future work, subject to actual retention requirements.

## Choose the right form

| Output | Keep | Usually omit |
| --- | --- | --- |
| Task completion | Result, why it matters, relevant method, checks/outcomes, limitations and next action if needed | Tool-by-tool chronology and copied logs |
| PR description | Problem and changed behavior, meaningful example, material implementation trade-off, criterion-linked proof and risks | Every changed filename, abandoned plans, unsupported benefits |
| Technical explanation | Reader's question, entry points, relationships, invariants, failure behavior and concrete examples | Unrelated internals and unexplained jargon |
| Contributor reference | Scoped rule, reason, local example, exception, enforcement and authoritative links | Generic tutorials or a second policy owner |
| Memory index | Brief searchable topic, scope/status, authoritative target, freshness or revisit condition | Copies of complete ADRs, conventions or session transcripts |

Use explicit user preferences first, then project conventions. Default to plain, precise and concise prose; retain exact technical detail where the audience needs it. Warmth or brevity must not hide a failed check. Explain abbreviations and local terms on first use when the reader may not know them. Match headings, language and examples to the established document rather than imposing a new voice.

## Reconcile memory and links

Merge duplicate memories that describe the same evidenced lesson, preserving meaningful independent occurrences and scope. Link summaries to canonical decisions/conventions. Mark stale or superseded entries and repair retrieval pointers; do not leave two contradictory active recommendations. Temporary task state belongs in the task/handoff record. Do not promote private project history into a shared skill without authorized scope and reusable evidence.

Before deleting or moving a file, check tracked links, instruction references and known published/external consumers. Preserve a transition pointer where a real consumer needs it; do not keep a full competing copy. Update the docs front door and relevant indexes together.

## Check the result

Compare retained content against the original useful facts, caveats, evidence and historical meaning. Resolve links and run scoped docs checks. Walk representative reader tasks: locating a rule, tracing a decision, finding a known failure and following setup instructions. Check that shorter summaries still identify failed/unavailable checks and that detailed explanations answer the requested question. Report the changed owners and actual checks; no separate cleanup report is required.
