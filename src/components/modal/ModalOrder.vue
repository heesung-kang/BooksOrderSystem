<template>
  <modalWrap @close="close">
    <template slot="head"><h2>발주(결제)</h2></template>
    <template slot="body">
      <section class="info">
        <div>
          <h3>아노말리(양장본 Hardcover) 외 2권</h3>
          <p class="price">15,000원</p>
        </div>
        <div class="barcode-wrap">
          <barcode class="barcode" format="EAN13" :value="barcode" font-options="bold" width="2px" height="100px"> </barcode>
          <div class="pay">인스타페이 앱으로 결제해 주세요</div>
        </div>
      </section>
    </template>
  </modalWrap>
</template>

<script>
import VueBarcode from "vue-barcode";
import modalWrap from "@/components/modal/ModalTemplate";
export default {
  name: "Order",
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
