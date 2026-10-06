# Product

This domain owns evidence for product decisions: whether an idea merits further investment, what feedback and usage support, how people currently solve the problem, and how success will be measured. Its five packages apply to new products and changes to existing ones.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Discovery | Validate an idea | [validate-product-idea](../../skills/product/validate-product-idea/SKILL.md) | A supported next investment decision or a bounded validation plan with explicit evidence gaps |
| User evidence | Synthesize feedback | [analyze-user-feedback](../../skills/product/analyze-user-feedback/SKILL.md) | Deduplicated user needs, source links, contrary evidence and supported counts with coverage limits |
| Market context | Compare alternatives | [analyze-competitors](../../skills/product/analyze-competitors/SKILL.md) | A dated comparison of direct competitors, indirect alternatives and the status quo for a named decision |
| Measurement | Define success | [define-product-metrics](../../skills/product/define-product-metrics/SKILL.md) | A decision-linked measurement contract with definitions, source requirements, owners and quality checks |
| Measurement | Analyze behavior | [analyze-product-usage](../../skills/product/analyze-product-usage/SKILL.md) | Reproducible usage findings with eligible denominators, comparable cohorts and explicit evidence limits |

## Boundaries and use

`brainstorm-ideas` develops directions; `challenge-proposal` resolves consequential choices. `validate-product-idea` evaluates the evidence for a proposed commitment. Agreement, competitor presence and hypothetical enthusiasm cannot establish demand. A plan without observations remains a plan.

`analyze-user-feedback` works from existing records, preserving the distinction between reported experiences, needs and requested solutions. It does not prioritize a roadmap. `analyze-competitors` compares alternatives for a product decision; `research-topic` answers a bounded factual question, while `design-architecture` owns stack and technical choices. `test-usability` studies task performance with participants, which answers a different question from willingness to buy or switch.

For a new product, examine the intended users, current workarounds and riskiest premise before committing to a build. For an existing product, use observed behavior and relevant feedback to assess the proposed change while preserving working contracts. An understood bug or accepted feature does not need a new discovery cycle.

`define-product-metrics` decides what to measure and how to interpret it. `analyze-product-usage` uses existing observations to answer a behavior question, preserving those definitions. A new product can prepare a measurement contract before data exists; its baseline remains unknown. An existing product can analyze directly when its definitions and data suffice. An instrumentation gap can become an accepted `implement-change` task; service-health detection and alert routes belong to `configure-monitoring`.

Use the missing result directly. Once the audience, job and decision are settled, feedback synthesis and competitor research can run independently when their sources and workspaces allow it. Reconcile their assumptions before a decision that depends on both. Neither is a mandatory prerequisite when relevant evidence already exists. See the [product routes and graph](../workflows.md#evaluate-a-product-opportunity).

Accepted evidence can inform `prioritize-work` when candidates, goals and capacity exist, or `write-spec` when behavior needs defining. Keep source IDs and limits through those handoffs; neither a finding nor a recommendation authorizes implementation, outreach or spending.

## Resources and verification

Use each package's output fields and relevant references in the existing project artifact. Conditional resources cover validation tests, feedback coding, competitor comparisons and usage analysis; avoid another summary or dashboard when the current record suffices.

Check source traceability, dates, identity and count reconciliation, comparison conditions, counterevidence and the decision's actual scope. Use a returned independent assessment from fresh context before acceptance. Agent review can challenge the analysis; it cannot replace missing user observations. Keep personal data and restricted research in approved storage and share only evidence suitable for the audience.

For usage findings, also check event meaning, collection coverage, cohort maturity and denominator eligibility. Preserve metric versions and breaks in comparability. An observed association or before/after change alone does not establish causation.
