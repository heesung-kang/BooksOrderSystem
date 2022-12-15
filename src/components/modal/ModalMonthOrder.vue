<template>
  <modalWrap @close="close">
    <template slot="head"><h2>발주</h2></template>
    <template slot="body">
      <section class="info">
        <h3>
          {{ book[0] }} <span v-if="book.length > 1">외 {{ book.length - 1 }}권</span>
        </h3>
        <p class="price">{{ price.toLocaleString() }}원</p>
        <div class="pay">월정산으로 발주를 진행합니다.</div>
        <div class="btn-wrap" @click="pay"><button class="basic">확인</button></div>
      </section>
    </template>
  </modalWrap>
</template>

<script>
import modalWrap from "@/components/modal/ModalTemplate";
import qrCreateMixin from "@/mixins/qrCreate";
export default {
  name: "ModalMonthOrder",
  components: { modalWrap },
  mixins: [qrCreateMixin],
  props: ["book", "price", "publisher"],
  methods: {
    close() {
      this.$emit("close");
    },
    pay() {
      this.$attrs.update();
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
  margin-top: 30px;
  @include NotoSans(1.6, 700, #000);
}
.btn-wrap {
  text-align: right;
  button {
    display: inline;
  }
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
