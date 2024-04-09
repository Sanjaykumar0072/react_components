import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    rollupOptions: {
      // Generate a legacy bundle (CommonJS format)
      output: {
        format: 'cjs',
        entryFileNames: 'index.js', // Specify the output file name
      },
    },
  },
});
