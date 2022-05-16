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

<style scoped>
.currency_item {
  min-width: 20px;
  background: #fefefe;
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
  background: #ffbc57;
  border-radius: 10px;
}
.buy_btn:hover {
  opacity: 60%;
  cursor: pointer;
}
.buy_btn:active {
  background: #ffd596;
}
</style>