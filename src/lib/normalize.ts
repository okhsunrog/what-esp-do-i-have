/**
 * Markings are read off silkscreen, so accept whatever the user typed: any case,
 * any separator (hyphen, en dash, underscore, space), and stray whitespace.
 */
export function normalize(input: string): string {
  return input
    .toUpperCase()
    .replace(/[‐-―−]/g, "-")
    .replace(/[^A-Z0-9]/g, "");
}

/** Collapse whitespace but keep separators, for echoing the input back. */
export function tidy(input: string): string {
  return input.trim().replace(/\s+/g, " ");
}
