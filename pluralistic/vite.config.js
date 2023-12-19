import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  commonjsOptions: {
     esmExternals: true,
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
})

