"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/divider/style");

var _divider = _interopRequireDefault(require("antd/lib/divider"));

require("antd/lib/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("@ant-design/icons");

var _context = require("antd/lib/config-provider/context");

var _columnSetting = _interopRequireDefault(require("../columnSetting"));

var _intlContext = require("../intlContext");

require("./index.less");

var _FullscreenIcon = _interopRequireDefault(require("./FullscreenIcon"));

var _DensityIcon = _interopRequireDefault(require("./DensityIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getButtonText = function getButtonText(_ref) {
  var intl = _ref.intl;
  return {
    fullScreen: {
      text: intl.getMessage('tableToolBar.fullScreen', '全屏'),
      icon: _react.default.createElement(_FullscreenIcon.default, null)
    },
    reload: {
      text: intl.getMessage('tableToolBar.reload', '刷新'),
      icon: _react.default.createElement(_icons.ReloadOutlined, null)
    },
    setting: {
      text: intl.getMessage('tableToolBar.columnSetting', '列设置'),
      icon: _react.default.createElement(_icons.SettingOutlined, null)
    },
    density: {
      text: intl.getMessage('tableToolBar.density', '表格密度'),
      icon: _react.default.createElement(_DensityIcon.default, null)
    }
  };
};
/**
 * 渲染默认的 工具栏
 * @param options
 * @param className
 */


var renderDefaultOption = function renderDefaultOption(options, className, defaultOptions) {
  return options && Object.keys(options).filter(function (item) {
    return item;
  }).map(function (key, index) {
    var value = options[key];

    if (!value) {
      return null;
    }

    if (key === 'setting') {
      return _react.default.createElement(_columnSetting.default, {
        key: key
      });
    }

    if (key === 'fullScreen') {
      return _react.default.createElement("span", {
        key: key,
        style: {
          marginLeft: index === 0 ? 8 : 16
        },
        className: className,
        onClick: value === true ? defaultOptions[key] : value
      }, _react.default.createElement(_FullscreenIcon.default, null));
    }

    var optionItem = getButtonText(defaultOptions)[key];

    if (optionItem) {
      return _react.default.createElement("span", {
        key: key,
        style: {
          marginLeft: index === 0 ? 8 : 16
        },
        className: className,
        onClick: function onClick() {
          if (value && defaultOptions[key] !== true) {
            if (value !== true) {
              value();
              return;
            }

            defaultOptions[key]();
          }
        }
      }, _react.default.createElement(_tooltip.default, {
        title: optionItem.text
      }, optionItem.icon));
    }

    return null;
  }).filter(function (item) {
    return item;
  });
};

var ToolBar = function ToolBar(_ref2) {
  var headerTitle = _ref2.headerTitle,
      toolBarRender = _ref2.toolBarRender,
      action = _ref2.action,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? {
    density: true,
    fullScreen: function fullScreen() {
      return action.fullScreen && action.fullScreen();
    },
    reload: function reload() {
      return action.reload();
    },
    setting: true
  } : _ref2$options,
      selectedRowKeys = _ref2.selectedRowKeys,
      selectedRows = _ref2.selectedRows,
      className = _ref2.className;
  var intl = (0, _intlContext.useIntl)();
  var optionDom = renderDefaultOption(options, "".concat(className, "-item-icon"), {
    fullScreen: function fullScreen() {
      return action.fullScreen && action.fullScreen();
    },
    reload: function reload() {
      return action.reload();
    },
    density: true,
    setting: true,
    intl: intl
  }) || []; // 操作列表

  var actions = toolBarRender ? toolBarRender(action, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows
  }) : [];
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("div", {
    className: "".concat(className, "-title")
  }, headerTitle), _react.default.createElement("div", {
    className: "".concat(className, "-option")
  }, actions.filter(function (item) {
    return item;
  }).map(function (node, index) {
    return _react.default.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: index,
      className: "".concat(className, "-item")
    }, node);
  }), _react.default.createElement("div", {
    className: "".concat(className, "-default-option")
  }, optionDom.length > 0 && actions.length > 0 && _react.default.createElement(_divider.default, {
    type: "vertical"
  }), optionDom)));
};

var WarpToolBar = function WarpToolBar(props) {
  return _react.default.createElement(_context.ConfigConsumer, null, function (_ref3) {
    var getPrefixCls = _ref3.getPrefixCls;
    var className = getPrefixCls('pro-table-toolbar');
    return _react.default.createElement(ToolBar, Object.assign({
      className: className
    }, props));
  });
};

var _default = WarpToolBar;
exports.default = _default;