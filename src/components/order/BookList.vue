<template>
  <section class="book-list">
    <ul>
      <li>
        <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
        <div class="contents">
          <h2>아노말리(양장본 Hardcover)</h2>
          <div class="mt10">
            <span class="mr10">에르베 르 텔리에</span>
            <span class="gray">민음사 (20220526)</span>
          </div>
          <div>
            <span class="mr10 gray">정가 20,000원</span>
            <span class="mr10 gray">공급률 60%</span>
            <span>공급가 12,000원</span>
          </div>
          <div class="btn-cart-wrap mt10">
            <button class="basic"><v-icon>mdi-cart-variant</v-icon>담기</button>
          </div>
        </div>
      </li>
      <li>
        <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
        <div class="contents">
          <h2>아노말리(양장본 Hardcover)</h2>
          <div class="mt10">
            <span class="mr10">에르베 르 텔리에</span>
            <span class="gray">민음사 (20220526)</span>
          </div>
          <div>
            <span class="mr10 gray">정가 20,000원</span>
            <span class="mr10 gray">공급률 60%</span>
            <span>공급가 12,000원</span>
          </div>
          <div class="btn-cart-wrap mt10">
            <button class="basic"><v-icon>mdi-cart-variant</v-icon>담기</button>
          </div>
        </div>
      </li>
      <li>
        <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
        <div class="contents">
          <h2>아노말리(양장본 Hardcover)</h2>
          <div class="mt10">
            <span class="mr10">에르베 르 텔리에</span>
            <span class="gray">민음사 (20220526)</span>
          </div>
          <div>
            <span class="mr10 gray">정가 20,000원</span>
            <span class="mr10 gray">공급률 60%</span>
            <span>공급가 12,000원</span>
          </div>
          <div class="btn-cart-wrap mt10">
            <button class="basic"><v-icon>mdi-cart-variant</v-icon>담기</button>
          </div>
        </div>
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
  ul {
    li {
      display: flex;
      margin-bottom: 15px;
      padding-top: 15px;
      border-top: 1px dashed #8a8a8a;
      &:first-child {
        padding-top: 0;
        border-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
      .thumbnail {
        width: 100px;
        min-width: 100px;
        img {
          width: 100%;
        }
      }
      .contents {
        padding: 0 10px;
        width: calc(100% - 100px);
        .gray {
          color: #8a8a8a;
        }
      }
    }
  }
}
</style>
