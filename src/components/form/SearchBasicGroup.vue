<template>
  <section class="search-group">
    <Selects :itemList="itemList" />
    <input type="text" class="basic" />
    <button class="basic">검색</button>
  </section>
</template>

<script>
import Selects from "@/components/form/Selects";
export default {
  components: { Selects },
  props: ["itemList"],
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
