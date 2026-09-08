import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const parts = [1, 2, 3, 4]
  .map((n) => join(root, "scripts", `txdot-cover.b64.${n}`))
  .filter((p) => existsSync(p))
  .map((p) => readFileSync(p, "utf8").trim())
  .join("");

if (!parts) {
  console.warn("[materialize-txdot-cover] no b64 parts found, skip");
  process.exit(0);
}

const outDir = join(root, "public", "img");
mkdirSync(outDir, { recursive: true });
const out = join(outDir, "txdot-cybercab-okladka.jpg");
writeFileSync(out, Buffer.from(parts, "base64"));
console.log("[materialize-txdot-cover] wrote", out, Buffer.from(parts, "base64").length, "bytes");
