<template>
  <section class="lnb-wrap">
    <aside class="side-bar" :class="{ active: isActive }">
      <div class="pt26 logo"><img src="@/assets/images/logo.svg" alt="instaPay" /></div>
      <div class="system-name">서점용 도서 주문 시스템</div>
      <nav class="lnb">
        {{ activeStatus }}
        <ul @click="close">
          <li :class="{ active: activeStatus === 1 }"><router-link to="/SearchOrder">책 검색</router-link></li>
          <li :class="{ active: activeStatus === 2 }"><router-link to="/Cart">장바구니</router-link></li>
          <li :class="{ active: activeStatus === 3 }"><router-link to="/OrderList">주문 목록 보기</router-link></li>
          <li :class="{ active: activeStatus === 4 }"><router-link to="/ReleaseList">출고 목록 보기</router-link></li>
          <li :class="{ active: activeStatus === 5 }"><router-link to="/ShopInfo">서점 정보</router-link></li>
        </ul>
      </nav>
    </aside>
    <div class="dim" @click="close" :class="{ active: isActive }"></div>
  </section>
</template>

<script>
import { getCookie } from "@/utils/cookie";
export default {
  props: ["show"],
  data() {
    return {
      activeStatus: 0,
      routeName: "",
      isActive: false,
      userInfo: {},
    };
  },
  watch: {
    $route(to) {
      this.routeName = to.name; //라우터 변경시 현재 페이지 확인
      this.menuDefaultSetup();
    },
    show(status) {
      status ? (this.isActive = true) : (this.isActive = false); //lnb 모바일 설정
    },
  },
  created() {
    this.routeName = this.$route.name; //새로고침 또는 다이렉트 접속시 현재 페이지 확인
    this.menuDefaultSetup();
    this.userInfo = getCookie("userInfo");
  },
  methods: {
    close() {
      this.$emit("close", true);
    },
    /**
     * @description 라우터 네임 매칭, 현재 메뉴 활성화
     */
    menuDefaultSetup() {
      switch (this.routeName) {
        case "SearchOrder":
          this.activeStatus = 1;
          break;
        case "Cart":
          this.activeStatus = 2;
          break;
        case "OrderList":
          this.activeStatus = 3;
          break;
        case "OrderResult":
          this.activeStatus = 3;
          break;
        case "ReleaseList":
          this.activeStatus = 4;
          break;
        case "ReleaseStatus":
          this.activeStatus = 4;
          break;
        case "ShopInfo":
          this.activeStatus = 5;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.lnb-wrap {
  min-height: 100vh;
  height: 100%;
  background: #000;
  .side-bar {
    position: relative;
    z-index: 1000;
    background: #000;
    min-height: 100vh;
    height: 100%;
    .logo {
      text-align: center;
    }
    .system-name {
      @include NotoSans(1.4, 700, #fff);
      text-align: center;
    }
    nav {
      padding-top: 30px;
      ul {
        li {
          cursor: pointer;
          text-align: center;
          &:hover {
            background-color: rgba(255, 255, 255, 0.3);
          }
          a {
            @include NotoSans(1.4, 700, #fff);
            height: 40px;
            line-height: 40px;
            width: 100%;
          }
          &.active {
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
      }
    }
  }
  .dim {
    display: none;
  }
}

@include lnb {
  //모바일
  .side-bar {
    position: fixed;
    width: 266px;
    top: 0;
    left: -266px;
    transition: left 0.3s ease-in;
    &.active {
      left: 0;
      z-index: 1000;
    }
  }
  .dim {
    &.active {
      display: block;
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.2);
      top: 0;
      left: 0;
    }
  }
}
</style>
