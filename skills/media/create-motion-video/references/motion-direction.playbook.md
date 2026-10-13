# Code-driven motion direction

Use for short product films, UI morphs, character loops or music/SFX-led compositions. Keep the accepted story and renderer. [Code-driven rendering](code-rendering.playbook.md) owns capture, asset readiness and export verification; interactive UI motion belongs to interface design.

## Give motion an observable brief

Record only choices that affect this piece: viewer reward, destination size, duration and FPS, audio mode, loop behavior, actual assets, palette/type, and the requested preview or export. Translate words such as "premium" into visible decisions: material roughness, light placement, camera travel, readable holds or restrained overshoot. Keep reference-derived measurements separate from proposed values.

| Beat | Frame range | Main action and attention | Motion parameters | Entry, exit and handoff | Evidence to inspect |
| --- | --- | --- | --- | --- | --- |
| Product opens | Start inclusive, end exclusive | The lid opens; other objects hold | Anticipation frames, travel, curve/spring, settle time | Closed pose to open hold; next move starts after clearance | Frames around release, peak and settle |

Use a dominant action when competing movement makes the shot hard to read. Secondary movement can lag or travel less; choose the amount from the scene. For characters, specify anticipation, squash/stretch, limb overlap, follow-through and arcs where they communicate weight. Preserve approved proportions and identity. A camera move needs framing checks at its extremes, including the subject's overshoot.

Treat duration, stagger, damping and reading-time recipes as starting proposals. Reuse motion tokens when present, and validate readable holds in playback at destination size. Define unwanted defaults from the brief or observed output rather than imposing one palette or effect ban on every project.

## Evaluate motion at a named time

Use the existing frame contract and recorded graphics environment. A live preview may use `requestAnimationFrame`; capture must control time and await completed drawing. Use the renderer's frame-based spring or a verified analytic solution. Check the supported damping domain: a critical-damping formula at ratio 1 does not also describe every overdamped ratio above 1.

## Share event timing with sound

For music-led pieces or procedural SFX, keep visual events and audio cues in one project-owned timeline. Give events stable IDs; derive both consumers from the same event time, with an explicit offset when the direction needs one. Narration-led pieces retain measured recording cues as their timing authority, per [code-driven rendering](code-rendering.playbook.md#use-cheap-previews-first).

```json
{
  "fps": 30,
  "events": [
    {"id": "lid-open", "time_s": 1.0,
     "visual": {"action": "open", "duration_s": 0.4},
     "audio": {"cue": "click", "offset_s": 0.0}}
  ]
}
```

This is an illustrative creative record, not a renderer API or a mandated new schema. Use the existing project format when it already binds cues. A move of the event must invalidate its visual samples, sound cues and final mux evidence.

Compute each musical beat from absolute time: `time_s = beatIndex * 60 / BPM`, then `frame = round(time_s * fps)` for a frame-based consumer. At 128 BPM and 30 FPS, beat index 32 lands on frame 450; repeatedly adding a rounded 14-frame interval lands on 448. Validate event/cue order, duration and bounds against the agreed clip before rendering; an event outside the clip needs a resolved timing change, not silent wrapping or extension. Audio sample positions can use the unrounded time. Tempo, sound offsets and loudness follow the brief and destination; there is no universal one-frame delay or mandatory soundtrack.

## Check the loop boundary

For `N` frames at `fps`, render indices `0` through `N - 1`, sampled at `i / fps`; the loop period is `N / fps`. Check equivalent state at the period boundary and motion on both sides of the wrap. The last encoded frame and frame 0 are adjacent samples, so requiring identical images can introduce a held frame. Periodic camera, lighting and procedural variation need closure as well as object transforms; looping noise can be sampled along a closed path.

Play repeated cycles from the actual encode. Inspect a labeled strip around the wrap for a pause, jump or framing change; listen to the decoded audio for padding, clicks or truncated tails. Keep an uncompressed audio master when needed, but verify the requested delivery codec/player separately. GIF delays use hundredths of a second: at 24 FPS a repeating set of five 40 ms delays and one 50 ms delay totals 250 ms for six frames. Check the actual encoded delays and duration instead of assuming the exporter preserves the beat grid.

## Repair from observed frames

Begin with representative look frames and a short segment crossing a transition, then review contact sheets covering every material beat and boundary. Describe defects with frame/time, expected behavior, observed behavior and the affected source. Render neighboring frames before and after a timing repair. Onion skins can show motion spacing; a position/scale or speed plot can expose a dead stop that sparse stills miss.

Rerender the affected samples and dependent outputs after a change. If the same error repeats without a new diagnosis or measurable progress, stop that repair path, retain the last verified revision, and report the failing evidence within the agreed budget. Preserve the user's model and tool choices. A polish score needs a calibrated rubric and never replaces file/decode checks, full-speed playback, listening or required review.

For optional subframe motion blur, record shutter interval and sample count, keep scene evaluation deterministic at fractional times, and wrap samples at the loop boundary. Use the renderer's established color handling rather than adding an unverified blending pipeline.

## Sources

- [Motion Lab](https://x.com/flxrnc/status/2105311836190978392), supplied by the user on 2026-10-13, inspired the frame-specific direction and repair patterns. Author-reported quality, costs and model comparisons are not our benchmarks.
- [Remotion frames](https://www.remotion.dev/docs/use-current-frame), [springs](https://www.remotion.dev/docs/spring), and [motion blur](https://www.remotion.dev/docs/motion-blur) document the renderer primitives. Checked 2026-10-13; verify the installed version.
- [Browser font readiness](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready) and [GIF89a delay fields](https://www.w3.org/Graphics/GIF/spec-gif89a.txt) support readiness and timing checks.
