
/*
 * @Author: 王亮
 * @Date: 2019-01-15 18:34:46
 * @LastEditors: 王亮
 * @LastEditTime: 2019-01-17 16:56:44
 * @Description: axios二次封装
 */

import axios from 'axios'
import config from '../config/api.js'

export function api (options) {
  return new Promise(function (resolve, reject) {
    const instance = axios.create({
      // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
      baseURL: config.axios.baseUrl || '',
      // `headers` 是即将被发送的自定义请求头
      headers: config.axios.headers || { 'Content-Type': 'application/json' },
      // 表示跨域请求时是否需要使用凭证
      withCredentials: config.axios.withCredentials || false,
      // 是创建请求时使用的方法
      method: options.method || 'POST',
      // 允许在向服务器发送前，修改请求数据
      transformResponse: [function (data) {

      }]
    })

    // request 拦截器
    instance.interceptors.request.use(
      config => {
        // Tip: 1
        // 请求开始的时候可以结合 vuex 开启全屏的 loading 动画
        return config
      },
      error => {
        // 请求错误时做些事(接口错误、超时等)
        throw new Error(`请求接口传参错误${error}`)
      }
    )

    // response 拦截器
    instance.interceptors.response.use(
      response => {
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        let jsonText = response.data || response.request.responseText

        let data = JSON.parse(jsonText)
        // 如果状态是1，那么就正常取data里数据
        let dat = null

        switch (parseInt(data.status)) {
          case 1:
            dat = data.data
            break
          case 10014:
            throw new Error(`请求地址:${response.config.url}, 错误(代码:10014,信息:${data.message})`)
        }
        return dat
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break

            case 401:
              err.message = '未授权，请登录'
              break

            case 403:
              err.message = '拒绝访问'
              break

            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break

            case 408:
              err.message = '请求超时'
              break

            case 500:
              err.message = '服务器内部错误'
              break

            case 501:
              err.message = '服务未实现'
              break

            case 502:
              err.message = '网关错误'
              break

            case 503:
              err.message = '服务不可用'
              break

            case 504:
              err.message = '网关超时'
              break

            case 505:
              err.message = 'HTTP版本不受支持'
              break

            default:
          }
        }
        return Promise.reject(err) // 返回接口返回的错误信息
      })

    // 请求处理
    instance(options)
      .then((res) => {
        resolve(res)
        return false
      })
      .catch((error) => {
        reject(error)
      })
  })
}
