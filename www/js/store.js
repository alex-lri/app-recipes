

var createStore = Framework7.createStore;
const store = createStore({
  state: {
    categories: [],
    favoriteRecipes: [],
  },
  getters: {
    categories({ state }) {
      return state.categories;
    },
    favoriteRecipes({ state }) {
      return state.favoriteRecipes;
    },
  },
  actions: {
    addCategory({ state }, category) {
      state.categories = [...state.categories, category];
    },
  },
})

