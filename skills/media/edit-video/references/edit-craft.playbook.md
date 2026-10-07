# Edit craft

Use while choosing pacing, cut points, coverage, openings, vertical framing, caption style or music for an edit. It covers what makes an edit watchable; the production tool paths cover commands, and the caption playbook covers caption accuracy, timing and placement checks. Meaning comes first: no craft choice justifies changing what a speaker said or implied. Durations and levels below are rules of thumb, not targets.

## Pace to the purpose

Set the pace from the purpose. A tutorial needs time to see each action, a social clip needs density, and an interview needs room for thought. Tighten in passes: remove false starts, repetitions and dead air first; then trim pauses; then watch at normal speed and restore any breath the rhythm needs. Removing every pause makes speech breathless and puts a jump in every sentence.

Vary shot lengths, hold on a key line or reaction, and cut or speed through routine waits. Do not cut or speed up a wait when its duration is the point being shown, such as a product's loading time. Judge pacing only by watching the whole edit at normal speed; a timeline or contact sheet cannot show it.

## Choose the cut point

| Cut on | Why it works |
| --- | --- |
| A pause or sentence end | Speech stays intact and the join hides in the gap |
| An action, such as a gesture, click or turn | Movement carries the eye across the cut |
| A breath or blink | The face has a natural break |
| A change of subject | The cut marks the change for the viewer |

Avoid cutting mid-word, mid-gesture, or between two nearly identical framings of the same person unless the jump is a deliberate style. Listen at every join for clicks, clipped breaths and changes in background noise. A very short audio crossfade often removes a click. When a removed gap leaves a noticeable drop to digital silence, fill it with the recording's own room tone.

## J and L cuts

In a J cut, the next shot's sound starts before its picture, drawing the viewer into a new speaker or scene. In an L cut, the previous shot's sound continues over the next picture, so a sentence can finish over b-roll or a listener's reaction. Use them to soften hard cuts between speakers and to let illustration overlap speech. In an editor, offset the audio and video edit points. With FFmpeg, trim audio and video with separate boundaries, record both intervals in the edit map, and check sync where the tracks rejoin.

## Cover jumps with b-roll

When a cut inside a talking passage produces a visible jump, cover it with footage of what is being described: a screen recording, a cutaway, another camera angle, or relevant b-roll. Start the cover slightly before the cut and end it slightly after, so the jump is never visible. Generic stock used as wallpaper adds nothing; coverage should show what the speech is about, with rights to use it. A small punch-in on high-resolution footage can also hide a jump; check the enlarged picture holds up at destination size. Coverage never excuses an edit that changes meaning: joined statements need the same meaning check whether or not the viewer can see the join.

## Open short-form clips with a hook

Short-form viewers often decide within the first second or two whether to stay. Open on the strongest line or moment in the passage, not on a greeting, a self-introduction or a logo. The hook must keep its meaning in context. When a line is pulled forward as a teaser, the clip still plays its full context later. For muted viewing, put a few words on the first frame that frame the clip's point, consistent with what is said. End on a complete line; when the player loops, a clean ending that flows back into the opening helps.

## Reframe for vertical

Frame each shot around its subject and essential information; a default center crop often cuts off an off-center speaker or the on-screen content being discussed. For a talking head, keep the eyes near the upper third and keep gestures in frame when they carry meaning. With two speakers, alternate crops or stack them rather than shrinking a wide shot into the middle. Do not squeeze a whole widescreen interface into a vertical frame: crop to the region being discussed, move the crop smoothly as the action moves, or stack the speaker above that region. Check that text remains legible at phone size, and recheck the framing at every shot change, since a crop that suits one shot can fail the next.

## Style captions for reading

Chunk captions by phrase, one or two short lines per cue, never breaking inside a name. Word-by-word highlighting can help viewers follow; keep the whole phrase visible and highlight the current word instead of flashing single words faster than they can be read. A heavy sans-serif with an outline, shadow or solid box survives busy backgrounds. Size captions for a phone screen, keep one position throughout, and use the same style across clips in a series. Emphasize sparingly, on the one word that carries the point. Styling never changes the words that were spoken.

## Music under speech

Use music only with a license covering the destination, duration and any monetization, and keep the proof. Avoid lyrics under speech; they compete with the words. Keep speech intelligible: lower the music under speech and raise it in gaps, by ducking keyed to the voice, such as FFmpeg's [sidechaincompress](https://ffmpeg.org/ffmpeg-filters.html#sidechaincompress), or by keyframed volume. Music should sit clearly below the voice; judge by listening on a phone speaker as well as headphones, because small speakers expose competition in the midrange. Start and end on musical phrases, cut on beats in montage sections, and when the edit is shorter than the track, remove a section at a matching bar rather than fading early. Measure the final mix against the destination's verified loudness requirements; there is no universal target.
