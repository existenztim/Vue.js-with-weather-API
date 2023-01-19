/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vue.js-with-weather-API/',
  plugins: [vue()],
  define: {
    'process.env': {},
  },
});
