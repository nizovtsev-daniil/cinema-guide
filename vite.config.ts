import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cinema-guide',
  plugins: [svgr(), react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@api',
        replacement: fileURLToPath(new URL('./src/api', import.meta.url)),
      },
      {
        find: '@image',
        replacement: fileURLToPath(
          new URL('./src/assets/image', import.meta.url)
        ),
      },
      {
        find: '@svg',
        replacement: fileURLToPath(
          new URL('./src/assets/svg', import.meta.url)
        ),
      },
      {
        find: '@components',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url)
        ),
      },
      {
        find: '@hooks',
        replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)),
      },
      {
        find: '@context',
        replacement: fileURLToPath(new URL('./src/context', import.meta.url)),
      },
      {
        find: '@pages',
        replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
      },
      {
        find: '@type',
        replacement: fileURLToPath(new URL('./src/type', import.meta.url)),
      },
      {
        find: '@utils',
        replacement: fileURLToPath(new URL('./src/utils', import.meta.url)),
      },
    ],
  },
});
