import type { DevBoard, ModuleFamily, ModulePart, SocPart } from "../data/types";

/** One live row scraped from an Espressif product listing. */
export interface LiveSoc {
  partNumber: string;
  package: string;
  flash: string;
  psram: string;
}

export interface LiveModule {
  name: string;
  antenna: string;
  size: string;
  parts: string[];
}

export interface DriftSection {
  label: string;
  /** Present upstream, absent from the committed catalog. */
  added: string[];
  /** Present in the catalog, gone from upstream. */
  removed: string[];
  /** Catalog rows upstream never listed, so their absence is not drift. */
  unlisted?: number;
}

/** Strip soft hyphens and parenthetical qualifiers from a scraped part number. */
export function cleanPartNumber(raw: string): string {
  return raw
    .replace(/­/g, "")
    .replace(/\s*\([^)]*\)/g, "")
    .trim();
}

export function collapseWhitespace(raw: string): string {
  return raw.replace(/\s+/g, " ").trim();
}

/**
 * Entries on the DevKits listing that are not ESP development boards, so their
 * absence from the catalog is deliberate rather than drift.
 */
export const notABoard = new Set(["ESP-Prog-2"]);

export interface Catalog {
  socParts: SocPart[];
  moduleFamilies: ModuleFamily[];
  devBoards: DevBoard[];
}

export interface LiveCatalog {
  socPartNumbers: Set<string>;
  moduleFamilyNames: Set<string>;
  modulePartNumbers: Set<string>;
  devBoardNames: Set<string>;
}

function diff(label: string, live: Set<string>, known: Set<string>): DriftSection {
  return {
    label,
    added: [...live].filter((x) => !known.has(x)),
    removed: [...known].filter((x) => !live.has(x)),
  };
}

/**
 * Compare the committed catalog against what the product listings currently say.
 *
 * Only rows that came *from* a listing can meaningfully disappear from it, so
 * datasheet- and manifest-sourced rows are counted rather than reported.
 */
export function computeDrift(catalog: Catalog, live: LiveCatalog): DriftSection[] {
  const moduleParts: ModulePart[] = catalog.moduleFamilies.flatMap((f) => f.parts);
  const listingSourcedParts = new Set(
    moduleParts.filter((p) => p.evidence === "product-listing").map((p) => p.partNumber),
  );
  const knownModuleParts = new Set(moduleParts.map((p) => p.partNumber));
  const listedBoards = new Set(
    catalog.devBoards
      .filter((b) => b.vendor === "Espressif" && b.evidence === "vendor-docs")
      .map((b) => b.name),
  );

  return [
    diff(
      "SoC ordering codes",
      live.socPartNumbers,
      new Set(catalog.socParts.map((p) => p.partNumber)),
    ),
    diff(
      "module families",
      live.moduleFamilyNames,
      new Set(catalog.moduleFamilies.map((f) => f.name)),
    ),
    {
      label: "Espressif dev kits",
      added: [...live.devBoardNames].filter((x) => !listedBoards.has(x) && !notABoard.has(x)),
      removed: [...listedBoards].filter((x) => !live.devBoardNames.has(x)),
    },
    {
      label: "module ordering codes",
      added: [...live.modulePartNumbers].filter((x) => !knownModuleParts.has(x)),
      removed: [...listingSourcedParts].filter((x) => !live.modulePartNumbers.has(x)),
      unlisted: moduleParts.filter(
        (p) => p.evidence === "datasheet" && !live.modulePartNumbers.has(p.partNumber),
      ).length,
    },
  ];
}

export function formatDrift(report: DriftSection[]): string {
  const lines: string[] = [];
  let drift = 0;
  for (const { label, added, removed, unlisted } of report) {
    if (!added.length && !removed.length) {
      lines.push(`✓ ${label}: no change`);
    } else {
      drift += added.length + removed.length;
      lines.push(`\n• ${label}`);
      for (const x of added) lines.push(`    + new upstream, missing here: ${x}`);
      for (const x of removed) lines.push(`    - dropped upstream: ${x}`);
    }
    if (unlisted) {
      lines.push(`  (${unlisted} further codes come from datasheets the listing omits)`);
    }
  }
  lines.push(
    drift
      ? `\n${drift} difference(s). Confirm each against the relevant datasheet's ` +
          `part-number table before editing src/data/.`
      : "\nCatalog matches the product listings.",
  );
  return lines.join("\n");
}
