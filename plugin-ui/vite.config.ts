import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import usePluginImport from "vite-plugin-importer";
import path from "path";
//console.log(process.env, '=????++++++++++++++++++==')
export default defineConfig(({ mode }) => {
  const baseConfig = {
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
      outDir: "/home/lijunwan/caicai/project/best/react-practice/generate-code-plugin/ui",
      // assetsDir: "../assets",
      rollupOptions: {
        input: {},
        output: {
          compact: true,
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name][extname]",
          manualChunks: () => {
            return null;
          },
        },
      },
    },
  }
  if (mode === 'form') {
    baseConfig.build.rollupOptions.input = {
      form: path.resolve(__dirname, "src/formEntry/index.html")
    }
  } else if (mode === 'list') {
    baseConfig.build.rollupOptions.input = {
      list: path.resolve(__dirname, "src/listEntry/index.html")
    }
  }
  return baseConfig;
})
