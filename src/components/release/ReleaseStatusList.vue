<template>
  <section>
    <BookListSkeleton v-if="!mobile && skeletonLoading" />
    <BookListMobileSkeleton v-if="mobile && skeletonLoading" />
    <!-- 출고현황 내역 -->
    <section class="header d-flex" v-if="!mobile && !skeletonLoading">
      <div class="d-flex dual">
        <div>
          <v-checkbox v-model="selectedAll" v-if="!completeAll"></v-checkbox>
        </div>
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
            <span v-if="book.data.shop_order_status === 5">완료</span>
            <v-checkbox v-if="book.data.shop_order_status === 3" disabled></v-checkbox>
            <v-checkbox v-model="selected" :value="book.id" v-if="book.data.shop_order_status === 4"></v-checkbox>
          </div>
          <div class="book-info">
            <h3>{{ book.data.subject }}</h3>
            <div class="author">{{ book.data.author }}</div>
          </div>
        </div>
        <div class="isbn">{{ book.data.isbn }}</div>
        <div class="out-type"><span v-if="mobile">배본 방식</span> {{ book.data.distribution }}</div>
        <div class="status">
          <div v-if="mobile">상태</div>
          <div>{{ book.data.shop_order_status === 3 ? "출고대기" : book.data.shop_order_status === 4 ? "출고" : "완료" }}</div>
          <div v-if="book.data.release_time_id !== null">({{ book.data.timestamp }})</div>
        </div>
        <div class="count"><span v-if="mobile">수량</span> {{ book.data.reply_count }}</div>
      </li>
    </ul>
    <!-- //출고현황 내역 -->
    <!-- 총 합계 --->
    <section class="btn mt24" v-if="books[0]?.data.shop_order_status > 3">
      <button class="primary mr10" @click="exportExcel">엑셀출력</button>
      <button class="primary" @click="complete" v-if="!completeAll">수취확인</button>
    </section>
    <!-- //총 합계 --->
    <Toast :status="status" :message="message" />
  </section>
</template>

<script>
import BookListSkeleton from "@/skeletons/BookListSkeleton";
import BookListMobileSkeleton from "@/skeletons/BookListMobileSkeleton";
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/cookie";
import { collection, doc, getDocs, query, serverTimestamp, where, writeBatch } from "firebase/firestore";
import { db } from "@/utils/db";
import XLSX from "sheetjs-style";
import Toast from "@/components/common/Toast";
export default {
  components: { BookListMobileSkeleton, BookListSkeleton, Toast },
  props: ["id", "orderRealTimeId"],
  data() {
    return {
      selected: [],
      books: [],
      selectedAll: false,
      allID: [],
      completeAll: false,
      message: "",
      status: false,
    };
  },
  computed: {
    ...mapGetters("common", ["windowWidth", "mobile", "skeletonLoading"]),
  },
  watch: {
    selected() {
      this.allID.length === this.selected.length ? (this.selectedAll = true) : (this.selectedAll = false); //전체체크 연동
    },
    selectedAll(n) {
      //전체체크
      if (n) {
        this.selected = this.allID;
      } else {
        if (this.allID.length === this.selected.length) {
          this.selected = [];
        }
      }
    },
  },
  created() {
    this.load();
  },
  methods: {
    async load() {
      try {
        this.books = [];
        this.allID = [];
        this.$store.commit("common/setSkeleton", true);
        const { uid } = getCookie("userInfo");
        const first = query(collection(db, "orderRequest"), where("uid", "==", uid), where("sid", "==", Number(this.id)), where("order_real_time_id", "==", this.orderRealTimeId));
        const documentSnapshots = await getDocs(first);
        const booksTemp = [];
        documentSnapshots.forEach(doc => {
          const temp = doc.data();
          if (doc.data().release_time !== null) {
            temp.timestamp = this.$date(doc.data().release_time.toDate()).format("YY.MM.DD");
          }
          if (doc.data().shop_order_status === 4) {
            this.allID.push(doc.id);
          }
          booksTemp.push({ id: doc.id, data: temp });
        });
        this.books = booksTemp.filter(ele => {
          if (ele.data.order_check) return ele;
        });
        this.completeAll = !this.books.some(v => v.data.shop_order_status === 4);
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setSkeleton", false);
    },
    async complete() {
      if (this.selected.length === 0) {
        this.status = !this.status;
        this.message = "수취완료할 상품을 체크해주세요";
        return;
      }
      const batch = writeBatch(db);
      try {
        this.$store.commit("common/setLoading", true);
        const timestamp = serverTimestamp();
        await this.selected.forEach(ele => {
          const docRef = doc(db, "orderRequest", ele);
          batch.update(docRef, {
            shop_order_status: 5,
            complete_time_id: this.$date().format("YYYYMMDDHHmmss"),
            complete_time: timestamp,
          });
        });
        await batch.commit();
        await this.load();
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setLoading", false);
    },
    //엑셀출력
    exportExcel() {
      const excelData = [];
      this.books.forEach(ele => {
        excelData.push({
          subject: ele.data.subject,
          author: ele.data.author,
          publisher: ele.data.publisher,
          isbn: ele.data.isbn,
          distribution: ele.data.distribution,
          timestamp: ele.data.timestamp,
          reply_count: ele.data.reply_count,
        });
      });
      const booksWS = XLSX.utils.json_to_sheet(excelData);
      const wb = XLSX.utils.book_new(); // make Workbook of Excel
      //셀 제목 변경
      booksWS["A1"].v = "제목";
      booksWS["B1"].v = "저자";
      booksWS["C1"].v = "출판사";
      booksWS["D1"].v = "isbn";
      booksWS["E1"].v = "배본방식";
      booksWS["F1"].v = "출고일";
      booksWS["G1"].v = "수량";
      booksWS["A1"].s = {
        fill: {
          fgColor: { rgb: "d9ead3" },
        },
      };
      booksWS["B1"].s = {
        fill: {
          fgColor: { rgb: "d9ead3" },
        },
      };
      booksWS["C1"].s = {
        fill: {
          fgColor: { rgb: "d9ead3" },
        },
      };
      booksWS["D1"].s = {
        fill: {
          fgColor: { rgb: "d9ead3" },
        },
      };
      booksWS["E1"].s = {
        fill: {
          fgColor: { rgb: "d9ead3" },
        },
      };
      booksWS["F1"].s = {
        fill: {
          fgColor: { rgb: "d9ead3" },
        },
      };
      booksWS["G1"].s = {
        fill: {
          fgColor: { rgb: "d9ead3" },
        },
      };
      XLSX.utils.book_append_sheet(wb, booksWS, "books"); // sheetAName is name of Worksheet
      XLSX.writeFile(wb, "출고리스트.xlsx");
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
          @include NotoSans(1.5, 500, #000);
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
        white-space: nowrap;
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
