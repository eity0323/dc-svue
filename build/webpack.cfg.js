const path = require('path')
// const { resolve } = require('./webpack.until.js')
module.exports = {
  // 主要用于移动端的rem适配
  // px2rem:{
  //   remUni:100,
  //   remPrecision: 6
  // },
  dev: {
    assetsPublicPath: '/', // 资源公共路径
    port: 8091,
    proxy: { // 代理
      // "/api": {
      //   target: "http://localhost:3000",
      //   changeOrigin:true,
      //   pathRewrite: {"^/api" : ""}
      // }
    }
  },
  build: {
    buildSubDirectory: 'dist',// 打包输出位置 
    assetsPublicPath: './', // 也可是cdn地址
    assetsSubDirectory: 'static', // 打包后资源路径
    productionSourceMap: false  // 打包生成sourceMap
  }
}