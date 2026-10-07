# Capture script

Use when writing or repairing a scripted browser capture. The examples use Playwright's TypeScript API, checked against its documentation on 2026-10-07 and run with Playwright 1.58. Reuse the project's existing browser tool, login helpers and fixtures when it has them, and check the installed version's documentation.

## Fix the environment for the set

```ts
import { chromium, type Locator, type Page } from 'playwright';

const VIEWPORT = { width: 1600, height: 1000 };
const CLOCK = '2026-03-10T10:00:00-04:00';
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: VIEWPORT,
  deviceScaleFactor: 2,
  colorScheme: 'light',
  reducedMotion: 'reduce',
  locale: 'en-US',
  timezoneId: 'America/New_York',
});
await context.clock.setFixedTime(new Date(CLOCK));
const page = await context.newPage();
```

Choose the viewport from the consumer's frame: the same aspect ratio as the slot the image fills, and wide enough that tables and toolbars do not overflow mid-column. A device scale of 2 doubles the pixels, which keeps text sharp on high-density screens and leaves room to enlarge a callout. Use a separate context for shots a consumer frames as a phone, with a phone viewport, `isMobile: true`, `hasTouch: true` and a scale of 3.

`setFixedTime` fixes `Date.now()` and `new Date()` in the page while timers keep running; see [Clock](https://playwright.dev/docs/clock). Write the fixed time with the offset the chosen time zone actually has on that date: in the trial, `-05:00` for New York on 10 March rendered as 11:00, because daylight saving time had begun. The page clock does not change dates rendered by the server or stored in the seed, so seed relative dates from the same fixed date, or freeze the server's clock where the project supports it. `reducedMotion: 'reduce'` emulates the [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) and helps only when the product honors it; the screenshot option below also stops CSS animations. See [emulation](https://playwright.dev/docs/emulation) for the other context options.

## Reach a settled state

```ts
async function settle(page: Page, ready: Locator) {
  await ready.waitFor({ state: 'visible' });
  await page.evaluate(async () => {
    await document.fonts.ready;
    for (const image of Array.from(document.images)) {
      const box = image.getBoundingClientRect();
      if (box.bottom < 0 || box.top > innerHeight) continue;
      await image.decode();
    }
  });
}
```

Wait for a visible condition that only the finished state has, such as the table's first seeded row or a chart's plotted series, rather than a fixed sleep. Playwright marks `networkidle` as discouraged. The loop decodes each image in the frame one at a time and fails if one cannot load; [decode](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode) waits for the image to be ready to paint. Large images decoded in parallel can reject in Chromium, hence the sequence. For content that loads on scroll, scroll it into view, wait for its ready condition, then return to the intended scroll position.

## Fail on broken states

```ts
function watch(page: Page, allowed: RegExp[] = []) {
  const problems: string[] = [];
  const ignore = (text: string) => allowed.some((pattern) => pattern.test(text));
  page.on('pageerror', (error) => problems.push(`page error: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() === 'error' && !ignore(message.text())) problems.push(`console: ${message.text()}`);
  });
  page.on('response', (response) => {
    if (response.status() >= 400 && !ignore(response.url())) problems.push(`HTTP ${response.status()} ${response.url()}`);
  });
  page.on('requestfailed', (request) => problems.push(`request failed: ${request.url()}`));
  return problems;
}
```

Call `watch` before navigating and throw before saving when `problems` is not empty. Also check the page for the product's own error text and for an empty body. Allow known, harmless errors by exact pattern rather than ignoring a whole category.

## Park the pointer and capture

```ts
await page.mouse.move(VIEWPORT.width - 2, VIEWPORT.height - 2);
await page.screenshot({
  path: `captures/${shot.id}.png`,
  animations: 'disabled',
  caret: 'hide',
  style: '.toast { visibility: hidden !important; }',
});
```

Playwright leaves the pointer wherever the last action put it, and whatever sits under that point renders in its hover state. Park it at a point that is inert in every layout of the set, and confirm in the captured image. The [screenshot options](https://playwright.dev/docs/api/class-page#page-screenshot): `animations: 'disabled'` fast-forwards finite CSS animations and transitions and cancels infinite ones; `caret: 'hide'` hides the text caret but not a focus ring, so blur a focused field unless the shot is about it; `style` applies a stylesheet only while capturing. Use `style` for transient chrome such as toasts or development overlays, never to alter product content. `mask` covers locators with a solid box in `maskColor`: a visible redaction to record in the manifest. With the default `scale: 'device'`, a 1600 × 1000 viewport at scale 2 produces a 3200 × 2000 image. `locator.screenshot()` captures one component; check its edges and shadows.

## Write the manifest and guard references

Append each shot's record as it is saved, and write the manifest from the same script so it cannot drift from the files. Run a guard in the project's ordinary checks:

```ts
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function pngSize(path: string) {
  const bytes = readFileSync(path);
  if (bytes.toString('latin1', 1, 4) !== 'PNG') throw new Error(`${path} is not a PNG`);
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

export function checkCaptures(dir: string, referenced: string[]) {
  const manifest = JSON.parse(readFileSync(join(dir, 'manifest.json'), 'utf8'));
  const shots = new Map(manifest.shots.map((shot: { file: string }) => [shot.file, shot]));
  const errors: string[] = [];
  for (const file of referenced) {
    const shot = shots.get(file) as { output: { width: number; height: number } } | undefined;
    const path = join(dir, file);
    if (!shot) errors.push(`${file}: not in the capture manifest`);
    else if (!existsSync(path)) errors.push(`${file}: missing`);
    else {
      const { width, height } = pngSize(path);
      if (width !== shot.output.width || height !== shot.output.height) {
        errors.push(`${file}: ${width}x${height}, expected ${shot.output.width}x${shot.output.height}`);
      }
    }
  }
  return errors;
}
```

Collect `referenced` from the consumers: keep their capture paths in one module or data file the guard can import, or scan their source for paths in the capture folder. Show the guard failing on a missing file and on a wrong-size file before trusting a pass.

## Gate, rerun and compare

Keep the capture script out of ordinary test runs, for example behind an opt-in environment variable or its own package script, and give it one command. It writes to the folder consumers read and records the app revision in the manifest. Run it twice on the same revision and compare the outputs: small antialiasing differences are acceptable, while changed content means a source of variation is still unfixed. After a UI change, rerun, compare the new set with the previous one, and recheck consumers that depend on pixel positions.

## Record a flow

```ts
const recording = await browser.newContext({ viewport: VIEWPORT, recordVideo: { dir: 'recordings', size: VIEWPORT } });
```

The [video](https://playwright.dev/docs/videos) is saved when the context closes, so await `close()`. Without `size`, the recording is scaled down to fit 800 × 800. In the trial it came out as VP8 WebM at 25 fps and at the CSS viewport size, ignoring the device scale, so a recording is not a high-density capture. Pace actions with deliberate waits so a viewer can follow them. Inspect the file's actual resolution, frame rate and quality, and check every frame for forbidden content before use. For a motion video, stills of each state animated in the composition are usually sharper and easier to retime; a desktop screen recorder at the target resolution suits flows a browser cannot reproduce.
