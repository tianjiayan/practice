"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMenus = exports.filterRouters = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * 获取所有的非一级路由数据
 * @param {*} routes
 */
var getChildrenRoutes = function getChildrenRoutes(routes) {
  var result = [];
  routes.forEach(function (item) {
    if (item.children && item.children.length > 0) {
      result.push.apply(result, _toConsumableArray(item.children));
    }
  });
  return result;
};
/**
 * 获取所有的一级数据
 */


var filterRouters = function filterRouters(routes) {
  // childrenRoutes 所有的子路由
  var childrenRoutes = getChildrenRoutes(routes); // routes 完整的路由 16 数据

  return routes.filter(function (route) {
    return !childrenRoutes.find(function (childrenRoute) {
      return childrenRoute.path === route.path;
    });
  });
};
/**
 * 检测空对象 以及  检测空数据 如果为空返回true
 * @param {*} data
 * @returns
 */


exports.filterRouters = filterRouters;

var isNull = function isNull(data) {
  if (!data) return true;
  if (JSON.stringify(data) === '{}') return true;
  if (JSON.stringify(data) === '[]') return true;
  return false;
};
/**
 * 将所有的一级路由数据处理成菜单数据
 */


var generateMenus = function generateMenus(routes) {
  var result = [];
  routes.forEach(function (item) {
    if (isNull(item.meta) && isNull(item.children)) return;
    console.log(item);

    if (isNull(item.meta) && !isNull(item.children)) {
      result.push.apply(result, _toConsumableArray(generateMenus(item.children)));
      return;
    }

    var routePath = item.path;
    var route = result.find(function (route) {
      return route.path === routePath;
    });

    if (!route) {
      route = _objectSpread({}, item, {
        path: routePath,
        children: []
      });

      if (item.meta.title && item.meta.icon) {
        result.push(route);
      }
    }

    if (item.children) {
      var _route$children;

      (_route$children = route.children).push.apply(_route$children, _toConsumableArray(generateMenus(item.children)));
    }
  });
  return result;
};

exports.generateMenus = generateMenus;