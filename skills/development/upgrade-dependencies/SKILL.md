---
name: upgrade-dependencies
description: "Apply a scoped dependency upgrade, adapt affected code and configuration, and verify the resolved versions work together. Use for dependency changes, not selecting a replacement architecture or deploying it."
---

# Upgrade dependencies

Deliver the requested dependency change with a coherent resolution, necessary adaptations, and observed compatibility checks. An upgrade is justified by its goal, not by a newer version existing.

## Establish the constraint set

Read repository instructions, the upgrade goal, accepted scope, manifests, lockfiles, relevant configuration, and CI/runtime requirements. Record the baseline and dirty work; preserve unrelated changes. Identify the actual package manager and version, resolved direct/transitive dependencies, workspace relationships, and supported environments. Manifest ranges alone do not establish the installed version.

Inspect relevant engine, peer, plugin, module-format, native-build, and platform constraints before selecting a target. For a new project or template, distinguish adopting its existing compatible set from upgrading inherited dependencies; do not invent an installed or deployed baseline.

Use current primary release notes, migration guides, and advisories for the proposed change. Check that their affected versions, features, and runtime conditions apply to this resolution. Distinguish an advisory match from demonstrated exploitability. If evidence or a target remains unavailable, identify the decision or check it blocks rather than inventing compatibility.

## Apply a compatible increment

Choose the smallest coherent version set that meets the goal. Dependencies with shared compatibility constraints may need to move together; unrelated packages do not. Determine ordering from the actual dependency and runtime requirements, not a universal upgrade sequence. Resolve material scope changes before their dependent edits.

Load [compatibility checks](references/compatibility.checklist.md) when peers, workspaces, native modules, module loading, or security fixes affect the upgrade.

Use the established package manager and its lockfile workflow. Inspect relevant install/build hooks and run them in the intended local or controlled environment. Preserve lockfile integrity; investigate unexpected resolution churn. Do not hand-edit generated resolutions, delete the lockfile to hide conflicts, bypass peers with force flags, or run a blanket latest/fix-all operation as a substitute for a compatible change.

Trace affected callers, configuration, build tooling, and runtime entry points. Apply the required API/configuration adaptations within scope. A dependency's migration guide does not authorize unrelated feature changes, production data migration, or replacement of the application's platform.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.

## Independent evaluation

Before accepting the result, have a separate agent in fresh context challenge it against the accepted request, constraints, candidate artifacts, relevant raw sources, and check access. Omit the author’s conversation and preferred conclusions. Ask for counterexamples and observed proof, reconcile findings, and have affected results checked again after fixes. If independent review is unavailable, report the result as unreviewed and stop before acceptance.

## Verify the resolved result

Check manifest/lockfile consistency using the project's supported install verification. Run relevant type/build/tests and a representative path through the actual upgraded dependency. Exercise changed behavior and important failure cases; a passing typecheck or mocked test cannot establish module loading, native compatibility, or runtime semantics.

Tie evidence to the candidate revision and dirty diff, resolved versions, inputs, and tested environments. Compare relevant baseline behavior where it exists. Mark unavailable supported-environment checks and required failures as readiness gaps; do not claim all supported platforms work from one local run.

Report changed versions, adaptations, primary evidence, actual check outcomes, and remaining constraints. Update affected setup/version guidance in its authoritative location. When the goal requires a larger transition, pass the compatibility findings into migration planning. Independently review the verified candidate before accepting it; commit, publish, or deploy only when that delivery is authorized.
