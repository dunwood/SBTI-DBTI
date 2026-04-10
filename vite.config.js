import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      input: {
        index:          resolve(__dirname, 'index.html'),
        'self-test':    resolve(__dirname, 'self-test.html'),
        'other-test':   resolve(__dirname, 'other-test.html'),
        'result-other': resolve(__dirname, 'result-other.html'),
        compare:        resolve(__dirname, 'compare.html'),
      },
    },
  },
})
