import { defineConfig } from 'vite'

export default defineConfig({
  // Relative asset paths keep one build usable for both
  // repo-based GitHub Pages and a custom domain root.
  base: './',
  build: {
    outDir: 'dist',
  },
})
