<template>
  <section class="gnb">
    <h1>인스타북 주문/물류 시스템</h1>
    <div class="fixed-menu">
      <router-link to="/Login">로그아웃</router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.gnb {
  background-color: #1d3c7c;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 0;
  h1 {
    color: #fff;
    white-space: nowrap;
  }
  .fixed-menu {
    display: flex;
    a {
      color: #fff;
    }
  }
}
</style>
