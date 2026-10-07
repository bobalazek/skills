# Shot manifest

Use the project's existing capture record when it has one. Otherwise have the capture script write this manifest beside the images, so files and records cannot drift apart. Keep one entry per shot.

## Set fields

| Field | Meaning |
| --- | --- |
| `appRevision` | The commit or build that was captured |
| `capturedAt` | Capture date |
| `command` | The one command that regenerates the whole set |
| `seed` | Seed or fixture name and version |
| `environment` | Fixed clock, time zone, locale, color scheme and reduced-motion setting |
| `rules` | Where the rules on what must not be shown come from, with its revision |

## Shot fields

| Field | Meaning |
| --- | --- |
| `id` | Stable ID consumers refer to |
| `file` | Output path relative to the manifest |
| `route` | URL path and query, using seeded slugs rather than generated IDs where possible |
| `steps` | Actions after navigation: clicks, tabs, scrolling, filled fields, pointer parking |
| `viewport`, `deviceScaleFactor` | CSS viewport and scale, plus phone emulation when used |
| `output` | Expected pixel width and height, which the guard checks |
| `purpose` | The copy line, storyboard beat or documentation section the shot illustrates, and what it must show |
| `consumers` | Files or artifacts that use the shot |
| `pixelDependents` | Consumers relying on positions inside the image, such as callout regions, cursor coordinates or crops |
| `masked` | Masked or hidden regions and why |
| `forbiddenCheck` | Result of the whole-frame check, who made it and when |

## Example

```json
{
  "appRevision": "abc1234",
  "capturedAt": "2026-10-07",
  "command": "npm run capture:screens",
  "seed": "demo-venue@3",
  "environment": { "clock": "2026-03-10T10:00:00-04:00", "timezone": "America/New_York", "locale": "en-US", "colorScheme": "light", "reducedMotion": "reduce" },
  "rules": "docs/product-brief.md@abc1234: unreleased features and internal tools are not shown",
  "shots": [
    {
      "id": "bookings",
      "file": "bookings.png",
      "route": "/bookings?view=list",
      "steps": ["park pointer bottom-right"],
      "viewport": { "width": 1600, "height": 1000 },
      "deviceScaleFactor": 2,
      "output": { "width": 3200, "height": 2000 },
      "purpose": "Landing copy 'Every booking in one list': tonight's list with three seeded bookings",
      "consumers": ["site/landing/screens.ts", "video/storyboard.md beat B3"],
      "pixelDependents": ["video/index.html callout on the 20:00 row"],
      "masked": [],
      "forbiddenCheck": { "result": "passed", "by": "reviewer name", "on": "2026-10-07" }
    }
  ]
}
```

## Check each shot

- It shows the screen and state its purpose names, with seeded data, rather than a neighboring list or index page.
- It has the expected dimensions and is sharp at 100%.
- It has no unintended hover highlight, focus ring, caret, spinner, skeleton, toast, scrollbar, truncated label or error state.
- The whole frame is free of forbidden content: navigation items, badges, tab labels, notifications, avatars, URLs, file names, tooltips and corners.
- It holds no real personal data, secrets or internal addresses.
- For a recording, every frame was checked, including transitions and the first and last frames.
- After a recapture, every entry in `pixelDependents` was rechecked.
