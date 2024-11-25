import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'; // __dirname 대체

// __dirname 대체
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Vite 설정
export default defineConfig({
  server: {
    host: '0.0.0.0', // 모든 IP 주소에서 접근 가능하게 설정
    port: 5173, // 기본 포트 설정

  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
  
})
