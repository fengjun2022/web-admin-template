import {ElMessage} from "element-plus";

export const resultAnalysis = () => {

  const analysis = async <T = any>(fn, args): Promise<T> => {
    try {
      const res = await fn(...args);
      switch (res.code) {
        case 200:
          return new Promise(resolve => resolve(res))
      }

      msgError(res.msg || "网络错误")
      return new Promise((_resolve, reject) => reject(false))

    } catch (e) {
      console.log("失败")
      msgError("网络错误")

      return new Promise((_resolve, reject) => reject(false))

    }


  }


  const msgSuccess = (msg?) => ElMessage.success(msg)
  const msgError = (msg?) => ElMessage.error(msg)

  return {
    analysis,
    msgSuccess,
    msgError
  }
}
