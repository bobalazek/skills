# Observe the running change

Use this when a criterion depends on an actual application, command, API, worker or installed package. Reuse valid observations; this procedure supplies runtime proof for the existing acceptance record, not another mandatory test suite.

## Choose an entry point and safe state

Read the documented startup/install/check command and applicable environment requirements. Identify the candidate artifact/configuration, the real entry point that consumes the change, and the expected visible or persisted outcome. A library import, source-level test or development build cannot establish a different installed entry point or packaged host.

Choose a run-owned profile, data directory, account or test service appropriate to the claim. For first-run, onboarding or install behavior, use the [first-run scenario matrix](first-run-scenarios.matrix.md). Inspect existing fixtures before creating any; preserve the owner's data and active sessions. Missing credentials or an unavailable platform remain a specific proof gap, not authority to discover secrets or substitute a demo silently.

Select a usable observation surface: command output and exit, HTTP response and readback, application logs/state, browser interaction, or a native app's authorized probe/automation. Use available project tools; no particular browser, desktop host or new framework is mandatory. Screenshots prove visual states; interactive, transport and persistence claims need their own observation.

## Exercise the claimed behavior

1. Start or invoke the documented entry point, recording relevant versions, configuration and initial state. Wait for the operation-specific readiness signal before proceeding; a process existing or a port opening may precede registration or dependency readiness.
2. Exercise the claimed path with representative inputs. Observe what the user receives and the state the system actually changes. Check a meaningful rejection or recovery path when it can invalidate the claim, using a safe fixture rather than breaking shared code or production.
3. For a browser journey, inspect page text/structure and perform the relevant interaction. Correlate its result with actual requests/status/payload and console/server logs where available. Record route, role, viewport and state for visual proof; a clean picture can hide a failed request.
4. Follow asynchronous work to the named terminal outcome. An accepted request, queued job or optimistic UI is intermediate evidence. Poll the specific operation or use an observed event/barrier with a deadline; keep timeout, failure and successful completion distinct. Before a dependent UI action, wait for its required rendered state, including same-route updates.
5. Read back the result through the relevant consumer or persisted state where the contract requires it. A successful write call does not prove the next session, packaged app or downstream worker can use the result. Check restart/reload or a neighboring consumer only when that boundary matters.
6. Inspect relevant logs from the tail and correlate errors with this run. Preserve failures and separate an observed result from a suspected cause. Exercise affected neighboring paths and supported configuration variants according to the change's blast radius.

## Check that the proof reaches the claim

A safe historical baseline, controlled invalid input or existing failing fixture can show a regression check discriminates the defect. Identify whether it reaches the intended behavior or fails during setup. Deliberately breaking the working app is unnecessary; unavailable negative proof is a stated limit rather than permission to damage data.

Keep observation layers separate. A mock can prove a local contract while leaving provider delivery unchecked; a browser screenshot can establish layout while leaving keyboard behavior unchecked. Inspect actual command/interaction results before reporting execution. If only supplied traces are available, attribute them and name the live observation still needed.

## Finish and preserve useful evidence

For each material criterion, retain the entry point/command, initial state, actual input, relevant output/status, terminal/readback observation, candidate/environment and pass/fail/not-checked result. Keep the actual failed attempts and changed conditions. A failed requirement needs its consequence, smallest next correction or missing prerequisite, and affected recheck.

Stop only processes, tabs and services started for this run. Remove run-owned fixtures through the documented cleanup after asynchronous work settles; leave owner data, existing services and unrelated state intact. Report incomplete cleanup or an unresolved operation with its owner and safe next action. Pass observations into the existing independent acceptance assessment; execution alone is not acceptance or proof of a returned review.
