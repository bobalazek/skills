# Run record

Use the existing runtime/task format first. This template supplies continuation facts when no record exists; writing it does not provide durable engine state, atomic claims or enforcement.

```markdown
## Identity and scope
- Accepted definition and version:
- Run/task ID, when provided by the host:
- Requested outcome and stopping point:
- Original authority and required approval boundaries:
- Source workspace/revision and relevant input versions:
- Execution mode and available runtime capabilities:

## Work and evidence
| Task/phase | Executor and owned outputs | Prerequisite artifact/version | Actual state | Evidence, checks and required acceptance | Next condition |
| --- | --- | --- | --- | --- | --- |
| Stable source ID | Owner/session and scope | Accepted input or exact missing result | Observed status, not an inferred pass | Artifact/revision, command/interaction outcome, returned review or gap | Ready action or blocker |

## Pending effects and recovery
- Operation/target IDs and last observed state:
- Safe human checkpoint and expected-after state, if needed:
- Outstanding decisions, owners and affected consumers:
- Retry/stop limits, recovery authority and unfinished cleanup:

## Reached result
- Accepted final outputs and their verification:
- Partial, failed, cancelled or unperformed work:
- Delivery state and exact next ready action:
```

Keep credentials, session tokens and unrelated source records out. Preserve actual receipts and failure history in the authorized location. Move durable project facts or delivered artifacts to their canonical home only when the accepted workflow calls for it.
