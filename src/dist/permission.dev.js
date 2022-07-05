"use strict";

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 定义一个用户未登录情况下可以访问的白名单
var whiteList = ['/login'];

_router["default"].beforeEach(function _callee(to, from, next) {
  var token, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 获取token
          token = _store["default"].getters.token;
          console.log(!_store["default"].getters.hasUserInfo);

          if (!token) {
            _context.next = 15;
            break;
          }

          if (!(to.path === '/login')) {
            _context.next = 7;
            break;
          }

          next(from.path);
          _context.next = 13;
          break;

        case 7:
          if (_store["default"].getters.hasUserInfo) {
            _context.next = 12;
            break;
          }

          _context.next = 10;
          return regeneratorRuntime.awrap(_store["default"].dispatch('user/getUserInfo'));

        case 10:
          response = _context.sent;

          if (response) {
            //   // 获取用户所拥有的路由权限
            //   const { permission } = response
            //   const filterRoutes = await store.dispatch(
            //     'permission/filterRoutes',
            //     permission.menus
            //   )
            //   // 遍历用户所拥有的私有路由表, 并且将用户所拥有的私有路由表添加到完整的路由中
            //   filterRoutes.forEach((item) => {
            //     router.addRoute(item)
            //   })
            // 指定要进入的路由, 注意: next 里面一定要指定进入的路由, 如果不指定,就会出现白屏问题
            next(to.path);
          } else {
            next('/login');
          }

        case 12:
          next();

        case 13:
          _context.next = 16;
          break;

        case 15:
          if (whiteList.includes(to.path)) {
            next();
          } else {
            next('/login');
          }

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
});