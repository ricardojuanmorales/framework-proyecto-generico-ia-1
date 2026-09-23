import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const deploymentBase = process.env.FRAMEWORK_V5_BASE_PATH ?? "/";

export default defineConfig({
  base: deploymentBase,
  plugins: [react()],
  build: { outDir: "dist", sourcemap: false }
});
