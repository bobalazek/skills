# Human-step continuation

Use when a handoff transfers work paused on a human interaction or an uncertain external effect. This records what the recipient needs; it does not perform the human step, resume the underlying workflow or grant new authority.

## Keep a safe checkpoint

Retain the task and target, reason for the pause, actual observed state and its time, relevant URL or operation ID, expected observable result, owner and expiry if known. Include the original action authority and still-required approvals, with references rather than credential values. Reuse an existing checkpoint instead of opening duplicate records for one unresolved step.

For login, MFA or a similar access step, the person enters credentials and codes through the service's intended interface. Do not copy secrets, recovery codes or session material into a transfer record. Include only the context needed to continue safely.

## State the recipient's next check

| Situation in the latest evidence | Continuation instruction |
| --- | --- |
| The person says “done,” but the expected state is not observed | Reinspect the actual target; keep completion unverified until its state supports the claim |
| The challenge is still present | Keep the same unresolved checkpoint and explain the visible state; avoid repeated clicks or a second parallel attempt |
| Session or operation context expired | Reestablish the necessary access within authority, then inspect the last verified platform state before any write |
| A write may already have happened | Inspect its operation/object ID and target state before retrying; an acknowledgement is not a terminal receipt |
| The expected state is confirmed | Record the observation and continue only the already-authorized next action, preserving any actual remaining gate |
| An unfamiliar consent, billing or other consequential choice appears | Identify what waits and the responsible decision; do not invent an answer or broaden authority |

An unchanged action already approved does not need a new blanket approval merely because the session changed. A new target, effect or material choice still needs the authority that it actually requires. Unknown state is a verification gap, not permission to replay.

## Describe receipts without inventing them

Carry the action, target, relevant external ID or public URL, last observed state, time/source and approval reference where needed. Distinguish requested, acknowledged, pending and confirmed outcomes. A button click, successful request or a person's report alone cannot establish the platform's final result.

Leave workflow continuation to the responsible coordinator using the accepted definition and current state. A transfer-only request ends with a usable handoff and its precise remaining observation or decision.
