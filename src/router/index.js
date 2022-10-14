import Vue from "vue";
import VueRouter from "vue-router";

const lnb = () => import("@/components/common/Lnb.vue");
const top = () => import("@/components/common/Gnb.vue");
const footer = () => import("@/components/common/Footer.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  //mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/SearchOrder",
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("@/views/login/Login.vue"),
      meta: { unauthorized: true },
    },
    {
      path: "/SearchOrder",
      name: "SearchOrder",
      components: {
        top,
        lnb,
        footer,
        contents: () => import("@/views/order/SearchOrder.vue"),
      },
      meta: { unauthorized: true },
    },
    {
      path: "/Cart",
      name: "Cart",
      components: {
        top,
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
        top,
        lnb,
        footer,
        contents: () => import("@/views/order/OrderList.vue"),
      },
      meta: { unauthorized: true },
    },
    {
      path: "/OrderResult",
      name: "OrderResult",
      components: {
        top,
        lnb,
        footer,
        contents: () => import("@/views/order/OrderResult.vue"),
      },
      meta: { unauthorized: true },
    },
    {
      path: "/Pay",
      name: "Pay",
      components: {
        top,
        lnb,
        footer,
        contents: () => import("@/views/order/Pay.vue"),
      },
      meta: { unauthorized: true },
    },
    {
      path: "/ReleaseList",
      name: "ReleaseList",
      components: {
        top,
        lnb,
        footer,
        contents: () => import("@/views/release/ReleaseList.vue"),
      },
      meta: { unauthorized: true },
    },
    {
      path: "/ReleaseStatus",
      name: "ReleaseStatus",
      components: {
        top,
        lnb,
        footer,
        contents: () => import("@/views/release/ReleaseStatus.vue"),
      },
      meta: { unauthorized: true },
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

//router guard 숨김처리
// router.beforeEach(async (to, from, next) => {
//   //액세스 토큰이 있을 경우
//   if (getAccessTokenCookie() !== null) {
//     return next();
//   }
//
//   //로그인 필요 없는 페이지
//   if (to.matched.some(record => record.meta.unauthorized) || getAccessTokenCookie()) {
//     return next();
//   }
//
//   //액세스 토큰이 없을 경우
//   return next("/login");
// });

export default router;
