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
      userInfo: {},
      nav: ''
    };
  },
  mutations: {
    setToken: function setToken(state, token) {
      state.token = token;
      (0, _storage.setItem)('token', token);
    },
    setUserInfo: function setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    SET_NAV: function SET_NAV(state, nav) {
      state.nav = nav;
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
    // async login({ commit }, payload) {
    //   const response = await user.login(payload)
    //   return response
    // },
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
    getNav: function getNav(_ref2) {
      var commit, response;
      return regeneratorRuntime.async(function getNav$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_user["default"].getNav());

            case 3:
              response = _context2.sent;
              commit('SET_NAV', response);
              console.log('nav', response);
              return _context2.abrupt("return", response);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    logout: function logout(_ref3) {
      var commit, response;
      return regeneratorRuntime.async(function logout$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref3.commit;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_user["default"].logout());

            case 3:
              response = _context3.sent;
              commit('setToken', '');
              commit('setUserInfo', '');
              commit('SET_NAV');
              console.log(response);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }
};
exports["default"] = _default;