import { getRestaurantsList, postRestaurant } from '@/api/data'
const auth = {
  namespaced: true,
  state: {
    RestaurantsList: []
  },
  mutations: {
    updateRestaurantsList (state, RestaurantsList) {
      state.RestaurantsList = RestaurantsList
    },
    addRestaurant (state, Restaurant) {
      state.RestaurantsList = state.RestaurantsList.concat(Restaurant)
    //   [].push.apply(state.building.panoramas, panoramas);
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
    },
    actionAddRestaurant ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        postRestaurant(payload)
            .then(data => {
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
