/// <reference types='vitest' />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/ebs-internship",
  server: {
    port: 4200,
    host: "localhost",
    proxy: {
      "/api": {
        target: "https://demo.api.s.wellms.io",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    port: 4300,
    host: "localhost",
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@libs": path.resolve(__dirname, "../../libs/src")
    },
  },
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
