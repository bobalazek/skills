# Read-only case inventory

Each JSON file contains an array of requests, minimal input files and evaluator expectations for skills in its owning domain. Case IDs and contents from the former `evals/cases.json` catalog are retained for current skills; recipes for skills removed in v0.11.0 remain in the v0.10.0 tag. New recipes are added by domain.

| Domain | Recipes | Distinct owning skills |
| --- | --- | --- |
| [engineering](engineering.json) | 76 | 24 |
| [productivity](productivity.json) | 24 | 7 |
| [ui-ux](ui-ux.json) | 5 | 2 |

There are 105 read-only recipes across 33 owning skills. 9 use implicit requests to investigate routing/activation; the other 96 explicitly invoke the owning skill when present. These are inventory counts, not executions, passed criteria or percentages of behavioral coverage. Other skills may appear as installed siblings or writable-scenario owners.

The runner loads all top-level JSON arrays by default and selects cases by ID; selection order remains the requested order. Adding an owner/domain does not require changing a hardcoded registry. Global duplicate IDs and invalid inputs fail before model execution. `bun test` also discovers every JSON scenario in `evals/workflows/`.

Put a new recipe in the relevant domain file and retain known failure cases without requiring exact wording. Read [the execution procedure](../../docs/evaluation.md) and keep expected observations outside the executor's context. See [coverage](../coverage.md) for assessed history and its limits.
