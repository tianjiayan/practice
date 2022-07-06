import request from '../utils/request'

//登录
const login = (username, password, code, token) => {
  return request({
    url: `login?username=${username}&password=${password}&code=${code}&token=${token}`,
    method: 'POST'
  })
}
//图形验证码
const captcha = () => {
  return request({
    url: 'captcha',
    method: 'GET'
  })
}
//退出登录
const logout = () => {
  return request({ url: 'logout', method: 'POST' })
}
//用户信息
const getUserInfo = () => {
  return request({ url: '/sys/userInfo', method: 'GET' })
}

//获取权限数据
const getNav = () => {
  return request({ url: '/sys/menu/nav', method: 'GET' })
}
export default {
  login,
  captcha,
  logout,
  getUserInfo,
  getNav
}
