import { describe, expect, it } from "vite-plus/test";
import { moduleFamilies } from "../data/modules";
import { socParts } from "../data/socs";
import { allModuleParts, counts } from "./catalog";
import { decode } from "./decoder";

function field(result: ReturnType<typeof decode>, label: string) {
  return result?.fields.find((f) => f.label === label)?.value;
}

describe("input normalization", () => {
  const variants = [
    "ESP32-C6-WROOM-1-N8",
    "esp32-c6-wroom-1-n8",
    "ESP32 C6 WROOM 1 N8",
    "  esp32c6wroom1n8  ",
    "ESP32–C6–WROOM–1–N8",
  ];
  it.each(variants)("resolves %s to the same part", (input) => {
    const result = decode(input);
    expect(result?.title).toBe("ESP32-C6-WROOM-1-N8");
    expect(result?.confidence).toBe("exact");
  });

  it("returns null for empty input", () => {
    expect(decode("   ")).toBeNull();
  });
});

describe("exact module part number", () => {
  const result = decode("ESP32-C6-WROOM-1-N8");

  it("is identified as a module", () => {
    expect(result?.kind).toBe("module");
    expect(field(result, "Type")).toMatch(/^Module/);
  });

  it("reports the SoC series and antenna", () => {
    expect(field(result, "SoC series")).toBe("ESP32-C6");
    expect(field(result, "Antenna")).toBe("PCB antenna");
  });

  it("reports 8 MB flash from the datasheet", () => {
    expect(field(result, "Flash")).toBe("8 MB (Quad SPI)");
    expect(result?.fields.find((f) => f.label === "Flash")?.evidence).toBe("datasheet");
  });

  it("links to the official datasheet", () => {
    const datasheet = result?.links.find((l) => l.label === "Module datasheet");
    expect(datasheet?.url).toBe(
      "https://www.espressif.com/sites/default/files/documentation/esp32-c6-wroom-1_wroom-1u_datasheet_en.pdf",
    );
  });

  it("lists sibling ordering codes", () => {
    expect(result?.siblings).toContain("ESP32-C6-WROOM-1-N4");
    expect(result?.siblings).not.toContain("ESP32-C6-WROOM-1-N8");
  });
});

describe("exact SoC part number", () => {
  it("decodes ESP32-C6FH4", () => {
    const result = decode("ESP32-C6FH4");
    expect(result?.kind).toBe("soc");
    expect(result?.confidence).toBe("exact");
    expect(field(result, "Type")).toMatch(/^SoC/);
    expect(field(result, "Package")).toBe("QFN 5×5");
    expect(field(result, "In-package flash")).toBe("4 MB");
  });

  it("accepts the ESP8684 spelling of an ESP32-C2 part", () => {
    expect(decode("ESP8684H2X")?.title).toBe("ESP8684H2X");
  });

  it("surfaces end-of-life status", () => {
    const result = decode("ESP32-C3FN4");
    expect(result?.notes.join(" ")).toMatch(/end-of-life/i);
  });
});

describe("module family without an ordering code", () => {
  const result = decode("ESP32-C6-WROOM-1");

  it("is partial, not exact", () => {
    expect(result?.kind).toBe("module-family");
    expect(result?.confidence).toBe("partial");
  });

  it("does not claim a flash size", () => {
    expect(field(result, "Flash")).toBeUndefined();
  });

  it("offers the ordering codes", () => {
    expect(result?.siblings).toEqual(
      expect.arrayContaining(["ESP32-C6-WROOM-1-N4", "ESP32-C6-WROOM-1-N8"]),
    );
  });
});

describe("module Specification Identifier", () => {
  const result = decode("MBH4");

  it("is a partial match, never an exact one", () => {
    expect(result?.kind).toBe("specification-identifier");
    expect(result?.confidence).toBe("partial");
  });

  it("does not guess a module family", () => {
    expect(result?.title).toBe("MBH4");
    expect(field(result, "SoC series")).toBeUndefined();
    expect(result?.notes.join(" ")).toMatch(/does not name the module/i);
  });

  it("explains the fields it can read", () => {
    expect(field(result, "Product status")).toMatch(/^MB —/);
    expect(field(result, "Temperature")).toBe("H — 105 °C");
    expect(field(result, "Flash")).toBe("4 MB");
  });

  it("decodes a PSRAM field when present", () => {
    expect(field(decode("XXN4R2"), "PSRAM")).toBe("2 MB");
  });
});

describe("codes the decoder must refuse to over-read", () => {
  it("treats an 18-character Data Matrix as date code plus MAC only", () => {
    const result = decode("AB2419A1B2C3D4E5F6");
    expect(result?.kind).toBe("data-matrix");
    expect(field(result, "Date code")).toBe("2419 — week 19 of 2024");
    expect(result?.notes.join(" ")).toMatch(/does not encode the module type/i);
  });

  it("does not decode a bare tracking code", () => {
    expect(decode("QWERTYUIOP")?.kind).toBe("unknown");
  });

  it("returns unknown with suggestions for a near miss", () => {
    const result = decode("ESP32-C6-WROOM-9-N8");
    expect(result?.confidence).not.toBe("exact");
  });
});

describe("ordering codes decoded from the naming convention", () => {
  it("marks a well-formed but unlisted suffix as partial", () => {
    const result = decode("ESP32-C6-WROOM-1-N32");
    expect(result?.kind).toBe("module");
    expect(result?.confidence).toBe("partial");
    expect(field(result, "Flash")).toBe("32 MB");
    expect(result?.notes.join(" ")).toMatch(/naming convention/i);
  });

  it("decodes the modern SoC product-specification grammar", () => {
    const result = decode("ESP32-P4NRW16");
    expect(result?.kind).toBe("soc");
    expect(field(result, "In-package PSRAM")).toMatch(/16 MB/);
  });
});

describe("catalog integrity", () => {
  it("has no duplicate part numbers", () => {
    const all = [
      ...socParts.map((p) => p.partNumber),
      ...allModuleParts.map((h) => h.part.partNumber),
    ];
    expect(new Set(all).size).toBe(all.length);
  });

  it("every entry carries a source URL", () => {
    expect(socParts.every((p) => p.sourceUrl.startsWith("https://"))).toBe(true);
    expect(moduleFamilies.every((f) => f.sourceUrl.startsWith("https://"))).toBe(true);
  });

  it("every ordering code resolves to itself", () => {
    for (const { part } of allModuleParts) {
      expect(decode(part.partNumber)?.title).toBe(part.partNumber);
    }
    for (const part of socParts) {
      expect(decode(part.partNumber)?.title).toBe(part.partNumber);
    }
  });

  it("stored flash and PSRAM agree with the documented suffix convention", () => {
    for (const { family, part } of allModuleParts) {
      const suffix = part.partNumber.slice(family.name.length + 1);
      const match = /^([NH])(\d+)(?:R(\d+))?[A-Z]*$/.exec(suffix);
      if (!match) continue;
      expect(part.flashMb, part.partNumber).toBe(Number(match[2]));
      expect(part.psramMb ?? null, part.partNumber).toBe(match[3] ? Number(match[3]) : null);
    }
  });

  it("covers every current SoC series", () => {
    expect(counts.socFamilies).toBeGreaterThanOrEqual(14);
    expect(counts.moduleParts).toBeGreaterThanOrEqual(200);
  });
});
