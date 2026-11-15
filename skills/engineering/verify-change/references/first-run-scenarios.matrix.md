# First-run scenarios

Use this for claims about a new install, onboarding, empty data or incomplete setup. Select states that can disprove the claimed result; do not reset an owner's profile or require every row for an unrelated change.

## Establish the fixture

Locate the documented configuration/data/profile override or existing test harness. Record which state is fresh and which is supplied/seeded. Run required setup or migrations through the actual supported entry point when authorized; opening an empty directory alone does not establish a successful new install. Keep synthetic fixture resources distinct from owner accounts, databases and services. Missing setup access remains not checked.

| State | Exercise and observe | Failure the state can expose |
| --- | --- | --- |
| No saved records/settings | Open the actual entry point; inspect the empty result and a usable next action before importing a seed. | Assumed first item, missing defaults, null settings, crashes hidden by demo records. |
| First creation/import/connection | Complete one approved synthetic action, observe its terminal result and read it through the normal consumer. | Optimistic success, missing registration, invalid default ownership or persistence that the next view cannot read. |
| Partial setup | Leave optional values empty or a required external connection unconfigured; inspect the stated next step and available recovery. | Printed null/undefined, misleading readiness, a dependency error presented as completed setup. |
| Minimum supported role | Use an approved low-privilege fixture and attempt its permitted path plus a relevant denial. | Admin-only seed data hides a blocked new user or a bypassed permission boundary. |
| One item / realistic populated state | Repeat the affected path with one record, then representative content or volume when relevant. | Empty-only fix breaks item display, stale counts, long content or normal returning users. |
| Reload/restart / retry | Reopen through the relevant supported consumer or retry after a controlled recoverable failure. | In-memory-only success, lost defaults, repeated side effects or setup that must be repeated unexpectedly. |

Observe labels and instructions as well as absence of crashes. A first screen that loads but cannot complete the first permitted action does not establish onboarding success. Distinguish deliberately unsupported operations from unavailable required setup.

## Record and clean up

Tie each selected state to the original criterion, candidate/configuration, command or interaction and actual result. Preserve failed observations and explain which states remain untested. Reuse seeded proof only for the states it actually covers. Finish or cancel run-owned asynchronous work before cleanup, then remove only fixtures created for this run and retain the evidence required for recheck.
