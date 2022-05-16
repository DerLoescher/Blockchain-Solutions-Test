import axios from "./axios";

class Api {
  async getCryptoСurrencyRatio() {
    const reqParams = {
      ids: ["ethereum", "bitcoin"],
      vs_currencies: ["usd", "btc", "eth"],
    };
    for (let key in reqParams) {
      reqParams[key] = reqParams[key].join(",");
    }
    const { data: cryptoСurrencyRatio } = await axios.get(
      "/api/v3/simple/price",
      { params: reqParams }
    );
    return cryptoСurrencyRatio;
  }
  async getCryptoСurrencyHistory(paramsForHistoryRatio) {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${paramsForHistoryRatio.id}/market_chart`,
      { params: paramsForHistoryRatio }
    );
    const cryptoСurrencyHistory = data.prices;
    return cryptoСurrencyHistory;
  }
}

export default new Api();
