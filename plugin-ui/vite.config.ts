import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import usePluginImport from "vite-plugin-importer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
    },
  },
  root: "./src",
  base: "/",
  plugins: [
    react(),
    usePluginImport({
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: "../dist",
    // assetsDir: "../assets",
    rollupOptions: {
      input: {
        form: path.resolve(__dirname, "src/formEntry/index.html"),
        list: path.resolve(__dirname, "src/listEntry/index.html"),
      },
      output: {
        format: "cjs",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name][extname]",
        manualChunks: () => {
          return null;
        },
      },
    },
  },
});
