<template>
  <section class="book-list">
    <ul>
      <li>
        <section class="contents d-flex align-center justify-space-between">
          <article class="basic-info d-flex align-center">
            <section class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></section>
            <div class="book-info">
              <h3>아노말리(양장본 Hardcover)</h3>
              <div>
                <span class="mr18">에르베 르 텔리에</span>
                <span>민음사 (20220526)</span>
              </div>
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
      width: 100%;
      &:last-child {
        margin-bottom: 0;
      }
      .thumbnail {
        width: 50px;
        min-width: 50px;
        img {
          height: 75px;
          border: 1px solid #ccc;
          object-fit: cover;
        }
      }
      .contents {
        width: 100%;
        .basic-info {
          .book-info {
            margin-left: 18px;
            h3 {
              @include NotoSans(1.6, 500, #000);
            }
            span {
              @include NotoSans(1.4, 400, #000);
            }
          }
        }
        .price-info {
          div {
            @include NotoSans(1.4, 400, #000);
          }
        }
        .price {
          @include NotoSans(1.4, 700, #000);
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
@include mobile {
  .book-list {
    ul {
      li {
        padding: 19px 18px;
        .contents {
          flex-direction: column;
          align-items: flex-start !important;
          .basic-info {
            align-items: flex-start !important;
            h3 {
              font-size: 1.6rem !important;
            }
            span {
              font-size: 1.6rem !important;
            }
          }
          .price-info {
            margin-left: 68px;
            div {
              font-size: 1.6rem !important;
            }
          }
          .price {
            font-size: 1.6rem !important;
            margin: 15px 0 0 68px;
          }
          .add-cart {
            margin: 15px 0 0 68px;
          }
        }
      }
    }
  }
}
</style>
