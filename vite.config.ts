import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { pxToViewport } from './plugins/pxto-viewport'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    postcss: {
      plugins: [
        pxToViewport()
      ]
    },
    preprocessorOptions: {
      less: {
        math: "always", // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          mainColor: "pink",
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    host: '0.0.0.0',
  }
})

// devServer: { // 环境配置
//   host: '0.0.0.0',
//   // public: '192.168.1.2:8080', // 此处是自己电脑IP地址！
//   // port: '8080',
//   // https: false,
//   // disableHostCheck: true,
//   open: false // 配置自动启动浏览器
// }
