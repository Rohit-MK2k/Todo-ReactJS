import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig(({mode}) =>{
    const env = loadEnv(mode, process.cwd());
    const API_URL = `${env.VITE_PRODUCTION_SERVER ?? 'http://localhost:5000'}`;
    const PORT = `${env.VITE_PORT ?? '3000'}`;
    return {
      plugins: [react()],
      server: {
        port: PORT,
        proxy: {
          '/api':{
            target: API_URL,
            changeOrigin: true,
          }
        }
      }
    }
  }
)
// import.meta.env.VITE_SERVER_API