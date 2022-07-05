import request from '../utils/request'

const login = (username,password,code,token) => {
  return request({ url: `login?username=${username}&password=${password}&code=${code}&token=${token}`, method: 'POST' })
}
const captcha = () => {
  return request({
    url: 'captcha',
    method: 'GET'
  })
}
const logout = ()=>{
  return request({url:'logout',method:'POST'})
}
export default {
  login,
  captcha,
  logout
}
