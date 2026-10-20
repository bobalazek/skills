# Video production platforms

**Verified 2026-10-20.** Scope: Vid.AI, Crayo, SendShort, AutoShorts.ai and Short.ai, with Revid and OpusClip as adjacent alternatives. Evidence is official product, pricing and developer documentation; Short.ai and AutoShorts billing toggles were also inspected in a browser. These are documented capabilities, not measured production quality. No paid generation, checkout, authenticated API or connected-channel publishing was tested. Recheck on the day of purchase or integration.

## Workflow coverage

| Platform | Input and production | Editing and delivery | Programmatic access |
| --- | --- | --- | --- |
| Vid.AI | Idea/script to narrated shorts or long videos; stock footage/music, generated imagery, avatars and word-timed captions | Editable sections/timeline, replace visuals and re-record sections; rendered download. Native scheduling not established by inspected docs | Documented REST and MCP: script/sections → generation → render → result. [Pricing](https://vid.ai/pricing), [changelog](https://vid.ai/changelog), [REST](https://vid.ai/docs/api), [MCP](https://vid.ai/docs/mcp) |
| Crayo | Long-video clipping plus Reddit-story/fake-text workflows, voiceovers, images and captions | Browser timeline, reframing and exports. Vendor explicitly says it has no scheduler | REST for assets, narration, transcripts, scene projects, exports and AutoClip; shared app balances on paid plans. [Features](https://crayo.ai/), [story workflow](https://crayo.ai/features/reddit-story), [API](https://crayo.ai/features/api), [delivery limits](https://crayo.ai/compare) |
| SendShort | Long-video clipping and original faceless stories from a prompt/custom script; voices, visuals and captions | Caption/edit tools, B-roll and downloads; scheduler advertises TikTok/YouTube | Documented MCP/agent tools cover importing, moments, themes and clipping. Complete faceless-creation API coverage was not established. [Faceless workflow](https://sendshort.ai/tools/faceless-video-generator/), [AI Agent](https://sendshort.ai/ai-agent/), [pricing](https://sendshort.ai/pricing/) |
| AutoShorts.ai | Topic/custom prompt to recurring narrated faceless series; default still images with optional motion | Review/edit script, title, images and music; download or schedule TikTok/YouTube/Instagram. Short formats, not long form | Public API documentation not established. [Product, plans and FAQs](https://autoshorts.ai/) |
| Short.ai | Idea/script to story scenes, voices and subtitles; faceless templates plus captioning and clipping tools | Scene/caption editing, download and a separate channel scheduling product | API access is advertised on comparison pages; endpoint/authentication docs and entitlement remain unverified. [Story workflow](https://www.short.ai/ai-short-story-generator), [captions](https://www.short.ai/ai-caption-generator), [scheduler](https://www.short.ai/social-media-scheduler), [API claim](https://www.short.ai/alternatives/quso.ai-alternative) |
| Revid | Script, prompt, article or audio to visuals, narration, captions and music; also video-to-clips | Editable projects, publishing and Auto-Mode workers | Documented REST, MCP and CLI; estimates, async project IDs, polling/webhooks. [Product](https://www.revid.ai/), [developer docs](https://www.revid.ai/docs) |
| OpusClip | Existing video to selected moments, reframed/captioned clips; Pro adds B-roll and dubbing | Editor, download/posting; Pro adds scheduler and Premiere/Resolve export | Pro advertises limited API access; Business offers custom integrations. MCP documents editing and scheduling. [Plans](https://www.opus.pro/pricing), [MCP tools](https://www.opus.pro/blog/opusclip-mcp-tools-reference) |

## Pricing and the unit being sold

USD displayed prices before any unverified tax/checkout adjustments. Monthly means monthly billing unless stated. Counts are vendor allowances or advertised maxima, not guaranteed accepted outputs.

| Platform | Observed plans | Quota and budgeting consequence |
| --- | --- | --- |
| [Vid.AI](https://vid.ai/pricing) | Starter $39/month; Plus $99; Pro $199 | Advertises 40/80/300 one-minute shorts **or** 4/8/30 ten-minute videos. Shared credits fund the alternatives; premium options consume more. Included monthly credits reset; annual credits arrive upfront |
| [Crayo](https://crayo.ai/pricing) | Observed annual view: Hobby $160/year; Clipper $327; Pro $664 | Monthly allowances: 250/1,000/3,000 workflow credits; 2/10/30 export hours; 30/120/180 voice minutes; 100/300/500 images. One workflow credit per generated video; other resource caps still apply. Subscription credits do not roll over |
| [SendShort](https://sendshort.ai/pricing/) | Starter $19/month; Professional $29; Business $59 | 20/50/“unlimited” shorts per month; 90-second/3-minute/10-minute ceilings. Faceless allowance 3/week on Starter, 10/week on Professional. Business FAQ qualifies unlimited as 100+ subject to fair use. Translation can spend another short credit per enabled language ([help](https://help.sendshort.ai/en/category/editor-1awu9f5/)) |
| [AutoShorts.ai](https://autoshorts.ai/) | Starter $19/month; Daily $39; Hardcore $69, at one series | 3 posts/week, once/day or twice/day; 27/62/124 motion credits. Posting cadence, included motion and series count are different limits. Free generation was marked paused |
| [Short.ai creation](https://www.short.ai/pricing) | Live monthly view: Basic $19; Pro $30; Enterprise $60 | 1,600/3,600/7,200 credits/month; advertised up to 40/90/180 videos **or** 53/120/240 caption minutes. Story generation costs 20 credits/30 seconds, captions 30/minute and clipping 20/minute. Shared-pool maxima cannot be added |
| [Short.ai channels](https://www.short.ai/pricing?type=channel) | Separate Essentials plan: $15/month for 3 channels, +$5 per extra channel | Free: 3 posts/day/channel, 10 pending/channel. Essentials: 10 posts/day/channel, unlimited pending. Creation and publishing capacity need separate checks |
| [Revid](https://www.revid.ai/pricing) | Growth $39/month; Ultra $199 | 2,000/12,000 monthly AI credits; 3/10 Auto-Mode workers. [API docs](https://www.revid.ai/docs) price rendering at 10 credits plus generation costs and provide a free estimate. Credits do not imply a fixed video count |
| [OpusClip](https://www.opus.pro/pricing) | Starter $15/month, 150 credits; Pro $29/month, 300 credits | [Workflow docs](https://www.opus.pro/mcp/inspiration/turn-one-product-video-into-three-language-markets) describe roughly one credit per source minute per language run. Compare source-processing cost with accepted clips; caption translation does not dub the audio |

## Resolve these source gaps

- **Vid.AI:** pricing advertises long form and API/MCP across plans, while REST long-form docs require an internal `PRO` subscription. Do not equate that identifier with the retail Pro plan. Read live account limits/options and the selected transport's credit estimate before charging work. REST and MCP document different polling intervals.
- **SendShort:** pricing and the dedicated AI Agent page advertise API on Professional+, while the [homepage](https://sendshort.ai/) SaaS section says Business. Pricing also contains conflicting included/locked feature text for SRT/fonts. Verify the account before promising an integration or sidecar export.
- **Short.ai:** server-rendered billing labels conflict with the live toggle. Annual effective monthly prices observed were $19/$25.50/$51 for creation and $12.50 for the three-channel Essentials plan; checkout totals were not tested. Landing-page scheduler copy also conflicts with the pricing tab. Its [terms](https://www.short.ai/terms) do not authorize unofficial API interfaces or bots merely because a UI subscription exists.
- **All products:** ownership/“royalty-free” wording does not clear third-party footage, music, brands or likenesses for every use. Verify the selected assets and destination. Unverified API access means investigate or use an authorized supported UI, not reverse-engineer private endpoints.

## Selection guidance

This is our interpretation of the documented coverage, pending a paid output comparison:

- For an original narrated video with stock footage and longer sections, start a Vid.AI versus Revid pilot. Check editable handoffs and account limits before comparing cost.
- For existing recordings, compare Crayo, SendShort and OpusClip with the same source. Crayo's export cap and OpusClip's source-minute meter can bind differently even when both return several clips.
- For recurring faceless shorts with built-in scheduling, assess AutoShorts, Short.ai and Revid. Compare episode quality and total creation/channel cost before enabling a series.
- For exact product screens, brand layouts or local-file control, use a composable capture/voice/caption/edit route and compare its review time with the hosted option.

Use the [narrated-short playbook](narrated-short.playbook.md) for the production handoffs, repair dependencies and a fair pilot. No quality winner or audience-performance claim follows from this documentation review.
