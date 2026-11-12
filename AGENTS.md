# Working on this skill collection

Read [docs/authoring.md](docs/authoring.md) before creating or changing skills or maintainer tooling.

For every skill addition, removal, rename or behavior/boundary change, follow [Keep discovery synchronized](docs/authoring.md#keep-discovery-synchronized). Update the affected catalogs, router/map, README counts, workflow examples, neighboring handoffs and evaluation inventory in the same change. Check the named files even when the result is that no update is needed; do not rewrite historical release or evaluation records as current claims.

Run `bun run check` and `bun test` before considering the change complete. Structural checks establish inventory consistency, not correct routing or useful behavior; apply the guide's scoped trials and independent assessment requirements.
