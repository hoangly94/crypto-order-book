import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";
// import { defineConfig, loadEnv } from 'vite';
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const isServeMode = command === "serve";
  if (isServeMode) {
    const dotenvFile = ".env";
    const isEnvSetup = existsSync(dotenvFile);
    if (!isEnvSetup) {
      console.log(".env is not setup setting up");
      copyFileSync(`${dotenvFile}.example`, dotenvFile);
    }
  }
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // const env = loadEnv(mode, process.cwd(), '');
  return {
    // vite config
    define: {},
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 3000,
    },
  };
});
