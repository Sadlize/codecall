import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { reactRouter } from '@react-router/dev/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react(), reactRouter()],
  envPrefix: 'PUBLIC_',
});
