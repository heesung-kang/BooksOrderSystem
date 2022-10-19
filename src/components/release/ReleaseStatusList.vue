<template>
  <section>
    <!-- 출고현황 내역 -->
    <section class="header d-flex" v-if="!mobile">
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
      <li class="d-flex align-center">
        <div class="d-flex align-center info-wrap">
          <div class="ck-box"><v-checkbox v-model="selected" value="9788937427220"></v-checkbox></div>
          <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
          <div class="book-info">
            <h3>아노말리(양장본 Hardcover)</h3>
            <div class="author">에르베 르 텔리에</div>
          </div>
        </div>
        <div class="isbn">9788937427220</div>
        <div class="out-type"><span v-if="mobile">배본 방식</span> 인스타페이</div>
        <div class="status">
          <div v-if="mobile">상태</div>
          <div>출고</div>
          <div>(22.9.20)</div>
        </div>
        <div class="count"><span v-if="mobile">수량</span> 2</div>
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
import { mapGetters } from "vuex";
import { mobileBreakPoint } from "@/utils/mobileBreakPoint";
export default {
  data() {
    return {
      selected: [],
      mobile: false,
    };
  },
  computed: {
    ...mapGetters("common", ["windowWidth"]),
  },
  watch: {
    windowWidth(size) {
      size > mobileBreakPoint ? (this.mobile = false) : (this.mobile = true);
    },
  },
  mounted() {
    this.windowWidth > mobileBreakPoint ? (this.mobile = false) : (this.mobile = true);
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 5px 13px;
  & > div {
    text-align: center;
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
    border: 1px solid #000;
    padding: 5px 13px;
    & > div {
      text-align: center;
      @extend .size;
      .thumbnail {
        width: 40px;
        min-width: 40px;
        img {
          width: 100%;
          height: 50px;
          border: 1px solid #ccc;
        }
      }
      .book-info {
        margin-left: 18px;
        .author {
          text-align: left;
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
        margin-left: 80px;
      }
      .out-type {
        margin: 10px 0 0 83px;
        text-align: left;
        white-space: nowrap;
      }
      .status {
        display: flex;
        margin-left: 83px;
        div {
          white-space: nowrap;
          margin-right: 7px;
        }
      }
      .count {
        margin-left: 83px;
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
