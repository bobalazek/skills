# Dependency compatibility

Select the boundaries affected by this upgrade. Record the observed constraint, affected consumers, proposed compatible set, and check that would establish it.

- Resolution and peers: inspect the lockfile's actual versions and dependency paths, workspace overrides, and peer/plugin requirements. A root manifest can conceal a second incompatible resolved copy. Recheck the resulting graph after installation.
- Runtime and module loading: check supported runtime versions, engine requirements, exports, module format, initialization, and bundler/server/client boundaries. Exercise the real import and affected call path in the supported execution mode; compiled types alone do not demonstrate it.
- Native dependencies: identify applicable operating system, CPU architecture, runtime ABI, compiler/system-library requirements, and shipped binary availability. Rebuilding successfully on the developer's machine does not establish compatibility with the deployment target.
- Configuration and lifecycle: inspect renamed options, defaults, generated output, install/build hooks, and framework/tooling integrations. Adapt real consumers and check setup from the project's recorded prerequisites. Do not run hooks against live services to obtain a green local check.
- Security-driven changes: verify the advisory's package identity, resolved vulnerable range, affected feature/runtime conditions, and fixed-version compatibility. A transitive override or replacement needs evidence that its consumers still work; hiding an advisory or suppressing resolution errors is not remediation.
- Evidence: preserve comparable inputs and relevant baseline behavior. Record the tested resolution and environments, executed commands and outcomes, and unsupported or unavailable checks. Retain required failures even when other checks pass.

If the target cannot satisfy a required peer, runtime, platform, or application constraint, report that blocker and the bounded alternative or investigation. Keep the unrelated dependency set unchanged.
