<template>
  <section>
    <TableSkeleton v-if="skeletonLoading" />
    <div v-else>
      <List :data="result" :status="3" />
      <List :data="result" :status="4" />
      <List :data="result" :status="5" />
      <div v-if="result.length === 0" class="none">리스트가 없습니다.</div>
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
import List from "@/components/release/List";

export default {
  name: "ReleaseList",
  components: { List, TableSkeleton },
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
      const first = query(
        collection(db, "orderRequest"),
        where("uid", "==", uid),
        where("shop_order_status", ">=", 2),
        orderBy("shop_order_status", "desc"),
        orderBy("order_real_time_id", "desc"),
      );
      const documentSnapshots = await getDocs(first);
      documentSnapshots.forEach(doc => {
        const temp = doc.data();
        temp.timestamp = this.$date(doc.data().order_real_time.toDate()).format("YYYY-MM-DD HH:mm:ss");
        temp.searchTimestamp = this.$date(doc.data().order_real_time.toDate()).format("YYYY-MM-DD");
        temp.count = parseInt(temp.count);
        doc.data().order_real_time === null
          ? (temp.orderrealtimestamp = "-")
          : (temp.orderrealtimestamp = this.$date(doc.data().order_real_time.toDate()).format("YYYY-MM-DD HH:mm:ss"));
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
  },
};
</script>
<style lang="scss" scoped>
.none {
  text-align: center;
  margin-top: 20px;
}
</style>
