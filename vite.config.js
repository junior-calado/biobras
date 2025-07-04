import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: '/biobras/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
