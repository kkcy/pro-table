import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
import "antd/es/time-picker/style";
import _TimePicker from "antd/es/time-picker";
import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/select/style";
import _Select from "antd/es/select";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import RcResizeObserver from 'rc-resize-observer';
import useMediaQuery from 'use-media-antd-query';
import useMergeValue from 'use-merge-value';
import { ConfigConsumer } from "antd/es/config-provider";
import { DownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { parsingValueEnumToArray, useDeepCompareEffect, genColumnKey } from '../component/util';
import { useIntl } from '../component/intlContext';
import Container from '../container';
import './index.less';
import FormOption from './FormOption';
/**
 * 默认的查询表单配置
 */

var defaultColConfig = {
  lg: 8,
  md: 12,
  xxl: 6,
  xl: 8,
  sm: 12,
  xs: 24
};
/**
 * 默认的新建表单配置
 */

var defaultFromColConfig = {
  lg: 24,
  md: 24,
  xxl: 24,
  xl: 24,
  sm: 24,
  xs: 24
};
/**
 * 获取最后一行的 offset，保证在最后一列
 * @param length
 * @param span
 */

var getOffset = function getOffset(length) {
  var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  var cols = 24 / span;
  return (cols - 1 - length % cols) * span;
};
/**
 * 默认的设置
 */


var defaultSearch = {
  searchText: '查询',
  resetText: '重置',
  span: defaultColConfig,
  collapseRender: function collapseRender(collapsed) {
    return collapsed ? '展开' : '收起';
  }
};
export var FromInputRender = React.forwardRef(function (_ref, ref) {
  var item = _ref.item,
      rest = _objectWithoutProperties(_ref, ["item"]);

  var valueType = item.valueType;
  var intl = useIntl();
  /**
   * 自定义 render
   */

  if (item.renderFormItem) {
    return item.renderFormItem(item, rest);
  }

  if (!valueType || valueType === 'text') {
    var valueEnum = item.valueEnum;

    if (valueEnum) {
      return React.createElement(_Select, Object.assign({
        placeholder: intl.getMessage('tableFrom.selectPlaceholder', '请选择'),
        ref: ref
      }, rest, item.formItemProps), parsingValueEnumToArray(valueEnum).map(function (_ref2) {
        var value = _ref2.value,
            text = _ref2.text;
        return React.createElement(_Select.Option, {
          key: value,
          value: value
        }, text);
      }));
    }

    return React.createElement(_Input, Object.assign({
      placeholder: intl.getMessage('tableFrom.inputPlaceholder', '请输入')
    }, rest, item.formItemProps));
  }

  if (valueType === 'date') {
    return React.createElement(_DatePicker, Object.assign({
      ref: ref,
      placeholder: intl.getMessage('tableFrom.selectPlaceholder', '请选择'),
      style: {
        width: '100%'
      }
    }, rest, item.formItemProps));
  }

  if (valueType === 'dateTime') {
    return React.createElement(_DatePicker, Object.assign({
      showTime: true,
      ref: ref,
      placeholder: intl.getMessage('tableFrom.selectPlaceholder', '请选择'),
      style: {
        width: '100%'
      }
    }, rest, item.formItemProps));
  }

  if (valueType === 'dateRange') {
    return React.createElement(_DatePicker.RangePicker, Object.assign({
      ref: ref,
      placeholder: [intl.getMessage('tableFrom.selectPlaceholder', '请选择'), intl.getMessage('tableFrom.selectPlaceholder', '请选择')],
      style: {
        width: '100%'
      }
    }, rest, item.formItemProps));
  }

  if (valueType === 'dateTimeRange') {
    return React.createElement(_DatePicker.RangePicker, Object.assign({
      ref: ref,
      showTime: true,
      placeholder: [intl.getMessage('tableFrom.selectPlaceholder', '请选择'), intl.getMessage('tableFrom.selectPlaceholder', '请选择')],
      style: {
        width: '100%'
      }
    }, rest, item.formItemProps));
  }

  if (valueType === 'time') {
    return React.createElement(_TimePicker, Object.assign({
      ref: ref,
      placeholder: intl.getMessage('tableFrom.selectPlaceholder', '请选择'),
      style: {
        width: '100%'
      }
    }, rest, item.formItemProps));
  }

  if (valueType === 'digit') {
    return React.createElement(_InputNumber, Object.assign({
      ref: ref,
      placeholder: intl.getMessage('tableFrom.inputPlaceholder', '请输入'),
      style: {
        width: '100%'
      }
    }, rest, item.formItemProps));
  }

  if (valueType === 'money') {
    return React.createElement(_InputNumber, Object.assign({
      ref: ref,
      min: 0,
      precision: 2,
      formatter: function formatter(value) {
        if (value) {
          return "$ ".concat(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        return '';
      },
      parser: function parser(value) {
        return value ? value.replace(/\$\s?|(,*)/g, '') : '';
      },
      placeholder: intl.getMessage('tableFrom.inputPlaceholder', '请输入'),
      style: {
        width: '100%'
      }
    }, rest, item.formItemProps));
  }

  if (valueType === 'textarea' && rest.type === 'form') {
    return React.createElement(_Input.TextArea, Object.assign({
      placeholder: intl.getMessage('tableFrom.inputPlaceholder', '请输入'),
      ref: ref
    }, rest, item.formItemProps));
  }

  return React.createElement(_Input, Object.assign({
    placeholder: intl.getMessage('tableFrom.inputPlaceholder', '请输入'),
    ref: ref
  }, rest, item.formItemProps));
});
var dateFormatterMap = {
  time: 'HH:mm:ss',
  date: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss'
};
/**
 * 判断 DataType 是不是日期类型
 * @param type
 */

var isDateValueType = function isDateValueType(type) {
  var valueType = type;

  if (typeof type === 'function') {
    // 如果是 object 说明是进度条，直接返回 false
    if (_typeof(type({})) === 'object') {
      return false;
    }

    valueType = type({});
  }

  var dateTypes = ['date', 'dateRange', 'dateTimeRange', 'dateTime', 'time'];
  return dateTypes.includes(valueType);
};
/**
 * 这里主要是来转化一下数据
 * 将 moment 转化为 string
 * 将 all 默认删除
 * @param value
 * @param dateFormatter
 * @param proColumnsMap
 */


var conversionValue = function conversionValue(value, dateFormatter, proColumnsMap) {
  var tmpValue = {};
  Object.keys(value).forEach(function (key) {
    var column = proColumnsMap[key || 'null'] || {};
    var valueType = column.valueType || 'text';
    var itemValue = value[key]; // 如果值是 "all"，或者不存在直接删除
    // 下拉框里选 all，会删除

    if (!itemValue || itemValue === 'all' && column.valueEnum) {
      return;
    } // 如果是日期，再处理这些


    if (!isDateValueType(valueType)) {
      tmpValue[key] = itemValue;
      return;
    } // 如果是 moment 的对象的处理方式
    // 如果执行到这里，肯定是 ['date', 'dateRange', 'dateTimeRange', 'dateTime', 'time'] 之一


    if (moment.isMoment(itemValue) && dateFormatter) {
      if (dateFormatter === 'string') {
        var formatString = dateFormatterMap[valueType];
        tmpValue[key] = itemValue.format(formatString || 'YYYY-MM-DD HH:mm:ss');
        return;
      }

      if (dateFormatter === 'number') {
        tmpValue[key] = itemValue.valueOf();
        return;
      }
    } // 这里是日期数组


    if (Array.isArray(itemValue) && itemValue.length === 2 && dateFormatter) {
      if (dateFormatter === 'string') {
        var _formatString = dateFormatterMap[valueType];
        tmpValue[key] = [moment(itemValue[0]).format(_formatString || 'YYYY-MM-DD HH:mm:ss'), moment(itemValue[1]).format(_formatString || 'YYYY-MM-DD HH:mm:ss')];
        return;
      }

      if (dateFormatter === 'number') {
        tmpValue[key] = [moment(itemValue[0]).valueOf(), moment(itemValue[1]).valueOf()];
      }
    }
  });
  return tmpValue;
};

var getDefaultSearch = function getDefaultSearch(search, intl, isFrom) {
  var config = {
    collapseRender: function collapseRender(collapsed) {
      if (collapsed) {
        return React.createElement(React.Fragment, null, intl.getMessage('tableFrom.collapsed', '展开'), React.createElement(DownOutlined, {
          style: {
            marginLeft: '0.5em',
            transition: '0.3s all',
            transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
          }
        }));
      }

      return React.createElement(React.Fragment, null, intl.getMessage('tableFrom.expand', '收起'), React.createElement(DownOutlined, {
        style: {
          marginLeft: '0.5em',
          transition: '0.3s all',
          transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
        }
      }));
    },
    searchText: intl.getMessage('tableFrom.search', defaultSearch.searchText || '查询'),
    resetText: intl.getMessage('tableFrom.reset', defaultSearch.resetText || '重置'),
    submitText: intl.getMessage('tableFrom.submit', defaultSearch.submitText || '提交'),
    span: isFrom ? defaultFromColConfig : defaultColConfig
  };

  if (search === undefined || search === true) {
    return config;
  }

  return _objectSpread({}, config, {}, search);
};
/**
 * 合并用户和默认的配置
 * @param span
 * @param size
 */


var getSpanConfig = function getSpanConfig(span, size) {
  if (typeof span === 'number') {
    return span;
  }

  var config = _objectSpread({}, defaultColConfig, {}, span);

  return config[size];
};

var FormSearch = function FormSearch(_ref3) {
  var onSubmit = _ref3.onSubmit,
      formRef = _ref3.formRef,
      _ref3$dateFormatter = _ref3.dateFormatter,
      dateFormatter = _ref3$dateFormatter === void 0 ? 'string' : _ref3$dateFormatter,
      propsSearch = _ref3.search,
      type = _ref3.type,
      _ref3$form = _ref3.form,
      formConfig = _ref3$form === void 0 ? {} : _ref3$form;

  var _Form$useForm = _Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var intl = useIntl();
  var searchConfig = getDefaultSearch(propsSearch, intl, type === 'form');
  var span = searchConfig.span;
  var counter = Container.useContainer();

  var _useMergeValue = useMergeValue(true, {
    value: searchConfig.collapsed,
    onChange: searchConfig.onCollapse
  }),
      _useMergeValue2 = _slicedToArray(_useMergeValue, 2),
      collapse = _useMergeValue2[0],
      setCollapse = _useMergeValue2[1];

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      proColumnsMap = _useState2[0],
      setProColumnsMap = _useState2[1];

  var windowSize = useMediaQuery();

  var _useState3 = useState(getSpanConfig(span || 8, windowSize)),
      _useState4 = _slicedToArray(_useState3, 2),
      colSize = _useState4[0],
      setColSize = _useState4[1];

  var _useState5 = useState(88),
      _useState6 = _slicedToArray(_useState5, 2),
      formHeight = _useState6[0],
      setFormHeight = _useState6[1];

  var rowNumber = 24 / colSize || 3;
  var isForm = type === 'form';
  /**
   *提交表单，根据两种模式不同，方法不相同
   */

  var _submit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var value, _value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (isForm) {
                _context.next = 4;
                break;
              }

              value = form.getFieldsValue();

              if (onSubmit) {
                onSubmit(conversionValue(value, dateFormatter, proColumnsMap));
              }

              return _context.abrupt("return");

            case 4:
              _context.prev = 4;
              _context.next = 7;
              return form.validateFields();

            case 7:
              _value = _context.sent;

              if (onSubmit) {
                onSubmit(conversionValue(_value, dateFormatter, proColumnsMap));
              }

              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](4);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 11]]);
    }));

    return function submit() {
      return _ref4.apply(this, arguments);
    };
  }();

  useEffect(function () {
    if (!formRef) {
      return;
    }

    if (typeof formRef === 'function') {
      formRef(form);
    }

    if (formRef && typeof formRef !== 'function') {
      // eslint-disable-next-line no-param-reassign
      formRef.current = _objectSpread({}, form, {
        submit: function submit() {
          _submit();

          form.submit();
        }
      });
    }
  }, []);
  useEffect(function () {
    setColSize(getSpanConfig(span || 8, windowSize));
  }, [windowSize]);
  useDeepCompareEffect(function () {
    var tempMap = {};
    counter.proColumns.forEach(function (item) {
      tempMap[genColumnKey(item.key, item.dataIndex) || 'null'] = item;
    });
    setProColumnsMap(tempMap);
  }, [counter.proColumns]);
  var columnsList = counter.proColumns.filter(function (item) {
    var valueType = item.valueType;

    if (item.hideInSearch && type !== 'form') {
      return false;
    }

    if (type === 'form' && item.hideInForm) {
      return false;
    }

    if (valueType !== 'index' && valueType !== 'indexBorder' && valueType !== 'option' && (item.key || item.dataIndex)) {
      return true;
    }

    return false;
  }).sort(function (a, b) {
    if (a && b) {
      return (b.order || 0) - (a.order || 0);
    }

    if (a && a.order) {
      return -1;
    }

    if (b && b.order) {
      return 1;
    }

    return 0;
  });
  var colConfig = typeof span === 'number' ? {
    span: span
  } : span;
  var domList = columnsList.filter(function (_, index) {
    return collapse && type !== 'form' ? index < (rowNumber - 1 || 1) : true;
  }).map(function (item) {
    var valueType = item.valueType,
        dataIndex = item.dataIndex,
        valueEnum = item.valueEnum,
        renderFormItem = item.renderFormItem,
        render = item.render,
        hideInForm = item.hideInForm,
        hideInSearch = item.hideInSearch,
        hideInTable = item.hideInTable,
        renderText = item.renderText,
        order = item.order,
        initialValue = item.initialValue,
        ellipsis = item.ellipsis,
        rest = _objectWithoutProperties(item, ["valueType", "dataIndex", "valueEnum", "renderFormItem", "render", "hideInForm", "hideInSearch", "hideInTable", "renderText", "order", "initialValue", "ellipsis"]);

    var key = genColumnKey(rest.key, dataIndex);
    return React.createElement(_Col, Object.assign({}, colConfig, {
      key: key
    }), React.createElement(_Form.Item, Object.assign({
      labelAlign: "right",
      label: rest.title,
      name: key
    }, isForm && rest), React.createElement(FromInputRender, {
      item: item,
      type: type
    })));
  });
  return React.createElement(ConfigConsumer, null, function (_ref5) {
    var getPrefixCls = _ref5.getPrefixCls;
    var className = getPrefixCls('pro-table-search');
    var formClassName = getPrefixCls('pro-table-form');
    return React.createElement("div", {
      className: classNames(className, _defineProperty({}, formClassName, isForm)),
      style: isForm ? undefined : {
        height: formHeight
      }
    }, React.createElement(RcResizeObserver, {
      onResize: function onResize(_ref6) {
        var height = _ref6.height;

        if (type === 'form') {
          return;
        }

        setFormHeight(height + 24);
      }
    }, React.createElement("div", null, React.createElement(_Form, Object.assign({}, formConfig, {
      form: form,
      initialValues: columnsList.reduce(function (pre, item) {
        var key = genColumnKey(item.key, item.dataIndex) || '';

        if (item.initialValue) {
          return _objectSpread({}, pre, _defineProperty({}, key, item.initialValue));
        }

        return pre;
      }, _objectSpread({}, formConfig.initialValues))
    }), React.createElement(_Row, {
      gutter: 16,
      justify: "end"
    }, domList, React.createElement(_Col, Object.assign({}, colConfig, {
      offset: getOffset(domList.length, colSize),
      key: "option",
      className: classNames("".concat(className, "-option"), _defineProperty({}, "".concat(className, "-form-option"), isForm))
    }), React.createElement(_Form.Item, {
      label: isForm && ' '
    }, React.createElement(FormOption, {
      showCollapseButton: columnsList.length > rowNumber - 1 && !isForm,
      searchConfig: searchConfig,
      submit: _submit,
      form: _objectSpread({}, form, {
        submit: function submit() {
          _submit();

          form.submit();
        }
      }),
      type: type,
      collapse: collapse,
      setCollapse: setCollapse
    }))))))));
  });
};

export default FormSearch;