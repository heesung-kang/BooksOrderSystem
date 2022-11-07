import axios from "axios";
import { setInterceprors } from "@/api/common/interceptors";
//헤더 인터셉터
function createInstanceWithAuth(url, paramData, params, storeId) {
  const instance = axios.create({
    withCredentials: true,
    baseURL: url,
    params: params,
    validateStatus: function (status) {
      // 상태 코드가 402 이상일 경우 거부. 나머지(402보다 작은)는 허용.
      return status < 500;
    },
  });
  return setInterceprors(instance, paramData, storeId);
}
export { createInstanceWithAuth };
