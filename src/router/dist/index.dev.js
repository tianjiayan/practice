"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.publicRoutes = void 0;

var _vueRouter = require("vue-router");

var _layout = _interopRequireDefault(require("../views/layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//公有路由表
var publicRoutes = [{
  path: '/',
  name: 'home',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/layout'));
    });
  },
  redirect: '/index',
  children: [{
    path: '/index',
    name: 'index',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/index/index.vue'));
      });
    },
    meta: {
      title: '首页'
    }
  }, {
    path: '/users',
    // name:'users',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/users'));
      });
    },
    meta: {
      title: '用户管理',
      icon: 'el-icon-s-custom'
    }
  }, {
    path: '/roles',
    // name:'users',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/roles'));
      });
    },
    meta: {
      title: '角色管理',
      icon: 'el-icon-rank'
    }
  }, {
    path: '/menus',
    // name:'users',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/menus'));
      });
    },
    meta: {
      title: '菜单管理',
      icon: 'el-icon-menu'
    }
  }, {
    path: '/dicts',
    name: 'sys:dict:list',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/dicts'));
      });
    },
    meta: {
      title: '数字字典'
    }
  } // {
  //   path: '',
  //   meta: { title: '系统工具', icon: 'el-icon-s-tools' },
  //   name: 'sys:tools',
  //   component: null,
  //   children: [
  //     {
  //       path: '/dicts',
  //       name: 'sys:dict:list',
  //       component: () => import('../views/dicts'),
  //       meta: { title: '数字字典' }
  //     }
  //   ]
  // }
  ]
}, {
  path: '/login',
  name: 'login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/login'));
    });
  }
}]; //私有路由表
// export const privateRoutes = [
// {
//   path: '',
//   component: layout,
//   meta: { title: '系统管理', icon: 'el-icon-s-operation' },
//   children: [
//     {
//       path: 'sys/users',
//       // name:'users',
//       component: () => import('../views/users'),
//       meta: { title: '用户管理', icon: 'el-icon-s-custom' }
//     },
//     {
//       path: 'sys/roles',
//       // name:'users',
//       component: () => import('../views/roles'),
//       meta: { title: '角色管理', icon: 'el-icon-rank' }
//     },
//     {
//       path: 'sys/menus',
//       // name:'users',
//       component: () => import('../views/menus'),
//       meta: { title: '菜单管理', icon: 'el-icon-menu' }
//     }
//   ]
// },
// {
//   path: '',
//   meta: { title: '系统工具', icon: 'el-icon-s-tools' },
//   name: 'sys:tools',
//   component: null,
//   children: [
//     {
//       path: 'sys/dicts',
//       name: 'sys:dict:list',
//       component: () => import('../views/dicts'),
//       meta: { title: '数字字典' }
//     }
//   ]
// }
// ]

exports.publicRoutes = publicRoutes;
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHashHistory)(),
  routes: publicRoutes
});
var _default = router;
exports["default"] = _default;