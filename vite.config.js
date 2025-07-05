import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: `/workflow-action/`,  // 设置部署基础路径
  plugins: [vue()],       // 使用 Vue 插件
  build: {                // 构建配置
    outDir: 'dist',       // 输出到 dist 目录
    assetsDir: 'static',  // 静态资源放在 static 子目录
    sourcemap: false,     // 不生成 source map

  }
});

