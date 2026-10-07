# Voice sources

Use when choosing, auditioning, recording or generating the voice: a human recording, a text-to-speech provider or a scratch voice. The provider notes below were checked against their documentation on 2026-10-07. Models, voices, parameters, prices and policies change, so confirm the current primary documentation before relying on any name here, and list available voices and models through the provider rather than from memory.

## Choose the source

| Source | Fits when | Needs before use | Watch for |
| --- | --- | --- | --- |
| Human recording by the owner, a colleague or hired talent | A known person should be heard, or the brand voice matters more than turnaround | A quiet room, a usable microphone and recorder, and the speaker's written agreement to the use | Consistency between sessions; pickups need the same microphone, room and distance |
| Text-to-speech with a stock voice | Fast iteration, several languages, or no speaker available | An account and key, authority for the spend, and terms that allow the intended commercial use | Names read wrongly, uneven intonation between lines, disclosure duties |
| Custom or cloned voice | A consenting person's voice is wanted at scale | That person's documented consent for this use and the provider's verification process | Provider limits; some allow cloning only your own voice |
| Scratch voice: operating-system speech or a quick phone read | Pacing previews before the final voice exists | A local tool | Shipping it by accident; label it scratch everywhere |

Choose from availability and authority as well as quality. Paid generation, new accounts and uploading recordings to a provider need applicable authority; a key in the environment grants access, not permission to spend. Never clone or imitate an identifiable person's voice, including a sound-alike of a public figure or a colleague, without that person's documented consent for this use. Read the chosen provider's use policy and terms for commercial use and disclosure. OpenAI's text-to-speech guide, for example, requires telling end users that the voice they hear is AI-generated. Record the source decision, who authorized it, and any disclosure the destination needs.

## Select the voice

Shortlist two to four voices against the brief: audience, language and accent, register and pace. Audition each on the same three or four lines: the opening line, a line with the brand or product name, one with a number or address, and the call to action. Listen at normal speed on the destination's likely playback device, with the music or picture when those exist. When the voice represents a brand, choose with the owner. Record the provider, model, voice identifier, settings and date, then keep them fixed for every line and later pickups; changing model or settings mid-piece changes the voice audibly.

## Record a human read

Give the speaker the script with line IDs, the pronunciation list and a short direction per line, such as who they are talking to and how much energy to use. Record in the quietest available space at a steady distance from the microphone. Use 48 kHz WAV unless the project works at another rate, and keep peaks well clear of clipping. Capture a few seconds of room tone for filling gaps. Record two or three takes of each line, saying or noting the line ID before each, and play back the first line before continuing to catch microphone or noise problems early. Keep the session's original files unchanged and work on copies.

Get the speaker's written agreement covering where the recording will be used, for how long, and whether it may be edited. Training or cloning a voice from the recording needs its own explicit consent.

## Generate with a provider

These practices apply to any provider:

- Read the key from the project's secret store or environment. Never write it into the script, manifest, logs or repository.
- Estimate characters multiplied by takes before a batch, since providers bill by characters or requests, and stay within the authorized spend.
- Send one request per line so a changed line regenerates alone. Cache each clip under a key made of its spoken text, voice, model and settings, and regenerate only lines whose key changed.
- Where the provider accepts neighboring text or earlier requests as context, pass it, so intonation continues naturally across separately generated lines.
- Request a lossless format, or the highest available quality at or above the project sample rate, to avoid compressing twice before the mix.
- The same request can return different audio on another run. A seed, where supported, reduces variation but may not remove it. Keep the selected file; parameters alone do not reproduce a take.

ElevenLabs: the [text-to-speech endpoint](https://elevenlabs.io/docs/api-reference/text-to-speech/convert) takes the voice ID in the path and the key in the `xi-api-key` header. Its body fields include `model_id`, `voice_settings`, `seed`, `previous_text` and `next_text` for context, and `pronunciation_dictionary_locators`; `output_format` is a query parameter. [Pronunciation controls](https://elevenlabs.io/docs/best-practices/prompting/controls) differ by model: phoneme tags, pronunciation dictionaries with alias or phoneme rules, and break tags each work only with some models. Check the [models overview](https://elevenlabs.io/docs/overview/models) for current names. The [voice cloning guide](https://elevenlabs.io/docs/product-guides/voices/voice-cloning) limits Professional Voice Clones to your own verified voice; another person shares theirs from their own account. See its [use policy](https://elevenlabs.io/use-policy).

OpenAI: the [text-to-speech guide](https://developers.openai.com/api/docs/guides/text-to-speech) describes the speech endpoint, built-in voices, an `instructions` field on newer models for tone, pace and accent, output formats including WAV and PCM, custom voices created from consent recordings, and the disclosure requirement above. Check it for current models and any pronunciation control; when none fits, respell.

Other providers support [SSML](https://www.w3.org/TR/speech-synthesis11/) or [pronunciation lexicons](https://www.w3.org/TR/pronunciation-lexicon/) to different degrees. Test what the chosen provider and model actually honor: unsupported markup can be read aloud or silently ignored.

## Get names right

The owner decides how their brand, product and people's names are said. Ask for a recording or a respelling of each, or find a recording of the owner saying it, and keep the list with the script. Then apply the control the source supports:

1. A provider pronunciation dictionary or alias, which carries across scripts, where the chosen model supports it.
2. A phoneme or SSML tag where supported, checked word by word.
3. A respelling in the line's spoken text, such as "KWOR-uh" or "example dot com", leaving the caption text unchanged. This works with any source.
4. For a human read, the respelling and a reference recording in the script, plus a corrected take when the read misses.

Write numbers, dates, currencies, units, acronyms and addresses as they should be spoken, and decide between letter-by-letter and word readings. Listen to every occurrence.
