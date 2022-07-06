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
    setRoutes: function setRoutes(state, newRoutes) {
      state.routes = [].concat(_toConsumableArray(_router.publicRoutes), _toConsumableArray(newRoutes));
    }
  },
  actions: {
    /**
     * 根据权限筛选路由
     */
    filterRoutes: function filterRoutes(_ref, menus) {
      var commit = _ref.commit;
      // 当用户登录之后是加载所有的私有路由表还是加载他所拥有的私有表
      // menus 登录之后后台所返回的用户所有的路由权限数据
      // privateRoutes 自定义的所有私有路由表
      var routes = []; // 过滤出用户所拥有的私有路由表

      menus.forEach(function (name) {
        var data = _router.privateRoutes.filter(function (item) {
          return item.name === name;
        });

        routes.push.apply(routes, _toConsumableArray(data));
      });
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      });
      commit('setRoutes', routes);
      return routes;
    }
  }
};
exports["default"] = _default;