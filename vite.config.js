import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

const BACKEND_PORT = process.env.PORT;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${BACKEND_PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist/app',
  },
  publicDir: 'src/app/assets',
});
