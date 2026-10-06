---
name: upgrade-dependencies
description: "Apply a scoped dependency upgrade, adapt affected code and configuration, and verify the resolved versions work together. Use for dependency changes, not selecting a replacement architecture or deploying it."
---

# Upgrade dependencies

## Use this skill

Use this to apply a scoped dependency upgrade with coherent resolution, required code/configuration adaptations and observed compatibility checks. Reuse the accepted upgrade goal, target constraints and applicable baseline evidence. A newer version existing is not itself an upgrade requirement.

Use `find-improvements` to select maintenance work, `design-architecture` to choose a replacement platform, or `plan-migration` for a broader accepted transition. An upgrade does not authorize unrelated features, production data migration or deployment.

## Establish the constraint set

Read repository instructions, the upgrade goal, accepted scope, manifests, lockfiles, relevant configuration, and CI/runtime requirements. Record the baseline and dirty work; preserve unrelated changes. Identify the actual package manager and version, resolved direct/transitive dependencies, workspace relationships, and supported environments. Manifest ranges alone do not establish the installed version.

Inspect relevant engine, peer, plugin, module-format, native-build, and platform constraints before selecting a target. For a new project or template, distinguish adopting its existing compatible set from upgrading inherited dependencies; do not invent an installed or deployed baseline.

Use current primary release notes, migration guides, and advisories for the proposed change. Check that their affected versions, features, and runtime conditions apply to this resolution. Distinguish an advisory match from demonstrated exploitability. If evidence or a target remains unavailable, identify the decision or check it blocks rather than inventing compatibility.

## Apply a compatible increment

Choose the smallest coherent version set that meets the goal. Dependencies with shared compatibility constraints may need to move together; unrelated packages do not. Determine ordering from the actual dependency and runtime requirements, not a universal upgrade sequence. Resolve material scope changes before their dependent edits.

Load [compatibility checks](references/compatibility.checklist.md) when peers, workspaces, native modules, module loading, or security fixes affect the upgrade.

Use the established package manager and its lockfile workflow. Inspect relevant install/build hooks and run them in the intended local or controlled environment. Preserve lockfile integrity; investigate unexpected resolution churn. Do not hand-edit generated resolutions, delete the lockfile to hide conflicts, bypass peers with force flags, or run a blanket latest/fix-all operation as a substitute for a compatible change.

Trace affected callers, configuration, build tooling, and runtime entry points. Apply the required API/configuration adaptations within scope. A dependency's migration guide does not authorize unrelated feature changes, production data migration, or replacement of the application's platform.

## Verify the resolved result

Check manifest/lockfile consistency using the project's supported install verification. Run relevant type/build/tests and a representative path through the actual upgraded dependency. Exercise changed behavior and important failure cases; a passing typecheck or mocked test cannot establish module loading, native compatibility, or runtime semantics.

Tie evidence to the candidate revision and dirty diff, resolved versions, inputs, and tested environments. Compare relevant baseline behavior where it exists. Mark unavailable supported-environment checks and required failures as readiness gaps; do not claim all supported platforms work from one local run.

Before acceptance, have a separate agent in fresh context challenge the resolved candidate against the raw upgrade goal, compatibility constraints, primary migration/advisory sources and observed checks, without the author's conversation or preferred conclusion. Ask it to inspect real consumers and untested supported environments. Reconcile findings and independently recheck affected paths after fixes. Retain the returned reviewer/session identity, evaluated revision/resolution, findings and coverage; an attempted delegation is not an assessment. If unavailable, label the result unreviewed and stop before acceptance. Required human approval remains separate.

## Return the result

Match the requested audience, tone and depth, then project conventions. Report the upgrade purpose, changed resolved versions, adaptations, primary sources, actual check outcomes and remaining constraints. Update affected setup/version guidance in its existing authorized home. For authorized PR work, include relevant baseline/candidate proof and independent findings, refreshing affected evidence after edits.

## Next steps

Use `plan-migration` when an accepted upgrade requires a larger compatibility transition, `design-architecture` when the target itself needs reconsideration, `diagnose-issue` for an unexplained check failure, or `verify-change` for missing supported-environment proof. Use `ship-change` only when the candidate is ready and commit, publication or deployment is authorized. Pass the resolved versions, compatibility findings, candidate revision and unmet prerequisite. Check skill availability and describe the plain action when absent. Stop at the requested upgrade result or continue already-authorized ready work without expanding the dependency set or restarting accepted choices.
