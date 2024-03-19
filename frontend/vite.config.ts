import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import copy from "rollup-plugin-copy";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: "src/functions/**/*",
    //       dest: "functions",
    //     },
    //   ],
    // }),
    // copy({
    //   targets: [{ src: "src/functions/**/*", dest: "dist/functions" }],
    //   hook: "writeBundle",
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@studio": path.resolve(__dirname, "../studio/sanity"),
    },
  },
});
