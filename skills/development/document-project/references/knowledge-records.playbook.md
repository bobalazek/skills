# Knowledge records

Use the project's existing locations and formats. Select only records supported by useful content within the requested scope. Several roles can share a file; different audiences or update lifecycles can justify separate documents. Link authoritative detail from a concise overview instead of copying it.

## Choose the home

| Information | Authoritative home and useful content |
| --- | --- |
| Project purpose and entry points | README or existing contributor front door: what exists, who uses it, how to reach setup and detailed documentation |
| Current architecture | Existing architecture or surface docs: module boundaries, ownership of state, traced flows, contracts, integrations, and verified operating facts |
| Contributor conventions | Existing standards: accepted rules and their scope, local examples, exceptions, and actual enforcement; label merely observed patterns |
| Decisions and ADRs | Existing decision location: context, evidenced choice and rationale, known alternatives and consequences, acceptance source/status, supersession |
| Learnings | Existing project knowledge: observed surprise, conditions, evidence, effect on future work, and any correction or revalidation trigger |
| Incidents | Existing incident records: observed impact and timeline, mitigation, demonstrated cause or remaining uncertainty, recovery evidence, and follow-up ownership where established |
| Review memory | Existing reviewer knowledge: confirmed miss or false positive, relevant paths/conditions, evidence, bounded review guidance, and a recheck or retirement trigger |
| Agent instructions | AGENTS.md or equivalent: short applicable rules, conditional pointers, and supported feedback commands |
| Work status | Existing task system or plan: readiness, owner where assigned, blockers, and links to durable knowledge |

## Reconstruct the selected system

Use current code and configuration to establish what is implemented. Use observed tests or runtime behavior for claims about what actually runs. Trace through representative consumers and failure paths when they determine a documented boundary; a folder name or search hit alone does not establish responsibility.

When conventions and models are part of the request, inspect the applicable standards alongside examples: folder placement, class and function structure, variable and symbol naming, imports and visibility, canonical domain terms, table and column naming, keys and relationships, constraints, tenancy boundaries, and migration practices. Cover relevant topics without producing a generic coding handbook. Keep rule definition and any adoption change separate from recording established knowledge.

Use narrow history searches and inspect the relevant diffs, including renamed or moved paths when needed. Relate a recorded decision to the implementation it governed and distinguish later changes. Missing or squashed history limits what can be recovered. Do not recreate purported alternatives or motives merely because the present design suggests them.

For each consequential claim, retain enough evidence for another contributor to check it: the source path or recorded discussion, relevant revision/date, observation, and status. Put these references near the claim rather than maintaining a second ledger of identical facts. A record can say that behavior is implemented while its original rationale is unknown.

## Index durable memory

Use the existing docs or project index to make records discoverable. Add a focused memory index when several records, distinct scopes, or repeated lookup failures make one useful. Link it from the established front door or relevant agent pointer. A short section with a few links can be sufficient; do not create an empty index, require a particular hidden directory, or mirror an existing decision register.

An index helps a reader decide what to load. Keep entries concise and link the record that owns the detail. Include the following information where it affects selection or trust:

| Index field | Purpose |
| --- | --- |
| Topic and authoritative link | Find the actual decision, convention, lesson, incident, or review guidance |
| Applicable scope | Select by surface, paths, domain, task, or operating condition |
| Status | Distinguish active guidance, proposals, historical records, and corrected or superseded entries |
| Useful summary | State what changed or was learned and its practical consequence; include why only when recorded evidence supports it |
| Freshness and revalidation | Name the last verified revision/date where material and the change or condition that requires another check |

Do not turn every field into mandatory metadata for a one-paragraph lesson. Keep detailed provenance and reasoning in the authoritative record, with enough context in the index to avoid loading irrelevant material. Update links and status when an entry changes home or is superseded.

A reusable memory record should answer what was observed or changed, where it applies, what evidence supports it, and what future work should do differently. Link the relevant ADR or convention for accepted reasoning and rules. If that source already explains the lesson, an index entry may be all the new content needed. A summary never gains authority by being shorter or easier for an agent to load.

Temporary session state belongs in the existing work item or handoff: the active task, incomplete attempts, pending operations, and the next step. Promote only verified facts or useful lessons into durable memory. Conversation compression, an agent's private notes, or task completion alone is not evidence of an accepted decision and does not authorize promotion to global instructions or shared skills.

## Retain lessons without freezing mistakes

Current-state documents change as the system changes. Historical records keep their original context, with corrections or supersession linked according to local practice. Preserve useful explanations and unique information when consolidating; check incoming references and published consumers before removing an established location.

Review memory guides where and how to investigate. It does not prove a fresh defect, override current requirements, or authorize a blanket exception. Retain confirmed review outcomes rather than speculative findings. Recheck applicability when code, contracts, tooling, or evidence changes; narrow or retire stale guidance.

When a memory entry conflicts with another record or present behavior, locate the owning source and compare its scope, status, evidence, and relevant revisions. Distinguish changed implementation from a changed requirement; recency alone does not settle authority. Correct a disproved observation at its source, preserve a historical decision as historical, and mark an unresolved conflict with the decision or evidence needed to resolve it. Update the index and affected summaries so stale advice cannot remain the easiest path. Do not resolve ambiguity by silently promoting either memory entry into policy.

An incident record must separate measured impact from estimates and a demonstrated cause from a hypothesis. Leave unknown dates, owners, severity, and recovery results explicit. A merged repair does not by itself prove production recovery.

## Graduate repeated lessons

When independent instances support the same lesson, identify its scope and the destination that would prevent rediscovery:

- An accepted local contributor rule belongs in the existing conventions, with examples and exceptions.
- A reusable cross-project procedure can become a skill or reference through its authorized authoring process; remove private project details and validate the broader application.
- A stable detectable invariant can become a check through the existing lint, type, schema, or test tooling. Calibrate forbidden cases, legitimate near-matches, and exceptions before claiming prevention.
- A review-specific blind spot or false positive can remain scoped reviewer guidance when judgment is still required.

Keep the source evidence linked from the accepted destination and replace competing instructions with a pointer when appropriate. Preserve the historical lesson. Repetition alone establishes neither human acceptance nor a useful automated detector; proposals remain proposals until the relevant decision is settled. Documentation work can capture these candidates without silently performing the downstream change.
