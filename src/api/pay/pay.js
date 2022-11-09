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

function test() {
  const frm = new FormData();
  frm.append("aid", "n20mn-lz22g-10t31-15t36-y24oa");
  frm.append(
    "pack",
    "jYtLDkAwEEDvMmuVmfpErVxlaCP1KaGNiLg7EgtL2/c5wIxsByjBdZsiLCrrVs8z73G/QAQhWM23zRKtsOFUZIVRgshooeqcBcpUckMSEeWb1//zgb31QZv7IMQHTK79IDgv",
  );
  frm.append("pack_h", "rdu+7NlLxveNOIKBulX5Qt5Ez6LfQb1L5d8XWEHXvhM=");
  return axios.post(`${baseUrl}/v3/mlogin`, frm).then(res => console.log(res));
}

export { createQrcodeApi, createApi, createWaitApi, waitCompleteApi, test };
