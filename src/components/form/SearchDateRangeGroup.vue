<template>
  <section class="search-header d-flex align-center">
    <span class="d-flex align-center select-wrap">
      <Selects :itemList="itemList" />
      <input type="text" class="basic" v-model="publisher" @keypress.enter="search" />
    </span>
    <span class="d-flex align-center date-wrap">
      <span class="date-picker mobile-margin"><DatePicker @updateDate="setStartDate" :clear="clear" /></span>
      <span class="to">To</span>
      <span class="date-picker"><DatePicker @updateDate="setEndDate" :clear="clear" /></span>
      <button class="basic btn" @click="search">검색</button>
    </span>
    <Toast :status="status" :message="message" />
  </section>
</template>

<script>
import Selects from "@/components/form/Selects";
import DatePicker from "@/components/form/DatePicker";
import Toast from "@/components/common/Toast";
export default {
  name: "SearchDateRangeGroup",
  components: { Selects, DatePicker, Toast },
  props: ["itemList"],
  data() {
    return {
      startDate: "",
      endDate: "",
      publisher: "",
      clear: false,
      message: "",
      status: false,
    };
  },
  methods: {
    search() {
      if (this.startDate === undefined && this.endDate !== undefined) {
        this.status = !this.status;
        this.message = "시작일을 입력해주세요";
        return;
      }
      if (this.startDate !== undefined && this.endDate === undefined) {
        this.status = !this.status;
        this.message = "종료일을 입력해주세요";
        return;
      }
      if (this.startDate !== undefined && this.endDate !== undefined) {
        if (this.startDate > this.endDate) {
          this.status = !this.status;
          this.message = "종료일이 시작일보다 빠릅니다.<br/> 시작일을 다시 입력해주세요";
          return;
        }
      }
      this.$emit("search", { publisher: this.publisher, startDate: this.startDate, endDate: this.endDate });
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
    width: 65%;
  }
  .date-wrap {
    width: 35%;
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
