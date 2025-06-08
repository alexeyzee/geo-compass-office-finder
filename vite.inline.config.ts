
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'inline-dist',
    rollupOptions: {
      input: './src/inline.tsx',
      output: {
        entryFileNames: 'office-locator.js',
        chunkFileNames: 'chunk-[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    lib: {
      entry: './src/inline.tsx',
      name: 'OfficeLocator',
      formats: ['iife'],
      fileName: 'office-locator'
    },
    cssCodeSplit: false,
    minify: true
  }
});
