import { defineConfig } from "vite";
import path from 'path';
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
        jsxImportSource: "@emotion/react",
        babel: {
            plugins: ["@emotion/babel-plugin"],
        },
    }),
  ],
  optimizeDeps: {
    include: ["@chakra-ui/react", "@emotion/react", "@emotion/styled", "framer-motion"],
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
