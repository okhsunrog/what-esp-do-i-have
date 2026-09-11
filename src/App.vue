<script setup lang="ts">
import { computed, ref } from "vue";
import { chips, moduleMarkingSourceUrl, type Chip } from "./data/chips";

const marking = ref("");
const result = ref<DecodeResult | null>(null);

type DecodeResult =
  | { kind: "chip"; chip: Chip }
  | { kind: "module-spec"; status: string; temperature: string; flashMb: number; psramMb?: number }
  | { kind: "unknown" };

const normalizedMarking = computed(() => marking.value.trim().toUpperCase().replace(/\s+/g, " "));

function decode() {
  const compact = normalizedMarking.value.replace(/[^A-Z0-9]/g, "");

  if (!compact) {
    result.value = null;
    return;
  }

  const chip = chips.find((candidate) =>
    [candidate.partNumber, ...candidate.aliases]
      .map((name) => name.replace(/[^A-Z0-9]/g, ""))
      .includes(compact),
  );

  if (chip) {
    result.value = { kind: "chip", chip };
    return;
  }

  const moduleSpec = compact.match(/^([A-Z0-9]{2})([NH])(16|32|2|4|8)(R[28])?$/);
  if (moduleSpec) {
    result.value = {
      kind: "module-spec",
      status: moduleSpec[1],
      temperature: moduleSpec[2] === "H" ? "105 °C" : "85 °C / 65 °C",
      flashMb: Number(moduleSpec[3]),
      psramMb: moduleSpec[4] ? Number(moduleSpec[4].slice(1)) : undefined,
    };
    return;
  }

  result.value = { kind: "unknown" };
}
</script>

<template>
  <UApp>
    <main class="min-h-screen bg-default text-default">
      <header class="shell flex items-center justify-between py-6">
        <a class="brand" href="/" aria-label="What ESP do I have?">ESP?</a>
        <span class="text-sm text-muted">Espressif markings</span>
      </header>

      <section class="shell hero-section">
        <p class="kicker">Decode, don't guess</p>
        <h1>Which ESP<br />do I have?</h1>
        <p class="lead">
          Enter the code printed on a chip or module. See what it actually means — and where the
          answer comes from.
        </p>

        <form class="decoder" @submit.prevent="decode">
          <label for="marking">MARKING</label>
          <div class="decoder-row">
            <UInput
              id="marking"
              v-model="marking"
              size="xl"
              placeholder="e.g. ESP32-C6-MINI-1-H4"
              autocomplete="off"
              class="decoder-input"
            />
            <UButton type="submit" size="xl" color="primary" icon="i-lucide-scan-line">
              Decode marking
            </UButton>
          </div>
          <p class="hint">Case and spacing do not matter. Photo lookup is coming later.</p>
        </form>

        <div v-if="result?.kind === 'chip'" class="result" role="status">
          <UIcon name="i-lucide-flask-conical" class="result-icon" />
          <div>
            <p class="result-label">Exact part-number match</p>
            <strong>{{ result.chip.partNumber }}</strong>
            <dl class="specs">
              <div>
                <dt>Family</dt>
                <dd>{{ result.chip.family }}</dd>
              </div>
              <div>
                <dt>Package</dt>
                <dd>{{ result.chip.package }}</dd>
              </div>
              <div v-if="result.chip.flashMb">
                <dt>Flash</dt>
                <dd>{{ result.chip.flashMb }} MB</dd>
              </div>
              <div v-if="result.chip.psramMb">
                <dt>PSRAM</dt>
                <dd>{{ result.chip.psramMb }} MB</dd>
              </div>
            </dl>
            <a :href="result.chip.sourceUrl" target="_blank" rel="noreferrer"
              >View official source</a
            >
          </div>
        </div>

        <div v-else-if="result?.kind === 'module-spec'" class="result" role="status">
          <UIcon name="i-lucide-info" class="result-icon" />
          <div>
            <p class="result-label">Module specification identifier — partial match</p>
            <strong>{{ normalizedMarking }}</strong>
            <p>
              {{ result.status }} is a product-status/revision identifier; this code alone does not
              identify the module family. It does indicate {{ result.flashMb }} MB flash,
              {{ result.temperature }} operation,
              <template v-if="result.psramMb">and {{ result.psramMb }} MB PSRAM.</template
              ><template v-else>and no PSRAM field.</template>
            </p>
            <a :href="moduleMarkingSourceUrl" target="_blank" rel="noreferrer"
              >View official convention</a
            >
          </div>
        </div>

        <div v-else-if="result?.kind === 'unknown'" class="result" role="status">
          <UIcon name="i-lucide-search-x" class="result-icon" />
          <div>
            <p class="result-label">No confirmed match yet</p>
            <strong>{{ normalizedMarking }}</strong>
            <p>
              Try the full product name from the chip or module. This database only returns
              documented matches.
            </p>
          </div>
        </div>
      </section>

      <section class="shell notes" aria-label="What the decoder will do">
        <article>
          <span>01</span>
          <h2>Chip or module</h2>
          <p>Keep silicon, a finished module and a development board clearly separate.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Confidence level</h2>
          <p>Distinguish an exact answer from a likely decode or an unknown suffix.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Verifiable sources</h2>
          <p>Every match will point to a datasheet or the manufacturer's documentation.</p>
        </article>
      </section>
    </main>
  </UApp>
</template>
