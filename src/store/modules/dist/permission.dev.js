"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _router = require("../../router");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = {
  namespaced: true,
  state: {
    routes: _router.publicRoutes
  },
  mutations: {
    SET_ROUTES: function SET_ROUTES(state, routes) {
      state.routes = [].concat(_toConsumableArray(_router.publicRoutes), _toConsumableArray(routes));
    }
  },
  actions: {
    filterRoutes: function filterRoutes(_ref, menus) {
      var commit = _ref.commit;
      // 过滤出用户所有的私有路由表
      var routes = [];
      menus.forEach(function (name) {
        var data = _router.privateRoutes.filter(function (item) {
          return item.name === name;
        });

        routes.push.apply(routes, _toConsumableArray(data));
      }), routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      });
      commit('SET_ROUTES', routes);
      return routes;
    }
  }
};
exports["default"] = _default;