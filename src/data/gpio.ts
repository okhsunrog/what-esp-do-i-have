// AUTO-GENERATED from ESP-IDF: the per-target GPIO tables in
// docs/en/api-reference/peripherals/gpio/<target>.inc, and the SOC_GPIO_* masks
// in components/soc/<target>/include/soc/soc_caps.h.
// Run `vp run catalog:check` to see what has changed upstream since.

import type { SocGpioMap } from "./types";

export const socGpioMaps: SocGpioMap[] = [
  {
    family: "ESP32",
    target: "esp32",
    pinCount: 40,
    pins: [
      {
        gpio: 0,
        analog: "ADC2_CH1",
        lowPower: "RTC_GPIO11",
      },
      {
        gpio: 1,
        restriction: "TXD",
      },
      {
        gpio: 2,
        analog: "ADC2_CH2",
        lowPower: "RTC_GPIO12",
      },
      {
        gpio: 3,
        restriction: "RXD",
      },
      {
        gpio: 4,
        analog: "ADC2_CH0",
        lowPower: "RTC_GPIO10",
      },
      {
        gpio: 5,
      },
      {
        gpio: 6,
        restriction: "SPI0/1",
      },
      {
        gpio: 7,
        restriction: "SPI0/1",
      },
      {
        gpio: 8,
        restriction: "SPI0/1",
      },
      {
        gpio: 9,
        restriction: "SPI0/1",
      },
      {
        gpio: 10,
        restriction: "SPI0/1",
      },
      {
        gpio: 11,
        restriction: "SPI0/1",
      },
      {
        gpio: 12,
        analog: "ADC2_CH5",
        lowPower: "RTC_GPIO15",
        restriction: "JTAG",
      },
      {
        gpio: 13,
        analog: "ADC2_CH4",
        lowPower: "RTC_GPIO14",
        restriction: "JTAG",
      },
      {
        gpio: 14,
        analog: "ADC2_CH6",
        lowPower: "RTC_GPIO16",
        restriction: "JTAG",
      },
      {
        gpio: 15,
        analog: "ADC2_CH3",
        lowPower: "RTC_GPIO13",
        restriction: "JTAG",
      },
      {
        gpio: 16,
        restriction: "SPI0/1",
      },
      {
        gpio: 17,
        restriction: "SPI0/1",
      },
      {
        gpio: 18,
      },
      {
        gpio: 19,
      },
      {
        gpio: 20,
        packageDependent: true,
      },
      {
        gpio: 21,
      },
      {
        gpio: 22,
      },
      {
        gpio: 23,
      },
      {
        gpio: 25,
        analog: "ADC2_CH8, DAC0",
        lowPower: "RTC_GPIO6",
      },
      {
        gpio: 26,
        analog: "ADC2_CH9, DAC1",
        lowPower: "RTC_GPIO7",
      },
      {
        gpio: 27,
        analog: "ADC2_CH7",
        lowPower: "RTC_GPIO17",
      },
      {
        gpio: 32,
        analog: "ADC1_CH4",
        lowPower: "RTC_GPIO9",
      },
      {
        gpio: 33,
        analog: "ADC1_CH5",
        lowPower: "RTC_GPIO8",
      },
      {
        gpio: 34,
        analog: "ADC1_CH6",
        lowPower: "RTC_GPIO4",
        restriction: "GPI",
        inputOnly: true,
      },
      {
        gpio: 35,
        analog: "ADC1_CH7",
        lowPower: "RTC_GPIO5",
        restriction: "GPI",
        inputOnly: true,
      },
      {
        gpio: 36,
        analog: "ADC1_CH0",
        lowPower: "RTC_GPIO0",
        restriction: "GPI",
        inputOnly: true,
      },
      {
        gpio: 37,
        analog: "ADC1_CH1",
        lowPower: "RTC_GPIO1",
        restriction: "GPI",
        inputOnly: true,
      },
      {
        gpio: 38,
        analog: "ADC1_CH2",
        lowPower: "RTC_GPIO2",
        restriction: "GPI",
        inputOnly: true,
      },
      {
        gpio: 39,
        analog: "ADC1_CH3",
        lowPower: "RTC_GPIO3",
        restriction: "GPI",
        inputOnly: true,
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO6-11 and GPIO16-17 are usually connected to the SPI flash and PSRAM integrated on the module and therefore should not be used for other purposes.",
      },
      {
        tag: "JTAG",
        text: "GPIO12-15 are usually used for inline debug.",
      },
      {
        tag: "GPI",
        text: "GPIO34-39 can only be set as input mode and do not have software-enabled pullup or pulldown functions.",
      },
      {
        tag: "ADC2",
        text: "ADC2 pins cannot be used when Wi-Fi is used. So, if you are having trouble getting the value from an ADC2 GPIO while using Wi-Fi, you may consider using an ADC1 GPIO instead, which should solve your problem. For more details, please refer to :ref:Hardware Limitations of ADC Continuous Mode <hardware_limitations_adc_continuous> and :ref:Hardware Limitations of ADC Oneshot Mode <hardware_limitations_adc_oneshot>.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32.inc",
  },
  {
    family: "ESP32-C2",
    target: "esp32c2",
    pinCount: 21,
    pins: [
      {
        gpio: 0,
        analog: "ADC1_CH0",
        lowPower: "RTC",
      },
      {
        gpio: 1,
        analog: "ADC1_CH1",
        lowPower: "RTC",
      },
      {
        gpio: 2,
        analog: "ADC1_CH2",
        lowPower: "RTC",
      },
      {
        gpio: 3,
        analog: "ADC1_CH3",
        lowPower: "RTC",
      },
      {
        gpio: 4,
        analog: "ADC1_CH4",
        lowPower: "RTC",
      },
      {
        gpio: 5,
        lowPower: "RTC",
      },
      {
        gpio: 6,
      },
      {
        gpio: 7,
      },
      {
        gpio: 8,
      },
      {
        gpio: 9,
      },
      {
        gpio: 10,
      },
      {
        gpio: 11,
      },
      {
        gpio: 12,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 13,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 14,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 15,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 16,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 17,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 18,
      },
      {
        gpio: 19,
      },
      {
        gpio: 20,
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO12-17 are usually used for SPI flash and not recommended for other uses.",
      },
      {
        tag: "RTC",
        text: "GPIO0-5 can be used to wake up the chip from Deep-sleep mode. Other GPIOs can only wake up the chip from Light-sleep mode. For more information, please refer to Section :ref:Wakeup Sources<api-reference-wakeup-source>.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32c2.inc",
  },
  {
    family: "ESP32-C3",
    target: "esp32c3",
    pinCount: 22,
    pins: [
      {
        gpio: 0,
        analog: "ADC1_CH0",
        lowPower: "RTC",
      },
      {
        gpio: 1,
        analog: "ADC1_CH1",
        lowPower: "RTC",
      },
      {
        gpio: 2,
        analog: "ADC1_CH2",
        lowPower: "RTC",
      },
      {
        gpio: 3,
        analog: "ADC1_CH3",
        lowPower: "RTC",
      },
      {
        gpio: 4,
        analog: "ADC1_CH4",
        lowPower: "RTC",
      },
      {
        gpio: 5,
        analog: "ADC2_CH0",
        lowPower: "RTC",
      },
      {
        gpio: 6,
      },
      {
        gpio: 7,
      },
      {
        gpio: 8,
      },
      {
        gpio: 9,
      },
      {
        gpio: 10,
      },
      {
        gpio: 11,
      },
      {
        gpio: 12,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 13,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 14,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 15,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 16,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 17,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 18,
        lowPower: "USB-JTAG",
        restriction: "USB-JTAG",
        restrictionFromLegend: true,
      },
      {
        gpio: 19,
        lowPower: "USB-JTAG",
        restriction: "USB-JTAG",
        restrictionFromLegend: true,
      },
      {
        gpio: 20,
      },
      {
        gpio: 21,
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO12 ~ GPIO17 are usually used for SPI flash and are not recommended for other uses.",
      },
      {
        tag: "USB-JTAG",
        text: "GPIO18 and GPIO19 are used by USB-JTAG by default. If they are reconfigured to operate as normal GPIOs, USB-JTAG functionality will be disabled.",
      },
      {
        tag: "RTC",
        text: "GPIO0 ~ GPIO5 can be used to wake up the chip from Deep-sleep mode. Other GPIOs can only wake up the chip from Light-sleep mode. For more information, please refer to Section :ref:Wakeup Sources<api-reference-wakeup-source>.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32c3.inc",
  },
  {
    family: "ESP32-C5",
    target: "esp32c5",
    pinCount: 29,
    pins: [
      {
        gpio: 0,
        lowPower: "LP_GPIO0",
      },
      {
        gpio: 1,
        analog: "ADC1_CH0",
        lowPower: "LP_GPIO1",
      },
      {
        gpio: 2,
        analog: "ADC1_CH1",
        lowPower: "LP_GPIO2",
      },
      {
        gpio: 3,
        analog: "ADC1_CH2",
        lowPower: "LP_GPIO3",
      },
      {
        gpio: 4,
        analog: "ADC1_CH3",
        lowPower: "LP_GPIO4",
      },
      {
        gpio: 5,
        analog: "ADC1_CH4",
        lowPower: "LP_GPIO5",
      },
      {
        gpio: 6,
        analog: "ADC1_CH5",
        lowPower: "LP_GPIO6",
      },
      {
        gpio: 7,
      },
      {
        gpio: 8,
      },
      {
        gpio: 9,
      },
      {
        gpio: 10,
      },
      {
        gpio: 11,
      },
      {
        gpio: 12,
      },
      {
        gpio: 13,
        restriction: "USB-JTAG",
      },
      {
        gpio: 14,
        restriction: "USB-JTAG",
      },
      {
        gpio: 15,
      },
      {
        gpio: 16,
        restriction: "SPI0/1",
      },
      {
        gpio: 17,
        restriction: "SPI0/1",
      },
      {
        gpio: 18,
        restriction: "SPI0/1",
      },
      {
        gpio: 19,
        restriction: "SPI0/1",
      },
      {
        gpio: 20,
        restriction: "SPI0/1",
      },
      {
        gpio: 21,
        restriction: "SPI0/1",
      },
      {
        gpio: 22,
        restriction: "SPI0/1",
      },
      {
        gpio: 23,
      },
      {
        gpio: 24,
      },
      {
        gpio: 25,
      },
      {
        gpio: 26,
      },
      {
        gpio: 27,
      },
      {
        gpio: 28,
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO16 ~ GPIO22 are usually used for SPI flash and PSRAM, they're not recommended for other uses.",
      },
      {
        tag: "USB-JTAG",
        text: "GPIO13 and GPIO14 are used by USB-JTAG by default. If they are reconfigured to operate as normal GPIOs, USB-JTAG functionality will be disabled.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32c5.inc",
  },
  {
    family: "ESP32-C6",
    target: "esp32c6",
    pinCount: 31,
    pins: [
      {
        gpio: 0,
        analog: "ADC1_CH0",
        lowPower: "LP_GPIO0",
      },
      {
        gpio: 1,
        analog: "ADC1_CH1",
        lowPower: "LP_GPIO1",
      },
      {
        gpio: 2,
        analog: "ADC1_CH2",
        lowPower: "LP_GPIO2",
      },
      {
        gpio: 3,
        analog: "ADC1_CH3",
        lowPower: "LP_GPIO3",
      },
      {
        gpio: 4,
        analog: "ADC1_CH4",
        lowPower: "LP_GPIO4",
      },
      {
        gpio: 5,
        analog: "ADC1_CH5",
        lowPower: "LP_GPIO5",
      },
      {
        gpio: 6,
        analog: "ADC1_CH6",
        lowPower: "LP_GPIO6",
      },
      {
        gpio: 7,
        lowPower: "LP_GPIO7",
      },
      {
        gpio: 8,
      },
      {
        gpio: 9,
      },
      {
        gpio: 10,
      },
      {
        gpio: 11,
      },
      {
        gpio: 12,
        restriction: "USB-JTAG",
      },
      {
        gpio: 13,
        restriction: "USB-JTAG",
      },
      {
        gpio: 14,
      },
      {
        gpio: 15,
      },
      {
        gpio: 16,
      },
      {
        gpio: 17,
      },
      {
        gpio: 18,
      },
      {
        gpio: 19,
      },
      {
        gpio: 20,
      },
      {
        gpio: 21,
      },
      {
        gpio: 22,
      },
      {
        gpio: 23,
      },
      {
        gpio: 24,
        restriction: "SPI0/1",
      },
      {
        gpio: 25,
        restriction: "SPI0/1",
      },
      {
        gpio: 26,
        restriction: "SPI0/1",
      },
      {
        gpio: 27,
        restriction: "SPI0/1",
      },
      {
        gpio: 28,
        restriction: "SPI0/1",
      },
      {
        gpio: 29,
        restriction: "SPI0/1",
      },
      {
        gpio: 30,
        restriction: "SPI0/1",
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO24 ~ GPIO30 are usually used for SPI flash and not recommended for other uses.",
      },
      {
        tag: "USB-JTAG",
        text: "GPIO12 and GPIO13 are used by USB-JTAG by default. If they are reconfigured to operate as normal GPIOs, USB-JTAG functionality will be disabled.",
      },
      {
        text: "For chip variants with an SiP flash built in, the SPI0/1 pins and GPIO10 ~ GPIO11 are not led out; therefore, only the remaining 22 GPIO pins are available.",
      },
      {
        text: "For chip variants without an in-package flash, GPIO14 is not led out to any chip pins.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32c6.inc",
  },
  {
    family: "ESP32-C61",
    target: "esp32c61",
    pinCount: 30,
    pins: [
      {
        gpio: 0,
        lowPower: "LP_GPIO0",
      },
      {
        gpio: 1,
        analog: "ADC1_CH0",
        lowPower: "LP_GPIO1",
      },
      {
        gpio: 2,
        lowPower: "LP_GPIO2",
      },
      {
        gpio: 3,
        analog: "ADC1_CH1",
        lowPower: "LP_GPIO3",
      },
      {
        gpio: 4,
        analog: "ADC1_CH2",
        lowPower: "LP_GPIO4",
      },
      {
        gpio: 5,
        analog: "ADC1_CH3",
        lowPower: "LP_GPIO5",
      },
      {
        gpio: 6,
        lowPower: "LP_GPIO6",
      },
      {
        gpio: 7,
      },
      {
        gpio: 8,
      },
      {
        gpio: 9,
      },
      {
        gpio: 10,
      },
      {
        gpio: 11,
      },
      {
        gpio: 12,
        restriction: "USB-JTAG",
      },
      {
        gpio: 13,
        restriction: "USB-JTAG",
      },
      {
        gpio: 14,
        restriction: "SPI0/1",
      },
      {
        gpio: 15,
        restriction: "SPI0/1",
      },
      {
        gpio: 16,
        restriction: "SPI0/1",
      },
      {
        gpio: 17,
        restriction: "SPI0/1",
      },
      {
        gpio: 18,
      },
      {
        gpio: 19,
        restriction: "SPI0/1",
      },
      {
        gpio: 20,
        restriction: "SPI0/1",
      },
      {
        gpio: 21,
        restriction: "SPI0/1",
      },
      {
        gpio: 22,
      },
      {
        gpio: 23,
      },
      {
        gpio: 24,
      },
      {
        gpio: 25,
      },
      {
        gpio: 26,
      },
      {
        gpio: 27,
      },
      {
        gpio: 28,
      },
      {
        gpio: 29,
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO14 ~ GPIO17 and GPIO19 ~ GPIO21 are usually used for SPI flash and PSRAM, they're not recommended for other uses.",
      },
      {
        tag: "USB-JTAG",
        text: "GPIO12 and GPIO13 are used by USB-JTAG by default. If they are reconfigured to operate as normal GPIOs, USB-JTAG functionality will be disabled.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32c61.inc",
  },
  {
    family: "ESP32-H2",
    target: "esp32h2",
    pinCount: 28,
    pins: [
      {
        gpio: 0,
      },
      {
        gpio: 1,
        analog: "ADC1_CH0",
      },
      {
        gpio: 2,
        analog: "ADC1_CH1",
      },
      {
        gpio: 3,
        analog: "ADC1_CH2",
      },
      {
        gpio: 4,
        analog: "ADC1_CH3",
      },
      {
        gpio: 5,
        analog: "ADC1_CH4",
      },
      {
        gpio: 6,
      },
      {
        gpio: 7,
        lowPower: "RTC",
      },
      {
        gpio: 8,
        lowPower: "RTC",
      },
      {
        gpio: 9,
        lowPower: "RTC",
      },
      {
        gpio: 10,
        analog: "ANA_CMPR_CH0 reference voltage",
        lowPower: "RTC",
      },
      {
        gpio: 11,
        analog: "ANA_CMPR_CH0 input (non-inverting)",
        lowPower: "RTC",
      },
      {
        gpio: 12,
        lowPower: "RTC",
      },
      {
        gpio: 13,
        lowPower: "RTC",
      },
      {
        gpio: 14,
        lowPower: "RTC",
      },
      {
        gpio: 15,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 16,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 17,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 18,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 19,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 20,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 21,
        lowPower: "SPI0/1",
        restriction: "SPI0/1",
        restrictionFromLegend: true,
      },
      {
        gpio: 22,
      },
      {
        gpio: 23,
      },
      {
        gpio: 24,
      },
      {
        gpio: 25,
      },
      {
        gpio: 26,
        lowPower: "USB-JTAG",
      },
      {
        gpio: 27,
        lowPower: "USB-JTAG",
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO15-21 are usually used for SPI flash and not recommended for other uses.",
      },
      {
        tag: "USB-Serial-JTAG",
        text: "GPIO 26 and 27 are used by USB-Serial-JTAG by default. In order to use them as GPIOs, USB-Serial-JTAG will be disabled by the drivers.",
      },
      {
        text: "For chip variants with an SiP flash built in, the SPI0/1 pins and GPIO6–GPIO7 are not led out. In conclusion, only GPIO0–GPIO5, GPIO8–GPIO14, GPIO22–GPIO27 are available to users.",
      },
      {
        tag: "RTC",
        text: "GPIO7–GPIO14 can be used to wake up the chip from Deep-sleep mode. Note that although GPIO7 is an RTC GPIO, it cannot be used for external wake-up since it is not led out. Other GPIOs can only wake up the chip from Light-sleep mode. For more information, please refer to Section :ref:Wakeup Sources <api-reference-wakeup-source>.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32h2.inc",
  },
  {
    family: "ESP32-H21",
    target: "esp32h21",
    pinCount: 26,
    pins: [
      {
        gpio: 0,
      },
      {
        gpio: 1,
        analog: "ADC1_CH0",
      },
      {
        gpio: 2,
        analog: "ADC1_CH1",
      },
      {
        gpio: 3,
        analog: "ADC1_CH2",
      },
      {
        gpio: 4,
        analog: "ADC1_CH3",
      },
      {
        gpio: 5,
        analog: "ADC1_CH4",
        lowPower: "LP_GPIO0",
      },
      {
        gpio: 6,
        lowPower: "LP_GPIO1",
      },
      {
        gpio: 7,
        lowPower: "LP_GPIO2",
      },
      {
        gpio: 8,
        lowPower: "LP_GPIO3",
      },
      {
        gpio: 9,
        lowPower: "LP_GPIO4",
      },
      {
        gpio: 10,
        lowPower: "LP_GPIO5",
      },
      {
        gpio: 11,
        lowPower: "LP_GPIO6",
      },
      {
        gpio: 12,
      },
      {
        gpio: 13,
      },
      {
        gpio: 14,
      },
      {
        gpio: 15,
      },
      {
        gpio: 16,
      },
      {
        gpio: 17,
        restriction: "USB-JTAG",
      },
      {
        gpio: 18,
        restriction: "USB-JTAG",
      },
      {
        gpio: 19,
        restriction: "SPI0/1",
      },
      {
        gpio: 20,
        restriction: "SPI0/1",
      },
      {
        gpio: 21,
        restriction: "SPI0/1",
      },
      {
        gpio: 22,
        restriction: "SPI0/1",
      },
      {
        gpio: 23,
        restriction: "SPI0/1",
      },
      {
        gpio: 24,
        restriction: "SPI0/1",
      },
      {
        gpio: 25,
        restriction: "SPI0/1",
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO19 ~ GPIO25 are usually used for SPI flash and not recommended for other uses.",
      },
      {
        tag: "USB-JTAG",
        text: "GPIO17 and GPIO18 are used by USB-JTAG by default. If they are reconfigured to operate as normal GPIOs, USB-JTAG functionality will be disabled.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32h21.inc",
  },
  {
    family: "ESP32-H4",
    target: "esp32h4",
    pinCount: 40,
    pins: [
      {
        gpio: 0,
        lowPower: "LP_GPIO0",
      },
      {
        gpio: 1,
        lowPower: "LP_GPIO1",
      },
      {
        gpio: 2,
        lowPower: "LP_GPIO2",
      },
      {
        gpio: 3,
        lowPower: "LP_GPIO3",
      },
      {
        gpio: 4,
        lowPower: "LP_GPIO4",
      },
      {
        gpio: 5,
        lowPower: "LP_GPIO5",
      },
      {
        gpio: 6,
        restriction: "SPI0/1",
      },
      {
        gpio: 7,
        restriction: "SPI0/1",
      },
      {
        gpio: 8,
        restriction: "SPI0/1",
      },
      {
        gpio: 9,
        restriction: "SPI0/1",
      },
      {
        gpio: 10,
        restriction: "SPI0/1",
      },
      {
        gpio: 11,
        restriction: "SPI0/1",
      },
      {
        gpio: 12,
        restriction: "SPI0/1",
      },
      {
        gpio: 13,
        restriction: "USB-JTAG",
      },
      {
        gpio: 14,
        restriction: "USB-JTAG",
      },
      {
        gpio: 15,
      },
      {
        gpio: 16,
      },
      {
        gpio: 17,
      },
      {
        gpio: 18,
      },
      {
        gpio: 19,
      },
      {
        gpio: 20,
      },
      {
        gpio: 21,
      },
      {
        gpio: 22,
      },
      {
        gpio: 23,
      },
      {
        gpio: 24,
      },
      {
        gpio: 25,
      },
      {
        gpio: 26,
      },
      {
        gpio: 27,
      },
      {
        gpio: 28,
        analog: "ADC1_CH0",
      },
      {
        gpio: 29,
        analog: "ADC1_CH1",
      },
      {
        gpio: 30,
        analog: "ADC1_CH2",
      },
      {
        gpio: 31,
        analog: "ADC1_CH3",
      },
      {
        gpio: 32,
        analog: "ADC1_CH4",
      },
      {
        gpio: 33,
      },
      {
        gpio: 34,
      },
      {
        gpio: 35,
      },
      {
        gpio: 36,
      },
      {
        gpio: 37,
      },
      {
        gpio: 38,
      },
      {
        gpio: 39,
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO6 ~ GPIO12 are usually used for SPI flash and PSRAM. These pins are not recommended for other uses.",
      },
      {
        tag: "USB-JTAG",
        text: "GPIO13 and GPIO14 are used by USB-JTAG by default. If they are reconfigured to operate as normal GPIOs, USB-JTAG functionality will be disabled.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32h4.inc",
  },
  {
    family: "ESP32-P4",
    target: "esp32p4",
    pinCount: 55,
    pins: [
      {
        gpio: 0,
        lowPower: "LP_GPIO0",
      },
      {
        gpio: 1,
        lowPower: "LP_GPIO1",
      },
      {
        gpio: 2,
        analog: "TOUCH0",
        lowPower: "LP_GPIO2",
      },
      {
        gpio: 3,
        analog: "TOUCH1",
        lowPower: "LP_GPIO3",
      },
      {
        gpio: 4,
        analog: "TOUCH2",
        lowPower: "LP_GPIO4",
      },
      {
        gpio: 5,
        analog: "TOUCH3",
        lowPower: "LP_GPIO5",
      },
      {
        gpio: 6,
        analog: "TOUCH4",
        lowPower: "LP_GPIO6",
      },
      {
        gpio: 7,
        analog: "TOUCH5",
        lowPower: "LP_GPIO7",
      },
      {
        gpio: 8,
        analog: "TOUCH6",
        lowPower: "LP_GPIO8",
      },
      {
        gpio: 9,
        analog: "TOUCH7",
        lowPower: "LP_GPIO9",
      },
      {
        gpio: 10,
        analog: "TOUCH8",
        lowPower: "LP_GPIO10",
      },
      {
        gpio: 11,
        analog: "TOUCH9",
        lowPower: "LP_GPIO11",
      },
      {
        gpio: 12,
        analog: "TOUCH10",
        lowPower: "LP_GPIO12",
      },
      {
        gpio: 13,
        analog: "TOUCH11",
        lowPower: "LP_GPIO13",
      },
      {
        gpio: 14,
        analog: "TOUCH12",
        lowPower: "LP_GPIO14",
      },
      {
        gpio: 15,
        analog: "TOUCH13",
        lowPower: "LP_GPIO15",
      },
      {
        gpio: 16,
        analog: "ADC1_CH0",
      },
      {
        gpio: 17,
        analog: "ADC1_CH1",
      },
      {
        gpio: 18,
        analog: "ADC1_CH2",
      },
      {
        gpio: 19,
        analog: "ADC1_CH3",
      },
      {
        gpio: 20,
        analog: "ADC1_CH4",
      },
      {
        gpio: 21,
        analog: "ADC1_CH5",
      },
      {
        gpio: 22,
        analog: "ADC1_CH6",
      },
      {
        gpio: 23,
        analog: "ADC1_CH7",
      },
      {
        gpio: 24,
        restriction: "USB-JTAG",
        restrictionFromLegend: true,
      },
      {
        gpio: 25,
        restriction: "USB-JTAG",
        restrictionFromLegend: true,
      },
      {
        gpio: 26,
      },
      {
        gpio: 27,
      },
      {
        gpio: 28,
      },
      {
        gpio: 29,
      },
      {
        gpio: 30,
      },
      {
        gpio: 31,
      },
      {
        gpio: 32,
      },
      {
        gpio: 33,
      },
      {
        gpio: 34,
      },
      {
        gpio: 35,
      },
      {
        gpio: 36,
      },
      {
        gpio: 37,
      },
      {
        gpio: 38,
      },
      {
        gpio: 39,
      },
      {
        gpio: 40,
      },
      {
        gpio: 41,
      },
      {
        gpio: 42,
      },
      {
        gpio: 43,
      },
      {
        gpio: 44,
      },
      {
        gpio: 45,
      },
      {
        gpio: 46,
      },
      {
        gpio: 47,
      },
      {
        gpio: 48,
      },
      {
        gpio: 49,
        analog: "ADC2_CH0",
      },
      {
        gpio: 50,
        analog: "ADC2_CH1",
      },
      {
        gpio: 51,
        analog: "ADC2_CH2, ANA_CMPR_CH0 reference voltage",
      },
      {
        gpio: 52,
        analog: "ADC2_CH3, ANA_CMPR_CH0 input (non-inverting)",
      },
      {
        gpio: 53,
        analog: "ADC2_CH4, ANA_CMPR_CH1 reference voltage",
      },
      {
        gpio: 54,
        analog: "ADC2_CH5, ANA_CMPR_CH1 input (non-inverting)",
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "USB-JTAG",
        text: "GPIO24 and GPIO25 are used by USB-JTAG by default. If they are reconfigured to operate as normal GPIOs, USB-JTAG functionality will be disabled.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32p4.inc",
  },
  {
    family: "ESP32-S2",
    target: "esp32s2",
    pinCount: 47,
    pins: [
      {
        gpio: 0,
        lowPower: "RTC_GPIO0",
      },
      {
        gpio: 1,
        analog: "ADC1_CH0",
        lowPower: "RTC_GPIO1",
      },
      {
        gpio: 2,
        analog: "ADC1_CH1",
        lowPower: "RTC_GPIO2",
      },
      {
        gpio: 3,
        analog: "ADC1_CH2",
        lowPower: "RTC_GPIO3",
      },
      {
        gpio: 4,
        analog: "ADC1_CH3",
        lowPower: "RTC_GPIO4",
      },
      {
        gpio: 5,
        analog: "ADC1_CH4",
        lowPower: "RTC_GPIO5",
      },
      {
        gpio: 6,
        analog: "ADC1_CH5",
        lowPower: "RTC_GPIO6",
      },
      {
        gpio: 7,
        analog: "ADC1_CH6",
        lowPower: "RTC_GPIO7",
      },
      {
        gpio: 8,
        analog: "ADC1_CH7",
        lowPower: "RTC_GPIO8",
      },
      {
        gpio: 9,
        analog: "ADC1_CH8",
        lowPower: "RTC_GPIO9",
      },
      {
        gpio: 10,
        analog: "ADC1_CH9",
        lowPower: "RTC_GPIO10",
      },
      {
        gpio: 11,
        analog: "ADC2_CH0",
        lowPower: "RTC_GPIO11",
      },
      {
        gpio: 12,
        analog: "ADC2_CH1",
        lowPower: "RTC_GPIO12",
      },
      {
        gpio: 13,
        analog: "ADC2_CH2",
        lowPower: "RTC_GPIO13",
      },
      {
        gpio: 14,
        analog: "ADC2_CH3",
        lowPower: "RTC_GPIO14",
      },
      {
        gpio: 15,
        analog: "ADC2_CH4",
        lowPower: "RTC_GPIO15",
      },
      {
        gpio: 16,
        analog: "ADC2_CH5",
        lowPower: "RTC_GPIO16",
      },
      {
        gpio: 17,
        analog: "ADC2_CH6, DAC0",
        lowPower: "RTC_GPIO17",
      },
      {
        gpio: 18,
        analog: "ADC2_CH7, DAC1",
        lowPower: "RTC_GPIO18",
      },
      {
        gpio: 19,
        analog: "ADC2_CH8",
        lowPower: "RTC_GPIO19",
      },
      {
        gpio: 20,
        analog: "ADC2_CH9",
        lowPower: "RTC_GPIO20",
      },
      {
        gpio: 21,
        lowPower: "RTC_GPIO21",
      },
      {
        gpio: 26,
        restriction: "SPI0/1",
      },
      {
        gpio: 27,
        restriction: "SPI0/1",
      },
      {
        gpio: 28,
        restriction: "SPI0/1",
      },
      {
        gpio: 29,
        restriction: "SPI0/1",
      },
      {
        gpio: 30,
        restriction: "SPI0/1",
      },
      {
        gpio: 31,
        restriction: "SPI0/1",
      },
      {
        gpio: 32,
        restriction: "SPI0/1",
      },
      {
        gpio: 33,
      },
      {
        gpio: 34,
      },
      {
        gpio: 35,
      },
      {
        gpio: 36,
      },
      {
        gpio: 37,
      },
      {
        gpio: 38,
      },
      {
        gpio: 39,
        restriction: "JTAG",
      },
      {
        gpio: 40,
        restriction: "JTAG",
      },
      {
        gpio: 41,
        restriction: "JTAG",
      },
      {
        gpio: 42,
        restriction: "JTAG",
      },
      {
        gpio: 43,
      },
      {
        gpio: 44,
      },
      {
        gpio: 45,
      },
      {
        gpio: 46,
        restriction: "GPI",
        inputOnly: true,
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO26-32 are usually used for SPI flash and PSRAM and not recommended for other uses.",
      },
      {
        tag: "JTAG",
        text: "GPIO39-42 are usually used for inline debug.",
      },
      {
        tag: "GPI",
        text: "GPIO46 is fixed to pull-down and is input only.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32s2.inc",
  },
  {
    family: "ESP32-S3",
    target: "esp32s3",
    pinCount: 49,
    pins: [
      {
        gpio: 0,
        lowPower: "RTC_GPIO0",
      },
      {
        gpio: 1,
        analog: "ADC1_CH0",
        lowPower: "RTC_GPIO1",
      },
      {
        gpio: 2,
        analog: "ADC1_CH1",
        lowPower: "RTC_GPIO2",
      },
      {
        gpio: 3,
        analog: "ADC1_CH2",
        lowPower: "RTC_GPIO3",
      },
      {
        gpio: 4,
        analog: "ADC1_CH3",
        lowPower: "RTC_GPIO4",
      },
      {
        gpio: 5,
        analog: "ADC1_CH4",
        lowPower: "RTC_GPIO5",
      },
      {
        gpio: 6,
        analog: "ADC1_CH5",
        lowPower: "RTC_GPIO6",
      },
      {
        gpio: 7,
        analog: "ADC1_CH6",
        lowPower: "RTC_GPIO7",
      },
      {
        gpio: 8,
        analog: "ADC1_CH7",
        lowPower: "RTC_GPIO8",
      },
      {
        gpio: 9,
        analog: "ADC1_CH8",
        lowPower: "RTC_GPIO9",
      },
      {
        gpio: 10,
        analog: "ADC1_CH9",
        lowPower: "RTC_GPIO10",
      },
      {
        gpio: 11,
        analog: "ADC2_CH0",
        lowPower: "RTC_GPIO11",
      },
      {
        gpio: 12,
        analog: "ADC2_CH1",
        lowPower: "RTC_GPIO12",
      },
      {
        gpio: 13,
        analog: "ADC2_CH2",
        lowPower: "RTC_GPIO13",
      },
      {
        gpio: 14,
        analog: "ADC2_CH3",
        lowPower: "RTC_GPIO14",
      },
      {
        gpio: 15,
        analog: "ADC2_CH4",
        lowPower: "RTC_GPIO15",
      },
      {
        gpio: 16,
        analog: "ADC2_CH5",
        lowPower: "RTC_GPIO16",
      },
      {
        gpio: 17,
        analog: "ADC2_CH6",
        lowPower: "RTC_GPIO17",
      },
      {
        gpio: 18,
        analog: "ADC2_CH7",
        lowPower: "RTC_GPIO18",
      },
      {
        gpio: 19,
        analog: "ADC2_CH8",
        lowPower: "RTC_GPIO19",
        restriction: "USB-JTAG",
      },
      {
        gpio: 20,
        analog: "ADC2_CH9",
        lowPower: "RTC_GPIO20",
        restriction: "USB-JTAG",
      },
      {
        gpio: 21,
        lowPower: "RTC_GPIO21",
      },
      {
        gpio: 26,
        restriction: "SPI0/1",
      },
      {
        gpio: 27,
        restriction: "SPI0/1",
      },
      {
        gpio: 28,
        restriction: "SPI0/1",
      },
      {
        gpio: 29,
        restriction: "SPI0/1",
      },
      {
        gpio: 30,
        restriction: "SPI0/1",
      },
      {
        gpio: 31,
        restriction: "SPI0/1",
      },
      {
        gpio: 32,
        restriction: "SPI0/1",
      },
      {
        gpio: 33,
        restriction: "SPI0/1",
      },
      {
        gpio: 34,
        restriction: "SPI0/1",
      },
      {
        gpio: 35,
        restriction: "SPI0/1",
      },
      {
        gpio: 36,
        restriction: "SPI0/1",
      },
      {
        gpio: 37,
        restriction: "SPI0/1",
      },
      {
        gpio: 38,
      },
      {
        gpio: 39,
      },
      {
        gpio: 40,
      },
      {
        gpio: 41,
      },
      {
        gpio: 42,
      },
      {
        gpio: 43,
      },
      {
        gpio: 44,
      },
      {
        gpio: 45,
      },
      {
        gpio: 46,
      },
      {
        gpio: 47,
      },
      {
        gpio: 48,
      },
    ],
    legend: [
      {
        tag: "Strapping pin",
        text: "Some pins are used as strapping pins. For more information, please refer to datasheet > Boot Configurations.",
      },
      {
        tag: "SPI0/1",
        text: "GPIO26 ~ GPIO32 are usually used for SPI flash and PSRAM and not recommended for other uses. When using Octal flash or Octal PSRAM or both, GPIO33 ~ GPIO37 are connected to SPIIO4 ~ SPIIO7 and SPIDQS. Therefore, on boards embedded with ESP32-S3R8 / ESP32-S3R8V chip, GPIO33 ~ GPIO37 are also not recommended for other uses.",
      },
      {
        tag: "USB-JTAG",
        text: "GPIO19 and GPIO20 are used by USB-JTAG by default. If they are reconfigured to operate as normal GPIOs, USB-JTAG functionality will be disabled.",
      },
    ],
    sourceUrl:
      "https://github.com/espressif/esp-idf/blob/master/docs/en/api-reference/peripherals/gpio/esp32s3.inc",
  },
];
