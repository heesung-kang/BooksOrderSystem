<template>
  <section class="book-list">
    <ul>
      <li class="d-flex align-center justify-space-between">
        <section class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></section>
        <section class="contents d-flex align-center justify-space-between">
          <article class="basic-info">
            <h3>아노말리(양장본 Hardcover)</h3>
            <div>
              <span class="mr18">에르베 르 텔리에</span>
              <span>민음사 (20220526)</span>
            </div>
          </article>
          <article class="price-info">
            <div class="mr14">정가 20,000원</div>
            <div class="mr10">공급률 60%</div>
          </article>
          <article class="price">공급가 12,000</article>
          <article class="add-cart"><button class="basic">담기</button></article>
        </section>
      </li>
      <li class="d-flex align-center justify-space-between">
        <section class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></section>
        <section class="contents d-flex align-center justify-space-between">
          <article class="basic-info">
            <h3>아노말리(양장본 Hardcover)</h3>
            <div>
              <span class="mr18">에르베 르 텔리에</span>
              <span>민음사 (20220526)</span>
            </div>
          </article>
          <article class="price-info">
            <div class="mr14">정가 20,000원</div>
            <div class="mr10">공급률 60%</div>
          </article>
          <article class="price">공급가 12,000</article>
          <article class="add-cart"><button class="basic">담기</button></article>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "BookList",
};
</script>

<style lang="scss" scoped>
.book-list {
  margin-top: 14px;
  ul {
    li {
      background-color: #fff;
      border: 1px solid #000;
      display: flex;
      margin-bottom: 7px;
      padding: 12px 39px 13px 29px;
      &:last-child {
        margin-bottom: 0;
      }
      .thumbnail {
        width: 40px;
        min-width: 40px;
        img {
          width: 100%;
          height: 50px;
          border: 1px solid #ccc;
        }
      }
      .contents {
        padding: 0 0 0 16px;
        width: calc(100% - 40px);
        .basic-info {
          h3 {
            @include NotoSans(1.4, 500, #000);
          }
          span {
            @include NotoSans(1.2, 400, #000);
          }
        }
        .price-info {
          div {
            @include NotoSans(1.2, 400, #000);
          }
        }
        .price {
          @include NotoSans(1.4, 500, #000);
          white-space: nowrap;
          min-width: 80px;
          text-align: right;
          margin-right: 32px;
        }
        .add-cart {
          min-width: 69px;
          text-align: right;
        }
      }
    }
  }
}
</style>
