<template>
  <section>
    <h2 class="sub-title">책 검색</h2>
    <section class="sub-container">
      <!-- 책 검색 -->
      <SearchBasicGroup />
      <!-- //책 검색 -->

      <!-- 책 리스트 -->
      <BookList />
      <!-- //책 리스트 -->
    </section>
  </section>
</template>

<script>
import BookList from "@/components/order/BookList";
import SearchBasicGroup from "@/components/form/SearchBasicGroup";
export default {
  components: { SearchBasicGroup, BookList },
};
</script>
