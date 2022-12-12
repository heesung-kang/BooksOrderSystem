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
import { doc, writeBatch, collection, serverTimestamp, getDoc } from "firebase/firestore";
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
    const docRef = doc(db, "shopInfo", this.uid);
    const docSnap = await getDoc(docRef);
    const name = docSnap.data().shop;
    const timestamp = serverTimestamp();
    const { payType } = getCookie("userInfo");
    this.cart.forEach(ele => {
      payType.forEach(elm => {
        if (elm.sid === ele.data.sid) {
          ele.data.payType = elm.payType;
        }
      });
      ele.data.count = parseInt(ele.data.count); //수량변경시 타입 변경
      ele.data.uid = this.uid;
      //발주시간
      ele.data.order_time_id = this.$date().format("YYYYMMDDHHmmss");
      ele.data.order_time = timestamp;
      //회신시간
      ele.data.reply_time = null;
      ele.data.reply_time_id = null;
      //발주시간
      ele.data.order_real_time = null;
      ele.data.order_real_time_id = null;
      //출고시간
      ele.data.release_time = null;
      ele.data.release_time_id = null;
      //수취완료시간
      ele.data.complete_time_id = null;
      ele.data.complete_time = null;
      //메모
      ele.data.memo = null;
      //서점 주문상태
      ele.data.shop_order_status = 0;
      //출판사 회신상태
      ele.data.publisher_reply_status = 0;
      //발주체크 상태
      ele.data.order_check = false;
      //회신수량
      ele.data.reply_count = 0;
      //서점명
      ele.data.shop_name = name;
      //공급수량 초기값 = 주문수량
      ele.data.reply_count = ele.data.count;
      //발주 토탈 책권수
      ele.data.totalCount = 0;
      //발주 토탈 금액
      ele.data.totalPrice = 0;
      //배본사
      ele.data.distribution = null;
      this.sendData.push(ele.data);
      //결제 방식
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
      this.$store.commit("common/changeCartList", 0);
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
