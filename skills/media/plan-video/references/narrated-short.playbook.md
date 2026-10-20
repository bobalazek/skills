# Produce a narrated short

Produce the short with our own agent, model APIs and local editing tools: idea → script → scene assets → voice → timed captions → editable video → checked export. Reuse accepted inputs and stop at the requested artifact. A script-only request needs no generation, and a caption repair needs no new concept.

## Choose the production route

| Starting material | Route | Main check |
| --- | --- | --- |
| An idea, supported facts or an accepted script | Write the spoken story, record/generate narration, source visuals, then assemble | Every claim has evidence; visuals support the words |
| Existing interview, podcast, demo or other recording | Transcribe, select complete moments, edit and reframe, then caption | Preserve the speaker's meaning and source ranges |
| A recurring faceless series | Save the accepted audience promise, voice, visual rules and destination; vary each episode's story | A reusable template still needs fresh evidence and review |
| Real product UI, exact figures or branded typography | Capture the real screen or render deterministic layers, with generated material only where useful | UI, numbers and marks match the source |

Keep the brief, script, assets, audio, timing, captions and editable composition in the project. The agent owns the handoffs and invokes the available generation and editing tools. Record missing execution capabilities explicitly; a collection of generation commands does not establish a complete video pipeline.

## Run the feature flows

### Idea to narrated video

1. Turn the brief and supported facts into the opening promise, causal beats and payoff. Write spoken text separately from directions; retain scene IDs when editing.
2. Select the voice and generate the accepted narration. Listen, correct pronunciation and measure the selected audio before setting final scene lengths.
3. Transcribe/align that audio. Correct the words and retain segment/word times; derive captions from what was actually spoken.
4. Map each spoken beat to a visual purpose. Retrieve suitable owned/licensed footage or capture real screens first. Generate missing illustrative images; animate selected images only when the action needs motion.
5. Build the local timeline from measured audio and selected scene assets. Add deliberate crops, overlays, readable captions and any licensed music mix; keep the editable source.
6. Export and inspect the complete video with sound and muted. Correct the affected source, then rebuild its dependent captions, scenes or exports.

### Recording to short clips

1. Transcribe the supplied recording with source times. Find self-contained moments that deliver a useful statement or story; a selection score is only a ranking aid.
2. Choose source ranges that preserve qualifiers, complete sentences and the payoff. Retain the source-to-output time mapping through cuts and removed pauses.
3. Reframe around the active speaker/action and relevant evidence. Add B-roll only where it clarifies the spoken beat; preserve the underlying source meaning.
4. Derive captions from the final cut's speech and timing. Review crop, speaker continuity, caption placement and the complete opening/payoff before exporting each clip.

### Episode to repeatable series

Reuse an accepted series brief, voice, recurring character references, visual rules and output settings. Give every episode its own supported script, scene records and selected assets. Produce and review one pilot, then apply the same flow to the requested batch within its budget. Resume completed scenes; route failed scenes back to their own generation/edit step. Recurrence does not authorize automatic publication.

## Select the models and tools

The following bindings were checked against official schemas on **2026-10-20**. They are a concrete starting recipe for the supported input shapes. Preserve an accepted project model or voice, and change a binding when the task requires another supported capability. Check availability, schema, rights and cost before charging a job; store the exact requested identifier and returned version when available.

| Stage | Starting selection | Required inputs and output |
| --- | --- | --- |
| Idea and script | The active writing agent, using the accepted brief and factual sources | Separate spoken words from directions; stable scene IDs and a supported payoff |
| Scene images | FLUX.2 through `fal-ai/flux-2` ([schema](https://fal.ai/models/fal-ai/flux-2/api)) | Text prompt, explicit image size and optional seed; PNG scene assets. Use real captures for product UI, exact figures and marks |
| Motion from a scene image | `fal-ai/kling-video/v2.5-turbo/pro/image-to-video` ([schema](https://fal.ai/models/fal-ai/kling-video/v2.5-turbo/pro/image-to-video/api)) | Prompt, start image, optional end image, 5- or 10-second clip. Source image supplies framing; this route does not accept an aspect-ratio field |
| Motion without a source frame | `fal-ai/kling-video/v2.5-turbo/pro/text-to-video` ([schema](https://fal.ai/models/fal-ai/kling-video/v2.5-turbo/pro/text-to-video/api)) | Prompt, 5- or 10-second clip and aspect ratio; use only where exact character/product continuity is unnecessary |
| Narration | OpenAI `gpt-4o-mini-tts`, an accepted voice such as `coral` ([guide](https://developers.openai.com/api/docs/guides/text-to-speech)); an existing ElevenLabs `eleven_v3` voice can remain in use ([models](https://elevenlabs.io/docs/overview/models)) | Accepted spoken text and voice, audio output and measured timing. Only expose delivery/voice controls that the selected adapter implements |
| Timed transcription | Soniox `stt-async-v5` ([models](https://soniox.com/docs/stt/models)) or the project's verified transcription route | Actual narration audio, language hints and timed words/segments; correct them against the recording before caption export |
| Captions and assembly | Local caption rendering plus the project's FFmpeg or code-driven composition | Corrected timed text, selected scenes and measured audio; editable composition, clean/captioned MP4 and requested SRT/VTT |

For every generated scene, retain provider, model/endpoint, prompt, supported settings, source images, voice where relevant, job ID, selected take and actual charge. A different `model` string does not adapt the request schema. Add or update the adapter when the required inputs differ. Missing credentials block generation; they do not justify claiming a placeholder was generated.

## Carry the story through production

Keep the following outputs in the existing project record. One short may need only a small scene table and its files; reuse the project's brief, asset records and edit format.

| Stage | Retain | Ready to continue when |
| --- | --- | --- |
| Idea and brief | Viewer, intended reward, destination/surface, duration, language, source facts, style and budget/authority | Required creative choices and missing evidence are resolved |
| Script | Exact spoken words, hook and payoff; scene directions in separate fields | Claims are supported, pronunciation is specified and the story fits the requested scope |
| Scene plan | Stable scene IDs, spoken text, visual purpose, asset/source reference and timing estimate | Every beat can be filmed, sourced, captured, rendered or generated |
| Voiceover | Selected audio, voice/model/settings, consent and measured duration | Listen to the speech; correct names, numbers, pacing and clipped ends |
| Visuals | Selected footage/images/captures, source/licence, crop and scene assignment | Each asset conveys the intended beat and fits its use; still images with motion are identified as such |
| Captions | Corrected transcript with word/segment timing and display text | Text matches the actual speech and remains readable in the intended crop |
| Edit | Editable timeline, selected takes, audio mix, overlays and caption track | Picture and captions follow measured narration; joins and the final payoff work at normal speed |
| Delivery | Checked export, requested captioned/clean versions and sidecars, poster, rights/disclosure record and actual cost | Playback, audio, caption placement and destination requirements pass; unsupported exports remain explicit gaps |

Price the selected route before paid work. After the script and visual rules are settled, asset sourcing and narration can overlap; final scene timing waits for the chosen audio. Start transcription/alignment when narration exists, before final assembly. If recorded speech already supplies the story, preserve it instead of synthesizing a replacement voice by default.

Keep narration, directions and displayed text separate. A note such as “show the chart” must never be spoken accidentally. Displayed `1,250` can correspond to spoken “one thousand two hundred and fifty”; preserve the relationship while keeping captions faithful to the audio. Generated imagery must not invent evidence, product UI, logos or exact labels; composite those from checked sources.

## Repair the affected stage

| Change | Recheck or rebuild |
| --- | --- |
| Spoken wording, voice or delivery speed | Affected narration, measured timing, dependent scene boundaries, visuals/overlays and captions, then the export |
| Caption spelling with unchanged speech | Display text and affected captioned export; keep audio and accepted footage |
| Wrong stock clip, poor generated image or vertical crop | That scene and its joins; retain narration and corrected transcript when still valid |
| Destination, aspect ratio or output duration | The target cut/layout, caption safe areas, overlays and export acceptance |

Save provider project/job IDs, selected asset references and failures before retrying. Follow the transport's documented polling and recovery rules, including its idempotency support. Reconcile an uncertain job before resubmitting a chargeable request. Reuse accepted assets and manual corrections; retrying an entire video for one bad scene increases cost and loses edits.

## Implement the complete production job

The production owner must connect the stages, not leave the user with unrelated generated files. Reuse the project's existing job and scene records. A complete job needs:

- A brief and script-to-scene map with exact model/tool bindings and an agreed spending ceiling.
- Independent asset jobs with saved IDs and outputs; resume accepted work without charging it again.
- Measured narration, corrected timed captions and an editable assembly driven by those times.
- Scene-specific regeneration, caption correction, target crops and export checks that invalidate only affected outputs.

Complete one checked short before adding a batch or series controller. Keep capability status explicit: a written recipe is guidance, a passing mocked request is a contract check, and a watched/listened-to render is production evidence. If orchestration, caption export or assembly is missing, name that implementation gap instead of claiming the whole pipeline exists.

## Budget and verify

Estimate scene images, generated video seconds, voice usage, transcription, rendering and expected repairs before paid work. Track rejected attempts and actual charges against the job's spending ceiling; compare cost per accepted finished video at its measured length. Preserve accepted assets and regenerate only failed scenes.

When changing a model, use the same supported script and source assets to check the required capability. Start with one representative scene within authorized spend, then run the full accepted production once the inputs work.

Inspect factual/visual accuracy, complete sentences, voice pronunciation, caption errors and timing, crop/safe areas, music balance, rights/disclosure, editability and final playback. Record elapsed time, manual repair time and estimated versus actual charges. Treat missing tests as unknown; a successful generation or encode does not establish playback quality.

Return the requested production artifacts and observed checks. Keep publication separate from export: a finished file does not authorize uploading to an account, scheduling a series or spending beyond the agreed budget.

For an explicit service comparison, the existing [platform feature research](video-platforms.matrix.md) remains available. Own production uses the flows and model bindings above.
