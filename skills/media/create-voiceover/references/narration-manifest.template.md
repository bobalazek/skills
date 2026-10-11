# Narration manifest

Use the project's existing script and timing file when it has one. Otherwise keep this manifest beside the clips in the consuming project, in JSON or the project's data format. It is the contract a motion video, edit or deck reads: stable script IDs mapped to selected audio. The sequential line-clip shape below remains useful; continuous takes can share a source file with explicit in/out ranges and measured stem positions. Follow an existing consumer schema rather than silently changing it.

## Script fields

Fill these before recording:

| Field | Meaning |
| --- | --- |
| `id` | Stable line ID such as `L1`. Keep IDs when lines are edited or reordered, so consumers' cues still point at the right line |
| `text` | The accepted wording; provisional caption text until reconciled with actual speech |
| `spoken` | Optional: what the voice reads when it differs, such as a respelled name or a written-out address |
| `pause` | Seconds of silence before this line |
| `direction` | Optional delivery note for the speaker or provider |

Global fields: language and accent, `lead` (silence before the first line), `tail` (silence after the last), the pronunciation list with each term's intended reading and method, and the voice source with provider, model, voice ID, settings, check date and who authorized it. Never store keys here.

## Result fields

Fill these from the finished clips, never from estimates:

| Field | Meaning |
| --- | --- |
| `clip` | Path to the selected clip or shared continuous take |
| `sourceIn`, `sourceOut` | When sharing/extracting a take: measured source range, time basis and units; preserve its immutable source identity |
| `actualText` | Words in the selected audio, verified to the extent stated; preserve proper spellings, exclude control tags, and identify deviations from the accepted script |
| `take` | The selected take, and where the alternates are kept |
| `duration` | Decoded length of the selected segment, in seconds; not the whole shared take |
| `start`, `end` | The selected segment's measured position in the stem. For sequential clips, `start` is `lead` for the first line and the previous `end` plus this line's `pause` after that; `end` is `start` plus `duration` |
| `status` | `scratch`, `generated`, `recorded`, `listened` or `accepted` |
| `listened` | Who listened, when and on what device |

For sequential assembly, the voice stem lasts until the last `end` plus `tail`. Anchored, overlapped or continuous material uses its actual timeline and measured output duration. Script-unit ranges support beat cues; word-level captions require speech alignment, not evenly divided line duration. Under `outputs`, name each delivered file by role: `voice` always, and `music` (the ducked bed) and `mix` only when a music bed was requested, otherwise `null`. For each, record the path, measured duration, integrated loudness and true peak; record the target with its source and date or an explicit assumption, and the music's license. Sound effects are not listed here; the consuming skill owns them. A clip's `start` includes its kept lead-in of silence; speech begins slightly later, at the onset silence detection reports, which matters when a visual must land on the first word.

## Example

Values from a two-line trial with a scratch voice:

```json
{
  "language": "en-US",
  "source": { "kind": "scratch", "tool": "macOS say", "voice": "Samantha", "checked": "2026-10-07" },
  "lead": 0.6,
  "tail": 1.0,
  "pronunciations": [{ "term": "Quorra", "say": "KWOR-uh", "method": "respelling" }],
  "lines": [
    { "id": "L1", "text": "Quorra keeps every booking in one place.", "spoken": "KWOR-uh keeps every booking in one place.", "pause": 0, "clip": "clips/L1.wav", "take": "L1-t1", "duration": 2.238333, "start": 0.6, "end": 2.838333, "status": "scratch" },
    { "id": "L2", "text": "Book a demo at quorra.example.", "spoken": "Book a demo at quorra dot example.", "pause": 0.5, "clip": "clips/L2.wav", "take": "L2-t1", "duration": 2.001229, "start": 3.338333, "end": 5.339562, "status": "scratch" }
  ],
  "target": "assumption: -16 LUFS integrated, -1.5 dBTP; no destination requirement found",
  "outputs": {
    "voice": { "path": "voice.wav", "duration": 6.339562, "integratedLufs": -15.9, "truePeakDbtp": -1.5 },
    "music": null,
    "mix": null
  }
}
```

## Handoff

Pass the manifest and its revision, the files under `outputs` and the clips, the pronunciation list, and open gaps such as unheard lines or uncleared music. Name changed IDs and affected source/output intervals. Sequential edits can move later lines; anchored edits invalidate their actual dependents. Consumers re-derive affected cues and recheck beats, captions and exports. Resolve meaning-changing script/recording differences with the script owner; captions describe the selected audio, not unspoken intended words. Align captions to actual speech on the final output timeline, keeping proper spellings and excluding direction tags.
