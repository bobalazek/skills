export function isConventionalTitle(title: string, allowedTypes?: readonly string[]): boolean {
  const header = /^([a-z][a-z0-9-]*)(?:\(([^()\r\n]+)\))?!?: \S[^\r\n]*$/i.exec(title);
  return (
    title === title.trim() &&
    header !== null &&
    (!header[2] || (header[2].trim().length > 0 && header[2] === header[2].trim())) &&
    (!allowedTypes || allowedTypes.includes(header[1]))
  );
}

if (import.meta.main && !isConventionalTitle(process.env.PR_TITLE ?? "")) {
  console.error("Invalid PR title. Supply PR_TITLE as type(scope): description; scope and ! are optional.");
  process.exitCode = 1;
}
