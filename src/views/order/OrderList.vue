<template>
  <section class="sub-container">
    <h2 class="sub-title">주문 목록 보기</h2>
    <section>
      <SearchDateRangeGroup />
    </section>
  </section>
</template>

<script>
import SearchDateRangeGroup from "@/components/form/SearchDateRangeGroup";
export default {
  name: "OrderList",
  components: { SearchDateRangeGroup },
};
</script>

<style lang="scss" scoped></style>
