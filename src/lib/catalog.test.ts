import { describe, expect, it } from "vite-plus/test";
import { devBoards } from "../data/boards";
import { corrections } from "../data/corrections";
import { moduleFamilies } from "../data/modules";
import { socParts } from "../data/socs";
import {
  allModuleParts,
  boardIndex,
  boardsUsingModule,
  counts,
  longestFamilyPrefix,
  moduleFamilyIndex,
  modulePartIndex,
  search,
  socByPartNumber,
  socIndex,
  usbIndex,
} from "./catalog";
import { normalize } from "./normalize";

describe("lookup indexes", () => {
  it("indexes every SoC, module part, module family and board", () => {
    expect(socIndex.size).toBeGreaterThanOrEqual(socParts.length);
    expect(modulePartIndex.size).toBe(allModuleParts.length);
    expect(moduleFamilyIndex.size).toBe(moduleFamilies.length);
    expect(boardIndex.size).toBeGreaterThanOrEqual(devBoards.length);
  });

  it("resolves the ESP8684 spelling of an ESP32-C2 part", () => {
    expect(socByPartNumber("ESP8684H2X")?.family).toBe("ESP32-C2");
  });

  it("picks the longest matching module family, not the first", () => {
    expect(longestFamilyPrefix(normalize("ESP32-S3-WROOM-1U-N8"))?.name).toBe("ESP32-S3-WROOM-1U");
    expect(longestFamilyPrefix(normalize("ESP32-S3-WROOM-1-N8"))?.name).toBe("ESP32-S3-WROOM-1");
  });

  it("returns no suggestions for a query too short to be meaningful", () => {
    expect(search("C6")).toEqual([]);
  });

  it("suggests across SoCs, modules and boards", () => {
    expect(search("WROOM-1").length).toBeGreaterThan(0);
    expect(search("DevKitC").length).toBeGreaterThan(0);
  });

  it("maps a module family to the boards carrying it", () => {
    const hits = boardsUsingModule("ESP32-C6-WROOM-1");
    for (const b of hits) expect(b.module).toMatch(/^ESP32-C6-WROOM-1/);
  });
});

describe("board catalog", () => {
  it("every board has a vendor, an ESP family and an evidence label", () => {
    for (const b of devBoards) {
      expect(b.vendor, b.name).toBeTruthy();
      expect(b.family, b.name).toMatch(/^ESP(32|8266)/);
      expect(b.evidence, b.name).toBeTruthy();
    }
  });

  it("has no duplicate board names", () => {
    const names = devBoards.map((b) => normalize(b.name));
    expect(new Set(names).size).toBe(names.length);
  });

  it("never lists a board name that is really a SoC or module part number", () => {
    const partKeys = new Set([
      ...socParts.map((p) => normalize(p.partNumber)),
      ...allModuleParts.map((h) => normalize(h.part.partNumber)),
      ...moduleFamilies.map((f) => normalize(f.name)),
    ]);
    for (const b of devBoards) {
      expect(partKeys.has(normalize(b.name)), b.name).toBe(false);
    }
  });

  it("keeps a board's aliases distinct from its name", () => {
    for (const b of devBoards) {
      for (const alias of b.aliases ?? []) {
        expect(normalize(alias), b.name).not.toBe(normalize(b.name));
      }
    }
  });

  it("states a flash size only as a positive power-of-two megabyte count", () => {
    for (const b of devBoards) {
      if (b.flashMb === undefined) continue;
      expect(Number.isInteger(b.flashMb), b.name).toBe(true);
      expect(b.flashMb, b.name).toBeGreaterThan(0);
      expect(Math.log2(b.flashMb) % 1, b.name).toBe(0);
    }
  });

  it("never claims both a PSRAM size and an unstated PSRAM size", () => {
    for (const b of devBoards) {
      expect(b.psramMb !== undefined && b.psramUnsized === true, b.name).toBe(false);
    }
  });

  it("uses well-formed hexadecimal USB ids", () => {
    for (const b of devBoards) {
      if (!b.usbVid) continue;
      expect(b.usbVid, b.name).toMatch(/^0x[0-9A-Fa-f]{4}$/);
      expect(b.usbPid, b.name).toMatch(/^0x[0-9A-Fa-f]{4}$/);
    }
  });

  it("indexes USB ids in lowercase so lookups are case-insensitive", () => {
    for (const key of usbIndex.keys()) expect(key).toBe(key.toLowerCase());
  });

  it("links to a source over https when it links anywhere", () => {
    for (const b of devBoards) {
      if (b.sourceUrl) expect(b.sourceUrl, b.name).toMatch(/^https?:\/\//);
    }
  });
});

describe("corrections", () => {
  it("every correction cites at least two sources that disagree", () => {
    for (const c of corrections) {
      expect(c.sourceUrls.length, c.subject).toBeGreaterThanOrEqual(2);
      for (const url of c.sourceUrls) expect(url).toMatch(/^https:\/\//);
    }
  });

  it("every correction names a subject present in the catalog", () => {
    const known = new Set([
      ...socParts.map((p) => p.partNumber),
      ...socParts.map((p) => p.family),
      ...allModuleParts.map((h) => h.part.partNumber),
      ...moduleFamilies.map((f) => f.name),
      // codes a correction exists precisely because they were renamed away
      "ESP32-S3-WROOM-1-N16R16V",
      "ESP32-S3-WROOM-1U-N16R16V",
    ]);
    for (const c of corrections) expect(known.has(c.subject), c.subject).toBe(true);
  });
});

describe("counts reported on the page", () => {
  it("match the data actually shipped", () => {
    expect(counts.socParts).toBe(socParts.length);
    expect(counts.moduleParts).toBe(allModuleParts.length);
    expect(counts.moduleFamilies).toBe(moduleFamilies.length);
    expect(counts.boards).toBe(devBoards.length);
    expect(counts.boardVendors).toBe(new Set(devBoards.map((b) => b.vendor)).size);
  });
});
