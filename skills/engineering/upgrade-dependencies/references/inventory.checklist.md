# Repository-wide dependency inventory

Use for “update all dependencies” or a repository with independently managed projects. Record the inventory in the project's existing work record; do not create a dependency-management framework for a one-off upgrade.

- [ ] Identify the root workspace membership and exclusions. Locate tracked nested manifests and lockfiles, including scripts, templates, archived apps and other language ecosystems. A root install or audit covers only its own graph.
- [ ] Assign each graph its package manager, runtime, owner, verification commands and deployment/native targets. Distinguish an active standalone project from a stale secondary lockfile before changing either.
- [ ] Check dependency-directory ownership, including symlinks. Preserve unrelated local edits and installed environments belonging to another checkout.
- [ ] Capture resolved versions and baseline failures for affected consumers. Save full command output outside tracked source unless the project maintains such evidence. Do not replace dependencies while baseline checks are still using that tree.
- [ ] Group candidates by actual coupling: framework/adapters, renderer/types, ORM/database client, test runner/bundler, native runtime/packager. Inspect registry engines and peers alongside official migration guidance before selecting exact stable targets.
- [ ] For each graph, record updated packages, deliberately held versions and reasons, remaining advisories, executed checks and unsupported targets. Distinguish security remediation from optional major-version migration.

A compact record is enough:

| Dependency graph | Manager/runtime | Candidate group | Required proof | Result or remaining gap |
| --- | --- | --- | --- | --- |
| Root workspace | From checked config | Exact versions and reason | Install consistency, consumers, runtime | Observed status |
| Standalone project | Its own lockfile | Its own compatible set | Its documented checks | Observed status |

Do not aggregate a partial inventory into “everything works.” A missing tool, unavailable platform or interrupted check remains an explicit gap.
