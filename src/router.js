import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Article from '@/views/article.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/article',
      component:Article
    }
    
  ]
})
