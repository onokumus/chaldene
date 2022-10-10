import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://onokumus.github.io',
    base: '/chaldene/',
    build: {
        format: 'file'
    }
});
