
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
    lib: {
      entry: path.resolve(__dirname, 'src/widget.tsx'),
      name: 'OfficeLocatorWidget',
      fileName: 'office-locator-widget',
      formats: ['iife']
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: 'office-locator-widget.[ext]'
      }
    },
    outDir: 'widget-dist',
    emptyOutDir: true,
    cssCodeSplit: false,
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});
