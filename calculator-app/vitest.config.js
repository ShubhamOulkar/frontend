/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    reporters: ["default", "html"],
    outputFile: {
      html: "./test-report/report.html",
    },
    setupFiles: "test/setup.js",
    coverage: {
      provider: "v8",
      enabled: true,
      // include: "./src",
      // reporter: ["text", "html"],
      reportsDirectory: "./test-report/coverage",
      thresholds: {
        lines: 60,
        branches: 60,
        functions: 60,
        statements: 60,
      },
    },
    reportOnFailure: true,
  },
});
