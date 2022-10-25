<template>
  <modalWrap @close="close">
    <template slot="head"><h2>주문서</h2></template>
    <template slot="body">
      <div>
        주문서가 출판사에 전송되었습니다.<br />
        "주문 내역"에서 회신 확인 후 결제 해 주세요
      </div>
      <div>
        <button class="basic">확인</button>
      </div>
    </template>
  </modalWrap>
</template>

<script>
import VueBarcode from "vue-barcode";
import modalWrap from "@/components/modal/ModalTemplate";
export default {
  components: { modalWrap, barcode: VueBarcode },
  data() {
    return {
      barcode: "9791130692791",
    };
  },
  methods: {
    close() {
      this.$emit("close");
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
