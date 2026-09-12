import { describe, expect, it } from "vite-plus/test";
import { socGpioMaps } from "../data/gpio";
import { modulePinDetail } from "../data/module-pins";
import { boardNamedPins } from "../data/board-pins";
import { moduleFamilies } from "../data/modules";
import { socParts } from "../data/socs";
import { devBoards } from "../data/boards";
import { buildPinViews, countByState, socGpioMap } from "./pins";

const byGpio = (views: ReturnType<typeof buildPinViews>, gpio: number) =>
  views.find((v) => v.gpio === gpio);

describe("SoC GPIO maps", () => {
  it("covers every series that has modules", () => {
    const needed = new Set(moduleFamilies.map((f) => f.socFamily));
    const have = new Set(socGpioMaps.map((m) => m.family));
    const missing = [...needed].filter((f) => !have.has(f));
    // Series with no ESP-IDF GPIO table yet are allowed, but must be few.
    expect(missing.length).toBeLessThanOrEqual(3);
  });

  it("never lists a GPIO twice, and stays within the pin count", () => {
    for (const m of socGpioMaps) {
      const nums = m.pins.map((p) => p.gpio);
      expect(new Set(nums).size, m.family).toBe(nums.length);
      if (m.pinCount !== undefined) {
        expect(Math.max(...nums), m.family).toBeLessThan(m.pinCount);
        expect(m.pins.length, m.family).toBeLessThanOrEqual(m.pinCount);
      }
    }
  });

  it("knows ESP32's input-only pins", () => {
    const esp32 = socGpioMap("ESP32")!;
    const inputOnly = esp32.pins.filter((p) => p.inputOnly).map((p) => p.gpio);
    expect(inputOnly).toEqual([34, 35, 36, 37, 38, 39]);
  });

  it("omits GPIOs the chip does not physically have", () => {
    const s3 = socGpioMap("ESP32-S3")!.pins.map((p) => p.gpio);
    for (const absent of [22, 23, 24, 25]) expect(s3).not.toContain(absent);
    const esp32 = socGpioMap("ESP32")!.pins.map((p) => p.gpio);
    for (const absent of [24, 28, 29, 30, 31]) expect(esp32).not.toContain(absent);
  });

  it("carries Espressif's own caveats verbatim", () => {
    for (const m of socGpioMaps) {
      expect(m.legend.length, m.family).toBeGreaterThan(0);
      expect(m.sourceUrl).toMatch(/^https:\/\/github\.com\/espressif\/esp-idf/);
    }
  });
});

describe("pin views", () => {
  it("marks the flash bus on a bare SoC", () => {
    const views = buildPinViews({ family: "ESP32-S3" });
    expect(byGpio(views, 27)?.state).toBe("memory-bus");
    expect(byGpio(views, 19)?.state).toBe("debug");
  });

  it("marks pins a module does not bring out", () => {
    const family = moduleFamilies.find((f) => f.name === "ESP32-C6-WROOM-1")!;
    const views = buildPinViews({
      family: family.socFamily,
      exposed: family.exposedGpios,
      detail: modulePinDetail[family.name],
    });
    const exposed = new Set(family.exposedGpios);
    for (const v of views) {
      if (!exposed.has(v.gpio)) expect(v.state, `GPIO${v.gpio}`).toBe("not-exposed");
    }
  });

  it("surfaces the datasheet footnote on ESP32-S3 Octal PSRAM pins", () => {
    const family = moduleFamilies.find((f) => f.name === "ESP32-S3-WROOM-1")!;
    const views = buildPinViews({
      family: family.socFamily,
      exposed: family.exposedGpios,
      detail: modulePinDetail[family.name],
    });
    const pin = byGpio(views, 35)!;
    expect(pin.pad).toMatch(/^IO35/);
    expect(pin.reasons.join(" ")).toMatch(/Octal SPI PSRAM/i);
  });

  it("lets a board's actual wiring override a general warning", () => {
    const views = buildPinViews({
      family: "ESP32-S3",
      named: [{ gpio: 35, roles: ["SPI MOSI"] }],
    });
    const pin = byGpio(views, 35)!;
    expect(pin.state).toBe("board-used");
    expect(pin.reasons[0]).toMatch(/Wired on this board/);
  });

  it("returns nothing for a series with no GPIO table", () => {
    expect(buildPinViews({ family: "ESP32-NOPE" })).toEqual([]);
  });

  it("counts every pin exactly once", () => {
    const views = buildPinViews({ family: "ESP32-C6" });
    const counts = countByState(views);
    expect(Object.values(counts).reduce((a, b) => a + b, 0)).toBe(views.length);
  });
});

describe("module pin data integrity", () => {
  it("publishes a pin map only when it matches Espressif's own GPIO count", () => {
    for (const f of moduleFamilies) {
      if (!f.exposedGpios) continue;
      expect(f.exposedGpios.length, f.name).toBe(f.gpioCount);
    }
  });

  it("only exposes GPIOs the SoC actually has", () => {
    for (const f of moduleFamilies) {
      const map = socGpioMap(f.socFamily);
      if (!f.exposedGpios || !map) continue;
      const valid = new Set(map.pins.map((p) => p.gpio));
      for (const g of f.exposedGpios) expect(valid.has(g), `${f.name} GPIO${g}`).toBe(true);
    }
  });

  it("has pad detail for every exposed GPIO", () => {
    for (const f of moduleFamilies) {
      if (!f.exposedGpios) continue;
      const detail = modulePinDetail[f.name];
      expect(detail, f.name).toBeDefined();
      for (const g of f.exposedGpios) expect(detail[String(g)], `${f.name} GPIO${g}`).toBeDefined();
    }
  });
});

describe("board pin data integrity", () => {
  it("names pins only on GPIOs the board's SoC has", () => {
    const byName = new Map(devBoards.map((b) => [b.name, b]));
    for (const [name, pins] of Object.entries(boardNamedPins)) {
      const board = byName.get(name);
      const map = board && socGpioMap(board.family);
      if (!map) continue;
      const valid = new Set(map.pins.map((p) => p.gpio));
      for (const p of pins) expect(valid.has(p.gpio), `${name} GPIO${p.gpio}`).toBe(true);
    }
  });

  it("attaches every pin list to a board in the catalog", () => {
    const names = new Set(devBoards.map((b) => b.name));
    for (const name of Object.keys(boardNamedPins)) expect(names.has(name), name).toBe(true);
  });

  it("gives every named pin at least one role", () => {
    for (const [name, pins] of Object.entries(boardNamedPins)) {
      for (const p of pins) expect(p.roles.length, `${name} GPIO${p.gpio}`).toBeGreaterThan(0);
    }
  });
});

describe("SoC parts reach a GPIO map", () => {
  it("every SoC series with parts has pins, or is explicitly new silicon", () => {
    const withoutMap = [...new Set(socParts.map((p) => p.family))].filter((f) => !socGpioMap(f));
    for (const f of withoutMap) expect(f).toMatch(/^ESP(8266|32-(E22|S31))/);
  });
});
