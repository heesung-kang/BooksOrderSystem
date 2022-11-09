import axios from "axios";
const baseURL = "https://api.instapay.kr";
const storeId = process.env.VUE_APP_STORE_ID;

function createQrcodeApi(params) {
  return axios.get(`${baseURL}/s2/sell?${params}`, {
    headers: {
      Authorization: `Bearer ${storeId}`,
    },
  });
}

function createApi(params) {
  return axios.get(`${baseURL}/s2/buy?i=${params}`, {
    headers: {
      Authorization: `Bearer ${storeId}`,
    },
  });
}

function createWaitApi(params) {
  return axios.get(`${baseURL}/s2/wait?ti=${params}`);
}

function waitCompleteApi(params) {
  return axios.get(`${baseURL}/s2/wait?ti=${params}&st=complete`);
}

export { createQrcodeApi, createApi, createWaitApi, waitCompleteApi };
