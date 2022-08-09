import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    solidPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '~': resolve(__dirname, './src'),
    },
  },
  build: {
    target: "esnext",
  },
})
