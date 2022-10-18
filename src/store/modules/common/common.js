const common = {
  namespaced: true,
  state: {
    loading: false,
    windowWidth: 0,
  },
  getters: {
    loading: state => {
      return state.loading;
    },
    windowWidth: state => {
      return state.windowWidth;
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setWindowWidth(state, payload) {
      state.windowWidth = payload;
    },
  },
  actions: {},
};

export default common;
