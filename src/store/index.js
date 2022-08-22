import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
  },
  actions: {},
  modules: {},
});
