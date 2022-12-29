const { defineConfig } = require("@vue/cli-service")
const webpack = require("webpack")
module.exports = defineConfig({
  lintOnSave: false, //关闭语法检查
  transpileDependencies: true,
  outputDir: "dist",
  // assetspublicpath:'./',
  assetsDir: "assets",
  devServer: {
    port: "1024",
    host: "localhost",
    open: true,
    proxy: {
      "/api": {
        // 默认开启代理模式
        changeOrigin: true,
        // 如果是http接口,需要配置该参数
        secure: false,
        // 代理的地址
        target: "http://localhost:1024/www.yoop.com.cn/data-1528971808162-BkOXf61WX.json",
        // 路径的重命名
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      })
    ]
  }
})
