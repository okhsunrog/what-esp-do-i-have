export type Chip = {
  partNumber: string;
  aliases: string[];
  family: string;
  package: string;
  flashMb?: number;
  psramMb?: number;
  sourceUrl: string;
};

const socsUrl = "https://www.espressif.com/en/products/socs";

export const chips: Chip[] = [
  {
    partNumber: "ESP8266EX",
    aliases: ["ESP8266EX"],
    family: "ESP8266",
    package: "QFN32",
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32",
    aliases: ["ESP32", "ESP32D0WD"],
    family: "ESP32",
    package: "QFN48",
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-D0WD-V3",
    aliases: ["ESP32D0WDV3"],
    family: "ESP32",
    package: "QFN48",
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-D2WD",
    aliases: ["ESP32D2WD"],
    family: "ESP32",
    package: "QFN48",
    flashMb: 2,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-PICO-D4",
    aliases: ["ESP32PICOD4"],
    family: "ESP32",
    package: "QFN48",
    flashMb: 4,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-S2",
    aliases: ["ESP32S2"],
    family: "ESP32-S2",
    package: "QFN56",
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-S2FH2",
    aliases: ["ESP32S2FH2"],
    family: "ESP32-S2",
    package: "QFN56",
    flashMb: 2,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-S2FH4",
    aliases: ["ESP32S2FH4"],
    family: "ESP32-S2",
    package: "QFN56",
    flashMb: 4,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-S3",
    aliases: ["ESP32S3"],
    family: "ESP32-S3",
    package: "QFN56",
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-S3FH4R2",
    aliases: ["ESP32S3FH4R2"],
    family: "ESP32-S3",
    package: "QFN56",
    flashMb: 4,
    psramMb: 2,
    sourceUrl:
      "https://docs.espressif.com/projects/esp-packaging/en/latest/esp32s3/01-marking/index_chip.html",
  },
  {
    partNumber: "ESP32-C2",
    aliases: ["ESP32C2"],
    family: "ESP32-C2",
    package: "QFN20",
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP8684H2X",
    aliases: ["ESP8684H2X"],
    family: "ESP32-C2",
    package: "QFN32",
    flashMb: 2,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP8684H4X",
    aliases: ["ESP8684H4X"],
    family: "ESP32-C2",
    package: "QFN32",
    flashMb: 4,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-C3",
    aliases: ["ESP32C3"],
    family: "ESP32-C3",
    package: "QFN32",
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-C3FH4",
    aliases: ["ESP32C3FH4"],
    family: "ESP32-C3",
    package: "QFN32",
    flashMb: 4,
    sourceUrl:
      "https://docs.espressif.com/projects/esp-packaging/en/latest/esp32c3/01-marking/index_chip.html",
  },
  {
    partNumber: "ESP32-C6",
    aliases: ["ESP32C6"],
    family: "ESP32-C6",
    package: "QFN40 or QFN32",
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-C6FH4",
    aliases: ["ESP32C6FH4"],
    family: "ESP32-C6",
    package: "QFN40",
    flashMb: 4,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-C6FH8",
    aliases: ["ESP32C6FH8"],
    family: "ESP32-C6",
    package: "QFN40",
    flashMb: 8,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-C61HF4",
    aliases: ["ESP32C61HF4"],
    family: "ESP32-C61",
    package: "QFN40",
    flashMb: 4,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-C61HR2",
    aliases: ["ESP32C61HR2"],
    family: "ESP32-C61",
    package: "QFN40",
    psramMb: 2,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-C61HR8",
    aliases: ["ESP32C61HR8"],
    family: "ESP32-C61",
    package: "QFN40",
    psramMb: 8,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-C5HF4",
    aliases: ["ESP32C5HF4"],
    family: "ESP32-C5",
    package: "QFN48",
    flashMb: 4,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-C5HR8",
    aliases: ["ESP32C5HR8"],
    family: "ESP32-C5",
    package: "QFN48",
    psramMb: 8,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-H2FH2S",
    aliases: ["ESP32H2FH2S"],
    family: "ESP32-H2",
    package: "QFN32",
    flashMb: 2,
    sourceUrl:
      "https://docs.espressif.com/projects/esp-packaging/en/latest/esp32h2/01-marking/index_chip.html",
  },
  {
    partNumber: "ESP32-H2FH4S",
    aliases: ["ESP32H2FH4S"],
    family: "ESP32-H2",
    package: "QFN32",
    flashMb: 4,
    sourceUrl:
      "https://docs.espressif.com/projects/esp-packaging/en/latest/esp32h2/01-marking/index_chip.html",
  },
  {
    partNumber: "ESP32-P4NRW16",
    aliases: ["ESP32P4NRW16"],
    family: "ESP32-P4",
    package: "QFN10×10",
    psramMb: 16,
    sourceUrl: socsUrl,
  },
  {
    partNumber: "ESP32-P4NRW32",
    aliases: ["ESP32P4NRW32"],
    family: "ESP32-P4",
    package: "QFN10×10",
    psramMb: 32,
    sourceUrl: socsUrl,
  },
];

export const moduleMarkingSourceUrl =
  "https://docs.espressif.com/projects/esp-packaging/en/latest/esp32h2/01-marking/index_module.html";
