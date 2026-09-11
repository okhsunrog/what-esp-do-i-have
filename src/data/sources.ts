/** Primary Espressif sources this database is built from. */
export const sources = {
  socListing: "https://www.espressif.com/en/products/socs",
  moduleListing: "https://www.espressif.com/en/products/modules",
  packagingRoot: "https://docs.espressif.com/projects/esp-packaging/en/latest/",
} as const;

/** ESP-Packaging chip/module silk-marking pages, keyed by SoC family. */
const packagingFamilies: Record<string, string> = {
  ESP8266: "esp8266",
  ESP32: "esp32",
  "ESP32-S2": "esp32s2",
  "ESP32-S3": "esp32s3",
  "ESP32-C2": "esp32c2",
  "ESP32-C3": "esp32c3",
  "ESP32-C5": "esp32c5",
  "ESP32-C6": "esp32c6",
  "ESP32-C61": "esp32c61",
  "ESP32-H2": "esp32h2",
  "ESP32-P4": "esp32p4",
};

export function chipMarkingUrl(family: string): string | undefined {
  const slug = packagingFamilies[family];
  return slug ? `${sources.packagingRoot}${slug}/01-marking/index_chip.html` : undefined;
}

export function moduleMarkingUrl(family = "ESP32-C6"): string {
  const slug = packagingFamilies[family] ?? "esp32c6";
  return `${sources.packagingRoot}${slug}/01-marking/index_module.html`;
}

/** The module silk-marking convention is identical across every family. */
export const moduleMarkingSourceUrl = moduleMarkingUrl();
