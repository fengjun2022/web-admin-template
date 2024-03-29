import axios from "axios";


import {callbackSetting} from "@/utils/requestCallback";


const service = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT, // url = base url + request url
  timeout: 120000, // request timeout
});

const callback = callbackSetting();


// 请求拦截器
service.interceptors.request.use(
    callback.preRequest,
    callback.preRequestError
);

// 响应拦截器
service.interceptors.response.use(
    callback.postRequestDefaultFn,
    callback.postrequestErrorFn
);

export default service;
