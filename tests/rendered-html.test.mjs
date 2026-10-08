import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Vesper landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
});

test("keeps deployment assets and motion preferences production-ready", async () => {
  const [css, packageJson] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  await access(new URL("../public/og.png", import.meta.url));
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /backdrop-filter/);
  assert.match(packageJson, /cross-env WRANGLER_LOG_PATH=/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});


test("audio routes expose their own instructions and verified installers", async () => {
  for (const [path, heading, installer] of [
    ["/", "좋아하는 음악을", null],
    ["/open-source", "Libraries &amp; Tools", null],
    ["/dsp", "소리의 경로를", "VesperDSP_0.0.32_x64-setup.exe"],
    ["/eq", "작은 조절이", "VesperEQ_0.1.0_x64-setup.exe"],
    ["/woofer", "저음도", "Vesper.Woofer_1.3.7_x64-setup.exe"],
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.ok(html.includes(heading), path);
    if (installer) assert.ok(html.includes(installer), path);
    assert.doesNotMatch(html, /href=["']\/harness["']/);
  }
  const harness = await render("/harness");
  assert.equal(harness.status, 200);
  assert.ok((await harness.text()).includes("Vesper Harness"));
});
