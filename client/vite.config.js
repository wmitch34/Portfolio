import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const env_host = import.meta.env.VITE_CONFIG_HOST;
const env_port = import.meta.env.VITE_CONFIG_PORT;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: env_host,
    port: env_port,
  },
  build: {
    assetsDir: "assets",
  },
});
