<template>
  <section>
    <h2 class="sub-title">출고 목록 보기</h2>
    <section class="sub-container">
      <h3>출판사별 출고 리스트</h3>
      <section class="mt10">
        <SearchDateRangeGroup :itemList="itemList" />
      </section>
      <section class="mt30">
        <ReleaseList />
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

<style lang="scss" scoped>
h3 {
  @include NotoSans(1.6, 500, #000);
}
</style>
