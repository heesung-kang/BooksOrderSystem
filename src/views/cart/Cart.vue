<template>
  <section>
    <h2 class="sub-title">장바구니</h2>
    <section class="sub-container">
      <!-- 장바구니 리스트 -->
      <section>
        <article class="cart-header" v-if="!mobile">
          <div>품목정보</div>
          <div>출판사</div>
          <div>ISBN</div>
          <div>
            <div>정가</div>
            <div>공급률</div>
          </div>
          <div>공급가</div>
          <div>수량</div>
        </article>
        <article class="cart-list">
          <ul>
            <li>
              <article class="d-flex align-center">
                <div class="d-flex align-center thumbnail-wrap">
                  <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
                  <div class="basic-info">
                    <div class="book-name">아노말리 (양장본 Hardcover)</div>
                    <div class="only-mobile">
                      <div class="author">에르베 르 텔리에</div>
                      <div v-if="mobile" class="company">민음사</div>
                    </div>
                  </div>
                </div>
                <div v-if="!mobile">민음사</div>
                <div class="isbn">9788937427220</div>
                <div class="price-etc">
                  <div><span v-if="mobile">정가</span> 20,000원</div>
                  <div class="rate"><span v-if="mobile">공급률</span> 60%</div>
                </div>
                <div class="price"><span v-if="mobile">공급가</span>12,000원</div>
                <div class="btn"><input type="number" class="basic" /></div>
              </article>
            </li>
          </ul>
        </article>
      </section>
      <!-- //장바구니 리스트 -->
      <!-- 총 합계 --->
      <section class="total-wrap mt24">
        <div>
          <span class="total-prod">총 6권</span>
          <span class="total">합계 72,000원</span>
        </div>
        <button class="primary">주문</button>
      </section>
      <!-- //총 합계 --->
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
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
};
</script>

<style lang="scss" scoped>
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
.cart-header {
  padding: 0 27px 0 21px;
  display: flex;
  div {
    text-align: center;
    @include NotoSans(1.4, 500, #000);
    margin-bottom: 13px;
    @extend .size;
  }
}
.cart-list {
  ul {
    li {
      padding: 10px 27px 10px 21px;
      border: 1px solid #000;
      background-color: #fff;
      margin-bottom: 6px;
      div {
        @include NotoSans(1.4, 400, #000);
      }
      &:last-child {
        margin-bottom: 0;
      }
      article {
        & > div {
          text-align: center;
          @include NotoSans(1.4, 400, #000);
          @extend .size;
          &.price {
            @include NotoSans(1.4, 500, #000);
          }
          input[type="number"] {
            width: 66px;
          }
        }
      }
      .thumbnail {
        width: 50px;
        min-width: 50px;
        img {
          width: 100%;
          height: 60px;
          border: 1px solid #ccc;
        }
      }
      .basic-info {
        margin-left: 18px;
        div {
          text-align: left;
        }
        .author {
          @include NotoSans(1.4, 400, #000);
        }
      }
    }
  }
}
.size {
  &:nth-child(1) {
    width: calc(100% - 500px);
  }
  &:nth-child(2) {
    width: 80px;
  }
  &:nth-child(3) {
    width: 120px;
  }
  &:nth-child(4) {
    width: 150px;
    display: flex;
    div {
      &:nth-child(1) {
        width: 80px;
      }
      &:nth-child(2) {
        width: 70px;
      }
    }
  }
  &:nth-child(5) {
    width: 80px;
  }
  &:nth-child(6) {
    width: 70px;
  }
}
@include mobile {
  .cart-list {
    ul {
      li {
        padding: 19px 18px;
        article {
          flex-direction: column;
          align-items: flex-start !important;
          .thumbnail-wrap {
            width: 100% !important;
            align-items: flex-start !important;
            .basic-info {
              width: calc(100% - 60px);
              .book-name {
                @include NotoSans(1.6, 500, #000);
              }
              .only-mobile {
                display: flex;
                div {
                  @include NotoSans(1.6, 400, #000);
                  &.company {
                    margin-left: 30px;
                  }
                }
              }
            }
          }
          .isbn {
            margin-left: 70px;
            @include NotoSans(1.6, 400, #000);
          }
          .price-etc {
            margin-left: 70px;
            display: flex;
            div {
              white-space: nowrap;
              @include NotoSans(1.6, 400, #000);
              &.rate {
                margin-left: 30px;
              }
            }
          }
          .price {
            margin: 10px 0 0 70px;
            font-size: 1.6rem !important;
            font-weight: 700 !important;
          }
          .btn {
            margin: 20px 0 0 65px;
          }
        }
      }
    }
  }
  .total-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    max-width: 100%;
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
      @include NotoSans(1.6, 700, #fff);
    }
  }
}
</style>
