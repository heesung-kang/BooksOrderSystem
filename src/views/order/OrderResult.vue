<template>
  <section>
    <h2 class="sub-title">주문 내역 확인</h2>
    <section class="sub-container">
      <article class="order-info d-flex justify-space-between">
        <div>
          출판사명: <strong>{{ publisher }}</strong
          ><span class="ml23"
            >대표전화: <strong>{{ tel }}</strong></span
          >
        </div>
        <div class="date">주문일자 : {{ date }}</div>
      </article>
      <OrderResultList :id="id" :orderTimeId="orderTimeId" :publisher="publisher" />
    </section>
  </section>
</template>

<script>
import OrderResultList from "@/components/order/OrderResultList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/db";
export default {
  name: "OrderResult",
  components: { OrderResultList },
  data() {
    return {
      id: this.$route.params.id,
      date: this.$route.params.date,
      publisher: this.$route.params.publisher,
      orderTimeId: this.$route.params.orderTimeId,
      tel: "",
    };
  },
  async mounted() {
    try {
      const first = query(collection(db, "publisherInfo"), where("sid", "==", Number(this.id)));
      const documentSnapshots = await getDocs(first);
      documentSnapshots.forEach(doc => {
        this.tel = doc.data().tel;
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
};
</script>

<style lang="scss" scoped>
.order-info {
  margin-bottom: 20px;
  font-size: 1.6rem;
}
.date {
  @include NotoSans(1.4, 400, #000);
}
</style>
