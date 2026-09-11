<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import CatalogBrowser from "./components/CatalogBrowser.vue";
import ResultCard from "./components/ResultCard.vue";
import { sources } from "./data/sources";
import { counts } from "./lib/catalog";
import { decode } from "./lib/decoder";

const EXAMPLES = ["ESP32-C6-WROOM-1-N8", "ESP32-S3FH4R2", "MBH4", "ESP8684-WROOM-03-H4X"];

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
      <header class="shell flex items-center justify-between py-6">
        <a class="brand" href="./" aria-label="What ESP do I have?">ESP?</a>
        <span class="text-sm text-muted">Espressif markings</span>
      </header>

      <section class="shell hero-section">
        <p class="kicker">Decode, don't guess</p>
        <h1>Which ESP<br />do I have?</h1>
        <p class="lead">
          Type the code printed on a chip or module. Every answer says whether it is silicon or a
          module, where each field came from, and what the marking cannot tell you.
        </p>

        <form class="decoder" @submit.prevent>
          <label for="marking">MARKING</label>
          <div class="decoder-row">
            <UInput
              id="marking"
              v-model="marking"
              size="xl"
              placeholder="e.g. ESP32-C6-WROOM-1-N8"
              autocomplete="off"
              spellcheck="false"
              class="decoder-input"
            />
          </div>
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
          <h2>Chip or module</h2>
          <p>
            {{ counts.socParts }} SoC ordering codes across {{ counts.socFamilies }} series, and
            {{ counts.moduleParts }} module ordering codes across
            {{ counts.moduleFamilies }} families — kept clearly apart.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Marked evidence</h2>
          <p>
            Each field says whether it was read from a datasheet table, from the product page, or
            decoded from Espressif's documented naming convention.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Espressif only</h2>
          <p>
            Built from
            <a :href="sources.socListing" target="_blank" rel="noreferrer">espressif.com</a>, the
            module datasheets and
            <a :href="sources.packagingRoot" target="_blank" rel="noreferrer">ESP-Packaging</a>. No
            marketplace or forum data.
          </p>
        </article>
      </section>
    </main>
  </UApp>
</template>
