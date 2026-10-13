import { expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";
import { loadCases, parseCases } from "../run-evals.ts";

test("regression cases retain usable raw inputs, separate expectations and existing skill owners", () => {
  const root = resolve(import.meta.dir, "../..");
  const seen = new Set<string>();
  const packages = [...new Bun.Glob("skills/*/*/SKILL.md").scanSync(root)];
  const cases = loadCases(resolve(root, "evals/cases"));
  const workflows = [...new Bun.Glob("evals/workflows/*.json").scanSync(root)].map((path) =>
    JSON.parse(readFileSync(resolve(root, path), "utf8")),
  );
  for (const item of parseCases([...cases, ...workflows])) {
    expect(item.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    expect(seen.has(item.id)).toBe(false);
    seen.add(item.id);
    expect(packages.some((path) => path.endsWith(`/${item.skill}/SKILL.md`) && existsSync(resolve(root, path)))).toBe(
      true,
    );
    expect(item.prompt.trim().length).toBeGreaterThan(0);
    expect(item.expected.length).toBeGreaterThan(0);
    expect(item.expected.every((value) => value.trim().length > 0)).toBe(true);
    for (const path of Object.keys(item.files)) {
      expect(isAbsolute(path) || path.split(/[\\/]/).includes("..")).toBe(false);
    }
  }
});
