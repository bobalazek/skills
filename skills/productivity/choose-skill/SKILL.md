---
name: choose-skill
description: "Recommend the next skill for an engineering, productivity, or UI/UX task from the requested result and what is already settled."
---

# Choose skill

Return one best starting skill, why it fits, and the input it needs. Add a short sequence only when the request spans several distinct results. A clear, ready task can start directly with its owning skill.

Read the request and available project context. Establish the desired result and what already exists: an idea, accepted requirements, a ready task, a failing behavior, or a candidate awaiting review. For an existing project, preserve its useful conventions and behavior; for a new project, identify only the missing foundations. Ask a question only when its answer would change the route.

Use [the skill map](references/skill-map.matrix.md) to distinguish neighboring results. Match by outcome rather than keywords: explaining a PR and reviewing its correctness are different requests. Choose the next unsettled step, not the beginning of the lifecycle.

Check which recommended skills are actually available. Name a missing skill and its purpose without pretending to invoke it or installing it silently. Do not guess tool access, delegate implementation, or turn the recommendation into new project documents. Requests outside engineering, productivity, and UI/UX should be identified as outside this collection.

## Independent check

Before accepting the route, use a separate agent in fresh context to check the request, available inputs, and proposed skill against the map. It should challenge wrong starting points, overlapping ownership, and unnecessary steps without inheriting the author's conversation. If that check is unavailable, label the recommendation unreviewed.

Finish with the selected skill, why this is the next missing result, its expected output, accepted input to reuse, and any unmet prerequisite. For phased work, identify the selected ready phase/task rather than restarting discovery; show a short dependency sequence only when it helps distinguish ready work from later or parallel candidates. If the requested result is already complete and no follow-up is justified, say so. Continue into a skill only when execution is part of the user's request and the skill is available.

## Communicate the result

Match the requested audience, tone and depth, then the project's communication conventions. Finish with the outcome, purpose, relevant method, observed proof and exact gaps or next action; keep it concise unless more detail is requested or needed. Update relevant durable knowledge in its authorized authoritative home and link it instead of creating another summary document. For authorized PR work, include relevant observed proof, independent findings and remaining gaps when opening the PR; refresh affected evidence after edits.
