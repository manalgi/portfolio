import { defineConfig, mergeConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
 const viteConfig = defineConfig({
  plugins: [react(),tsconfigPaths(),checker({
    typescript: true,
    overlay:{
      position:'br',
      initialIsOpen:'error'
    }
  }),],
  server:{
    open:true,
    port:3000
  }
})

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['json-summary', 'json', 'lcovonly'],
      reportOnFailure: true, // This will generate coverage report even if tests fail
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
      include: ['src/*/.ts', '!src/config/**'],
    },
  },
});

export default mergeConfig(viteConfig, vitestConfig);
