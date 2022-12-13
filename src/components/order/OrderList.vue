<template>
  <section>
    <TableSkeleton v-if="skeletonLoading" />
    <div v-else>
      <table class="basic">
        <caption>
          출판사별 주문리스트
        </caption>
        <thead>
          <tr>
            <th>출판사</th>
            <th>수량</th>
            <th>상태</th>
            <th>발신일시</th>
            <th>회신일시</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in result" :key="index" @click="statement({ id: item.sid, date: item.timestamp, orderTimeId: item.order_time_id, publisher: item.publisher })">
            <td>{{ item.publisher }}</td>
            <td>
              <span v-if="item.shop_order_status === 0">{{ item.count }}</span>
              <span v-else-if="item.shop_order_status === 1">{{ item.reply_count }}</span>
              <span v-else>{{ item.totalCount }}</span>
            </td>
            <td>{{ item.shop_order_status === 0 ? "회신 전" : item.shop_order_status === 1 ? "회신" : "발주" }}</td>
            <td class="time">{{ item.timestamp }}</td>
            <td class="time">{{ item.replytimestamp }}</td>
          </tr>
        </tbody>
        <tfoot v-if="result.length === 0">
          <tr>
            <td colspan="5">주문 리스트가 없습니다.</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/utils/db";
import { getCookie } from "@/utils/cookie";
import arrMerge from "@/utils/arrMerge";
import TableSkeleton from "@/skeletons/TableSkeleton";

export default {
  name: "OrderList",
  components: { TableSkeleton },
  props: ["searchObj"],
  data() {
    return {
      books: [],
      result: [],
      searchResult: [],
    };
  },
  computed: {
    ...mapGetters("common", ["skeletonLoading"]),
  },
  watch: {
    searchObj() {
      this.search();
    },
  },
  async created() {
    try {
      this.$store.commit("common/setSkeleton", true);
      const { uid } = getCookie("userInfo");
      const first = query(collection(db, "orderRequest"), where("uid", "==", uid), orderBy("order_time_id", "desc"));
      const documentSnapshots = await getDocs(first);
      documentSnapshots.forEach(doc => {
        const temp = doc.data();
        temp.timestamp = this.$date(doc.data().order_time.toDate()).format("YYYY-MM-DD HH:mm:ss");
        temp.searchTimestamp = this.$date(doc.data().order_time.toDate()).format("YYYY-MM-DD");
        temp.count = parseInt(temp.count);
        doc.data().reply_time === null ? (temp.replytimestamp = "-") : (temp.replytimestamp = this.$date(doc.data().reply_time.toDate()).format("YYYY-MM-DD HH:mm:ss"));
        this.books.push(temp);
      });
      this.result = arrMerge(this.books);
      this.searchResult = this.searchResult.concat(this.result);
    } catch (e) {
      console.log(e);
    }
    this.$store.commit("common/setSkeleton", false);
  },
  methods: {
    //검색
    search() {
      this.result = this.searchResult.filter(ele => {
        if (this.searchObj.publisher === "" && this.searchObj.startDate === undefined) {
          //검색어와 날짜가 비어 있는 경우
          return ele;
        } else if (this.searchObj.publisher === "" && this.searchObj.startDate !== undefined) {
          //날짜만 있는경우
          if (ele.searchTimestamp >= this.searchObj.startDate && ele.searchTimestamp <= this.searchObj.endDate) {
            return ele;
          }
        } else if (this.searchObj.publisher !== "") {
          //검색어가 있는 경우
          if (ele.publisher.includes(this.searchObj.publisher)) {
            if (this.searchObj.startDate !== undefined) {
              //검색어와 날짜가 있는 경우
              if (ele.searchTimestamp >= this.searchObj.startDate && ele.searchTimestamp <= this.searchObj.endDate) {
                return ele;
              }
            } else {
              return ele;
            }
          }
        }
      });
    },
    statement(data) {
      this.$router.push(`/OrderResult/${data.id}/${data.date}/${data.orderTimeId}/${data.publisher}`);
    },
  },
};
</script>
<style lang="scss" scoped>
td {
  cursor: pointer;
  &.time {
    font-size: 1.4rem !important;
  }
}
</style>
