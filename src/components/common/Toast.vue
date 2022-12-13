<template>
  <section :class="[{ active: isActive }, wrap]">
    <div class="wrapper">
      <div class="d-flex message-wrap">
        <div class="mr24"><img src="@/assets/images/toast_check.svg" alt="" /></div>
        <div class="message" v-html="message"></div>
      </div>
      <div class="mt10 right" v-if="withBtn">
        <router-link to="/Cart" class="btn">
          <span><img src="@/assets/images/cart_xs.svg" alt="" /></span>
          <span class="ml5">바로가기</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Toast",
  props: ["status", "message", "withBtn"],
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
  top: -60px;
  right: 20px;
  z-index: 1000;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &.active {
    top: 25px;
    opacity: 1;
  }
  .wrapper {
    background-color: rgba(72, 192, 193, 0.8);
    padding: 20px;
    .message-wrap {
      img {
        vertical-align: -2px;
      }
      .message {
        @include NotoSans(1.4, 400, #000);
      }
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @include NotoSans(1.4, 400, #000);
      img {
        vertical-align: -2px;
      }
    }
  }
}
</style>
