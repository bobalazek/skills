# Workflows

Pick the result you need below. Each category has its own short guide with request examples, skill handoffs and completion checks. The [complete skill map](../skills/productivity/choose-skill/references/skill-map.matrix.md) lists every package and its nearest boundary; these guides illustrate how to use them. Categories organize responsibilities; a real workflow can cross them, such as interface design → engineering.

For a software feature, expand the [idea-to-delivery preview](../README.md#from-idea-to-delivery).

<a id="routes-by-situation"></a>
<a id="choose-the-result-you-need"></a>

## Engineering — build, fix and deliver software

<a id="understand-and-prepare-a-project"></a>
<a id="plan-and-change-software"></a>
<a id="verify-review-and-deliver"></a>
<a id="review-and-recheck"></a>
<a id="specs-tasks-and-prs"></a>

- [Prepare a project](workflows/engineering.md#understand-and-prepare-a-project): codebase or agreed foundation → usable context, conventions and checks.
- [Plan or implement a change](workflows/engineering.md#plan-and-change-software): accepted behavior or a ready ticket → working change.
- [Deliver an agreed feature end to end](../skills/engineering/deliver-feature/SKILL.md): agreed feature missing two or more stages → spec, design, plan, change, proof and review → approved delivery.
- [Verify, review and deliver](workflows/engineering.md#verify-review-and-deliver): candidate → observed proof → addressed findings → authorized delivery.
- [Audit a live website](../skills/engineering/audit-website/SKILL.md): named site, purpose and permitted access → observed journeys and quality findings → prioritized action plan.

## UI/UX — shape the user experience

<a id="specify-and-design"></a>

- [Design a flow or interface](workflows/ui-ux.md#specify-and-design): accepted behavior → user flow → screen structure → visual detail → rendered assessment. Start at the missing result.

## Productivity — choose and coordinate work

<a id="explore-and-route"></a>
<a id="where-clarification-happens"></a>
<a id="coordinate-local-project-work"></a>

- [Find the next useful action](workflows/productivity.md#explore-and-route): current state and desired result → one starting skill and its needed inputs.
- [Coordinate accepted work](workflows/productivity.md#coordinate-local-project-work): agreed tasks and proof → ready work, owners and explicit blockers.
- [Split work across agents](../skills/productivity/delegate-to-agents/SKILL.md): ready, separable tasks → self-contained briefs and checked integration while you keep the lead.

## Use a route

Invoke the installed skill with your task, existing artifacts and stopping point. Reuse completed stages; a ready task can go directly to its owner. If the starting point is unclear:

```text
$choose-skill We have a reviewed spec but no implementation plan. Which skill should come next, and what input does it need? Recommend only.
```

A requested draft can finish as a draft. Continue through later stages only when they are useful, their prerequisites hold and the work is authorized. The [domain catalogs](../README.md#browse-by-domain) list every skill; these routes show how to combine them.

<a id="reading-the-graphs"></a>

**Diagram key:** double-bordered boxes are invokable skills; rounded boxes are inputs, work or results; diamonds are decisions; frames group stages. Skill-route arrows show possible handoffs. Dependency examples identify joins that wait for every required input; a fork alone does not make work safe to run in parallel.

## Coordinate across stages

<a id="sequential-and-parallel-work"></a>
<a id="parallel-project-phases"></a>
<a id="parallel-tasks-within-a-phase"></a>
<a id="context-and-next-actions"></a>
<a id="artifacts-and-side-effects"></a>

Read [shared coordination](workflows/coordination.md) when work spans phases, parallel tasks or sessions. It covers readiness, independent evaluation, retained evidence, context handoffs and authority. The host supplies actual workers, isolation and execution; a diagram does not implement them.

## Removed domains

<a id="evaluate-a-product-opportunity"></a>
<a id="measure-product-outcomes"></a>
<a id="plan-and-write-a-product-page"></a>
<a id="draft-and-review-writing"></a>
<a id="produce-media"></a>
<a id="create-motion-video"></a>

v0.11.0 narrowed the collection to engineering, productivity and UI/UX. The brand, content, media and product skills, plus ten productivity and UI/UX skills, are no longer distributed here (see the [migration note](authoring.md#status-and-deprecation)); [v0.10.0](https://github.com/bobalazek/skills/tree/v0.10.0) is the last release that contains them, and installing a newer version does not remove copies you already have. For those requests, `choose-skill` names the missing result and describes the plain action.
