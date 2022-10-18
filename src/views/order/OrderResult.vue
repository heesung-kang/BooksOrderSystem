<template>
  <section>
    <h2 class="sub-title">내역서 확인</h2>
    <section class="sub-container">
      <article class="order-info d-flex justify-space-between">
        <div>출판사명: <strong>민음사</strong></div>
        <div>주문일자:2022.10.4</div>
      </article>
      <OrderResultList />
    </section>
  </section>
</template>

<script>
import OrderResultList from "@/components/order/OrderResultList";
export default {
  name: "OrderResult",
  components: { OrderResultList },
};
</script>

<style lang="scss" scoped>
.order-info {
  margin-bottom: 20px;
}
</style>
