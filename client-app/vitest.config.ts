import { defineConfig } from 'vitest/config';
import { alias } from './vite.config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.tsx'],
  },
  resolve: {
    alias,
  },
});