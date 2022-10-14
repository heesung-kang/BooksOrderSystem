<template>
  <section class="search-group">
    <Selects />
    <input type="text" class="basic" />
    <button class="basic">검색</button>
  </section>
</template>

<script>
import Selects from "@/components/form/Selects";
export default {
  components: { Selects },
};
</script>

<style lang="scss" scoped>
.search-group {
  display: flex;
  input[type="text"] {
    width: 100%;
    max-width: calc(100% - 220px);
  }
  .basic {
    margin-left: 25px;
  }
}
</style>
