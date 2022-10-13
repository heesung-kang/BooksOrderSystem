<template>
  <section>
    <Selects />
    <input type="text" class="basic" />
    <DatePicker />
  </section>
</template>

<script>
import Selects from "@/components/form/Selects";
import DatePicker from "@/components/form/DatePicker";
export default {
  name: "SearchDateRangeGroup",
  components: { Selects, DatePicker },
};
</script>

<style lang="scss" scoped></style>
