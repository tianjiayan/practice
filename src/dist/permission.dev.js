"use strict";

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 定义一个用户未登录情况下可以访问的白名单
var whiteList = ['/login'];

_router["default"].beforeEach(function _callee(to, from, next) {
  var token, response, permission, filterRoutes;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 获取token
          token = _store["default"].getters.token;
          console.log(!_store["default"].getters.hasUserInfo);

          if (!token) {
            _context.next = 24;
            break;
          }

          if (!(to.path === '/login')) {
            _context.next = 7;
            break;
          }

          next(from.path);
          _context.next = 22;
          break;

        case 7:
          if (_store["default"].getters.hasUserInfo) {
            _context.next = 21;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(_store["default"].dispatch('user/getUserInfo'));

        case 10:
          response = _context.sent;

          if (!response) {
            _context.next = 20;
            break;
          }

          // 获取用户所拥有的路由权限
          permission = response.permission; // 调用vuex里面filterRoutes 在这个方法里面过滤出当前用户所拥有的私有路由表数据
          // 获取到当前登录用户所拥有的私有路由表

          _context.next = 15;
          return regeneratorRuntime.awrap(_store["default"].dispatch('permission/filterRoutes', permission.menus));

        case 15:
          filterRoutes = _context.sent;
          // 遍历用户所拥有的私有路由表, 并且将用户所拥有的私有路由表添加到完整的路由中
          filterRoutes.forEach(function (item) {
            _router["default"].addRoute(item);
          }); // 指定要进入的路由, 注意: next 里面一定要指定进入的路由, 如果不指定,就会出现白屏问题

          return _context.abrupt("return", next(to.path));

        case 20:
          next('/login');

        case 21:
          next();

        case 22:
          _context.next = 25;
          break;

        case 24:
          if (whiteList.includes(to.path)) {
            next();
          } else {
            next('/login');
          }

        case 25:
        case "end":
          return _context.stop();
      }
    }
  });
});