<template>
  <section>
    <h2 class="sub-title">내역서 확인</h2>
    <section class="sub-container">
      <article class="order-info d-flex justify-space-between">
        <div>
          출판사명: <strong>{{ publisher }}</strong>
        </div>
        <div>주문일자 : {{ date }}</div>
      </article>
      <OrderResultList :id="id" :date="date" :orderTimeId="orderTimeId" />
    </section>
  </section>
</template>

<script>
import OrderResultList from "@/components/order/OrderResultList";
export default {
  name: "OrderResult",
  components: { OrderResultList },
  data() {
    return {
      id: this.$route.params.id,
      date: this.$route.params.date,
      publisher: this.$route.params.publisher,
      orderTimeId: this.$route.params.orderTimeId,
    };
  },
};
</script>

<style lang="scss" scoped>
.order-info {
  margin-bottom: 20px;
  font-size: 1.6rem;
}
</style>
