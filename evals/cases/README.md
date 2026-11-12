# Read-only case inventory

Each JSON file contains an array of requests, minimal input files and evaluator expectations for skills in its owning domain. The original 75 case IDs and contents are retained from the former `evals/cases.json` catalog; new recipes are added by domain.

| Domain | Recipes | Distinct owning skills |
| --- | --- | --- |
| [brand](brand.json) | 4 | 2 |
| [content](content.json) | 9 | 3 |
| [engineering](engineering.json) | 49 | 18 |
| [media](media.json) | 22 | 7 |
| [product](product.json) | 6 | 6 |
| [productivity](productivity.json) | 15 | 4 |
| [ui-ux](ui-ux.json) | 3 | 2 |

There are 108 read-only recipes across 42 owning skills. 9 use implicit requests to investigate routing/activation; the other 99 explicitly invoke the owning skill when present. These are inventory counts, not executions, passed criteria or percentages of behavioral coverage. Other skills may appear as installed siblings or writable-scenario owners.

The runner loads all top-level JSON arrays by default and selects cases by ID; selection order remains the requested order. Adding an owner/domain does not require changing a hardcoded registry. Global duplicate IDs and invalid inputs fail before model execution. `bun test` also discovers every JSON scenario in `evals/workflows/`, including the video handoff fixture.

Put a new recipe in the relevant domain file and retain known failure cases without requiring exact wording. Read [the execution procedure](../../docs/evaluation.md) and keep expected observations outside the executor's context. See [coverage](../coverage.md) for assessed history and its limits.
