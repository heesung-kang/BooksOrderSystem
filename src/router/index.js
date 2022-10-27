import Vue from "vue";
import VueRouter from "vue-router";
import { getCookie } from "@/utils/cookie";
const lnb = () => import("@/components/common/Lnb.vue");
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
      path: "/SignUp",
      name: "SignUp",
      component: () => import("@/views/login/SignUp.vue"),
      meta: { unauthorized: true },
    },
    {
      path: "/SignUpAdmin",
      name: "SignUpAdmin",
      component: () => import("@/views/login/SignUpAdmin.vue"),
      meta: { unauthorized: true },
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
      path: "/OrderResult",
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
      path: "/ReleaseStatus",
      name: "ReleaseStatus",
      components: {
        lnb,
        footer,
        contents: () => import("@/views/release/ReleaseStatus.vue"),
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
  //액세스 토큰이 있을 경우
  if (getCookie("accessToken") !== null) {
    return next();
  }

  //로그인 필요 없는 페이지
  if (to.matched.some(record => record.meta.unauthorized) || getCookie("accessToken")) {
    return next();
  }

  //액세스 토큰이 없을 경우
  return next("/login");
});

export default router;
