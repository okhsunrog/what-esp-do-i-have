// AUTO-GENERATED. Development boards from Espressif's DevKits listing, vendor
// documentation (e.g. docs.waveshare.com), the pioarduino board manifests and
// espressif/arduino-esp32 boards.txt. Each row records which source it came from.
// Run `vp run catalog:check` to see what has changed upstream since.

import type { NamedPin } from "./types";

/** Loaded on demand: pins an Arduino variant names, so they are already in use. */
export const boardNamedPins: Record<string, NamedPin[]> = {
  "ESP32-S3-USB-OTG": [
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SD/MMC CMD", "SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SD/MMC CLK", "SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SD/MMC D0", "SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 45,
      roles: ["I2C SDA"],
    },
    {
      gpio: 46,
      roles: ["I2C SCL"],
    },
  ],
  "ESP32-S3-DevKitM-1": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "ESP32-C6-DevKitC-1": [
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "ESP32-C6-DevKitM-1": [
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "ESP32-C3-DevKitM-1": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA", "RGB LED"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "ESP32-PICO-DevKitM-2": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ESP32-C3-Zero": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["RGB LED"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "ESP32-C6-Zero": [
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 14,
      roles: ["I2C SDA"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["SPI SCK"],
    },
  ],
  "ESP32-S3-LCD-1.47": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["RGB LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-LCD-1.85": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Matrix": [
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 12,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-AMOLED-1.43": [
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["I2C SDA"],
    },
    {
      gpio: 48,
      roles: ["I2C SCL"],
    },
  ],
  "ESP32-S3-Touch-AMOLED-1.64": [
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["SD card CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["I2C SDA"],
    },
    {
      gpio: 48,
      roles: ["I2C SCL"],
    },
  ],
  "ESP32-S3-Touch-AMOLED-1.8": [
    {
      gpio: 14,
      roles: ["I2C SDA"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-AMOLED-2.06": [
    {
      gpio: 1,
      roles: ["SD/MMC CMD"],
    },
    {
      gpio: 2,
      roles: ["SD/MMC CLK"],
    },
    {
      gpio: 3,
      roles: ["SD/MMC D0"],
    },
    {
      gpio: 14,
      roles: ["I2C SCL"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 32,
      roles: ["SPI CS"],
    },
    {
      gpio: 33,
      roles: ["SPI SCK"],
    },
    {
      gpio: 34,
      roles: ["SPI MISO"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-AMOLED-2.41": [
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["I2C SDA"],
    },
    {
      gpio: 48,
      roles: ["I2C SCL"],
    },
  ],
  "ESP32-S3-Touch-LCD-1.28": [
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 9,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-LCD-1.69": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-LCD-1.85": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-LCD-2.1": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-LCD-2.8": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-LCD-4.3": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-LCD-4.3B": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-LCD-5": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Touch-LCD-7": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-S3-Zero": [
    {
      gpio: 21,
      roles: ["WS2812 RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "4D Systems GEN4-ESP32 16MB (ESP32S3-R8N16)": [
    {
      gpio: 17,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Adafruit pyCamera S3": [
    {
      gpio: 1,
      roles: ["NeoPixel"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["I2C SDA"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["display reset"],
    },
    {
      gpio: 39,
      roles: ["display CS"],
    },
    {
      gpio: 40,
      roles: ["display DC"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["SD card CS", "SPI CS"],
    },
  ],
  "Adafruit Feather ESP32 V2": [
    {
      gpio: 0,
      roles: ["NeoPixel"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 7,
      roles: ["UART0 RX"],
    },
    {
      gpio: 8,
      roles: ["UART0 TX"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 19,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["I2C SCL"],
    },
    {
      gpio: 21,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit Feather ESP32-C6": [
    {
      gpio: 0,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["NeoPixel"],
    },
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
    {
      gpio: 19,
      roles: ["I2C SDA"],
    },
    {
      gpio: 21,
      roles: ["SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 23,
      roles: ["SPI MISO"],
    },
  ],
  "Adafruit Feather ESP32-S2": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["NeoPixel"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 39,
      roles: ["UART0 TX"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit Feather ESP32-S2 Reverse TFT": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["NeoPixel"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 39,
      roles: ["UART0 TX"],
    },
    {
      gpio: 40,
      roles: ["display DC"],
    },
    {
      gpio: 41,
      roles: ["display reset"],
    },
    {
      gpio: 42,
      roles: ["SPI CS", "display CS"],
    },
  ],
  "Adafruit Feather ESP32-S2 TFT": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["UART0 RX"],
    },
    {
      gpio: 7,
      roles: ["SPI CS", "display CS"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["NeoPixel"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["display DC"],
    },
    {
      gpio: 40,
      roles: ["display reset"],
    },
    {
      gpio: 41,
      roles: ["I2C SCL"],
    },
    {
      gpio: 42,
      roles: ["I2C SDA"],
    },
  ],
  "Adafruit Feather ESP32-S3 2MB PSRAM": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["NeoPixel"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 39,
      roles: ["UART0 TX"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit Feather ESP32-S3 No PSRAM": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["NeoPixel"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 39,
      roles: ["UART0 TX"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit Feather ESP32-S3 Reverse TFT": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["NeoPixel"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 39,
      roles: ["UART0 TX"],
    },
    {
      gpio: 40,
      roles: ["display DC"],
    },
    {
      gpio: 41,
      roles: ["display reset"],
    },
    {
      gpio: 42,
      roles: ["SPI CS", "display CS"],
    },
  ],
  "Adafruit Feather ESP32-S3 TFT": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["UART0 RX"],
    },
    {
      gpio: 7,
      roles: ["SPI CS", "display CS"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["NeoPixel"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["display DC"],
    },
    {
      gpio: 40,
      roles: ["display reset"],
    },
    {
      gpio: 41,
      roles: ["I2C SCL"],
    },
    {
      gpio: 42,
      roles: ["I2C SDA"],
    },
  ],
  "Adafruit FunHouse": [
    {
      gpio: 3,
      roles: ["button 1"],
    },
    {
      gpio: 4,
      roles: ["button 2"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["I2C SDA"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO", "on-board LED"],
    },
    {
      gpio: 39,
      roles: ["display DC"],
    },
    {
      gpio: 40,
      roles: ["SPI CS", "display CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Adafruit ItsyBitsy ESP32": [
    {
      gpio: 0,
      roles: ["NeoPixel"],
    },
    {
      gpio: 8,
      roles: ["UART0 RX"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 19,
      roles: ["SPI SCK"],
    },
    {
      gpio: 20,
      roles: ["UART0 TX"],
    },
    {
      gpio: 21,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 22,
      roles: ["SPI MISO"],
    },
    {
      gpio: 27,
      roles: ["I2C SCL"],
    },
    {
      gpio: 32,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit MagTag 2.9": [
    {
      gpio: 1,
      roles: ["NeoPixel"],
    },
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 14,
      roles: ["button 2"],
    },
    {
      gpio: 15,
      roles: ["button 1"],
    },
    {
      gpio: 33,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["I2C SCL"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Adafruit MatrixPortal ESP32-S3": [
    {
      gpio: 4,
      roles: ["NeoPixel"],
    },
    {
      gpio: 8,
      roles: ["UART0 RX"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["I2C SDA"],
    },
    {
      gpio: 17,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["UART0 TX"],
    },
  ],
  "Adafruit Metro ESP32-S2": [
    {
      gpio: 0,
      roles: ["button 1"],
    },
    {
      gpio: 5,
      roles: ["UART0 TX"],
    },
    {
      gpio: 6,
      roles: ["UART0 RX"],
    },
    {
      gpio: 33,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["I2C SCL"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 42,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 45,
      roles: ["NeoPixel"],
    },
  ],
  "Adafruit Metro ESP32-S3": [
    {
      gpio: 0,
      roles: ["button 1"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 21,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["SPI SCK"],
    },
    {
      gpio: 40,
      roles: ["UART0 TX"],
    },
    {
      gpio: 41,
      roles: ["UART0 RX"],
    },
    {
      gpio: 42,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 45,
      roles: ["SPI CS"],
    },
    {
      gpio: 46,
      roles: ["NeoPixel"],
    },
    {
      gpio: 47,
      roles: ["I2C SDA"],
    },
    {
      gpio: 48,
      roles: ["I2C SCL"],
    },
  ],
  "Adafruit QT Py ESP32": [
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["NeoPixel"],
    },
    {
      gpio: 7,
      roles: ["UART0 RX", "UART1 RX"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 27,
      roles: ["SPI CS"],
    },
    {
      gpio: 32,
      roles: ["UART0 TX", "UART1 TX"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
  ],
  "Adafruit QT Py ESP32-C3": [
    {
      gpio: 2,
      roles: ["NeoPixel"],
    },
    {
      gpio: 5,
      roles: ["I2C SDA"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL", "SPI CS"],
    },
    {
      gpio: 7,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 8,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Adafruit QT Py ESP32-S2": [
    {
      gpio: 5,
      roles: ["UART0 TX"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 16,
      roles: ["UART0 RX"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["NeoPixel"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit QT Py ESP32-S3 (4M Flash 2M PSRAM)": [
    {
      gpio: 5,
      roles: ["UART0 TX"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 16,
      roles: ["UART0 RX"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["NeoPixel"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit QT Py ESP32-S3 No PSRAM": [
    {
      gpio: 5,
      roles: ["UART0 TX"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 16,
      roles: ["UART0 RX"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["NeoPixel"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit Qualia ESP32-S3 RGB666": [
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 6,
      roles: ["SPI MISO"],
    },
    {
      gpio: 7,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
  ],
  "AirM2M CORE ESP32C3": [
    {
      gpio: 2,
      roles: ["SPI SCK"],
    },
    {
      gpio: 3,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["SPI MISO"],
    },
    {
      gpio: 12,
      roles: ["on-board LED"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "ALKS ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 14,
      roles: ["I2C SCL"],
    },
    {
      gpio: 19,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 22,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI SCK", "on-board LED"],
    },
    {
      gpio: 27,
      roles: ["I2C SDA"],
    },
  ],
  "Arduino Nesso-N1": [
    {
      gpio: 8,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["I2C SDA"],
    },
    {
      gpio: 20,
      roles: ["SPI SCK"],
    },
    {
      gpio: 21,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 22,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI CS"],
    },
  ],
  "ArtronShop ATD1.47-S3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "EspinalLab ATMegaZero ESP32-S2": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["SPI CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Aventen S3 Sync": [
    {
      gpio: 2,
      roles: ["I2C SDA"],
    },
    {
      gpio: 3,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "AZ-Delivery ESP-32 Dev Kit C V4": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Smart Bee Data Logger": [
    {
      gpio: 0,
      roles: ["BOOT button"],
    },
    {
      gpio: 36,
      roles: ["I2C SCL"],
    },
    {
      gpio: 37,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 45,
      roles: ["SPI MISO"],
    },
    {
      gpio: 46,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 47,
      roles: ["SPI CS"],
    },
    {
      gpio: 48,
      roles: ["SPI SCK"],
    },
  ],
  "Smart Bee Motion": [
    {
      gpio: 0,
      roles: ["BOOT button"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["SPI SCK"],
    },
    {
      gpio: 16,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["I2C SDA"],
    },
    {
      gpio: 37,
      roles: ["I2C SCL"],
    },
    {
      gpio: 38,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Smart Bee Motion Mini": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["BOOT button", "I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Smart Bee Motion S3": [
    {
      gpio: 0,
      roles: ["BOOT button"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 16,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["SPI SCK"],
    },
    {
      gpio: 36,
      roles: ["I2C SCL"],
    },
    {
      gpio: 37,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Smart Bee S3": [
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["I2C SCL"],
    },
    {
      gpio: 37,
      roles: ["I2C SDA"],
    },
    {
      gpio: 38,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "BPI-Bit": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "BPI-Centi-S3": [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "BPI-Leaf-S3": [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "CNRS AW2ETH": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["I2C SDA"],
    },
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 14,
      roles: ["SPI MOSI"],
    },
  ],
  "Connaxio's Espoir": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 9,
      roles: ["UART1 RX"],
    },
    {
      gpio: 10,
      roles: ["UART1 TX"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "Cytron Maker Feather AIoT S3": [
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["UART0 TX"],
    },
    {
      gpio: 16,
      roles: ["UART0 RX"],
    },
    {
      gpio: 17,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI MISO"],
    },
    {
      gpio: 41,
      roles: ["I2C SCL"],
    },
    {
      gpio: 42,
      roles: ["I2C SDA"],
    },
  ],
  "D-duino-32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 5,
      roles: ["I2C SDA"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
  ],
  "Deneyap Kart": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA", "on-board LED"],
    },
    {
      gpio: 5,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["SPI MISO"],
    },
    {
      gpio: 19,
      roles: ["SPI SCK"],
    },
    {
      gpio: 21,
      roles: ["SPI CS"],
    },
  ],
  "Deneyap Kart 1A": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["SPI MISO"],
    },
    {
      gpio: 19,
      roles: ["SPI SCK"],
    },
    {
      gpio: 21,
      roles: ["SPI CS"],
    },
  ],
  "Deneyap Kart 1A v2": [
    {
      gpio: 21,
      roles: ["I2C SCL"],
    },
    {
      gpio: 39,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 40,
      roles: ["SPI MISO"],
    },
    {
      gpio: 41,
      roles: ["SPI SCK"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["I2C SDA"],
    },
  ],
  "Deneyap Kart G": [
    {
      gpio: 2,
      roles: ["I2C SCL"],
    },
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Deneyap Mini": [
    {
      gpio: 21,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["on-board LED"],
    },
    {
      gpio: 36,
      roles: ["I2C SDA"],
    },
    {
      gpio: 37,
      roles: ["I2C SCL"],
    },
    {
      gpio: 38,
      roles: ["SPI SCK"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
    {
      gpio: 40,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Deneyap Mini v2": [
    {
      gpio: 21,
      roles: ["SPI CS"],
    },
    {
      gpio: 36,
      roles: ["I2C SDA"],
    },
    {
      gpio: 37,
      roles: ["I2C SCL"],
    },
    {
      gpio: 38,
      roles: ["SPI SCK"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
    {
      gpio: 40,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Denky32 (WROOM32)": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Denky D4 (PICO-V3-02)": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "DFRobot Beetle ESP32-C3": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["on-board LED"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "DFRobot FireBeetle 2 ESP32-C6": [
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 19,
      roles: ["I2C SDA"],
    },
    {
      gpio: 20,
      roles: ["I2C SCL"],
    },
    {
      gpio: 21,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 23,
      roles: ["SPI SCK"],
    },
  ],
  "DFRobot Firebeetle 2 ESP32-E": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "DFRobot Firebeetle 2 ESP32-S3": [
    {
      gpio: 1,
      roles: ["I2C SDA"],
    },
    {
      gpio: 2,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 16,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "DFRobot Romeo ESP32-S3": [
    {
      gpio: 1,
      roles: ["I2C SDA"],
    },
    {
      gpio: 2,
      roles: ["I2C SCL"],
    },
    {
      gpio: 15,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 16,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "TAMC DPU ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS", "display CS"],
    },
    {
      gpio: 18,
      roles: ["display backlight"],
    },
    {
      gpio: 23,
      roles: ["SD card CS"],
    },
    {
      gpio: 27,
      roles: ["display DC"],
    },
    {
      gpio: 32,
      roles: ["display reset"],
    },
  ],
  "Seeed Studio Edgebox-ESP-100": [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 12,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 13,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["I2C SDA"],
    },
  ],
  "Espressif ESP-WROVER-KIT": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Espressif ESP32-C2-DevKitM-1": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 19,
      roles: ["UART0 RX"],
    },
    {
      gpio: 20,
      roles: ["UART0 TX"],
    },
  ],
  "Espressif ESP32-C3-DevKitC-02": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA", "RGB LED"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Ai-Thinker ESP-C3-M1-I-Kit": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Espressif ESP32-C5-DevKitC-1 4MB no PSRAM": [
    {
      gpio: 0,
      roles: ["I2C SDA"],
    },
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 27,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-C5-DevKitC-1 N16R4 (16 MB Flash Quad, 4 MB PSRAM Quad)": [
    {
      gpio: 0,
      roles: ["I2C SDA"],
    },
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 27,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-C5-DevKitC-1 N4 (4MB no PSRAM)": [
    {
      gpio: 0,
      roles: ["I2C SDA"],
    },
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 27,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-C5-DevKitC-1 N8R4 (8 MB Flash Quad, 4 MB PSRAM Quad)": [
    {
      gpio: 0,
      roles: ["I2C SDA"],
    },
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 27,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-C61-DevKitC-1 N8R2 (8 MB Flash Quad, 2 MB PSRAM Quad)": [
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 10,
      roles: ["UART0 RX"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
    {
      gpio: 25,
      roles: ["SPI CS"],
    },
    {
      gpio: 26,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 27,
      roles: ["SPI MISO"],
    },
    {
      gpio: 28,
      roles: ["SPI SCK"],
    },
  ],
  "Espressif ESP32-C61-DevKitC-1 (4 MB Flash)": [
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 10,
      roles: ["UART0 RX"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
    {
      gpio: 25,
      roles: ["SPI CS"],
    },
    {
      gpio: 26,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 27,
      roles: ["SPI MISO"],
    },
    {
      gpio: 28,
      roles: ["SPI SCK"],
    },
  ],
  "OLIMEX ESP32-DevKit-LiPo": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 25,
      roles: ["UART1 RX"],
    },
    {
      gpio: 33,
      roles: ["UART1 TX"],
    },
  ],
  "OLIMEX ESP32-EVB": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["UART1 TX"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI MISO"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 17,
      roles: ["SPI CS"],
    },
    {
      gpio: 36,
      roles: ["UART1 RX"],
    },
  ],
  "OLIMEX ESP32-GATEWAY": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["on-board LED"],
    },
  ],
  "Espressif ESP32-H2-DevKit": [
    {
      gpio: 0,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["UART0 RX"],
    },
    {
      gpio: 24,
      roles: ["UART0 TX"],
    },
    {
      gpio: 25,
      roles: ["SPI MOSI"],
    },
  ],
  "Espressif ESP32-P4 Function EV Board (ES pre rev.300)": [
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["I2C SCL"],
    },
    {
      gpio: 26,
      roles: ["SPI CS"],
    },
    {
      gpio: 32,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
  ],
  "Espressif ESP32-P4 ES (pre rev.300) generic": [
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["I2C SCL"],
    },
    {
      gpio: 26,
      roles: ["SPI CS"],
    },
    {
      gpio: 32,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
  ],
  "Espressif ESP32-P4 Function EV Board v1.6 (rev.301)": [
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["I2C SCL"],
    },
    {
      gpio: 26,
      roles: ["SPI CS"],
    },
    {
      gpio: 32,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
  ],
  "Espressif ESP32-P4 rev.300 generic": [
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["I2C SCL"],
    },
    {
      gpio: 26,
      roles: ["SPI CS"],
    },
    {
      gpio: 32,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
  ],
  "OLIMEX ESP32-PoE-ISO": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["UART1 TX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI MISO"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 36,
      roles: ["UART1 RX"],
    },
  ],
  "OLIMEX ESP32-PoE": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["UART1 TX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI MISO"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 36,
      roles: ["UART1 RX"],
    },
  ],
  "OLIMEX ESP32-PRO": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["UART1 TX"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI MISO"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 17,
      roles: ["SPI CS"],
    },
    {
      gpio: 36,
      roles: ["UART1 RX"],
    },
  ],
  "Franzininho WiFi Board": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Espressif ESP32-S2-Kaluga-1 Kit": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Espressif ESP32-S2-Saola-1": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Espressif ESP32-S3-DevKitC-1-N32R8V (32 MB Flash Octal, 8 MB PSRAM Octal)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-S3-DevKitC-1-N8 (8 MB QD, No PSRAM)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-S3-DevKitC-1-N16R16V (16 MB Flash Quad, 16 MB PSRAM Octal)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-S3-DevKitC-1-N16R2 (16 MB Flash Quad, 2 MB PSRAM Quad)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-S3-DevKitC-1-N16R8V (16 MB Flash Quad, 8 MB PSRAM Octal)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-S3-DevKitC-1-N4R2 (4 MB Flash Quad, 2 MB PSRAM Quad)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-S3-DevKitC-1-N4R8 (4 MB Flash Quad, 8 MB PSRAM Octal)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-S3-DevKitC-1-N8R2 (8 MB Flash Quad, 2 MB PSRAM quad)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-S3-DevKitC-1-N8R8 (8 MB Flash Quad, 8 MB PSRAM Octal)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif ESP32-S3-FH4R2 (4 MB QD, 2MB PSRAM)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Espressif Generic ESP32-solo1 4M Flash": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Electronic SweetPeas ESP320": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["I2C SDA"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["on-board LED"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["I2C SCL", "SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
  ],
  "AI Thinker ESP32-CAM": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Espressif ESP32 Dev Module": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "DOIT ESP32 DEVKIT V1": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "DOIT ESPduino32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
  ],
  "ESP32-S3 16MB QIO, 8MB OPI PSRAM": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "ESP32-S3 PowerFeather": [
    {
      gpio: 35,
      roles: ["I2C SDA"],
    },
    {
      gpio: 36,
      roles: ["I2C SCL"],
    },
    {
      gpio: 39,
      roles: ["SPI SCK"],
    },
    {
      gpio: 40,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 41,
      roles: ["SPI MISO"],
    },
    {
      gpio: 42,
      roles: ["UART0 RX"],
    },
    {
      gpio: 44,
      roles: ["UART0 TX"],
    },
    {
      gpio: 46,
      roles: ["on-board LED"],
    },
  ],
  "Espressif ESP32-S3-Box": [
    {
      gpio: 4,
      roles: ["display DC"],
    },
    {
      gpio: 5,
      roles: ["display CS"],
    },
    {
      gpio: 6,
      roles: ["display MOSI"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 40,
      roles: ["I2C SCL"],
    },
    {
      gpio: 41,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 45,
      roles: ["display backlight"],
    },
    {
      gpio: 48,
      roles: ["display reset"],
    },
  ],
  "ESP32S3 CAM LCD": [
    {
      gpio: 2,
      roles: ["display DC"],
    },
    {
      gpio: 9,
      roles: ["SD/MMC CLK"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["SD/MMC CMD"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "SparkFun ESP32 Thing": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI CS"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "SparkFun ESP32 Thing Plus": [
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 RX"],
    },
    {
      gpio: 17,
      roles: ["UART0 TX"],
    },
    {
      gpio: 18,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["SPI CS"],
    },
  ],
  "ESP32vn IoT Uno": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "April Brother ESPea32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  ESPectro32: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  ESPino32: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Adafruit ESP32-S2 Feather Development Board": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["NeoPixel"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 39,
      roles: ["UART0 TX"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit ESP32 Feather": [
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 RX"],
    },
    {
      gpio: 17,
      roles: ["UART0 TX"],
    },
    {
      gpio: 18,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["SPI CS"],
    },
  ],
  "FireBeetle-ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ESP32 FM DevKit": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["I2C SDA"],
    },
    {
      gpio: 17,
      roles: ["I2C SCL"],
    },
  ],
  "Franzininho WiFi": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Franzininho WiFi MSC": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Freenove ESP32-S3 WROOM N8R8 (8MB Flash / 8MB PSRAM)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Freenove ESP32-Wrover": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Frog Board ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ProtoCentral HealthyPi 4": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI CS"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Heltec WiFi Kit 32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
  ],
  "Heltec WiFi Kit 32 (V3)": [
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 35,
      roles: ["on-board LED"],
    },
    {
      gpio: 41,
      roles: ["I2C SDA"],
    },
    {
      gpio: 42,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec WiFi Kit 32 (V2)": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
  ],
  "Heltec WiFi LoRa 32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  "Heltec WiFi LoRa 32 (V2)": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  "Heltec WiFi LoRa 32 (V3)": [
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 35,
      roles: ["on-board LED"],
    },
    {
      gpio: 41,
      roles: ["I2C SDA"],
    },
    {
      gpio: 42,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Wireless Stick": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  "Heltec Wireless Stick Lite": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  HONEYLemon: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Hornbill ESP32 Dev": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Hornbill ESP32 Minima": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI CS"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Huidu HD-WF1": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Huidu HD-WF2": [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Imbrios LogSens V1P1": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["on-board LED"],
    },
  ],
  "INEX OpenKB": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "IntoRobot Fig": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["on-board LED"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 17,
      roles: ["SPI MISO"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "IoTaaP Magnolia": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "oddWires IoT-Bus Io": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "oddWires IoT-Bus Proteus": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ArtronShop IOXESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ArtronShop IOXESP32PS": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ESP32-2432S028R CYD": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "MakerAsia KB32-FT": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "KITS ESP32 EDU": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Labplus mPython": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA", "SPI MOSI"],
    },
  ],
  "Lilka v2": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "LilyGo T-Display-S3": [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "LilyGo T-Display": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "LilyGo T-Energy-S3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "LilyGo T3-S3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Lion:Bit Dev Board": [
    {
      gpio: 0,
      roles: ["on-board LED"],
    },
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
  ],
  "Lion:Bit S3 STEM Dev Board": [
    {
      gpio: 0,
      roles: ["on-board LED"],
    },
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI", "display SCLK"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK", "display MOSI"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO", "display DC"],
    },
    {
      gpio: 38,
      roles: ["display reset"],
    },
    {
      gpio: 40,
      roles: ["I2C SDA"],
    },
    {
      gpio: 41,
      roles: ["I2C SCL"],
    },
    {
      gpio: 42,
      roles: ["display CS"],
    },
  ],
  "WEMOS LOLIN32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "WEMOS LOLIN32 Lite": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["I2C SDA", "SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["on-board LED"],
    },
    {
      gpio: 23,
      roles: ["I2C SCL", "SPI MOSI"],
    },
  ],
  "WEMOS LOLIN C3 Mini": [
    {
      gpio: 2,
      roles: ["SPI SCK"],
    },
    {
      gpio: 3,
      roles: ["SPI MISO"],
    },
    {
      gpio: 4,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 7,
      roles: ["RGB LED"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "WEMOS LOLIN D32": [
    {
      gpio: 5,
      roles: ["on-board LED"],
    },
  ],
  "WEMOS LOLIN D32 PRO": [
    {
      gpio: 5,
      roles: ["on-board LED"],
    },
    {
      gpio: 14,
      roles: ["display CS"],
    },
    {
      gpio: 27,
      roles: ["display DC"],
    },
    {
      gpio: 33,
      roles: ["display reset"],
    },
  ],
  "WEMOS LOLIN S2 Mini": [
    {
      gpio: 7,
      roles: ["SPI SCK"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["I2C SDA"],
    },
    {
      gpio: 35,
      roles: ["I2C SCL"],
    },
    {
      gpio: 37,
      roles: ["UART0 RX"],
    },
    {
      gpio: 39,
      roles: ["UART0 TX"],
    },
  ],
  "WEMOS LOLIN S2 PICO": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["UART0 RX"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["UART0 TX"],
    },
  ],
  "WEMOS LOLIN S3": [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 41,
      roles: ["I2C SCL"],
    },
    {
      gpio: 42,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "WEMOS LOLIN S3 Mini": [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 35,
      roles: ["I2C SDA"],
    },
    {
      gpio: 36,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "WEMOS LOLIN S3 Mini Pro": [
    {
      gpio: 11,
      roles: ["I2C SCL"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["display backlight"],
    },
    {
      gpio: 34,
      roles: ["display reset"],
    },
    {
      gpio: 35,
      roles: ["display CS"],
    },
    {
      gpio: 36,
      roles: ["display DC"],
    },
    {
      gpio: 37,
      roles: ["SPI CS"],
    },
    {
      gpio: 38,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
    {
      gpio: 40,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "WEMOS LOLIN S3 PRO": [
    {
      gpio: 0,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["I2C SDA"],
    },
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["display reset"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["display DC"],
    },
    {
      gpio: 48,
      roles: ["display CS"],
    },
  ],
  "Pycom LoPy": [
    {
      gpio: 0,
      roles: ["RGB LED"],
    },
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL", "SPI SCK"],
    },
    {
      gpio: 17,
      roles: ["SPI CS"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
  ],
  "Pycom LoPy4": [
    {
      gpio: 0,
      roles: ["RGB LED"],
    },
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL", "SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
  ],
  "M5Stack-ATOM": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 19,
      roles: ["SPI CS"],
    },
    {
      gpio: 22,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MISO"],
    },
    {
      gpio: 26,
      roles: ["I2C SDA"],
    },
    {
      gpio: 32,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["SPI MOSI"],
    },
  ],
  "M5Stack AtomS3": [
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 17,
      roles: ["SPI SCK"],
    },
    {
      gpio: 21,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 35,
      roles: ["RGB LED"],
    },
    {
      gpio: 38,
      roles: ["I2C SDA"],
    },
    {
      gpio: 39,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "M5Stack AtomS3U": [
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 17,
      roles: ["SPI SCK"],
    },
    {
      gpio: 21,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 35,
      roles: ["RGB LED"],
    },
    {
      gpio: 38,
      roles: ["I2C SDA"],
    },
    {
      gpio: 39,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "M5Stack Core ESP32 16M": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "M5Stack Core ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "M5Stack Core2": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 38,
      roles: ["SPI MISO"],
    },
  ],
  "M5Stack-Core Ink": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 9,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI MISO"],
    },
  ],
  "M5Stack CoreS3": [
    {
      gpio: 11,
      roles: ["I2C SCL"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MISO"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "M5Stack FIRE": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "M5Stack GREY ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "M5Stack StampS3": [
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "M5Stack Station": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
  ],
  "M5STACK Tab5 esp32-p4 Board (ES pre rev.300)": [
    {
      gpio: 26,
      roles: ["SPI CS"],
    },
    {
      gpio: 32,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 53,
      roles: ["I2C SDA"],
    },
    {
      gpio: 54,
      roles: ["I2C SCL"],
    },
  ],
  "M5Stack Timer CAM": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "M5Stack Paper": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 25,
      roles: ["I2C SDA"],
    },
    {
      gpio: 32,
      roles: ["I2C SCL"],
    },
  ],
  "M5Stamp-Pico": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 26,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI MISO"],
    },
  ],
  MagicBit: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "MGBOT IOTIK 32A": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["on-board LED"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "MGBOT IOTIK 32B": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK", "on-board LED"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "MH ET LIVE ESP32DevKIT": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "MH ET LIVE ESP32MiniKit": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Microduino Core ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SCL"],
    },
    {
      gpio: 22,
      roles: ["I2C SDA"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  microS2: [
    {
      gpio: 0,
      roles: ["on-board button"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 21,
      roles: ["on-board LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Deparment of Alchemy MiniMain ESP32-S2": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["RGB LED"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 39,
      roles: ["UART0 TX"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
  ],
  "MakerAsia Nano32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Kinetic Dynamics Nebula S3": [
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL"],
    },
    {
      gpio: 38,
      roles: ["SPI SCK"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
    {
      gpio: 40,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 41,
      roles: ["SPI CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "u-blox NINA-W10 series": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  Node32s: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "NodeMCU-32S": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Ai-Thinker NodeMCU-32S2 (ESP-12K)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Nologo ESP32C3 SuperMini": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA", "on-board LED"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "YeaCreate NSCREEN-32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ODROID-GO": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["SPI CS"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Onehorse ESP32 Dev Module": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "OROCA EduBot": [
    {
      gpio: 2,
      roles: ["SPI CS"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 RX"],
    },
    {
      gpio: 17,
      roles: ["UART0 TX"],
    },
    {
      gpio: 18,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "ESP32 Pico Kit": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Fishino Piranha ESP-32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Dongsen Tech Pocket 32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Pycom GPy": [
    {
      gpio: 0,
      roles: ["RGB LED"],
    },
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL", "SPI SCK"],
    },
    {
      gpio: 17,
      roles: ["SPI CS"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
  ],
  Qchip: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
  ],
  "Noduino Quantum": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Munich Labs RedPill ESP32-S3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 17,
      roles: ["SPI MISO"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "RoboHeart Hercules": [
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 34,
      roles: ["UART0 RX"],
    },
    {
      gpio: 35,
      roles: ["UART0 TX"],
    },
  ],
  "RYMCU ESP32-S3-DevKitC-1-N8R2 (8 MB QD, 2 MB PSRAM)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "S.ODI Ultra v1": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Seeed Studio XIAO ESP32S3 Plus": [
    {
      gpio: 5,
      roles: ["I2C SDA"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 7,
      roles: ["SPI SCK"],
    },
    {
      gpio: 8,
      roles: ["SPI MISO"],
    },
    {
      gpio: 9,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 21,
      roles: ["on-board LED"],
    },
    {
      gpio: 41,
      roles: ["UART1 RX"],
    },
    {
      gpio: 42,
      roles: ["UART1 TX"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["SPI CS", "UART0 RX"],
    },
  ],
  "Seeed Studio XIAO ESP32C3": [
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 8,
      roles: ["SPI SCK"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI CS", "UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Seeed Studio XIAO ESP32C5": [
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["SPI SCK"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
    {
      gpio: 24,
      roles: ["I2C SCL"],
    },
    {
      gpio: 27,
      roles: ["on-board LED"],
    },
  ],
  "Seeed Studio XIAO ESP32C6": [
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 19,
      roles: ["SPI SCK"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["SPI CS"],
    },
    {
      gpio: 22,
      roles: ["I2C SDA"],
    },
    {
      gpio: 23,
      roles: ["I2C SCL"],
    },
  ],
  "Seeed Studio XIAO ESP32S3": [
    {
      gpio: 5,
      roles: ["I2C SDA"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 7,
      roles: ["SPI SCK"],
    },
    {
      gpio: 8,
      roles: ["SPI MISO"],
    },
    {
      gpio: 9,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 21,
      roles: ["on-board LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["SPI CS", "UART0 RX"],
    },
  ],
  "senseBox MCU-S2 ESP32-S2": [
    {
      gpio: 1,
      roles: ["RGB LED"],
    },
    {
      gpio: 17,
      roles: ["UART1 TX"],
    },
    {
      gpio: 18,
      roles: ["UART1 RX"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["I2C SDA"],
    },
    {
      gpio: 40,
      roles: ["I2C SCL"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "LOGISENSES Senses Weizen": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "SG-O AirMon": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "SparkFun ESP32 IoT RedBoard": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK", "on-board LED"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Sparkfun ESP32-C6 Thing Plus": [
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 19,
      roles: ["SPI SCK"],
    },
    {
      gpio: 20,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 21,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["RGB LED"],
    },
  ],
  "SparkFun ESP32 MicroMod": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["UART1 RX"],
    },
    {
      gpio: 17,
      roles: ["UART1 TX"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "SparkFun ESP32-S2 Thing Plus": [
    {
      gpio: 1,
      roles: ["I2C SDA"],
    },
    {
      gpio: 2,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["UART1 RX"],
    },
    {
      gpio: 34,
      roles: ["UART1 TX"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "SparkFun ESP32 Thing Plus C": [
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["UART0 RX"],
    },
    {
      gpio: 17,
      roles: ["UART0 TX"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  SPARKFUN_ESP32S3_THING_PLUS: [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "SparkFun LoRa Gateway 1-Channel": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 16,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
  ],
  "SparkFun Pro Micro ESP32-C3": [
    {
      gpio: 0,
      roles: ["SPI SCK"],
    },
    {
      gpio: 1,
      roles: ["SPI MISO"],
    },
    {
      gpio: 3,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 5,
      roles: ["I2C SDA"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "SparkFun ESP32-C6 Qwiic Pocket": [
    {
      gpio: 2,
      roles: ["SPI CS"],
    },
    {
      gpio: 3,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 4,
      roles: ["SPI MISO"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 23,
      roles: ["on-board LED"],
    },
  ],
  "TAMC Termod S3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS", "display CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 14,
      roles: ["display reset"],
    },
    {
      gpio: 18,
      roles: ["display DC"],
    },
    {
      gpio: 21,
      roles: ["SD card CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker TinyPICO": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Trueverit ESP32 Universal IoT Driver MK II": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 12,
      roles: ["UART1 TX"],
    },
    {
      gpio: 13,
      roles: ["UART1 RX"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK", "on-board LED"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["SPI MISO"],
    },
  ],
  "Trueverit ESP32 Universal IoT Driver MK III": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 12,
      roles: ["UART1 TX"],
    },
    {
      gpio: 13,
      roles: ["UART1 RX"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK", "on-board LED"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["SPI MISO"],
    },
  ],
  "Trueverit ESP32 Universal IoT Driver": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 12,
      roles: ["UART1 TX"],
    },
    {
      gpio: 13,
      roles: ["UART1 RX"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK", "on-board LED"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["SPI MISO"],
    },
  ],
  "TTGO LoRa32-OLED V1": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  "TTGO LoRa32-OLED V2": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SD card CS"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL", "on-board LED"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  "TTGO LoRa32-OLED v2.1.6": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SD card CS"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  "TTGO T-Beam": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 14,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  "TTGO T-OI PLUS RISC-V ESP32-C3": [
    {
      gpio: 3,
      roles: ["on-board LED"],
    },
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
    {
      gpio: 19,
      roles: ["I2C SDA"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "TTGO T-Watch": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI MISO"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 13,
      roles: ["SPI CS"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["UART1 TX"],
    },
    {
      gpio: 34,
      roles: ["UART1 RX"],
    },
  ],
  "TTGO T1": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI MISO"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 13,
      roles: ["SPI CS"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["on-board LED"],
    },
    {
      gpio: 23,
      roles: ["I2C SCL"],
    },
  ],
  "TTGO T7 V1.3 Mini32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL", "on-board LED"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "TTGO T7 V1.4 Mini32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO", "on-board LED"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Turta IoT Node": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Unexpected Maker BLING!": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 17,
      roles: ["battery sense"],
    },
    {
      gpio: 21,
      roles: ["SD card CS", "SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker EDGES3[D]": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker FeatherS2": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker FeatherS2 Neo": [
    {
      gpio: 2,
      roles: ["battery sense"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker FeatherS3": [
    {
      gpio: 2,
      roles: ["battery sense"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker FeatherS3 Neo": [
    {
      gpio: 2,
      roles: ["battery sense"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker NanoS3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker OMGS3": [
    {
      gpio: 3,
      roles: ["SPI CS"],
    },
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker PROS3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["battery sense"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker SQUiXL": [
    {
      gpio: 1,
      roles: ["I2C SDA"],
    },
    {
      gpio: 2,
      roles: ["I2C SCL"],
    },
    {
      gpio: 41,
      roles: ["SPI MISO"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
    {
      gpio: 45,
      roles: ["SPI SCK"],
    },
    {
      gpio: 46,
      roles: ["SPI MOSI"],
    },
  ],
  "Unexpected Maker TinyC6": [
    {
      gpio: 4,
      roles: ["battery sense"],
    },
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI SCK"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["SPI MOSI"],
    },
  ],
  "Unexpected Maker TinyS2": [
    {
      gpio: 3,
      roles: ["battery sense"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 14,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Unexpected Maker TinyS3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["battery sense"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "unPhone 7": [
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 RX"],
    },
    {
      gpio: 17,
      roles: ["UART0 TX"],
    },
    {
      gpio: 18,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["SPI CS"],
    },
  ],
  "unPhone 8": [
    {
      gpio: 1,
      roles: ["I2C SDA"],
    },
    {
      gpio: 2,
      roles: ["I2C SCL"],
    },
    {
      gpio: 3,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 36,
      roles: ["UART0 RX"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["SPI SCK"],
    },
    {
      gpio: 39,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 40,
      roles: ["SPI MISO"],
    },
  ],
  "unPhone 9": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 39,
      roles: ["SPI SCK"],
    },
    {
      gpio: 40,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 41,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "uPesy ESP32 Wroom DevKit": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "uPesy ESP32 Wrover DevKit": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Valetron Systems VALTRACK-V4MVF": [
    {
      gpio: 0,
      roles: ["UART1 TX"],
    },
    {
      gpio: 1,
      roles: ["UART1 RX"],
    },
    {
      gpio: 5,
      roles: ["I2C SDA"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 8,
      roles: ["SPI SCK"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI CS", "UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Valetron Systems VALTRACK-V4VTS": [
    {
      gpio: 0,
      roles: ["UART1 TX"],
    },
    {
      gpio: 1,
      roles: ["UART1 RX"],
    },
    {
      gpio: 5,
      roles: ["I2C SDA"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 8,
      roles: ["SPI SCK"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI CS", "UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "VintLabs ESP32 Devkit": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "SQFMI Watchy v2.0": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Waveshare ESP32-S3-Touch-LCD-1.28 (16 MB QD, 2MB PSRAM)": [
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 9,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "WeAct Studio ESP32C3CoreBoard": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA", "RGB LED"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "WEMOS D1 MINI ESP32": [
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
  ],
  "WEMOS D1 R32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "WeMos WiFi and Bluetooth Battery": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Silicognition wESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 12,
      roles: ["UART1 TX"],
    },
    {
      gpio: 13,
      roles: ["UART1 RX"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["SPI MISO"],
    },
  ],
  "Widora AIR": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 17,
      roles: ["SPI MISO"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
  ],
  "Blinker WiFiduino32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["I2C SDA", "SPI CS"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Blinker WiFiduinoV2 (ESP32-C3)": [
    {
      gpio: 2,
      roles: ["SPI SCK"],
    },
    {
      gpio: 3,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Blinker WiFiduino32S3": [
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "Pycom WiPy3": [
    {
      gpio: 0,
      roles: ["RGB LED"],
    },
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI CS"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL", "SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
  ],
  "Wireless-Tag WT32-ETH01 Ethernet Module": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 14,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["SPI MISO"],
    },
    {
      gpio: 32,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["I2C SDA"],
    },
  ],
  "wt32-sc01-plus": [
    {
      gpio: 1,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 38,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["SPI SCK"],
    },
    {
      gpio: 40,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 41,
      roles: ["SD card CS", "SPI CS"],
    },
    {
      gpio: 42,
      roles: ["UART0 TX"],
    },
  ],
  "XinaBox CW02": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 27,
      roles: ["on-board LED"],
    },
  ],
  "YelloByte YB-ESP32-S3-AMP": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["on-board LED"],
    },
  ],
  "YelloByte YB-ESP32-S3-AMP (Rev.2)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["on-board LED"],
    },
  ],
  "YelloByte YB-ESP32-S3-AMP (Rev.3)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["on-board LED"],
    },
  ],
  "YelloByte YB-ESP32-S3-DAC": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["on-board LED"],
    },
  ],
  "YelloByte YB-ESP32-S3-DRV": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["on-board LED"],
    },
  ],
  "YelloByte YB-ESP32-S3-ETH": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["on-board LED"],
    },
  ],
  "ESP32C2 Dev Module": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 19,
      roles: ["UART0 RX"],
    },
    {
      gpio: 20,
      roles: ["UART0 TX"],
    },
  ],
  "ESP32C5 Dev Module": [
    {
      gpio: 0,
      roles: ["I2C SDA"],
    },
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 27,
      roles: ["RGB LED"],
    },
  ],
  "ESP32P4 Dev Module": [
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["I2C SCL"],
    },
    {
      gpio: 26,
      roles: ["SPI CS"],
    },
    {
      gpio: 32,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32H2 Dev Module": [
    {
      gpio: 0,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["UART0 RX"],
    },
    {
      gpio: 24,
      roles: ["UART0 TX"],
    },
    {
      gpio: 25,
      roles: ["SPI MOSI"],
    },
  ],
  "ESP32C6 Dev Module": [
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "ESP32C61 Dev Module": [
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 10,
      roles: ["UART0 RX"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
    {
      gpio: 25,
      roles: ["SPI CS"],
    },
    {
      gpio: 26,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 27,
      roles: ["SPI MISO"],
    },
    {
      gpio: 28,
      roles: ["SPI SCK"],
    },
  ],
  "ESP32S3 Dev Module": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "ESP32C3 Dev Module": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA", "RGB LED"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "ESP32S2 Dev Module": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32-WROOM-DA Module": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ESP32 Wrover Module": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ESP32S3 Dev Module Octal (WROOM2)": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  "ESP32S2 Native USB": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP32 Wrover Kit (all versions)": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ESP32P4 Core Board": [
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["I2C SCL"],
    },
    {
      gpio: 30,
      roles: ["SPI CS"],
    },
    {
      gpio: 31,
      roles: ["SPI SCK"],
    },
    {
      gpio: 32,
      roles: ["SPI MISO"],
    },
    {
      gpio: 33,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 44,
      roles: ["RGB LED"],
    },
  ],
  "BharatPi Node Wifi Module": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "BharatPi A7672S 4G Module": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "BharatPi LoRa Module": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "LilyGo T-ETH-Lite": [
    {
      gpio: 4,
      roles: ["SPI CS"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "LilyGo T-Watch-S3": [
    {
      gpio: 1,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 3,
      roles: ["SPI SCK"],
    },
    {
      gpio: 4,
      roles: ["SPI MISO"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["I2C SDA"],
    },
    {
      gpio: 11,
      roles: ["I2C SCL"],
    },
    {
      gpio: 41,
      roles: ["UART0 RX"],
    },
    {
      gpio: 42,
      roles: ["UART0 TX"],
    },
  ],
  "LilyGo T-Watch-Ultra": [
    {
      gpio: 2,
      roles: ["I2C SCL"],
    },
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 34,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 35,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "LilyGo-T-LoRa-Pager": [
    {
      gpio: 2,
      roles: ["I2C SCL"],
    },
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 34,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 35,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "SparkFun ESP32-C5 Thing Plus": [
    {
      gpio: 8,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
    {
      gpio: 24,
      roles: ["I2C SCL"],
    },
    {
      gpio: 25,
      roles: ["SPI CS"],
    },
    {
      gpio: 27,
      roles: ["RGB LED"],
    },
  ],
  "u-blox NINA-W10 series (ESP32)": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "u-blox NORA-W10 series (ESP32-S3)": [
    {
      gpio: 17,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  Nano32: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "LOLIN C3 Pico": [
    {
      gpio: 0,
      roles: ["SPI MISO"],
    },
    {
      gpio: 1,
      roles: ["SPI SCK"],
    },
    {
      gpio: 4,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 7,
      roles: ["RGB LED"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "ViraLink Gate32-0.1": [
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
  ],
  "ViraLink Gate32-1.1": [
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
  ],
  "WeMos WiFi&Bluetooth Battery": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  ESPea32: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "DFRobot Beetle ESP32-C6": [
    {
      gpio: 4,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 19,
      roles: ["I2C SDA"],
    },
    {
      gpio: 20,
      roles: ["I2C SCL"],
    },
    {
      gpio: 21,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 23,
      roles: ["SPI SCK"],
    },
  ],
  "DFRobot Edge101 IOT Controller": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 12,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["I2C SDA"],
    },
    {
      gpio: 23,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["UART1 TX"],
    },
    {
      gpio: 34,
      roles: ["UART1 RX"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
  ],
  "DFRobot Firebeetle 2 ESP32-C5": [
    {
      gpio: 9,
      roles: ["I2C SDA"],
    },
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 23,
      roles: ["SPI SCK"],
    },
    {
      gpio: 24,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 25,
      roles: ["SPI MISO"],
    },
    {
      gpio: 27,
      roles: ["SPI CS"],
    },
  ],
  "DFRobot FireBeetle 2 ESP32-P4": [
    {
      gpio: 3,
      roles: ["on-board LED"],
    },
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["I2C SCL"],
    },
    {
      gpio: 28,
      roles: ["SPI SCK"],
    },
    {
      gpio: 29,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 30,
      roles: ["SPI MISO"],
    },
    {
      gpio: 31,
      roles: ["SPI CS"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
  ],
  "DFRobot LoRaWAN ESP32-S3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 14,
      roles: ["display DC"],
    },
    {
      gpio: 15,
      roles: ["display reset"],
    },
    {
      gpio: 16,
      roles: ["display backlight"],
    },
    {
      gpio: 17,
      roles: ["SPI CS", "display CS"],
    },
    {
      gpio: 21,
      roles: ["on-board LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Adafruit Sparkle Motion (ESP32)": [
    {
      gpio: 2,
      roles: ["NeoPixel"],
    },
    {
      gpio: 4,
      roles: ["on-board LED"],
    },
    {
      gpio: 9,
      roles: ["SPI MOSI", "UART0 TX"],
    },
    {
      gpio: 10,
      roles: ["SPI MISO", "UART0 RX"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL"],
    },
    {
      gpio: 14,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI CS"],
    },
  ],
  "Adafruit Sparkle Motion Mini (ESP32)": [
    {
      gpio: 12,
      roles: ["on-board LED"],
    },
    {
      gpio: 14,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["NeoPixel"],
    },
    {
      gpio: 19,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 25,
      roles: ["SPI MOSI", "UART0 TX"],
    },
    {
      gpio: 26,
      roles: ["SPI MISO", "UART0 RX"],
    },
    {
      gpio: 27,
      roles: ["SPI SCK"],
    },
  ],
  "Adafruit Sparkle Motion Stick (ESP32)": [
    {
      gpio: 4,
      roles: ["on-board LED"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["NeoPixel"],
    },
    {
      gpio: 19,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 22,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MISO"],
    },
    {
      gpio: 25,
      roles: ["UART0 TX"],
    },
    {
      gpio: 26,
      roles: ["UART0 RX"],
    },
  ],
  "Nologo ESP32S3 Pico": [
    {
      gpio: 21,
      roles: ["on-board LED"],
    },
  ],
  "OLIMEX ESP32-S2-DevKit-Lipo": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "OLIMEX ESP32-S2-DevKit-Lipo-USB": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["RGB LED"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "OLIMEX ESP32-S3-DevKit-Lipo": [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["UART1 TX"],
    },
    {
      gpio: 18,
      roles: ["UART1 RX"],
    },
    {
      gpio: 38,
      roles: ["on-board LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["I2C SCL"],
    },
    {
      gpio: 48,
      roles: ["I2C SDA"],
    },
  ],
  "OLIMEX ESP32-C3-DevKit-Lipo": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA", "on-board LED"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "OLIMEX ESP32-C6-EVB": [
    {
      gpio: 4,
      roles: ["UART1 RX"],
    },
    {
      gpio: 5,
      roles: ["UART1 TX"],
    },
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 8,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 19,
      roles: ["SPI SCK"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["SPI CS"],
    },
  ],
  "OLIMEX ESP32-H2-DevKit-LiPo": [
    {
      gpio: 0,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["UART0 RX"],
    },
    {
      gpio: 24,
      roles: ["UART0 TX"],
    },
    {
      gpio: 25,
      roles: ["SPI MOSI"],
    },
  ],
  "OLIMEX ESP32-SBC-FABGL": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ThaiEasyElec's ESPino32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  M5Core: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  M5Fire: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  M5Core2: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 38,
      roles: ["SPI MISO"],
    },
  ],
  M5Tough: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 38,
      roles: ["SPI MISO"],
    },
  ],
  M5Station: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
  ],
  M5StickCPlus: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 36,
      roles: ["SPI MISO"],
    },
  ],
  M5StickCPlus2: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 36,
      roles: ["SPI MISO"],
    },
  ],
  M5Atom: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 19,
      roles: ["SPI CS"],
    },
    {
      gpio: 22,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MISO"],
    },
    {
      gpio: 26,
      roles: ["I2C SDA"],
    },
    {
      gpio: 32,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["SPI MOSI"],
    },
  ],
  M5AtomS3: [
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 17,
      roles: ["SPI SCK"],
    },
    {
      gpio: 21,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 35,
      roles: ["RGB LED"],
    },
    {
      gpio: 38,
      roles: ["I2C SDA"],
    },
    {
      gpio: 39,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  M5CoreS3: [
    {
      gpio: 11,
      roles: ["I2C SCL"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MISO"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  M5Tab5: [
    {
      gpio: 26,
      roles: ["SPI CS"],
    },
    {
      gpio: 32,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 53,
      roles: ["I2C SDA"],
    },
    {
      gpio: 54,
      roles: ["I2C SCL"],
    },
  ],
  M5TimerCAM: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  M5UnitCAM: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["on-board LED"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 17,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  M5UnitCAMS3: [
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  M5PoECAM: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 25,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
  ],
  M5Paper: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 25,
      roles: ["I2C SDA"],
    },
    {
      gpio: 32,
      roles: ["I2C SCL"],
    },
  ],
  M5CoreInk: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 9,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 32,
      roles: ["I2C SDA"],
    },
    {
      gpio: 33,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI MISO"],
    },
  ],
  M5StampC3: [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  M5StampS3: [
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  M5Capsule: [
    {
      gpio: 11,
      roles: ["SPI CS"],
    },
    {
      gpio: 12,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  M5Cardputer: [
    {
      gpio: 12,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
    {
      gpio: 40,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  M5Dial: [
    {
      gpio: 12,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
    {
      gpio: 40,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  M5DinMeter: [
    {
      gpio: 12,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["I2C SCL"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
    {
      gpio: 40,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  M5NanoC6: [
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 2,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["SPI CS"],
    },
    {
      gpio: 5,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 6,
      roles: ["SPI MISO"],
    },
    {
      gpio: 7,
      roles: ["on-board LED"],
    },
    {
      gpio: 8,
      roles: ["SPI SCK"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
  ],
  "ODROID ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["SPI CS"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Heltec WiFi LoRa 32(V4)": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 35,
      roles: ["on-board LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Wireless Stick(V3)": [
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 41,
      roles: ["I2C SDA"],
    },
    {
      gpio: 42,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Wireless Stick Lite(V3)": [
    {
      gpio: 2,
      roles: ["I2C SDA"],
    },
    {
      gpio: 3,
      roles: ["I2C SCL"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI", "on-board LED"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Wireless Shell (V3)": [
    {
      gpio: 2,
      roles: ["I2C SDA"],
    },
    {
      gpio: 3,
      roles: ["I2C SCL"],
    },
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 35,
      roles: ["on-board LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Capsule Sensor (V3)": [
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 41,
      roles: ["I2C SDA"],
    },
    {
      gpio: 42,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Wireless Paper": [
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 35,
      roles: ["on-board LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Wireless Tracker": [
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 41,
      roles: ["I2C SDA"],
    },
    {
      gpio: 42,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Wireless Tracker(V2)": [
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Wireless Mini Shell": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Heltec Wireless Stick Lite / Wireless Shell": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  "Heltec Wireless Bridge": [
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 25,
      roles: ["on-board LED"],
    },
    {
      gpio: 27,
      roles: ["SPI MOSI"],
    },
  ],
  "Heltec E-Ink Driver": [
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 35,
      roles: ["on-board LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Vision Master E290": [
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["I2C SCL"],
    },
    {
      gpio: 39,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Vision Master T190": [
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 2,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["display CS"],
    },
    {
      gpio: 40,
      roles: ["display reset"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Heltec Vision Master E213": [
    {
      gpio: 8,
      roles: ["SPI CS"],
    },
    {
      gpio: 9,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 11,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["I2C SCL"],
    },
    {
      gpio: 39,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "WiPy 3.0": [
    {
      gpio: 0,
      roles: ["RGB LED"],
    },
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["SPI CS"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL", "SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
  ],
  "WT32-ETH01 Ethernet Module": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 14,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["SPI MISO"],
    },
    {
      gpio: 32,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["I2C SDA"],
    },
  ],
  "Silicognition ManT1S": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 32,
      roles: ["I2C SCL"],
    },
    {
      gpio: 33,
      roles: ["I2C SDA"],
    },
  ],
  "Fri3d Badge 2024 (ESP32-S3-WROOM-1)": [
    {
      gpio: 4,
      roles: ["display DC"],
    },
    {
      gpio: 5,
      roles: ["display CS"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI SCK"],
    },
    {
      gpio: 8,
      roles: ["SPI MISO"],
    },
    {
      gpio: 9,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
    {
      gpio: 21,
      roles: ["on-board LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["display reset"],
    },
  ],
  "Piranha ESP-32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Metro ESP-32": [
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Senses's WEIZEN": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  WiFiduino32: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["I2C SDA", "SPI CS"],
    },
    {
      gpio: 16,
      roles: ["I2C SCL"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  WiFiduinoV2: [
    {
      gpio: 2,
      roles: ["SPI SCK"],
    },
    {
      gpio: 3,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  WiFiduino32S3: [
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  Denky: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "uPesy EDU ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "uPesy ESP32C3 Basic": [
    {
      gpio: 0,
      roles: ["battery sense"],
    },
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "uPesy ESP32C3 Mini": [
    {
      gpio: 0,
      roles: ["battery sense"],
    },
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "uPesy ESP32S3 Basic": [
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["UART1 TX"],
    },
    {
      gpio: 18,
      roles: ["UART1 RX"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "KB32-FT": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Deneyap Kart v2": [
    {
      gpio: 21,
      roles: ["I2C SCL"],
    },
    {
      gpio: 39,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 40,
      roles: ["SPI MISO"],
    },
    {
      gpio: 41,
      roles: ["SPI SCK"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["I2C SDA"],
    },
  ],
  "ATMegaZero ESP32-S2": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["SPI CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "DPU ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS", "display CS"],
    },
    {
      gpio: 18,
      roles: ["display backlight"],
    },
    {
      gpio: 23,
      roles: ["SD card CS"],
    },
    {
      gpio: 27,
      roles: ["display DC"],
    },
    {
      gpio: 32,
      roles: ["display reset"],
    },
  ],
  "Sonoff DUALR3": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  Watchy: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Department of Alchemy MiniMain ESP32-S2": [
    {
      gpio: 3,
      roles: ["I2C SDA"],
    },
    {
      gpio: 4,
      roles: ["I2C SCL"],
    },
    {
      gpio: 13,
      roles: ["on-board LED"],
    },
    {
      gpio: 33,
      roles: ["RGB LED"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 39,
      roles: ["UART0 TX"],
    },
    {
      gpio: 42,
      roles: ["SPI CS"],
    },
  ],
  "Bee Data Logger": [
    {
      gpio: 0,
      roles: ["BOOT button"],
    },
    {
      gpio: 36,
      roles: ["I2C SCL"],
    },
    {
      gpio: 37,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 45,
      roles: ["SPI MISO"],
    },
    {
      gpio: 46,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 47,
      roles: ["SPI CS"],
    },
    {
      gpio: 48,
      roles: ["SPI SCK"],
    },
  ],
  "Bee Motion S3": [
    {
      gpio: 0,
      roles: ["BOOT button"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 16,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["SPI SCK"],
    },
    {
      gpio: 36,
      roles: ["I2C SCL"],
    },
    {
      gpio: 37,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Bee Motion": [
    {
      gpio: 0,
      roles: ["BOOT button"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["SPI SCK"],
    },
    {
      gpio: 16,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["I2C SDA"],
    },
    {
      gpio: 37,
      roles: ["I2C SCL"],
    },
    {
      gpio: 38,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Bee Motion Mini": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["BOOT button", "I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Bee S3": [
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["I2C SCL"],
    },
    {
      gpio: 37,
      roles: ["I2C SDA"],
    },
    {
      gpio: 38,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "RedPill(+) ESP32-S3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 17,
      roles: ["SPI MISO"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ESP-C3-M1-I-Kit": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  VALTRACK_V4_VTS_ESP32_C3: [
    {
      gpio: 0,
      roles: ["UART1 TX"],
    },
    {
      gpio: 1,
      roles: ["UART1 RX"],
    },
    {
      gpio: 5,
      roles: ["I2C SDA"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 8,
      roles: ["SPI SCK"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI CS", "UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  VALTRACK_V4_MFW_ESP32_C3: [
    {
      gpio: 0,
      roles: ["UART1 TX"],
    },
    {
      gpio: 1,
      roles: ["UART1 RX"],
    },
    {
      gpio: 5,
      roles: ["I2C SDA"],
    },
    {
      gpio: 6,
      roles: ["I2C SCL"],
    },
    {
      gpio: 8,
      roles: ["SPI SCK"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI CS", "UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Crabik Slot ESP32-S3": [
    {
      gpio: 0,
      roles: ["BOOT button"],
    },
    {
      gpio: 13,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["I2C SCL"],
    },
    {
      gpio: 21,
      roles: ["on-board LED"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
  ],
  "Nebula S3": [
    {
      gpio: 12,
      roles: ["I2C SDA"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL"],
    },
    {
      gpio: 38,
      roles: ["SPI SCK"],
    },
    {
      gpio: 39,
      roles: ["SPI MISO"],
    },
    {
      gpio: 40,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 41,
      roles: ["SPI CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "4D Systems gen4-ESP32 Modules (ESP32-S3)": [
    {
      gpio: 17,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  IOXESP32: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  IOXESP32PS: [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS", "on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "IOXESP32-C6": [
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI SCK"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "ATD1.47-S3": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "ATD3.5-S3": [
    {
      gpio: 5,
      roles: ["on-board LED"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 18,
      roles: ["SD card CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "senseBox MCU Eye": [
    {
      gpio: 45,
      roles: ["RGB LED"],
    },
  ],
  "MakerGO ESP32 C3 SuperMini": [
    {
      gpio: 0,
      roles: ["UART1 TX"],
    },
    {
      gpio: 1,
      roles: ["UART1 RX"],
    },
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA", "on-board LED"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "MakerGO ESP32 C6 SuperMini": [
    {
      gpio: 4,
      roles: ["SPI CS"],
    },
    {
      gpio: 5,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 6,
      roles: ["SPI MISO"],
    },
    {
      gpio: 7,
      roles: ["SPI SCK"],
    },
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 15,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 19,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["I2C SDA"],
    },
  ],
  "ThingPulse ePulse Feather": [
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 18,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "ThingPulse ePulse Feather C6": [
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "Geekble Mini ESP32-C3": [
    {
      gpio: 4,
      roles: ["I2C SDA", "SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL", "SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["on-board LED"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Waveshare ESP32-P4-POE-ETH": [
    {
      gpio: 7,
      roles: ["I2C SDA"],
    },
    {
      gpio: 8,
      roles: ["I2C SCL"],
    },
    {
      gpio: 27,
      roles: ["SPI SCK"],
    },
    {
      gpio: 32,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 33,
      roles: ["SPI MISO"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
    {
      gpio: 46,
      roles: ["SPI CS"],
    },
  ],
  "Waveshare ESP32-S3-LCD-1.69": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Waveshare ESP32-C5-LCD-1.47": [
    {
      gpio: 4,
      roles: ["SD card CS"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
  ],
  "Waveshare ESP32-C5-Zero": [
    {
      gpio: 0,
      roles: ["I2C SDA"],
    },
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 27,
      roles: ["RGB LED"],
    },
  ],
  "WeAct Studio ESP32C3": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA", "on-board LED"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "AutosportLabs ESP-CAN-X2": [
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "DPTechnics Walter": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Elecrow CrowPanel 7.0P": [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 19,
      roles: ["I2C SDA"],
    },
    {
      gpio: 20,
      roles: ["I2C SCL"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 40,
      roles: ["UART0 RX"],
    },
  ],
  "CircuitART Zero S3": [
    {
      gpio: 5,
      roles: ["display DC"],
    },
    {
      gpio: 33,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["I2C SCL"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["SPI CS", "display CS"],
    },
    {
      gpio: 40,
      roles: ["UART1 TX", "display reset"],
    },
    {
      gpio: 42,
      roles: ["SD card CS"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 46,
      roles: ["on-board LED"],
    },
    {
      gpio: 47,
      roles: ["RGB LED"],
    },
  ],
  "Alfredo NoU3": [
    {
      gpio: 45,
      roles: ["on-board LED"],
    },
  ],
  "CodeCell C3": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Waveshare ESP32-S3-Touch-LCD-4.3C": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["SD/MMC CMD"],
    },
    {
      gpio: 12,
      roles: ["SD/MMC CLK"],
    },
    {
      gpio: 13,
      roles: ["SD/MMC D0"],
    },
  ],
  "Waveshare ESP32-S3-Touch-LCD-7C-BOX": [
    {
      gpio: 0,
      roles: ["BOOT button"],
    },
    {
      gpio: 11,
      roles: ["SD/MMC CMD", "SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SD/MMC CLK", "SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SD/MMC D0", "SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["I2C SDA"],
    },
    {
      gpio: 48,
      roles: ["I2C SCL"],
    },
  ],
  "Waveshare ESP32-S3-Touch-LCD-5B": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Waveshare ESP32-S3-Touch-LCD-4": [
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "cezerio dev ESP32C6": [
    {
      gpio: 3,
      roles: ["RGB LED"],
    },
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 14,
      roles: ["SPI CS"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 23,
      roles: ["SPI MISO"],
    },
  ],
  "cezerio mini dev ESP32C6": [
    {
      gpio: 7,
      roles: ["UART0 TX"],
    },
    {
      gpio: 14,
      roles: ["UART0 RX"],
    },
    {
      gpio: 17,
      roles: ["SPI CS"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["RGB LED"],
    },
    {
      gpio: 21,
      roles: ["SPI MISO"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "Waveshare ESP32-S3-Touch-LCD-1.46": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Waveshare ESP32-S3-LCD-1.46": [
    {
      gpio: 10,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Waveshare ESP32-S3-Touch-LCD-1.85-BOX": [
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 15,
      roles: ["I2C SDA"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Waveshare ESP32-S3-Relay-6CH": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 38,
      roles: ["RGB LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Waveshare ESP32-S3-Touch-AMOLED-1.91": [
    {
      gpio: 9,
      roles: ["SD card CS"],
    },
    {
      gpio: 34,
      roles: ["SPI CS"],
    },
    {
      gpio: 35,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 36,
      roles: ["SPI SCK"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 39,
      roles: ["I2C SCL"],
    },
    {
      gpio: 40,
      roles: ["I2C SDA"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Pcbcupid GLYPH C3": [
    {
      gpio: 1,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["SPI CS"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Pcbcupid GLYPH H2": [
    {
      gpio: 0,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["SPI CS"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 23,
      roles: ["UART0 RX"],
    },
    {
      gpio: 24,
      roles: ["UART0 TX"],
    },
    {
      gpio: 25,
      roles: ["SPI MISO"],
    },
  ],
  "Pcbcupid GLYPH C6": [
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 14,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 20,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 23,
      roles: ["SPI MISO"],
    },
  ],
  "Pcbcupid GLYPH S3": [
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["on-board LED"],
    },
    {
      gpio: 35,
      roles: ["SPI SCK"],
    },
    {
      gpio: 36,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Pcbcupid GLYPH S3 PSRAM": [
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["on-board LED"],
    },
    {
      gpio: 35,
      roles: ["SPI SCK"],
    },
    {
      gpio: 36,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 37,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Pcbcupid GLYPH C5": [
    {
      gpio: 0,
      roles: ["on-board LED"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 23,
      roles: ["SPI SCK"],
    },
    {
      gpio: 24,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 25,
      roles: ["SPI MISO"],
    },
  ],
  "Pcbcupid Cypher": [
    {
      gpio: 1,
      roles: ["on-board LED"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 14,
      roles: ["display reset"],
    },
    {
      gpio: 15,
      roles: ["display DC"],
    },
    {
      gpio: 16,
      roles: ["SPI CS"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
    {
      gpio: 35,
      roles: ["SD/MMC CMD"],
    },
    {
      gpio: 36,
      roles: ["SD/MMC CLK"],
    },
    {
      gpio: 37,
      roles: ["SD/MMC D0"],
    },
  ],
  "CYOBOT V2 ESP32S3": [
    {
      gpio: 2,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 17,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
    {
      gpio: 41,
      roles: ["SPI SCK"],
    },
    {
      gpio: 42,
      roles: ["SPI MISO"],
    },
  ],
  "RAKwireless RAK3112": [
    {
      gpio: 9,
      roles: ["I2C SDA"],
    },
    {
      gpio: 10,
      roles: ["SPI MISO"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI CS"],
    },
    {
      gpio: 13,
      roles: ["SPI SCK"],
    },
    {
      gpio: 40,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX", "UART1 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX", "UART1 RX"],
    },
  ],
  "kode dot": [
    {
      gpio: 5,
      roles: ["SD/MMC CMD"],
    },
    {
      gpio: 6,
      roles: ["SD/MMC CLK"],
    },
    {
      gpio: 7,
      roles: ["SD/MMC D0"],
    },
    {
      gpio: 9,
      roles: ["SPI CS"],
    },
    {
      gpio: 15,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 17,
      roles: ["SPI SCK"],
    },
    {
      gpio: 36,
      roles: ["I2C SDA"],
    },
    {
      gpio: 37,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  FED4: [
    {
      gpio: 0,
      roles: ["BOOT button"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["SPI CS"],
    },
  ],
  "FoBE Quill ESP32S3 Mesh": [
    {
      gpio: 8,
      roles: ["UART0 RX"],
    },
    {
      gpio: 9,
      roles: ["UART0 TX"],
    },
    {
      gpio: 11,
      roles: ["on-board LED"],
    },
    {
      gpio: 13,
      roles: ["I2C SCL"],
    },
    {
      gpio: 14,
      roles: ["I2C SDA"],
    },
    {
      gpio: 39,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 40,
      roles: ["SPI SCK"],
    },
    {
      gpio: 41,
      roles: ["SPI MISO"],
    },
    {
      gpio: 45,
      roles: ["SPI CS"],
    },
  ],
  "Twin AIoT Module": [
    {
      gpio: 1,
      roles: ["SPI CS"],
    },
    {
      gpio: 2,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 3,
      roles: ["SPI MISO"],
    },
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 35,
      roles: ["on-board LED"],
    },
    {
      gpio: 39,
      roles: ["I2C SDA", "UART0 TX"],
    },
    {
      gpio: 40,
      roles: ["I2C SCL", "UART0 RX"],
    },
  ],
  "4D Systems ESP32-P4 MIPI Displays": [
    {
      gpio: 2,
      roles: ["I2C SDA"],
    },
    {
      gpio: 3,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI SCK"],
    },
    {
      gpio: 14,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["SPI MISO"],
    },
    {
      gpio: 16,
      roles: ["SPI CS"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
  ],
  "4D Systems ESP32-P4 Round MIPI Displays": [
    {
      gpio: 2,
      roles: ["I2C SDA"],
    },
    {
      gpio: 3,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI SCK"],
    },
    {
      gpio: 14,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 15,
      roles: ["SPI MISO"],
    },
    {
      gpio: 16,
      roles: ["SPI CS"],
    },
    {
      gpio: 37,
      roles: ["UART0 TX"],
    },
    {
      gpio: 38,
      roles: ["UART0 RX"],
    },
  ],
  "Axiometa PIXIE M1": [
    {
      gpio: 1,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["I2C SDA"],
    },
    {
      gpio: 11,
      roles: ["I2C SCL"],
    },
    {
      gpio: 12,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
    {
      gpio: 21,
      roles: ["RGB LED"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Axiometa Genesis One": [
    {
      gpio: 1,
      roles: ["SPI CS"],
    },
    {
      gpio: 10,
      roles: ["battery sense"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI MISO"],
    },
    {
      gpio: 13,
      roles: ["SPI SCK"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 47,
      roles: ["I2C SDA"],
    },
    {
      gpio: 48,
      roles: ["I2C SCL"],
    },
  ],
  "Axiometa Genesis Mini": [
    {
      gpio: 10,
      roles: ["I2C SDA"],
    },
    {
      gpio: 11,
      roles: ["I2C SCL"],
    },
    {
      gpio: 12,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 14,
      roles: ["SPI SCK"],
    },
  ],
  "Soldered NULA DeepSleep ESP32S3": [
    {
      gpio: 2,
      roles: ["RGB LED"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Soldered NULA Dual ESP32C5": [
    {
      gpio: 2,
      roles: ["SPI MISO"],
    },
    {
      gpio: 4,
      roles: ["I2C SDA"],
    },
    {
      gpio: 5,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI SCK"],
    },
    {
      gpio: 7,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
  ],
  "Soldered NULA Mini ESP32C6": [
    {
      gpio: 2,
      roles: ["SPI CS"],
    },
    {
      gpio: 3,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 4,
      roles: ["SPI MISO"],
    },
    {
      gpio: 5,
      roles: ["SPI SCK"],
    },
    {
      gpio: 6,
      roles: ["I2C SDA"],
    },
    {
      gpio: 7,
      roles: ["I2C SCL"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 23,
      roles: ["on-board LED"],
    },
  ],
  "PandaByte x32 - ESP32": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 4,
      roles: ["on-board button"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 12,
      roles: ["on-board RGB LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Pandabyte xC3m - ESP32C3": [
    {
      gpio: 0,
      roles: ["I2C SCL"],
    },
    {
      gpio: 1,
      roles: ["I2C SDA"],
    },
    {
      gpio: 3,
      roles: ["SPI CS"],
    },
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO", "on-board LED"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI", "on-board RGB LED"],
    },
    {
      gpio: 7,
      roles: ["on-board button"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
  "Pandabyte xC5 - ESP32C5": [
    {
      gpio: 0,
      roles: ["I2C SDA"],
    },
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 6,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 9,
      roles: ["SPI MISO"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK", "on-board RGB LED"],
    },
    {
      gpio: 11,
      roles: ["UART0 TX"],
    },
    {
      gpio: 12,
      roles: ["UART0 RX"],
    },
    {
      gpio: 23,
      roles: ["on-board LED"],
    },
    {
      gpio: 24,
      roles: ["on-board button"],
    },
  ],
  "PandaByte xC6 - ESP32C6": [
    {
      gpio: 3,
      roles: ["on-board LED"],
    },
    {
      gpio: 16,
      roles: ["UART0 TX"],
    },
    {
      gpio: 17,
      roles: ["UART0 RX"],
    },
    {
      gpio: 18,
      roles: ["SPI CS"],
    },
    {
      gpio: 19,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 20,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["SPI SCK"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL", "on-board button"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA", "on-board RGB LED"],
    },
  ],
  "PandaByte xS3 - ESP32S3": [
    {
      gpio: 2,
      roles: ["on-board LED"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK", "on-board RGB LED"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["on-board button"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Root Maker": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["RGB LED"],
    },
  ],
  AMYboard: [
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 17,
      roles: ["I2C SDA"],
    },
    {
      gpio: 18,
      roles: ["I2C SCL"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
  ],
  "Xteink X4 eReader": [
    {
      gpio: 7,
      roles: ["SPI MISO"],
    },
    {
      gpio: 8,
      roles: ["SPI SCK"],
    },
    {
      gpio: 10,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SD card CS"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["SPI CS"],
    },
  ],
  "CANipulator V1 (ESP32-C6)": [
    {
      gpio: 4,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 8,
      roles: ["RGB LED"],
    },
    {
      gpio: 10,
      roles: ["SPI SCK"],
    },
    {
      gpio: 15,
      roles: ["SPI CS"],
    },
    {
      gpio: 20,
      roles: ["UART0 TX"],
    },
    {
      gpio: 21,
      roles: ["UART0 RX"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["I2C SDA"],
    },
  ],
  "CANipulator V2 (ESP32-C5)": [
    {
      gpio: 0,
      roles: ["I2C SDA"],
    },
    {
      gpio: 1,
      roles: ["I2C SCL"],
    },
    {
      gpio: 2,
      roles: ["RGB LED"],
    },
    {
      gpio: 11,
      roles: ["UART0 RX"],
    },
    {
      gpio: 12,
      roles: ["UART0 TX"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 24,
      roles: ["SPI SCK"],
    },
    {
      gpio: 25,
      roles: ["SPI MISO"],
    },
    {
      gpio: 27,
      roles: ["SPI CS"],
    },
  ],
  "ES Developer ES32Lab": [
    {
      gpio: 1,
      roles: ["UART0 TX"],
    },
    {
      gpio: 3,
      roles: ["UART0 RX"],
    },
    {
      gpio: 5,
      roles: ["SPI CS"],
    },
    {
      gpio: 17,
      roles: ["on-board LED"],
    },
    {
      gpio: 18,
      roles: ["SPI SCK"],
    },
    {
      gpio: 19,
      roles: ["SPI MISO"],
    },
    {
      gpio: 21,
      roles: ["I2C SDA"],
    },
    {
      gpio: 22,
      roles: ["I2C SCL"],
    },
    {
      gpio: 23,
      roles: ["SPI MOSI"],
    },
  ],
  "Raiden S0-1": [
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["SPI CS"],
    },
    {
      gpio: 11,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 12,
      roles: ["SPI SCK"],
    },
    {
      gpio: 13,
      roles: ["SPI MISO"],
    },
    {
      gpio: 43,
      roles: ["UART0 TX"],
    },
    {
      gpio: 44,
      roles: ["UART0 RX"],
    },
    {
      gpio: 48,
      roles: ["on-board LED"],
    },
  ],
  "Edge Dalton (ESP32C3)": [
    {
      gpio: 4,
      roles: ["SPI SCK"],
    },
    {
      gpio: 5,
      roles: ["SPI MISO"],
    },
    {
      gpio: 6,
      roles: ["SPI MOSI"],
    },
    {
      gpio: 7,
      roles: ["SPI CS"],
    },
    {
      gpio: 8,
      roles: ["I2C SDA"],
    },
    {
      gpio: 9,
      roles: ["I2C SCL"],
    },
    {
      gpio: 10,
      roles: ["on-board LED"],
    },
    {
      gpio: 20,
      roles: ["UART0 RX"],
    },
    {
      gpio: 21,
      roles: ["UART0 TX"],
    },
  ],
};
