import "antd/es/button/style";
import _Button from "antd/es/button";
import React from 'react';

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
    return React.createElement(React.Fragment, null, optionRender(searchConfig, props));
  }

  return React.createElement(React.Fragment, null, React.createElement(_Button, {
    type: "primary",
    htmlType: "submit",
    onClick: function onClick() {
      return submit();
    }
  }, isForm ? submitText : searchText), React.createElement(_Button, {
    style: {
      marginLeft: 8
    },
    onClick: function onClick() {
      form.resetFields();

      if (!isForm) {
        submit();
      }
    }
  }, resetText), !isForm && showCollapseButton && React.createElement("a", {
    style: {
      marginLeft: 8
    },
    onClick: function onClick() {
      setCollapse(!collapse);
    }
  }, collapseRender && collapseRender(collapse)));
};

export default FormOption;