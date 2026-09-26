import { createRequire } from "node:module";
import { cpSync, existsSync, readdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const dist = join(dirname(require.resolve("@electric-sql/pglite/package.json")), "dist");
const files = ["pglite.data", "pglite.wasm", "initdb.wasm"];

function findLibs(dir, acc, depth) {
  if (!existsSync(dir) || depth > 5) return;
  let names;
  try {
    names = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of names) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const path = join(dir, name);
    let isDir = false;
    try {
      isDir = statSync(path).isDirectory();
    } catch {
      continue;
    }
    if (!isDir) continue;
    if (name === "_libs") acc.push(path);
    else findLibs(path, acc, depth + 1);
  }
}

const targets = [];
for (const root of [".output", "dist", ".nitro", "server"]) findLibs(root, targets, 0);
if (!targets.length) {
  console.warn("[pglite] no _libs directory after build — skipped");
  process.exit(0);
}
for (const dir of targets) {
  for (const file of files) {
    const src = join(dist, file);
    if (!existsSync(src)) continue;
    cpSync(src, join(dir, file));
    console.log(`[pglite] ${file} -> ${dir}`);
  }
}
