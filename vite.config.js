import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Quant-firefly/',
  define: {
    'process.env': {},
  },
  build: {
    target: 'esnext',
  },
});
