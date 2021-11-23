

var createStore = Framework7.createStore;
const store = createStore({
  state: {
    categories: [],
  },
  getters: {
    categories({ state }) {
      return state.categories;
    },
  },
  actions: {
    addCategory({ state }, category) {
      state.categories = [...state.categories, category];
    },
  },
})

