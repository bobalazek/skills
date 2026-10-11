import { isConventionalTitle } from "../skills/engineering/ship-change/scripts/check-pr-title.ts";

export function isRepositoryTitle(title: string): boolean {
  return isConventionalTitle(title, [
    "feat",
    "fix",
    "docs",
    "style",
    "refactor",
    "perf",
    "test",
    "build",
    "ci",
    "chore",
    "revert",
  ]);
}

if (import.meta.main && !isRepositoryTitle(process.env.PR_TITLE ?? "")) {
  console.error(
    "Invalid PR title. Use type(scope): description; scope and ! are optional. See docs/authoring.md#git-workflow.",
  );
  process.exitCode = 1;
}
