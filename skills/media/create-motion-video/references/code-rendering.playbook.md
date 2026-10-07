# Code-driven rendering

Use when producing deterministic browser frames and a video encode. Prefer the consuming project's existing renderer. Do not import a complete animation engine to render a simple scene. JavaScript/TypeScript in Canvas, SVG or DOM can express a frame as a function of explicit time; other established project renderers can satisfy the same contract.

## Establish the frame contract

Validate finite positive dimensions, FPS and duration, a bounded integer frame count and available storage/time. Record duration rounding: frame `i` is sampled at `i / fps` for `0 <= i < count`; encoded duration is `count / fps`. Record a fractional-rate rational when needed rather than silently substituting a different rate. Use output dimensions compatible with the selected encoder/pixel format.

Implement or reuse an explicit render entry point such as `renderFrame(timeSeconds)`. Set the viewport/device scale, wait for fonts and decoded images, and finish asynchronous drawing before capture. Resolve or bundle permitted assets rather than relying on an unrecorded remote response. Surface missing fonts/assets and browser errors. Seed procedural variation; derive all scene state from time/frame and configuration. Avoid `Date.now()`, advancing animation loops, mutable accumulators and unseeded randomness in capture.

Compare selected repeated and out-of-order frame renders under the same recorded browser, fonts, assets, viewport and graphics environment. A mismatch requires investigation before claiming determinism. This does not prove pixel identity across hosts or GPU/font versions. Freeze or record the render inputs so repairs and reviews refer to the same piece.

## Use cheap previews first

Capture look/beat frames, then a short target-layout segment crossing a join. Inspect actual glyphs, overflow, layering, safe areas, caption placement and small-screen readability. A smaller preview may miss final-resolution issues; check representative final-size frames too. Do not queue thousands of frames while the message or look is unresolved.

For narration, verify the final recording against the script and measure duration before scheduling visuals. An aligner can estimate unmatched words; retain confidence/status and listen to material cues. Correct captions against what is actually spoken, including punctuation and line breaks. A recording replacement invalidates dependent cue, caption and export evidence. Check music rights and mix using the destination's verified requirements; no universal loudness or word-rate target is assumed.

## Capture and encode

Render exactly the expected indexed frames into a fresh run directory. Check missing/duplicate frames, capture errors and file validity; do not mix stale tails from a previous longer render. Reuse valid frames only when their inputs and indices still match. Check every subprocess status and the tool's reported findings, not only its exit code.

For a compatible H.264 delivery, this is an example after substituting verified parameters; it is not a universal platform preset:

```bash
ffmpeg -framerate 30 -start_number 0 -i frames/%06d.png -frames:v 180 -c:v libx264 -pix_fmt yuv420p -movflags +faststart output.mp4
```

Use explicit input frame rate, start index, frame limit and destination codecs. If muxing audio, choose the agreed pad/trim/end policy from measured lengths; blindly using `-shortest` can truncate intended visuals or narration. Preserve source and requested stems/captions. Check output existence, nonzero size, decodability, dimensions, frame rate/count, duration, container/codecs and expected audio/caption streams using available probe/decoder tools. Report tolerance and measured values. Decode the export with error reporting; encoding success is insufficient.

## Inspect the result

Extract a contact sheet from the actual export for each requested format, including every beat and around joins. Label frames with source export and times; verify dimensions/origin so an alternate-format sheet cannot silently show the primary layout. A contact sheet finds clipping and composition defects; it cannot establish pacing or sound.

Play the actual video at normal speed and inspect starts/ends, readable holds, transitions, continuity and the explanation. Listen when audio exists: missing/truncated speech, pronunciation, caption/visual sync, unintended silence, overlaps and clipping. Check the destination's accessibility needs, avoid hazardous flashes, and supply requested captions/transcript. If the host cannot play or hear it, state precisely what remains unchecked and arrange the required reviewer/human observation instead of claiming completion.

Preserve before/after evidence for meaningful repairs. Recheck affected cues, joins, formats and export metadata after changes; bounded failure remains unresolved. Independent assessment must identify which actual artifacts and checks it inspected. Technical metrics and printed PASS statements do not prove story quality.

## Primary references

- [Playwright page evaluation](https://playwright.dev/docs/api/class-page#page-evaluate): driving an explicit render entry point.
- [Browser font readiness](https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready): waiting before capture.
- [FFmpeg documentation](https://ffmpeg.org/ffmpeg.html): input rates, frame limits and encoding options; verify installed tool support.
- [Animate source workflow](https://github.com/cth9191/animate/tree/7e5eb56feb2dd573f890e1b7b34748af43d58263): inspiration for preview-first procedural video, reviewed 2026-10-07. No runtime/code is bundled here; verify any chosen external tool's reported findings and timing confidence.
