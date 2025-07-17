/// <reference types='vitest' />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "@svgr/rollup";

export default defineConfig(() => ({
  base: "/admin",
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/ebs-internship-dashboard",
  server: {
    port: 4200,
    host: "localhost",
  },
  preview: {
    port: 4300,
    host: "localhost",
  },
  plugins: [
    react(),
    svgr({
      icon: true,
      svgo: true,
      svgProps: {
        fill: "currentColor",
        stroke: "currentColor",
        width: "24",
        height: "24",
      },
      svgoConfig: {
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: ["fill", "stroke"],
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@libs": path.resolve(__dirname, "../../libs/src"),
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
