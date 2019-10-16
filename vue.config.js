const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  outputDir: "dist",
  assetsDir: "assets",
  productionSourceMap: true,
  devServer: {
    proxy: {
      '/apis': {
        target: 'https://test1meeting.yuyankeji.cn/',
        changeOrigin: true,  //是否跨域
        pathRewrite: {'^/apis' : ''}, //重定向
        secure: false
      },
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('/src/components'))
  },
  // chainWebpack: config => {
  //   // 移除 prefetch 插件
  //   config.plugins.delete('prefetch')
  //   // 移除 preload 插件
  //   config.plugins.delete('preload');
  // }
}