"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAllItem = exports.removeItem = exports.getItem = exports.setItem = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
  本地存储数据
 */
var setItem = function setItem(key, value) {
  if (_typeof(value) === 'object') {
    value = JSON.stringify(value);
  }

  localStorage.setItem(key, value);
};
/*
  获取本地存储数据
 */


exports.setItem = setItem;

var getItem = function getItem(key) {
  var data = localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};
/*
 删除
 */


exports.getItem = getItem;

var removeItem = function removeItem(key) {
  localStorage.removeItem(key);
};

exports.removeItem = removeItem;

var removeAllItem = function removeAllItem() {
  localStorage.clear();
};

exports.removeAllItem = removeAllItem;