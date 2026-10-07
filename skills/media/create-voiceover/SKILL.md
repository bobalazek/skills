---
name: create-voiceover
description: "Record or generate narration from an accepted script as one clip per line, a mixed stem and a timing manifest, with checked pronunciation, loudness and listening. Use for voice-over audio, not script writing, a writing-voice guide or editing footage."
---

# Create voiceover

Produce narration audio for an accepted script: one trimmed clip per line, a mixed stem, and a timing manifest with each line's ID, text, clip length and position, which a motion video, edit or deck consumes. Reuse the existing script file, recordings, voice choice and pronunciation list before creating equivalents. A scratch-pacing request finishes with labeled scratch audio, and an audition request with the auditions.

The script's wording stays with its owner: `create-motion-video`, `edit-video` or `create-presentation` for media scripts, or the relevant writing skill when available. This skill adds spoken-form respellings without changing meaning and returns wording problems to that owner. A writing-voice guide belongs to `define-writing-voice`, not here. Placing the audio against picture and building captions into a video stay with the consuming media skill.

## Establish the job

Read project instructions, the accepted script and what the consumer needs. Establish the language and accent, audience, destination and playback (sound-on, or muted with captions), delivery format, names to pronounce, deadline and requested fidelity: auditions, scratch pacing or final narration. Ask only about consequential gaps, which usually include the voice source, its cost and how the owner says their own names. When the requester asked you to proceed, take routine defaults and report them.

Split the script into lines that each carry one thought, and give them stable IDs so a consumer's cues survive later edits. Use [the narration manifest](references/narration-manifest.template.md) unless the project already keeps an equivalent script and timing file.

## Choose the source and the voice

Choose between a human recording, a text-to-speech provider and a scratch voice from what is available and what is authorized, then audition shortlisted voices on representative lines. For both decisions, and for recording or calling a provider, load [the voice sources guide](references/voice-sources.playbook.md). Paid generation, new accounts and uploading recordings to a provider need applicable authority; honor authority already given. Never clone or imitate an identifiable person's voice without that person's documented consent for this use. Follow the provider's terms for commercial use and AI-voice disclosure, and record what the destination must disclose. A missing key, account or speaker blocks only the final recording; a labeled scratch voice can unblock pacing work.

The guide's provider notes are dated. Verify current model and voice identifiers and pronunciation features in the provider's documentation or API at the time of use, and record what you used.

## Get names and numbers right

List brand and product names, people, places, acronyms, numbers, dates and addresses. The owner decides how their names are said; get a recording or a respelling. Use the provider's pronunciation dictionary, alias or phoneme support where the chosen model honors it; otherwise respell in the line's spoken text and keep the caption text unchanged. Write numbers and addresses as they should be spoken. Check every occurrence by listening.

## Record or generate takes

Produce one clip per line, never one long file to slice later, so a changed line can be redone alone. Record or generate two or three takes of lines carrying the hook, the proof, names or the call to action; routine lines may need one. Select by listening for stress on the right word, pronunciation, pace and consistency with neighboring lines. Record the selected take and keep alternates until acceptance. Keep the voice, model and settings fixed across lines and later pickups.

## Finish and measure

For trimming, building the stem, loudness, music or effects, and the measurement commands, load [the audio finishing guide](references/audio-finishing.playbook.md). Trim silence and distracting breaths without clipping words. Place each line from measured clip lengths: the lead-in, then each line after the previous clip plus its pause. Measure loudness and true peak and match them to the destination's verified requirements; there is no universal target, and an unverified destination leaves a stated assumption. Use music or effects only with rights covering the destination, ducked under the voice.

## Verify by listening

Listen to every line at normal speed in the stem, with picture or music where they exist, on headphones and a small speaker. Check names, numbers, clipped starts and endings, clicks, noise, level and tone between lines, and natural pauses. Corroborate with measurements: decoded clip and stem durations, loudness and true peak against the recorded target, and silence positions against computed starts. Speech recognition can corroborate words and timing against the script, but it is not a listening review and tends to normalize misread brand names. Lines nobody heard stay unchecked; if the host cannot play audio, report that gap and who must listen. A successful generation call or encode proves only that a file exists.

Before acceptance, have a separate agent in fresh context challenge the raw script, pronunciation list, manifest, clips and stem against the observed measurements, without the author's conversation or preferred answer. Retain its reviewer/session identity, assessed revision, findings and coverage, including whether it could listen. Fix defects and independently recheck affected lines. Without that assessment, label the result unreviewed; review grants no spending or publication authority.

## Return and hand off

Return the clips, stem and manifest with the pronunciation list, source and voice details, authorization and disclosure notes, rights for any music or effects, measurements, listening coverage and exact gaps. Distinguish scratch, generated, listened and accepted lines.

A new or changed recording invalidates every dependent cue, caption and export check from its first changed line onward, because later lines move. Pass the manifest, stem and first changed line ID to `create-motion-video`, `edit-video` or `create-presentation` when available. Otherwise state the plain action: re-derive cue times from the manifest, rebuild captions from its text and timing, and recheck sync in the exported result. Stop at the requested delivery, and continue already-authorized work without an extra permission loop.
