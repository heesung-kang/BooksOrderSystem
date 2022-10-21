<template>
  <table class="basic">
    <caption>
      출판사별 주문리스트
    </caption>
    <thead>
      <tr>
        <th>출판사</th>
        <th>종수</th>
        <th>{{ subject1 }}</th>
        <th>{{ subject2 }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
      <tr>
        <td>북스피어</td>
        <td>5</td>
        <td>2022.10.04 09:41:23</td>
        <td>2022.10.04 09:41:23</td>
      </tr>
    </tbody>
    <tfoot v-if="list.length === 0">
      <tr>
        <td colspan="4">주문 리스트가 없습니다.</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "OrderList",
  props: ["subject1", "subject2"],
  data() {
    return {
      list: ["test"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
