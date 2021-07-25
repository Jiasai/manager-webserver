import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //添加配置IP，解决“vite use `--host` to expose”
  server:{
    port:"8081",
    host:"0.0.0.0"
  }
})
