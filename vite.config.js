import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ispatecprojet/', // Chemin de base pour GitHub Pages
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'antd'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Augmentation de la limite d'avertissement de taille des chunks
  },
})
