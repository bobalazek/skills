# Navigation and findability

Use this mode for information architecture, menu or hierarchy changes, or a finding that users cannot locate a capability. Its result remains a usable map of destinations and paths, with evidence and unresolved choices. Do not turn a bounded journey task into a whole-product navigation exercise.

## Inventory the relevant area

Inspect current content, capabilities, routes and available navigation evidence within the requested scope. Record what exists before regrouping it. For a new area, separate required destinations from proposed ones; a plausible menu item does not establish a product requirement.

| Destination or content | User goal and audience | Current group, label and entry paths | Access and state constraints | Source or uncertainty |
| --- | --- | --- | --- | --- |
| Stable destination identity | What a person needs to find or do | Menu, contextual link, search or direct link, where supported | Role, prerequisite, unavailable or removed state | Actual route/content evidence or proposed need |

Identify duplicates, orphaned destinations, ambiguous names and labels with different meanings. Preserve useful familiar routes and terminology. Check whether a findability problem comes from grouping, naming, missing content, permissions or a broken route before prescribing a new hierarchy.

## Propose structure and paths

Group destinations around supported user goals and domain relationships. Explain the evidence and tradeoff behind a changed grouping; compare alternatives only where a real uncertainty remains. Do not impose a universal menu size, depth, card-sort method or number of choices. A taxonomy proposal without user evidence remains a hypothesis.

Map the proposed hierarchy with stable destination identifiers and visible labels. Distinguish global, local and contextual navigation when the product uses them. Record canonical destinations and legitimate multiple entry paths so that several routes to one capability do not accidentally become duplicate capabilities.

For each affected task, show the entry point, how the user recognizes the destination, where they are after arriving, and how they return or move to a related task. Connect these paths to the main flow's states and recovery requirements.

Check only access methods relevant to the product:

- **Browsing:** Does the grouping and label predict the destination? Is the current location understandable without knowing the implementation's module names?
- **Search:** Which content or capabilities are actually searchable, under what terms and permissions? Describe the supported no-results or correction path. Do not invent search infrastructure to repair one label.
- **Deep links:** What happens on direct entry, after sign-in, when prerequisites are missing, or when a destination moves or disappears? Preserve required existing links and identify compatibility decisions without assuming redirects are authorized or implemented.
- **Permissions:** Distinguish intentionally hidden destinations from discoverable but unavailable ones according to accepted policy. Navigation visibility is not an authorization mechanism; do not expose protected names or counts through labels or search results.
- **Return paths:** Check browser/platform back behavior where applicable, relevant context preservation, cancellation, exits and recovery. Mark proposed behavior separately from what has been exercised.

## Validate the map

Walk representative goals from their actual entry contexts using the proposed labels. Include an alternate entry, relevant permission boundary and failure or missing-destination path when they matter. Check destinations and guards against the source inventory, and retain the map revision and walkthrough evidence. A structurally connected diagram alone does not prove that people can find their way.

For example, an accepted task may be “find a previous export.” The map needs the destination containing export history, its label and grouping, supported entry paths, the user's permission and a usable return route. It does not imply a new export feature, global search or a specific menu label. If users' interpretation of the proposed label is uncertain, carry that question into a study rather than declaring the map intuitive.

## Handoff for user evidence

When participant evidence is needed, use `test-usability` if available or prepare the equivalent bounded protocol. A tree test can examine the hierarchy and labels without visual composition; a comprehension task can examine what a label or consequence means. Choose a method for the unresolved question, not a mandatory sequence of studies.

Pass the exact hierarchy/label revision, target audience, neutral task goals, intended destinations, acceptable alternative paths and consequential uncertainty. Do not put the navigation label being tested into the task prompt. Record which role-based view is being tested and any differences from the live product. Recruitment, sessions and publication need their actual authority; recommending a study does not mean one happened.

Return the inventory, proposed or accepted map, affected flow paths, observed checks and remaining evidence gap. Preserve independent assessment identity and coverage with the candidate map; changes to shared labels or hierarchy invalidate affected path and study claims until rechecked.
