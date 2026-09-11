# What ESP do I have?

A decoder for the codes printed on Espressif chips and modules. Type what is on
the silkscreen; get back whether it is a SoC or a module, what the code does and
does not tell you, and a link to the Espressif document each field came from.

Live at <https://okhsunrog.dev/what-esp-do-i-have/>.

## What it answers

| Input                 | Answer                                                                              |
| --------------------- | ----------------------------------------------------------------------------------- |
| `ESP32-C6-WROOM-1-N8` | Module, ESP32-C6, PCB antenna, 8 MB Quad SPI flash, −40 ~ 85 °C, datasheet link     |
| `ESP32-S3FH4R2`       | SoC, QFN 7×7, 4 MB in-package flash, 2 MB PSRAM                                     |
| `ESP32-C6-WROOM-1`    | Module family — partial match, because the flash size lives in the suffix           |
| `MBH4`                | Specification Identifier — partial match: 105 °C, 4 MB flash, **no** product family |
| `AB2419A1B2C3D4E5F6`  | Data Matrix — date code and MAC ID only                                             |

Case and separators are ignored, so `esp32 c6 wroom 1 n8` resolves the same way.
The current marking is kept in the URL (`?m=…`), so any result can be linked.

## Sources

Everything comes from Espressif, and nothing from marketplaces, forums or
third-party tables:

- [SoC product listing](https://www.espressif.com/en/products/socs) — ordering
  codes, package, in-package memory, GPIO and SRAM counts.
- [Module product listing](https://www.espressif.com/en/products/modules) —
  module families, antenna type, dimensions, embedded SoC.
- The **part-number table** in each module datasheet — per-code flash, PSRAM,
  ambient temperature, embedded chip revision, and EOL/NRND status.
- [Espressif DevKits](https://www.espressif.com/en/products/devkits) — official
  development boards.
- [ESP-Packaging](https://docs.espressif.com/projects/esp-packaging/en/latest/) —
  the chip and module silk-marking conventions, transcribed in
  [`src/data/marking.ts`](src/data/marking.ts).

Development boards are the one place this database leaves Espressif. A board is
whatever its maker says it is, so each board row names its vendor and the source
it was read from:

- the vendor's own documentation (Espressif's DevKits listing,
  `docs.waveshare.com`, and so on);
- the [pioarduino board manifests](https://github.com/pioarduino/platform-espressif32),
  which carry the vendor, product URL and USB IDs;
- [`espressif/arduino-esp32` `boards.txt`](https://github.com/espressif/arduino-esp32),
  Espressif's own Arduino core, for flash, PSRAM and USB IDs.

Rows from the last two say so, because they are not the vendor's datasheet. Still
no marketplace listings, forum posts or community spreadsheets.

Where two Espressif sources disagree, neither is silently preferred: the conflict
is recorded in [`src/data/corrections.ts`](src/data/corrections.ts) and shown next
to the result.

## Confidence

Every field carries its provenance, and the UI badges it:

- **datasheet** — read from a published part-number table.
- **product page** — read from the product listing.
- **vendor docs** — read from the board maker's own documentation.
- **board manifest** / **arduino core** — read from a build-system board
  definition rather than a datasheet.
- **decoded** — derived from the documented naming convention, because Espressif
  publishes no row for this exact code.

A result is only an **exact match** when the part number itself is in the
catalog. A well-formed but unpublished suffix, a family name without an ordering
code, a Specification Identifier and a Data Matrix are all **partial**.

## Layout

```
src/data/types.ts        shared types
src/data/socs.ts         SoC ordering codes
src/data/modules.ts      module families and their ordering codes
src/data/boards.ts       development boards, by vendor
src/data/marking.ts      ESP-Packaging silk-marking conventions
src/data/corrections.ts  documented conflicts between Espressif sources
src/data/sources.ts      source URLs
src/lib/normalize.ts     input normalization
src/lib/catalog.ts       lookup indexes
src/lib/decoder.ts       the decoder
```

## Keeping it current

```bash
vp run catalog:check
```

re-reads both product listings and reports what changed against the committed
catalog. It does not rewrite the data files on its own: per-part facts come from
datasheet tables, which a person has to read before changing a row.

## Known limitations

- Espressif tracking codes and chip lot numbers are not decoded. The only thing
  published about them is that the second character of the chip tracking code
  maps to a revision, which is listed per family in `src/data/marking.ts`.
- Six module families — including ESP32-H4-WROOM-1, ESP32-H21-MINI-1,
  ESP32-E22-M2-1 and ESP32-S31-WROOM-1 — are on the product listing with no
  published ordering codes yet, so only family-level facts are available.
- A board's flash and PSRAM are what its vendor documents at one point in time.
  Vendors do revise boards without renaming them; the marking on the module or
  chip itself is the authority, not the board name.
- USB IDs do not identify a board. Espressif's native USB peripheral reports
  `0x303a:0x1001` on many different boards, and a board with a USB-to-UART bridge
  reports the bridge's ID instead.
- Board coverage is broad but uneven: Espressif and Waveshare boards carry vendor
  documentation, while many smaller vendors are only present through build-system
  board definitions, which state less.
- Flash and PSRAM are only reported when Espressif documents them, so an
  external flash chip a board maker soldered on will not appear.

## Development

```bash
vp install
vp dev
vp test
vp check
vp run build
```
