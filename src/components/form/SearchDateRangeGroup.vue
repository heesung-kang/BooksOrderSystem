<template>
  <section class="search-header d-flex align-center">
    <Selects />
    <input type="text" class="basic" />
    <span class="date-picker"><DatePicker @updateDate="setStartDate" /></span>
    <span class="to">To</span>
    <span class="date-picker"><DatePicker @updateDate="setEndDate" /></span>
    <button class="basic btn" @click="search">검색</button>
  </section>
</template>

<script>
import Selects from "@/components/form/Selects";
import DatePicker from "@/components/form/DatePicker";
export default {
  name: "SearchDateRangeGroup",
  components: { Selects, DatePicker },
  data() {
    return {
      startDate: "",
      endDate: "",
    };
  },
  methods: {
    search() {
      if (this.startDate !== undefined && this.endDate !== undefined) {
        this.startDate > this.endDate ? alert("종료일이 시작일보다 빠릅니다. 시작일을 다시 입력해주세요") : null;
      }
    },
    setStartDate(date) {
      this.startDate = date;
    },
    setEndDate(date) {
      this.endDate = date;
    },
  },
};
</script>

<style lang="scss" scoped>
.date-picker,
.basic,
.to {
  margin-left: 10px;
}
</style>
