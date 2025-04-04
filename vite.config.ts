import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Cambia a '/' si el proyecto estará en la raíz del dominio
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
