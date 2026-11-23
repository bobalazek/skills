---
name: explain-codebase
description: "Explain how a repository, module, code path or selected PR/diff works using current source, data flow, before/after behavior, verification evidence and concrete entry points, tailored to the reader, or onboard a contributor to an unfamiliar repository with a verified setup baseline and a first-change route. Use to answer how code or a change works, not to review its correctness."
---

# Explain codebase

## Use this skill

Explain a named code path or orient a reader to the system using current source. Reuse supplied questions, entry points and accepted context, checking them against the current revision. Two modes extend this: [onboard a contributor](#onboard-a-contributor) when someone must start work in an unfamiliar repository, and [explain a change](#explain-a-change) for a selected PR or diff, including its reviewer-facing description. Use `document-project` when durable project documentation is the requested result, `review-code` for correctness and `verify-change` for missing behavior proof.

## Trace the behavior

Read repository entry instructions and relevant docs, then verify them against the code. Use an existing project index where required. For a focused request, start from the named route, symbol, or feature and trace meaningful callers, data/state changes, side effects, failure behavior, and external boundaries.

For orientation, identify purpose, runnable entry points, modules, domain vocabulary, data ownership, integrations, delivery path, and the conventions the next contributor actually needs. Avoid dumping a file tree or describing every dependency. A useful map connects responsibilities to locations and one representative execution path.

For system or architecture orientation, use [the system-map checks](references/system-map.checklist.md). Include relevant infrastructure/hosting, internal processes, local or managed data/file services, external APIs/AI, MCP/tool services and material runtime/build or delivery dependencies, with a scoped deployment/relationship diagram and a request/data-flow view where useful. Separate source-supported behavior and declared infrastructure from observed deployments, proposals and unknowns. A focused symbol question needs only its affected path.

When structure or conventions are part of the question, show how a representative feature, class or function maps to its folder, filename, imports and tests. Identify accepted rules and deliberate exceptions before describing where an addition would belong; missing rules remain questions, not permission to redesign the repository.

Inspect history or decisions when the user asks why a design exists. Distinguish recorded rationale, observed implementation, and inference. Current code determines current behavior; repeated patterns do not automatically establish contributor rules.

## Explain at the right level

Lead with what the system or flow does. Walk a concrete input through the important boundaries and show where state changes. Link specific files/symbols. Use a small Mermaid sequence or flow diagram when it clarifies the path, with names that match the code.

Describe relevant conventions and limits without turning the explanation into an unsolicited audit. For missing behavior or contradictory docs, name the evidence and unknown rather than inventing the intended design. Known bugs can be noted, but diagnosing or repairing them is a separate requested result.

## Onboard a contributor

Load for this mode: [onboarding outline](references/onboarding.template.md).

Use this mode when a contributor needs to start work in an unfamiliar repository. Produce an orientation, a checked feedback path or exact setup blocker, and a bounded first-change route. Reuse current contributor documentation and known setup evidence; verify its applicability instead of repeating completed onboarding. Onboarding does not authorize an unsolicited audit or rewrite; `prepare-repo-for-agents` owns improving agent entry points.

### Inspect from the entry points

Read repository instructions and README, then the relevant manifests, lockfiles, runtime/configuration, tests, CI, and deployment references. Use the repository's required index/navigation tools. Identify the selected application or package in a larger workspace; do not survey unrelated projects.

Map the purpose, runtime entry points, important flows, module/state ownership, integrations, conventions and delivery path needed for the adoption goal. Trace representative code instead of trusting a directory name. Locate authoritative standards, decisions and memory indexes; distinguish current code, documented intent, observed patterns, exceptions and unknown rationale. History can explain a recorded decision, not unrecorded motives.

### Establish a feedback path

Before setup or dependency repair, inspect documented commands, relevant lifecycle/Git hooks and shared dependency locations, especially in worktrees. A command or checkout operation can trigger installation or affect another workspace; establish the actual write scope before running it. Do not reset data, replace configuration, fetch secrets or contact production merely to make a check green.

Run the safe relevant local path within the requested scope and project setup rules. A read-only request can inspect check definitions and prerequisites without executing setup; mark those commands as unrun rather than verified.

Record each important command as verified, failed, or not run with its prerequisite. Preserve unrelated work and pre-existing failures. Where setup is blocked, provide the precise missing input and a useful read-only orientation without claiming a working environment.

### Make the next change approachable

Load [the onboarding outline](references/onboarding.template.md) when a durable orientation is requested. Trace a representative feature's folder/file/test placement, class or module boundaries, symbol-to-filename naming, imports, reuse, data access, errors and dependency choices. Identify the owning files, consumers, applicable standards and verification path for a first bounded change. Keep accepted policy separate from merely observed patterns, and repair documentation only within the authorized scope.

Prioritize adoption blockers and preservation risks. Static source inspection can explain an API/data flow but cannot establish production performance or integrity.

Onboarding is done when the contributor can locate owning code and authoritative conventions, follow the important flow, and run the verified feedback path or see its exact blocker. Keep the inspected revision and scope visible. A durable orientation or first-change route a contributor will act on is a shared artifact: it needs the independent assessment in [Verify and report](#verify-and-report) before acceptance. Update useful durable facts in existing authorized contributor/knowledge locations instead of creating competing summaries.

## Explain a change

Load for this mode: [default PR template](references/pr-description.template.md) and [worked PR examples](references/pr-examples.playbook.md).

Use this mode to explain a selected PR/diff or write its reviewer-facing description from the fixed comparison, accepted purpose and existing evidence. Reuse valid checks and reviews. The explanation is communication: it does not imply correctness approval.

### Establish the comparison

Identify the PR/diff, base and head revision, supplied description, linked requirements, and relevant accepted decisions. Inspect the actual comparison and affected callers. PR text can state intent; it does not prove implementation behavior. A commit can prove a change without establishing its motivation.

### Describe the result

Group changes by behavior and responsibility rather than listing every file. Show a concrete before/after example where useful. Explain data/contract changes, compatibility or migration concerns, and which supported surfaces are affected. Keep internal implementation detail only where it helps a reviewer understand the consequence.

For a broad or coupled diff, explain whether it is one coherent reviewable outcome and identify sensible splits by responsibility, prerequisites and risk. For substantial cross-layer work without accepted local rules, default to compatible database/schema changes, shared contracts/types, backend behavior and frontend/client adoption, with later cleanup where needed. Skip absent layers and keep a small vertical fix or inseparable stages together; explain the dependency and compatibility reason. Name each proposed increment's checks, old/new compatibility, merge/deploy order and remaining integration criteria; distinguish independently reviewable from independently deployable. Keep coupled work together when splitting would leave broken states, and do not impose a line-count limit or restructure code from explanation authority.

Give a short before/after control-flow explanation when the mechanism matters: where the user or system enters, the changed condition or decision, calls and state changes, then the visible result or failure. Choose the smallest useful view: bullets, pseudocode/diff, a contract or type sketch, a shallow responsibility tree, or a call/component diagram. Include file names only when they clarify ownership or review order, rather than inventorying the patch. For a tiny change, an exact relevant diff excerpt can show it directly; do not paste a large patch or let the snippet replace the consequence. Identify shared callers beyond the edited file when they inherit the behavior.

Follow the requested audience, tone and depth, then the project's PR template and writing conventions. Use a specific title describing the actual change, not an internal agent process. Keep the description concise while covering the required concerns in the applicable template; expand for a consequential mechanism or requested walkthrough. Include why only when established by requirements or recorded decisions. Link detailed design/ADRs rather than copying them. Explain unfamiliar terms, keep exact identifiers where they aid inspection, and omit conversational history and unsupported praise.

### Evidence

When the explanation needs substantive prose cleanup, cut filler and repetition against the fixed diff, draft and evidence. Preserve risk, reversibility and verification gaps; editorial polish cannot upgrade a result or replace correctness review.

Include the checks that actually ran and what they establish, for the actual candidate. For visible changes, include labeled screenshots of relevant states where available; for performance or data claims, show measured before/after values with units and comparable conditions. For other changes, concise observed results or a verified CI/artifact link may be sufficient. Label missing baseline, stale evidence, failed checks, and uninspected behavior. Distinguish author-stated rationale, demonstrated behavior, and unanswered questions. Do not manufacture a benefit, metric, or rejected alternative.

When asked to write a PR description, lead with the problem and resulting behavior, then relevant verification and limitations. Embed or link useful evidence in the PR body using verified locations accessible to its intended reviewers. Redact sensitive content before an authorized upload; a local path is not an attachment. If a useful upload is unavailable, summarize the observed result or reproduction steps; mention only a material verification gap, not the existence or location of local files. Preserve the project's template and unrelated author content. Posting or updating the description follows the user's actual authorization.

Keep internal traceability separate from the description. Preserve the assessment and source identity in the working record; omit local paths, document hashes, agent/session identifiers, model details and review ceremony from human-facing text unless the user explicitly asks for them. Summarize actionable findings, their resolution and material untested behavior. A relevant commit, CI link or public comparison can identify the changed code without reproducing internal bookkeeping.

### Risk and reversibility

Include risk and reversibility at the depth the change needs: the credible worst failure, affected users/data/consumers, how it would be detected, and the recovery action with its conditions and evidence. Distinguish reverting code from undoing accepted writes or external effects. State whether recovery is demonstrated, conditional, irreversible for some effects, or unverified; name the point after which the old behavior or data cannot be restored. A short sentence can cover a stateless presentation change, while a destructive migration needs its data-loss limits, recovery owner and observed rehearsal or explicit proof gap. Do not infer low risk from a small diff or reversibility from the file type, a feature flag, a down migration, or the presence of a backup.

For a change that can materially affect resource use, include expected CPU/memory, latency, database/connection/IO, queue backlog or cost impact. Label measurements, estimates and unknowns, with a useful threshold or missing decision rather than invented capacity guarantees. For metered third-party/AI calls, serverless execution, cloud builds/runtime or storage/logging/egress, state the expected usage and cost basis, relevant rate/concurrency/retry/spending controls and runaway-cost failure path. An alert or client timeout alone does not establish an enforced spending cap.

State the blast radius in concrete terms: affected roles or tenants, entry points, shared components/services and data or external recipients as relevant. Explain what contains the impact and what evidence supports that boundary; unknown reach stays unknown. When concurrency is material, summarize the effective transaction isolation or consistency guarantee and its failure/locking/retry implications from the reviewed evidence. Keep that separate from tenant isolation and reviewer independence. A claim that a flag, transaction or deployment isolates effects needs proof of the actual scope.

### Merge prerequisites and rollout

State the checks, approvals, prerequisite PRs/contracts and environment or data conditions that must be satisfied before merge. Distinguish passed, pending, blocked and not applicable; do not treat a planned check as completed or an agent review as human approval. For a stack, show the accepted merge order and any separate deployment order.

Describe how the change reaches its consumers: migration/backfill, shared contract, backend and client ordering where applicable; exposure controls only when actually used; post-rollout observations and the condition for stopping or recovering. A merged PR is not a deployed or verified rollout. Identify unperformed rollout or recovery checks and their consequence. For delayed or scheduled effects, state the activation trigger/time, observation owner, signal/baseline, window and next checkpoint. Confidence remains limited until the relevant run or event has actually been observed; use `ship-change` for the delivery procedure and `configure-monitoring` for missing signal/alert setup when available. A small documentation change can explain applicability in one sentence instead of omitting these concerns.

### Description shape

Follow the project's PR template. Otherwise cover the following, keeping each part concise and grounded in the actual change. Brevity must not remove verification, merge prerequisites, rollout or recovery. For a small change, a one-line applicability reason is enough where a concern does not apply.

When no project template is available, read and use the [default PR template](references/pr-description.template.md). It owns the required sections and their prompts; do not substitute a shorter outline that drops substantive concerns. For a concrete scenario, read the relevant [worked PR examples](references/pr-examples.playbook.md): docs, UI, database migration, overnight work, new AI/API integrations or dated activation. They illustrate the template rather than define a second policy.

Keep the independent assessment and source traceability available in the working record. The PR should expose the substantive findings, confidence limits and useful proof, without copying private logs, machine-specific paths or unrelated review metadata. Keep related code, tests and documentation together; splitting a coherent change solely to satisfy an outline makes review harder.

The change explanation is done when it matches the fixed comparison, established intent and verification evidence. Return the requested explanation or confirm the authorized description update, with actual publication state and evidence gaps.

## Verify and report

Check that the explanation matches inspected source and the reader can locate the entry point, owning boundary, and appropriate feedback command. State unverified runtime claims and the inspected revision where it matters. Match the requested audience/depth and project format; link canonical material rather than creating another summary. Do not mutate code or create onboarding documents unless requested.

For a low-impact advisory answer or wording-only draft, including a change explanation, verify the relevant sources and constraints directly; no delegation or separate review record is needed. Use the independent assessment below when the user or project requires it, when accepting a consequential decision, or when publishing or updating a durable shared artifact such as a contributor orientation or posted PR description. This exception does not waive code, security, release or deployment gates. A larger word count alone does not require a deeper workflow. Never claim independent review without an actual returned assessment.

When required, a separate agent in fresh context must challenge the explanation using the reader's request, candidate explanation, raw source, diff/requirements/evidence and check access. Omit the author's conversation and preferred conclusions. For a change explanation, prefer a different available model where practical and authorized; an explicit cross-model requirement left unmet blocks acceptance. Retain the returned assessment with reviewer/session identity, host-reported model (or unknown), evaluated artifact and revision (base/head for a change), findings and coverage. Resolve supported findings and obtain affected rechecks after fixes. Without a returned independent assessment, report unreviewed and stop before acceptance. Required human approval remains separate.

For authorized PRs, include relevant source/behavior evidence, independent findings and gaps at creation; refresh proof affected by changes.

## Next steps

Carry the inspected entry points and unresolved question to `diagnose-issue` for a failure, `implement-change` for a ready first task, `review-code` only for an outstanding correctness assessment, `verify-change` for missing proof, `challenge-proposal` for unresolved consequential intent, `define-project-conventions` for disputed or missing rules, `prepare-repo-for-agents` for broken agent entry points, `find-improvements` for requested improvement discovery, or `write-spec` for desired behavior differing from the baseline. Pass the source revision, conventions, owning files, check evidence and unmet setup prerequisite. Use the plain action if its skill is unavailable. An explanation can finish the request without starting those workflows; do not merge, push, or publish merely because a description is ready.
