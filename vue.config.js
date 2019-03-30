// const path = require('path')
module.exports = {
  // chainWebpack: config =>{
  //   config.resolve.alias
  //     .set('@',path.resolve('examples'))
  //     .set('~',path.resolve('packages'))
  // },
  devServer:{
    proxy:{
      '/api':{
        target:'https://news-at.zhihu.com',
        // secure:true,
        changeOrigin:true,
        // ws:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}