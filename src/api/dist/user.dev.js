"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = _interopRequireDefault(require("../utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//登录
var login = function login(username, password, code, token) {
  return (0, _request["default"])({
    url: "login?username=".concat(username, "&password=").concat(password, "&code=").concat(code, "&token=").concat(token),
    method: 'POST'
  });
}; //图形验证码


var captcha = function captcha() {
  return (0, _request["default"])({
    url: 'captcha',
    method: 'GET'
  });
}; //退出登录


var logout = function logout() {
  return (0, _request["default"])({
    url: 'logout',
    method: 'POST'
  });
}; //用户信息


var getUserInfo = function getUserInfo() {
  return (0, _request["default"])({
    url: '/sys/userInfo',
    method: 'GET'
  });
};

var _default = {
  login: login,
  captcha: captcha,
  logout: logout,
  getUserInfo: getUserInfo
};
exports["default"] = _default;