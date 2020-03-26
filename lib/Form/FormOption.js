"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FormFooter 的组件，可以自动进行一些配置
 * @param props
 */
var FormOption = function FormOption(props) {
  var searchConfig = props.searchConfig,
      setCollapse = props.setCollapse,
      collapse = props.collapse,
      type = props.type,
      form = props.form,
      submit = props.submit,
      showCollapseButton = props.showCollapseButton;
  var isForm = type === 'form';
  var searchText = searchConfig.searchText,
      submitText = searchConfig.submitText,
      resetText = searchConfig.resetText,
      collapseRender = searchConfig.collapseRender,
      optionRender = searchConfig.optionRender;

  if (optionRender === false) {
    return null;
  }

  if (optionRender) {
    return _react.default.createElement(_react.default.Fragment, null, optionRender(searchConfig, props));
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_button.default, {
    type: "primary",
    htmlType: "submit",
    onClick: function onClick() {
      return submit();
    }
  }, isForm ? submitText : searchText), _react.default.createElement(_button.default, {
    style: {
      marginLeft: 8
    },
    onClick: function onClick() {
      form.resetFields();

      if (!isForm) {
        submit();
      }
    }
  }, resetText), !isForm && showCollapseButton && _react.default.createElement("a", {
    style: {
      marginLeft: 8
    },
    onClick: function onClick() {
      setCollapse(!collapse);
    }
  }, collapseRender && collapseRender(collapse)));
};

var _default = FormOption;
exports.default = _default;