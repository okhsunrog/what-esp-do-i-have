import { describe, expect, it } from "vite-plus/test";
import { normalize, tidy } from "./normalize";

describe("normalize", () => {
  it("folds case", () => {
    expect(normalize("esp32-c6")).toBe("ESP32C6");
  });

  it("drops every separator a silkscreen might use", () => {
    const forms = [
      "ESP32-C6-WROOM-1-N8",
      "ESP32 C6 WROOM 1 N8",
      "ESP32_C6_WROOM_1_N8",
      "ESP32.C6.WROOM.1.N8",
      "esp32c6wroom1n8",
    ];
    const keys = new Set(forms.map(normalize));
    expect(keys.size).toBe(1);
    expect([...keys][0]).toBe("ESP32C6WROOM1N8");
  });

  it("treats unicode dashes like ASCII hyphens", () => {
    expect(normalize("ESP32–C6")).toBe(normalize("ESP32-C6"));
    expect(normalize("ESP32—C6")).toBe(normalize("ESP32-C6"));
    expect(normalize("ESP32‑C6")).toBe(normalize("ESP32-C6"));
  });

  it("ignores a soft hyphen inside a part number", () => {
    expect(normalize("ESP32­-WROOM­-DA")).toBe("ESP32WROOMDA");
  });

  it("returns an empty key for input with nothing alphanumeric", () => {
    expect(normalize("   --  ")).toBe("");
  });
});

describe("tidy", () => {
  it("collapses runs of whitespace but keeps separators", () => {
    expect(tidy("  ESP32   C6-WROOM \n 1 ")).toBe("ESP32 C6-WROOM 1");
  });
});
