import { createStore } from "vuex";

export default createStore({
  state: {
    favoriteBrewery: 'Magnolia',
  },
  // will be important in next Vuex to use actions
  mutations: {
    setFavoriteBrewery(state, payload) {
      state.favoriteBrewery = payload;
    }
  },
  actions: {},
  modules: {},
});
