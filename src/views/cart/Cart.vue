<template>
  <section class="sub-container">
    <h2 class="sub-title">장바구니</h2>
    <table class="basic">
      <caption>
        장바구니 리스트
      </caption>
      <colgroup>
        <col width="*" />
        <col width="120" />
        <col width="150" />
        <col width="80" />
        <col width="80" />
        <col width="80" />
        <col width="80" />
      </colgroup>
      <thead>
        <tr>
          <th>품목정보</th>
          <th>출판사</th>
          <th>ISBN</th>
          <th>정가</th>
          <th>공급률</th>
          <th>공급가</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="book-wrap">
              <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
              <div class="book-info">
                <h3>아노말리(양장본 Hardcover)</h3>
                <span class="author">에르베 르 텔리에</span>
              </div>
            </div>
          </td>
          <td>율곡출판사</td>
          <td>9788937427220</td>
          <td>20,000</td>
          <td>60%</td>
          <td>12,000</td>
          <td><input type="number" class="basic" /></td>
        </tr>
        <tr>
          <td>
            <div class="book-wrap">
              <div class="thumbnail"><img src="@/assets/images/book.jpg" alt="" /></div>
              <div class="book-info">
                <h3>아노말리(양장본 Hardcover)</h3>
                <span class="author">에르베 르 텔리에</span>
              </div>
            </div>
          </td>
          <td>율곡출판사</td>
          <td>9788937427220</td>
          <td>20,000</td>
          <td>60%</td>
          <td>12,000</td>
          <td><input type="number" class="basic" /></td>
        </tr>
      </tbody>
      <!--     상품 없을시 처리예정 <tfoot>-->
      <!--        <tr>-->
      <!--          <td colspan="7">장바구니에 담기 상품이 없습니다.</td>-->
      <!--        </tr>-->
      <!--      </tfoot>-->
    </table>
    <section class="total-wrap mt20">
      <span class="total-prod mr20">총 6권</span>
      <span class="total mr20">합계 72,000원</span>
      <button class="primary">주문</button>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
table {
  tr {
    td {
      input[type="number"] {
        width: 50px !important;
      }
      .book-wrap {
        display: flex;
        .thumbnail {
          width: 50px;
          min-width: 50px;
          img {
            width: 100%;
          }
        }
        .book-info {
          margin-left: 5px;
          text-align: left;
        }
      }
    }
  }
}
.total-wrap {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .total-prod {
    font-size: 2rem;
  }
  .total {
    font-size: 2rem;
  }
  button {
    color: #fff;
    width: 150px;
    font-size: 1.8rem;
  }
}
</style>
