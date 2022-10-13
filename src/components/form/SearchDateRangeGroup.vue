<template>
  <section>
    <Selects />
    <input type="text" class="basic" />
    <DatePicker @updateDate="setStartDate" />
    <DatePicker @updateDate="setEndDate" />
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
    setStartDate(date) {
      this.startDate = date;
    },
    setEndDate(date) {
      this.endDate = date;
    },
  },
};
</script>

<style lang="scss" scoped></style>
