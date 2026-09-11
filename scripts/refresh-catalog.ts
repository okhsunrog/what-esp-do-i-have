/**
 * Re-reads Espressif's SoC, module and DevKit listings and reports how they
 * differ from the committed catalog.
 *
 *   vp run catalog:check          print the drift
 *   vp run catalog:check --json   machine-readable drift
 *
 * It deliberately does not rewrite src/data/*.ts. Part-level facts come from the
 * part-number tables in the module datasheets and from vendor documentation,
 * which a maintainer has to read to confirm a change. This script's job is to
 * say *what* to go and check.
 */
import { parse, type HTMLElement } from "node-html-parser";
import { devBoards } from "../src/data/boards.ts";
import { moduleFamilies } from "../src/data/modules.ts";
import { socParts } from "../src/data/socs.ts";
import { sources } from "../src/data/sources.ts";
import {
  cleanPartNumber,
  collapseWhitespace,
  computeDrift,
  formatDrift,
  type LiveCatalog,
} from "../src/lib/drift.ts";

const text = (node: HTMLElement | null): string => (node ? collapseWhitespace(node.text) : "");

async function fetchDoc(url: string): Promise<HTMLElement> {
  const res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return parse(await res.text());
}

async function liveSocPartNumbers(): Promise<Set<string>> {
  const doc = await fetchDoc(sources.socListing);
  const out = new Set<string>();
  for (const row of doc.querySelectorAll("tr.sheet-item")) {
    const part = cleanPartNumber(text(row.querySelector("td.chip-variants")));
    if (part) out.add(part);
  }
  return out;
}

async function liveModules(): Promise<{ families: Set<string>; parts: Set<string> }> {
  const doc = await fetchDoc(sources.moduleListing);
  const families = new Set<string>();
  const parts = new Set<string>();
  for (const row of doc.querySelectorAll("tr.sheet-item")) {
    const name = cleanPartNumber(text(row.querySelector(".module-name")));
    if (!name) continue;
    families.add(name);
    for (const cell of row.querySelectorAll("td.purchase-pn")) {
      const part = cleanPartNumber(text(cell));
      if (part) parts.add(part);
    }
  }
  return { families, parts };
}

async function liveDevBoardNames(): Promise<Set<string>> {
  const doc = await fetchDoc(sources.devkitListing);
  const out = new Set<string>();
  for (const row of doc.querySelectorAll("tr.sheet-item")) {
    const name = cleanPartNumber(text(row.querySelector(".devbd-name")));
    if (name) out.add(name);
  }
  return out;
}

const [socPartNumbers, modules, devBoardNames] = await Promise.all([
  liveSocPartNumbers(),
  liveModules(),
  liveDevBoardNames(),
]);

const live: LiveCatalog = {
  socPartNumbers,
  moduleFamilyNames: modules.families,
  modulePartNumbers: modules.parts,
  devBoardNames,
};

const report = computeDrift({ socParts, moduleFamilies, devBoards }, live);

if (process.argv.includes("--json")) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(formatDrift(report));
}
