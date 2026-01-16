import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change this to './' to ensure paths are relative, 
  // or '/' if you are hosting at the root of your domain.
  base: '/', 
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    // This ensures your assets are organized neatly in the dist folder
    outDir: 'dist',
    assetsDir: 'assets',
  }
});