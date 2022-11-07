import axios from "axios";
const baseUrl = "https://api.instapay.kr";
function createQrcodeApi(params, storeId) {
  return axios.get(`${baseUrl}/s2/sell?${params}`, {
    headers: {
      Authorization: `Bearer ${storeId}`,
    },
  });
}

function createApi(params, storeId) {
  return axios.get(`${baseUrl}/s2/buy?i=${params}`, {
    headers: {
      Authorization: `Bearer ${storeId}`,
    },
  });
}

function createWaitApi(params) {
  return axios.get(`${baseUrl}/s2/wait?ti=${params}`);
}

function waitCompleteApi(params) {
  return axios.get(`${baseUrl}/s2/wait?ti=${params}&st=complete`);
}

export { createQrcodeApi, createApi, createWaitApi, waitCompleteApi };
