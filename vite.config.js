import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/tlalocan/',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        media: resolve(__dirname, 'media.html')
      },
    },
  },
});