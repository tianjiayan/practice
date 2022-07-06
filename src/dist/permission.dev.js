"use strict";

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_router["default"].beforeEach(function _callee(to, from, next) {
  var token, userInfo, navData, response, _ref, authoritys, routes;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          token = _store["default"].getters.token;

          if (!token) {
            _context.next = 31;
            break;
          }

          if (!(to.path === '/login')) {
            _context.next = 6;
            break;
          }

          next(from.path);
          _context.next = 29;
          break;

        case 6:
          userInfo = _store["default"].getters.userInfo;
          navData = _store["default"].getters.nav;

          if (!(userInfo && navData)) {
            _context.next = 12;
            break;
          }

          next();
          _context.next = 29;
          break;

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(_store["default"].dispatch('user/getUserInfo'));

        case 14:
          response = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(_store["default"].dispatch('user/getNav'));

        case 17:
          _ref = _context.sent;
          authoritys = _ref.authoritys;

          if (!(response && authoritys)) {
            _context.next = 28;
            break;
          }

          _context.next = 22;
          return regeneratorRuntime.awrap(_store["default"].dispatch('permission/filterRoutes', authoritys));

        case 22:
          routes = _context.sent;

          if (!routes) {
            _context.next = 26;
            break;
          }

          routes.forEach(function (item) {
            _router["default"].addRoute(item);
          });
          return _context.abrupt("return", next(to.path));

        case 26:
          _context.next = 29;
          break;

        case 28:
          next('/login');

        case 29:
          _context.next = 32;
          break;

        case 31:
          if (to.path === '/login') {
            next();
          } else {
            next('/login');
          }

        case 32:
        case "end":
          return _context.stop();
      }
    }
  });
});