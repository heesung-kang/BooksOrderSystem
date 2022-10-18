<template>
  <section class="search-header d-flex align-center">
    <span class="d-flex align-center select-wrap">
      <Selects />
      <input type="text" class="basic" />
    </span>
    <span class="d-flex align-center date-wrap">
      <span class="date-picker mobile-margin"><DatePicker @updateDate="setStartDate" /></span>
      <span class="to">To</span>
      <span class="date-picker"><DatePicker @updateDate="setEndDate" /></span>
      <button class="basic btn" @click="search">검색</button>
    </span>
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
.search-header {
  .select-wrap {
    width: 70%;
  }
  .date-wrap {
    width: 30%;
  }
}
@include lnb {
  .search-header {
    .select-wrap {
      width: 60%;
    }
    .date-wrap {
      width: 40%;
    }
  }
}
@include mobile {
  .date-picker,
  .basic,
  .to {
    margin-left: 5px;
  }
  .search-header {
    flex-direction: column;
    .select-wrap {
      width: 100%;
    }
    .date-wrap {
      width: 100%;
      margin-top: 5px;
      .mobile-margin {
        margin-left: 0;
      }
      .date-picker {
        width: calc(50% - 50px);
      }
    }
  }
}
</style>
