<template>
  <section>
    <h2 class="sub-title">출고 목록 보기</h2>
    <section class="sub-container">
      <h3>출판사별 출고 리스트</h3>
      <section class="mt10">
        <SearchDateRangeGroup :itemList="itemList" />
      </section>
      <section class="mt30">
        <OrderList subject1="발신일시" subject2="발신일시" />
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

<style lang="scss" scoped></style>
