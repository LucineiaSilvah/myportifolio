// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Mantenha isso para projetos que estão na raiz
  server: {
    historyApiFallback: true, // para desenvolvimento local
  },
});
