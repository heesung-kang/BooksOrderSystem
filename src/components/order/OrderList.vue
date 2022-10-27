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
            <th>종수</th>
            <th>{{ subject1 }}</th>
            <th>{{ subject2 }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in result" :key="index">
            <td>{{ item.publisher }}</td>
            <td>{{ item.count }}</td>
            <td>{{ item.timestamp }}</td>
            <td>-</td>
          </tr>
        </tbody>
        <tfoot v-if="result.length === 0">
          <tr>
            <td colspan="4">주문 리스트가 없습니다.</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/db";
import { getCookie } from "@/utils/cookie";
import arrMerge from "@/utils/arrMerge";
import TableSkeleton from "@/skeletons/TableSkeleton";

export default {
  name: "OrderList",
  components: { TableSkeleton },
  props: ["subject1", "subject2", "searchObj"],
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
      const first = query(collection(db, "orderRequest"), where("uid", "==", uid));
      const documentSnapshots = await getDocs(first);
      documentSnapshots.forEach(doc => {
        const temp = doc.data();
        temp.timestamp = this.$date(doc.data().timestamp.toDate()).format("YYYY-MM-DD HH:mm:ss");
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
          if (ele.timestamp >= this.searchObj.startDate && ele.timestamp <= this.searchObj.endDate) {
            return ele;
          }
        } else if (this.searchObj.publisher !== "") {
          //검색어가 있는 경우
          if (ele.publisher.includes(this.searchObj.publisher)) {
            if (this.searchObj.startDate !== undefined) {
              //검색어와 날짜가 있는 경우
              if (ele.timestamp >= this.searchObj.startDate && ele.timestamp <= this.searchObj.endDate) {
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
