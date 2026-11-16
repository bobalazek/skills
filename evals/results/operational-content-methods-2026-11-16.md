# Operational and content methods, 16 November 2026

These bounded trials assess migration, refactoring, performance, content strategy and writer briefing. They are not a collection-wide reliability score or proof of production readiness.

## Source and execution

The pre-change baseline is public commit `7f6fcce2aac30c9a9314143b990a9f0f18f1e057`, including the already-landed dependency playbooks. The initial candidate is `3df75499150519424e8e6c44751daf4f741c6c5b`. The async-contract clarification and affected recheck use `83b7912a159c05eaa3acab454f0ea8a3aafe7618`; other package bodies remain unchanged.

Eleven selected case IDs produced seventeen initial completed attempts: six engineering baseline/candidate pairs and five content candidate-only cases. One affected candidate recheck brings completed attempts to eighteen. A separate original content launch omitted native retention and was interrupted (runner SIGINT, child termination); its partial events remain retained without a completed result or native proof. The corrected five-case launch does not erase that setup failure.

Expected criteria stayed outside executor fixtures. All eighteen retained top-level native sessions report Codex CLI 0.169.0; inspected model contexts report `gpt-6.1-sol`. Native SQL outputs report SQLite 3.54.1, while the separate author preflight used SQLite 3.53.1. These contexts must not be silently treated as one engine/environment.

## Assessed outcomes

| Cases | Observed result and limits |
| --- | --- |
| `migration-backfill-checkpoint-writes`, `migration-index-engine-boundary` | Baseline and candidate identify skipped progress after rollback, stale overwrites, false count reconciliation, delayed consumers and lossy recovery. They separate SQLite observations from PostgreSQL documentation and withhold unsupported engine/production claims. |
| `improvement-configured-consumer-drift`, `improvement-complexity-relocation` | Both versions identify rule drift and cleanup failure while preserving dynamically configured consumers, tenant/audit boundaries and intentional variants. File size or movement alone supplies no improvement claim. |
| `performance-query-work-equivalence`, `performance-acknowledgement-terminal-cost` | Both versions reject unequal-work speedups, identifying changed tenant results, omitted empty parents and incomplete imports. Actual local SQL/async probes establish fixture behavior, not production latency/capacity. The original candidate overstatement and correction are retained below. |
| `content-strategy-inventory-evidence`, `content-strategy-unresolved-audience` | Candidate ties inventory treatments to supplied evidence, capacity and ownership; the unresolved consequential audience choice asks and waits rather than inventing a direction. |
| `content-brief-accepted-claims`, `content-brief-unresolved-reader` | Candidate reuses accepted context, excludes unsupported claims and produces a bounded assignment; the unresolved reader decision remains open. Actual implicit brief routing is observed in this supplied case only. |
| `content-outline-neighbor-route` | Candidate loads the existing blog owner for an outline without forcing a new strategy or writer brief. This is one observed route, not reliable automatic activation across prompts. |

Separate assessment inspected raw requests, withheld criteria, actual commands, native outputs and returned child reports. Six engineering pairs show task-semantic parity, not demonstrated superiority. New conditional-resource reads are candidate-specific; absent baseline resources are not graded as identical read passes. Content cases have no public baseline comparison.

## Retained correction

The original async candidate correctly rejects the missing import but additionally calls completion before acknowledgement a failed requirement. The brief requires completed/readable imports; baseline reply timing alone does not establish a synchronous API contract.

The backend resource now distinguishes accepted asynchronous replies from terminal-work correctness without inventing a synchronous constraint. The same prompt and fixtures were replayed at the corrected source with an added withheld precision criterion. Actual execution and the returned independent assessment distinguish early acknowledgement from the missing import, closing the overstatement for this fixture. The old baseline was not regraded against the new criterion, and the correction supplies no comparative-gain claim.

## Evidence limits

Full package snapshots, installed owning packages, fixture integrity and retained child-session hashes were checked. Actual engineering child traces and both content child assessments are retained privately with their parents. Global host skill metadata remains visible; fixture-local reads establish provenance without a clean-host isolation claim. Raw native records may include private host configuration and are not public attachments.

Local SQLite, Python and asyncio execution do not establish PostgreSQL locking/index behavior, real browser/frontend behavior, representative production performance, external provider effects, reliability across hosts/models or general activation quality. Installation/discovery and release checks are separate evidence.
