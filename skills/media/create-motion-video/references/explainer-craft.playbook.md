# Explainer craft

Use while writing or revising the script and storyboard of a short explainer, product demo or narrated piece, before animation. It covers what makes the piece work for a viewer; the rendering playbook covers how frames are made and checked. The project's brand, voice guide and accepted brief take precedence. Durations and rates below are rules of thumb to argue from, not requirements.

## Shape the story

A short product explainer usually needs five beats. Merge or drop beats when the form calls for it: a feature announcement can open on the product, and a teaser may need no proof.

| Beat | Job | Common failure |
| --- | --- | --- |
| Hook | Within the first few seconds, give the viewer a reason to keep watching: a situation they recognize, a sharp question or the result itself | A logo sting, company introduction or slow fade-in |
| Problem in the viewer's terms | Name the cost or friction as the viewer experiences it, in their words | A feature list, internal jargon, or a problem defined as "you lack our product" |
| The product working | Show the product doing the job on real screens: one or two cause-and-effect moments | A tour of every module; screens that sit still while the voice lists features |
| One memorable proof | A single supported fact or moment the viewer can repeat: a number read off the capture, a before/after, a quote with permission | Stacked claims, invented metrics or a testimonial without consent |
| Call to action | One action that matches the page or channel the video sits on | Several actions, or an action the destination does not offer |

Write the narration before the visuals, then read it aloud at speaking pace. Each line should carry one thought the viewer could restate. If a line needs "and also", split it or cut half. Show the product working for roughly half the running time; the problem and proof support that section rather than compete with it.

## Length and script size

Keep the skill's 30–60 second default for a landing page unless the brief says otherwise. Social cut-downs usually run shorter; a tutorial can run longer because the viewer chose to learn. Length follows from the five beats, not from the number of features available.

As a rule of thumb, unhurried English narration runs about 130–160 words a minute, so 45 seconds holds roughly 90–110 words once pauses are included. Rates differ by language, voice and delivery. A scratch read gives a better estimate than a word count, and the measured final recording decides the timing. When the script runs long, cut words before asking for a faster read. Leave a short silence before the first line and after the last, and give a beat of pause between ideas; around a third of a second to a second is common.

## One idea per beat, few words on screen

Each beat answers one viewer question. When narration and picture are both explaining, the voice carries the explanation and the screen shows the evidence. Added screen text names or anchors the idea; it does not repeat the sentence being spoken. Captions are a separate track, so do not set the narration on screen as headlines as well.

Budget added words per beat before designing: a short headline, roughly six words or fewer, plus at most one label or number. Interface text inside a real capture does not count against the budget, but it does need to be readable at destination size when the narration refers to it. Hold any added text long enough to read twice at normal speed, and judge that during playback at destination size. Show a number exactly as it is spoken, with its unit.

## Voice-led or muted autoplay

Decide the playback mode in the brief, because it changes the script.

| Mode | What has to work | Consequences |
| --- | --- | --- |
| Voice-led: the viewer starts playback with sound | The narration carries meaning; the picture shows it | Sparse screen text; captions available for accessibility |
| Muted autoplay: a landing-page hero or feed | The story reads without sound from the first frame | A visual hook in the opening frames; captions shown by default or burned into feed variants; key nouns anchored on screen |
| Both | One master serves both | Keep captions as a sidecar track so the page can display them while muted and the sound-on viewer is not reading duplicates |

Browsers block autoplay with sound until the visitor has interacted with the site or it is otherwise allowed, while muted or silent media can autoplay; see [MDN's autoplay guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay). An autoplaying loop that moves for more than five seconds beside other content needs a way to pause it under [WCAG 2.2.2](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html); tell the page owner when the video will be embedded that way. Generate the caption sidecar, such as [WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API), from the script text and measured line timing, then correct it against what is actually spoken.

## Motion vocabulary

Choose each device for what it explains. One moving focus at a time; everything else holds still.

| Device | Use it when | Craft notes |
| --- | --- | --- |
| Whole screen in a window or device frame | A screen appears for the first time, or the viewer needs to know where they are | Keep frame chrome minimal and consistent; size the screen so its layout stays recognizable |
| Callout lifted from the capture | The narration names one value, row or control | Start the callout exactly over its source region, enlarge it, dim the rest, then return. Use the same capture's pixels, one callout at a time |
| Cursor through real states | Showing cause and effect: clicking a sidebar item swaps to the next real captured screen | Let the cursor rest, then travel with purpose late in the gap; land clicks on real targets in capture coordinates; show press feedback; change the screen on the click. Never click something that does not do that in the product |
| Push or slide transition | Moving to the next step of the same flow | Keep the direction consistent with progress through the story |
| Stack | Several items of one kind: channels, plans, generated outputs | Fan or stack behind the current screen without hiding the subject |
| Morph or shared element | The same object continues between beats, such as a row becoming a card | Only morph things that are the same object; keep identity and color stable |
| Kinetic type | A short headline names the beat, or one word needs emphasis | Stagger words briefly, settle before the narration moves on, and keep to the word budget |
| Counter | A supported number is the proof | End on the exact value with its unit and hold it; never animate a number not read from a source |
| Camera move within a whole screen | Directing attention inside a screen while keeping context | Move slowly, keep the window edges or a recognizable layout in view, and move only while the narration points there. Prefer this to a crop |
| Cut | A change of subject, or rhythm | Cut on a sentence boundary or on a click |

Avoid devices that move without explaining anything: constant drift on every shot, floating idle loops, decorative 3D tilts, or transitions chosen for variety.

## Holds, cuts and pacing to narration

Time visual events to the words they illustrate. A change landing a few frames before its word tends to read as intentional; one landing late reads as lag. Write cues relative to narration lines, as the rendering playbook describes, so a new recording re-times the piece.

Hold a finished state while the narration is still talking about it, and move on when the narration does. Entrances of roughly half a second with an ease-out, and slightly faster exits, are a common starting point; nothing should move while added text needs reading. Vary beat lengths, and give the proof a short breath before the call to action. End each beat on a stable frame; those frames double as stills, poster candidates and review checkpoints.

## End card

Hold the end card for a few seconds after the final line, long enough to read it twice. Show the name or wordmark, one line restating the promise, and the single action with the destination's actual wording and address. Keep it static or settling to static, since a stopped player often rests on the last frame. Keep text clear of where player controls appear at the destination. Do not introduce a new claim at the end. Choose the poster frame separately, usually a frame showing the product working, so the page does not open on the end card.

## Anti-patterns

These come from observed failures in a real production, described generically:

- A two-minute, silent, text-led cut for a landing page. It read as a slide deck. The accepted version ran about 40 seconds, carried by narration, with little screen text.
- Paragraphs or full narration sentences on screen, with captions repeating them again.
- Deep Ken Burns crops of product screenshots. Viewers lose which product and which screen they are seeing; text is cut mid-word, and overlays cover the subject being explained.
- A module-by-module tour in which nothing is shown working.
- Mock-ups or retouched captures presented as the product, or a cursor clicking something the product does not do.
- A feature that the product brief forbids featuring, visible in a corner of a shot.
- Timing hard-coded in seconds against a scratch voice, so the final recording drifts out of sync.
- A logo intro before the hook, or several calls to action at the end.
- Music competing with the voice, or a track without a license for the destination.
