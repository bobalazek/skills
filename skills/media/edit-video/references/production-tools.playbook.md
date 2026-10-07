# Video production tool paths

Use this when producing the edit. Inspect installed applications, connected tools and the existing project first. Record the actual tool version and supported operations; a named application here does not establish that it is installed, licensed or controllable.

## Choose the working source

| Starting material and result | Useful path | Keep with the result |
| --- | --- | --- |
| Existing native timeline; multicamera, layered sound, keyframed reframing or recurring revisions | The existing NLE through supported UI, connector or scripting | A versioned native project and its linked media references |
| Bounded cuts, assembly, crop or caption burn-in with settled timings | Installed FFmpeg with explicit filter and stream choices | Source identities, edit map, commands and corrected caption source |
| Speech-led selections without a reliable transcript | The editor's transcription or an available local/authorized ASR service | Corrected transcript, language, model/version and source timing basis |
| Caption-only correction with an accepted cut | Existing subtitle editor or a text edit to the supported track | Corrected track tied to the exact companion video |

Stay in the native editor when reconstruction would discard useful decisions. Duplicate the timeline/project before editing, verify media is online, and save a new version. Relink proxies to the intended originals before the final export. Reopen the saved project and test a representative change in a disposable copy. For a requested interchange file, test import in the recipient's actual editor and compare timing, track order and effects with the reference export. [OpenTimelineIO's format](https://opentimelineio.readthedocs.io/en/latest/tutorials/otio-file-format-specification.html) describes edit decisions and external media references; it does not bundle the footage. Do not promise that an EDL, XML or OTIO export preserves every effect or caption style without a tested round trip.

## Inspect before cutting

With FFprobe available, inspect machine-readable streams and duration:

```sh
ffprobe -v error -show_format -show_streams -of json source.mkv
```

Use the observed stream indices, time bases, start offsets and language tags to select the intended tracks. The [FFprobe manual](https://ffmpeg.org/ffprobe.html) documents the output sections. Without FFprobe, use the native media inspector or FFmpeg's input information plus decoding checks; state any metadata you could not establish. Missing audio in a supposedly narrated recording requires investigation before choosing a silent export.

For selections, transcribe the source and keep source timestamps. For final captions, align the corrected transcript to the final mix. If local Whisper is already available, `whisper final-audio.wav --model base --language en --task transcribe` is an example for English; choose the actual language and an installed model, and inspect `whisper --help` for its supported outputs. Its [official repository](https://github.com/openai/whisper#command-line-usage) documents usage. Model downloads and remote transcription still follow the task's authority and data constraints. ASR requires listening and correction; a transcript alone does not prove the selected pictures or final caption timing.

## Cut and assemble with FFmpeg

This example keeps source `[1.2, 2.8)` followed by `[4.0, 5.2)`, yielding 2.8 seconds. It assumes a single, synchronized, zero-origin SDR source at a confirmed constant 30 fps, with video and audio starting together and the chosen tracks at `v:0` and `a:0`. Set boundaries on decoded video frames and check sound at those boundaries. For another constant rate, replace `-r 30` with the inspected rate, retaining a rational value such as `30000/1001` when applicable. Nonzero or unequal track starts require a common observed offset; independently zeroing unrelated starts can erase real sync differences. HDR, rotation and separately recorded sound need their own inspected output settings.

For variable-rate footage, decide whether the deliverable must preserve its timestamps or conform to a specific constant rate. An average frame rate does not establish a constant one. Use a tool path that supports the chosen timing and inspect output timestamps, dropped/duplicated frames and the last frame's duration. Do not apply this constant-rate example or force variable-rate output merely to avoid choosing the required rate.

For a source with the intended audio track:

```sh
ffmpeg -n -hide_banner -v error -i source.mkv -filter_complex \
  '[0:v:0]split=2[v0][v1];[0:a:0]asplit=2[a0][a1];[v0]trim=start=1.2:end=2.8,setpts=PTS-STARTPTS[v0c];[a0]atrim=start=1.2:end=2.8,asetpts=PTS-STARTPTS[a0c];[v1]trim=start=4:end=5.2,setpts=PTS-STARTPTS[v1c];[a1]atrim=start=4:end=5.2,asetpts=PTS-STARTPTS[a1c];[v0c][a0c][v1c][a1c]concat=n=2:v=1:a=1[v][a]' \
  -map '[v]' -map '[a]' -map_metadata -1 -map_chapters -1 \
  -c:v libx264 -crf 18 -pix_fmt yuv420p -r 30 -fps_mode cfr -c:a aac -b:a 192k -movflags +faststart edit.mp4
```

For confirmed silent footage, omit the audio branches entirely:

```sh
ffmpeg -n -hide_banner -v error -i source-silent.mkv -filter_complex \
  '[0:v:0]split=2[v0][v1];[v0]trim=start=1.2:end=2.8,setpts=PTS-STARTPTS[v0c];[v1]trim=start=4:end=5.2,setpts=PTS-STARTPTS[v1c];[v0c][v1c]concat=n=2:v=1:a=0[v]' \
  -map '[v]' -map_metadata -1 -map_chapters -1 -an \
  -c:v libx264 -crf 18 -pix_fmt yuv420p -r 30 -fps_mode cfr -movflags +faststart edit-silent.mp4
```

These commands decode, trim and re-encode, so cuts are not limited to existing keyframes. Resetting each retained segment's timestamps makes concatenation start each segment at zero. See FFmpeg's [trim](https://ffmpeg.org/ffmpeg-filters.html#trim), [concat](https://ffmpeg.org/ffmpeg-filters.html#concat) and [stream selection](https://ffmpeg.org/ffmpeg.html#Stream-selection) documentation. `-n` prevents overwriting; explicit maps exclude unintended source tracks. The codec settings are an example, not a destination specification. Inspect available encoders before use. Check expected duration within the frame/sample and encoder tolerances; avoid using `-shortest` to hide mismatched tracks.

## Caption and render

After the final timing is settled, correct the track using the caption playbook. Deliver a sidecar when requested; burn-in needs a new encoded video. For an installed FFmpeg build with the subtitles filter and an inspected `corrected.srt` in the working directory:

```sh
ffmpeg -n -hide_banner -v error -i edit.mp4 -map 0:v:0 -map '0:a:0?' \
  -vf subtitles=corrected.srt -c:v libx264 -crf 18 -pix_fmt yuv420p \
  -c:a copy -map_metadata -1 -map_chapters -1 -movflags +faststart captioned.mp4
```

The optional audio map also permits confirmed silent input. Use simple controlled working paths for the filter; FFmpeg filter escaping differs from shell quoting. Check the [subtitles filter](https://ffmpeg.org/ffmpeg-filters.html#subtitles-1) and actual font availability. The sample uses default subtitle styling, which still needs a destination-size check. For several deliverables, retain the uncaptioned master and corrected track so one wording fix does not require repeating the editorial cut.

## Decode and play the files

Run a decoding check on every delivered variant:

```sh
ffmpeg -hide_banner -v error -xerror -i edit.mp4 -map 0:v:0 -map '0:a:0?' -f null -
```

Inspect metadata against the edit map, then open the exported file in the available player and watch at normal speed with sound. Check joins, first/last words, sync, framing and caption timing; inspect crop/redaction intervals throughout their duration. Reopen sidecar tracks with the exact companion file. Decoding and duration establish technical evidence only. Missing playback or listening access remains an explicit gap, even if frame inspection and audio analysis pass.
