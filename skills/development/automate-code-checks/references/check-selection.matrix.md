# Select and calibrate a code check

| Recurring problem | First mechanism to inspect | Important limit |
| --- | --- | --- |
| Formatting or supported syntax convention | Existing formatter/linter configuration | Avoid a second tool enforcing conflicting rules |
| Invalid internal state or incompatible callers | Existing compiler options and domain types | External/untrusted inputs still need runtime validation |
| Wrong dependency direction or forbidden import | Existing import/module-boundary checks | Account for aliases, generated imports, and supported dynamic loading |
| Invalid data or request shape | Existing schema/contract validation at the owning boundary | Presence of a schema is not proof every entry path uses it |
| Repeated behavioral regression | Focused test through the real public boundary | Do not encode only today's implementation details or omit meaningful failure cases |
| Stable risky code pattern unsupported by current rules | A small analyzer using the existing parser/rule API | Text search can produce false positives for comments, strings, aliases, or intentional variants |
| Copied business logic that drifts | Consolidated ownership plus relevant behavior checks | Clone detection is an investigation signal; repeated syntax alone does not justify shared abstractions |

An automated guard need not be a static rule. Pick the mechanism that can distinguish the failure from legitimate code at acceptable maintenance cost.

Before wiring enforcement, exercise:

- A representative forbidden case that fails for the intended reason.
- Valid nearby cases, including supported exceptions, that remain accepted.
- Relevant boundaries or variants that previously escaped detection.
- The actual repository command, file scope, and CI invocation.
- Any fixer twice, with behavior and unrelated-file checks; the second run should add no changes.

For existing violations, identify which are fixed now, which remain visible debt, and how new violations are prevented. Suppressions need a narrow scope, reason, and owner or revisit condition. Do not use a broad ignore or looser compiler setting merely to turn the result green.

Report the accepted invariant, selected mechanism, observed detection results, adoption limits, and maintenance location. Keep evidence in the existing PR/task rather than creating a separate policy document for each rule.
