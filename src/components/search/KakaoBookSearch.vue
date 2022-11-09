<template>
  <div>
    <ul v-if="list.length > 0">
      <li v-for="item in list" :key="item.isbn" @click="isbn(item.isbn)">{{ item.title }} : {{ item.isbn }}</li>
    </ul>
  </div>
</template>

<script>
import { kakaoBookSearchApi } from "@/api/pay/book";
export default {
  name: "KakaoBookSearch",
  props: ["keyword", "search", "clear"],
  data() {
    return {
      list: [],
    };
  },
  watch: {
    search() {
      this.searchBooks();
    },
    clear() {
      this.list = [];
    },
  },
  methods: {
    async searchBooks() {
      this.$store.commit("common/setLoading", true);
      const response = await kakaoBookSearchApi({ query: this.keyword });
      this.$store.commit("common/setLoading", false);
      if (response.status === 200) {
        this.list = [];
        this.list = response.data.documents;
        this.list.forEach(ele => {
          const isbn = ele.isbn.split(" ");
          ele.isbn = isbn[1];
        });
        response.data.documents.length === 0 ? this.$emit("result", false) : null;
      } else {
        this.$emit("result", false);
      }
    },
    isbn(num) {
      this.$emit("result", num);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #000;
  padding: 10px 10px 10px 15px !important;
  line-height: 2.4rem;
  overflow: auto;
  max-height: 200px;
  li {
    position: relative;
    font-size: 1.4rem;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      left: -7px;
      top: 10px;
      width: 4px;
      height: 4px;
      background-color: #000;
      border-radius: 50%;
    }
  }
}
</style>
