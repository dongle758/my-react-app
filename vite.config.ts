// vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // 导入 path 模块

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // 添加路径别名
            "@": path.resolve(__dirname, "./src"),
        },
    },
})