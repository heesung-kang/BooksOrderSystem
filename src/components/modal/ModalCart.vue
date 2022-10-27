<template>
  <modalWrap @close="close">
    <template slot="head"><h2>주문서</h2></template>
    <template slot="body">
      <div>
        주문서가 출판사에 전송되었습니다.<br />
        "주문 내역"에서 회신 확인 후 결제 해 주세요
      </div>
      <div class="mt20 btn-wrap">
        <button class="basic" @click="close">확인</button>
      </div>
    </template>
  </modalWrap>
</template>

<script>
import modalWrap from "@/components/modal/ModalTemplate";
import { getCookie } from "@/utils/cookie";
import { doc, writeBatch, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/utils/db";
export default {
  components: { modalWrap },
  props: ["id", "cart", "uid"],
  data() {
    return {
      sendData: [],
    };
  },
  async created() {
    //doc id 제외
    const timestamp = serverTimestamp();
    this.cart.forEach(ele => {
      ele.data.uid = this.uid;
      ele.data.timestamp = timestamp;
      ele.data.replytimestamp = "";
      ele.data.memo = "";
      this.sendData.push(ele.data);
    });
    //일괄 저장
    const batch = writeBatch(db);
    await this.sendData.forEach(item => {
      const docRef = doc(collection(db, "orderRequest"));
      batch.set(docRef, item);
    });
    await batch.commit();
  },
  methods: {
    async close() {
      //장바구니 일괄 삭제
      const batch = writeBatch(db);
      const { uid } = getCookie("userInfo");
      await this.id.forEach(id => {
        batch.delete(doc(db, `cart-${uid}`, id));
      });
      await batch.commit();
      this.$store.commit("common/setLoading", false);
      this.$emit("close");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.price {
  margin-top: 10px;
  @include NotoSans(1.6, 700, #000);
}
.pay {
  text-align: center;
}
.btn-wrap {
  display: flex;
  justify-content: flex-end;
}
@include mobile {
  .info {
    flex-direction: column;
  }
  .barcode-wrap {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
