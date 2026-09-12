// AUTO-GENERATED from Espressif's official product listings and module datasheets.
// Run `vp run catalog:check` to see what has changed upstream since.
// Do not hand-edit rows; add corrections to src/data/corrections.ts instead.

import type { ModulePinDetail } from "./types";

/** Loaded on demand: pad name, alternate functions and caveats per GPIO. */
export const modulePinDetail: Record<string, Record<string, ModulePinDetail>> = {
  "ESP32-S3-WROOM-1": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7, SUBSPICS1",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD, SUBSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4, SUBSPICSO",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5, SUBSPID",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6, SUBSPICLK",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7, SUBSPIQ",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS, SUBSPIWP",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "35": {
      pad: "IO35b",
      functions: "SPIIO6, GPIO35, FSPID, SUBSPID",
      caveat:
        "For modules with Octal SPI PSRAM, i.e., modules embedded with ESP32-S3R8 or ESP32-S3R16V, pins IO35, IO36, and IO37 are connected to the Octal SPI PSRAM and are not available for other uses.",
    },
    "36": {
      pad: "IO36b",
      functions: "SPIIO7, GPIO36, FSPICLK, SUBSPICLK",
      caveat:
        "For modules with Octal SPI PSRAM, i.e., modules embedded with ESP32-S3R8 or ESP32-S3R16V, pins IO35, IO36, and IO37 are connected to the Octal SPI PSRAM and are not available for other uses.",
    },
    "37": {
      pad: "IO37b",
      functions: "SPIDQS, GPIO37, FSPIQ, SUBSPIQ",
      caveat:
        "For modules with Octal SPI PSRAM, i.e., modules embedded with ESP32-S3R8 or ESP32-S3R16V, pins IO35, IO36, and IO37 are connected to the Octal SPI PSRAM and are not available for other uses.",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP, SUBSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3, SUBSPICS1",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
    "47": {
      pad: "IO47c",
      functions: "SPICLK_P_DIFF,GPIO47, SUBSPICLK_P_DIFF",
      caveat:
        "For modules embedded with ESP32-S3R16V, as the VDD_SPI voltage of the ESP32-S3R16V chip is set to 1.8 V, the working voltage for GPIO47 and GPIO48 is also 1.8 V, which is different from other GPIOs.",
    },
    "48": {
      pad: "IO48c",
      functions: "SPICLK_N_DIFF,GPIO48, SUBSPICLK_N_DIFF",
      caveat:
        "For modules embedded with ESP32-S3R16V, as the VDD_SPI voltage of the ESP32-S3R16V chip is set to 1.8 V, the working voltage for GPIO47 and GPIO48 is also 1.8 V, which is different from other GPIOs.",
    },
  },
  "ESP32-S3-WROOM-1U": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7, SUBSPICS1",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD, SUBSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4, SUBSPICSO",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5, SUBSPID",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6, SUBSPICLK",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7, SUBSPIQ",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS, SUBSPIWP",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "35": {
      pad: "IO35b",
      functions: "SPIIO6, GPIO35, FSPID, SUBSPID",
      caveat:
        "For modules with Octal SPI PSRAM, i.e., modules embedded with ESP32-S3R8 or ESP32-S3R16V, pins IO35, IO36, and IO37 are connected to the Octal SPI PSRAM and are not available for other uses.",
    },
    "36": {
      pad: "IO36b",
      functions: "SPIIO7, GPIO36, FSPICLK, SUBSPICLK",
      caveat:
        "For modules with Octal SPI PSRAM, i.e., modules embedded with ESP32-S3R8 or ESP32-S3R16V, pins IO35, IO36, and IO37 are connected to the Octal SPI PSRAM and are not available for other uses.",
    },
    "37": {
      pad: "IO37b",
      functions: "SPIDQS, GPIO37, FSPIQ, SUBSPIQ",
      caveat:
        "For modules with Octal SPI PSRAM, i.e., modules embedded with ESP32-S3R8 or ESP32-S3R16V, pins IO35, IO36, and IO37 are connected to the Octal SPI PSRAM and are not available for other uses.",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP, SUBSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3, SUBSPICS1",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
    "47": {
      pad: "IO47c",
      functions: "SPICLK_P_DIFF,GPIO47, SUBSPICLK_P_DIFF",
      caveat:
        "For modules embedded with ESP32-S3R16V, as the VDD_SPI voltage of the ESP32-S3R16V chip is set to 1.8 V, the working voltage for GPIO47 and GPIO48 is also 1.8 V, which is different from other GPIOs.",
    },
    "48": {
      pad: "IO48c",
      functions: "SPICLK_N_DIFF,GPIO48, SUBSPICLK_N_DIFF",
      caveat:
        "For modules embedded with ESP32-S3R16V, as the VDD_SPI voltage of the ESP32-S3R16V chip is set to 1.8 V, the working voltage for GPIO47 and GPIO48 is also 1.8 V, which is different from other GPIOs.",
    },
  },
  "ESP32-S3-WROOM-2": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7, SUBSPICS1",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD, SUBSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4, SUBSPICSO",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CH0, FSPID, FSPIIO5, SUBSPID",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6, SUBSPICLK",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7, SUBSPIQ",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS, SUBSPIWP",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP, SUBSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3, SUBSPICS1",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
    "47": {
      pad: "IO47",
      functions: "SPICLK_P_DIFF, GPIO47 SUBSPICLK_P_DIFF",
    },
    "48": {
      pad: "IO48",
      functions: "SPICLK_N_DIFF, GPIO48 SUBSPICLK_N_DIFF",
    },
  },
  "ESP32-S2-MINI-2": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICS0, FSPII04",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CH0, FSPID, FSPII05",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPII06",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPII07",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "26": {
      pad: "IO26",
      functions: "SPICS1, GPIO26",
    },
    "33": {
      pad: "IO33",
      functions: "SPII04, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPII05, GPIO34, FSPICS0",
    },
    "35": {
      pad: "IO35",
      functions: "SPII06, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPII07, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-MINI-2U": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICS0, FSPII04",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CH0, FSPID, FSPII05",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPII06",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPII07",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "26": {
      pad: "IO26",
      functions: "SPICS1, GPIO26",
    },
    "33": {
      pad: "IO33",
      functions: "SPII04, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPII05, GPIO34, FSPICS0",
    },
    "35": {
      pad: "IO35",
      functions: "SPII06, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPII07, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-SOLO-2": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, UITXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-SOLO-2U": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, UITXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-MINI-1": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CH0, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "26": {
      pad: "IO26",
      functions: "SPICS1, GPIO26",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-MINI-1U": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CH0, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "26": {
      pad: "IO26",
      functions: "SPICS1, GPIO26",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-SOLO": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, UITXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-SOLO-U": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, UITXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-WROVER": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "26": {
      pad: "IO26",
      functions: "SPICS1, GPIO26",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-WROVER-I": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "26": {
      pad: "IO26",
      functions: "SPICS1, GPIO26",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-WROOM": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "26": {
      pad: "IO26",
      functions: "SPICS1, GPIO26",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-S2-WROOM-I": {
    "0": {
      pad: "IO0",
      functions: "RTC_GPIO0, GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "RTC_GPIO1, GPIO1, TOUCH1, ADC1_CH0",
    },
    "2": {
      pad: "IO2",
      functions: "RTC_GPIO2, GPIO2, TOUCH2, ADC1_CH1",
    },
    "3": {
      pad: "IO3",
      functions: "RTC_GPIO3, GPIO3, TOUCH3, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "RTC_GPIO4, GPIO4, TOUCH4, ADC1_CH3",
    },
    "5": {
      pad: "IO5",
      functions: "RTC_GPIO5, GPIO5, TOUCH5, ADC1_CH4",
    },
    "6": {
      pad: "IO6",
      functions: "RTC_GPIO6, GPIO6, TOUCH6, ADC1_CH5",
    },
    "7": {
      pad: "IO7",
      functions: "RTC_GPIO7, GPIO7, TOUCH7, ADC1_CH6",
    },
    "8": {
      pad: "IO8",
      functions: "RTC_GPIO8, GPIO8, TOUCH8, ADC1_CH7",
    },
    "9": {
      pad: "IO9",
      functions: "RTC_GPIO9, GPIO9, TOUCH9, ADC1_CH8, FSPIHD",
    },
    "10": {
      pad: "IO10",
      functions: "RTC_GPIO10, GPIO10, TOUCH10, ADC1_CH9, FSPICSO, FSPIIO4",
    },
    "11": {
      pad: "IO11",
      functions: "RTC_GPIO11, GPIO11, TOUCH11, ADC2_CHO, FSPID, FSPIIO5",
    },
    "12": {
      pad: "IO12",
      functions: "RTC_GPIO12, GPIO12, TOUCH12, ADC2_CH1, FSPICLK, FSPIIO6",
    },
    "13": {
      pad: "IO13",
      functions: "RTC_GPIO13, GPIO13, TOUCH13, ADC2_CH2, FSPIQ, FSPIIO7",
    },
    "14": {
      pad: "IO14",
      functions: "RTC_GPIO14, GPIO14, TOUCH14, ADC2_CH3, FSPIWP, FSPIDQS",
    },
    "15": {
      pad: "IO15",
      functions: "RTC_GPIO15, GPIO15, UORTS, ADC2_CH4, XTAL_32K_P",
    },
    "16": {
      pad: "IO16",
      functions: "RTC_GPIO16, GPIO16, UOCTS, ADC2_CH5, XTAL_32K_N",
    },
    "17": {
      pad: "IO17",
      functions: "RTC_GPIO17, GPIO17, U1TXD, ADC2_CH6, DAC_1",
    },
    "18": {
      pad: "IO18",
      functions: "RTC_GPIO18, GPIO18, U1RXD, ADC2_CH7, DAC_2, CLK_OUT3",
    },
    "19": {
      pad: "IO19",
      functions: "RTC_GPIO19, GPIO19, U1RTS, ADC2_CH8, CLK_OUT2, USB_D-",
    },
    "20": {
      pad: "IO20",
      functions: "RTC_GPIO20, GPIO20, U1CTS, ADC2_CH9, CLK_OUT1, USB_D+",
    },
    "21": {
      pad: "IO21",
      functions: "RTC_GPIO21, GPIO21",
    },
    "26": {
      pad: "IO26",
      functions: "SPICS1, GPIO26",
    },
    "33": {
      pad: "IO33",
      functions: "SPIIO4, GPIO33, FSPIHD",
    },
    "34": {
      pad: "IO34",
      functions: "SPIIO5, GPIO34, FSPICSO",
    },
    "35": {
      pad: "IO35",
      functions: "SPIIO6, GPIO35, FSPID",
    },
    "36": {
      pad: "IO36",
      functions: "SPIIO7, GPIO36, FSPICLK",
    },
    "37": {
      pad: "IO37",
      functions: "SPIDQS, GPIO37, FSPIQ",
    },
    "38": {
      pad: "IO38",
      functions: "GPIO38, FSPIWP",
    },
    "39": {
      pad: "IO39",
      functions: "MTCK, GPIO39, CLK_OUT3",
    },
    "40": {
      pad: "IO40",
      functions: "MTDO, GPIO40, CLK_OUT2",
    },
    "41": {
      pad: "IO41",
      functions: "MTDI, GPIO41, CLK_OUT1",
    },
    "42": {
      pad: "IO42",
      functions: "MTMS, GPIO42",
    },
    "43": {
      pad: "TXDO",
      functions: "UOTXD, GPIO43, CLK_OUT1",
    },
    "44": {
      pad: "RXDO",
      functions: "UORXD, GPIO44, CLK_OUT2",
    },
    "45": {
      pad: "IO45",
      functions: "GPIO45",
    },
    "46": {
      pad: "IO46",
      functions: "GPIO46",
    },
  },
  "ESP32-C6-MINI-1": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, XTAL_32K_P, LP_GPIO0, LP_UART_DTRN, ADC1_CHO",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, XTAL_32K_N, LP_GPIO1, LP_UART_DSRN, ADC1_CH1",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, LP_GPIO2, LP_UART_RTSN, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, LP_GPIO3, LP_UART_CTSN, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "MTMS, GPIO4, LP_GPIO4, LP_UART_RXD, ADC1_CH4, FSPIHD",
    },
    "5": {
      pad: "IO5",
      functions: "MTDI, GPIO5, LP_GPIO5, LP_UART_TXD, ADC1_CH5, FSPIWP",
    },
    "6": {
      pad: "IO6",
      functions: "MTCK, GPIO6, LP_GPIO6, LP_I2C_SDA, ADC1_CH6, FSPICLK",
    },
    "7": {
      pad: "IO7",
      functions: "MTDO, GPIO7, LP_GPIO7, LP_I2C_SCL, FSPID",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "12": {
      pad: "IO12",
      functions: "GPIO12, USB_D-",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, USB_D+",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14",
    },
    "15": {
      pad: "IO15",
      functions: "GPIO15",
    },
    "16": {
      pad: "TXDO",
      functions: "UOTXD, GPIO16, FSPICS0",
    },
    "17": {
      pad: "RXDO",
      functions: "UORXD, GPIO17, FSPICS1",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, SDIO_CMD, FSPICS2",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, SDIO_CLK, FSPICS3",
    },
    "20": {
      pad: "IO20",
      functions: "GPIO20, SDIO_DATA0, FSPICS4",
    },
    "21": {
      pad: "IO21",
      functions: "GPIO21, SDIO_DATA1, FSPICS5",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, SDIO_DATA2",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23, SDIO_DATA3",
    },
  },
  "ESP32-C6-MINI-1U": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, XTAL_32K_P, LP_GPIO0, LP_UART_DTRN, ADC1_CHO",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, XTAL_32K_N, LP_GPIO1, LP_UART_DSRN, ADC1_CH1",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, LP_GPIO2, LP_UART_RTSN, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, LP_GPIO3, LP_UART_CTSN, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "MTMS, GPIO4, LP_GPIO4, LP_UART_RXD, ADC1_CH4, FSPIHD",
    },
    "5": {
      pad: "IO5",
      functions: "MTDI, GPIO5, LP_GPIO5, LP_UART_TXD, ADC1_CH5, FSPIWP",
    },
    "6": {
      pad: "IO6",
      functions: "MTCK, GPIO6, LP_GPIO6, LP_I2C_SDA, ADC1_CH6, FSPICLK",
    },
    "7": {
      pad: "IO7",
      functions: "MTDO, GPIO7, LP_GPIO7, LP_I2C_SCL, FSPID",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "12": {
      pad: "IO12",
      functions: "GPIO12, USB_D-",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, USB_D+",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14",
    },
    "15": {
      pad: "IO15",
      functions: "GPIO15",
    },
    "16": {
      pad: "TXDO",
      functions: "UOTXD, GPIO16, FSPICS0",
    },
    "17": {
      pad: "RXDO",
      functions: "UORXD, GPIO17, FSPICS1",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, SDIO_CMD, FSPICS2",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, SDIO_CLK, FSPICS3",
    },
    "20": {
      pad: "IO20",
      functions: "GPIO20, SDIO_DATA0, FSPICS4",
    },
    "21": {
      pad: "IO21",
      functions: "GPIO21, SDIO_DATA1, FSPICS5",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, SDIO_DATA2",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23, SDIO_DATA3",
    },
  },
  "ESP32-C6-WROOM-1": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, XTAL_32K_P, LP_GPIO0, LP_UART_DTRN, ADC1_CHO",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, XTAL_32K_N, LP_GPIO1, LP_UART_DSRN, ADC1_CH1",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, LP_GPIO2, LP_UART_RTSN, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, LP_GPIO3, LP_UART_CTSN, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "MTMS, GPIO4, LP_GPIO4, LP_UART_RXD, ADC1_CH4, FSPIHD",
    },
    "5": {
      pad: "IO5",
      functions: "MTDI, GPIO5, LP_GPIO5, LP_UART_TXD, ADC1_CH5, FSPIWP",
    },
    "6": {
      pad: "IO6",
      functions: "MTCK, GPIO6, LP_GPIO6, LP_I2C_SDA, ADC1_CH6, FSPICLK",
    },
    "7": {
      pad: "IO7",
      functions: "MTDO, GPIO7, LP_GPIO7, LP_I2C_SCL, FSPID",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10",
    },
    "11": {
      pad: "IO11",
      functions: "GPIO11",
    },
    "12": {
      pad: "IO12",
      functions: "GPIO12, USB_D-",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, USB_D+",
    },
    "15": {
      pad: "IO15",
      functions: "GPIO15",
    },
    "16": {
      pad: "TXDO",
      functions: "UOTXD, GPIO16, FSPICS0",
    },
    "17": {
      pad: "RXDO",
      functions: "UORXD, GPIO17, FSPICS1",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, SDIO_CMD, FSPICS2",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, SDIO_CLK, FSPICS3",
    },
    "20": {
      pad: "IO20",
      functions: "GPIO20, SDIO_DATA0, FSPICS4",
    },
    "21": {
      pad: "IO21",
      functions: "GPIO21, SDIO_DATA1, FSPICS5",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, SDIO_DATA2",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23, SDIO_DATA3",
    },
  },
  "ESP32-C6-WROOM-1U": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, XTAL_32K_P, LP_GPIO0, LP_UART_DTRN, ADC1_CHO",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, XTAL_32K_N, LP_GPIO1, LP_UART_DSRN, ADC1_CH1",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, LP_GPIO2, LP_UART_RTSN, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, LP_GPIO3, LP_UART_CTSN, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "MTMS, GPIO4, LP_GPIO4, LP_UART_RXD, ADC1_CH4, FSPIHD",
    },
    "5": {
      pad: "IO5",
      functions: "MTDI, GPIO5, LP_GPIO5, LP_UART_TXD, ADC1_CH5, FSPIWP",
    },
    "6": {
      pad: "IO6",
      functions: "MTCK, GPIO6, LP_GPIO6, LP_I2C_SDA, ADC1_CH6, FSPICLK",
    },
    "7": {
      pad: "IO7",
      functions: "MTDO, GPIO7, LP_GPIO7, LP_I2C_SCL, FSPID",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10",
    },
    "11": {
      pad: "IO11",
      functions: "GPIO11",
    },
    "12": {
      pad: "IO12",
      functions: "GPIO12, USB_D-",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, USB_D+",
    },
    "15": {
      pad: "IO15",
      functions: "GPIO15",
    },
    "16": {
      pad: "TXDO",
      functions: "UOTXD, GPIO16, FSPICS0",
    },
    "17": {
      pad: "RXDO",
      functions: "UORXD, GPIO17, FSPICS1",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, SDIO_CMD, FSPICS2",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, SDIO_CLK, FSPICS3",
    },
    "20": {
      pad: "IO20",
      functions: "GPIO20, SDIO_DATA0, FSPICS4",
    },
    "21": {
      pad: "IO21",
      functions: "GPIO21, SDIO_DATA1, FSPICS5",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, SDIO_DATA2",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23, SDIO_DATA3",
    },
  },
  "ESP32-C61-WROOM-1U": {
    "0": {
      pad: "IO0",
      functions: "XTAL_32K_P, GPIO0, LP_GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "XTAL_32K_N, GPIO1, LP_GPIO1, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, LP_GPIO2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "MTMS, GPIO3, LP_GPIO3, ADC1_CH1, FSPIHD",
    },
    "4": {
      pad: "IO4",
      functions: "MTDI, GPIO4, LP_GPIO4, ADC1_CH2, FSPIWP",
    },
    "5": {
      pad: "IO5",
      functions: "MTCK, GPIO5, LP_GPIO5, ADC1_CH3",
    },
    "6": {
      pad: "IO6",
      functions: "MTDO, GPIO6, LP_GPIO6, FSPICLK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8, ZCDO, FSPICSO",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9, ZCD1",
    },
    "10": {
      pad: "RXO",
      functions: "UORXD, GPIO10",
    },
    "11": {
      pad: "TXO",
      functions: "UOTXD, GPIO11",
    },
    "12": {
      pad: "IO12",
      functions: "USB_D-, GPIO12",
    },
    "13": {
      pad: "IO13",
      functions: "USB_D+, GPIO13",
    },
    "14": {
      pad: "NC/IO14",
      functions: "NC/GPIO14",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, SDIO_DATA2",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23, SDIO_DATA3",
    },
    "24": {
      pad: "IO24",
      functions: "GPIO24",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25, SDIO_CMD",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26, SDIO_CLK",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27, SDIO_DATA0",
    },
    "28": {
      pad: "IO28",
      functions: "GPIO28, SDIO_DATA1",
    },
    "29": {
      pad: "IO29",
      functions: "GPIO29",
    },
  },
  "ESP32-C61-MINI-1": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, XTAL_32K_P, LP_GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, XTAL_32K_N, LP_GPIO1, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, LP_GPIO2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "MTMS, GPIO3, LP_GPIO3, ADC1_CH1, FSPIHD",
    },
    "4": {
      pad: "IO4",
      functions: "MTDI, GPIO4, LP_GPIO4, ADC1_CH2, FSPIWP",
    },
    "5": {
      pad: "IO5",
      functions: "MTCK, GPIO5, LP_GPIO5, ADC1_CH3",
    },
    "6": {
      pad: "IO6",
      functions: "MTDO, GPIO6, LP_GPIO6, FSPICLK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8, FSPICS0, ZCD0",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9, ZCD1",
    },
    "10": {
      pad: "RX0",
      functions: "UORXD, GPIO10",
    },
    "11": {
      pad: "TX0",
      functions: "UOTXD, GPIO11",
    },
    "12": {
      pad: "IO12",
      functions: "GPIO12, USB_D-",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, USB_D+",
    },
    "14": {
      pad: "NC/IO14",
      functions: "SPICS1, GPIO14",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, SDIO_DATA2",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23, SDIO_DATA3",
    },
    "24": {
      pad: "IO24",
      functions: "GPIO24",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25, SDIO_CMD",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26, SDIO_CLK",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27, SDIO_DATA0",
    },
    "28": {
      pad: "IO28",
      functions: "GPIO28, SDIO_DATA1",
    },
    "29": {
      pad: "IO29",
      functions: "GPIO29",
    },
  },
  "ESP32-C61-MINI-1U": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, XTAL_32K_P, LP_GPIO0",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, XTAL_32K_N, LP_GPIO1, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, LP_GPIO2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "MTMS, GPIO3, LP_GPIO3, ADC1_CH1, FSPIHD",
    },
    "4": {
      pad: "IO4",
      functions: "MTDI, GPIO4, LP_GPIO4, ADC1_CH2, FSPIWP",
    },
    "5": {
      pad: "IO5",
      functions: "MTCK, GPIO5, LP_GPIO5, ADC1_CH3",
    },
    "6": {
      pad: "IO6",
      functions: "MTDO, GPIO6, LP_GPIO6, FSPICLK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8, FSPICS0, ZCD0",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9, ZCD1",
    },
    "10": {
      pad: "RX0",
      functions: "UORXD, GPIO10",
    },
    "11": {
      pad: "TX0",
      functions: "UOTXD, GPIO11",
    },
    "12": {
      pad: "IO12",
      functions: "GPIO12, USB_D-",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, USB_D+",
    },
    "14": {
      pad: "NC/IO14",
      functions: "SPICS1, GPIO14",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, SDIO_DATA2",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23, SDIO_DATA3",
    },
    "24": {
      pad: "IO24",
      functions: "GPIO24",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25, SDIO_CMD",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26, SDIO_CLK",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27, SDIO_DATA0",
    },
    "28": {
      pad: "IO28",
      functions: "GPIO28, SDIO_DATA1",
    },
    "29": {
      pad: "IO29",
      functions: "GPIO29",
    },
  },
  "ESP32-C5-WROOM-1": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, XTAL_32K_P, LP_GPIO0, LP_UART_DTRN",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, XTAL_32K_N, LP_GPIO1, LP_UART_DSRN, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "MTMS, GPIO2, LP_GPIO2, LP_UART_RTSN, LP_I2C_SDA, ADC1_CH1, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "MTDI, GPIO3, LP_GPIO3, LP_UART_CTSN, LP_I2C_SCL, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "MTCK, GPIO4, LP_GPIO4, LP_UART_RXD, ADC1_CH3, FSPIHD",
    },
    "5": {
      pad: "IO5",
      functions: "MTDO, GPIO5, LP_GPIO5, LP_UART_TXD, ADC1_CH4, FSPIWP",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, LP_GPIO6, ADC1_CH5, FSPICLK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, SDIO_DATA1",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8, PAD_COMPO, SDIO_DATA0",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9, PAD_COMP1, SDIO_CLK",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICS0, SDIO_CMD",
    },
    "11": {
      pad: "TXO",
      functions: "UOTXD, GPIO11",
    },
    "12": {
      pad: "RXO",
      functions: "UORXD, GPIO12",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, USB_D-, SDIO_DATA3",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14, USB_D+, SDIO_DATA2",
    },
    "15": {
      pad: "NC/IO15",
      functions: "SPICS1, GPIO15",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23",
    },
    "24": {
      pad: "IO24",
      functions: "GPIO24",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27",
    },
    "28": {
      pad: "IO28",
      functions: "GPIO28",
    },
  },
  "ESP32-C5-WROOM-1U": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, XTAL_32K_P, LP_GPIO0, LP_UART_DTRN",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, XTAL_32K_N, LP_GPIO1, LP_UART_DSRN, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "MTMS, GPIO2, LP_GPIO2, LP_UART_RTSN, LP_I2C_SDA, ADC1_CH1, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "MTDI, GPIO3, LP_GPIO3, LP_UART_CTSN, LP_I2C_SCL, ADC1_CH2",
    },
    "4": {
      pad: "IO4",
      functions: "MTCK, GPIO4, LP_GPIO4, LP_UART_RXD, ADC1_CH3, FSPIHD",
    },
    "5": {
      pad: "IO5",
      functions: "MTDO, GPIO5, LP_GPIO5, LP_UART_TXD, ADC1_CH4, FSPIWP",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, LP_GPIO6, ADC1_CH5, FSPICLK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, SDIO_DATA1",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8, PAD_COMPO, SDIO_DATA0",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9, PAD_COMP1, SDIO_CLK",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICS0, SDIO_CMD",
    },
    "11": {
      pad: "TXO",
      functions: "UOTXD, GPIO11",
    },
    "12": {
      pad: "RXO",
      functions: "UORXD, GPIO12",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, USB_D-, SDIO_DATA3",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14, USB_D+, SDIO_DATA2",
    },
    "15": {
      pad: "NC/IO15",
      functions: "SPICS1, GPIO15",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23",
    },
    "24": {
      pad: "IO24",
      functions: "GPIO24",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27",
    },
    "28": {
      pad: "IO28",
      functions: "GPIO28",
    },
  },
  "ESP32-C3-MINI-1": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CHO, XTAL_32K_P",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1, XTAL_32K_N",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, ADC2_CHO, FSPIWP, MTDI",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, USB_D-",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, USB_D+",
    },
    "20": {
      pad: "RXDO",
      functions: "GPIO20, UORXD",
    },
    "21": {
      pad: "TXDO",
      functions: "GPIO21, UOTXD",
    },
  },
  "ESP32-C3-MINI-1U": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CHO, XTAL_32K_P",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1, XTAL_32K_N",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, ADC2_CHO, FSPIWP, MTDI",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, USB_D-",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, USB_D+",
    },
    "20": {
      pad: "RXDO",
      functions: "GPIO20, UORXD",
    },
    "21": {
      pad: "TXDO",
      functions: "GPIO21, UOTXD",
    },
  },
  "ESP32-C3-WROOM-02": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CHO, XTAL_32K_P",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1, XTAL_32K_N",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, ADC2_CHO, FSPIWP, MTDI",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, USB_D-",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, USB_D+",
    },
    "20": {
      pad: "RXD",
      functions: "GPIO20, UORXD",
    },
    "21": {
      pad: "TXD",
      functions: "GPIO21, UOTXD",
    },
  },
  "ESP32-C3-WROOM-02U": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CHO, XTAL_32K_P",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1, XTAL_32K_N",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, ADC2_CHO, FSPIWP, MTDI",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, USB_D-",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, USB_D+",
    },
    "20": {
      pad: "RXD",
      functions: "GPIO20, UORXD",
    },
    "21": {
      pad: "TXD",
      functions: "GPIO21, UOTXD",
    },
  },
  "ESP8685-WROOM-01": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CHO, XTAL_32K_P",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1, XTAL_32K_N",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3, LED PWM",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS, LED PWM",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, ADC2_CHO, FSPIWP, MTDI, LED PWM",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK, LED PWM",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO, LED PWM",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO, LED PWM",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, USB_D-",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, USB_D+",
    },
    "20": {
      pad: "RXDO",
      functions: "GPIO20, UORXD",
    },
    "21": {
      pad: "TXDO",
      functions: "GPIO21, UOTXD",
    },
  },
  "ESP8685-WROOM-04": {
    "0": {
      pad: "IO0",
      functions: "GPIO0DADC1_CH0, XTAL_32K_P",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1, XTAL_32K_N",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3, LED PWM",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS, LED PWM",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, ADC2_CH0, FSPIWP, MTDI, LED PWM",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK, LED PWM",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO, LED PWM",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICS0, LED PWM",
    },
    "20": {
      pad: "RXD0",
      functions: "GPIO20, UORXD",
    },
    "21": {
      pad: "TXD0",
      functions: "GPIO21, UOTXD",
    },
  },
  "ESP8685-WROOM-06": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CH0, XTAL_32K_P",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1, XTAL_32K_N",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3, LED PWM",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS, LED PWM",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, ADC2_CH0, FSPIWP, MTDI, LED PWM",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK, LED PWM",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO, LED PWM",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, USB_D-",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, USB_D+",
    },
    "20": {
      pad: "RX0",
      functions: "GPIO20, UORXD",
    },
    "21": {
      pad: "TX0",
      functions: "GPIO21, UOTXD",
    },
  },
  "ESP8684-MINI-1": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CHO",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, FSPIWP, MTDI",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18",
    },
    "19": {
      pad: "RXDO",
      functions: "GPIO19, UORXD",
    },
    "20": {
      pad: "TXDO",
      functions: "GPIO20, UOTXD",
    },
  },
  "ESP8684-MINI-1U": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CHO",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, FSPIWP, MTDI",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18",
    },
    "19": {
      pad: "RXDO",
      functions: "GPIO19, UORXD",
    },
    "20": {
      pad: "TXDO",
      functions: "GPIO20, UOTXD",
    },
  },
  "ESP8684-WROOM-02C": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CHO",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, FSPIWP, MTDI",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8 This pin is internally pulled high.",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18",
    },
    "19": {
      pad: "RXD",
      functions: "GPIO19, UORXD",
    },
    "20": {
      pad: "TXD",
      functions: "GPIO20, UOTXD",
    },
  },
  "ESP8684-WROOM-02UC": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC1_CHO",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, FSPIWP, MTDI",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8 This pin is internally pulled high.",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICSO",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18",
    },
    "19": {
      pad: "RXD",
      functions: "GPIO19, UORXD",
    },
    "20": {
      pad: "TXD",
      functions: "GPIO20, UOTXD",
    },
  },
  "ESP8684-WROOM-04C": {
    "0": {
      pad: "IO0",
      functions: "GPIO0,ADC1_CH0",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, ADC1_CH1",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC1_CH2, FSPIQ",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, ADC1_CH3, LED PWM",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC1_CH4, FSPIHD, MTMS, LED PWM",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, FSPIWP, MTDI, LED PWM",
    },
    "6": {
      pad: "IO6",
      functions: "GPIO6, FSPICLK, MTCK, LED PWM",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, FSPID, MTDO, LED PWM",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, FSPICS0, LED PWM",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18",
    },
    "19": {
      pad: "RXDO",
      functions: "GPIO19, UORXD",
    },
    "20": {
      pad: "TXDO",
      functions: "GPIO20, UOTXD",
    },
  },
  "ESP32-H2-MINI-1": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, FSPIQ",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, FSPICSO, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, FSPIWP, ADC1_CH1, MTMS",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, FSPIHD, ADC1_CH2, MTDO",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, FSPICLK, ADC1_CH3, MTCK",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, FSPID, ADC1_CH4, MTDI",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, ZCD0",
    },
    "11": {
      pad: "IO11",
      functions: "GPIO11, ZCD1",
    },
    "12": {
      pad: "IO12",
      functions: "GPIO12",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, XTAL_32K_P",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14, XTAL_32K_N",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22",
    },
    "23": {
      pad: "RXDO",
      functions: "GPIO23, FSPICS1, UORXD",
    },
    "24": {
      pad: "TXDO",
      functions: "GPIO24, FSPICS2, UOTXD",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25, FSPICS3",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26, FSPICS4, USB_D-",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27, FSPICS5, USB_D+",
    },
  },
  "ESP32-H2-MINI-1U": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, FSPIQ",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, FSPICSO, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, FSPIWP, ADC1_CH1, MTMS",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, FSPIHD, ADC1_CH2, MTDO",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, FSPICLK, ADC1_CH3, MTCK",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, FSPID, ADC1_CH4, MTDI",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, ZCD0",
    },
    "11": {
      pad: "IO11",
      functions: "GPIO11, ZCD1",
    },
    "12": {
      pad: "IO12",
      functions: "GPIO12",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, XTAL_32K_P",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14, XTAL_32K_N",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22",
    },
    "23": {
      pad: "RXDO",
      functions: "GPIO23, FSPICS1, UORXD",
    },
    "24": {
      pad: "TXDO",
      functions: "GPIO24, FSPICS2, UOTXD",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25, FSPICS3",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26, FSPICS4, USB_D-",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27, FSPICS5, USB_D+",
    },
  },
  "ESP32-H2-WROOM-02C": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, FSPIQ",
    },
    "1": {
      pad: "IO1",
      functions: "GPIO1, FSPICSO, ADC1_CHO",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, FSPIWP, ADC1_CH1, MTMS",
    },
    "3": {
      pad: "IO3",
      functions: "GPIO3, FSPIHD, ADC1_CH2, MTDO",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, FSPICLK, ADC1_CH3, MTCK",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, FSPID, ADC1_CH4, MTDI",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8",
    },
    "9": {
      pad: "IO9",
      functions: "GPIO9",
    },
    "10": {
      pad: "IO10",
      functions: "GPIO10, ZCD0",
    },
    "11": {
      pad: "IO11",
      functions: "GPIO11, ZCD1",
    },
    "12": {
      pad: "IO12",
      functions: "GPIO12",
    },
    "13": {
      pad: "IO13",
      functions: "GPIO13, XTAL_32K_P",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14, XTAL_32K_N",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22",
    },
    "23": {
      pad: "RXDO",
      functions: "GPIO23, FSPICS1, UORXD",
    },
    "24": {
      pad: "TXDO",
      functions: "GPIO24, FSPICS2, UOTXD",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25, FSPICS3",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26, FSPICS4, USB_D-",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27, FSPICS5, USB_D+",
    },
  },
  "ESP32-PICO-MINI-02": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC2_CH1, TOUCH1, RTC_GPIO11, CLK_OUT1, EMAC_TX_CLK",
    },
    "1": {
      pad: "TXDO",
      functions: "GPIO1, UOTXD, CLK_OUT3, EMAC_RXD2",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC2_CH2, TOUCH2, RTC_GPIO12, HSPIWP, HS2_DATAO, SD_DATAO",
    },
    "3": {
      pad: "RXDO",
      functions: "GPIO3, UORXD, CLK_OUT2",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC2_CHO, TOUCHO, RTC_GPIO10, HSPIHD, HS2_DATA1, SD_DATA1, EMAC_TX_ER",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, VSPICSO, HS1_DATA6, EMAC_RX_CLK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, HS1_DATAO, U2RTS, SD_DATAO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8, HS1_DATA1, U2CTS, SD_DATA1",
    },
    "12": {
      pad: "IO12",
      functions:
        "GPIO12, ADC2_CH5, TOUCH5, RTC_GPIO15, MTDI, HSPIQ, HS2_DATA2, SD_DATA2, EMAC_TXD3",
    },
    "13": {
      pad: "IO13",
      functions:
        "GPIO13, ADC2_CH4, TOUCH4, RTC_GPIO14, MTCK, HSPID, HS2_DATA3, SD_DATA3, EMAC_RX_ER",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14, ADC2_CH6, TOUCH6, RTC_GPIO16, MTMS, HSPICLK, HS2_CLK, SD_CLK, EMAC_TXD2",
    },
    "15": {
      pad: "IO15",
      functions: "GPIO15, ADC2_CH3, TOUCH3, RTC_GPIO13, MTDO, HSPICSO, HS2_CMD, SD_CMD, EMAC_RXD3",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, VSPIQ, UOCTS, EMAC_TXDO",
    },
    "20": {
      pad: "IO20",
      functions: "GPIO20",
    },
    "21": {
      pad: "IO21",
      functions: "GPIO21, VSPIHD, EMAC_TX_EN",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, VSPIWP, UORTS, EMAC_TXD1",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25, DAC_1, ADC2_CH8, RTC_GPIO6, EMAC_RXDO",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26, DAC_2, ADC2_CH9, RTC_GPIO7, EMAC_RXD1",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27, ADC2_CH7, TOUCH7, RTC_GPIO17, EMAC_RX_DV",
    },
    "32": {
      pad: "IO32",
      functions:
        "GPIO32, XTAL_32K_P (32.768 kHz crystal oscillator input), ADC1_CH4, TOUCH9, RTC_GPIO9",
    },
    "33": {
      pad: "IO33",
      functions:
        "GPIO33, XTAL_32K_N (32.768 kHz crystal oscillator output), ADC1_CH5, TOUCH8, RTC_GPIO8",
    },
    "34": {
      pad: "I34",
      functions: "GPIO34, ADC1_CH6, RTC_GPIO4",
    },
    "35": {
      pad: "I35",
      functions: "GPIO35, ADC1_CH7, RTC_GPIO5",
    },
    "36": {
      pad: "I36",
      functions: "GPIO36, ADC1_CHO, RTC_GPIO0",
    },
    "37": {
      pad: "I37",
      functions: "GPIO37, ADC1_CH1, RTC_GPIO1",
    },
    "38": {
      pad: "I38",
      functions: "GPIO38, ADC1_CH2, RTC_GPIO2",
    },
    "39": {
      pad: "I39",
      functions: "GPIO39, ADC1_CH3, RTC_GPIO3",
    },
  },
  "ESP32-PICO-MINI-02U": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC2_CH1, TOUCH1, RTC_GPIO11, CLK_OUT1, EMAC_TX_CLK",
    },
    "1": {
      pad: "TXDO",
      functions: "GPIO1, UOTXD, CLK_OUT3, EMAC_RXD2",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC2_CH2, TOUCH2, RTC_GPIO12, HSPIWP, HS2_DATAO, SD_DATAO",
    },
    "3": {
      pad: "RXDO",
      functions: "GPIO3, UORXD, CLK_OUT2",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC2_CHO, TOUCHO, RTC_GPIO10, HSPIHD, HS2_DATA1, SD_DATA1, EMAC_TX_ER",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, VSPICSO, HS1_DATA6, EMAC_RX_CLK",
    },
    "7": {
      pad: "IO7",
      functions: "GPIO7, HS1_DATAO, U2RTS, SD_DATAO",
    },
    "8": {
      pad: "IO8",
      functions: "GPIO8, HS1_DATA1, U2CTS, SD_DATA1",
    },
    "12": {
      pad: "IO12",
      functions:
        "GPIO12, ADC2_CH5, TOUCH5, RTC_GPIO15, MTDI, HSPIQ, HS2_DATA2, SD_DATA2, EMAC_TXD3",
    },
    "13": {
      pad: "IO13",
      functions:
        "GPIO13, ADC2_CH4, TOUCH4, RTC_GPIO14, MTCK, HSPID, HS2_DATA3, SD_DATA3, EMAC_RX_ER",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14, ADC2_CH6, TOUCH6, RTC_GPIO16, MTMS, HSPICLK, HS2_CLK, SD_CLK, EMAC_TXD2",
    },
    "15": {
      pad: "IO15",
      functions: "GPIO15, ADC2_CH3, TOUCH3, RTC_GPIO13, MTDO, HSPICSO, HS2_CMD, SD_CMD, EMAC_RXD3",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, VSPIQ, UOCTS, EMAC_TXDO",
    },
    "20": {
      pad: "IO20",
      functions: "GPIO20",
    },
    "21": {
      pad: "IO21",
      functions: "GPIO21, VSPIHD, EMAC_TX_EN",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, VSPIWP, UORTS, EMAC_TXD1",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25, DAC_1, ADC2_CH8, RTC_GPIO6, EMAC_RXDO",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26, DAC_2, ADC2_CH9, RTC_GPIO7, EMAC_RXD1",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27, ADC2_CH7, TOUCH7, RTC_GPIO17, EMAC_RX_DV",
    },
    "32": {
      pad: "IO32",
      functions:
        "GPIO32, XTAL_32K_P (32.768 kHz crystal oscillator input), ADC1_CH4, TOUCH9, RTC_GPIO9",
    },
    "33": {
      pad: "IO33",
      functions:
        "GPIO33, XTAL_32K_N (32.768 kHz crystal oscillator output), ADC1_CH5, TOUCH8, RTC_GPIO8",
    },
    "34": {
      pad: "I34",
      functions: "GPIO34, ADC1_CH6, RTC_GPIO4",
    },
    "35": {
      pad: "I35",
      functions: "GPIO35, ADC1_CH7, RTC_GPIO5",
    },
    "36": {
      pad: "I36",
      functions: "GPIO36, ADC1_CHO, RTC_GPIO0",
    },
    "37": {
      pad: "I37",
      functions: "GPIO37, ADC1_CH1, RTC_GPIO1",
    },
    "38": {
      pad: "I38",
      functions: "GPIO38, ADC1_CH2, RTC_GPIO2",
    },
    "39": {
      pad: "I39",
      functions: "GPIO39, ADC1_CH3, RTC_GPIO3",
    },
  },
  "ESP32-WROOM-32": {
    "0": {
      pad: "IO0",
      functions: "GPIO0, ADC2_CH1, TOUCH1, RTC_GPIO11, CLK_OUT1, EMAC_TX_CLK",
    },
    "1": {
      pad: "TXDO",
      functions: "GPIO1, UOTXD, CLK_OUT3, EMAC_RXD2",
    },
    "2": {
      pad: "IO2",
      functions: "GPIO2, ADC2_CH2, TOUCH2, RTC_GPIO12, HSPIWP, HS2_DATA0, SD_DATA0",
    },
    "3": {
      pad: "RXDO",
      functions: "GPIO3, UORXD, CLK_OUT2",
    },
    "4": {
      pad: "IO4",
      functions: "GPIO4, ADC2_CH0, TOUCH0, RTC_GPIO10, HSPIHD, HS2_DATA1, SD_DATA1, EMAC_TX_ER",
    },
    "5": {
      pad: "IO5",
      functions: "GPIO5, VSPICSO, HS1_DATA6, EMAC_RX_CLK",
    },
    "6": {
      pad: "SCK/CLK",
      functions: "GPIO6, SD_CLK, SPICLK, HS1_CLK, U1CTS",
    },
    "7": {
      pad: "SDO/SDO",
      functions: "GPIO7, SD_DATA0, SPIQ, HS1_DATA0, U2RTS",
    },
    "8": {
      pad: "SDI/SD1",
      functions: "GPIO8, SD_DATA1, SPID, HS1_DATA1, U2CTS",
    },
    "9": {
      pad: "SHD/SD2",
      functions: "GPIO9, SD_DATA2, SPIHD, HS1_DATA2, U1RXD",
    },
    "10": {
      pad: "SWP/SD3",
      functions: "GPIO10, SD_DATA3, SPIWP, HS1_DATA3, U1TXD",
    },
    "11": {
      pad: "SCS/CMD",
      functions: "GPIO11, SD_CMD, SPICSO, HS1_CMD, U1RTS",
    },
    "12": {
      pad: "IO12",
      functions:
        "GPIO12, ADC2_CH5, TOUCH5, RTC_GPIO15, MTDI, HSPIQ, HS2_DATA2, SD_DATA2, EMAC_TXD3",
    },
    "13": {
      pad: "IO13",
      functions:
        "GPIO13, ADC2_CH4, TOUCH4, RTC_GPIO14, MTCK, HSPID, HS2_DATA3, SD_DATA3, EMAC_RX_ER",
    },
    "14": {
      pad: "IO14",
      functions: "GPIO14, ADC2_CH6, TOUCH6, RTC_GPIO16, MTMS, HSPICLK, HS2_CLK, SD_CLK, EMAC_TXD2",
    },
    "15": {
      pad: "IO15",
      functions: "GPIO15, ADC2_CH3, TOUCH3, MTDO, HSPICSO, RTC_GPIO13, HS2_CMD, SD_CMD, EMAC_RXD3",
    },
    "16": {
      pad: "IO16",
      functions: "GPIO16, HS1_DATA4, U2RXD, EMAC_CLK_OUT",
    },
    "17": {
      pad: "IO17",
      functions: "GPIO17, HS1_DATA5, U2TXD, EMAC_CLK_OUT_180",
    },
    "18": {
      pad: "IO18",
      functions: "GPIO18, VSPICLK, HS1_DATA7",
    },
    "19": {
      pad: "IO19",
      functions: "GPIO19, VSPIQ, UOCTS, EMAC_TXDO",
    },
    "21": {
      pad: "IO21",
      functions: "GPIO21, VSPIHD, EMAC_TX_EN",
    },
    "22": {
      pad: "IO22",
      functions: "GPIO22, VSPIWP, UARTS, EMAC_TXD1",
    },
    "23": {
      pad: "IO23",
      functions: "GPIO23, VSPID, HS1_STROBE",
    },
    "25": {
      pad: "IO25",
      functions: "GPIO25, DAC_1, ADC2_CH8, RTC_GPIO6, EMAC_RXDO",
    },
    "26": {
      pad: "IO26",
      functions: "GPIO26, DAC_2, ADC2_CH9, RTC_GPIO7, EMAC_RXD1",
    },
    "27": {
      pad: "IO27",
      functions: "GPIO27, ADC2_CH7, TOUCH7, RTC_GPIO17, EMAC_RX_DV",
    },
    "32": {
      pad: "IO32",
      functions:
        "GPIO32, XTAL_32K_P (32.768 kHz crystal oscillator input), ADC1_CH4, TOUCH9, RTC_GPIO9",
    },
    "33": {
      pad: "IO33",
      functions:
        "GPIO33, XTAL_32K_N (32.768 kHz crystal oscillator output), ADC1_CH5, TOUCH8, RTC_GPIO8",
    },
    "34": {
      pad: "IO34",
      functions: "GPIO34, ADC1_CH6, RTC_GPIO4",
    },
    "35": {
      pad: "IO35",
      functions: "GPIO35, ADC1_CH7, RTC_GPIO5",
    },
    "36": {
      pad: "SENSOR_VP",
      functions: "GPIO36, ADC1_CH0, RTC_GPIO0",
    },
    "39": {
      pad: "SENSOR_VN",
      functions: "GPIO39, ADC1_CH3, RTC_GPIO3",
    },
  },
};
