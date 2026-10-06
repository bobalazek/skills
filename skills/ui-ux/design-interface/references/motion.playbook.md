# Motion decisions and checks

Use when motion is requested or a transition needs to communicate a state or relationship. A static interface can already satisfy the task; do not add an effect simply because a component can animate.

## Decide what the motion contributes

Inspect existing transitions and tokens, target runtime, input methods and use frequency. Name the user-visible job: acknowledge an action, explain a change, connect locations, or deliver an expressive moment the brief requests. Check whether a static cue would communicate it adequately. Frequent use makes delay and repeated movement more costly, but does not create a universal ban on a particular input method.

For each changed transition, record a compact contract:

| Trigger and starting state | Meaning and destination state | Repetition or interruption | Reduced-motion and runtime fallback |
| --- | --- | --- | --- |
| The actual action/event and affected element | What changes, its visible feedback and the usable final state | What a second action, reversal or navigation must do | How the same result remains understandable when motion is reduced or unavailable |

For example, reversing a details panel mid-opening should lead coherently to the latest requested state. It should not wait for an obsolete sequence, restart from a visibly wrong pose, or leave hidden controls focusable. Determine the accepted focus behavior separately from the visual effect.

## Choose and implement the effect

Reuse the product's motion vocabulary and installed tools. A CSS transition may cover a simple state change; use runtime animation controls or existing library support when sequencing, gestures or retargeting require them. A native surface uses its own supported primitives. Check current platform support and fallback before relying on an API. Do not install a dependency for an effect the current stack already handles.

Choose properties, origin, path, easing and duration to make the change understandable without delaying the task. Anchored elements should retain a clear relationship with their trigger. Test proposed timing at the actual travel distance, content size and use frequency; fixed duration tables or one curve cannot decide every interaction. Keep reading and operational controls stable unless their movement serves the task.

Handle the latest requested state during interruption, exit and cleanup. Ensure content and actions remain usable if an animation is skipped, unsupported or fails. Do not couple a business result to a cosmetic completion callback without a reliable non-motion path. Avoid a permanently hidden initial state when its reveal depends on a script that may fail.

Honor reduced-motion preferences with a considered alternative: remove, reduce or replace nonessential movement while retaining understandable state and feedback. Static feedback is valid. Check keyboard and touch paths as well as pointer input; hover effects must not become the only cue or leave a touch interaction stuck. For loops or autoplay, provide the control and stopping behavior the supported platform and applicable accessibility requirements demand.

Prefer properties that avoid unnecessary layout and paint, but measure the actual effect under representative load. Transforms alone do not prove smoothness. Bound expensive filters, large animated regions and persistent work; inspect their rendering cost before retaining them.

## Verify the transition

Exercise normal use, rapid repeated activation, reversal and leaving the surface during motion. Check final visual state, logical state, focus, available controls and cleanup after each. Test reduced motion and supported alternate input. Use actual devices when gesture behavior matters; an unavailable device remains an explicit coverage gap.

Slow playback or step through frames where needed to inspect jumps, incorrect origins or coordinated properties; then repeat at normal speed to judge responsiveness. Keep useful before/after video when timing or interruption is the claim, with the revision and input conditions. A still image cannot establish motion quality. For a performance claim, retain the relevant runtime trace or measured result and its workload/device conditions.

A design-only handoff records this contract and untested behavior. An implemented result needs observed transition checks and the entrypoint's independent review; plausible code or a successful build is insufficient evidence of feel, accessibility or performance.

## Sources behind the checks

The purpose, repetition, interruption and playback checks draw on Emil Kowalski's [animation procedure](https://github.com/emilkowalski/skills/blob/e8a175de22ae1e49370fc144c1f3bb9aeedf988d/skills/animate/SKILL.md) and [review reference](https://github.com/emilkowalski/skills/blob/e8a175de22ae1e49370fc144c1f3bb9aeedf988d/skills/review-animations/STANDARDS.md). This package uses original wording and contextual decisions rather than importing fixed frequency thresholds, curves or blanket property rules.

For web behavior, [MDN's reduced-motion reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) explains the preference; [W3C animation-from-interactions guidance](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) explains disabling nonessential triggered movement; [web.dev's animation performance guide](https://web.dev/articles/animations-guide) explains rendering costs and DevTools checks. Sources checked 2026-10-06; verify current runtime details when choosing implementation APIs.
