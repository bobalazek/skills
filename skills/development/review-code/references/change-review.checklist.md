# Change review

Start from the fixed diff and its intended behavior, then follow affected consumers.

- Does the change satisfy the accepted criteria and preserve excluded behavior?
- Do shared callers, public APIs, schemas, permissions, and old/new deployed versions remain compatible?
- Do relevant failure, boundary, retry, concurrency, and partial-success paths behave correctly?
- Are validation and authorization enforced at the actual trust boundary rather than only the UI?
- Do checks demonstrate the changed scenario, including meaningful rejection or regression cases? Is their evidence tied to this revision?
- Does the change introduce unnecessary complexity, hidden operating cost, sensitive logging, or an unverified dependency?
- Does equivalent behavior already have an owner? Do copied business rules drift across callers, or are apparent duplicates legitimate variants? Show the affected locations and simpler ownership before proposing an extraction.
- Do protective checks run on the actual route, worker, or data-access path, including alternate entry points? Merely adding a guard or test file does not establish coverage.
- Are rollout/recovery and behavior/setup documentation sufficient for the affected surface?

Confirm a concrete issue before reporting it. Do not expand into unrelated legacy cleanup.
