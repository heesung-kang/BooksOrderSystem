<template>
  <v-app>
    <v-main class="main-container">
      <div class="layout-wrap">
        <div class="layout-right">
          <router-view name="lnb"></router-view>
        </div>
        <div class="layout-left">
          <router-view name="contents"></router-view>
          <router-view name="footer"></router-view>
        </div>
      </div>
      <router-view />
      <v-progress-circular :size="70" :width="7" color="amber" indeterminate class="spinner" v-if="loadingStatus"></v-progress-circular>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      loadingStatus: false,
    };
  },
  computed: {
    ...mapGetters("common", ["loading"]),
  },
  watch: {
    loading(newValue) {
      this.loadingStatus = newValue;
    },
  },
};
</script>
<style lang="scss">
.spinner {
  position: fixed !important;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
//margin, padding setting
@for $i from 0 through 200 {
  .mt#{$i} {
    margin-top: 0.1rem * $i !important;
  }
  .ml#{$i} {
    margin-left: 0.1rem * $i !important;
  }
  .mr#{$i} {
    margin-right: 0.1rem * $i !important;
  }
  .mb#{$i} {
    margin-bottom: 0.1rem * $i !important;
  }
  .pt#{$i} {
    padding-top: 0.1rem * $i !important;
  }
  .pl#{$i} {
    padding-left: 0.1rem * $i !important;
  }
  .pr#{$i} {
    padding-right: 0.1rem * $i !important;
  }
  .pb#{$i} {
    padding-bottom: 0.1rem * $i !important;
  }
}
//width setting
@for $i from 1 through 500 {
  .w#{$i} {
    width: 0.1rem * $i !important;
  }
}
</style>
