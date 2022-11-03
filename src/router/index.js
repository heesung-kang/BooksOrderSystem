import Vue from "vue";
import VueRouter from "vue-router";
const lnb = () => import("@/components/common/Lnb.vue");
const footer = () => import("@/components/common/Footer.vue");

Vue.use(VueRouter);
const key = process.env.VUE_APP_FIREBASE_APP_KEY;
const router = new VueRouter({
  //mode: "history",
  //key: process.env.VUE_APP_FIREBASE_APP_KEY,
  routes: [
    {
      path: "/",
      redirect: "/SearchOrder",
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: () => import("@/views/login/SignUp.vue"),
      meta: { unauthorized: true },
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("@/views/login/Login.vue"),
      meta: { unauthorized: true },
    },
    {
      path: "/FindPw",
      name: "FindPw",
      component: () => import("@/views/login/FindPw.vue"),
      meta: { unauthorized: true },
    },
    {
      path: "/SearchOrder",
      name: "SearchOrder",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/order/SearchOrder.vue"),
      },
    },
    {
      path: "/Cart",
      name: "Cart",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/cart/Cart.vue"),
      },
      meta: { unauthorized: true },
    },
    {
      path: "/OrderList",
      name: "OrderList",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/order/OrderList.vue"),
      },
    },
    {
      path: "/OrderResult/:id/:date/:orderTimeId/:publisher",
      name: "OrderResult",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/order/OrderResult.vue"),
      },
    },
    {
      path: "/ReleaseList",
      name: "ReleaseList",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/release/ReleaseList.vue"),
      },
    },
    {
      path: "/ReleaseStatus/:id/:date/:orderRealTimeId/:publisher",
      name: "ReleaseStatus",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/release/ReleaseStatus.vue"),
      },
    },
    {
      path: "/ShopInfo",
      name: "ShopInfo",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/mypage/ShopInfo.vue"),
      },
    },
    //404
    {
      path: "*",
      name: "pageNotFound",
      component: () => import("@/views/error/NotFoundPage.vue"),
      meta: { unauthorized: true },
    },
  ],
});

//router guard
router.beforeEach(async (to, from, next) => {
  const session = JSON.parse(sessionStorage.getItem(`firebase:authUser:${key}:[DEFAULT]`));
  //session 있거나 로그인 필요 없는 페이지
  if (to.matched.some(record => record.meta.unauthorized) || session) {
    return next();
  }

  //session  없을 경우
  return next("/login");
});

export default router;
