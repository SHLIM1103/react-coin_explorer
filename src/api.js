import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coinpaprika.com/v1"
});

export const getPrices = () => api.get("/tickers");
export const getExchanges = () => api.get("/exchanges");
export const getCoins = () => api.get("/coins");
export const getCoinById = (id) => api.get(`/coins/${id}`);
export const getExchangesByCoinId = (id) => api.get(`/coins/${id}/exchanges`);
export const getMarketsByCoinId = (id) => api.get(`/coins/${id}/markets`);
