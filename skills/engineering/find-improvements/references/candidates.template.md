# Improvement candidates

Use the existing backlog or review's adjacent-opportunities section. Record the scope, goal, inspected revision, evidence sources, and uninspected surfaces once.

| Candidate | Current evidence and cost | Proposed treatment | Dependencies and preservation risks | Proof needed | Disposition |
| --- | --- | --- | --- | --- | --- |
| Concrete change or investigation | Locations, observed failure/friction, affected users/callers | A simpler form, bounded repair, guard, or experiment | Contracts/data to preserve; relevant existing decision or work item | Observable success and meaningful regressions | Ready for selection / investigate / defer / duplicate / no change |

Keep existing task IDs and link a duplicate to its owner. A TODO can be stale or intentional; a clone match can be harmless repetition; a suspected bottleneck needs measurement. Note why a strong-looking lead was rejected when that prevents repeated investigation.

For a whole-codebase pass, identify sampled and high-risk areas; do not imply exhaustive coverage. For a feature, include its consumers and state transitions. For a data-layer pass, distinguish application/schema inspection from executed database checks, and carry migration or recovery constraints into the recommendation.

Close with the highest-value next action and its prerequisites. A discovery list becomes executable tasks only after the relevant scope and decisions are accepted.
