import { createStore } from "vuex";

export default createStore({
  state: {
    //If Dark mode
    isDark: false,
  },
  mutations: {
    updateTheme(state, payload) {
      //Set theme in store
      state.isDark = payload;
    },
  },
  actions: {
    tryUpdate({ commit }, payload) {
      //Commit theme to mutation.
      commit("updateTheme", payload);
    },
  },
  modules: {},
});
