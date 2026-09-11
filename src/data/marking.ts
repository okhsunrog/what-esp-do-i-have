import { moduleMarkingSourceUrl } from "./sources";

/**
 * Espressif's documented silk-marking conventions, transcribed from ESP-Packaging.
 * Everything the decoder claims about a code it does not recognise verbatim has to
 * be traceable to one of these rules.
 */

export const moduleTemperature: Record<string, string> = {
  N: "85 °C / 65 °C",
  H: "105 °C",
};

/** Flash sizes the module Specification Identifier can encode, in MB. */
export const moduleFlashSizes = [2, 4, 8, 16, 32] as const;

/** PSRAM sizes the module Specification Identifier can encode, in MB. */
export const modulePsramSizes = [2, 8] as const;

export const moduleSpecIdentifier = {
  sourceUrl: moduleMarkingSourceUrl,
  /** `XX`/`MN` product status, `N`/`H` temperature, flash size, optional `R` + PSRAM size. */
  pattern: /^([A-Z0-9]{2})([NH])(2|4|8|16|32)(?:R(2|8))?$/,
  productStatus(code: string): string {
    if (code === "XX") return "mass production (earlier launch)";
    if (code === "MN") return "mass production";
    if (/^M[0-9A-Z]$/.test(code)) return "mass production (newly launched or new chip revision)";
    return "NPI — under development or trial run";
  },
} as const;

/** Scanning the Data Matrix on a module returns an 18-character code. */
export const dataMatrix = {
  sourceUrl: moduleMarkingSourceUrl,
  pattern: /^[A-Z0-9]{18}$/,
  describe(code: string) {
    return {
      reserved: code.slice(0, 2),
      dateCode: code.slice(2, 6),
      macId: code.slice(6),
    };
  },
} as const;

/**
 * Product Specification suffix used by the newer SoC families (ESP32-C5, -C61,
 * -H4, -H21, -P4, -S31): temperature, optional flash/PSRAM, optional bus, size.
 */
export const socSpecSuffix = {
  pattern: /^([NH])(?:([FR])([VW]?)(\d+))?(X)?$/,
  temperature: { N: "up to 85 °C", H: "up to 105 °C" } as Record<string, string>,
  memory: { F: "in-package flash", R: "in-package PSRAM" } as Record<string, string>,
  bus: {
    "": "3.3 V Quad SPI",
    V: "1.8 V Octal SPI",
    W: "1.8 V Hex SPI",
  } as Record<string, string>,
} as const;

/** Families whose chip silk marking spells temperature as two characters (`FH`/`FN`). */
export const twoCharFlashTemperature = new Set([
  "ESP32",
  "ESP32-S3",
  "ESP32-C3",
  "ESP32-C6",
  "ESP32-H2",
]);

/** Trailing letters Espressif documents on SoC and module part numbers. */
export const partNumberSuffixNotes: Record<string, string> = {
  X: "Upgraded product — see the relevant product change notification (PCN).",
  S: "Product with security optimizations — see the relevant PCN.",
  V: "1.8 V Octal SPI memory rather than the default 3.3 V Quad SPI.",
  A: "Pre-programmed with AWS IoT ExpressLink firmware; joint download boot is disabled.",
};

/**
 * The second character of a chip's Espressif Tracking Information encodes the
 * chip revision. Espressif publishes one table per family.
 */
export const chipRevisionCodes: Record<string, Record<string, string>> = {
  ESP32: { B: "v1.0", F: "v1.1", E: "v3.0", G: "v3.1" },
  "ESP32-S2": { A: "v0.0", B: "v1.0" },
  "ESP32-S3": { A: "v0.0", B: "v0.1", C: "v0.2" },
  "ESP32-C2": { A: "v0.0", AA: "v1.0", B: "v1.1", C: "v1.2", D: "v2.0" },
  "ESP32-C3": { A: "v0.0", B: "v0.1", C: "v0.2", D: "v0.3", E: "v0.4", H: "v1.1" },
  "ESP32-C5": { A: "v0.0", B: "v0.1", C: "v1.0", D: "v1.2" },
  "ESP32-C6": { A: "v0.0", B: "v0.1", C: "v0.2" },
  "ESP32-C61": { A: "v0.0", B: "v0.1", C: "v0.2", D: "v1.0" },
  "ESP32-H2": { A: "v0.0", B: "v0.1", F: "v1.2" },
  "ESP32-P4": { A: "v0.0", C: "v1.0", E: "v1.3", F: "v3.0", G: "v3.1", H: "v3.2" },
};
