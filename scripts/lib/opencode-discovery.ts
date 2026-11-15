import { appendFileSync, closeSync, mkdirSync, openSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { verifyOpenCodeV2 } from "./skill-packages.ts";

/** v2 registers skills asynchronously; a one-shot standalone GET can precede registration. */
export async function discoverOpenCodeV2(
  project: string,
  output: string,
  installed: string,
  names: string[],
  env: Record<string, string | undefined>,
) {
  const password = crypto.randomUUID();
  const isolated: Record<string, string | undefined> = {
    ...env,
    OPENCODE_PASSWORD: password,
    OPENCODE_SERVER_PASSWORD: password,
  };
  // Keep user configuration, plugins, credentials and same-ID global skills out of this fixture.
  for (const kind of ["CONFIG", "DATA", "CACHE", "STATE"]) {
    const directory = join(output, `opencode-${kind.toLowerCase()}`);
    mkdirSync(directory);
    isolated[`XDG_${kind}_HOME`] = directory;
  }
  const stderr = openSync(join(output, "opencode.stderr"), "wx", 0o600);
  const started = performance.now();
  const child = Bun.spawn(["opencode", "serve", "--stdio", "--hostname", "127.0.0.1", "--port", "0"], {
    cwd: project,
    env: isolated,
    stdin: "pipe",
    stdout: "pipe",
    stderr,
    timeout: 45_000,
    killSignal: "SIGKILL",
  });
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const reader = child.stdout.getReader();
    const ready = new Promise<string>((resolve, reject) => {
      void (async () => {
        let line = "";
        const decoder = new TextDecoder();
        while (!line.includes("\n")) {
          const part = await reader.read();
          if (part.done) throw new Error("OpenCode server exited before readiness.");
          line += decoder.decode(part.value, { stream: true });
        }
        resolve(line.slice(0, line.indexOf("\n")));
      })().catch(reject);
    });
    const line = await Promise.race([
      ready,
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error("OpenCode server readiness timed out.")), 30_000);
      }),
    ]);
    clearTimeout(timer);
    const url = new URL(JSON.parse(line).url);
    if (url.protocol !== "http:" || url.hostname !== "127.0.0.1" || !url.port || url.username || url.password)
      throw new Error("Unexpected OpenCode private server address.");
    url.pathname = "/api/skill";
    const deadline = Date.now() + 30_000;
    let lastError: unknown;
    do {
      const response = await fetch(url, {
        headers: { Authorization: `Basic ${Buffer.from(`opencode:${password}`).toString("base64")}` },
        signal: AbortSignal.timeout(5_000),
      });
      if (!response.ok) throw new Error(`OpenCode skill GET failed (${response.status}).`);
      const raw = await response.text();
      appendFileSync(join(output, "opencode-discovery.jsonl"), `${raw}\n`, { mode: 0o600 });
      try {
        verifyOpenCodeV2(raw, project, installed, names);
        writeFileSync(join(output, "opencode.stdout"), raw, { mode: 0o600 });
        return raw;
      } catch (error) {
        lastError = error;
      }
      await Bun.sleep(250);
    } while (Date.now() < deadline);
    throw new Error(`OpenCode skill registration timed out: ${String(lastError)}`);
  } finally {
    clearTimeout(timer);
    child.kill();
    const exitCode = await child.exited;
    writeFileSync(
      join(output, "opencode-server.json"),
      JSON.stringify({
        argv: ["opencode", "serve", "--stdio", "--hostname", "127.0.0.1", "--port", "0"],
        exitCode,
        signal: child.signalCode,
        durationMs: performance.now() - started,
        shutdown: "terminated after read-only discovery",
      }),
      { mode: 0o600 },
    );
    closeSync(stderr);
  }
}
