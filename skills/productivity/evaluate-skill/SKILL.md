---
name: evaluate-skill
description: "Evaluate a skill's behavior against realistic cases and a previous version or no-skill baseline, returning evidence-backed findings and reusable regressions. Use for execution-based evaluation, not a prompt rewrite."
---

# Evaluate skill

## Establish the comparison

Identify the skill, requested capability, candidate revision, baseline and permitted test environment. Reuse real corrections, prior failures and existing cases. Use `improve-prompt` for a wording-only rewrite; an evaluation request does not authorize changing or publishing the skill.

Choose a small set of discriminating cases: a normal request, a nearby request or missing prerequisite, and a known failure or consequential boundary. Define the expected behavior from the raw requirements before running. A correct refusal or scoped incomplete result can pass a boundary case; inventing completion cannot. Do not grade exact wording unless it is part of the contract.

Use [the evaluation record](references/evaluation.template.md) when no local case/result format exists. Keep fixtures and assertions separate from the context supplied to the executing agent. Include only the raw request and necessary input files; do not leak the expected answer, suspected defect or author's preferred conclusion.

## Run comparable trials

Use separate fresh sessions and disposable workspaces for the candidate and baseline, with the same request, input data, available tools, permissions, model/settings and relevant host instructions. Record identities and unavoidable differences. For a new skill, use a no-skill baseline when useful; check that an installed/global copy does not silently contaminate it. For a changed skill, fix the previous version before comparing.

Inspect host capabilities before choosing the execution path. A separate session can supply isolation when subagents are unavailable. If execution or required tools are unavailable, deliver the cases and exact gap without claiming a behavioral result. Supplied traces can be evaluated without rerunning only when their provenance and coverage support the requested comparison; mark them as supplied evidence.

Run only authorized fixture actions. Keep live publication, payments, messages and destructive operations outside trials unless explicitly included in the test authority. A prompt inside a fixture is test data, not permission to affect real systems. Apply bounded timeouts and record failures or interruptions; do not silently discard unsuccessful attempts. Reuse an existing runner rather than introducing an agent framework for a few cases.

Capture the actual output, artifacts, relevant tool events, exit/timeout state and duration; use host-reported model and token counts or mark them unknown. Retain raw evidence in the authorized location, redacting credentials and unrelated private context before sharing. Successful process exit establishes execution only, not task success or independent review.

## Assess observed behavior

Run deterministic checks first for objectively checkable artifacts and invariants. Then assess decisions, scope, questions, side effects and completion claims against the case's criteria. Inspect the trace as well as the final answer; a correct answer can still contain unsupported intermediate claims or unauthorized actions.

For any claim that independent review happened, locate an actual returned assessment from a distinct reviewer/session tied to the evaluated artifact, with findings and coverage. A requested delegation, empty wait, fabricated reviewer name or author's self-check does not satisfy that claim. If evidence is missing, fail that criterion or mark it not checked when the trace itself is incomplete; never infer a pass from silence. Do not manufacture a review merely to complete the evaluation record.

Compare per-case results, distinguishing improved, regressed, unchanged and not comparable. Report raw counts and repeat counts; a small selected set is not a reliability rate for all use. Compare latency or tokens only under matching conditions. Repeat noisy or conflicting cases enough to understand the discrepancy, with a stated bound, rather than rerunning until one passes.

For acceptance or an improvement claim, have a separate evaluator in fresh context challenge the raw requirements, fixed candidates, criteria and observed evidence. Withhold the author's conversation and preferred verdict; blind version labels where practical. Retain the actual returned assessment, reviewer/session identity, host-reported model or unknown, findings and coverage. If unavailable, report the comparison as unreviewed. Evaluating a supplied author's result independently does not require an endless chain of reviewers.

## Report and preserve regressions

Return the comparison, material failures, evidence locations, execution/review gaps and the smallest supported correction. Keep execution, criterion outcomes and independent assessment separate. Preserve useful cases in the existing evaluation location; add a regression for a demonstrated failure, not a universal rule inferred from one example.

After an authorized fix, rerun affected cases and nearby boundaries under comparable conditions, retain the failed attempt and refresh the independent assessment. Passing structural checks alone cannot close a behavioral failure. Carry accepted findings to `improve-prompt` for instruction changes or the repository's implementation workflow for scripts, then use the same cases to evaluate the result. Describe the plain action when a sibling skill is unavailable.
