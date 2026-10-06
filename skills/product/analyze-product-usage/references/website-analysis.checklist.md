# Website observation checks

Load for acquisition, landing-page behavior or search-performance questions. Use the package's existing measure and comparison contract; these checks address provider-specific traps rather than adding another optimization process.

## Match the measure to the question

Check the installed provider/version and current definitions before interpreting bounce, duration, referrers or conversions. Verify which events indicate a click, submission attempt or confirmed outcome. A successful one-page visit may leave little measured activity; missing observations cannot establish failure.

For example, [Plausible's definitions](https://plausible.io/docs/metrics-definitions), checked 2026-10-06, count single-page visits as zero-second visit duration. Interactive events affect bounce; Direct/None includes links without referrers, including messaging and email. High bounce, zero duration and Direct traffic together still do not prove bots. Keep visit duration distinct from time on page. Seek independent evidence before proposing traffic exclusions, and preserve the filter change when comparing periods.

## Separate search performance from coverage

Search Console performance rows describe reported search activity, not a complete index inventory. Check [aggregation, omitted queries and row limits](https://support.google.com/webmasters/answer/17011259?hl=en). Sparse rows cannot establish that pages are absent from the index. For a named URL, use [URL Inspection](https://support.google.com/webmasters/answer/9012289?hl=en), distinguishing the recorded indexed version from a live indexability test. A reachable sitemap or permissive robots file alone proves neither indexing nor ranking.

Low CTR at an average position is a reason to inspect the actual query, page, device, locale, window and search presentation. It does not diagnose the title. Deep positions do not prove that content is too short. Compare like conditions and inspect the page against the visitor task before proposing content or technical changes.

## Turn evidence into a bounded next action

Keep each observation, competing explanation, proposed action and verification window separate. Prioritize a demonstrated broken path by actual user impact; do not rank copy edits above technical repairs by default. A justified no-change conclusion is useful.

Carry a supported content gap to `plan-landing-page` or an agreed wording change to `write-website-copy`; use `diagnose-issue` for a known failure. Check availability or describe the equivalent action. Changing copy, instrumentation or traffic filters still needs its own implementation scope. When copy and acquisition mix changed together, report the observed counts and limits rather than attributing the difference to copy. Use the existing experiment owner if a defensible causal comparison is needed.
