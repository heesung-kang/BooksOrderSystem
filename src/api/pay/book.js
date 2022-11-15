import axios from "axios";
const baseUrl = "https://dapi.kakao.com";
const key = process.env.VUE_APP_KAKAO_APP_KEY;
function kakaoBookSearchApi(params) {
  return axios
    .get(`${baseUrl}/v3/search/book`, {
      headers: {
        Authorization: `KakaoAK ${key}`,
      },
      params,
    })
    .then(res => res)
    .catch(e => console.log(e));
}
export { kakaoBookSearchApi };
