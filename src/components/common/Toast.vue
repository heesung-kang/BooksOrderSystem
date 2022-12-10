<template>
  <section :class="[{ active: isActive }, wrap]">
    <div class="wrapper">
      <div class="message" v-html="message"></div>
      <div class="mt10">
        <router-link to="/Cart" class="btn">장바구니로 이동 <v-icon>mdi-arrow-right-circle</v-icon></router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Toast",
  props: ["status", "message"],
  data() {
    return {
      isActive: false,
      wrap: "toastWrap",
    };
  },
  watch: {
    status() {
      this.handleVisible();
    },
  },
  methods: {
    handleVisible() {
      this.isActive = true;
      setTimeout(() => {
        this.isActive = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.toastWrap {
  position: fixed;
  bottom: -60px;
  left: 50%;
  z-index: 1000;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &.active {
    bottom: 60px;
    opacity: 1;
  }
  .wrapper {
    background-color: #fdc657;
    padding: 10px 20px;
    .message {
      @include NotoSans(1.4, 400, #000);
    }
    .btn {
      background-color: #000;
      @include NotoSans(1.4, 400, #fff);
      padding: 5px 10px;
      i {
        color: #fff;
      }
    }
  }
}
</style>
