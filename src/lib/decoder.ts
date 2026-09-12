import { correctionsFor, type Correction } from "../data/corrections";
import {
  chipRevisionCodes,
  dataMatrix,
  moduleSpecIdentifier,
  moduleTemperature,
  partNumberSuffixNotes,
  socSpecSuffix,
} from "../data/marking";
import { chipMarkingUrl, moduleMarkingSourceUrl, sources } from "../data/sources";
import type { DevBoard, Evidence, ModuleFamily, ModulePart, SocPart } from "../data/types";
import {
  boardIndex,
  boardsUsingModule,
  longestFamilyPrefix,
  modulePartIndex,
  moduleFamilyIndex,
  search,
  socIndex,
  usbIndex,
} from "./catalog";
import { normalize, tidy } from "./normalize";

export type Confidence = "exact" | "partial" | "unknown";

export type ResultKind =
  | "soc"
  | "module"
  | "board"
  | "usb-id"
  | "module-family"
  | "specification-identifier"
  | "chip-memory-code"
  | "data-matrix"
  | "unknown";

export interface Field {
  label: string;
  value: string;
  evidence: Evidence;
}

export interface Link {
  label: string;
  url: string;
}

export interface DecodeResult {
  input: string;
  normalized: string;
  kind: ResultKind;
  confidence: Confidence;
  /** What the marking resolves to — a part number, or the code itself. */
  title: string;
  subtitle?: string;
  fields: Field[];
  notes: string[];
  corrections: Correction[];
  links: Link[];
  /** Other part numbers in the same module family. */
  siblings?: string[];
  /** Development boards that carry this module. */
  boards?: string[];
  /** Enough to render the GPIO map for this result, when one applies. */
  pins?: {
    family: string;
    moduleName?: string;
    boardName?: string;
    exposedGpios?: number[];
  };
  suggestions?: string[];
}

const LIFECYCLE_NOTE: Record<string, string> = {
  eol: "Espressif marks this part end-of-life.",
  nrnd: "Espressif marks this part not recommended for new designs (NRND).",
  recommended: "Espressif marks this part as recommended for new designs.",
  sample: "Sample stage — not in mass production.",
  preliminary: "Documented only in a preliminary datasheet; details may change.",
};

function mem(sizeMb: number | undefined, bus: string | undefined): string | undefined {
  if (sizeMb === undefined) return undefined;
  return bus ? `${sizeMb} MB (${bus} SPI)` : `${sizeMb} MB`;
}

function suffixNotes(partNumber: string, base: string): string[] {
  const suffix = partNumber.slice(base.length);
  const letters = suffix
    .replace(/[^A-Z]/g, "")
    .replace(/^[NH]/, "")
    .replace(/R/g, "");
  const out: string[] = [];
  for (const letter of new Set(letters)) {
    const note = partNumberSuffixNotes[letter];
    if (note) out.push(`Suffix “${letter}”: ${note}`);
  }
  return out;
}

function decodeSoc(part: SocPart, normalized: string, input: string): DecodeResult {
  const fields: Field[] = [
    { label: "Type", value: "SoC (bare silicon)", evidence: "product-listing" },
    { label: "Series", value: part.family, evidence: "product-listing" },
    { label: "Package", value: part.package, evidence: "product-listing" },
  ];
  if (part.flashMb !== undefined)
    fields.push({
      label: "In-package flash",
      value: `${part.flashMb} MB`,
      evidence: "product-listing",
    });
  if (part.psramMb !== undefined)
    fields.push({
      label: "In-package PSRAM",
      value: `${part.psramMb} MB`,
      evidence: "product-listing",
    });
  if (part.sramKb !== undefined)
    fields.push({ label: "SRAM", value: `${part.sramKb} KB`, evidence: "product-listing" });
  if (part.gpio !== undefined)
    fields.push({ label: "GPIOs", value: String(part.gpio), evidence: "product-listing" });

  const notes: string[] = [];
  if (part.lifecycle) notes.push(LIFECYCLE_NOTE[part.lifecycle]);
  notes.push(...suffixNotes(part.partNumber, part.family));

  const links: Link[] = [];
  if (part.datasheetUrl) links.push({ label: "Datasheet", url: part.datasheetUrl });
  links.push({ label: "SoC product listing", url: part.sourceUrl });
  const marking = chipMarkingUrl(part.family);
  if (marking) links.push({ label: "Chip silk marking", url: marking });

  return {
    input,
    normalized,
    kind: "soc",
    confidence: "exact",
    title: part.partNumber,
    subtitle: part.description ? `${part.family} · ${part.description}` : part.family,
    fields,
    notes,
    corrections: correctionsFor(part.partNumber, part.family),
    links,
    pins: { family: part.family },
  };
}

function moduleFields(family: ModuleFamily, part: ModulePart): Field[] {
  const fields: Field[] = [
    {
      label: "Type",
      value: "Module (SoC + flash + antenna on a PCB)",
      evidence: "product-listing",
    },
    { label: "Module family", value: family.name, evidence: "product-listing" },
    { label: "SoC series", value: family.socFamily, evidence: "product-listing" },
  ];
  if (family.antenna)
    fields.push({ label: "Antenna", value: family.antenna, evidence: "product-listing" });
  const flash = mem(part.flashMb, part.flashBus);
  if (flash) fields.push({ label: "Flash", value: flash, evidence: part.evidence });
  const psram = mem(part.psramMb, part.psramBus);
  if (psram) fields.push({ label: "PSRAM", value: psram, evidence: part.evidence });
  if (part.ambientC)
    fields.push({
      label: "Ambient temperature",
      value: `${part.ambientC[0]} ~ ${part.ambientC[1]} °C`,
      evidence: part.evidence,
    });
  if (family.dimensionsMm)
    fields.push({
      label: "Dimensions",
      value: `${family.dimensionsMm} mm`,
      evidence: "product-listing",
    });
  if (part.embeddedChip)
    fields.push({ label: "Embedded SoC", value: part.embeddedChip, evidence: part.evidence });
  else if (family.socParts.length)
    fields.push({
      label: "Embedded SoC",
      value: family.socParts.join(" or "),
      evidence: "product-listing",
    });
  if (part.chipRevision)
    fields.push({ label: "Chip revision", value: part.chipRevision, evidence: part.evidence });
  if (family.gpio !== undefined)
    fields.push({ label: "GPIOs", value: String(family.gpio), evidence: "product-listing" });
  return fields;
}

function moduleLinks(family: ModuleFamily): Link[] {
  const links: Link[] = [];
  if (family.datasheetUrl) links.push({ label: "Module datasheet", url: family.datasheetUrl });
  links.push({ label: "Module product listing", url: family.sourceUrl });
  links.push({ label: "Module silk marking", url: moduleMarkingSourceUrl });
  return links;
}

function decodeModulePart(
  family: ModuleFamily,
  part: ModulePart,
  normalized: string,
  input: string,
  confidence: Confidence,
): DecodeResult {
  const notes: string[] = [];
  if (part.lifecycle) notes.push(LIFECYCLE_NOTE[part.lifecycle]);
  if (part.notes) notes.push(...part.notes);
  notes.push(...suffixNotes(part.partNumber, family.name));
  if (part.evidence === "convention")
    notes.push(
      "This exact ordering code is not in Espressif's published part-number tables. " +
        "The fields above are decoded from the documented naming convention only.",
    );
  if (part.evidence === "product-listing")
    notes.push(
      "Listed on Espressif's module product page; the module datasheet does not carry " +
        "a part-number row for this code.",
    );

  return {
    input,
    normalized,
    kind: "module",
    confidence,
    title: part.partNumber,
    subtitle: `${family.socFamily} module`,
    fields: moduleFields(family, part),
    notes,
    corrections: correctionsFor(part.partNumber, family.name, family.socFamily),
    links: moduleLinks(family),
    pins: family.exposedGpios
      ? { family: family.socFamily, moduleName: family.name, exposedGpios: family.exposedGpios }
      : { family: family.socFamily },
    siblings: family.parts.map((p) => p.partNumber).filter((p) => p !== part.partNumber),
    boards: boardsUsingModule(family.name)
      .slice(0, 24)
      .map((b) => b.name),
  };
}

function decodeModuleFamily(family: ModuleFamily, normalized: string, input: string): DecodeResult {
  const fields: Field[] = [
    { label: "Type", value: "Module family (no ordering code given)", evidence: "product-listing" },
    { label: "SoC series", value: family.socFamily, evidence: "product-listing" },
  ];
  if (family.antenna)
    fields.push({ label: "Antenna", value: family.antenna, evidence: "product-listing" });
  if (family.dimensionsMm)
    fields.push({
      label: "Dimensions",
      value: `${family.dimensionsMm} mm`,
      evidence: "product-listing",
    });
  if (family.socParts.length)
    fields.push({
      label: "Embedded SoC",
      value: family.socParts.join(" or "),
      evidence: "product-listing",
    });

  const notes = [
    family.parts.length
      ? "This is the family name. The flash and PSRAM size depend on the ordering-code " +
        "suffix printed after it."
      : "Espressif does not yet publish ordering codes for this module family.",
  ];

  return {
    input,
    normalized,
    kind: "module-family",
    confidence: "partial",
    title: family.name,
    subtitle: `${family.socFamily} module`,
    fields,
    notes,
    corrections: correctionsFor(family.name, family.socFamily),
    links: moduleLinks(family),
    pins: family.exposedGpios
      ? { family: family.socFamily, moduleName: family.name, exposedGpios: family.exposedGpios }
      : { family: family.socFamily },
    siblings: family.parts.map((p) => p.partNumber),
  };
}

/** `N8`, `H4R2`, `N16R16VA` — the documented module ordering-code suffix. */
const MODULE_SUFFIX = /^([NH])(2|4|8|16|32)(?:R(2|8|16|32))?([A-Z]*)$/;

function decodeDerivedModulePart(
  family: ModuleFamily,
  normalized: string,
  input: string,
): DecodeResult | undefined {
  const rawSuffix = normalized.slice(normalize(family.name).length);
  const match = MODULE_SUFFIX.exec(rawSuffix);
  if (!match) return undefined;
  const [, temp, flash, psram, trailing] = match;
  const part: ModulePart = {
    partNumber: `${family.name}-${rawSuffix}`,
    flashMb: Number(flash),
    flashBus: trailing.includes("V") ? "Octal" : undefined,
    psramMb: psram ? Number(psram) : undefined,
    evidence: "convention",
  };
  const result = decodeModulePart(family, part, normalized, input, "partial");
  result.fields.push({
    label: "Temperature code",
    value: `${temp} — ${moduleTemperature[temp]}`,
    evidence: "convention",
  });
  return result;
}

/** `HF4`, `NRW32X`, `FH4`, `R8` — SoC product-specification suffixes. */
function decodeDerivedSoc(normalized: string, input: string): DecodeResult | undefined {
  let family: SocPart | undefined;
  let bestLength = 0;
  for (const [key, part] of socIndex) {
    if (normalized.startsWith(key) && key.length > bestLength) {
      family = part;
      bestLength = key.length;
    }
  }
  const familyName = [...new Set([...socIndex.values()].map((p) => p.family))]
    .filter((f) => normalized.startsWith(normalize(f)))
    .sort((a, b) => b.length - a.length)[0];
  if (!familyName) return undefined;
  const suffix = normalized.slice(normalize(familyName).length);
  if (!suffix) return undefined;

  const fields: Field[] = [
    { label: "Type", value: "SoC (bare silicon)", evidence: "convention" },
    { label: "Series", value: familyName, evidence: "convention" },
  ];
  const notes: string[] = [];

  const modern = socSpecSuffix.pattern.exec(suffix);
  const legacy = /^(F[HN]|[HN])(2|4|8|16)?(?:R(H?)(2|8|16|32)(V?))?([A-Z]*)$/.exec(suffix);

  if (modern && modern[2]) {
    const [, temp, kind, bus, size, upgraded] = modern;
    fields.push({
      label: "Temperature",
      value: socSpecSuffix.temperature[temp],
      evidence: "convention",
    });
    fields.push({
      label:
        socSpecSuffix.memory[kind] === "in-package flash" ? "In-package flash" : "In-package PSRAM",
      value: `${size} MB, ${socSpecSuffix.bus[bus] ?? socSpecSuffix.bus[""]}`,
      evidence: "convention",
    });
    if (upgraded) notes.push(`Suffix “X”: ${partNumberSuffixNotes.X}`);
  } else if (legacy) {
    const [, temp, flash, psramHot, psram, octal, trailing] = legacy;
    const hot = temp.endsWith("H");
    fields.push({
      label: "Temperature",
      value: hot ? "up to 105 °C" : "up to 85 °C",
      evidence: "convention",
    });
    if (flash)
      fields.push({ label: "In-package flash", value: `${flash} MB`, evidence: "convention" });
    if (psram)
      fields.push({
        label: "In-package PSRAM",
        value: `${psram} MB${octal ? ", 1.8 V" : ""}${psramHot ? ", up to 105 °C" : ""}`,
        evidence: "convention",
      });
    for (const letter of new Set(trailing.replace(/[^A-Z]/g, ""))) {
      const note = partNumberSuffixNotes[letter];
      if (note) notes.push(`Suffix “${letter}”: ${note}`);
    }
  } else {
    return undefined;
  }

  notes.push(
    "This exact ordering code is not on Espressif's SoC product listing. The fields " +
      "above come from the documented marking convention only.",
  );

  const links: Link[] = [{ label: "SoC product listing", url: sources.socListing }];
  const marking = chipMarkingUrl(familyName);
  if (marking) links.push({ label: "Chip silk marking", url: marking });
  if (family?.datasheetUrl) links.push({ label: "Series datasheet", url: family.datasheetUrl });

  return {
    input,
    normalized,
    kind: "soc",
    confidence: "partial",
    title: `${familyName}${suffix}`,
    subtitle: `${familyName} series`,
    fields,
    notes,
    corrections: correctionsFor(familyName),
    links,
  };
}

function decodeSpecIdentifier(normalized: string, input: string): DecodeResult | undefined {
  const match = moduleSpecIdentifier.pattern.exec(normalized);
  if (!match) return undefined;
  const [, status, temp, flash, psram] = match;
  const fields: Field[] = [
    { label: "Type", value: "Module Specification Identifier", evidence: "convention" },
    {
      label: "Product status",
      value: `${status} — ${moduleSpecIdentifier.productStatus(status)}`,
      evidence: "convention",
    },
    { label: "Temperature", value: `${temp} — ${moduleTemperature[temp]}`, evidence: "convention" },
    { label: "Flash", value: `${flash} MB`, evidence: "convention" },
  ];
  if (psram) fields.push({ label: "PSRAM", value: `${psram} MB`, evidence: "convention" });

  return {
    input,
    normalized,
    kind: "specification-identifier",
    confidence: "partial",
    title: normalized,
    subtitle: "Second line of a module silk marking",
    fields,
    notes: [
      "This code does not name the module. Espressif prints it below the module name, " +
        "which is the line that identifies the product.",
      "Read the module name printed above this code, then look that up here.",
    ],
    corrections: [],
    links: [{ label: "Module silk marking", url: moduleMarkingSourceUrl }],
  };
}

/** `FH4`, `FN8`, `RH2`, `R8`, `H2` standing alone — the chip flash/PSRAM code. */
function decodeChipMemoryCode(normalized: string, input: string): DecodeResult | undefined {
  const match = /^(F?[HN])(2|4|8|16)$|^R(H?)(2|8|16|32)(V?)$/.exec(normalized);
  if (!match) return undefined;
  const fields: Field[] = [
    { label: "Type", value: "Chip flash / PSRAM code", evidence: "convention" },
  ];
  if (match[1]) {
    fields.push({
      label: "Temperature",
      value: match[1].endsWith("H") ? "105 °C" : "85 °C",
      evidence: "convention",
    });
    fields.push({ label: "In-package flash", value: `${match[2]} MB`, evidence: "convention" });
  } else {
    fields.push({
      label: "In-package PSRAM",
      value: `${match[4]} MB${match[5] ? ", 1.8 V" : ""}`,
      evidence: "convention",
    });
    if (match[3]) fields.push({ label: "Temperature", value: "105 °C", evidence: "convention" });
  }
  return {
    input,
    normalized,
    kind: "chip-memory-code",
    confidence: "partial",
    title: normalized,
    subtitle: "Part of a chip silk marking",
    fields,
    notes: [
      "This is the flash/PSRAM code line, not the product name. It does not identify " +
        "the chip series — read the product name printed above it.",
      "The exact layout of this code varies by family; check the marking page for your series.",
    ],
    corrections: [],
    links: [{ label: "Chip silk marking (ESP32-C6)", url: chipMarkingUrl("ESP32-C6")! }],
  };
}

const EVIDENCE_CAVEAT: Partial<Record<Evidence, string>> = {
  "board-manifest": "Read from a pioarduino board manifest, not from the vendor's own datasheet.",
  "arduino-core":
    "Read from espressif/arduino-esp32 boards.txt, not from the vendor's own datasheet.",
};

function decodeBoard(board: DevBoard, normalized: string, input: string): DecodeResult {
  const fields: Field[] = [
    { label: "Type", value: "Development board", evidence: board.evidence },
    { label: "Vendor", value: board.vendor, evidence: board.evidence },
    { label: "SoC series", value: board.family, evidence: board.evidence },
  ];
  if (board.module)
    fields.push({ label: "Module on board", value: board.module, evidence: board.evidence });
  if (board.chip)
    fields.push({ label: "SoC on board", value: board.chip, evidence: board.evidence });
  if (board.flashMb !== undefined)
    fields.push({ label: "Flash", value: `${board.flashMb} MB`, evidence: board.evidence });
  if (board.psramMb !== undefined)
    fields.push({ label: "PSRAM", value: `${board.psramMb} MB`, evidence: board.evidence });
  else if (board.psramUnsized)
    fields.push({ label: "PSRAM", value: "present, size not stated", evidence: board.evidence });
  if (board.usbVid && board.usbPid)
    fields.push({
      label: "USB ID",
      value: `${board.usbVid}:${board.usbPid}`,
      evidence: board.evidence,
    });
  if (board.onboard?.length)
    fields.push({
      label: "On-board",
      value: board.onboard.join(", "),
      evidence: board.evidence,
    });

  const notes: string[] = [];
  if (board.description) notes.push(board.description);
  const caveat = EVIDENCE_CAVEAT[board.evidence];
  if (caveat) notes.push(caveat);
  if (board.vendor !== "Espressif")
    notes.push(
      `A board is not an Espressif product — flash, PSRAM and the module fitted are ` +
        `what ${board.vendor} documents, and a vendor may change them between revisions.`,
    );

  const links: Link[] = [];
  if (board.sourceUrl) links.push({ label: `${board.vendor} documentation`, url: board.sourceUrl });
  if (board.vendor === "Espressif")
    links.push({ label: "Espressif DevKits", url: sources.devkitListing });

  return {
    input,
    normalized,
    kind: "board",
    confidence: "exact",
    title: board.name,
    subtitle: `${board.vendor} · ${board.family} board`,
    fields,
    notes,
    corrections: correctionsFor(board.module, board.chip, board.family),
    links,
    pins: {
      family: board.family,
      boardName: board.name,
      moduleName: moduleFamilyIndex.get(normalize(board.module ?? ""))?.name,
      exposedGpios: moduleFamilyIndex.get(normalize(board.module ?? ""))?.exposedGpios,
    },
    siblings: board.aliases,
  };
}

/** `303a:1001`, `0x303A 0x1001` — the USB ID a plugged-in board enumerates as. */
function decodeUsbId(normalized: string, input: string): DecodeResult | undefined {
  const match = /^(?:0X)?([0-9A-F]{4})(?:0X)?([0-9A-F]{4})$/.exec(normalized);
  if (!match || !/[:\s]|0[xX]/.test(input)) return undefined;
  const vid = `0x${match[1]}`;
  const pid = `0x${match[2]}`;
  const hits = usbIndex.get(`${vid}:${pid}`.toLowerCase()) ?? [];
  const espressif = vid.toLowerCase() === "0x303a";
  if (!hits.length && !espressif) return undefined;

  const fields: Field[] = [
    { label: "Type", value: "USB vendor / product ID", evidence: "board-manifest" },
    {
      label: "Vendor ID",
      value: espressif ? `${vid} — Espressif Systems` : vid,
      evidence: "board-manifest",
    },
    { label: "Product ID", value: pid, evidence: "board-manifest" },
  ];
  if (hits.length)
    fields.push({
      label: "Known boards",
      value: String(hits.length),
      evidence: hits[0].evidence,
    });

  return {
    input,
    normalized,
    kind: "usb-id",
    confidence: "partial",
    title: `${vid}:${pid}`,
    subtitle: "USB identity, not a part number",
    fields,
    notes: [
      hits.length
        ? "Several boards can share one USB ID, so this narrows the field rather than " +
          "identifying the board."
        : "No board in this database claims that ID. On Espressif silicon the built-in " +
          "USB peripheral commonly reports 0x303a:0x1001 regardless of the board.",
      "A USB-to-UART bridge reports the bridge's own ID (Silicon Labs, WCH, FTDI), " +
        "not the ESP chip's.",
    ],
    corrections: [],
    links: [{ label: "Espressif DevKits", url: sources.devkitListing }],
    suggestions: hits.slice(0, 12).map((b) => b.name),
  };
}

function decodeDataMatrix(normalized: string, input: string): DecodeResult | undefined {
  if (!dataMatrix.pattern.test(normalized)) return undefined;
  const { reserved, dateCode, macId } = dataMatrix.describe(normalized);
  return {
    input,
    normalized,
    kind: "data-matrix",
    confidence: "partial",
    title: normalized,
    subtitle: "18-character module Data Matrix",
    fields: [
      { label: "Reserved", value: reserved, evidence: "convention" },
      {
        label: "Date code",
        value: `${dateCode} — week ${dateCode.slice(2)} of 20${dateCode.slice(0, 2)}`,
        evidence: "convention",
      },
      { label: "Module MAC ID", value: macId, evidence: "convention" },
    ],
    notes: ["A Data Matrix does not encode the module type — only the date code and MAC ID."],
    corrections: [],
    links: [{ label: "Data Matrix convention", url: moduleMarkingSourceUrl }],
  };
}

export function decode(rawInput: string): DecodeResult | null {
  const input = tidy(rawInput);
  const normalized = normalize(input);
  if (!normalized) return null;

  const modulePart = modulePartIndex.get(normalized);
  if (modulePart)
    return decodeModulePart(modulePart.family, modulePart.part, normalized, input, "exact");

  const soc = socIndex.get(normalized);
  if (soc) return decodeSoc(soc, normalized, input);

  const board = boardIndex.get(normalized);
  if (board) return decodeBoard(board, normalized, input);

  const family = moduleFamilyIndex.get(normalized);
  if (family) return decodeModuleFamily(family, normalized, input);

  if (normalized.startsWith("ESP")) {
    const prefix = longestFamilyPrefix(normalized);
    if (prefix) {
      const derived = decodeDerivedModulePart(prefix, normalized, input);
      if (derived) return derived;
    }
    const derivedSoc = decodeDerivedSoc(normalized, input);
    if (derivedSoc) return derivedSoc;
  }

  return (
    decodeUsbId(normalized, input) ??
    decodeSpecIdentifier(normalized, input) ??
    decodeDataMatrix(normalized, input) ??
    decodeChipMemoryCode(normalized, input) ?? {
      input,
      normalized,
      kind: "unknown",
      confidence: "unknown",
      title: input,
      fields: [],
      notes: [
        "No Espressif source in this database matches that marking.",
        "Modules print the product name on the top line — try that, in full.",
      ],
      corrections: [],
      links: [
        { label: "SoC product listing", url: sources.socListing },
        { label: "Module product listing", url: sources.moduleListing },
      ],
      suggestions: search(input).map((hit) =>
        "partNumber" in hit ? hit.partNumber : "name" in hit ? hit.name : hit.part.partNumber,
      ),
    }
  );
}

export { chipRevisionCodes };
