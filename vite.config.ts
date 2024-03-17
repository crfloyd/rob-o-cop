import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "src/functions/**/*", dest: "dist/functions" }],
      hook: "writeBundle",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
