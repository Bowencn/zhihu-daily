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
        // target:'http://news-at.zhihu.com/',
        target:'http://zhihu-agent.herokuapp.com/get?api=',
        secure:false,
        changeOrigin:true,
        // ws:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}