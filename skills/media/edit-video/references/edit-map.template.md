# Edit map

Use the project's existing timeline or decision record. Add this shape only when source-to-output timing needs to remain readable outside the editor. For one repair, keep only the affected row and checks.

## Contract and sources

- Requested result, accepted choices and unresolved decisions:
- Source files and immutable identities; existing project/version:
- Output files, variants and expected duration:
- Source time basis, units and origin; output time basis and frame rate:
- Master audio/clock, offset evidence and end-of-recording drift check, if applicable:

Use half-open intervals `[in, out)` and state any editor-specific timecode convention. Use presentation timestamps for variable-rate material; do not assume frame number divided by nominal frame rate yields the source time. Record any conform/proxy transformation that changes this basis.

| Clip/decision | Source asset and in/out | Quote/action anchor and reason | Speed | Output in/out | Audio, framing, caption or repair notes |
| --- | --- | --- | --- | --- | --- |
| [ID] | [asset, source interval] | [specific occurrence and decision] | [1 = normal] | [output interval] | [affected tracks and checks] |

For a retained segment with constant speed `r > 0`, source interval `[a, b)` and output start `o`, its output duration is `(b - a) / r`. A retained source instant `t` maps to `o + (t - a) / r`. Split a cue at cuts and omit removed words; a cue crossing a deletion cannot be fixed by shifting its start alone. Repeated or reordered passages need one mapping per output occurrence. Ramps, reverse playback and overlapping transitions require the editor's actual timing map instead of this constant-speed formula.

Example: source `[10, 14)` at normal speed occupies output `[0, 4)`. Source `[20, 24)` at 2x then occupies `[4, 6)`. A word at source `21` starts at output `4.5`, and speech within source `[14, 20)` is absent. Check the result against actual speech; this arithmetic does not prove a cut sounds natural.

With FFmpeg, trimming retains the input timestamps unless they are reset; account for timestamp origin in both video and audio before concatenation. Check the installed version's [trim and timestamp filter documentation](https://ffmpeg.org/ffmpeg-filters.html#trim) when using it. Frame-accurate boundaries and audio sync need an export check even when the map is correct.

## Evidence and delivery

- Candidate project/map revision and exported file identity:
- Expected versus observed duration, dimensions and stream presence:
- Playback/listening coverage, join/crop checks and exact unobserved regions:
- Caption source revision, final-timeline mapping and player check:
- Redaction coverage and unresolved rights, if relevant:
- Independent reviewer/session, artifact evaluated, returned findings and recheck:
- Delivered files, reproduction method, interchange limitations and remaining gaps:

When handing off an editor timeline, state which crops, effects or caption styles survive the chosen interchange format. A rendered preview does not establish editability in the recipient's application.
