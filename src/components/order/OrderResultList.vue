<template>
  <section>
    <!-- 발주 내역 -->
    <section class="header d-flex" v-if="!mobile">
      <div class="d-flex dual">
        <div>발주</div>
        <div>품목정보</div>
      </div>
      <div>ISBN</div>
      <div class="d-flex">
        <div>정가</div>
        <div>공급률</div>
      </div>
      <div>공급가</div>
      <div>수량</div>
    </section>
    <ul class="body">
      <li class="d-flex align-center">
        <div class="d-flex align-center info-wrap">
          <div class="ck-box"><v-checkbox v-model="selected" value="9788937427220"></v-checkbox></div>
          <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
          <div class="book-info">
            <h3>아노말리(양장본 Hardcover)</h3>
            <div class="author">에르베 르 텔리에</div>
          </div>
        </div>
        <div class="isbn">9788937427220</div>
        <div class="d-flex price-info">
          <div class="normal-price"><span v-if="mobile">정가</span> 20,000</div>
          <div><span v-if="mobile">공급률</span> 60%</div>
        </div>
        <div class="final-price"><span v-if="mobile">공급가</span> 12,000</div>
        <div class="count"><span v-if="mobile">수량</span> 품절</div>
      </li>
    </ul>
    <!-- //발주 내역 -->
    <!-- 메모 -->
    <section class="memo">
      <h4>메모</h4>
      <div>아노말리(9788937427220)는 일시 품절이나 3일 후 입고 예정입니다.</div>
    </section>
    <!-- //메모 -->
    <!-- 총 합계 --->
    <section class="total-wrap mt24">
      <div>
        <span class="total-prod">총 6권</span>
        <span class="total">합계 72,000원</span>
      </div>
      <button class="primary" @click="showModal">발주</button>
    </section>
    <!-- //총 합계 --->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { getPopupOpt } from "@/utils/modal";
import orderModal from "@/components/modal/ModalOrder.vue";
export default {
  data() {
    return {
      selected: [],
      mobile: false,
    };
  },
  computed: {
    ...mapGetters("common", ["windowWidth"]),
  },
  watch: {
    windowWidth(size) {
      size > 600 ? (this.mobile = false) : (this.mobile = true);
    },
  },
  mounted() {
    this.windowWidth > 600 ? (this.mobile = false) : (this.mobile = true);
  },
  methods: {
    showModal() {
      this.mobile
        ? this.$modal.show(orderModal, {}, getPopupOpt("orderModal", "95%", "auto", false))
        : this.$modal.show(orderModal, {}, getPopupOpt("orderModal", "500px", "auto", false));
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 5px 13px;
  & > div {
    text-align: center;
    @extend .size;
  }
  .dual {
    div {
      &:nth-child(1) {
        text-align: left;
        width: 80px;
      }
      &:nth-child(2) {
        text-align: center;
        width: calc(100% - 80px);
      }
    }
  }
}
.body {
  li {
    background-color: #fff;
    border: 1px solid #000;
    padding: 5px 13px;
    & > div {
      text-align: center;
      @extend .size;
      .thumbnail {
        width: 40px;
        min-width: 40px;
        img {
          width: 100%;
          height: 50px;
          border: 1px solid #ccc;
        }
      }
      .book-info {
        margin-left: 18px;
        .author {
          text-align: left;
        }
      }
    }
  }
}
.memo {
  margin-top: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
}
.total-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  max-width: 451px;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 15px 42px;
  .total-prod {
    @include NotoSans(1.6, 700, #000);
    margin-right: 48px;
  }
  .total {
    @include NotoSans(1.6, 700, #000);
  }
  button {
    @include NotoSans(1.4, 700, #fff);
  }
}
.size {
  &:nth-child(1) {
    width: calc(100% - 420px);
  }
  &:nth-child(2) {
    width: 120px;
  }
  &:nth-child(3) {
    width: 160px;
    & > div {
      &:nth-child(1) {
        width: 80px;
      }
      &:nth-child(2) {
        width: 80px;
      }
    }
  }
  &:nth-child(4) {
    width: 80px;
  }
  &:nth-child(5) {
    width: 60px;
  }
}
@include mobile {
  .body {
    li {
      padding: 19px 18px;
      flex-direction: column;
      align-items: flex-start !important;
      div {
        font-size: 1.6rem;
      }
      .info-wrap {
        width: 100% !important;
        align-items: flex-start !important;
        .book-info {
          width: 100%;
          h3 {
            text-align: left;
          }
        }
      }
      .isbn {
        margin-left: 80px;
      }
      .price-info {
        margin-left: 83px;
        .normal-price {
          margin-right: 20px;
        }
        div {
          text-align: left;
          white-space: nowrap;
        }
      }
      .final-price {
        margin: 10px 0 0 83px;
        text-align: left;
        white-space: nowrap;
      }
      .count {
        margin-left: 83px;
        text-align: left;
        white-space: nowrap;
      }
    }
  }
  .total-wrap {
    background-color: #fff;
    max-width: 100%;
    padding: 15px 20px;
    .total-prod {
      @include NotoSans(1.6, 700, #000);
      margin-right: 28px;
    }
    .total {
      @include NotoSans(1.6, 700, #000);
    }
    button {
      @include NotoSans(1.6, 700, #fff);
    }
  }
}
</style>
