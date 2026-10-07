# Carousel tool paths

Use when producing editable panels and exports. Start from the accepted template and requested editable source, then inspect available host tools. Reuse an installed tool-specific skill or connector's current instructions. Do not build a rendering service for one image set.

| Existing material or requested source | Available path | Check before choosing |
| --- | --- | --- |
| Native Canva, Figma or other design document | Supported connector or native editor UI | Access to the actual document, duplication/edit operations, text layers, page order and export support |
| Editable HTML/CSS accepted | Browser rendering, such as Playwright | Installed browser, font/asset availability, fixed canvas sizing and capture access |
| Existing data-driven image template | Its existing SVG, Sharp or other image pipeline | Real text layout/wrapping, font support and editable source; a raster export is not the source |
| Swipe PDF | Export from the chosen authoring path | Page dimensions/order, retained real text, tags/reading order and image descriptions; image stitching alone cannot establish accessible PDF output |

## Adapt a native design

Read the document and inspect representative panels before editing. Duplicate into the authorized location unless an in-place edit was requested. Preserve useful styles and editable layers. Change content through actual text/image fields or layers, not screenshots of the original; keep source claims and chart data traceable.

Preview the cover and densest panel, then build the remaining sequence. Inspect final order in the native document and in its exports. A resize command does not establish a good reflow: check every affected panel at the new format. Record native document identity and export identities together.

Use connected tool schemas, not guessed API calls. For Canva's [export workflow](https://www.canva.dev/docs/apps/rest-apis/reference/exports/create-design-export-job/), verify format support, submit the job, wait for completion and retrieve the actual outputs. A completed export job does not verify words, layout or destination acceptance. Do not change sharing settings or upload private material beyond the authorized scope.

## Render HTML panels

1. Keep content in explicit ordered data or semantic HTML, with a stable ID per panel. Escape untrusted text instead of injecting source content as executable markup. Use local or authorized assets and real editable text.
2. Define a fixed canvas per requested variant and intentional inner layout. Keep full copy visible; resolve overflow by revising the layout or authorized wording before shrinking type. Wait for fonts and image decoding and check browser errors before capture.
3. Capture each panel element at a controlled viewport and pixel ratio with [Playwright's screenshot API](https://playwright.dev/docs/screenshots), or the available equivalent. Capture the panel rather than the entire scrolling page. Check all edges after scrolling; if capture clips the panel, isolate it or use a viewport containing the complete target. Explicit names such as `01-cover.png` preserve order; keep the ordered manifest with alt text and transcript.
4. Read actual image dimensions, format and file sizes. Inspect all exported images, including at the intended feed width, and compare words/numbers against the accepted content. DOM overflow checks help find defects but are not a visual verdict.
5. For PDF, use explicit page size, margins and one panel per page. Open or render every resulting page; check selectable text and logical reading order separately. Retain the ordered accessible text companion even when the authoring tool cannot produce all required PDF structure.

Use a minimal TypeScript/Bun capture script when the host needs code, with the project's existing browser dependency. Do not add a new package merely for file ordering or metadata checks that available tools already provide. Record the source, exact command and tool versions so the set can be reproduced.

## Reuse an image pipeline

For an existing template, update the smallest content/data input and reuse its render command. Check font resolution, line breaks, image fit and output color/transparency behavior. [Sharp's composite API](https://sharp.pixelplumbing.com/api-composite/) can assemble prepared layers; it does not decide whether a headline fits or whether a chart is truthful. Keep semantic copy and vector/source assets alongside the output so corrections remain possible.

Do not rasterize every panel into a PDF merely because image export works. Preserve text and structure where available, and label any format/accessibility limitation. The native design, browser or pipeline is a production choice; all paths still need the final-artifact checks in the skill.
