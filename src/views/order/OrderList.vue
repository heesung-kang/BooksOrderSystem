<template>
  <section>
    <h2 class="sub-title">주문 목록 보기</h2>
    <section class="sub-container">
      <h3>출판사별 주문 리스트</h3>
      <section class="mt10">
        <SearchDateRangeGroup :itemList="itemList" />
      </section>
      <section class="mt30">
        <OrderList subject1="회신일시" subject2="발신일시" />
      </section>
    </section>
  </section>
</template>

<script>
import SearchDateRangeGroup from "@/components/form/SearchDateRangeGroup";
import OrderList from "@/components/order/OrderList";
export default {
  components: { SearchDateRangeGroup, OrderList },
  data() {
    return {
      select: "",
      itemList: [{ item: "출판사", value: "publisher" }],
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  @include NotoSans(1.6, 500, #000);
}
</style>
