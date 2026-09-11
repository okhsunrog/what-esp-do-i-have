import { sources } from "./sources";

/**
 * Places where Espressif's own sources disagree, or where a part is documented
 * somewhere the generated catalog does not reach. Shown verbatim next to a
 * result rather than silently resolved.
 */
export interface Correction {
  /** Part number or module family the note attaches to. */
  subject: string;
  note: string;
  sourceUrls: string[];
}

export const corrections: Correction[] = [
  {
    subject: "ESP32-C5HR2",
    note:
      "The SoC listing shows 8 MB PSRAM for this part, but the part number and the " +
      "ESP-Packaging convention both read HR2 as 2 MB. Treat the PSRAM size as unconfirmed.",
    sourceUrls: [
      sources.socListing,
      "https://docs.espressif.com/projects/esp-packaging/en/latest/esp32c5/01-marking/index_chip.html",
    ],
  },
  {
    subject: "ESP32-S3-WROOM-1-N16R16V",
    note:
      "Renamed to ESP32-S3-WROOM-1-N16R16VA in datasheet v1.3. The product listing " +
      "still shows the old name.",
    sourceUrls: [
      sources.moduleListing,
      "https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf",
    ],
  },
  {
    subject: "ESP32-S3-WROOM-1U-N16R16V",
    note: "Renamed to ESP32-S3-WROOM-1U-N16R16VA in datasheet v1.3.",
    sourceUrls: [
      sources.moduleListing,
      "https://www.espressif.com/sites/default/files/documentation/esp32-s3-wroom-1_wroom-1u_datasheet_en.pdf",
    ],
  },
  {
    subject: "ESP8684-WROOM-06C",
    note:
      "The product listing spells the ordering codes -H2X and -H4X; the datasheet " +
      "part-number table spells them -H2 and -H4.",
    sourceUrls: [
      sources.moduleListing,
      "https://www.espressif.com/sites/default/files/documentation/esp8684-wroom-06c_datasheet_en.pdf",
    ],
  },
  {
    subject: "ESP32-S31-WROOM-3",
    note:
      "The ESP32-S31-WROOM-3 datasheet is marked PRELIMINARY and lists an " +
      "ESP32-S31NRV8 SoC that does not appear on the SoC product listing.",
    sourceUrls: [
      "https://documentation.espressif.com/esp32-s31-wroom-3_wroom-3u_datasheet_en.html",
      sources.socListing,
    ],
  },
  {
    subject: "ESP32-C6-WROOM-1",
    note:
      "The product listing prints the size as 25.5×18×3.1 mm; the datasheet prints " +
      "18.0 × 25.5 × 3.1 mm. The datasheet ordering is used here.",
    sourceUrls: [
      sources.moduleListing,
      "https://www.espressif.com/sites/default/files/documentation/esp32-c6-wroom-1_wroom-1u_datasheet_en.pdf",
    ],
  },
];

const bySubject = new Map<string, Correction[]>();
for (const c of corrections) {
  const list = bySubject.get(c.subject) ?? [];
  list.push(c);
  bySubject.set(c.subject, list);
}

export function correctionsFor(...subjects: (string | undefined)[]): Correction[] {
  const seen = new Set<Correction>();
  for (const s of subjects) {
    if (!s) continue;
    for (const c of bySubject.get(s) ?? []) seen.add(c);
  }
  return [...seen];
}
