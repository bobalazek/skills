# Narration manifest

Use the project's existing script and timing file when it has one. Otherwise keep this manifest beside the clips in the consuming project, in JSON or the project's data format. It is the contract a motion video, edit or deck reads: one entry per line, with the same IDs from script to final clip.

## Script fields

Fill these before recording:

| Field | Meaning |
| --- | --- |
| `id` | Stable line ID such as `L1`. Keep IDs when lines are edited or reordered, so consumers' cues still point at the right line |
| `text` | The accepted wording; captions use it |
| `spoken` | Optional: what the voice reads when it differs, such as a respelled name or a written-out address |
| `pause` | Seconds of silence before this line |
| `direction` | Optional delivery note for the speaker or provider |

Global fields: language and accent, `lead` (silence before the first line), `tail` (silence after the last), the pronunciation list with each term's intended reading and method, and the voice source with provider, model, voice ID, settings, check date and who authorized it. Never store keys here.

## Result fields

Fill these from the finished clips, never from estimates:

| Field | Meaning |
| --- | --- |
| `clip` | Path to the trimmed clip for this line |
| `take` | The selected take, and where the alternates are kept |
| `duration` | Decoded length of the trimmed clip, in seconds |
| `start`, `end` | The clip's position in the stem: `start` is `lead` for the first line and the previous `end` plus this line's `pause` after that; `end` is `start` plus `duration` |
| `status` | `scratch`, `generated`, `recorded`, `listened` or `accepted` |
| `listened` | Who listened, when and on what device |

The stem lasts until the last `end` plus `tail`. Record the stem's path, measured duration, integrated loudness and true peak, the target with its source and date or an explicit assumption, and any music or effects with their licenses. A clip's `start` includes its kept lead-in of silence; speech begins slightly later, at the onset silence detection reports, which matters when a visual must land on the first word.

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
  "stem": { "path": "voice.wav", "duration": 6.339562, "integratedLufs": -15.9, "truePeakDbtp": -1.5, "target": "assumption: -16 LUFS integrated, -1.5 dBTP; no destination requirement found" }
}
```

## Handoff

Pass the manifest and its revision, the stem and clips, the pronunciation list, and open gaps such as unheard lines or uncleared music. A changed clip moves every later line, so name the first changed line ID; consumers re-derive cue times from the manifest and recheck dependent beats, captions and exports from that point. Build captions from `text` with each line's `start` and `end`, split long lines at sentence boundaries, and correct them against what is actually spoken.
