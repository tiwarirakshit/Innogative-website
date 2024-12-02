import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Specify the port here
    host: '0.0.0.0', // Allow access from network
    open: true, // Automatically open the browser
    strictPort: true, // Fail if the port is already in use
  },
  build: {
    outDir: 'dist', // Ensure this matches your deployment setup
    rollupOptions: {
      output: {
        format: 'es',
      },
    },
  },
});