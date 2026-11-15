# Audit commands and safe observation

Select existing tools from the project's documented commands and installed versions. Inspect their actual options before use. An example command is not authority to install a tool, contact a service or change state.

## Source and dependency checks

- Identify the reviewed revision, changed files, applicable configuration and real dependency manager/lockfile. Use existing check-only scripts or installed scanners within the requested scope.
- Scope secret searches to relevant source, built output and history when warranted. Prefer redacted or file-name-only output and inspect it before sharing. Distinguish public identifiers, synthetic fixtures and templates from actual credential exposure; do not print suspected values to prove a hit.
- Record scanner/advisory provenance, date, package/version, configuration and reachable behavior. A dependency audit can need network access; unavailable registry/advisory data is a gap. Do not upgrade packages or accept scanner severity as the project's release policy.
- If actual exposure is established, report a redacted location and containment/rotation owner. Removing a file does not establish revocation or removal from history; do not rotate credentials without authority.

## Runtime checks

Use authorized environments and synthetic identities/data. For permitted passive HTTP observation, inspect the actual response/status/body, redirect chain and applicable headers on the relevant route and error path. Do not infer certificate renewal, upload enforcement or an application's permissions from a single response.

Before active scanners, exploit/injection or cross-account probes, establish the permitted target, environment, identities, techniques, rate/effect limits and stop conditions from existing authority. Stay within them. Without that scope, keep the source/configuration assessment and name the unperformed check; missing test permission is not a vulnerability.

Observe actual terminal/persisted results where relevant, retaining failed attempts and redacting outputs. A mock can test a local contract; it cannot establish the real provider or deployed boundary. Never run real payments, messages, destructive data operations or broad credential discovery to fill an audit checklist.
