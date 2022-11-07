import router from "@/router/index";
export function setInterceprors(instance, data, storeId) {
  console.log("인터셉터 호출");
  instance.interceptors.request.use(
    function (config) {
      config.headers["Content-Type"] = "application/json; charset=utf-8";
      config.headers["Authorization"] = "Bearer " + storeId;
      config.data = data;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    function (response) {
      if (response.status === 401) {
        router.push("/");
      }
      return response;
    },
    function (error) {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error.message);
    },
  );

  return instance;
}
