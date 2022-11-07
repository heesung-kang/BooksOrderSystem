<template>
  <modalWrap @close="close">
    <template slot="head"><h2>발주(결제)</h2></template>
    <template slot="body">
      <section class="info">
        <h3>
          {{ book[0] }} <span v-if="book.length > 1">외 {{ book.length - 1 }}권</span>
        </h3>
        <p class="price">{{ price.toLocaleString() }}원</p>
        <div class="qr-wrap">
          <div class="center"><img :src="qr" alt="" /></div>
          <div class="pay">인스타페이 앱으로 결제해 주세요</div>
        </div>
      </section>
    </template>
  </modalWrap>
</template>

<script>
import modalWrap from "@/components/modal/ModalTemplate";
import qrCreateMixin from "@/mixins/qrCreate";
export default {
  name: "Order",
  components: { modalWrap },
  mixins: [qrCreateMixin],
  props: ["book", "price"],
  watch: {
    "res.paid": function (n) {
      if (n) {
        this.$attrs.update();
        this.$emit("close");
      }
    },
  },
  mounted() {
    this._open({ productName: this.book.join(","), productAmount: this.price, ttl: 20 });
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
  .qr-wrap {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
