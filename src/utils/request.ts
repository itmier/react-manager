/*
 * @Author: Tmier
 * @Date: 2023-12-20 20:56:43
 * @LastEditTime: 2024-01-03 22:32:46
 * @LastEditors: Tmier
 * @Description:
 *
 */
import { message } from 'antd'
import Axios, { AxiosRequestConfig } from 'axios'
import { HideLoading, ShowLoading } from './loading'

const instance = Axios.create({
  baseURL: '/api',
  timeout: 1000 * 60,
  timeoutErrorMessage: '请求超时了...',
  withCredentials: true
})

instance.interceptors.request.use(
  config => {
    ShowLoading()
    // 此处可新建本地环境变量文件: .env.local, 填写code码
    config.headers.icode = import.meta.env.VITE_IMOOC_ICODE
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Token::' + token
    }
    return {
      ...config
    }
  },
  error => {
    HideLoading()
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    HideLoading()
    // 这里处理的是正常相应时的逻辑
    const data = response.data
    if (data.code === 50001) {
      localStorage.clear()
      // location.href = '/login'
    } else if (data.code !== 0) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  error => {
    HideLoading()
    // 这里处理的是异常时的逻辑, 像404, 500, 请求超时等等
    message.error(error.message)
    return Promise.reject(error)
  }
)

export default {
  get: <T>(url: string, params: AxiosRequestConfig['params']): Promise<T> => {
    return instance.get(url, { params })
  },
  post: <T>(url: string, data?: object): Promise<T> => {
    return instance.post(url, data)
  }
}
