/*
 * @Author: Tmier
 * @Date: 2023-08-30 22:48:31
 * @LastEditTime: 2023-09-05 23:22:14
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
