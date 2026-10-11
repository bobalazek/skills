# Workflows

Pick the result you need below. Each category has its own short guide with request examples, skill handoffs and completion checks. Categories organize responsibilities; a real workflow can cross them, such as content → interface design → engineering.

For a software feature, expand the [idea-to-delivery preview](../README.md#from-idea-to-delivery). For a narrated explainer, see the [script-to-video diagram](workflows/media.md#from-script-to-checked-video).

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
- [Verify, review and deliver](workflows/engineering.md#verify-review-and-deliver): candidate → observed proof → addressed findings → authorized delivery.

## Product — decide what is worth building

<a id="evaluate-a-product-opportunity"></a>
<a id="measure-product-outcomes"></a>

- [Evaluate an opportunity](workflows/product.md#evaluate-a-product-opportunity): idea and available evidence → invest, revise, test or stop.
- [Measure outcomes](workflows/product.md#measure-product-outcomes): accepted measures and observations → supported findings; an unrun experiment remains a plan.

## UI/UX — shape the user experience

<a id="specify-and-design"></a>

- [Design a flow or interface](workflows/ui-ux.md#specify-and-design): accepted behavior → user flow → screen structure → visual detail → rendered assessment. Start at the missing result.
- [Plan a website across content and design](workflows/content.md#plan-and-write-a-product-page): page purpose and facts → reconciled copy and layout → implementation when requested.

## Content — write and improve the words

<a id="plan-and-write-a-product-page"></a>
<a id="draft-and-review-writing"></a>

- [Plan and write a page](workflows/content.md#plan-and-write-a-product-page): offer, audience and evidence → content needs → actual copy.
- [Draft or review writing](workflows/content.md#draft-and-review-writing): source notes or existing prose → requested outline, draft, findings or revision.

## Media — produce a usable artifact

<a id="produce-media"></a>
<a id="create-motion-video"></a>

- [Develop a video](workflows/media.md#develop-the-video): audience/goal and ideas → script with hook, storyline and payoff → storyboard → the needed production method.
- [Make a narrated product video](workflows/media.md#from-script-to-checked-video): script and shot list → checked narration and captures → timed animation → inspected export.
- [Edit footage, make slides or produce other media](workflows/media.md#produce-media): choose the owner from the requested artifact; reuse accepted assets and finish at the requested fidelity.

## Productivity — choose and coordinate work

<a id="explore-and-route"></a>
<a id="where-clarification-happens"></a>
<a id="coordinate-local-project-work"></a>

- [Find the next useful action](workflows/productivity.md#explore-and-route): current state and desired result → one starting skill and its needed inputs.
- [Coordinate accepted work](workflows/productivity.md#coordinate-local-project-work): agreed tasks and proof → ready work, owners and explicit blockers.

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
