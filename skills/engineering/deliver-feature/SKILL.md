---
name: deliver-feature
description: "Take an agreed feature idea to a merged, verified change: specify, shape, plan, build, prove and land, with a short batch of questions between stages and an approval point before merge or deploy. Use when two or more of those steps are still missing; a single step has its own skill."
---

# Deliver feature

## Use this skill

Use this when an agreed feature still needs two or more of: a specification, a technical shape, a plan, the code, its proof and review, and delivery. Start at the first stage without an accepted result and run the rest in order. Each stage runs its child skill, and that skill's own instructions, checks and independent-review requirements govern the stage. This skill holds only the order, the questions between stages and the approval points; it never copies or replaces a child's method.

A single missing step belongs to its own skill: `write-spec`, `design-architecture`, `plan-phases`, `implement-change`, `verify-change`, `review-code` or `ship-change`. An idea whose direction is still open belongs to `brainstorm-ideas` or `challenge-proposal` first.

## Stages

| Stage | Child skill | Ask before moving on |
| --- | --- | --- |
| 1. Specify | `write-spec`, including its domain model when vocabulary or rules are disputed | Are the behavior and acceptance criteria accepted? |
| 2. Shape | `design-architecture`; skip when the change fits the existing structure and conventions. A feature with new screens also uses `map-user-flows` or `design-interface` here | Is the technical choice accepted? |
| 3. Plan | `plan-phases` with its task breakdown; a bounded change may need only the tasks | What ships first, and in what order? |
| 4. Build | `implement-change` per ready task or agreed ready batch | Nothing beyond the child skill's own checks |
| 5. Prove | `verify-change`, then `review-code` (and `review-interface` for a changed rendered surface); route findings through `address-review-feedback` | Is every finding resolved, or explicitly accepted by its owner? |
| 6. Land | `ship-change` | **Approval point:** merge and deploy only with explicit authority, following the repository's rules |

Reuse accepted artifacts and valid evidence instead of rerunning a completed stage. When a later stage exposes a defect in an earlier result, such as a missing criterion or an infeasible design, return to the owning stage, revise only what changed, and recheck the affected downstream results.

If a child skill is unavailable, perform its plain action at the depth the stage needs, label it as done without that skill, and keep the same stopping rules. Do not skip a stage silently.

## Questions between stages

Before each stage that lists a question above, derive what the accepted artifacts, repository and prior answers already establish. Then ask in a single batch of up to four questions:

- Ask only what changes the next stage's result; skip questions the evidence answers.
- Offer the derived answer first for each question, so the owner can confirm instead of compose.
- A blocking question, one whose answer would change scope, acceptance or an irreversible choice, waits: do not run dependent work on a guessed answer.
- A non-blocking question, or one the owner explicitly delegates, can proceed on the derived answer as a labelled assumption carried into the next stage and its result, never a silent decision.

Stop at a stage when the owner rejects its result, and say what would restart it. A recommendation, provisional default or unanswered question is not acceptance, and acceptance of one stage does not authorize the approval point.

## Approval point

Merging, deploying, publishing or any other consequential external action waits for explicit authority covering that action. Existing authorization in the request or repository rules counts; do not ask again for what is already granted. Present the candidate revision, verification, review disposition and recovery limits at the approval point. Without authority, stop with a prepared, reviewed candidate and name the action that is waiting.

## Return

After each stage, give its accepted result, the answers and assumptions that shaped it, and the next stage. At the end, give the spec, the design choice or why it was skipped, the plan, the change, its verification and review disposition, and what landed where, with the revision and any remaining gaps. A failed required check or unreviewed result is reported as such; it does not become delivered.
