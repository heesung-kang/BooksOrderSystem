<template>
  <section>
    <h2 class="sub-title">장바구니</h2>
    <section class="sub-container">
      <!-- 장바구니 리스트 -->
      <section>
        <article class="cart-header">
          <span>품목정보</span>
          <span>출판사</span>
          <span>ISBN</span>
          <span>정가</span>
          <span>공급률</span>
          <span>공급가</span>
          <span>수량</span>
        </article>
        <article class="cart-list">
          <ul>
            <li>
              <article class="d-flex align-center">
                <div class="d-flex align-center">
                  <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
                  <div class="basic-info">
                    <div>아노말리 (양장본 Hardcover)</div>
                    <div>에르베 르 텔리에</div>
                  </div>
                </div>
                <div>민음사</div>
                <div>9788937427220</div>
                <div>20,000원</div>
                <div>60%</div>
                <div class="price">12,000원</div>
                <div><input type="number" class="basic" /></div>
              </article>
            </li>
            <li>
              <article class="d-flex align-center">
                <div class="d-flex align-center">
                  <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
                  <div class="basic-info">
                    <div>아노말리 (양장본 Hardcover)</div>
                    <div>에르베 르 텔리에</div>
                  </div>
                </div>
                <div>민음사</div>
                <div>9788937427220</div>
                <div>20,000원</div>
                <div>60%</div>
                <div class="price">12,000원</div>
                <div><input type="number" class="basic" /></div>
              </article>
            </li>
            <li>
              <article class="d-flex align-center">
                <div class="d-flex align-center">
                  <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
                  <div class="basic-info">
                    <div>아노말리 (양장본 Hardcover)</div>
                    <div>에르베 르 텔리에</div>
                  </div>
                </div>
                <div>민음사</div>
                <div>9788937427220</div>
                <div>20,000원</div>
                <div>60%</div>
                <div class="price">12,000원</div>
                <div><input type="number" class="basic" /></div>
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
export default {};
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
    @include NotoSans(1.2, 700, #fff);
  }
}
.cart-header {
  padding: 0 27px 0 21px;
  span {
    text-align: center;
    @include NotoSans(1.2, 500, #000);
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
      &:last-child {
        margin-bottom: 0;
      }
      article {
        & > div {
          text-align: center;
          @include NotoSans(1, 400, #000);
          @extend .size;
          &.price {
            @include NotoSans(1.2, 500, #000);
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
      }
    }
  }
}
.size {
  &:nth-child(1) {
    width: calc(100% - 440px);
  }
  &:nth-child(2) {
    width: 70px;
  }
  &:nth-child(3) {
    width: 120px;
  }
  &:nth-child(4) {
    width: 60px;
  }
  &:nth-child(5) {
    width: 50px;
  }
  &:nth-child(6) {
    width: 70px;
  }
  &:nth-child(7) {
    width: 70px;
  }
}
</style>
