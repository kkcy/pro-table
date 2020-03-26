import "antd/es/table/style";
import _Table from "antd/es/table";
import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import "antd/es/empty/style";
import _Empty from "antd/es/empty";
import "antd/es/typography/style";
import _Typography from "antd/es/typography";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import './index.less';
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import useMergeValue from 'use-merge-value';
import { stringify } from 'use-json-comparison';
import { ConfigConsumer } from "antd/es/config-provider";
import { IntlProvider, IntlConsumer } from './component/intlContext';
import useFetchData from './useFetchData';
import Container from './container';
import Toolbar from './component/toolBar';
import Alert from './component/alert';
import FormSearch from './Form';
import get, { parsingText, parsingValueEnumToArray, checkUndefinedOrNull, useDeepCompareEffect, genColumnKey } from './component/util';
import defaultRenderText from './defaultRender';

var mergePagination = function mergePagination() {
  var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (pagination === false) {
    return {};
  }

  var defaultPagination = pagination || {};
  var current = action.current,
      pageSize = action.pageSize;

  if (pagination === true) {
    defaultPagination = {};
  }

  return _objectSpread({
    total: action.total
  }, defaultPagination, {
    current: current,
    pageSize: pageSize,
    onChange: function onChange(page, newPageSize) {
      // pageSize 改变之后就没必要切换页码
      if (newPageSize !== pageSize && current !== page) {
        action.setPageInfo({
          pageSize: pageSize,
          page: page
        });
      } else {
        if (newPageSize !== pageSize) {
          action.setPageInfo({
            pageSize: pageSize
          });
        }

        if (current !== page) {
          action.setPageInfo({
            page: page
          });
        }
      }

      var onChange = pagination.onChange;

      if (onChange) {
        onChange(page, newPageSize || 10);
      }
    },
    onShowSizeChange: function onShowSizeChange(page, showPageSize) {
      action.setPageInfo({
        pageSize: showPageSize,
        page: page
      });
      var onShowSizeChange = pagination.onShowSizeChange;

      if (onShowSizeChange) {
        onShowSizeChange(page, showPageSize || 10);
      }
    }
  });
};
/**
 * 生成 Ellipsis 的 tooltip
 * @param dom
 * @param item
 * @param text
 */


var genEllipsis = function genEllipsis(dom, item, text) {
  if (!item.ellipsis) {
    return dom;
  }

  return React.createElement(_Tooltip, {
    title: text
  }, React.createElement("div", null, dom));
};

var genCopyable = function genCopyable(dom, item) {
  if (item.copyable || item.ellipsis) {
    return React.createElement(_Typography.Paragraph, {
      style: {
        width: item.width && item.width - 32,
        margin: 0,
        padding: 0
      },
      copyable: item.copyable,
      ellipsis: item.ellipsis
    }, dom);
  }

  return dom;
};
/**
 * 这个组件负责单元格的具体渲染
 * @param param0
 */


var columRender = function columRender(_ref) {
  var item = _ref.item,
      text = _ref.text,
      row = _ref.row,
      index = _ref.index;
  var counter = Container.useContainer();
  var action = counter.action;
  var _item$renderText = item.renderText,
      renderText = _item$renderText === void 0 ? function (val) {
    return val;
  } : _item$renderText,
      _item$valueEnum = item.valueEnum,
      valueEnum = _item$valueEnum === void 0 ? {} : _item$valueEnum;

  if (!action.current) {
    return null;
  }

  var renderTextStr = renderText(parsingText(text, valueEnum), row, index, action.current);
  var textDom = defaultRenderText(renderTextStr, item.valueType || 'text', index, row);
  var dom = genEllipsis(genCopyable(textDom, item), item, renderText(parsingText(text, valueEnum, true), row, index, action.current));

  if (item.render) {
    var renderDom = item.render(dom, row, index, action.current); // 如果是合并单元格的，直接返回对象

    if (renderDom && _typeof(renderDom) === 'object' && renderDom.props && renderDom.props.colSpan) {
      return renderDom;
    }

    if (renderDom && item.valueType === 'option' && Array.isArray(renderDom)) {
      return React.createElement("div", {
        className: "ant-pro-table-option-cell"
      }, renderDom.map(function (optionDom, domIndex) {
        return (// eslint-disable-next-line react/no-array-index-key
          React.createElement("div", {
            className: "ant-pro-table-option-cell-item",
            key: "".concat(index, "-").concat(domIndex)
          }, optionDom)
        );
      }));
    }

    return renderDom;
  }

  return checkUndefinedOrNull(dom) ? dom : null;
};

var genColumnList = function genColumnList(columns, map) {
  return columns.map(function (item, columnsIndex) {
    var key = item.key,
        dataIndex = item.dataIndex;
    var columnKey = genColumnKey(key, dataIndex);
    var config = columnKey ? map[columnKey] || {
      fixed: item.fixed
    } : {
      fixed: item.fixed
    };

    var tempColumns = _objectSpread({
      onFilter: function onFilter(value, record) {
        var recordElement = get(record, item.dataIndex || '');

        if (typeof recordElement === 'number') {
          recordElement = recordElement.toString();
        }

        var itemValue = String(recordElement || '');
        return String(itemValue) === String(value);
      },
      index: columnsIndex,
      filters: parsingValueEnumToArray(item.valueEnum).filter(function (valueItem) {
        return valueItem && valueItem.value !== 'all';
      })
    }, item, {
      ellipsis: false,
      fixed: config.fixed,
      width: item.width || (item.fixed ? 200 : undefined),
      // @ts-ignore
      children: item.children ? genColumnList(item.children, map) : undefined,
      render: function render(text, row, index) {
        return columRender({
          item: item,
          text: text,
          row: row,
          index: index
        });
      }
    });

    if (!tempColumns.children || !tempColumns.children.length) {
      delete tempColumns.children;
    }

    if (!tempColumns.dataIndex) {
      delete tempColumns.dataIndex;
    }

    if (!tempColumns.filters || !tempColumns.filters.length) {
      delete tempColumns.filters;
    }

    return tempColumns;
  }).filter(function (item) {
    return !item.hideInTable;
  });
};
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */


var ProTable = function ProTable(props) {
  var request = props.request,
      propsClassName = props.className,
      _props$params = props.params,
      params = _props$params === void 0 ? {} : _props$params,
      _props$defaultData = props.defaultData,
      defaultData = _props$defaultData === void 0 ? [] : _props$defaultData,
      headerTitle = props.headerTitle,
      postData = props.postData,
      propsPagination = props.pagination,
      actionRef = props.actionRef,
      _props$columns = props.columns,
      propsColumns = _props$columns === void 0 ? [] : _props$columns,
      _props$toolBarRender = props.toolBarRender,
      toolBarRender = _props$toolBarRender === void 0 ? function () {
    return [];
  } : _props$toolBarRender,
      onLoad = props.onLoad,
      onRequestError = props.onRequestError,
      style = props.style,
      tableStyle = props.tableStyle,
      tableClassName = props.tableClassName,
      columnsStateMap = props.columnsStateMap,
      onColumnsStateChange = props.onColumnsStateChange,
      options = props.options,
      _props$search = props.search,
      search = _props$search === void 0 ? true : _props$search,
      _props$rowSelection = props.rowSelection,
      propsRowSelection = _props$rowSelection === void 0 ? false : _props$rowSelection,
      _props$beforeSearchSu = props.beforeSearchSubmit,
      beforeSearchSubmit = _props$beforeSearchSu === void 0 ? function (searchParams) {
    return searchParams;
  } : _props$beforeSearchSu,
      tableAlertRender = props.tableAlertRender,
      defaultClassName = props.defaultClassName,
      formRef = props.formRef,
      _props$type = props.type,
      type = _props$type === void 0 ? 'table' : _props$type,
      rest = _objectWithoutProperties(props, ["request", "className", "params", "defaultData", "headerTitle", "postData", "pagination", "actionRef", "columns", "toolBarRender", "onLoad", "onRequestError", "style", "tableStyle", "tableClassName", "columnsStateMap", "onColumnsStateChange", "options", "search", "rowSelection", "beforeSearchSubmit", "tableAlertRender", "defaultClassName", "formRef", "type"]);

  var _useMergeValue = useMergeValue([], {
    value: propsRowSelection ? propsRowSelection.selectedRowKeys : undefined
  }),
      _useMergeValue2 = _slicedToArray(_useMergeValue, 2),
      selectedRowKeys = _useMergeValue2[0],
      setSelectedRowKeys = _useMergeValue2[1];

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      formSearch = _useState2[0],
      setFormSearch = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRows = _useState4[0],
      setSelectedRows = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      dataSource = _useState6[0],
      setDataSource = _useState6[1];

  var rootRef = useRef(null);
  var fullScreen = useRef();
  /**
   * 需要初始化 不然默认可能报错
   * 这里取了 defaultCurrent 和 current
   * 为了保证不会重复刷新
   */

  var fetchPagination = _typeof(propsPagination) === 'object' ? propsPagination : {
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSize: 10,
    current: 1
  };
  var action = useFetchData( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
      var pageSize, current, msg;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageSize = _ref2.pageSize, current = _ref2.current;

              if (request) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", {
                data: props.dataSource || [],
                success: true
              });

            case 3:
              _context.next = 5;
              return request(_objectSpread({
                current: current,
                pageSize: pageSize
              }, formSearch, {}, params));

            case 5:
              msg = _context.sent;

              if (!postData) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", _objectSpread({}, msg, {
                data: postData(msg.data)
              }));

            case 8:
              return _context.abrupt("return", msg);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }(), defaultData, {
    defaultCurrent: fetchPagination.current || fetchPagination.defaultCurrent,
    defaultPageSize: fetchPagination.pageSize || fetchPagination.defaultPageSize,
    onLoad: onLoad,
    onRequestError: onRequestError,
    effects: [stringify(params), stringify(formSearch)]
  });
  useEffect(function () {
    fullScreen.current = function () {
      if (!rootRef.current || !document.fullscreenEnabled) {
        return;
      }

      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        rootRef.current.requestFullscreen();
      }
    };
  }, [rootRef.current]);
  action.fullScreen = fullScreen.current;
  var pagination = propsPagination !== false && mergePagination(propsPagination, action);
  var counter = Container.useContainer();

  var onCleanSelected = function onCleanSelected() {
    if (propsRowSelection && propsRowSelection.onChange) {
      propsRowSelection.onChange([], []);
    }

    setSelectedRowKeys([]);
    setSelectedRows([]);
  };

  useEffect(function () {
    // 数据源更新时 取消所有选中项
    onCleanSelected();
    setDataSource(request ? action.dataSource : props.dataSource || []);
  }, [props.dataSource, action.dataSource]);
  /**
   *  保存一下 propsColumns
   *  生成 from 需要用
   */

  useDeepCompareEffect(function () {
    counter.setProColumns(propsColumns);
  }, [propsColumns]);
  counter.setAction(action);
  /**
   * 这里生成action的映射，保证 action 总是使用的最新
   * 只需要渲染一次即可
   */

  useEffect(function () {
    var userAction = {
      reload: function () {
        var _reload = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var current;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  current = counter.action.current;

                  if (current) {
                    _context2.next = 3;
                    break;
                  }

                  return _context2.abrupt("return");

                case 3:
                  // reload 之后大概率会切换数据，清空一下选择。
                  setSelectedRowKeys([]);
                  _context2.next = 6;
                  return current.reload();

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function reload() {
          return _reload.apply(this, arguments);
        }

        return reload;
      }(),
      fetchMore: function () {
        var _fetchMore = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var current;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  current = counter.action.current;

                  if (current) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return");

                case 3:
                  _context3.next = 5;
                  return current.fetchMore();

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        function fetchMore() {
          return _fetchMore.apply(this, arguments);
        }

        return fetchMore;
      }(),
      reset: function reset() {
        var current = counter.action.current;

        if (!current) {
          return;
        }

        current.reset();
      },
      clearSelected: onCleanSelected
    };

    if (actionRef && typeof actionRef === 'function') {
      actionRef(userAction);
    }

    if (actionRef && typeof actionRef !== 'function') {
      actionRef.current = userAction;
    }
  }, []);
  /**
   * Table Column 变化的时候更新一下，这个参数将会用于渲染
   */

  useDeepCompareEffect(function () {
    var tableColumn = genColumnList(propsColumns, counter.columnsMap);

    if (tableColumn && tableColumn.length > 0) {
      counter.setColumns(tableColumn); // 重新生成key的字符串用于排序

      counter.setSortKeyColumns(tableColumn.map(function (item, index) {
        var key = genColumnKey(item.key, item.dataIndex) || "".concat(index);
        return "".concat(key, "_").concat(item.index);
      }));
    }
  }, [propsColumns]);
  /**
   * 这里主要是为了排序，为了保证更新及时，每次都重新计算
   */

  useDeepCompareEffect(function () {
    var keys = counter.sortKeyColumns.join(',');
    var tableColumn = genColumnList(propsColumns, counter.columnsMap);

    if (keys.length > 0) {
      // 用于可视化的排序
      tableColumn = tableColumn.sort(function (a, b) {
        // 如果没有index，在 dataIndex 或者 key 不存在的时候他会报错
        var aKey = "".concat(genColumnKey(a.key, a.dataIndex) || a.index, "_").concat(a.index);
        var bKey = "".concat(genColumnKey(b.key, b.dataIndex) || b.index, "_").concat(b.index);
        return keys.indexOf(aKey) - keys.indexOf(bKey);
      });
    }

    if (tableColumn && tableColumn.length > 0) {
      counter.setColumns(tableColumn);
    }
  }, [counter.columnsMap, counter.sortKeyColumns.join('-')]);
  /**
   * 同步 Pagination，支持受控的 页码 和 pageSize
   */

  useDeepCompareEffect(function () {
    if (propsPagination && propsPagination.current && propsPagination.pageSize) {
      action.setPageInfo({
        pageSize: propsPagination.pageSize,
        page: propsPagination.current
      });
    }
  }, [propsPagination]); // 映射 selectedRowKeys 与 selectedRow

  useEffect(function () {
    if (action.loading !== false || propsRowSelection === false) {
      return;
    }

    var tableKey = rest.rowKey;
    setSelectedRows(dataSource.filter(function (item, index) {
      if (!tableKey) {
        return selectedRowKeys.includes(index);
      }

      if (typeof tableKey === 'function') {
        var key = tableKey(item, index);
        return selectedRowKeys.includes(key);
      }

      return selectedRowKeys.includes(item[tableKey]);
    }));
  }, [selectedRowKeys.join('-'), action.loading, propsRowSelection === false]);

  var rowSelection = _objectSpread({
    selectedRowKeys: selectedRowKeys
  }, propsRowSelection, {
    onChange: function onChange(keys, rows) {
      if (propsRowSelection && propsRowSelection.onChange) {
        propsRowSelection.onChange(keys, rows);
      }

      setSelectedRowKeys(keys);
    }
  });

  useEffect(function () {
    counter.setTableSize(rest.size || 'large');
  }, [rest.size]);

  if (counter.columns.length < 1) {
    return React.createElement(_Empty, null);
  }

  var className = classNames(defaultClassName, propsClassName);
  return React.createElement(_ConfigProvider, {
    getPopupContainer: function getPopupContainer() {
      return rootRef.current || document.body;
    }
  }, React.createElement("div", {
    className: className,
    id: "ant-design-pro-table",
    style: style,
    ref: rootRef
  }, (search || type === 'form') && React.createElement(FormSearch, Object.assign({}, rest, {
    type: props.type,
    formRef: formRef,
    onSubmit: function onSubmit(value) {
      if (type !== 'form') {
        setFormSearch(beforeSearchSubmit(_objectSpread({}, value, {
          _timestamp: Date.now()
        }))); // back first page

        action.resetPageIndex();
      }

      if (props.onSubmit) {
        props.onSubmit(value);
      }
    },
    onReset: function onReset() {
      setFormSearch(beforeSearchSubmit({})); // back first page

      action.resetPageIndex();
    },
    dateFormatter: rest.dateFormatter,
    search: search
  })), type !== 'form' && React.createElement(_Card, {
    bordered: false,
    style: {
      height: '100%'
    },
    bodyStyle: {
      padding: 0
    }
  }, toolBarRender !== false && React.createElement(Toolbar, {
    options: options,
    headerTitle: headerTitle,
    action: action,
    selectedRows: selectedRows,
    selectedRowKeys: selectedRowKeys,
    toolBarRender: toolBarRender
  }), propsRowSelection !== false && React.createElement(Alert, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    onCleanSelected: onCleanSelected,
    alertOptionRender: rest.tableAlertOptionRender,
    alertInfoRender: tableAlertRender
  }), React.createElement(_Table, Object.assign({}, rest, {
    size: counter.tableSize,
    rowSelection: propsRowSelection === false ? undefined : rowSelection,
    className: tableClassName,
    style: tableStyle,
    columns: counter.columns.filter(function (item) {
      // 删掉不应该显示的
      var key = item.key,
          dataIndex = item.dataIndex;
      var columnKey = genColumnKey(key, dataIndex);

      if (!columnKey) {
        return true;
      }

      var config = counter.columnsMap[columnKey];

      if (config && config.show === false) {
        return false;
      }

      return true;
    }),
    loading: action.loading || props.loading,
    dataSource: dataSource,
    pagination: pagination
  })))));
};
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */


var ProviderWarp = function ProviderWarp(props) {
  return React.createElement(Container.Provider, {
    initialState: props
  }, React.createElement(ConfigConsumer, null, function (_ref4) {
    var getPrefixCls = _ref4.getPrefixCls;
    return React.createElement(IntlConsumer, null, function (value) {
      return React.createElement(IntlProvider, {
        value: value
      }, React.createElement(ProTable, Object.assign({
        defaultClassName: getPrefixCls('pro-table')
      }, props)));
    });
  }));
};

export default ProviderWarp;