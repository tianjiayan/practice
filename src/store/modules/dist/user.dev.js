"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _storage = require("../../utils/storage");

var _removeRouter = require("../../utils/removeRouter");

var _user = _interopRequireDefault(require("../../api/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  namespaced: true,
  state: function state() {
    return {
      token: (0, _storage.getItem)('token') || '',
      userInfo: {}
    };
  },
  mutations: {
    setToken: function setToken(state, token) {
      state.token = token;
      (0, _storage.setItem)('token', token);
    },
    setUserInfo: function setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    // login({commit} ,paylod){
    //     try{
    //         const response = await user.login(paylod)
    //         commit('setToken',response.token)
    //         return response
    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    getUserInfo: function getUserInfo(_ref) {
      var commit, response;
      return regeneratorRuntime.async(function getUserInfo$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(_user["default"].getUserInfo());

            case 4:
              response = _context.sent;
              commit('setUserInfo', response);
              return _context.abrupt("return", response);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 9]]);
    },
    logout: function logout(_ref2) {
      var commit = _ref2.commit;
      (0, _removeRouter.resetRouter)(), commit('setToken', '');
      commit('setUserInfo', {});
      (0, _storage.removeItem)('token');
      (0, _storage.removeItem)('userInfo');
    }
  }
};
exports["default"] = _default;