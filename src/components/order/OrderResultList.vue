<template>
  <section>
    <BookListSkeleton v-if="!mobile && skeletonLoading" />
    <BookListMobileSkeleton v-if="mobile && skeletonLoading" />
    <!-- 발주 내역 -->
    <section class="header d-flex" v-if="!mobile && !skeletonLoading">
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
      <div>주문</div>
      <div>공급</div>
    </section>
    <ul class="body">
      <li class="d-flex align-center" v-for="(book, index) in books" :key="index">
        <div class="d-flex align-center info-wrap">
          <div class="ck-box"><v-checkbox v-model="selected" :value="book.id"></v-checkbox></div>
          <div class="book-info">
            <h3>{{ book.data.subject }}</h3>
            <div class="author">{{ book.data.author }}</div>
          </div>
        </div>
        <div class="isbn">{{ book.data.isbn }}</div>
        <div class="d-flex price-info">
          <div class="normal-price"><span v-if="mobile">정가</span> {{ book.data.price?.toLocaleString() }}</div>
          <div><span v-if="mobile">공급률</span> {{ book.data.supply_rate }}%</div>
        </div>
        <div class="final-price"><span v-if="mobile">공급가</span> {{ ((book.data.price * book.data.supply_rate) / 100).toLocaleString() }} 원</div>
        <div class="count"><span v-if="mobile">주문</span> {{ book.data.count }}</div>
        <div class="count"><span v-if="mobile">공급</span> {{ book.data.reply_count === null ? "-" : book.data.reply_count }}</div>
      </li>
    </ul>
    <!-- //발주 내역 -->
    <!-- 메모 -->
    <section class="memo" v-if="books[0]?.data.memo !== '-' && books.length !== 0">
      <h4>메모</h4>
      <div>{{ books[0]?.data.memo }}</div>
    </section>
    <!-- //메모 -->
    <!-- 총 합계 --->
    <section class="total-wrap mt24" v-if="!skeletonLoading">
      <div>
        <span class="total-prod">총 {{ bookCount }}권</span>
        <span class="total">합계 {{ totalPrice.toLocaleString() }}원</span>
      </div>
      <button class="primary" @click="order" :disabled="books[0]?.data.shop_order_status !== 1">발주</button>
    </section>
    <!-- //총 합계 --->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/cookie";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/db";
import BookListSkeleton from "@/skeletons/BookListSkeleton";
import BookListMobileSkeleton from "@/skeletons/BookListMobileSkeleton";
export default {
  components: { BookListMobileSkeleton, BookListSkeleton },
  props: ["id", "orderTimeId"],
  data() {
    return {
      books: [],
      selected: [],
    };
  },
  computed: {
    ...mapGetters("common", ["windowWidth", "mobile", "skeletonLoading"]),
    bookCount() {
      //총 권수 계산
      let count = 0;
      this.books.forEach(ele => (count += Number(ele.data.count)));
      return count;
    },
    totalPrice() {
      //총 금액 계산
      let price = 0;
      this.books.forEach(ele => {
        price += (ele.data.price * ele.data.supply_rate * ele.data.count) / 100;
      });
      return price;
    },
  },
  async created() {
    try {
      this.$store.commit("common/setSkeleton", true);
      const { uid } = getCookie("userInfo");
      const first = query(
        collection(db, "orderRequest"),
        where("uid", "==", uid),
        where("sid", "==", Number(this.id)),
        where("order_time_id", "==", this.orderTimeId),
      );
      const documentSnapshots = await getDocs(first);
      documentSnapshots.forEach(doc => {
        this.books.push({ id: doc.id, data: doc.data() });
      });
    } catch (e) {
      console.log(e);
    }
    this.$store.commit("common/setSkeleton", false);
  },
  methods: {
    order() {},
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 5px 13px;
  & > div {
    text-align: center;
    font-size: 1.6rem;
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
    padding: 5px 13px;
    margin-bottom: 6px;
    & > div {
      text-align: center;
      @extend .size;
      .book-info {
        margin-left: 8px;
        h3 {
          @include NotoSans(1.6, 500, #000);
        }
        .author {
          text-align: left;
          @include NotoSans(1.4, 400, #000);
        }
      }
      &.final-price {
        @include NotoSans(1.4, 700, #000);
      }
    }
  }
}
.memo {
  h4 {
    @include NotoSans(1.6, 500, #000);
  }
  @include NotoSans(1.4, 400, #000);
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
    &:disabled {
      background-color: #f4f4f4 !important;
      color: #aaaaaa;
      font-weight: 400;
    }
  }
}
.size {
  &:nth-child(1) {
    width: calc(100% - 360px);
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
  &:nth-child(6) {
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
        .ck-box {
          margin-top: 2px;
        }
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
        margin-left: 30px;
      }
      .price-info {
        margin-left: 33px;
        .normal-price {
          margin-right: 20px;
        }
        div {
          text-align: left;
          white-space: nowrap;
        }
      }
      .final-price {
        margin: 10px 0 0 33px;
        text-align: left;
        white-space: nowrap;
      }
      .count {
        margin-left: 33px;
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
