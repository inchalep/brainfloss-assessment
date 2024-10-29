import axios, { AxiosError, AxiosResponse } from "axios";
const url = process.env.REACT_APP_API_URL;
const instance = axios.create({
  baseURL: url,
  timeout: 10000,
});

// instance.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
//   localStorage.getItem("token")
// )}`;
instance.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function <T>(config: T): T {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function <T>(response: AxiosResponse<T>): AxiosResponse<T> {
    return response;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

export const _post = async <T, R>(url: string, payload: T): Promise<R> => {
  return await instance.post(url, payload);
};

export const _get = async <T>(url: string | ""): Promise<T> => {
  return await instance.get(url);
};
