<template>
  <div>
    <section class="book-list">
      <ul v-if="books.length > 0">
        <li v-for="(book, index) in books" :key="index">
          <section class="contents d-flex align-center justify-space-between">
            <article class="basic-info d-flex align-center">
              <section class="thumbnail">
                <img :src="`https://bookthumb-phinf.pstatic.net/cover/${book.data.image}?type=m1`" :alt="book.data.subject" />
              </section>
              <div class="book-info">
                <h3>{{ book.data.subject }}</h3>
                <div>
                  <span class="mr18">{{ book.data.author }}</span>
                  <span>{{ book.data.publisher }} ({{ book.data.publication_date }})</span>
                </div>
              </div>
            </article>
            <article class="isbn">ISBN : {{ book.data.isbn }}</article>
            <article class="price-info">
              <div class="mr14">정가 {{ book.data.price && book.data.price.toLocaleString() }}원</div>
              <div class="mr10">공급률 {{ book.data.supply_rate }}%</div>
            </article>
            <article class="price">공급가 {{ book.data.price && ((book.data.price * book.data.supply_rate) / 100).toLocaleString() }}원</article>
            <article class="add-cart"><button class="basic">담기</button></article>
          </section>
        </li>
      </ul>
      <div v-else class="book-search-alert">
        <span v-if="infoChange">검색 결과가 없습니다.</span>
        <span v-else>책을 검색해주세요.</span>
      </div>
    </section>
    <div class="btn-more" @click="$emit('more')" v-if="books.length > 0"><button class="basic">더 보기</button></div>
  </div>
</template>

<script>
export default {
  name: "BookList",
  props: ["books", "infoChange"],
};
</script>

<style lang="scss" scoped>
.btn-more {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.book-list {
  margin-top: 14px;
  .book-search-alert {
    text-align: center;
    @include NotoSans(1.6, 500, #000);
    margin-top: 30px;
  }
  ul {
    li {
      background-color: #fff;
      display: flex;
      margin-bottom: 7px;
      padding: 12px 39px 13px 29px;
      width: 100%;
      &:last-child {
        margin-bottom: 0;
      }
      .thumbnail {
        width: 50px;
        height: 75px;
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
          width: 30%;
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
            width: 100%;
            h3 {
              font-size: 1.6rem !important;
            }
            span {
              font-size: 1.6rem !important;
            }
          }
          .isbn {
            margin-top: -20px;
            margin-left: 68px;
            font-size: 1.6rem !important;
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
