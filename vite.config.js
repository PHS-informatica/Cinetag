// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: { rollupOptions: { external: ['react', 'react-router-dom'], output: { globals: { react: 'React', 'react-router-dom': 'ReactRouterDOM' } } } }
});