<template>
  <table class="basic mb50" v-if="dataInit">
    <caption>
      출판사별 주문리스트
    </caption>
    <thead>
      <tr>
        <th>출판사</th>
        <th>수량</th>
        <th>상태</th>
        <th>발주일시</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in data"
        :key="index"
        @click="statement({ id: item.sid, date: item.timestamp, orderRealTimeId: item.order_real_time_id, publisher: item.publisher })"
      >
        <td v-if="item.shop_order_status === status">{{ item.publisher }}</td>
        <td v-if="item.shop_order_status === status">
          <span v-if="item.shop_order_status < 2">{{ item.count }}</span>
          <span v-else>{{ item.totalCount }}</span>
        </td>
        <td v-if="item.shop_order_status === status">
          {{ item.shop_order_status === 3 ? "출고대기" : item.shop_order_status === 4 ? "출고" : item.shop_order_status === 5 ? "완료" : "" }}
        </td>
        <td v-if="item.shop_order_status === status">{{ item.orderrealtimestamp }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "List",
  props: ["data", "status"],
  data() {
    return {
      dataInit: false,
    };
  },
  watch: {
    data(n) {
      this.dataInit = n.some(v => v.shop_order_status === this.status);
    },
  },
  mounted() {
    this.dataInit = this.data.some(v => v.shop_order_status === this.status);
  },
  methods: {
    statement(data) {
      this.$router.push(`/ReleaseStatus/${data.id}/${data.date}/${data.orderRealTimeId}/${data.publisher}`);
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  cursor: pointer;
}
</style>
