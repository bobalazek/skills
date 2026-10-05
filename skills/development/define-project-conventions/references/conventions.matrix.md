# Convention matrix

| Topic | Decisions worth documenting | Useful evidence/check |
| --- | --- | --- |
| Structure and naming | Feature boundaries, shared-code criteria, imports/exports | Existing callers and representative additions |
| Types and validation | Compiler policy, external-data validation, nullable/error states | Type/config checks and trust-boundary scenarios |
| Data access | Ownership, transaction boundary, query placement, migrations | Existing data paths and migration verification |
| APIs/integrations | Contract shape, errors, auth, retries, idempotency | Requests, schemas, consumers, failure cases |
| UI | Component ownership, state, tokens, supported surfaces | Rendered examples, accessibility and behavior checks |
| Quality | Relevant tests, lint, formatting, build, review requirements | Commands actually present and runnable |
| Delivery | Branch/PR/release rules, compatibility, deprecation | Existing automation and repository policy |
| Documentation | Facts, decisions, learnings, standards, incident locations | Resolved links and a representative task walkthrough |

Do not require every topic for every project. Prefer a small rule with a local example over a copied general tutorial.
