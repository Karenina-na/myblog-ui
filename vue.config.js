const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // publicPath: "../../",
  publicPath: "./",
  transpileDependencies: true,
  outputDir: process.env.outputDir,     //读取目录下的.env.环境文件

  //配置开发环境的代理
  devServer: {
    port: 8080,
    host: "localhost",
    https: false,
    open: true,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

})
