import { getRestaurantsList } from '@/api/data'
const auth = {
  namespaced: true,
  state: {
    RestaurantsList: []
  },
  mutations: {
    updateRestaurantsList (state, RestaurantsList) {
      state.RestaurantsList = RestaurantsList
    }
  },
  actions: {
    actionSetRestaurantsList ({ commit }) {
      return new Promise((resolve, reject) => {
        getRestaurantsList()
          .then(data => {
            commit('updateRestaurantsList', data.Restaurants)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {

  }
}

export default auth
