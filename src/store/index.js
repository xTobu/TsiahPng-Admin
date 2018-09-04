import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import data from './modules/data'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    data
  },
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
