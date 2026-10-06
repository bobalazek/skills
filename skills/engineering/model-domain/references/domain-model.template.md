# Domain model

| Term | Meaning | Ownership/lifecycle | Invariants | Evidence or open question |
| --- | --- | --- | --- | --- |
| A project-specific concept | Unambiguous business meaning | Who controls it and how it changes | Rules that must remain true | Scenario, requirement, code, or unresolved decision |

Describe relationships and valid transitions. Include representative scenarios that exercise rules, not just a happy-path diagram. Distinguish implementation names from domain concepts when they differ.

For an existing system, identify incompatible old meanings, affected consumers/data, and unresolved migration choices. Do not turn this artifact into an ORM schema or implementation task list before the business rules are agreed.
