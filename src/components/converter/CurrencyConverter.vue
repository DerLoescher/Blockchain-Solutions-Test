<template>
  <div class="converter">
    <div>
      <p>Amount</p>
      <input type="number" min="0" class="coin_input" v-model="inputValue" />
    </div>
    <div class="selectors">
      <CurrencySelector
        :title="'from'"
        v-model="this.selectedRatios.from"
        :options="this.currencies"
        @change="currencyForGraphWasSelected"
      />

      <button class="swap_button" @click="swapCurrencies"></button>

      <CurrencySelector
        :title="'to'"
        v-model="this.selectedRatios.to"
        :options="this.currencies"
      />
    </div>
    <div class="result" v-if="isShowResult">
      <span class="input_display"
        >{{ this.inputValue }}
        {{ this.selectedRatios.from.toUpperCase() }} =</span
      >
      <span class="converted_value"
        >{{ convertedValue }} {{ this.selectedRatios.to.toUpperCase() }}</span
      >
    </div>
    <div class="buttons">
      <button class="result_button" @click="clearAllValues">Clear</button>
      <button
        class="result_button"
        @click="this.$store.commit('getCurrencyRatios')"
      >
        Refresh Ratios
      </button>
    </div>
  </div>
</template>

<script>
import CurrencySelector from "../../primitives/CurrencySelector.vue";
export default {
  name: "CurrencyConverter",

  components: {
    CurrencySelector,
  },

  data() {
    return {
      inputValue: "",
      selectedRatios: {
        from: "",
        to: "",
      },
      paramsForHistoryRatio: {
        id: "",
        vs_currency: "usd",
        days: 13,
        interval: "daily",
      },
    };
  },

  methods: {
    swapCurrencies() {
      this.selectedRatios = {
        from: this.selectedRatios.to,
        to: this.selectedRatios.from,
      };
      this.currencyForGraphWasSelected();
    },
    clearAllValues() {
      this.selectedRatios.from = "";
      this.selectedRatios.to = "";
      this.inputValue = "";
      this.currencyForGraphWasSelected();
      this.$store.commit("currencyForGraphWasSelected");
      this.$store.commit("getHistoryRatios");
    },
    currencyForGraphWasSelected() {
      switch (this.selectedRatios.from) {
        case "btc":
          this.paramsForHistoryRatio.id = "bitcoin";
          break;

        case "eth":
          this.paramsForHistoryRatio.id = "ethereum";
          break;

        default:
          this.paramsForHistoryRatio.id = "";
      }
      this.$store.dispatch("getHistoryRatios", this.paramsForHistoryRatio);
      this.$emit("currencyForGraphWasSelected", this.paramsForHistoryRatio.id);
    },
  },

  computed: {
    currencies() {
      return (
        this.$store.state.currencyRatios &&
        Object.keys(this.$store.state.currencyRatios)
      );
    },

    convertedValue() {
      let n =
        this.$store.state.currencyRatios[this.selectedRatios.from][
          this.selectedRatios.to
        ] * this.inputValue;
      return n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },

    isShowResult() {
      return (
        this.selectedRatios.from &&
        this.selectedRatios.to &&
        this.inputValue > 0
      );
    },
  },
};
</script>

<style scoped>
.converter {
  background: #fefefe;
  border-radius: 10px;
  border: #fff1d5 solid 10px;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
  margin: 5%;
}
.selectors {
  display: flex;
  flex-direction: row;
  min-width: 20%;
  justify-content: space-between;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .selectors {
    display: flex;
    flex-direction: column;
  }
}
.select_btn {
  background: #ffd596;
  border-radius: 10px;
  width: 50px;
  height: 20px;
  margin: 5px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.coin_input {
  height: 20px;
  margin-bottom: 10px;
}
.swap_button {
  background: url(../../assets/swap_pic.svg) 50% 50% no-repeat;
  background-size: contain;
  width: 50px;
  height: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.swap_button:active {
  border: #ffd596 solid 3px;
}
.swap_button:hover {
  opacity: 60%;
}
.result {
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.input_display {
  font-size: 16px;
}
.converted_value {
  font-size: 30px;
}
@media screen and (max-width: 850px) {
  .input_display {
    font-size: 10px;
  }
  .converted_value {
    font-size: 20px;
  }
}
@media screen and (max-width: 600px) {
  .swap_button {
    height: 50px;
  }
}
.result_button {
  height: 20px;
  width: 100px;
  margin: 5px;
}
.result_button:hover {
  opacity: 60%;
  cursor: pointer;
}
.result_button:active {
  background: #ffd596;
}
p {
  margin: 5px;
}
button {
  background: #ffbc57;
  border-radius: 10px;
}
</style>
