"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vuex = require("vuex");

var _user = _interopRequireDefault(require("./modules/user"));

var _getters = _interopRequireDefault(require("./getters"));

var _tagsview = _interopRequireDefault(require("./modules/tagsview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import permission from './modules/permission'
var _default = (0, _vuex.createStore)({
  getters: _getters["default"],
  modules: {
    user: _user["default"],
    tagsview: _tagsview["default"] // permission

  }
});

exports["default"] = _default;