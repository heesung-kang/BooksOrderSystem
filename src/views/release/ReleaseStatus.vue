<template>
  <section>
    <h2 class="sub-title">출고 현황 보기</h2>
    <section class="sub-container">
      <article class="order-info d-flex justify-space-between">
        <div>
          출판사명: <strong>{{ publisher }}</strong
          ><span class="ml23"
            >대표전화: <strong>{{ tel }}</strong></span
          >
        </div>
        <div>주문일자 : {{ date }}</div>
      </article>
      <ReleaseStatusList :id="id" :orderRealTimeId="orderRealTimeId" />
    </section>
  </section>
</template>

<script>
import ReleaseStatusList from "@/components/release/ReleaseStatusList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/db";
export default {
  name: "OrderResult",
  components: { ReleaseStatusList },
  data() {
    return {
      id: this.$route.params.id,
      date: this.$route.params.date,
      publisher: this.$route.params.publisher,
      orderRealTimeId: this.$route.params.orderRealTimeId,
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
</style>
