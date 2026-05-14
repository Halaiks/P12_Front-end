import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration de Vite pour le projet React, le plugin React est utilisé pour permettre le support de JSX et d'autres fonctionnalités spécifiques à React.
export default defineConfig({
  plugins: [react()],
})
