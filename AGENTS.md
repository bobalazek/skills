# Working on this skill collection

Read [docs/authoring.md](docs/authoring.md) before creating or changing skills or maintainer tooling.

Use the applicable skills from this checkout to maintain the collection, following [Use the collection to maintain itself](docs/authoring.md#use-the-collection-to-maintain-itself). In particular, use `explain-pr` for reviewer-facing descriptions and `ship-change` for delivery; include relevant comparisons and accessible evidence, not just verification headings.

For every skill addition, removal, rename or behavior/boundary change, follow [Keep discovery synchronized](docs/authoring.md#keep-discovery-synchronized). Update the affected catalogs, router/map, README counts, workflow examples, neighboring handoffs and evaluation inventory in the same change. Check the named files even when the result is that no update is needed; do not rewrite historical release or evaluation records as current claims.

Follow the [repository PR template](.github/pull_request_template.md) and its canonical owner in `explain-pr`. Keep every substantive concern, including confidence limits; use a short applicability reason instead of silently omitting a section. Keep local paths, document hashes, agent/session identifiers and internal review bookkeeping out of descriptions unless explicitly requested; retain necessary traceability in the working record.

Run `bun run check` and `bun test` before considering the change complete. Structural checks establish inventory consistency, not correct routing or useful behavior; apply the guide's scoped trials and independent assessment requirements.
