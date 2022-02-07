import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { resolve } = require('path') //必须要引入resolve 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') //把src改为@
    }
  },
  server: {
    port: 4444,
  }
})
