<script setup lang="ts">
import { computed } from "vue";
import type { DecodeResult } from "../lib/decoder";
import PinGrid from "./PinGrid.vue";

const props = defineProps<{ result: DecodeResult }>();
const emit = defineEmits<{ pick: [value: string] }>();

const KIND_LABEL: Record<DecodeResult["kind"], string> = {
  soc: "SoC",
  module: "Module",
  board: "Dev board",
  "usb-id": "USB ID",
  "module-family": "Module family",
  "specification-identifier": "Specification identifier",
  "chip-memory-code": "Chip memory code",
  "data-matrix": "Data matrix",
  unknown: "No match",
};

const CONFIDENCE_LABEL: Record<DecodeResult["confidence"], string> = {
  exact: "Exact match",
  partial: "Partial match",
  unknown: "Not recognised",
};

const EVIDENCE_LABEL: Record<string, string> = {
  datasheet: "datasheet",
  "product-listing": "product page",
  convention: "decoded",
  "vendor-docs": "vendor docs",
  "board-manifest": "board manifest",
  "arduino-core": "arduino core",
};

const icon = computed(() => {
  switch (props.result.kind) {
    case "soc":
      return "i-lucide-cpu";
    case "module":
      return "i-lucide-microchip";
    case "board":
      return "i-lucide-circuit-board";
    case "usb-id":
      return "i-lucide-usb";
    case "unknown":
      return "i-lucide-search-x";
    default:
      return "i-lucide-info";
  }
});

const siblings = computed(() => props.result.siblings ?? []);
const boards = computed(() => props.result.boards ?? []);

const siblingsLabel = computed(() => {
  const n = siblings.value.length;
  if (props.result.kind === "board") return `Also sold as ${n === 1 ? "this name" : "these names"}`;
  return `${n} other ordering code${n > 1 ? "s" : ""} in this family`;
});

const boardsLabel = computed(() => {
  const n = boards.value.length;
  return n === 1
    ? "1 development board uses this module"
    : `${n} development boards use this module`;
});

const suggestionsLabel = computed(() =>
  props.result.kind === "usb-id" ? "Boards known to use this ID" : "Did you mean",
);
</script>

<template>
  <article class="card" :data-confidence="result.confidence" role="status" aria-live="polite">
    <header class="card-head">
      <UIcon :name="icon" class="card-icon" />
      <div class="card-head-text">
        <p class="card-tags">
          <span class="tag tag-kind">{{ KIND_LABEL[result.kind] }}</span>
          <span class="tag tag-confidence">{{ CONFIDENCE_LABEL[result.confidence] }}</span>
        </p>
        <h2 class="card-title">{{ result.title }}</h2>
        <p v-if="result.subtitle" class="card-subtitle">{{ result.subtitle }}</p>
      </div>
    </header>

    <dl v-if="result.fields.length" class="fields">
      <div v-for="f in result.fields" :key="f.label" class="field">
        <dt>{{ f.label }}</dt>
        <dd>
          {{ f.value }}
          <span class="evidence" :data-evidence="f.evidence">{{ EVIDENCE_LABEL[f.evidence] }}</span>
        </dd>
      </div>
    </dl>

    <ul v-if="result.notes.length" class="notes-list">
      <li v-for="note in result.notes" :key="note">{{ note }}</li>
    </ul>

    <div v-for="c in result.corrections" :key="c.note" class="conflict">
      <UIcon name="i-lucide-triangle-alert" class="conflict-icon" />
      <p>
        <strong>Sources disagree —</strong> {{ c.note }}
        <a v-for="(url, i) in c.sourceUrls" :key="url" :href="url" target="_blank" rel="noreferrer">
          source {{ i + 1 }}
        </a>
      </p>
    </div>

    <div v-if="result.suggestions?.length" class="chips">
      <span class="chips-label">{{ suggestionsLabel }}</span>
      <button v-for="s in result.suggestions" :key="s" type="button" @click="emit('pick', s)">
        {{ s }}
      </button>
    </div>

    <details v-if="siblings.length" class="siblings">
      <summary>{{ siblingsLabel }}</summary>
      <div class="chips">
        <button v-for="s in siblings" :key="s" type="button" @click="emit('pick', s)">
          {{ s }}
        </button>
      </div>
    </details>

    <PinGrid
      v-if="result.pins"
      :key="result.title"
      :family="result.pins.family"
      :module-name="result.pins.moduleName"
      :board-name="result.pins.boardName"
      :exposed-gpios="result.pins.exposedGpios"
    />

    <details v-if="boards.length" class="siblings">
      <summary>{{ boardsLabel }}</summary>
      <div class="chips">
        <button v-for="b in boards" :key="b" type="button" @click="emit('pick', b)">{{ b }}</button>
      </div>
    </details>

    <footer v-if="result.links.length" class="card-links">
      <a v-for="l in result.links" :key="l.url" :href="l.url" target="_blank" rel="noreferrer">
        {{ l.label }}
        <UIcon name="i-lucide-external-link" class="link-icon" />
      </a>
    </footer>
  </article>
</template>
