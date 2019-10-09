module.exports = {
  lintOnSave: false,
  outputDir: "dist",
  assetsDir: "assets",
  productionSourceMap: true,
  devServer: {
    proxy: {
      '/apis': {
        target: 'https://adminwisdom.yuyankeji.cn/',
        changeOrigin: true,  //是否跨域
        pathRewrite: {'^/apis' : ''}, //重定向
        secure: false
      },
    }
  },
  // chainWebpack: config => {
  //   // 移除 prefetch 插件
  //   config.plugins.delete('prefetch')
  //   // 移除 preload 插件
  //   config.plugins.delete('preload');
  // }
}