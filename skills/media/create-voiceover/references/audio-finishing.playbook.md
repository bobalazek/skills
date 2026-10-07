# Audio finishing

Use when turning selected takes into trimmed clips and a stem, adding requested music, matching loudness, or measuring and listening to the result. The commands are examples for FFmpeg 7.0, run on synthetic speech on 2026-10-07. Substitute your own measured values and the destination's verified targets, and check the installed version's [filter documentation](https://ffmpeg.org/ffmpeg-filters.html).

## Prepare each clip

Convert every selected take to one working format, so clips from different sources mix cleanly, and trim its silence in the same pass:

```sh
ffmpeg -n -hide_banner -v error -i takes/L1-t2.mp3 \
  -af 'silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.15,areverse' \
  -ar 48000 -ac 1 -c:a pcm_s24le clips/L1.wav
```

This keeps at most 50 ms of silence before the first word and 150 ms after the last by trimming the start, reversing, trimming again and reversing back; see [silenceremove](https://ffmpeg.org/ffmpeg-filters.html#silenceremove). Set the threshold above the take's noise floor but below quiet word endings; too high a threshold clips soft consonants and the decay of the last word. Listen to the start and end of every trimmed clip.

Remove or soften loud breaths and mouth clicks within a line by editing or a retake, keeping breaths whose removal would make the read sound unnatural. Never cut inside a word. Prefer a retake to time-stretching a line to fit the picture; stretching changes the voice audibly. Lines of one read should sound equally loud: measure each clip as below and correct outliers with gain rather than compressing every line.

Measure each clip's duration from decoded audio; the last `out_time` value is the decoded length:

```sh
ffmpeg -hide_banner -v error -i clips/L1.wav -f null - -progress pipe:1 | grep '^out_time=' | tail -1
```

With FFprobe, `ffprobe -v error -show_entries format=duration -of csv=p=0 clips/L1.wav` reports the container's duration.

## Place lines and build the stem

Compute positions from the manifest: the first line starts at the lead-in, each later line starts at the previous clip's end plus its own pause, and the stem ends at the last clip's end plus the tail. Then place each clip by sample offset:

```sh
ffmpeg -n -hide_banner -v error -i clips/L1.wav -i clips/L2.wav -filter_complex \
  '[0:a]adelay=delays=28800S:all=1[a0];[1:a]adelay=delays=160240S:all=1[a1];[a0][a1]amix=inputs=2:normalize=0,apad=whole_dur=6.339562,atrim=end=6.339562[voice]' \
  -map '[voice]' -ar 48000 -ac 1 -c:a pcm_s24le voice-raw.wav
```

Here L1 starts at 0.6 s, which is 28800 samples at 48 kHz, and L2 at 3.338333 s. `normalize=0` stops `amix` from lowering each input; `apad` and `atrim` fix the stem's length. Give [adelay](https://ffmpeg.org/ffmpeg-filters.html#adelay) milliseconds or a sample count with `S`. In FFmpeg 7.0, a fractional value with an `s` suffix, such as `0.6s`, is parsed as milliseconds (0.6 ms), so the clip barely moves; `1s` does give a second. Confirm placement: each `silence_end` reported below should equal a line's start plus its kept lead-in.

```sh
ffmpeg -hide_banner -nostats -i voice-raw.wav -af silencedetect=noise=-50dB:d=0.3 -f null -
```

## Match loudness to the destination

There is no universal loudness target. Find the destination's current documented requirement and record it with its source and date. [EBU R128](https://tech.ebu.ch/docs/r/r128.pdf), for example, normalizes broadcast programme loudness to −23 LUFS with a −1 dBTP maximum true peak; streaming, social and podcast platforms publish or apply their own targets, and those change. A web page embed may have no requirement; then match the other media on the same page or channel and record the level as an assumption. A stem delivered to an editor often needs the level the editor specifies rather than a final target.

Normalize the assembled voice stem in two passes with [loudnorm](https://ffmpeg.org/ffmpeg-filters.html#loudnorm). Replace the `TARGET_*` placeholders with the verified values. First measure:

```sh
ffmpeg -hide_banner -nostats -i voice-raw.wav -af loudnorm=I=TARGET_I:TP=TARGET_TP:LRA=TARGET_LRA:print_format=json -f null -
```

Then apply, passing the JSON's `input_i`, `input_tp`, `input_lra`, `input_thresh` and `target_offset`; the numbers below come from one trial:

```sh
ffmpeg -n -hide_banner -nostats -i voice-raw.wav \
  -af 'loudnorm=I=TARGET_I:TP=TARGET_TP:LRA=TARGET_LRA:measured_I=-16.78:measured_TP=-2.29:measured_LRA=1.80:measured_thresh=-27.15:offset=-0.22:linear=true:print_format=json' \
  -ar 48000 -c:a pcm_s24le voice.wav
```

Check the reported `normalization_type`. When linear scaling cannot meet the targets, loudnorm falls back to dynamic mode, which compresses the voice and upsamples to 192 kHz internally; the explicit `-ar` restores the working rate. Linear scaling fails when the gain needed to reach the integrated target would push the true peak over its maximum, or when the input's loudness range exceeds the target range. Then choose one of these and record it:

- Limit peaks first, then measure and run the linear pass again. The needed gain is the target minus the measured `input_i`; set the ceiling below the true-peak target by that gain plus a margin of about 1 dB, since `alimiter` limits sample peaks rather than true peaks. In a trial at a −14 LUFS target, the stem fell back to dynamic; limiting at 0.544 (−5.3 dBFS) with `alimiter=limit=0.544:level=false:latency=true` let the next linear pass reach −13.9 LUFS with a −1.9 dBTP true peak. `level=false` stops automatic gain, and `latency=true` compensates the lookahead delay, which keeps line starts in place.
- Lower the integrated target, or raise the loudness-range target, where the destination allows it.
- Accept dynamic normalization after listening for pumping or flattened delivery, and record that choice.

Then measure the result independently:

```sh
ffmpeg -hide_banner -nostats -i voice.wav -af ebur128=peak=true:framelog=verbose -f null -
```

The summary reports integrated loudness, loudness range and true peak, measured as defined in [ITU-R BS.1770](https://www.itu.int/rec/R-REC-BS.1770); see [ebur128](https://ffmpeg.org/ffmpeg-filters.html#ebur128-1). `framelog=verbose` moves its per-frame readings below the default log level, leaving the summary. Measure again after any mix and after the final mux, because encoding changes peaks.

## Add music when asked

The default deliverable is the voice stem. Add a music bed only when the request asks for one, and then deliver three files: the voice stem, the ducked music and the mix, each named in the manifest. Sound effects, and music cut to picture events, stay with the consuming video, edit or deck, because their timing depends on the picture.

Use music only with a license covering the destination, duration, territory and any monetization or paid promotion, and keep the license or receipt with the manifest. Generated music follows its generator's terms. Platform matching systems can flag licensed tracks, so keep the proof ready. Leave music out rather than use an uncleared track.

Edit the music to the narration: start and end on musical phrases and fade at a phrase end. Duck it under the voice and write both the ducked bed and the mix:

```sh
ffmpeg -n -hide_banner -v error -i music.wav -i voice.wav -filter_complex \
  '[1:a]aformat=channel_layouts=stereo,asplit=2[key][vo];[0:a][key]sidechaincompress=threshold=0.03:ratio=8:attack=30:release=400,asplit=2[bed][under];[vo][under]amix=inputs=2:normalize=0[mix]' \
  -map '[bed]' -c:a pcm_s24le music-ducked.wav -map '[mix]' -c:a pcm_s24le mix.wav
```

The voice drives [sidechaincompress](https://ffmpeg.org/ffmpeg-filters.html#sidechaincompress) on the music. In the trial, the music sat about 15 dB lower under speech and returned in the pauses. Tune threshold, ratio and release by listening: a short release makes the music pump, and a long one leaves it low through the pauses. Normalize the finished mix to the destination target as above; the voice stem keeps its own normalization.

## Check by listening

Listen to every line at normal speed on headphones and on a small speaker, with music and picture where they exist. Check each name and number, clipped starts or endings, clicks, distortion, room noise, abrupt breaths, level and tone between lines, natural pauses, and music masking words. Mark each line in the manifest as listened, with the listener and date.

Corroborate with measurements: decoded duration of every clip and the stem, integrated loudness and true peak against the recorded target, and silence positions against computed starts. Speech recognition, such as a local Whisper model, can compare words and timing with the script and flag missing or extra words.
