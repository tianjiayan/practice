"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.privateRoutes = exports.publicRoutes = void 0;

var _vueRouter = require("vue-router");

var _Users = _interopRequireDefault(require("./modules/Users"));

var _Roles = _interopRequireDefault(require("./modules/Roles"));

var _Menus = _interopRequireDefault(require("./modules/Menus"));

var _Dicts = _interopRequireDefault(require("./modules/Dicts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var publicRoutes = [{
  path: '/login',
  name: 'login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/login'));
    });
  }
}, {
  path: '/',
  name: 'layout',
  redirect: '/index',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/layout'));
    });
  },
  children: [{
    path: '/index',
    name: 'index',
    meta: {
      title: '??????',
      icon: 'el-icon-s-home'
    },
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/index'));
      });
    }
  }]
}, {
  path: '/404',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/404'));
    });
  }
}];
exports.publicRoutes = publicRoutes;
var privateRoutes = [_Users["default"], _Roles["default"], _Menus["default"], _Dicts["default"]];
exports.privateRoutes = privateRoutes;
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHashHistory)(),
  routes: [].concat(publicRoutes, privateRoutes)
});
console.log(router.getRoutes());
var _default = router; // import { createRouter, createWebHashHistory } from 'vue-router'
// import layout from '../views/layout'
// //???????????????
// export const publicRoutes = [
//   {
//     path: '/',
//     name: 'home',
//     component: () => import('../views/layout'),
//     redirect: '/index',
//     children: [
//       {
//         path: '/index',
//         name: 'index',
//         component: () => import('../views/index/index.vue'),
//         meta: { title: '??????' }
//       },
//       {
//         path: '/users',
//         // name:'users',
//         component: () => import('../views/users'),
//         meta: { title: '????????????', icon: 'el-icon-s-custom' }
//       },
//       {
//         path: '/roles',
//         // name:'users',
//         component: () => import('../views/roles'),
//         meta: { title: '????????????', icon: 'el-icon-rank' }
//       },
//       {
//         path: '/menus',
//         // name:'users',
//         component: () => import('../views/menus'),
//         meta: { title: '????????????', icon: 'el-icon-menu' }
//       },
//       {
//         path: '/dicts',
//         name: 'sys:dict:list',
//         component: () => import('../views/dicts'),
//         meta: { title: '????????????' }
//       }
// {
//   path: '',
//   meta: { title: '????????????', icon: 'el-icon-s-tools' },
//   name: 'sys:tools',
//   component: null,
//   children: [
//     {
//       path: '/dicts',
//       name: 'sys:dict:list',
//       component: () => import('../views/dicts'),
//       meta: { title: '????????????' }
//     }
//   ]
//       // }
//     ]
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('../views/login')
//   }
// ]
//???????????????
// export const privateRoutes = [
// {
//   path: '',
//   component: layout,
//   meta: { title: '????????????', icon: 'el-icon-s-operation' },
//   children: [
//     {
//       path: 'sys/users',
//       // name:'users',
//       component: () => import('../views/users'),
//       meta: { title: '????????????', icon: 'el-icon-s-custom' }
//     },
//     {
//       path: 'sys/roles',
//       // name:'users',
//       component: () => import('../views/roles'),
//       meta: { title: '????????????', icon: 'el-icon-rank' }
//     },
//     {
//       path: 'sys/menus',
//       // name:'users',
//       component: () => import('../views/menus'),
//       meta: { title: '????????????', icon: 'el-icon-menu' }
//     }
//   ]
// },
// {
//   path: '',
//   meta: { title: '????????????', icon: 'el-icon-s-tools' },
//   name: 'sys:tools',
//   component: null,
//   children: [
//     {
//       path: 'sys/dicts',
//       name: 'sys:dict:list',
//       component: () => import('../views/dicts'),
//       meta: { title: '????????????' }
//     }
//   ]
// }
// ]
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: publicRoutes
// })
// export default router

exports["default"] = _default;