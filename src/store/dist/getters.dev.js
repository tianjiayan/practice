"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var getters = {
  token: function token(state) {
    return state.user.token;
  },
  userInfo: function userInfo(state) {
    return state.user.userInfo;
  },
  hasUserInfo: function hasUserInfo(state) {
    return JSON.stringify(state.user.userInfo) !== '{}';
  },
  tagsview: function tagsview(state) {
    return state.tagsview.tagsView;
  }
};
var _default = getters;
exports["default"] = _default;