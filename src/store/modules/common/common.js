const common = {
  namespaced: true,
  state: {
    loading: false,
    windowWidth: 0,
    mobile: false,
  },
  getters: {
    loading: state => {
      return state.loading;
    },
    windowWidth: state => {
      return state.windowWidth;
    },
    mobile: state => {
      return state.mobile;
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setWindowWidth(state, payload) {
      state.windowWidth = payload;
    },
    setDeviceStatus(state, payload) {
      state.mobile = payload;
    },
  },
  actions: {},
};

export default common;
