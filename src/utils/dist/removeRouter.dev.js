"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetRouter = resetRouter;

var _store = _interopRequireDefault(require("../store"));

var _router = _interopRequireDefault(require("../router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function resetRouter() {
  if (_store["default"].getters.userInfo && _store["default"].getters.userInfo.permission && _store["default"].getters.userInfo.permission.menus) {
    var menus = _store["default"].getters.userInfo.permission.menus;
    menus.forEach(function (menu) {
      _router["default"].removeRoute(menu);
    });
  }
}