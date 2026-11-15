# Report review checks

Use after an actual result returns. Record relevant outcomes in the existing task or review; a checked box without source or command evidence proves nothing.

- [ ] Identify the returned worker, artifact/revision and the brief it was given; distinguish a planned or interrupted attempt from a completed return.
- [ ] Inspect the actual diff or result against every material criterion and its allowed write/side-effect scope. Preserve unrelated owner work when reconciling violations.
- [ ] Check claims against source and raw command/interaction evidence, including relevant exit status and output. A report saying “tests passed” is not a test run.
- [ ] Trace changed contracts and values through their consumers. Confirm that returned paths, exported fields and referenced artifacts are usable, not merely present in a producer's output.
- [ ] Preserve source requirements and controls; unexplained dropped criteria, weakened checks or a changed task need reconciliation before dependent work.
- [ ] Keep failed, unavailable and inapplicable checks distinct. Ask for the specific missing evidence or perform the authorized check; do not relabel an unobserved result as passing.
- [ ] Integrate in dependency order and exercise the affected joined behavior under compatible conditions. Shared state or fixtures need isolation before checks overlap.
- [ ] Obtain the required independent assessment for the fixed integrated candidate and retain its actual returned result. An author's self-check or empty wait does not satisfy it.
- [ ] Report only the reached state and preserve blocked consumers, remaining inputs and still-valid evidence when a branch fails.
