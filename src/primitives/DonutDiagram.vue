<template>
  <vc-donut
    background="white"
    foreground="grey"
    :size="150"
    unit="px"
    :thickness="30"
    has-legend
    legend-placement="top"
    :sections="sections"
    :total="this.totalBalance"
    :start-angle="0"
    :auto-adjust-text-size="true"
  >
  </vc-donut>
</template>
<script>
export default {
  name: "DonutDiagram",
  props: {
    totalBalance: Number,
    inWalletCurrencies: Object,
  },
  data() {},

  computed: {
    sections() {
      return [
        {
          label: "Bitcoin",
          value:
            this.inWalletCurrencies.bitcoin *
            this.$store.state.currencyRatios.btc.usd,
          color: "yellow",
        },
        {
          label: "US Dollar",
          value: this.inWalletCurrencies.usd,
          color: "green",
        },
        {
          label: "Ethereum",
          value:
            this.inWalletCurrencies.ethereum *
            this.$store.state.currencyRatios.eth.usd,
          color: "purple",
        },
      ];
    },
  },
};
</script>