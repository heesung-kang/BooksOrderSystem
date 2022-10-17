<template>
  <v-app>
    <v-main class="main-container">
      <div class="layout-wrap">
        <div class="layout-right">
          <router-view name="lnb" :show="show" @close="close"></router-view>
        </div>
        <div class="layout-left">
          <div class="hamburg-menu" @click="showLnb">
            <span></span>
            <span></span>
            <span></span>
          </div>
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
      show: false,
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
  methods: {
    showLnb() {
      this.show = true;
    },
    close() {
      this.show = false;
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
