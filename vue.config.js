module.exports = {
  devServer:{
    proxy:{
      '/api':{
        // target:'http://news-at.zhihu.com/',
        target:'http://zhihu-agent.herokuapp.com/get?api=',
        secure:false,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}