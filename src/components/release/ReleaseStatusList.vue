<template>
  <section>
    <BookListSkeleton v-if="!mobile && skeletonLoading" />
    <BookListMobileSkeleton v-if="mobile && skeletonLoading" />
    <!-- 출고현황 내역 -->
    <section class="header d-flex" v-if="!mobile && !skeletonLoading">
      <div class="d-flex dual">
        <div>수취</div>
        <div>품목정보</div>
      </div>
      <div>ISBN</div>
      <div>배본방식</div>
      <div>상태</div>
      <div>수량</div>
    </section>
    <ul class="body">
      <li class="d-flex align-center" v-for="(book, index) in books" :key="index">
        <div class="d-flex align-center info-wrap">
          <div class="ck-box">
            <v-checkbox v-model="selected" :value="book.id" :disabled="book.data.shop_order_status === 5"></v-checkbox>
          </div>
          <div class="book-info">
            <h3>{{ book.data.subject }}</h3>
            <div class="author">{{ book.data.author }}</div>
          </div>
        </div>
        <div class="isbn">{{ book.data.isbn }}</div>
        <div class="out-type"><span v-if="mobile">배본 방식</span> 아직미설정</div>
        <div class="status">
          <div v-if="mobile">상태</div>
          <div>{{ book.data.shop_order_status === 3 ? "출고대기" : book.data.shop_order_status === 4 ? "출고" : "완료" }}</div>
          <div v-if="book.data.release_time_id !== '-'">({{ book.data.release_time }})</div>
        </div>
        <div class="count"><span v-if="mobile">수량</span> {{ book.data.reply_count }}</div>
      </li>
    </ul>
    <!-- //출고현황 내역 -->
    <!-- 총 합계 --->
    <section class="btn mt24">
      <button class="primary">수취확인</button>
    </section>
    <!-- //총 합계 --->
  </section>
</template>

<script>
import BookListSkeleton from "@/skeletons/BookListSkeleton";
import BookListMobileSkeleton from "@/skeletons/BookListMobileSkeleton";
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/cookie";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/db";
export default {
  components: { BookListMobileSkeleton, BookListSkeleton },
  props: ["id", "orderRealTimeId"],
  data() {
    return {
      selected: [],
      books: [],
    };
  },
  computed: {
    ...mapGetters("common", ["windowWidth", "mobile", "skeletonLoading"]),
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      try {
        this.books = [];
        this.$store.commit("common/setSkeleton", true);
        const { uid } = getCookie("userInfo");
        const first = query(
          collection(db, "orderRequest"),
          where("uid", "==", uid),
          where("sid", "==", Number(this.id)),
          where("order_real_time_id", "==", this.orderRealTimeId),
        );
        const documentSnapshots = await getDocs(first);
        const booksTemp = [];
        documentSnapshots.forEach(doc => {
          booksTemp.push({ id: doc.id, data: doc.data() });
        });
        this.books = booksTemp.filter(ele => {
          if (ele.data.order_check) return ele;
        });
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setSkeleton", false);
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
    font-size: 1.6rem;
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
    }
  }
}
.btn {
  display: flex;
  justify-content: flex-end;
  button {
    @include NotoSans(1.4, 700, #fff);
  }
}
.size {
  &:nth-child(1) {
    width: calc(100% - 380px);
  }
  &:nth-child(2) {
    width: 120px;
  }
  &:nth-child(3) {
    width: 120px;
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
      .ck-box {
        margin-top: 2px;
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
      .out-type {
        margin: 10px 0 0 33px;
        text-align: left;
        white-space: nowrap;
      }
      .status {
        display: flex;
        margin-left: 33px;
        div {
          white-space: nowrap;
          margin-right: 7px;
        }
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
