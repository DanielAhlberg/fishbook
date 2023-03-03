import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = '';
const initialValue = browser ? localStorage.getItem('fishes') ?? defaultValue : defaultValue;

export const fishes = writable(initialValue);

fishes.subscribe((value) => {
    if (browser) {
        localStorage.setItem('fishes', value);
    }
});