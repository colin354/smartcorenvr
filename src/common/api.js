import request from '@/plugin/axios'
import { cookieGet } from '@/common/cookie'

/**
 * @description [ sys ] 登陆注销相关
 */
export const sysAccountService = {
  /**
   * 登录
   */
  login (data) {
    return request({
      // url: 'http://localhost:8000/api/user/login',
      url: `${process.env.VUE_APP_API}/api/user/login`,
      method: 'post',
      data
    })
  }
}

/**
 * @description [ sys ] 用户相关
 */
export const sysUserService = {
  /**
   * 获取用户信息
   */
  getInfo () {
    return request({
      // url: 'http://localhost:8000/api/sys/user/info'
      // url: `http://192.17.1.150:8000/api/sys/user/info?token=${cookieGet('token')}`
      url: `${process.env.VUE_APP_API}/api/sys/user/info?token=${cookieGet('token')}`
    })
  },
  updatePassword (data) {
    return request({
      url: '/sys/user/password',
      method: 'put',
      data
    })
  }
}
