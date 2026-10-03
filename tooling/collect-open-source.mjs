import fs from "node:fs";
import path from "node:path";
import { parse } from "yaml";

const source = process.argv[2];
if (!source)
  throw new Error(
    "Usage: node tooling/collect-open-source.mjs <vesper-source-root>",
  );
const rows = [];
const notices = [];
for (const [scope, root] of [
  ["Website", process.cwd()],
  ["DSP", path.join(source, "dsp")],
  ["Woofer", path.join(source, "woofer")],
]) {
  const manifest = JSON.parse(
    fs.readFileSync(path.join(root, "package.json"), "utf8"),
  );
  const lockPath = path.join(root, "pnpm-lock.yaml");
  const pnpm = fs.existsSync(lockPath)
    ? parse(fs.readFileSync(lockPath, "utf8"))
    : null;
  for (const [kind, deps] of [
    ["runtime", manifest.dependencies],
    ["development", manifest.devDependencies],
  ]) {
    for (const name of Object.keys(deps ?? {})) {
      const local = path.join(root, "node_modules", name, "package.json");
      let pkg;
      if (fs.existsSync(local))
        pkg = JSON.parse(fs.readFileSync(local, "utf8"));
      else {
        const group = kind === "runtime" ? "dependencies" : "devDependencies";
        const version =
          pnpm?.importers?.["."]?.[group]?.[name]?.version?.split("(")[0];
        if (!version) throw new Error(`No resolved version: ${scope} ${name}`);
        const response = await fetch(
          `https://registry.npmjs.org/${encodeURIComponent(name)}/${version}`,
        );
        if (!response.ok)
          throw new Error(`npm metadata: ${name} ${response.status}`);
        pkg = await response.json();
      }
      const repository =
        typeof pkg.repository === "string"
          ? pkg.repository
          : pkg.repository?.url;
      const url = (
        repository ??
        pkg.homepage ??
        `https://www.npmjs.com/package/${name}`
      )
        .replace(/^git\+/, "")
        .replace(/^git:\/\//, "https://")
        .replace(/\.git$/, "");
      const sourceUrl = /^https?:/.test(url) ? url : `https://github.com/${url.replace(/^github:/, "")}`;
      rows.push({
        scope,
        ecosystem: "npm",
        name,
        version: pkg.version,
        license:
          typeof pkg.license === "string"
            ? pkg.license
            : (pkg.license?.type ?? "확인 필요"),
        url: sourceUrl,
        kind,
      });
      const dir = path.dirname(local);
      if (fs.existsSync(dir))
        for (const file of fs
          .readdirSync(dir)
          .filter((f) => /^(licen[sc]e|notice|copying)(\.|$|-)/i.test(f))) {
          const full = path.join(dir, file);
          if (fs.statSync(full).isFile())
            notices.push(
              `\n===== ${scope} / ${name} ${pkg.version} / ${file} =====\n${fs.readFileSync(full, "utf8")}`,
            );
        }
    }
  }
}
fs.writeFileSync(
  "app/open-source/inventory.json",
  JSON.stringify(rows, null, 2) + "\n",
);
fs.writeFileSync(
  "public/open-source-inventory.json",
  JSON.stringify(rows, null, 2) + "\n",
);
fs.writeFileSync(
  "public/third-party-notices.txt",
  "Collected local license texts for directly declared npm dependencies.\nNot an exhaustive notice bundle for compiled application binaries.\n" +
    notices.join("\n"),
);
console.log(`Collected ${rows.length} direct npm dependencies`);
