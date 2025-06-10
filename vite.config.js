import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return {
      plugins: [react()],
      base: '/',
    }
  } else {
    return {
      plugins: [react()],
      base: '/biobras/',
    }
  }
})
