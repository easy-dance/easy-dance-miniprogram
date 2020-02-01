import Taro from '@tarojs/taro'
import { HTTP_STATUS } from '../constants/status'
import { baseUrl } from '../config'
import { logError } from '../utils/error'

export default {
  async baseOptions(params, method = 'GET') {
    let { url, data } = params
    let contentType = 'application/json'
    contentType = params.contentType || contentType
    type OptionType = {
      url: string,
      data?: object | string,
      method?: any,
      header: object,
      // mode: string,
      success: any,
      error: any,
      xhrFields: object,
    }
    const setCookie = (res: {
      cookies: Array<{
        name: string,
        value: string,
        expires: string,
        path: string
      }>,
      header: {
        'Set-Cookie': string
      }
    }) => {
      if (res.cookies && res.cookies.length > 0) {
        let cookies = ''
        res.cookies.forEach((cookie, index) => {
          // windows的微信开发者工具返回的是cookie格式是有name和value的,在mac上是只是字符串的
          if (cookie.name && cookie.value) {
            cookies += index === res.cookies.length - 1 ? `${cookie.name}=${cookie.value};expires=${cookie.expires};path=${cookie.path}` : `${cookie.name}=${cookie.value};`
          } else {
            cookies += `${cookie};`
          }
        });
        Taro.setStorageSync('cookies', cookies)
      }
      if (res.header && res.header['Set-Cookie']) {
        Taro.setStorageSync('cookies', res.header['Set-Cookie'])
      }
    }
    const option: OptionType = {
      url: url.indexOf('http') !== -1 ? url : baseUrl + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        cookie: Taro.getStorageSync('cookies')
      },
      // mode: 'cors',
      xhrFields: { withCredentials: true },
      success(res) {
        setCookie(res)
        if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
          return logError('api', '请求资源不存在')
        } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
          return logError('api', '服务端出现了问题')
        } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
          return logError('api', '没有权限访问')
        } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
          Taro.clearStorage()
          Taro.navigateTo({
            url: '/pages/login/index'
          })
          return logError('api', '请先登录')
        } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
          return res.data
        }
      },
      error(e) {
        logError('api', '请求接口出现问题', e)
      }
    }
    const res: any = await Taro.request(option);
    if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
      Taro.atMessage({
        'message': '请求资源不存在',
        'type': 'error',
      })
      return Promise.reject(new Error('请求资源不存在'));      
    } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
      Taro.atMessage({
        'message': '服务器异常',
        'type': 'error',
      })
      return Promise.reject(new Error('服务器异常'));      
    } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
      Taro.atMessage({
        'message': '没有权限访问',
        'type': 'error',
      })
      return Promise.reject(new Error('没有权限访问'));
    } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
      Taro.clearStorage()
      Taro.navigateTo({
        url: '/pages/login/index'
      })
      Taro.atMessage({
        'message': '请先登录',
        'type': 'error',
      })
      return Promise.reject(new Error('请先登录'));
    } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
      return Promise.resolve(res.data);
    }
  },
  get(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option)
  },
  post: function (url, data?: object, contentType?: string) {
    let params = { url, data, contentType }
    return this.baseOptions(params, 'POST')
  },
  put(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'PUT')
  },
  delete(url, data?: object) {
    let option = { url, data }
    return this.baseOptions(option, 'DELETE')
  },
  cloud(name: string, data?: object) {
    // @ts-ignore
    return Taro.cloud.callFunction({
      name,
      data,
    })
  }
}


