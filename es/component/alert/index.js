import "antd/es/alert/style";
import _Alert from "antd/es/alert";
import React from 'react';
import { ConfigConsumer } from "antd/es/config-provider/context";
import './index.less';
import { useIntl } from '../intlContext';

var defaultAlertOptionRender = function defaultAlertOptionRender(props) {
  var intl = props.intl,
      onCleanSelected = props.onCleanSelected;
  return [React.createElement("a", {
    onClick: onCleanSelected,
    key: "0"
  }, intl.getMessage('alert.clear', '清空'))];
};

var TableAlert = function TableAlert(_ref) {
  var _ref$selectedRowKeys = _ref.selectedRowKeys,
      selectedRowKeys = _ref$selectedRowKeys === void 0 ? [] : _ref$selectedRowKeys,
      onCleanSelected = _ref.onCleanSelected,
      _ref$selectedRows = _ref.selectedRows,
      selectedRows = _ref$selectedRows === void 0 ? [] : _ref$selectedRows,
      _ref$alertInfoRender = _ref.alertInfoRender,
      alertInfoRender = _ref$alertInfoRender === void 0 ? function () {
    return React.createElement("span", null, "\u5DF2\u9009\u62E9 ", React.createElement("a", {
      style: {
        fontWeight: 600
      }
    }, selectedRowKeys.length), " \u9879\xA0\xA0");
  } : _ref$alertInfoRender,
      _ref$alertOptionRende = _ref.alertOptionRender,
      alertOptionRender = _ref$alertOptionRende === void 0 ? defaultAlertOptionRender : _ref$alertOptionRende;
  var intl = useIntl();
  var option = alertOptionRender && alertOptionRender({
    onCleanSelected: onCleanSelected,
    intl: intl
  });
  return React.createElement(ConfigConsumer, null, function (_ref2) {
    var getPrefixCls = _ref2.getPrefixCls;
    var className = getPrefixCls('pro-table-alert');

    if (alertInfoRender === false) {
      return null;
    }

    var dom = alertInfoRender(selectedRowKeys, selectedRows);

    if (dom === false) {
      return null;
    }

    return React.createElement("div", {
      className: className
    }, React.createElement(_Alert, {
      message: React.createElement("div", {
        className: "".concat(className, "-info")
      }, React.createElement("div", {
        className: "".concat(className, "-info-content")
      }, dom), option && React.createElement("div", {
        className: "".concat(className, "-info-option")
      }, option)),
      type: "info",
      showIcon: true
    }));
  });
};

export default TableAlert;