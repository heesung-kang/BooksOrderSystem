<template>
  <section class="search-group">
    <Selects />
    <input type="text" class="basic ml5" />
    <button class="basic ml5"><v-icon>mdi-book-search-outline</v-icon>검색</button>
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
}
</style>
