---
name: capture-product-screens
description: "Capture reproducible screenshots or screen recordings of your own product for marketing, docs or media, from seeded demo data in deterministic states, with a shot manifest and checks for content that must not appear. Not for analyzing other sites' designs, visual regression baselines or editing footage."
---

# Capture product screens

Produce a reproducible set of real product screenshots or recordings, with a manifest mapping each shot to its route and state, viewport, device scale, data seed, purpose and consumers. Reuse the project's existing capture script, seed, fixtures and output folder before writing new ones. A shot-list request finishes with the planned list.

Neighboring work belongs elsewhere. `capture-design-reference` analyzes other interfaces, such as public websites, as design references; it produces no assets of this product. Visual regression screenshots are test oracles compared against baselines, and they stay with the project's test suite; a capture script can share its fixtures and login helpers, but marketing shots are not assertions. `edit-video` edits footage once it exists. A screen that does not exist yet is a design for `design-interface`, never a capture. Check availability before naming these skills, and describe the plain action when one is missing.

## Plan shots from the copy

Read project instructions, the product brief, and the copy, storyboard or page the shots will accompany. For each shot, name the line or purpose it serves and the screen and state that shows the product doing that job. Point the shot at the screen the words are about: when the copy names prices and allergens, capture an open menu, not the list of menus. Note each consumer's display size, aspect ratio and frame, and whether it crops.

Collect the project's rules for what must not appear: unreleased, unsold or deliberately unfeatured features; internal and admin tools; secrets, tokens and internal addresses; personal data and real customer content; environment banners and developer overlays. Ask the owner when the rules are silent about a feature that will be visible.

## Prepare data and environment

Capture seeded or demo data in a local, preview or staging environment built from a recorded revision. Never capture real customer data. Use production only with authority and an account that holds only demo data. Make the data realistic for the audience: plausible names, amounts, dates and volumes, populated lists and charts, and one coherent persona across shots. Avoid "Test 1", placeholder text and empty states unless the copy is about them. Use fictional people, `example.com` addresses and phone numbers from ranges reserved for fiction where they exist. Keep the seed reproducible as a committed script or fixture, with slugs or names the capture can find.

## Make every state deterministic

For a scripted browser capture, load [the capture script guide](references/capture-script.playbook.md). Fix what varies between runs: clock, date and time zone, locale, color scheme, reduced motion and animations, loaded fonts and decoded images, lazily loaded content, toasts and banners, the caret and focus, scroll position, and a pointer parked away from hover targets unless the shot is about hover. Wait for a condition only the finished state has rather than a fixed delay. Fail the run on HTTP, console or page errors, the product's error text, blank pages or missing seed records, rather than saving a broken shot.

Use one viewport and device scale per set, chosen from where the shots will appear: match the consumer's aspect ratio, and use a device scale of at least 2 so text stays sharp on high-density screens and when a consumer enlarges a region. Capture shots that a consumer frames as a phone with phone emulation. Size captures for the frame instead of cropping full-page captures later.

## Keep forbidden content out of frame

Exclude forbidden content by choosing the state and data: another tab, a filtered list, a feature flag off for the demo account, or a different seed record. Masking is a fallback; record each mask in the manifest. Never retouch a capture to show something the product does not do. Check the whole frame, not only the subject: navigation items, badges, notifications, tab labels, tooltips, addresses, file names, avatars and corners. For recordings, check every frame, including transitions, loading flashes and the first and last frames; sampled frames cannot prove absence.

## Record the manifest and guard references

Have the capture script write [the shot manifest](references/shot-manifest.template.md) beside the output. Add a guard to the project's ordinary checks that fails when a consumer references a capture that is missing or absent from the manifest, or one with the wrong dimensions; show it failing before trusting a pass. Keep the capture script out of ordinary test runs unless the project wants it there, with one command that regenerates the set.

For a screen recording, script actions at a pace viewers can follow, with a visible pointer when they need to track it, at the consumer's resolution and frame rate. Browser test recordings are test artifacts and may not reach that quality. For a motion video, stills of each state animated in the composition are often sharper and easier to retime.

## Verify and regenerate

Open every capture at 100% and at its display size. Check that it shows the intended state and data and matches its copy line, has the expected dimensions and sharpness, and has no hover highlight, focus ring, spinner, scrollbar, truncated text or error state. Check the whole frame against the rules and record the result per shot. Run the guard. Run the script a second time on the same revision and compare: small antialiasing differences are acceptable, changed content is not.

When the UI, seed or copy changes, rerun the script, compare the new set with the previous one, and update the manifest. Consumers that depend on pixel positions, such as callout regions, cursor coordinates or crops, must recheck the affected shots.

Before acceptance, have a separate agent in fresh context challenge the raw request, product rules, copy and the actual captures and manifest, without the author's conversation or preferred answer. Retain its reviewer/session identity, assessed revision, findings and coverage. Fix defects and independently recheck affected shots. Without that assessment, label the set unreviewed.

## Return and hand off

Return the captures, manifest, capture script and seed with the command that reruns them, the app revision, checks performed, masked shots and exact gaps. Pass the manifest and output paths to `create-motion-video`, `create-carousel`, `create-presentation` or `design-interface` when available, naming shots with pixel-position dependents; otherwise describe the plain next action. Committing captures to a shared branch, uploading or publishing needs applicable authority. Continue already-authorized work without an extra permission loop.
