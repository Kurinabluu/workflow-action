import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const repoName = 'your-repo-name'; // 替换为实际仓库名

module.exports = {
  publicPath: `/${repoName}/`,  // 核心配置！
  outputDir: 'dist',           // 构建输出目录
  assetsDir: 'static',         // 静态资源目录
  productionSourceMap: false   // 禁用 source map
}
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
