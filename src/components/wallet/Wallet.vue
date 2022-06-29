<template>
  <div class="wallet_wrapper">
    <div class="wallet">
      <span class="balance">
        BALANCE
        <br />
        $ {{ totalBalance.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") }}
      </span>
      <div class="amount">
        <p>amount in wallet:</p>
        <ul class="amount_wallet">
          <li v-for="(currency, index) in currencies" :key="index">
            {{ currency }} - {{ this.inWalletCurrencies[currency] }} units
          </li>
        </ul>
      </div>
      <DonutDiagram
      :inWalletCurrencies="this.inWalletCurrencies"
      :totalBalance="this.totalBalance"
    />
    </div>
    
    <div class="currency_shop">
      <input
        type="number"
        min="0"
        v-model="inputValue"
        placeholder="how much to buy?"
        class="input_amount"
      />
      <ul class="currencies_list">
        <CurrencyItem
          @currencyWasBought="buyCurrency"
          :currencies="this.currencies"
          :exchangeRateInUsd="this.exchangeRateInUsd"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import CurrencyItem from "./CurrencyItem.vue";
import DonutDiagram from "../../primitives/DonutDiagram.vue";

export default {
  name: "CaseBody",
  components: {
    CurrencyItem,
    DonutDiagram,
  },
  data() {
    return {
      inputValue: "",
      inWalletCurrencies: {
        bitcoin: 0,
        ethereum: 0,
        usd: 0,
      },
    };
  },
  methods: {
    buyCurrency(currency) {
      if (this.inputValue != "") {
        this.inWalletCurrencies[currency] += +this.inputValue;
        this.inputValue = "";
      } else {
        return;
      }
    },
  },
  computed: {
    totalBalance() {
      let n =
        this.exchangeRateInUsd.bitcoin * this.inWalletCurrencies.bitcoin +
        this.exchangeRateInUsd.ethereum * this.inWalletCurrencies.ethereum +
        this.exchangeRateInUsd.usd * this.inWalletCurrencies.usd;
      return n;
    },
    exchangeRateInUsd() {
      return {
        bitcoin: this.$store.state.currencyRatios.btc.usd,
        ethereum: this.$store.state.currencyRatios.eth.usd,
        usd: 1,
      };
    },
    currencies() {
      return this.exchangeRateInUsd && Object.keys(this.exchangeRateInUsd);
    },
  },
};
</script>

<style lang='scss' scoped>
.wallet_wrapper {
  background-color: $main-color;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 10px;
  display: flex;

  justify-content: flex-start;
  align-items: center;
}
@media screen and (max-width: 1030px) {
  .wallet_wrapper {
    flex-direction: column;
  }
}
.wallet {
  align-self: flex-start;
  margin-right: 12%;
  margin-bottom: 30px;
  min-width: 15%;
}
.balance {
  font-size: 25px;
  font-weight: bold;
}
.currency_shop {
  align-self: center;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 700px) {
  .currency_shop {
    width: 60%;
  }
}
.amount {
  width: 100%;
}
.amount_wallet {
  background: $secondary-color;
  padding: 2%;
  border-radius: 5px;
}
.input_amount {
  margin: 10px;
  padding: 5px;
  width: 60%;
  height: 30px;
  border: black 2px solid;
  border-radius: 3px;
}
.currencies_list {
  background: $secondary-color;
  border-radius: 10px;
  min-width: 100%;
  padding: 10px;
}
</style>
