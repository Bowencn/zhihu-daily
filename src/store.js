import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status:0,
    id:{},
    article:{},
    loading: true
  },
  mutations: {
    show(state){
      state.loading = true
    },
    hide(state){
      state.loading = false
    }
  },
  actions: {
    
  },
  getters:{
    
  }
})
