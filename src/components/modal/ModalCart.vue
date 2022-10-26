<template>
  <modalWrap @close="close">
    <template slot="head"><h2>주문서</h2></template>
    <template slot="body">
      <div>
        주문서가 출판사에 전송되었습니다.<br />
        "주문 내역"에서 회신 확인 후 결제 해 주세요
      </div>
      <div class="mt20 btn-wrap">
        <button class="basic" @click="goHome">확인</button>
      </div>
    </template>
  </modalWrap>
</template>

<script>
import modalWrap from "@/components/modal/ModalTemplate";
import { getCookie } from "@/utils/cookie";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/utils/db";
export default {
  components: { modalWrap },
  props: ["id"],
  methods: {
    close() {
      this.$emit("close");
    },
    goHome() {
      //장바구니 삭제
      try {
        const { uid } = getCookie("userInfo");
        this.$store.commit("common/setLoading", true);
        this.id.forEach(async ele => {
          await deleteDoc(doc(db, `cart-${uid}`, ele));
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
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
