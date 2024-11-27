import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
        jsxImportSource: "@emotion/react",
        babel: {
            plugins: ["@emotion/babel-plugin"],
        },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // '@'를 src로 매핑
    },
  },
});
