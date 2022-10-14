<template>
  <aside class="side-bar">
    <div class="pt47 logo"><img src="@/assets/images/logo.svg" alt="instaPay" /></div>
    <div class="system-name">서점용 도서 주문 시스템</div>
    <nav class="lnb">
      <ul>
        <li :class="{ active: activeStatus === 1 }"><router-link to="/SearchOrder">검색 및 주문</router-link></li>
        <li :class="{ active: activeStatus === 2 }"><router-link to="/Cart">장바구니</router-link></li>
        <li :class="{ active: activeStatus === 3 }"><router-link to="/OrderList">주문 목록 보기</router-link></li>
        <li :class="{ active: activeStatus === 4 }"><router-link to="/OrderResult">내역서(주문결과) 확인</router-link></li>
        <li :class="{ active: activeStatus === 5 }"><router-link to="/Pay">발주(결제)</router-link></li>
        <li :class="{ active: activeStatus === 6 }"><router-link to="/ReleaseList">출고 목록 보기</router-link></li>
        <li :class="{ active: activeStatus === 7 }"><router-link to="/ReleaseStatus">출고 현황 보기</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeStatus: 0,
      routeName: "",
    };
  },
  watch: {
    $route(to) {
      this.routeName = to.name; //라우터 변경시 현재 페이지 확인
      this.menuDefaultSetup();
    },
  },
  created() {
    this.routeName = this.$route.name; //새로고침 또는 다이렉트 접속시 현재 페이지 확인
    this.menuDefaultSetup();
  },
  methods: {
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
          this.activeStatus = 4;
          break;
        case "Pay":
          this.activeStatus = 5;
          break;
        case "ReleaseList":
          this.activeStatus = 6;
          break;
        case "ReleaseStatus":
          this.activeStatus = 7;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.side-bar {
  min-height: 100vh;
  background: #000;
  .logo {
    text-align: center;
  }
  .system-name {
    @include NotoSans(1.2, 500, #fff);
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
          @include NotoSans(1.2, 700, #fff);
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
</style>
