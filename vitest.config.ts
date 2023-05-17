/* eslint-disable quotes */
/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    root: 'src',
    globals: true,
    environment: "jsdom",
    setupFiles: ["../.test/setup.ts"],
    include: ["**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
  },
});
