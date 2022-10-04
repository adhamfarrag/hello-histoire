import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import { HstNuxt } from '@histoire/plugin-nuxt';

export default defineNuxtConfig({
  plugins: [HstVue(), HstNuxt()],
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],
});
