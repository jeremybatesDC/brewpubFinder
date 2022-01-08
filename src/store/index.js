import { createStore } from "vuex";

export default createStore({
  state: {
    favoriteBrewery: 'Magnolia',
    isDarkMode: false,
  },
  // will be important in next Vuex to use actions
  mutations: {
    setFavoriteBrewery(state, payload) {
      state.favoriteBrewery = payload;
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    }
  },
  actions: {},
  // can create a UI module for things like isDarkMode or navIsOpen
  modules: {},
});
