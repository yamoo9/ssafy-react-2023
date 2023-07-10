import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // CSS 소스맵 활성화
    // 참고: https://vitejs.dev/config/shared-options.html#css-devsourcemap
    devSourcemap: true,
  },
});
