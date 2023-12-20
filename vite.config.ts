/*
 * @Author: Tmier
 * @Date: 2023-08-30 22:48:31
 * @LastEditTime: 2023-12-20 20:56:17
 * @LastEditors: Tmier
 * @Description:
 *
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    // port: 3699,
    proxy: {
      '/api': 'http://api-driver.marsview.cc'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
