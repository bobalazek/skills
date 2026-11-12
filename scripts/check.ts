import { existsSync, readdirSync, readFileSync, realpathSync, statSync } from "node:fs";
import { dirname, extname, isAbsolute, join, relative, resolve } from "node:path";

const read = (path: string) => readFileSync(path, "utf8");
const mapping = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value);
const inside = (root: string, path: string) => {
  const rel = relative(root, path);
  return rel !== ".." && !rel.startsWith("../") && !rel.startsWith("..\\") && !isAbsolute(rel);
};

function files(root: string): string[] {
  if (!existsSync(root)) return [];
  return readdirSync(root, { withFileTypes: true }).flatMap((entry) => {
    const path = join(root, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

function links(content: string): string[] {
  const prose = content.replace(/```[\s\S]*?```/g, "");
  return [...prose.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
}

function localTarget(source: string, raw: string): string | undefined {
  const value = raw.replace(/^<|>$/g, "");
  if (/^[a-z][a-z\d+.-]*:/i.test(value) || value.startsWith("#")) return;
  const path = value.split(/[?#]/, 1)[0];
  if (!path) return;
  const target = resolve(dirname(source), decodeURIComponent(path));
  return existsSync(target) ? realpathSync(target) : target;
}

export function audit(inputRoot: string) {
  const root = realpathSync(inputRoot);
  const errors: string[] = [];
  const allSkillFiles = files(join(root, "skills"));
  const packages = allSkillFiles.filter((path) => path.endsWith("/SKILL.md"));
  const names = new Set<string>();
  let resources = 0;
  const fail = (path: string, message: string) => errors.push(`${relative(root, path)}: ${message}`);
  const targets = (source: string): string[] =>
    links(read(source)).flatMap((raw) => {
      try {
        const target = localTarget(source, raw);
        return target ? [target] : [];
      } catch {
        fail(source, `invalid local link: ${raw}`);
        return [];
      }
    });

  for (const entry of packages) {
    if (relative(join(root, "skills"), entry).split(/[\\/]/).length !== 3) {
      fail(entry, "expected skills/<domain>/<skill>/SKILL.md");
    }
    if (!inside(dirname(entry), realpathSync(entry))) fail(entry, "skill entrypoint leaves its package");
    const match = read(entry).match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
    let metadata: unknown;
    try {
      metadata = match ? Bun.YAML.parse(match[1]) : undefined;
    } catch {
      fail(entry, "invalid YAML frontmatter");
    }
    if (!mapping(metadata)) {
      fail(entry, "missing mapping frontmatter");
      continue;
    }
    const { name, description } = metadata;
    if (typeof name !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name) || name.length > 64) {
      fail(entry, "invalid name");
    } else if (name !== dirname(entry).split(/[\\/]/).at(-1) || names.has(name)) {
      fail(entry, "duplicate or mismatched name");
    } else {
      names.add(name);
    }
    if (typeof description !== "string" || !description.trim() || description.length > 1024) {
      fail(entry, "invalid description");
    }
    const agentFile = join(dirname(entry), "agents/openai.yaml");
    if (!existsSync(agentFile) || !statSync(agentFile).isFile()) {
      fail(agentFile, "missing regular agent metadata file");
    } else if (!inside(dirname(entry), realpathSync(agentFile))) {
      fail(agentFile, "agent metadata leaves its package");
    } else {
      try {
        const agent: unknown = Bun.YAML.parse(read(agentFile));
        if (!mapping(agent)) {
          fail(agentFile, "agent metadata must be a mapping");
        } else if (!mapping(agent.interface)) {
          fail(agentFile, "interface must be a mapping");
        } else {
          const { display_name, short_description, default_prompt } = agent.interface;
          if (typeof display_name !== "string" || !display_name.trim()) {
            fail(agentFile, "invalid interface.display_name");
          }
          const shortLength =
            typeof short_description === "string" && short_description.trim() ? [...short_description].length : 0;
          if (shortLength < 25 || shortLength > 64) {
            fail(agentFile, "interface.short_description must be a string of 25–64 characters");
          }
          const invocations =
            typeof default_prompt === "string" ? [...default_prompt.matchAll(/\$([A-Za-z0-9_-]+)/g)] : [];
          if (invocations.length !== 1 || invocations[0][1] !== name) {
            fail(agentFile, `interface.default_prompt must contain one exact $${name} invocation`);
          }
        }
      } catch {
        fail(agentFile, "invalid agent metadata YAML");
      }
    }
    const reached = new Set([realpathSync(entry)]);
    const queue = [entry];
    while (queue.length) {
      const source = queue.pop()!;
      for (const target of targets(source)) {
        if (!inside(dirname(entry), target)) {
          fail(source, `runtime reference leaves its package: ${relative(dirname(source), target)}`);
        } else if (existsSync(target) && !reached.has(target)) {
          reached.add(target);
          if (extname(target) === ".md") queue.push(target);
        }
      }
    }
    for (const resource of files(dirname(entry)).filter((path) => path !== entry && path !== agentFile)) {
      resources++;
      if (!reached.has(realpathSync(resource))) fail(resource, "resource is not reachable from SKILL.md");
    }
  }

  const domains = new Set(packages.map((entry) => relative(join(root, "skills"), entry).split(/[\\/]/)[0]));
  for (const entry of packages) {
    const domain = relative(join(root, "skills"), entry).split(/[\\/]/)[0];
    const catalog = join(root, "docs/domains", `${domain}.md`);
    if (!existsSync(catalog) || !targets(catalog).includes(realpathSync(entry))) {
      fail(entry, "absent from its owning domain catalog");
    }
  }
  const router = join(root, "skills/productivity/choose-skill/references/skill-map.matrix.md");
  if (!existsSync(router)) {
    fail(router, "missing skill routing map");
  } else {
    const routed = new Set<string>();
    let domain = "";
    let cells: string[] = [];
    Bun.markdown.render(read(router), {
      heading(children, meta) {
        if (meta.level === 2) domain = children.toLowerCase().replace(/[^a-z0-9]/g, "");
        return children;
      },
      td(children) {
        cells.push(children.trim());
        return children;
      },
      tr(children) {
        if (cells.length === 3) {
          const name = cells[1];
          if (!names.has(name)) fail(router, `unknown routed skill: ${name}`);
          if (routed.has(name)) fail(router, `duplicate routed skill: ${name}`);
          routed.add(name);
          const entry = packages.find((path) => dirname(path).split(/[\\/]/).at(-1) === name);
          if (entry && dirname(dirname(entry)).split(/[\\/]/).at(-1)?.replace(/-/g, "") !== domain) {
            fail(router, `routed skill in wrong domain: ${name}`);
          }
        }
        cells = [];
        return children;
      },
    });
    for (const name of names) {
      if (!routed.has(name)) fail(router, `missing routed skill: ${name}`);
    }
  }
  const readme = join(root, "README.md");
  if (existsSync(readme)) {
    const content = read(readme);
    if (Number(content.match(/^(\d+) skills?\b/m)?.[1]) !== packages.length) {
      fail(readme, `summary must report ${packages.length} skills`);
    }
    const listedDomains = [...content.matchAll(/^\|.*\]\(docs\/domains\/([a-z0-9-]+)\.md\)/gm)].map(
      (match) => match[1],
    );
    for (const domain of new Set([...domains, ...listedDomains])) {
      const count = packages.filter((entry) => dirname(dirname(entry)) === join(root, "skills", domain)).length;
      const row = content.split("\n").find((line) => line.includes(`](docs/domains/${domain}.md)`));
      if (Number(row?.match(/· (\d+) skills?\]/)?.[1]) !== count) {
        fail(readme, `domain catalog row must report ${count} ${domain} skills`);
      }
    }
  }
  const prTemplate = join(root, "skills/engineering/explain-pr/references/pr-description.template.md");
  const githubTemplate = join(root, ".github/pull_request_template.md");
  if (
    existsSync(prTemplate) &&
    (!existsSync(githubTemplate) || !statSync(githubTemplate).isFile() || read(prTemplate) !== read(githubTemplate))
  ) {
    fail(
      githubTemplate,
      "PR template must match explain-pr/references/pr-description.template.md; copy the canonical template",
    );
  }
  const markdown = [
    join(root, "README.md"),
    ...(existsSync(join(root, "AGENTS.md")) ? [join(root, "AGENTS.md")] : []),
    ...files(join(root, "docs")),
    ...files(join(root, "evals")),
    ...allSkillFiles,
  ].filter((path) => extname(path) === ".md");
  for (const path of markdown) {
    if (!existsSync(path)) {
      fail(path, "missing document");
      continue;
    }
    const content = read(path);
    if (!content.endsWith("\n") || content.split("\n").some((line) => line.trimEnd() !== line)) {
      fail(path, "whitespace or final newline");
    }
    if ((content.match(/^```/gm)?.length ?? 0) % 2) fail(path, "unclosed code fence");
    if (path.endsWith(".checklist.md")) {
      let pending = 0;
      Bun.markdown.render(content, {
        listItem(children, meta) {
          if (meta?.checked === false) pending++;
          if (meta?.checked === true) fail(path, "reusable checklist contains prechecked task items");
          return children;
        },
      });
      if (!pending) fail(path, "checklist needs unchecked task items");
    }
    for (const target of targets(path)) {
      if (!inside(root, target) || !existsSync(target)) fail(path, `broken/outside local link: ${target}`);
    }
  }
  if (!packages.length) errors.push("no skill packages found");
  return { errors, packages: packages.length, resources };
}

if (import.meta.main) {
  const result = audit(resolve(import.meta.dir, ".."));
  if (result.errors.length) {
    console.error(result.errors.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(
      `PASS: ${result.packages} skill packages, ${result.resources} reachable resources; metadata, local links, standalone boundaries, catalog/router coverage, README counts, checklist format`,
    );
  }
}
