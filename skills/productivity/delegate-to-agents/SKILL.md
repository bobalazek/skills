---
name: delegate-to-agents
description: "Coordinate bounded work across available agents using self-contained briefs, safe ownership and checked integration. Use when retaining the lead role; prepare-handoff transfers it."
---

# Delegate to agents

## Establish the requested scope

Establish the accepted outcome, source revision, current work, permitted side effects and stopping point: a delegation plan, returned analysis or an integrated change. Reuse the project's task record, accepted decisions and existing verification. Splitting work supplies no additional execution, commit, publication or spending authority.

Use `prepare-handoff` when responsibility transfers to another owner or session. Use the task's owning skill when one bounded action is simpler. Check sibling availability and describe the plain action when absent.

## Choose boundaries and host support

Inspect the host's actual agent capabilities and the project's isolation and model policy. Use supported sessions, worktrees or other isolation; do not assume agents share files, inherit conversation or can see a path merely because the coordinator can. If execution is requested but no delegation mechanism exists, return useful briefs and the exact execution gap without claiming agents ran.

Delegate parts with accepted prerequisites, observable outputs and independently checkable results. Keep dependent stages in order. Launch independent work together only when writes, fixtures, services and credentials cannot conflict. A worker count does not prove parallel safety. For a trivial task, overlapping writes or an unresolved shared decision, keep the work together or settle the boundary first.

## Write self-contained briefs

Use [the brief template](references/delegation-brief.template.md) for each selected part. Carry the raw requirement, relevant accepted decisions, authoritative sources, allowed actions, owned outputs, forbidden scope, acceptance criteria and actual verification commands. Include just enough context to work without the author's conversation. Do not copy unrelated private records or credential values into briefs.

Allocate one writer per mutable artifact unless the project's supported integration mechanism establishes another safe contract. Include shared generators, lockfiles, databases and external systems in the ownership map. Select the coordinator for shared writes and integration where needed; do not impose that policy on a host that provides a different safe mechanism. Workers stop before choices or actions outside their authority and return the missing input.

## Check returns and integrate

For planning-only requests, check the briefs and readiness, then stop without launching workers. For execution, retain the actual worker/session identifiers, returned artifacts, failures and unresolved questions in the existing record. A requested spawn or wait is not a returned result.

Use [the report checks](references/report-review.checklist.md) before accepting a result or releasing dependent work. Read the actual diff or artifact and command evidence, not only the report. Check downstream values and consumers: a catalog loading successfully does not prove that the path it returns exists. Keep unavailable proof distinct from failure and from inapplicability.

Integrate accepted results in dependency order through the project's existing mechanism. Check shared contracts and run the affected combined checks; separate passing parts do not prove their interaction. Preserve unrelated work and valid evidence when a part fails, block its consumers, and retry only within the agreed bounds after correcting the cause or inputs.

Code, reusable instruction changes and delivery need the project's required independent assessment of the integrated candidate. Supply a fresh assessor the raw accepted requirements, fixed artifacts and check access without the authors' conversation or preferred verdict. An author cannot satisfy their own acceptance gate; unavailable required review leaves the result unreviewed. A returned assessment does not require an endless review-of-review chain.

## Return the actual state

Report the requested plan or reached execution state, ownership, accepted and blocked outputs, actual combined checks and exact remaining prerequisites. Distinguish planned, launched, returned, checked, integrated and accepted work. Never turn an agent's claim into a verified result or imply publication from local integration.

Continue with `verify-change` for missing acceptance proof, the owning implementation action for an authorized repair, or `ship-change` for authorized delivery. A plan-only request ends with the checked plan.
