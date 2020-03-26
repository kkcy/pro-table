import "antd/es/divider/style";
import _Divider from "antd/es/divider";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";
import React from 'react';
import { ReloadOutlined, SettingOutlined } from '@ant-design/icons';
import { ConfigConsumer } from "antd/es/config-provider/context";
import ColumnSetting from '../columnSetting';
import { useIntl } from '../intlContext';
import './index.less';
import FullScreenIcon from './FullscreenIcon';
import DensityIcon from './DensityIcon';

var getButtonText = function getButtonText(_ref) {
  var intl = _ref.intl;
  return {
    fullScreen: {
      text: intl.getMessage('tableToolBar.fullScreen', '全屏'),
      icon: React.createElement(FullScreenIcon, null)
    },
    reload: {
      text: intl.getMessage('tableToolBar.reload', '刷新'),
      icon: React.createElement(ReloadOutlined, null)
    },
    setting: {
      text: intl.getMessage('tableToolBar.columnSetting', '列设置'),
      icon: React.createElement(SettingOutlined, null)
    },
    density: {
      text: intl.getMessage('tableToolBar.density', '表格密度'),
      icon: React.createElement(DensityIcon, null)
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
      return React.createElement(ColumnSetting, {
        key: key
      });
    }

    if (key === 'fullScreen') {
      return React.createElement("span", {
        key: key,
        style: {
          marginLeft: index === 0 ? 8 : 16
        },
        className: className,
        onClick: value === true ? defaultOptions[key] : value
      }, React.createElement(FullScreenIcon, null));
    }

    var optionItem = getButtonText(defaultOptions)[key];

    if (optionItem) {
      return React.createElement("span", {
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
      }, React.createElement(_Tooltip, {
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
  var intl = useIntl();
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
  return React.createElement("div", {
    className: className
  }, React.createElement("div", {
    className: "".concat(className, "-title")
  }, headerTitle), React.createElement("div", {
    className: "".concat(className, "-option")
  }, actions.filter(function (item) {
    return item;
  }).map(function (node, index) {
    return React.createElement("div", {
      // eslint-disable-next-line react/no-array-index-key
      key: index,
      className: "".concat(className, "-item")
    }, node);
  }), React.createElement("div", {
    className: "".concat(className, "-default-option")
  }, optionDom.length > 0 && actions.length > 0 && React.createElement(_Divider, {
    type: "vertical"
  }), optionDom)));
};

var WarpToolBar = function WarpToolBar(props) {
  return React.createElement(ConfigConsumer, null, function (_ref3) {
    var getPrefixCls = _ref3.getPrefixCls;
    var className = getPrefixCls('pro-table-toolbar');
    return React.createElement(ToolBar, Object.assign({
      className: className
    }, props));
  });
};

export default WarpToolBar;