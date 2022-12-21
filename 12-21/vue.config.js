const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
	lintOnSave: false,//关闭语法检查
  transpileDependencies: true,
  outputDir:"dist",
	assetsDir:'assets',
  devServer: {
    port: "1024",
    host: "localhost",
    open: true
  }
})
