/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup-tests.ts",
    css: false,
    coverage: {
      include: ["src/**/*.ts"],
    },
  },
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
