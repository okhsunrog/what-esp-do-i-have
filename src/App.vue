<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import CatalogBrowser from "./components/CatalogBrowser.vue";
import ResultCard from "./components/ResultCard.vue";
import { sources } from "./data/sources";
import { counts } from "./lib/catalog";
import { decode } from "./lib/decoder";

const EXAMPLES = [
  "ESP32-C6-WROOM-1-N8",
  "ESP32-S3FH4R2",
  "MBH4",
  "ESP32-S3-Touch-LCD-1.85",
  "303a:1001",
];

const marking = ref("");
const result = computed(() => decode(marking.value));

function pick(value: string) {
  marking.value = value;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncUrl(value: string) {
  const url = new URL(window.location.href);
  if (value.trim()) url.searchParams.set("m", value.trim());
  else url.searchParams.delete("m");
  window.history.replaceState(null, "", url);
}

onMounted(() => {
  const initial = new URL(window.location.href).searchParams.get("m");
  if (initial) marking.value = initial;
});

watch(marking, syncUrl);
</script>

<template>
  <UApp>
    <main class="min-h-screen">
      <header class="shell site-header">
        <a class="brand" href="./" aria-label="What ESP do I have?">ESP?</a>
        <UColorModeButton />
      </header>

      <section class="shell hero-section">
        <p class="kicker">Decode, don't guess</p>
        <h1>Which ESP<br />do I have?</h1>
        <p class="lead">
          Type the code printed on a chip, a module or a dev board. Every answer says what kind of
          thing it is, where each field came from, and what the marking cannot tell you.
        </p>

        <form class="decoder" @submit.prevent>
          <label for="marking">MARKING</label>
          <UInput
            id="marking"
            v-model="marking"
            size="xl"
            placeholder="e.g. ESP32-C6-WROOM-1-N8"
            autocomplete="off"
            autocapitalize="characters"
            spellcheck="false"
            class="decoder-input"
          />
          <p class="hint">
            Case and separators do not matter — <code>esp32 c6 wroom 1 n8</code> works too.
          </p>
          <div class="chips examples">
            <span class="chips-label">Try</span>
            <button v-for="e in EXAMPLES" :key="e" type="button" @click="pick(e)">{{ e }}</button>
          </div>
        </form>

        <ResultCard v-if="result" :result="result" @pick="pick" />
      </section>

      <CatalogBrowser @pick="pick" />

      <section class="shell notes" aria-label="How this database is built">
        <article>
          <span>01</span>
          <h2>Chip, module or board</h2>
          <p>
            {{ counts.socParts }} SoC and {{ counts.moduleParts }} module ordering codes from
            Espressif, plus {{ counts.boards }} development boards from
            {{ counts.boardVendors }} vendors — never conflated.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Marked evidence</h2>
          <p>
            Each field says whether it was read from a datasheet table, a vendor's own docs, a board
            manifest, or decoded from Espressif's documented naming convention.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Vendor sources</h2>
          <p>
            Silicon and modules from
            <a :href="sources.socListing" target="_blank" rel="noreferrer">espressif.com</a>, the
            datasheets and
            <a :href="sources.packagingRoot" target="_blank" rel="noreferrer">ESP-Packaging</a>.
            Boards from whoever makes them. No marketplace or forum data.
          </p>
        </article>
      </section>
    </main>
  </UApp>
</template>
