import { writable } from "svelte/store";

export const gifIndex = writable(0);

export function changeGifIndex() {
  gifIndex.update((index) => (index + 1) % 3); // Adjust `3` to the number of GIFs you have
}
