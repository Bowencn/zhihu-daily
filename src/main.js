import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$http = '/api'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
