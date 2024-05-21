import {AxiosResponse} from "axios";
// @ts-ignore
import {RES} from "@/types";
import {ElMessage} from "element-plus";
import {errStatus, errStatusEmun} from "@/enum/errStatus";
import {loadingSetting} from "@/store/Loading/Loading";
import {AxiosError} from "axios";
import {getTimeStamp} from "@/utils/time";
import {userInfo} from "@/store/user/userInfo";

const loading = loadingSetting();

export function callbackSetting() {
  const user = userInfo();
  const timeOut = 8;
  const preRequest = (config) => {
    if (user.token !== "") {
      // 主动检测 判断token是否过期过期-现在大于1小时则过期
      if ((+new Date() - getTimeStamp()) / 1000 > 3600 * timeOut) {
        return Promise.reject(new Error("登录超时"));
      }
      // config.headers['Authorization']
    }

    // 必须要返回的
    return config;
  }

  const preRequestError = (error) => {
    console.log(error); // for debug
    loading.isHide();
    return Promise.reject(error);
  }
  const postRequestDefaultFn = async <T>(response: AxiosResponse<Promise<T>>) => {
    const result: RES<T> = (await response.data) as RES<T>;
    loading.isHide();
    if (result.code === 200) {
      return Promise.resolve(response.data);
    } else {
      result.msg !== ""
          ? ElMessage.error(result.msg)
          : ElMessage.error(errStatus[result.code]);
      throw new Error(JSON.stringify({meg: result.msg, code: result.code}));
    }
  }

  const postrequestErrorFn = (error: AxiosError) => {
    loading.isHide();

    // 处理 HTTP 网络错误
    let message = "";
    // HTTP 状态码
    console.log(error);
    const status = error.response?.status;
    message = errStatusEmun(status);

    ElMessage({
      message: message,
      type: "error",
    });
    return Promise.reject(error);
  }

  return {
    postRequestDefaultFn,
    postrequestErrorFn,
    preRequest,
    preRequestError
  }

}



