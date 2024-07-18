import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   base: 'http://0.0.0.0:5173/'
  plugins: [react()],
});
