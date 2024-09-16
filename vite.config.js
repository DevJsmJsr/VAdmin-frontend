import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~assets': path.resolve(__dirname, './src/assets'),
      '~components': path.resolve(__dirname, './src/components'),
      '~constants': path.resolve(__dirname, './src/constants'),
      '~hooks': path.resolve(__dirname, './src/hooks'),
      '~i18n': path.resolve(__dirname, './src/i18n'),
      '~layouts': path.resolve(__dirname, './src/layouts'),
      '~mocks': path.resolve(__dirname, './src/mocks'),
      '~pages': path.resolve(__dirname, './src/pages'),
      '~routes': path.resolve(__dirname, './src/routes'),
      '~types': path.resolve(__dirname, './src/types'),
      '~utils': path.resolve(__dirname, './src/utils'),
      '~store': path.resolve(__dirname, './src/store')
    }
  },
  server: { port: 3000, host: true },
  test: {
    exclude: ['**/node_modules/**'],
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/testSetup.ts'
  },
  build: {
    outDir: './build/',
    emptyOutDir: true,
    sourcemap: import.meta.env?.MODE === 'development' ? false : true
  }
});
