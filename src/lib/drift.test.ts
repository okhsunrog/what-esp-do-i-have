import { describe, expect, it } from "vite-plus/test";
import type { DevBoard, ModuleFamily, SocPart } from "../data/types";
import {
  cleanPartNumber,
  collapseWhitespace,
  computeDrift,
  formatDrift,
  type LiveCatalog,
} from "./drift";

describe("scraped-value cleanup", () => {
  it("strips parenthetical qualifiers", () => {
    expect(cleanPartNumber("ESP32-C3FN4 (EOL)")).toBe("ESP32-C3FN4");
    expect(cleanPartNumber("ESP32-WROOM-32D (8 MB)")).toBe("ESP32-WROOM-32D");
  });

  it("strips soft hyphens Espressif's HTML carries", () => {
    expect(cleanPartNumber("ESP32­-WROOM­-DA-N16")).toBe("ESP32-WROOM-DA-N16");
  });

  it("collapses whitespace", () => {
    expect(collapseWhitespace("  a \n b  ")).toBe("a b");
  });
});

const soc = (partNumber: string): SocPart => ({
  kind: "soc",
  partNumber,
  family: "ESP32-C6",
  package: "QFN 5×5",
  sourceUrl: "https://www.espressif.com/en/products/socs",
});

const family = (name: string, parts: ModuleFamily["parts"]): ModuleFamily => ({
  kind: "module",
  name,
  socFamily: "ESP32-C6",
  socParts: [],
  sourceUrl: "https://www.espressif.com/en/products/modules",
  parts,
});

const board = (name: string, vendor: string, evidence: DevBoard["evidence"]): DevBoard => ({
  kind: "board",
  name,
  vendor,
  family: "ESP32-C6",
  evidence,
});

const empty: LiveCatalog = {
  socPartNumbers: new Set(),
  moduleFamilyNames: new Set(),
  modulePartNumbers: new Set(),
  devBoardNames: new Set(),
};

describe("computeDrift", () => {
  it("reports a part number that appeared upstream", () => {
    const report = computeDrift(
      { socParts: [], moduleFamilies: [], devBoards: [] },
      { ...empty, socPartNumbers: new Set(["ESP32-C6FH8"]) },
    );
    const socs = report.find((r) => r.label === "SoC ordering codes");
    expect(socs?.added).toEqual(["ESP32-C6FH8"]);
    expect(socs?.removed).toEqual([]);
  });

  it("reports a part number that vanished upstream", () => {
    const report = computeDrift(
      { socParts: [soc("ESP32-C6FH4")], moduleFamilies: [], devBoards: [] },
      empty,
    );
    expect(report.find((r) => r.label === "SoC ordering codes")?.removed).toEqual(["ESP32-C6FH4"]);
  });

  it("does not call a datasheet-sourced ordering code missing when the listing omits it", () => {
    const catalog = {
      socParts: [],
      moduleFamilies: [
        family("ESP32-C6-WROOM-1", [
          { partNumber: "ESP32-C6-WROOM-1-N4", evidence: "datasheet" as const },
          { partNumber: "ESP32-C6-WROOM-1-N8", evidence: "product-listing" as const },
        ]),
      ],
      devBoards: [],
    };
    const report = computeDrift(catalog, {
      ...empty,
      moduleFamilyNames: new Set(["ESP32-C6-WROOM-1"]),
      modulePartNumbers: new Set(["ESP32-C6-WROOM-1-N8"]),
    });
    const parts = report.find((r) => r.label === "module ordering codes");
    expect(parts?.removed).toEqual([]);
    expect(parts?.unlisted).toBe(1);
  });

  it("only watches Espressif boards that came from the DevKits listing", () => {
    const catalog = {
      socParts: [],
      moduleFamilies: [],
      devBoards: [
        board("ESP32-C6-DevKitC-1", "Espressif", "vendor-docs"),
        board("ESP32C6 Dev Module", "Espressif", "arduino-core"),
        board("ESP32-C6-Zero", "Waveshare", "vendor-docs"),
      ],
    };
    const report = computeDrift(catalog, empty);
    expect(report.find((r) => r.label === "Espressif dev kits")?.removed).toEqual([
      "ESP32-C6-DevKitC-1",
    ]);
  });

  it("ignores DevKits listing entries that are not ESP boards", () => {
    const report = computeDrift(
      { socParts: [], moduleFamilies: [], devBoards: [] },
      { ...empty, devBoardNames: new Set(["ESP-Prog-2"]) },
    );
    expect(report.find((r) => r.label === "Espressif dev kits")?.added).toEqual([]);
  });
});

describe("formatDrift", () => {
  it("says so plainly when nothing changed", () => {
    const out = formatDrift([{ label: "SoC ordering codes", added: [], removed: [] }]);
    expect(out).toContain("no change");
    expect(out).toContain("Catalog matches the product listings.");
  });

  it("counts differences and tells the maintainer to verify them", () => {
    const out = formatDrift([{ label: "SoC ordering codes", added: ["A"], removed: ["B"] }]);
    expect(out).toContain("+ new upstream, missing here: A");
    expect(out).toContain("- dropped upstream: B");
    expect(out).toContain("2 difference(s)");
  });
});
