import { createStore } from "vuex";
import Api from "./api";

const store = createStore({
  state() {
    return {
      currencyRatios: {},
      currencyHistoryRatios: [],
    };
  },
  mutations: {
    setCurrencyRatios(state, data) {
      state.currencyRatios = {
        btc: data.bitcoin,
        eth: data.ethereum,
        usd: {
          usd: 1,
          btc: (1 / data.bitcoin.usd).toPrecision(2),
          eth: (1 / data.ethereum.usd).toPrecision(2),
        },
      };
    },
    setHistoryRatios(state, data) {
      state.currencyHistoryRatios = data;
    },
  },
  actions: {
    async getCurrencyRatios({ commit }) {
      commit("setCurrencyRatios", await Api.getCryptoСurrencyRatio());
    },
    async getHistoryRatios({ commit }, params) {
      commit("setHistoryRatios", await Api.getCryptoСurrencyHistory(params));
    },
  },
});

export default store;
