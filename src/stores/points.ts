import { writable, type Writable } from 'svelte/store';

export const points: Writable<number> = writable(0);
