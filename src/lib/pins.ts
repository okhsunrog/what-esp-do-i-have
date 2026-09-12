import { socGpioMaps } from "../data/gpio";
import type { ModulePinDetail, NamedPin, SocGpioMap, SocGpioPin } from "../data/types";

export type PinState =
  /** Free to use as a general-purpose I/O. */
  | "available"
  /** Readable but never drivable. */
  | "input-only"
  /** Carries the SPI flash/PSRAM bus. */
  | "memory-bus"
  /** Used by USB-JTAG or in-line JTAG by default. */
  | "debug"
  /** The chip's default UART0 console. */
  | "console"
  /** Exists on the SoC but not brought out to a module pad. */
  | "not-exposed"
  /** Brought out, but a board peripheral already uses it. */
  | "board-used"
  /** Only bonded out on some packages of this series. */
  | "package-dependent";

export interface PinView {
  gpio: number;
  state: PinState;
  /** Short label for the cell. */
  label?: string;
  /** Why the pin is in this state, for the detail panel. */
  reasons: string[];
  analog?: string;
  lowPower?: string;
  /** Module pad name, when viewing a module or a board. */
  pad?: string;
  functions?: string;
  caveat?: string;
  roles?: string[];
}

export const STATE_LABEL: Record<PinState, string> = {
  available: "Available",
  "input-only": "Input only",
  "memory-bus": "Flash / PSRAM bus",
  debug: "USB / JTAG",
  console: "UART0 console",
  "not-exposed": "Not on a pad",
  "board-used": "Used on board",
  "package-dependent": "Some packages only",
};

const RESTRICTION_STATE: Record<string, PinState> = {
  "SPI0/1": "memory-bus",
  "USB-JTAG": "debug",
  JTAG: "debug",
  TXD: "console",
  RXD: "console",
  GPI: "input-only",
};

const gpioByFamily = new Map(socGpioMaps.map((m) => [m.family, m]));

export function socGpioMap(family: string): SocGpioMap | undefined {
  return gpioByFamily.get(family);
}

function baseState(pin: SocGpioPin): { state: PinState; reasons: string[] } {
  const reasons: string[] = [];
  let state: PinState = "available";
  if (pin.inputOnly) {
    state = "input-only";
    reasons.push("Can only be configured as an input, with no software pull-up or pull-down.");
  }
  if (pin.packageDependent) {
    state = "package-dependent";
    reasons.push(
      "ESP-IDF's GPIO table omits this pin: it is only bonded out on some packages of this series.",
    );
  }
  const mapped = pin.restriction ? RESTRICTION_STATE[pin.restriction] : undefined;
  if (mapped && mapped !== "input-only") {
    state = mapped;
    reasons.push(`ESP-IDF marks this pin “${pin.restriction}”.`);
  }
  return { state, reasons };
}

export interface BuildOptions {
  family: string;
  /** GPIOs a module brings out to pads; omit for a bare SoC view. */
  exposed?: number[];
  /** Pad name, functions and datasheet caveat per GPIO. */
  detail?: Record<string, ModulePinDetail>;
  /** Pins a board already uses. */
  named?: NamedPin[];
}

/** Build the per-GPIO view for a SoC, a module or a board. */
export function buildPinViews({ family, exposed, detail, named }: BuildOptions): PinView[] {
  const map = gpioByFamily.get(family);
  if (!map) return [];
  const exposedSet = exposed ? new Set(exposed) : undefined;
  const namedByGpio = new Map((named ?? []).map((n) => [n.gpio, n.roles]));

  return map.pins.map((pin) => {
    const { state, reasons } = baseState(pin);
    const view: PinView = {
      gpio: pin.gpio,
      state,
      reasons,
      analog: pin.analog,
      lowPower: pin.lowPower,
    };

    const pad = detail?.[String(pin.gpio)];
    if (pad) {
      view.pad = pad.pad;
      view.functions = pad.functions;
      if (pad.caveat) {
        view.caveat = pad.caveat;
        view.reasons.push(pad.caveat);
      }
    }

    if (exposedSet && !exposedSet.has(pin.gpio)) {
      view.state = "not-exposed";
      view.reasons.unshift("The module does not bring this pin out to a pad.");
      return view;
    }

    const roles = namedByGpio.get(pin.gpio);
    if (roles?.length) {
      view.roles = roles;
      // What the vendor actually wired is more specific than a general warning.
      view.state = "board-used";
      view.reasons.unshift(`Wired on this board to: ${roles.join(", ")}.`);
    }
    return view;
  });
}

export function countByState(views: PinView[]): Record<PinState, number> {
  const counts = {} as Record<PinState, number>;
  for (const key of Object.keys(STATE_LABEL) as PinState[]) counts[key] = 0;
  for (const v of views) counts[v.state] += 1;
  return counts;
}
