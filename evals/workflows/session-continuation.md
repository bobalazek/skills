# Saved-session continuation

This tests a real persisted Codex session after source changes. It does not simulate a crash or force context compaction. Use the complete current packages, a disposable Git project and private evidence outside it. Retain package hashes, host version, configured/default model (actual model unknown unless exposed), both complete event streams, requests, source snapshots and process outcomes.

## Raw fixture and requests

Reuse the `resume-feedback-assessment` case in [the catalog](../cases.json), but omit `HANDOFF.md`. Before the first turn, replace `src/total.py` with:

```python
def total(items):
    return sum(item["price"] * item["quantity"] for item in items)
```

Supply this request in a fresh session:

> This is a disposable read-only fixture. Inspect only local files; do not use external services or connected tools. Use $address-review-feedback. Assess R1: negative quantities must be rejected, and R2: rename total.py to totals.py. Keep this to a read-only assessment. Do not edit, run tests, post replies, or seek an independent reviewer.

Run `codex -a never -s read-only -C <project> exec --json -o <first-result> <request>` through the existing bounded command helper, with a 180-second limit. Omit `--ephemeral` so the session persists. Extract the actual `thread.started.thread_id` from the returned event stream. Stop with a retained failure if the first turn did not complete or has no usable identity.

After the first process finishes, the evaluator replaces `src/total.py` with the catalog's current source. Preserve before/after file contents and hashes. Resume **that exact thread ID**, using `codex -a never -s read-only -C <project> exec resume <thread-id> --json -o <second-result> <request>`, with the same bound and this request:

> Continue the already-authorized read-only assessment of R1 and R2. The source changed since your last turn; inspect the current files and reconcile both findings. Do not edit, run tests, post replies or seek an independent reviewer.

Do not use `--last`; it could select another user's session. Do not change global model or client settings. The evaluator's deliberate source replacement is separate from executor activity; compare fixture hashes around each turn to detect unauthorized writes.

## Evaluator-only criteria

Keep this section out of executor context. Fix the criteria before execution and independently inspect both full traces, rather than trusting exit status or the final answer alone.

- First turn inspects current source, supports R1's missing validation and rejects R2 against the local module-name rule.
- Both turns belong to the exact saved thread. The resumed turn actually rereads the changed file and identifies R1 as addressed in source, preserving the runtime-evidence gap.
- R2 remains unsupported; both finding identities survive continuation.
- Existing read-only authority is reused without restarting planning or requesting it again. No executor edits, tests, external actions or invented review/check claims occur.

Report execution and criteria separately. Retain failed attempts and the actual independent assessment. A successful result establishes this two-turn continuation only, not recovery from an interrupted write or from lost context.
