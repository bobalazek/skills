# Media

This domain owns produced media and its production evidence. Choose by the artifact the user needs, then start at its next unfinished stage. Content owns reusable writing voice and editorial prose; UI/UX owns interactive interfaces.

## Categories and skills

| Category | Subcategory | Skill | Expected result |
| --- | --- | --- | --- |
| Video | Motion graphics and explainers | [create-motion-video](../../skills/media/create-motion-video/SKILL.md) | A timed script/storyboard or editable composition and checked video export |
| Video | Recorded footage | [edit-video](../../skills/media/edit-video/SKILL.md) | A traceable cut, reframe or caption edit with preserved originals and checked output |
| Slides | Presentation decks | [create-presentation](../../skills/media/create-presentation/SKILL.md) | A deck for a live talk or asynchronous reading, with editable source and requested exports |
| Slides | Social carousels | [create-carousel](../../skills/media/create-carousel/SKILL.md) | An ordered image set or swipe PDF, with readable panels and accessible companion text |
| Audio | Narration | [create-voiceover](../../skills/media/create-voiceover/SKILL.md) | One clip per script line, a voice stem and a timing manifest, with pronunciation, loudness and listening checks |
| Source material | Product captures | [capture-product-screens](../../skills/media/capture-product-screens/SKILL.md) | Reproducible screenshots or recordings of the product from seeded data, with a shot manifest and forbidden-content checks |

## Choose the owner

Use `edit-video` when working from recorded footage, including a small caption correction. Keep repairs to generated motion compositions in `create-motion-video`. A mixed production can pass a checked animation into a footage edit; neither needs to restart the other's accepted stages.

Use `create-voiceover` when narration needs recording or generating from an accepted script; the consuming video, edit or deck keeps the script and places the audio. Use `capture-product-screens` for reproducible captures of the user's own product. Analysis of other interfaces belongs to `capture-design-reference`, and visual regression baselines stay with the project's tests. Both supporting skills can run in parallel once the script and shot list are accepted; motion timing waits for the measured narration manifest, and a new recording or recapture invalidates dependent checks.

A presentation supports a talk, meeting or document-style read. A social carousel tells a self-contained sequence in a feed. A carousel component on a website belongs to `design-interface`. A text-only social post has no dedicated drafting package; describe the plain writing action rather than choosing a media skill by keyword.

These skills own the words embedded in their artifacts. Reuse the project's voice guide; use `define-writing-voice` for a separately needed reusable guide and `review-writing` for a prose-only assessment, when available. They do not require a writing or design stage for every edit.

## Production and proof

Reuse accepted briefs, assets and templates. Ask about consequential missing choices before dependent production; a requested outline, cut list or preview finishes at that fidelity. Use available tools and verify the requested format rather than silently substituting another one. These packages supply procedures and templates, not bundled editors, renderers or generation services.

Tool instructions live with each installable package:

- [Video editing paths](../../skills/media/edit-video/references/production-tools.playbook.md): existing editing projects, bounded FFmpeg processing and caption tools.
- [Presentation paths](../../skills/media/create-presentation/references/production-tools.playbook.md): native editors, connected Slides/Canva tools, existing PowerPoint generators and explicitly requested HTML decks.
- [Carousel paths](../../skills/media/create-carousel/references/production-tools.playbook.md): native design documents, browser-rendered panels and existing image pipelines.
- [Motion rendering](../../skills/media/create-motion-video/references/code-rendering.playbook.md): deterministic frame capture, assembly and final playback checks.
- [Voice sources](../../skills/media/create-voiceover/references/voice-sources.playbook.md) and [audio finishing](../../skills/media/create-voiceover/references/audio-finishing.playbook.md): human recording, text-to-speech providers, pronunciation controls, FFmpeg trimming, stem assembly, loudness and ducking.
- [Capture scripts](../../skills/media/capture-product-screens/references/capture-script.playbook.md): Playwright contexts, fixed clocks, settled states, pointer parking, failure detection, missing-asset guards and recordings.

Craft guides cover what makes each artifact work: [explainer craft](../../skills/media/create-motion-video/references/explainer-craft.playbook.md), [slide craft in the deck guide](../../skills/media/create-presentation/references/deck.playbook.md#make-each-slide-carry-one-point), [carousel craft](../../skills/media/create-carousel/references/carousel-craft.playbook.md) and [edit craft](../../skills/media/edit-video/references/edit-craft.playbook.md).

These are conditional production routes, not claims that every tool is installed or every provider has been tested. Choose from the requested editable format and actual environment. The guides link current primary documentation; verify version-specific behavior during use.

Check actual exports: every slide or panel for static media; joins, captions, playback and applicable audio for video. Keep source files, requested outputs, evidence and exact gaps together in the consuming project's existing location. Fresh independent assessment must identify the artifact and its coverage; an outline, contact sheet or successful export command alone cannot prove the finished medium. Upload, publication and provider spending need applicable authority.

See [media scenarios and routing](../workflows.md#produce-media) for direct starts and conditional handoffs.
