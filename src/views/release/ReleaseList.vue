<template>
  <section>
    <h2 class="sub-title">출고 목록 보기</h2>
    <section class="sub-container">
      <h3>출판사별 출고 리스트</h3>
      <section class="mt10">
        <SearchDateRangeGroup :itemList="itemList" @search="search" />
      </section>
      <section class="mt30">
        <ReleaseList :searchObj="searchObj" />
      </section>
    </section>
  </section>
</template>

<script>
import SearchDateRangeGroup from "@/components/form/SearchDateRangeGroup";
import ReleaseList from "@/components/release/ReleaseList";
export default {
  components: { ReleaseList, SearchDateRangeGroup },
  data() {
    return {
      searchObj: {},
      itemList: [{ item: "출판사", value: "publisher" }],
    };
  },
  methods: {
    search(payload) {
      this.searchObj = payload;
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  @include NotoSans(1.6, 500, #000);
}
</style>
