import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

console.log(path.resolve(__dirname, './src'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: '[name]_[local]__[hash:base64:5]',
    },
  },
});
