import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// Konversi import.meta.url ke __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
