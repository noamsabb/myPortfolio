import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

  base: '/myPortfolio/',   // <-- IMPORTANT
  plugins: [react()],
  server: {open: true}
})
