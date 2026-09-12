<script setup lang="ts">
import { computed, ref, shallowRef, watchEffect } from "vue";
import { socGpioMaps } from "../data/gpio";
import type { ModulePinDetail, NamedPin } from "../data/types";
import { buildPinViews, countByState, socGpioMap, STATE_LABEL, type PinView } from "../lib/pins";

const props = defineProps<{
  family: string;
  /** Module family name, to load its pad detail. */
  moduleName?: string;
  /** Board name, to load the pins its Arduino variant already uses. */
  boardName?: string;
  exposedGpios?: number[];
}>();

const detail = shallowRef<Record<string, ModulePinDetail> | undefined>();
const named = shallowRef<NamedPin[] | undefined>();
const selected = ref<number | null>(null);

// The per-pad tables are bulky and only matter once a result is on screen,
// so they ship as their own chunk rather than in the initial bundle.
watchEffect(async () => {
  detail.value = undefined;
  named.value = undefined;
  if (props.moduleName) {
    const mod = await import("../data/module-pins");
    detail.value = mod.modulePinDetail[props.moduleName];
  }
  if (props.boardName) {
    const mod = await import("../data/board-pins");
    named.value = mod.boardNamedPins[props.boardName];
  }
});

const map = computed(() => socGpioMap(props.family));
const views = computed<PinView[]>(() =>
  buildPinViews({
    family: props.family,
    exposed: props.exposedGpios,
    detail: detail.value,
    named: named.value,
  }),
);
const counts = computed(() => countByState(views.value));
/** For a module or board the meaningful denominator is its pads, not the whole SoC. */
const total = computed(() =>
  props.exposedGpios ? views.value.length - counts.value["not-exposed"] : views.value.length,
);
const scope = computed(() => {
  if (props.exposedGpios)
    return props.boardName ? "pins its module brings out" : "pads on this module";
  return props.boardName ? "GPIOs on its SoC" : "GPIOs on the bare chip";
});
const shownStates = computed(() =>
  (Object.keys(STATE_LABEL) as (keyof typeof STATE_LABEL)[]).filter((s) => counts.value[s] > 0),
);
const current = computed(() => views.value.find((v) => v.gpio === selected.value) ?? null);

const hasData = computed(() => socGpioMaps.some((m) => m.family === props.family));
</script>

<template>
  <section v-if="hasData && views.length" class="pins">
    <header class="pins-head">
      <h3>Usable GPIOs</h3>
      <p class="pins-sub">{{ counts.available }} of {{ total }} {{ scope }} are free</p>
    </header>

    <ol class="pin-grid">
      <li v-for="v in views" :key="v.gpio">
        <button
          type="button"
          :data-state="v.state"
          :aria-pressed="selected === v.gpio"
          :title="`GPIO${v.gpio} — ${STATE_LABEL[v.state]}`"
          @click="selected = selected === v.gpio ? null : v.gpio"
        >
          {{ v.gpio }}
        </button>
      </li>
    </ol>

    <ul class="pin-legend">
      <li v-for="s in shownStates" :key="s">
        <span class="swatch" :data-state="s"></span>{{ STATE_LABEL[s] }}
        <span class="swatch-count">{{ counts[s] }}</span>
      </li>
    </ul>

    <div v-if="current" class="pin-detail">
      <p class="pin-detail-head">
        <strong>GPIO{{ current.gpio }}</strong>
        <span class="swatch" :data-state="current.state"></span>
        {{ STATE_LABEL[current.state] }}
        <span v-if="current.pad" class="pin-pad">pad {{ current.pad }}</span>
      </p>
      <ul v-if="current.reasons.length" class="pin-reasons">
        <li v-for="r in current.reasons" :key="r">{{ r }}</li>
      </ul>
      <dl class="pin-facts">
        <div v-if="current.analog">
          <dt>Analog</dt>
          <dd>{{ current.analog }}</dd>
        </div>
        <div v-if="current.lowPower">
          <dt>{{ map?.lowPowerLabel ?? "Low power" }}</dt>
          <dd>{{ current.lowPower }}</dd>
        </div>
        <div v-if="current.functions" class="pin-functions">
          <dt>Alternate functions</dt>
          <dd>{{ current.functions }}</dd>
        </div>
      </dl>
    </div>
    <p v-else class="pins-hint">Select a pin for its functions and any restriction.</p>

    <p v-if="props.boardName" class="pins-caveat">
      Board wiring comes from its Arduino variant, which names the pins the board uses. A pin not
      marked here is not guaranteed free — a board can route a pin without naming it.
    </p>

    <details v-if="map?.legend.length" class="pin-notes">
      <summary>Espressif's notes for {{ map.family }}</summary>
      <ul>
        <li v-for="n in map.legend" :key="n.text">
          <strong v-if="n.tag">{{ n.tag }}:</strong> {{ n.text }}
        </li>
      </ul>
      <a :href="map.sourceUrl" target="_blank" rel="noreferrer">ESP-IDF GPIO reference</a>
    </details>
  </section>
</template>
