import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$http = '/api'
// Vue.prototype.$store = store
// 设置axios请求的token
// axios.defaults.headers.common['token'] = 'f4c902c9ae5a2a9d8f84868ad064e706'
//设置请求头
// axios.defaults.headers.post["Content-type"] = "application/json"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
