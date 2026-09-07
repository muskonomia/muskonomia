import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const scriptsDir = join(root, "scripts");
// Only zero-padded two-digit parts (ignore legacy b64.1–4 placeholders)
const parts = readdirSync(scriptsDir)
  .filter((n) => /^txdot-cover\.b64\.\d{2}$/.test(n))
  .sort()
  .map((n) => readFileSync(join(scriptsDir, n), "utf8").trim())
  .join("");

if (!parts) {
  console.warn("[materialize-txdot-cover] no b64 parts found, skip");
  process.exit(0);
}

const outDir = join(root, "public", "img");
mkdirSync(outDir, { recursive: true });
const out = join(outDir, "txdot-cybercab-okladka.jpg");
const buf = Buffer.from(parts, "base64");
writeFileSync(out, buf);
console.log("[materialize-txdot-cover] wrote", out, buf.length, "bytes");
