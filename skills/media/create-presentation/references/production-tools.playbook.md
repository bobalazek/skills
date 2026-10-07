# Presentation tool paths

Use for producing or exporting slides. Select the smallest available path that preserves the requested editable format. Inspect the host's installed skills, connected tools and existing project dependencies first; use their tool-specific guidance instead of inventing an API or installing another renderer. Record the chosen tool/version, source, destination and checks in the existing deck record.

## Choose by the editable target

| Target and starting material | Useful path | What to preserve |
| --- | --- | --- |
| Existing PowerPoint or Keynote deck | The native application through an available connector or UI; work on a copy | Masters/layouts, editable objects, chart data, notes and builds |
| Native Google Slides | Available Slides connector or authorized Slides/Drive APIs | Presentation and object IDs, layouts, notes and ownership/sharing state |
| New PowerPoint generated from structured content | An existing presentation generator; PptxGenJS is one TypeScript-capable option when available | Native text, shapes, tables and charts rather than full-slide screenshots |
| Existing Canva deck/template | Available Canva design tools | Native design link, editable elements and supported export formats |
| HTML deck explicitly requested | Existing HTML slide system or simple semantic HTML, then a browser such as Playwright for rendering | Text and visuals in editable source; browser navigation and print layout if requested |

HTML is not the default fallback for a native-deck request. A missing native path can leave an outline ready for production, or an explicitly agreed alternative. Creating a cloud deck writes to an external account; check the authorized destination and inspect actual tool schemas. Neither mentioning a provider here nor having credentials authorizes a write.

## Native and connected editing

1. Read the actual source/template and inventory slide order, page size, layouts, object IDs, notes, charts and linked assets. Reuse stable IDs when available; slide position alone is fragile after reordering.
2. Copy the source into the authorized destination unless in-place editing was requested. Preserve the original and record the new artifact identity. For Google Slides, presentation creation and template copying are separate operations; see [Google's create/copy guide](https://developers.google.com/workspace/slides/api/guides/presentations).
3. Make the scoped content/layout changes through supported operations. Inspect returned results and re-read the affected slides and notes. After an uncertain write, inspect state before retrying so a retry does not duplicate slides or content.
4. Render or open every final slide. Reconcile text/object inspection with visuals: text reads can miss clipping and thumbnails can miss wrong notes or chart values.
5. Save, reopen and test a representative edit in a disposable copy. Export the requested formats and inspect those files separately. Record any lost media, notes, fonts, links, object editability or reading structure.
6. Return the native artifact and requested exports through the authorized route. Check link access if sharing was requested; do not broaden permissions merely to make a link work.

Canva generation can propose layouts, but it does not verify source facts or editability of an exported deck. For API export, inspect supported formats, submit the export job, wait for its terminal result and retrieve the actual files; [Canva's export API](https://www.canva.dev/docs/apps/rest-apis/reference/exports/create-design-export-job/) documents the contract. Inspect them in the requested target, rather than treating a successful cloud export as compatibility proof.

## Code-generated PowerPoint

Use this path for a new deck when the dependency is already available or its installation is authorized. Do not assume a generator can import and preserve an existing template; choose native editing when that is the requirement.

For PptxGenJS, verify the installed version against its [TypeScript quick start](https://gitbrent.github.io/PptxGenJS/docs/quick-start/). Create the presentation, set the required layout/theme, add slides, then add native text, shapes, tables or charts using explicit dimensions. Write the file only after resolving assets and await completion. Keep content/data separate from layout choices so a factual correction does not require rebuilding the argument.

Preview a dense slide in the target environment before building the entire deck. Supply alt text and speaker notes through supported APIs where needed. Avoid blind font shrinking or exporting slides as images to hide layout problems. Save the generating source and data with the deck; inspect every final slide and verify actual editability in the target application. A generator's valid PPTX is only the start of that check.

## Browser-authored decks

Use semantic headings, text, tables and labeled visuals in the requested dimensions. Reuse a slide framework only when the project already uses one or needs its navigation/presenter behavior. A few static reading slides may need no framework.

Open the source in the target browser. Wait for fonts and image decoding; fail on missing assets and page errors. Use the browser's accessibility structure and DOM measurements to help inspect reading order and overflow, then visually inspect every slide at intended viewing size. [Playwright screenshots](https://playwright.dev/docs/screenshots) can capture individual slide elements; check all edges and footers after scrolling, and use an isolated slide view or a viewport containing the complete target if capture clips it. An image capture alone does not test live navigation or editability. If PDF is requested, set page size and print rules explicitly, export, then inspect the PDF's page count, text, links and structure. Browser print output is not automatically accessible.

For a live deck, exercise next/previous navigation, keyboard focus, full-screen or presenter mode and required media. For a reading deck, ensure essential explanation is visible without speaker notes. Change representative text in a disposable source copy and rerender to demonstrate the requested source editability.
