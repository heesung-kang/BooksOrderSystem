<template>
  <section class="search-group">
    <Selects :itemList="itemList" @change="change" />
    <input type="text" class="basic" v-model="keyword" @keypress.enter="search" />
    <button class="basic" @click="search" :disabled="skeletonLoading">검색</button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Selects from "@/components/form/Selects";
export default {
  components: { Selects },
  props: ["itemList"],
  data() {
    return {
      select: "",
      keyword: "",
    };
  },
  computed: {
    ...mapGetters("common", ["skeletonLoading"]),
  },
  methods: {
    change(select) {
      this.select = select;
    },
    search() {
      if (this.keyword === "") {
        alert("검색어를 입력해주세요.");
        return;
      }
      this.$emit("search", { select: this.select, keyword: this.keyword });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-group {
  display: flex;
  input[type="text"] {
    width: 100%;
    max-width: 380px;
  }
  .basic {
    margin-left: 8px;
  }
}
@include mobile {
  .search-group {
    input[type="text"] {
      max-width: calc(100% - 100px);
    }
    .basic {
      margin-left: 5px;
    }
  }
}
</style>
