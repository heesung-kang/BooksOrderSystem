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
      <tr v-for="item in result" :key="item.uid">
        <td>{{ item.publisher }}</td>
        <td>{{ item.count }}</td>
        <td></td>
        <td>{{ $date(item.timestamp.toDate()).format("YYYY-MM-DD HH:mm:ss") }}</td>
      </tr>
    </tbody>
    <tfoot v-if="books.length === 0">
      <tr>
        <td colspan="4">주문 리스트가 없습니다.</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/db";
import { getCookie } from "@/utils/cookie";

export default {
  name: "OrderList",
  props: ["subject1", "subject2", "searchObj"],
  data() {
    return {
      books: [],
      result: [],
    };
  },
  async created() {
    try {
      this.$store.commit("common/setLoading", true);
      const { uid } = getCookie("userInfo");
      const first = query(collection(db, "orderRequest"), where("uid", "==", uid));
      const documentSnapshots = await getDocs(first);
      documentSnapshots.forEach(doc => {
        this.books.push(doc.data());
        console.log(doc.data().timestamp.toDate());
      });
      this.fncArrMerge();
    } catch (e) {
      console.log(e);
    }
    this.$store.commit("common/setLoading", false);
  },
  methods: {
    fncArrMerge() {
      const resultArr = [];
      for (let i = 0; i < this.books.length; i++) {
        let idx = this.getKeyIndex(resultArr, this.books[i]);
        if (idx > -1) {
          //같은종 더하기
          resultArr[idx].count += Number(this.books[i].count);
        } else {
          resultArr.push(this.books[i]);
        }
      }
      this.result = resultArr;
    },
    //중복제거
    getKeyIndex(arr, obj) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].publisher === obj.publisher) {
          return i;
        }
      }
      return -1;
    },
  },
};
</script>

<style lang="scss" scoped></style>
