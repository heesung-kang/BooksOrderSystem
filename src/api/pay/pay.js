import { createInstanceWithAuth } from "../index";

function createQrcodeApi(params, storeId) {
  return createInstanceWithAuth(`/s2/sell?${params}`, {}, {}, storeId).get();
}

function createApi(params, storeId) {
  return createInstanceWithAuth(`/s2/buy?i=${params}`, {}, {}, storeId).get();
}

function createWaitApi(params) {
  return createInstanceWithAuth(`/s2/wait?ti=${params}`, {}, {}, {}).get();
}

function waitCompleteApi(params) {
  return createInstanceWithAuth(`/s2/wait?ti=${params}&st=complete`, {}, {}, {}).get();
}

export { createQrcodeApi, createApi, createWaitApi, waitCompleteApi };
