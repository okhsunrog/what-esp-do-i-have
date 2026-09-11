import { moduleFamilies } from "../data/modules";
import { socParts } from "../data/socs";
import type { ModuleFamily, ModulePart, SocPart } from "../data/types";
import { normalize } from "./normalize";

export interface ModuleHit {
  family: ModuleFamily;
  part: ModulePart;
}

/** Alternative spellings Espressif itself uses for the same silicon. */
const socAliases: Record<string, string[]> = {
  "ESP32-C2": ["ESP8684"],
  "ESP32-C3": ["ESP8685"],
};

function aliasKeys(part: SocPart): string[] {
  const keys = [part.partNumber];
  for (const [family, names] of Object.entries(socAliases)) {
    if (part.family !== family) continue;
    for (const alias of names) {
      if (part.partNumber.startsWith(alias)) continue;
      keys.push(part.partNumber.replace(family, alias));
    }
  }
  return keys;
}

export const socIndex = new Map<string, SocPart>();
for (const part of socParts) {
  for (const key of aliasKeys(part)) socIndex.set(normalize(key), part);
}

export const modulePartIndex = new Map<string, ModuleHit>();
export const moduleFamilyIndex = new Map<string, ModuleFamily>();
for (const family of moduleFamilies) {
  moduleFamilyIndex.set(normalize(family.name), family);
  for (const part of family.parts) {
    modulePartIndex.set(normalize(part.partNumber), { family, part });
  }
}

export const allModuleParts: ModuleHit[] = moduleFamilies.flatMap((family) =>
  family.parts.map((part) => ({ family, part })),
);

export const counts = {
  socParts: socParts.length,
  moduleFamilies: moduleFamilies.length,
  moduleParts: allModuleParts.length,
  socFamilies: new Set(socParts.map((p) => p.family)).size,
};

export function socByPartNumber(partNumber: string): SocPart | undefined {
  return socIndex.get(normalize(partNumber));
}

/**
 * Longest module family whose name prefixes the normalized input, so that
 * `ESP32-C6-WROOM-1-N8` resolves to `ESP32-C6-WROOM-1` and not to a shorter name.
 */
export function longestFamilyPrefix(key: string): ModuleFamily | undefined {
  let best: ModuleFamily | undefined;
  let bestLength = 0;
  for (const [name, family] of moduleFamilyIndex) {
    if (key.startsWith(name) && name.length > bestLength) {
      best = family;
      bestLength = name.length;
    }
  }
  return best;
}

/** Catalog entries whose normalized name contains the query, for suggestions. */
export function search(query: string, limit = 8): (SocPart | ModuleHit)[] {
  const key = normalize(query);
  if (key.length < 3) return [];
  const hits: (SocPart | ModuleHit)[] = [];
  for (const [name, part] of socIndex) {
    if (name.includes(key)) hits.push(part);
  }
  for (const [name, hit] of modulePartIndex) {
    if (name.includes(key)) hits.push(hit);
  }
  return hits.slice(0, limit);
}
