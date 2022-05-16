import AxiosOrigin from "axios";

const axios = AxiosOrigin.create({
  baseURL: "https://api.coingecko.com",
});

export default axios;
