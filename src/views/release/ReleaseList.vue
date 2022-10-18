<template>
  <section>
    <h2 class="sub-title">출고 목록 보기</h2>
    <section class="sub-container">
      <h3>출판사별 출고 리스트</h3>
      <section class="mt10">
        <SearchDateRangeGroup />
      </section>
      <section class="mt30">
        <OrderList />
      </section>
    </section>
  </section>
</template>

<script>
import SearchDateRangeGroup from "@/components/form/SearchDateRangeGroup";
import OrderList from "@/components/order/OrderList";
export default {
  components: { SearchDateRangeGroup, OrderList },
};
</script>

<style lang="scss" scoped></style>
