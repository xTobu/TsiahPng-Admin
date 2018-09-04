import { login } from '@/api/login'
import { setToken, getToken } from '@/utils/auth'
const auth = {
  namespaced: true,
  state: {
    token: ''
  },
  mutations: {
    updateToken (state, token) {
      state.token = token
    }
  },
  actions: {
    actionLogin ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo.username.trim(), userInfo.password)
          .then(data => {
            setToken(data.token)
            commit('updateToken', data.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    actionSetToken (context, payload) {
      context.commit('updateToken', payload.token)
      setToken(payload.token)
    }
  },
  getters: {
    getToken: state => {
      return state.token
    }
  }
}

export default auth
