import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.?(c|m)[jt]s?(x)'],
    setupFiles: ['src/tests/helpers/setup.ts']
  },
})