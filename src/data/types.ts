/** Where a fact came from, so the UI can tell documented data from a decode. */
export type Evidence =
  /** Read from a part-number table in an Espressif datasheet. */
  | "datasheet"
  /** Read from the product listing on espressif.com. */
  | "product-listing"
  /** Decoded from Espressif's documented part-number convention. */
  | "convention"
  /** Read from the board vendor's own documentation. */
  | "vendor-docs"
  /** Read from a pioarduino board manifest. */
  | "board-manifest"
  /** Read from espressif/arduino-esp32 boards.txt. */
  | "arduino-core";

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
  /** GPIO count Espressif prints on the product listing. */
  gpioCount?: number;
  /**
   * GPIOs broken out to pads. Present only when our reading of the datasheet's
   * pin table matched `gpioCount` exactly; otherwise withheld rather than guessed.
   */
  exposedGpios?: number[];
  datasheetUrl?: string;
  sourceUrl: string;
  parts: ModulePart[];
}

/** One GPIO of a SoC, as ESP-IDF documents it. */
export interface SocGpioPin {
  gpio: number;
  /** Analog function, e.g. `ADC1_CH0`. */
  analog?: string;
  /** RTC/LP GPIO name, when the pin has one. */
  lowPower?: string;
  /** ESP-IDF's restriction tag: `SPI0/1`, `USB-JTAG`, `JTAG`, `GPI`, `TXD`, `RXD`. */
  restriction?: string;
  /** The tag was derived from ESP-IDF's legend prose, not its table column. */
  restrictionFromLegend?: boolean;
  /** Pin can be read but never driven (e.g. ESP32 GPIO34-39). */
  inputOnly?: boolean;
  /**
   * SOC_GPIO_VALID_GPIO_MASK marks the pin valid but ESP-IDF's GPIO table omits
   * it, because it is only bonded out on some packages (ESP32 GPIO20).
   */
  packageDependent?: boolean;
}

/** Every GPIO of one SoC series, plus Espressif's own caveats. */
export interface SocGpioMap {
  family: string;
  /** ESP-IDF target name, e.g. `esp32s3`. */
  target: string;
  /** Physical GPIO count from SOC_GPIO_PIN_COUNT. */
  pinCount?: number;
  /** What this series calls its low-power GPIO domain (`RTC GPIO` / `LP GPIO`). */
  lowPowerLabel?: string;
  pins: SocGpioPin[];
  /** Espressif's explanatory notes, carried verbatim. */
  legend: { tag?: string; text: string }[];
  sourceUrl: string;
}

/** A module pad, from the Pin Definitions table of its datasheet. */
export interface ModulePinDetail {
  /** Pad name as printed, e.g. `IO35`. */
  pad: string;
  /** Comma-separated alternate functions. */
  functions: string;
  /** Datasheet footnote attached to this pad, e.g. the Octal-PSRAM warning. */
  caveat?: string;
}

/** A pin an Arduino variant gives a name to, so it is already spoken for. */
export interface NamedPin {
  gpio: number;
  roles: string[];
}

/**
 * A development board. Unlike SoCs and modules, boards come from many vendors,
 * so each row records the vendor and the source it was read from — a board is
 * only as trustworthy as the vendor documenting it.
 */
export interface DevBoard {
  kind: "board";
  name: string;
  /** Other spellings of the same board, e.g. with the vendor name prefixed. */
  aliases?: string[];
  vendor: string;
  /** SoC series on the board, e.g. `ESP32-S3`. */
  family: string;
  flashMb?: number;
  psramMb?: number;
  /** Board is documented as having PSRAM, but the size is not stated. */
  psramUnsized?: boolean;
  /** SoC ordering code when the vendor names it. */
  chip?: string;
  /** Module ordering code when the board carries one. */
  module?: string;
  /** USB vendor/product id the board enumerates as. */
  usbVid?: string;
  usbPid?: string;
  onboard?: string[];
  description?: string;
  sourceUrl?: string;
  evidence: Evidence;
}
