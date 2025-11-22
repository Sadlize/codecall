import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { reactRouter } from '@react-router/dev/vite';

import { APP_PORT, SERVER_PROXY } from '../env';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), reactRouter()],
  envPrefix: 'PUBLIC_',
  envDir: '../',
  server: {
    port: APP_PORT,
    proxy: {
      '/api': {
        target: SERVER_PROXY,
        changeOrigin: true,
      },
    },
  },
});
