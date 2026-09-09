import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "img");
mkdirSync(outDir, { recursive: true });

function materialize(prefix, nums, outName) {
  const parts = nums
    .map((n) => join(root, "scripts", `${prefix}${n}`))
    .filter((p) => existsSync(p))
    .map((p) => readFileSync(p, "utf8").replace(/\s+/g, ""))
    .join("");

  if (!parts) {
    console.warn(`[materialize] no b64 parts for ${outName}, skip`);
    return;
  }

  const out = join(outDir, outName);
  const buf = Buffer.from(parts, "base64");
  writeFileSync(out, buf);
  console.log("[materialize] wrote", out, buf.length, "bytes");
}

materialize("txdot-cover.b64.", [1, 2, 3, 4], "txdot-cybercab-okladka.jpg");
materialize("nashville-tasm-full.b64.", [1, 2, 3], "nashville-prufrock-tasm.jpg");
materialize("samsung-taylor-okladka.b64.", [1, 2, 3, 4, 5, 6, 7], "samsung-taylor-okladka.jpg");
materialize("cybercab-unboxed-linia.b64.", [1, 2, 3, 4, 5, 6, 7, 8], "cybercab-unboxed-linia.jpg");
materialize("fsd-ace-unik.b64.", [1], "fsd-ace-unik.jpg");
