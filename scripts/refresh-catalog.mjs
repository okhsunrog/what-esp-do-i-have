/**
 * Re-reads Espressif's SoC and module product listings and reports how they
 * differ from the committed catalog.
 *
 *   vp run catalog:check     print the drift
 *   vp run catalog:check --json   machine-readable drift
 *
 * It deliberately does not rewrite src/data/*.ts. Part-level facts (flash,
 * PSRAM, ambient temperature, lifecycle) come from the part-number tables in
 * the module datasheets, which a maintainer has to read to confirm a change.
 * This script's job is to say *what* to go and check.
 */
import { parse } from "node-html-parser";
import { socParts } from "../src/data/socs.ts";
import { devBoards } from "../src/data/boards.ts";
import { moduleFamilies } from "../src/data/modules.ts";
import { sources } from "../src/data/sources.ts";

const text = (node) => (node ? node.text.replace(/\s+/g, " ").trim() : "");
const clean = (s) =>
  s
    .replace(/­/g, "")
    .replace(/\s*\([^)]*\)/g, "")
    .trim();

async function fetchDoc(url) {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return parse(await res.text());
}

async function liveSocParts() {
  const doc = await fetchDoc(sources.socListing);
  const out = new Map();
  for (const row of doc.querySelectorAll("tr.sheet-item")) {
    const part = clean(text(row.querySelector("td.chip-variants")));
    if (!part) continue;
    out.set(part, {
      package: text(row.querySelector("td.chip-package")),
      flash: text(row.querySelector("td.chip-flash")),
      psram: text(row.querySelector("td.chip-psram")),
    });
  }
  return out;
}

async function liveDevBoards() {
  const doc = await fetchDoc(sources.devkitListing);
  const out = new Set();
  for (const row of doc.querySelectorAll("tr.sheet-item")) {
    const name = clean(text(row.querySelector(".devbd-name")));
    if (name) out.add(name);
  }
  return out;
}

async function liveModuleParts() {
  const doc = await fetchDoc(sources.moduleListing);
  const out = new Map();
  for (const row of doc.querySelectorAll("tr.sheet-item")) {
    const name = clean(text(row.querySelector(".module-name")));
    if (!name) continue;
    const parts = row.querySelectorAll("td.purchase-pn").map((n) => clean(text(n)));
    out.set(name, {
      antenna: text(row.querySelector("td.module-antenna")),
      size: text(row.querySelector("td.module-package")),
      parts: parts.filter(Boolean),
    });
  }
  return out;
}

const [liveSocs, liveModules, liveBoards] = await Promise.all([
  liveSocParts(),
  liveModuleParts(),
  liveDevBoards(),
]);

/**
 * Entries on the DevKits listing that are not ESP development boards, so they are
 * deliberately absent from the catalog rather than missing from it.
 */
const NOT_A_BOARD = new Set(["ESP-Prog-2"]);

/** Only boards actually read off the DevKits listing can disappear from it. */
const listedBoards = new Set(
  devBoards
    .filter((b) => b.vendor === "Espressif" && b.evidence === "vendor-docs")
    .map((b) => b.name),
);

const knownSocs = new Set(socParts.map((p) => p.partNumber));
const knownFamilies = new Set(moduleFamilies.map((f) => f.name));
const knownModuleParts = moduleFamilies.flatMap((f) => f.parts);
const liveModulePartNames = new Set([...liveModules.values()].flatMap((m) => m.parts));

/** Only a part that came from the listing can meaningfully disappear from it. */
const listingSourced = new Set(
  knownModuleParts.filter((p) => p.evidence === "product-listing").map((p) => p.partNumber),
);
const knownModulePartNames = new Set(knownModuleParts.map((p) => p.partNumber));

const report = [
  {
    label: "SoC ordering codes",
    added: [...liveSocs.keys()].filter((x) => !knownSocs.has(x)),
    removed: [...knownSocs].filter((x) => !liveSocs.has(x)),
  },
  {
    label: "module families",
    added: [...liveModules.keys()].filter((x) => !knownFamilies.has(x)),
    removed: [...knownFamilies].filter((x) => !liveModules.has(x)),
  },
  {
    label: "Espressif dev kits",
    added: [...liveBoards].filter((x) => !listedBoards.has(x) && !NOT_A_BOARD.has(x)),
    removed: [...listedBoards].filter((x) => !liveBoards.has(x)),
  },
  {
    label: "module ordering codes",
    added: [...liveModulePartNames].filter((x) => !knownModulePartNames.has(x)),
    removed: [...listingSourced].filter((x) => !liveModulePartNames.has(x)),
    datasheetOnly: knownModuleParts.filter(
      (p) => p.evidence === "datasheet" && !liveModulePartNames.has(p.partNumber),
    ).length,
  },
];

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(report, null, 2));
} else {
  let drift = 0;
  for (const { label, added, removed, datasheetOnly } of report) {
    if (!added.length && !removed.length) {
      console.log(`\u2713 ${label}: no change`);
    } else {
      drift += added.length + removed.length;
      console.log(`\n\u2022 ${label}`);
      for (const x of added) console.log(`    + new on espressif.com, missing here: ${x}`);
      for (const x of removed) console.log(`    - dropped from espressif.com: ${x}`);
    }
    if (datasheetOnly) {
      console.log(`  (${datasheetOnly} further codes come from datasheets the listing omits)`);
    }
  }
  console.log(
    drift
      ? `\n${drift} difference(s). Confirm each against the relevant datasheet's ` +
          `part-number table before editing src/data/.`
      : "\nCatalog matches the product listings.",
  );
}
