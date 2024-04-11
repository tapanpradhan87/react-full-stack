import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.join(__dirname, "client"),
  build: {
    outDir: path.join(__dirname, "public"),
  },
  server: {
    proxy: {
      '/api': 'http://localhost:' + process.env.PORT
    }
  }
})
