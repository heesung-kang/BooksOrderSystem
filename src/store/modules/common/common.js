const common = {
  namespaced: true,
  state: {
    loading: false,
    windowWidth: 0,
    mobile: false,
    skeletonLoading: false,
    cartList: 0,
  },
  getters: {
    loading: state => {
      return state.loading;
    },
    skeletonLoading: state => {
      return state.skeletonLoading;
    },
    windowWidth: state => {
      return state.windowWidth;
    },
    mobile: state => {
      return state.mobile;
    },
    cartList: state => {
      return state.cartList;
    },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setSkeleton(state, payload) {
      state.skeletonLoading = payload;
    },
    setWindowWidth(state, payload) {
      state.windowWidth = payload;
    },
    setDeviceStatus(state, payload) {
      state.mobile = payload;
    },
    changeCartList(state, payload) {
      state.cartList = payload;
    },
  },
  actions: {},
};

export default common;
