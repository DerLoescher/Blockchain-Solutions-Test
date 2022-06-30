<template>
  <div>
    <li
      class="currency_item"
      v-for="(currency, index) in currencies"
      :key="index"
    >
      <div class="currency_item_data">
        <div>
          {{ currency.toUpperCase() }}
        </div>
        <div>{{ this.exchangeRateInUsd[`${currency}`] }} $</div>
      </div>
      <div>
        <button class="buy_btn" @click="$emit('currencyWasBought', currency)">
          BUY
        </button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: "CurrencyItem",
  props: {
    exchangeRateInUsd: Object,
    currencies: Object,
  },
};
</script>

<style lang='scss' scoped>
.currency_item {
  min-width: 20px;
  background: $bg-color;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.currency_item_data {
  display: flex;
  flex-direction: column;
}
.buy_btn {
  width: 50px;
  height: 30px;
  margin: 5px;
  @extend %btn-style;
}
</style>