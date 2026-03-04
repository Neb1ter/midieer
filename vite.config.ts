import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: path.resolve(__dirname, "../news/.vite_cache"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
