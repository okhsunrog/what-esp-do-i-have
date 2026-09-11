<script setup lang="ts">
import { computed, ref } from "vue";
import { devBoards } from "../data/boards";
import { moduleFamilies } from "../data/modules";
import { socParts } from "../data/socs";
import { normalize } from "../lib/normalize";

const emit = defineEmits<{ pick: [value: string] }>();

const query = ref("");
const tab = ref<"soc" | "module" | "board">("module");

const key = computed(() => normalize(query.value));

const socGroups = computed(() => {
  const groups = new Map<string, typeof socParts>();
  for (const part of socParts) {
    if (key.value && !normalize(part.partNumber).includes(key.value)) continue;
    const list = groups.get(part.family) ?? [];
    list.push(part);
    groups.set(part.family, list);
  }
  return [...groups];
});

const boardGroups = computed(() => {
  const groups = new Map<string, typeof devBoards>();
  for (const board of devBoards) {
    if (key.value && !normalize(board.name + board.vendor).includes(key.value)) continue;
    const list = groups.get(board.vendor) ?? [];
    list.push(board);
    groups.set(board.vendor, list);
  }
  return [...groups].sort((a, b) => b[1].length - a[1].length);
});

const moduleGroups = computed(() =>
  moduleFamilies
    .map((family) => ({
      family,
      parts: family.parts.filter((p) => !key.value || normalize(p.partNumber).includes(key.value)),
    }))
    .filter(
      ({ family, parts }) =>
        parts.length > 0 ||
        (!key.value && family.parts.length === 0) ||
        (key.value && normalize(family.name).includes(key.value)),
    ),
);
</script>

<template>
  <section class="shell catalog" aria-labelledby="catalog-heading">
    <div class="catalog-head">
      <h2 id="catalog-heading">Browse the catalog</h2>
      <div class="catalog-controls">
        <div class="tabs" role="tablist">
          <button
            type="button"
            role="tab"
            :aria-selected="tab === 'module'"
            @click="tab = 'module'"
          >
            Modules
          </button>
          <button type="button" role="tab" :aria-selected="tab === 'soc'" @click="tab = 'soc'">
            SoCs
          </button>
          <button type="button" role="tab" :aria-selected="tab === 'board'" @click="tab = 'board'">
            Dev boards
          </button>
        </div>
        <UInput
          v-model="query"
          placeholder="Filter part numbers"
          size="md"
          autocomplete="off"
          class="catalog-filter"
        />
      </div>
    </div>

    <div v-if="tab === 'module'" class="groups">
      <section v-for="{ family, parts } in moduleGroups" :key="family.name" class="group">
        <header>
          <button type="button" class="group-name" @click="emit('pick', family.name)">
            {{ family.name }}
          </button>
          <span class="group-meta">{{ family.socFamily }} · {{ family.antenna ?? "—" }}</span>
        </header>
        <div v-if="parts.length" class="chips">
          <button
            v-for="p in parts"
            :key="p.partNumber"
            type="button"
            :data-lifecycle="p.lifecycle"
            @click="emit('pick', p.partNumber)"
          >
            {{ p.partNumber.slice(family.name.length + 1) || p.partNumber }}
          </button>
        </div>
        <p v-else class="group-empty">No ordering codes published yet.</p>
      </section>
    </div>

    <div v-else-if="tab === 'board'" class="groups">
      <section v-for="[vendor, list] in boardGroups" :key="vendor" class="group">
        <header>
          <span class="group-name group-name-static">{{ vendor }}</span>
          <span class="group-meta">{{ list.length }} board{{ list.length > 1 ? "s" : "" }}</span>
        </header>
        <div class="chips">
          <button
            v-for="b in list"
            :key="b.name"
            type="button"
            :title="`${b.family}${b.flashMb ? ` · ${b.flashMb} MB flash` : ''}`"
            @click="emit('pick', b.name)"
          >
            {{ b.name }}
          </button>
        </div>
      </section>
    </div>

    <div v-else class="groups">
      <section v-for="[family, parts] in socGroups" :key="family" class="group">
        <header>
          <span class="group-name group-name-static">{{ family }}</span>
          <span class="group-meta">{{ parts[0].description }}</span>
        </header>
        <div class="chips">
          <button
            v-for="p in parts"
            :key="p.partNumber"
            type="button"
            :data-lifecycle="p.lifecycle"
            @click="emit('pick', p.partNumber)"
          >
            {{ p.partNumber }}
          </button>
        </div>
      </section>
    </div>
  </section>
</template>
