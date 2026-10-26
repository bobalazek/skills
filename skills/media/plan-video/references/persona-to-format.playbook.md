# From persona to short-video ideas

Use this before any footage exists, when someone asks what they should post or a planner has to propose formats for a person or brand. It turns a persona and a goal into ranked formats, then concrete ideas, then draft hooks. Format facts, effort and status come from [the format catalogue](short-video-formats.matrix.md). Concept substance follows [concept development](concepts.playbook.md); final hook and script wording belong to the `write-video-script` skill when installed.

## 1. Fill the persona card

Ask only for what is missing; reuse the brand record, past posts and earlier answers. These fields change the outcome, so leave none of them guessed:

| Field | Why it matters |
| --- | --- |
| Who posts and who watches | The voice on camera and the viewer the ideas are for |
| Primary goal, plus at most two secondary | Picks the format family and the success measure (step 3) |
| On camera: face, voice only, hands only, nobody | Removes whole families of formats |
| Real material available now | Products, a workplace, a process, past shoots, customers who agreed to appear, screen recordings |
| Time per week and posts per week | Time divided by posts is the budget for one video |
| Account type per platform | A business account changes the music available (catalogue rules) |
| Platforms | TikTok, Reels or Shorts; each has its own audio and length rules |
| Sector constraints | Health, finance, weight loss, alcohol, children, client confidentiality |
| Humour and risk tolerance | Whether parody, opinion and meme formats are on the table |

When the user wants help deciding, offer the choice with a reason rather than demanding an answer first. A guessed on-camera preference or account type produces plans that cannot be made.

## 2. Filter formats out

Remove a format from the catalogue when any of these is true:

- Its **Cam** value asks for more than the persona will show. A persona who shows only hands keeps `hands`, `none` and `any` formats; voice only keeps `voice`, `none` and `any`; `others` needs people willing to appear.
- Its **Real** material does not exist and cannot be obtained this week. An unboxing without a product or a before-and-after without a project is a plan for later, not a suggestion now.
- Its total effort (prep + film + edit, upper bound) is larger than the budget for one video.
- The account is a business account and the format depends on a trending sound that is not cleared for business use (`trend-sound-lipsync`, often `beat-drop-reveal`).
- A sector constraint rules it out, for example weight-loss before-and-after on TikTok, or an `unpopular-opinion` about health.
- The persona will not accept the risk: parody, opinion and meme formats for a conservative brand.

## 3. Match the goal to format families

Pick from the families that serve the primary goal. The lists are starting points: any format can serve a goal when the idea does. Name the measure before the pilot so the result can be read honestly.

| Primary goal | Start with | Measure |
| --- | --- | --- |
| Sell or qualify demand | `tutorial`, `before-after`, `unboxing`, `haul`, `behind-the-scenes`, `reply-to-comment` answering buyer questions, teaching formats aimed at a buyer's decision | Qualified inquiries, opt-ins or attributable sales; views only explain distribution |
| Teach | `tutorial`, `talking-head`, `advice-list`, `top-n-list`, `green-screen`, `faceless-explainer`, `photo-slideshow`, `text-over-footage` | Saves and substantive questions as signals, not proof of learning |
| Entertain or be discovered | `pov-skit`, `nobody-meme`, `money-cant-buy`, `where-are-you-texts`, `expectation-reality`, `beat-drop-reveal`, `asmr-process`, `street-interview`, `fake-text-story`, parodies, `trend-sound-lipsync` | Completion, shares and returning viewers |
| Build community | `reply-to-comment`, `reaction`, `caption-this`, `this-or-that`, `tier-list`, `unpopular-opinion`, `duet-stitch-remix` | Comments and replies that continue the thread |
| Show the person behind it | `day-in-the-life`, `timestamp-vlog`, `grwm`, `ootd`, `routine-reset`, `aesthetic-vlog`, `whats-in-my-bag`, `recent-flops`, `storytime`, `behind-the-scenes` | Follows and returning viewers |

Settle on three to five recurring pillars, each one persona need crossed with what the brand can credibly show, and give each pillar one or two formats ([Sprout Social](https://sproutsocial.com/insights/social-media-content-pillars/), accessed 2026-10-26, recommends three to five pillars mapped from goals to personas and revisited every few months).

## 4. Rank what is left

Do not invent a weighted score. Order the remaining formats with these rules, each one breaking ties in the one before:

1. The **Real** material exists today.
2. Total effort fits the budget for one video. Among formats that fit, prefer the one that serves the strongest pillar over the cheapest.
3. Status: `live`, then `active-2026`, `evergreen`, `unverified`, `past-peak`. A `past-peak` format only makes sense when the persona has a sharp angle on it.
4. Fewer risk flags under the catalogue's rules.

Propose three formats unless asked for more, with one sentence each on why it fits this persona. Mix at least one low-effort format the person can make this week with one that builds the stronger pillar.

## 5. Turn each format into concrete ideas

A format is a container. An idea names what happens: format + a subject only this persona has + the real asset + the payoff for the viewer. "Tutorial about lighting" is a topic; "how I light a dark reception hall with one flash, shown on last Saturday's wedding" is an idea.

- Give each format three ideas with three different reasons to watch, not three hooks for one premise.
- Seed subjects from real demand: questions in comments and DMs, customer emails, YouTube Studio's Trends tab ("Top searches" and "Content gaps for Shorts", last 28 days; [YouTube Help](https://support.google.com/youtube/answer/11962757), accessed 2026-10-26) and search suggestions.
- Mark every idea that depends on an unconfirmed asset, person or result. A staged or hypothetical result is never presented as observed.
- If an idea adds nothing beyond a familiar list, change the idea rather than sell it harder. [Concept development](concepts.playbook.md) covers substance and the reward once an idea is chosen.

## 6. Draft the hook from the format's first beat

Every catalogue entry's first beat is where its hook lives: the comment sticker, the "POV:" caption, the sealed box, the worst "before". Draft one or two openings per idea that make the promise visible and audible in that beat. TikTok's creative guidance asks for the proposition within the first 3 seconds and the hook within the first 6 ([TikTok Ads Help](https://ads.tiktok.com/help/article/creative-best-practices), updated June 2025). Final wording, on-screen text and the first proof beat belong to the script; use `write-video-script` when installed, and `review-writing` for generic phrasing.

## 7. Return a suggestion record

One record per proposed idea, so an app can store it and a person can approve it:

```yaml
format: tutorial              # catalogue id
pillar: "Lighting in hard venues"
why_this_persona: "Shoots receptions in dark halls every weekend; couples ask about it"
idea: "One flash, one dark reception hall: before and after from last Saturday"
hook_drafts:
  - "This hall had one window and I still got the shot."
real_assets_needed: [raw and edited frames from the 2026-10-24 wedding, couple's consent to show them]
ai_share: assist              # none | assist | heavy, from the catalogue
effort_minutes: { prep: 15, film: 20, edit: 30, source: estimate }
status: { value: active-2026, checked: 2026-10-26 }
risk_flags: [client consent, venue rules]
open_questions: ["Will the couple agree to appear?"]
```

Effort carries `source: estimate` until the user's own measured times replace it.

## Check popularity before you commit

Status in the catalogue is a starting point. Before producing a trend-dependent format, check it again in the places below. No platform publishes its trend thresholds or refresh rate, so read direction over a few days rather than a single number.

| Source | What it shows | Lead or lag | Notes |
| --- | --- | --- | --- |
| [TikTok Creative Center](https://ads.tiktok.com/help/article/how-to-use-trends) | Trending hashtags, songs, creators and videos by region, industry and time frame; songs can be filtered to "Approved for business use" | Leading for songs marked new to the top 100 or breakout | Requires login; window lengths are not documented, so read them in the UI. The TikTok Research API is limited to non-commercial researchers ([TikTok Developers](https://developers.tiktok.com/products/research-api)) |
| Sound pages on TikTok and Instagram | Use count per sound | Leading when the count climbs over a few days | Instagram's trending arrow has no published threshold |
| [YouTube Studio Trends](https://support.google.com/youtube/answer/11962757) | Top searches, breakout videos from similar creators, content gaps for Shorts | Leading for unmet demand | Last 28 days; some insights are limited by country and language |
| [Google Trends](https://support.google.com/trends/answer/3076011) | Search interest, including a YouTube Search property | Middle | "Trending now" refreshes about every 10 minutes |
| Weekly trackers ([Later Reels](https://www.later.com/blog/instagram-reels-trends), [Later TikTok](https://later.com/blog/tiktok-trends/), [New Engen](https://newengen.com/insights/tiktok-trends/)) | Named trend instances with dates | Lagging by days | Curated; confirms a variant exists, says nothing of volume |
| [Know Your Meme](https://knowyourmeme.com/memes/what-do-your-statuses-mean) | Origin and spread of meme formats | Lagging | "Confirmed" with a long history means well understood and probably past its novelty |
| Annual reports (TikTok Next, YouTube Culture & Trends) | Direction for the year | Strategic | Never a "right now" signal |

Suggested cadence, our judgement rather than published decay data: sound and meme formats every two or three days while in production; format templates weekly; pillars and persona fit monthly or quarterly. Recheck any trend signal older than seven days before filming. To test a new format without risking the main audience, Instagram trial reels show a reel to non-followers first ([Instagram Creators](https://creators.instagram.com/blog/the-latest-with-instagram), 2025-01-21).

## Worked examples

**Wedding photographer, wants more inquiries.** Face on camera is fine but brief; real material is past shoots with couples' consent and a weekly shoot; three hours a week; creator account on Instagram, business account on TikTok. The business account takes `trend-sound-lipsync` off TikTok. Ranked: `before-after` (raw versus edited frame, material exists, about an hour), `behind-the-scenes` (filmed during Saturday's shoot), `reply-to-comment` answering "how far ahead should we book?". Pillars: proof of craft, the wedding day from the inside, planning answers.

**B2B SaaS founder, no face, brand account.** Wants qualified demo requests; can record the product screen; two hours a week. Face formats and trending audio are out. Ranked: `tutorial` as a screen recording of one job the buyer does weekly, then two teaching formats aimed at a buyer decision: `faceless-explainer` with sources, `photo-slideshow` of the same explainer for Instagram and TikTok Photo Mode. `fake-text-story` was filtered: it reaches entertainment viewers, not buyers, and carries the highest originality risk.

## Limits

This method chooses what to make. It cannot predict reach; the catalogue's status says a format is in use, not that it will work for this persona. Read the pilot against the measure named in step 3, change one thing at a time and record what was compared.
