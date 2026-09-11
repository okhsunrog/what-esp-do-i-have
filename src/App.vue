<script setup lang="ts">
import { computed, ref } from "vue";

const marking = ref("");
const submitted = ref(false);

const normalizedMarking = computed(() => marking.value.trim().toUpperCase().replace(/\s+/g, " "));

function decode() {
  submitted.value = normalizedMarking.value.length > 0;
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

        <div v-if="submitted" class="result" role="status">
          <UIcon name="i-lucide-flask-conical" class="result-icon" />
          <div>
            <strong>{{ normalizedMarking }}</strong>
            <p>
              The matching database is still being assembled. Your marking remains in the search
              field.
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
