import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import { isAbsolute, resolve } from "node:path";
import cases from "../evals/cases.json";
import { parseCases } from "./run-evals.ts";

test("regression cases retain usable raw inputs, separate expectations and existing skill owners", () => {
  const root = resolve(import.meta.dir, "..");
  const seen = new Set<string>();
  const packages = [...new Bun.Glob("skills/*/*/SKILL.md").scanSync(root)];
  for (const item of parseCases(cases)) {
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
