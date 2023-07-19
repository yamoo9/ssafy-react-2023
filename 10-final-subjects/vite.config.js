import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { env } from 'node:process';
import { defineConfig } from 'vite';

const isDevMode = env.NODE_ENV;

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    devSourcemap: isDevMode,
    modules: {
      generateScopedName: isDevMode
        ? '[local]_[hash:base64:2]'
        : '_[hash:base64:6]',
    },
  },
});
