import { expect, test } from "bun:test";
import { cpSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { isConventionalTitle } from "../../skills/engineering/ship-change/scripts/check-pr-title.ts";
import { isRepositoryTitle } from "../check-pr-title.ts";

test("accepts the repository's types, optional scopes and breaking markers", () => {
  for (const type of ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"]) {
    for (const prefix of [type, `${type}(engineering)`, `${type}!`, `${type}(scripts/checks)!`]) {
      expect(isRepositoryTitle(`${prefix}: explain the actual change (#46)`)).toBe(true);
    }
  }
});

test("rejects missing prefixes, malformed scopes, empty subjects and extra lines", () => {
  for (const title of [
    "Expand behavioral coverage and tighten threat-model evidence",
    "feed: add a skill",
    "feat add a skill",
    "feat: ",
    "feat:  add a skill",
    "feat(): add a skill",
    "feat( ): add a skill",
    "feat(scope): add a skill\nfix: hide a second line",
    "feat: add a skill\rmore",
    " feat: add a skill",
    "feat: add a skill ",
    "",
  ]) {
    expect(isRepositoryTitle(title)).toBe(false);
  }
});

test("the portable check accepts project-specific types without imposing this collection's policy", () => {
  expect(isConventionalTitle("release-tools(Compiler)!: change the supported output")).toBe(true);
  expect(isRepositoryTitle("release-tools(Compiler)!: change the supported output")).toBe(false);
  expect(isConventionalTitle("FIX: repair the parser")).toBe(true);
  expect(isRepositoryTitle("FIX: repair the parser")).toBe(false);
  expect(isConventionalTitle("custom: update the contract", ["custom"])).toBe(true);
  expect(isConventionalTitle("fix: update the contract", ["custom"])).toBe(false);
});

test("the complete ship-change package runs its bundled check without the maintainer repository", () => {
  const root = mkdtempSync(join(tmpdir(), "skills-title-"));
  try {
    cpSync(`${import.meta.dir}/../../skills/engineering/ship-change`, join(root, "ship-change"), { recursive: true });
    for (const [title, exitCode] of [
      ["Missing prefix", 1],
      ["custom(owner)!: describe the change", 0],
    ] as const) {
      const result = Bun.spawnSync([process.execPath, join(root, "ship-change/scripts/check-pr-title.ts")], {
        cwd: root,
        env: { ...process.env, PR_TITLE: title },
      });
      expect(result.exitCode).toBe(exitCode);
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("the CI entrypoint fails invalid input and treats shell syntax as data", () => {
  for (const [title, exitCode] of [
    ["Unprefixed title", 1],
    ["fix: handle $(exit 73) and `exit 74` literally", 0],
  ] as const) {
    const result = Bun.spawnSync([process.execPath, `${import.meta.dir}/../check-pr-title.ts`], {
      env: { ...process.env, PR_TITLE: title },
    });
    expect(result.exitCode).toBe(exitCode);
    if (exitCode) expect(result.stderr.toString()).toContain("Invalid PR title");
  }
});
