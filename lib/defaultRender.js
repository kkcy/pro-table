"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/progress/style");

var _progress = _interopRequireDefault(require("antd/lib/progress"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _percent = _interopRequireDefault(require("./component/percent"));

var _indexColumn = _interopRequireDefault(require("./component/indexColumn"));

var _util = require("./component/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var moneyIntl = new Intl.NumberFormat('zh-Hans-CN', {
  currency: 'CNY',
  style: 'currency',
  minimumFractionDigits: 2
});
var enMoneyIntl = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
var ruMoneyIntl = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB'
});
var msMoneyIntl = new Intl.NumberFormat('ms-MY', {
  style: 'currency',
  currency: 'MYR'
});
/**
 * render valueType object
 * @param text string | number
 * @param value ProColumnsValueObjectType
 */

var defaultRenderTextByObject = function defaultRenderTextByObject(text, value) {
  if (value.type === 'progress') {
    return _react.default.createElement(_progress.default, {
      size: "small",
      percent: text,
      status: value.status || (0, _util.getProgressStatus)(text)
    });
  }

  if (value.type === 'money') {
    // english
    if (value.locale === 'en_US') {
      return enMoneyIntl.format(text);
    } // russian


    if (value.locale === 'ru_RU') {
      return ruMoneyIntl.format(text);
    } // malay


    if (value.locale === 'ms_MY') {
      return msMoneyIntl.format(text);
    }

    return moneyIntl.format(text);
  }

  if (value.type === 'percent') {
    return _react.default.createElement(_percent.default, {
      value: text,
      showSymbol: value.showSymbol,
      precision: value.precision
    });
  }

  return text;
};
/**
 * 根据不同的类型来转化数值
 * @param text
 * @param valueType
 */


var defaultRenderText = function defaultRenderText(text, valueType, index, item) {
  // when valueType == function
  // item always not null
  if (typeof valueType === 'function' && item) {
    var value = valueType(item);

    if (typeof value === 'string') {
      return defaultRenderText(text, valueType, index);
    }

    if (_typeof(value) === 'object') {
      return defaultRenderTextByObject(text, value);
    }
  }
  /**
   * 如果是金额的值
   */


  if (valueType === 'money' && (text || text === 0)) {
    /**
     * 这个 api 支持三星和华为的手机
     */
    if (typeof text === 'string') {
      return moneyIntl.format(parseFloat(text));
    }

    return moneyIntl.format(text);
  }
  /**
   *如果是日期的值
   */


  if (valueType === 'date' && text) {
    return (0, _moment.default)(text).format('YYYY-MM-DD');
  }
  /**
   *如果是日期范围的值
   */


  if (valueType === 'dateRange' && text && Array.isArray(text) && text.length === 2) {
    // 值不存在的时候显示 "-"
    return _react.default.createElement("div", null, _react.default.createElement("div", null, text[0] ? (0, _moment.default)(text[0]).format('YYYY-MM-DD') : '-'), _react.default.createElement("div", null, text[1] ? (0, _moment.default)(text[1]).format('YYYY-MM-DD') : '-'));
  }
  /**
   *如果是日期加时间类型的值
   */


  if (valueType === 'dateTime' && text) {
    return (0, _moment.default)(text).format('YYYY-MM-DD HH:mm:ss');
  }
  /**
   *如果是日期加时间类型的值的值
   */


  if (valueType === 'dateTimeRange' && text && Array.isArray(text) && text.length === 2) {
    // 值不存在的时候显示 "-"
    return _react.default.createElement("div", null, _react.default.createElement("div", null, text[0] ? (0, _moment.default)(text[0]).format('YYYY-MM-DD HH:mm:ss') : '-'), _react.default.createElement("div", null, text[1] ? (0, _moment.default)(text[1]).format('YYYY-MM-DD HH:mm:ss') : '-'));
  }
  /**
   *如果是时间类型的值
   */


  if (valueType === 'time' && text) {
    return (0, _moment.default)(text).format('HH:mm:ss');
  }

  if (valueType === 'index') {
    return _react.default.createElement(_indexColumn.default, null, index + 1);
  }

  if (valueType === 'indexBorder') {
    return _react.default.createElement(_indexColumn.default, {
      border: true
    }, index + 1);
  }

  if (valueType === 'progress') {
    return _react.default.createElement(_progress.default, {
      size: "small",
      percent: text,
      status: (0, _util.getProgressStatus)(text)
    });
  }
  /** 百分比, 默认展示符号, 不展示小数位 */


  if (valueType === 'percent') {
    return _react.default.createElement(_percent.default, {
      value: text
    });
  }

  return text;
};

var _default = defaultRenderText;
exports.default = _default;