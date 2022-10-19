<template>
  <section>
    <h2 class="sub-title">책 검색</h2>
    <section class="sub-container">
      <!-- 책 검색 -->
      <SearchBasicGroup :itemList="itemList" />
      <!-- //책 검색 -->

      <!-- 책 리스트 -->
      <BookList />
      <!-- //책 리스트 -->
    </section>
  </section>
</template>

<script>
import BookList from "@/components/search/BookList";
import SearchBasicGroup from "@/components/form/SearchBasicGroup";
export default {
  components: { SearchBasicGroup, BookList },
  data() {
    return {
      itemList: [
        { item: "책 제목", value: "01" },
        { item: "ISBN", value: "02" },
        { item: "저자", value: "03" },
        { item: "출판사", value: "04" },
      ],
    };
  },
};
</script>
