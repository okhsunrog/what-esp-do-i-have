/** Where a fact came from, so the UI can tell documented data from a decode. */
export type Evidence =
  /** Read from a part-number table in an Espressif datasheet. */
  | "datasheet"
  /** Read from the product listing on espressif.com. */
  | "product-listing"
  /** Decoded from Espressif's documented part-number convention. */
  | "convention";

export type Lifecycle = "eol" | "nrnd" | "recommended" | "sample" | "preliminary";

export type MemoryBus = "Quad" | "Octal" | "Hex";

/** An Espressif SoC ordering code, e.g. `ESP32-C6FH4`. */
export interface SocPart {
  kind: "soc";
  partNumber: string;
  /** Series the part belongs to, e.g. `ESP32-C6`. */
  family: string;
  description?: string;
  /** Physical package as published, e.g. `QFN 5×5`. */
  package: string;
  /** In-package flash, only when Espressif documents it. */
  flashMb?: number;
  /** In-package PSRAM, only when Espressif documents it. */
  psramMb?: number;
  gpio?: number;
  sramKb?: number;
  lifecycle?: Lifecycle;
  datasheetUrl?: string;
  sourceUrl: string;
}

/** One ordering code of a module family, e.g. `ESP32-C6-WROOM-1-N8`. */
export interface ModulePart {
  partNumber: string;
  flashMb?: number;
  flashBus?: MemoryBus;
  psramMb?: number;
  psramBus?: MemoryBus;
  /** Recommended ambient temperature range in °C, as `[min, max]`. */
  ambientC?: [number, number];
  /** SoC ordering code inside the module, when the datasheet names it. */
  embeddedChip?: string;
  chipRevision?: string;
  lifecycle?: Lifecycle;
  notes?: string[];
  evidence: Evidence;
}

/** A module family such as `ESP32-C6-WROOM-1`, plus its ordering codes. */
export interface ModuleFamily {
  kind: "module";
  name: string;
  /** SoC series inside the module, e.g. `ESP32-C6`. */
  socFamily: string;
  antenna?: string;
  dimensionsMm?: string;
  gpio?: number;
  sramKb?: number;
  /** SoC ordering codes Espressif lists for this family. */
  socParts: string[];
  datasheetUrl?: string;
  sourceUrl: string;
  parts: ModulePart[];
}
