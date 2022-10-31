<template>
  <section>
    <h2 class="sub-title">주문 목록 보기</h2>
    <section class="sub-container">
      <h3>출판사별 주문 리스트</h3>
      <section class="mt10">
        <SearchDateRangeGroup :itemList="itemList" @search="search" />
      </section>
      <section class="mt30">
        <OrderList :searchObj="searchObj" />
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
      itemList: [{ item: "출판사", value: "publisher" }],
      searchObj: {},
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
