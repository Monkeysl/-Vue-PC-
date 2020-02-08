const path = require('path')

module.exports = {
  // publicPath: 'http://fe.gp12.cn:8088',
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://xmall.exrick.cn',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        api: path.resolve(__dirname, './src/api'),
        assets: path.resolve(__dirname, './src/assets'),
        common: path.resolve(__dirname, './src/common'),
        components: path.resolve(__dirname, './src/components'),
        page: path.resolve(__dirname, './src/page'),
        utils: path.resolve(__dirname, './src/utils'),
        static: path.resolve(__dirname, './static')
      }
    }
  }
}