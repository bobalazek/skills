# Data and integration conventions

Read the repository's existing boundaries before selecting patterns.

- Data access belongs to the owning boundary already used by the project; introduce a service/repository layer only when it solves an actual need.
- Document validation, authorization, ownership/tenancy, transaction boundaries, and failure behavior for state changes.
- Use the project's migration mechanism and versioning policy. State old/new compatibility, backfill and recovery needs for durable environments.
- Keep API contracts, error shapes, pagination, and version changes consistent with real consumers.
- For webhooks/jobs, establish authenticity, duplicate/retry behavior, ordering, idempotency, timeouts, and dead-letter/recovery ownership where relevant.
- Logs should explain meaningful failures without exposing credentials or unnecessary sensitive payloads.
- Checks should exercise observable contracts and realistic failure boundaries; internal mocks alone do not establish integration behavior.
