<template>
  <section class="book-list">
    <ul>
      <li class="d-flex align-center">
        <section class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></section>
        <section class="contents d-flex align-center">
          <article class="basic-info">
            <h2>아노말리(양장본 Hardcover)</h2>
            <div>
              <span class="mr18">에르베 르 텔리에</span>
              <span>민음사 (20220526)</span>
            </div>
            <div>
              <span class="mr14">정가 20,000원</span>
              <span class="mr10">공급률 60%</span>
            </div>
          </article>
          <article class="price">공급가 12,000</article>
          <article class="add-cart"><button class="basic">담기</button></article>
        </section>
      </li>
      <li class="d-flex align-center">
        <section class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></section>
        <section class="contents d-flex align-center">
          <article class="basic-info">
            <h2>아노말리(양장본 Hardcover)</h2>
            <div>
              <span class="mr18">에르베 르 텔리에</span>
              <span>민음사 (20220526)</span>
            </div>
            <div>
              <span class="mr14">정가 20,000원</span>
              <span class="mr10">공급률 60%</span>
            </div>
          </article>
          <article class="price">공급가 12,000</article>
          <article class="add-cart"><button class="basic">담기</button></article>
        </section>
      </li>
      <li class="d-flex align-center">
        <section class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></section>
        <section class="contents d-flex align-center">
          <article class="basic-info">
            <h2>아노말리(양장본 Hardcover)</h2>
            <div>
              <span class="mr18">에르베 르 텔리에</span>
              <span>민음사 (20220526)</span>
            </div>
            <div>
              <span class="mr14">정가 20,000원</span>
              <span class="mr10">공급률 60%</span>
            </div>
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
        width: 60px;
        min-width: 60px;
        img {
          width: 100%;
          height: 75px;
          border: 1px solid #ccc;
        }
      }
      .contents {
        padding: 0 16px;
        width: calc(100% - 60px);
        h2 {
          @include NotoSans(1.2, 500, #000);
        }
        .basic-info {
          span {
            @include NotoSans(1, 400, #000);
          }
        }
        .basic-info {
          width: calc(100% - 149px);
        }
        .price {
          @include NotoSans(1.2, 500, #000);
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
