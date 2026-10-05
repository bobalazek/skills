# AI architecture

Use when the product or internal workflow actually needs model behavior. Establish the user outcome and a non-AI or simpler baseline first. A model call, retrieval step or fixed workflow may satisfy the need without autonomous agents.

## Choose the execution shape

| Shape | Use when | Contract to settle |
| --- | --- | --- |
| Single bounded call | One request has a checkable output | Input limits, output schema, validation and fallback |
| Sequential workflow | Known steps depend on earlier results | Inputs/outputs, gates, retry/resume and partial failure |
| Routing | Distinct request classes have different owners | Routing evidence, uncertainty, unsupported requests and fallback |
| Parallel workers | Ready subtasks have independent results | Isolated writes/state, concurrency limits and reconciliation |
| Coordinator and workers | Decomposition varies with the request | Delegation scope, tool authority, durable run state and integration checks |
| Generator and evaluator | Explicit criteria support useful revision | Independent evaluation, raw evidence, bounded iterations and unresolved findings |
| Autonomous agent | A dynamic action sequence is necessary | Tool permissions, stop conditions, budgets, approvals and recovery |

Compose only justified parts. Document the actual host/runtime capabilities. A workflow file or a `human_approval` label does not implement scheduling, isolation, persistence or an approval gate. Exercise the execution path to prove that missing approval or failed evaluation prevents the dependent side effect. Fresh context does not isolate shared files, services or credentials.

## Data, tools and memory

Trace model inputs, retrieved content, tool results and outputs through trust boundaries. Treat untrusted documents and tool output as data, not authority to change instructions. Enforce access and tenant filters in trusted code before retrieval or side effects; a prompt is not an authorization boundary. Validate structured output before using it in queries, commands or writes.

Specify provider/model selection against observed task quality, supported capabilities, privacy/retention terms, residency, rate limits, latency and cost. Verify current terms, compatibility and prices from primary sources. Prompts, tool contracts, retrieval configuration, model versions and evaluation data need traceable versions; do not assume changing a model preserves behavior.

For retrieval, identify source ownership, freshness, chunk/index update and deletion paths, permissions, provenance and behavior when no adequate evidence exists. For persistent memory, define purpose, user/tenant scope, accepted versus inferred content, consent or other applicable data requirements, expiry, correction/deletion, access and retrieval rules. Keep temporary run state separate from durable knowledge. Never promote a model-generated claim to an accepted fact simply because it was stored or summarized; link evidence and revalidate stale claims.

Give tools the minimum applicable authority. Set time, token/spend, retry and iteration limits; define cancellation, idempotency, partial completion, escalation and rollback limits. Human approval must bind to the actual proposed action and parameters; changed scope invalidates stale approval. Keep secrets and unnecessary sensitive data out of prompts and traces.

## Evaluation and operation

Define acceptance before tuning: representative supported cases, edge/failure cases, prompt injection, forbidden actions, cross-tenant access, malformed output, unavailable providers and recovery. Use held-out examples where useful; distinguish deterministic checks, human judgments and model judgments. The evaluator gets raw criteria and candidate evidence without the author's preferred answer. A plausible answer or evaluator vote cannot dismiss a demonstrated unsafe action.

Compare the baseline and candidate under stated versions, data and workload. Record task success, failure types, latency distributions, total calls/tokens/cost including retries, and human intervention where relevant. Do not claim quality from one happy-path demo. Evaluate required non-AI behavior too.

Plan versioned rollout, meaningful logs/traces with redaction, feedback ownership, cost/latency/error alerts, fallback or kill switch, and a re-evaluation trigger for model, prompt, tool or data changes. Demonstrate the relevant gate, degraded path and recovery in an authorized environment. Unavailable proof remains a limitation, not production readiness.
