<template>
  <div class="converter_wrapper">
    <CurrencyConverter
      @currencyForGraphWasSelected="currencyForGraphWasSelected"
    />
    <BarChart
      class="bar_chart"
      v-if="currencyId"
      :selectedRatios="selectedRatios"
      :currencyId="this.currencyId"
    />
  </div>
</template>

<script>
import CurrencyConverter from "./CurrencyConverter.vue";
import BarChart from "./BarChart.vue";

export default {
  name: "converterBody",
  components: {
    CurrencyConverter,
    BarChart,
  },
  data() {
    return {
      currencyId: "",
    };
  },
  methods: {
    currencyForGraphWasSelected(currencyId) {
      this.currencyId = currencyId;
    },
  },
};
</script>

<style lang="scss" scoped>
.converter_wrapper {
  background-color: $main-color;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bar_chart {
  width: 90%;
  height: 100%;
}
</style>