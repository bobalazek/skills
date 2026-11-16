# Sweep for evidenced improvements

Use for a repository, feature, data-layer or targeted-concern sweep. The output is a bounded candidate list with useful rejected leads and coverage, not an automatic repair queue.

## Map the paths worth inspecting

Start with the stated friction, accepted decisions, backlog and applicable contributor rules. Pick consequential entry points and walk through their callers, data and checks. Identify sampled areas, configured/dynamic consumers and operating evidence you cannot access. Use the project's existing commands in check-only mode where available; do not install scanners or rewrite files as an unrequested side effect.

For a feature, follow one accepted change or failure through its owners. For a data layer, include the actual writers, queries, constraints, migrations and delayed consumers. For a wider sweep, use observed incidents/change friction to choose depth rather than claiming exhaustive review.

## Collect and challenge leads

| Area | Gather | Challenge before retaining a candidate |
| --- | --- | --- |
| Conventions and boundaries | Current rules, maintained neighboring examples, dependency direction and actual changes. | Is this a local violation with a navigation/change hazard, or merely another valid idiom? Missing consequential rules need a decision, not silent adoption. |
| Repeated rules and scattered edits | Caller list, comparison of behavior, related change history and missed updates. | Is this one responsibility that should change together? Show the divergent output or repeated maintenance work; count and recentness alone are insufficient. |
| Apparently dead facilities | Static references, registry/config paths, CLI/plugin loaders, templates and external exports. | Exercise a representative configured consumer when safe. Search absence cannot prove dynamic code unused. |
| Debt and workarounds | TODO/FIXME, linked issue, current upstream/project state and existing accepted trade-offs. | Is the prerequisite still unmet, the workaround intentional, or the issue already fixed? A comment is an investigation lead. |
| Tests and recurring failures | Actual configured checks, a reproducer, fixtures and changed consumers. | Does the check reach the behavior? Prefer an existing guard for a repeatable rule over repeated manual review. |
| Runtime/operating cost | Available profiles, traces, queue/error records or reproducible contributor steps. | Can you locate the cost and bound its reach? Slow-looking code is a profiling lead, not demonstrated latency. |

Confirm meaningful leads through the current contract or a safe probe. Keep supplied incident records separate from new observations. Failed setup leaves that probe unperformed; it does not prove the suspected application defect.

## Trace complexity before proposing a refactor

Map what callers currently must know: ordering, setup, validation, errors, configuration, lifecycle and cleanup. Apply the deletion test: if the wrapper disappeared, would complexity disappear, move into callers, or lose a real contract? A one-caller wrapper may still own an important policy or external seam.

Describe the smallest useful boundary and its preserved behavior. Show which callers become simpler and which failure/compatibility cases need protection. Avoid extracting unrelated variants into one flag-heavy abstraction. A proposed seam needs a real variation or test boundary; more files or fewer lines alone do not show improvement.

## Rank and close the sweep

Group shared causes, locate existing tasks/decisions and classify retained items as demonstrated defect, supported opportunity or investigation. Use the project's priority scale and evidence-based impact/urgency; keep confidence, effort uncertainty, risk and prerequisites distinct. Do not multiply arbitrary scores into apparent precision.

Prefer the next useful change for the user's goal, including verification/review/adoption cost and affected critical consumers. An accepted trade-off, soon-retired component or unsupported benefit can justify defer/no change. Record enough of the rejected lead to prevent repeated speculative cleanup.

Return the existing candidate outline with locations, actual evidence, smaller proposed treatment, preservation checks, readiness and coverage. Discovery-only scope ends there. Actual repairs, tracker writes, production probes and broad restyling require their own authority.
