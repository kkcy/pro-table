import React from 'react';
import { FormInstance, FormItemProps, FormProps } from 'antd/es/form';
import { ProColumns } from '../index';
import './index.less';
import { FormOptionProps } from './FormOption';
/**
 * 默认的查询表单配置
 */
declare const defaultColConfig: {
    lg: number;
    md: number;
    xxl: number;
    xl: number;
    sm: number;
    xs: number;
};
/**
 * 用于配置操作栏
 */
export interface SearchConfig {
    /**
     * 查询按钮的文本
     */
    searchText?: string;
    /**
     * 重置按钮的文本
     */
    resetText?: string;
    span?: number | typeof defaultColConfig;
    /**
     * 收起按钮的 render
     */
    collapseRender?: (collapsed: boolean, 
    /**
     * 是否应该展示，有两种情况
     * 列只有三列，不需要收起
     * form 模式 不需要收起
     */
    showCollapseButton?: boolean) => React.ReactNode;
    /**
     * 底部操作栏的 render
     * searchConfig 基础的配置
     * props 更加详细的配置
     * {
        type?: 'form' | 'list' | 'table' | 'cardList' | undefined;
        form: FormInstance;
        submit: () => void;
        collapse: boolean;
        setCollapse: (collapse: boolean) => void;
        showCollapseButton: boolean;
     * }
     */
    optionRender?: ((searchConfig: Omit<SearchConfig, 'optionRender'>, props: Omit<FormOptionProps, 'searchConfig'>) => React.ReactNode) | false;
    /**
     * 是否收起
     */
    collapsed?: boolean;
    /**
     * 收起按钮的事件
     */
    onCollapse?: (collapsed: boolean) => void;
    /**
     * 提交按钮的文本
     */
    submitText?: string;
}
export interface TableFormItem<T> extends Omit<FormItemProps, 'children'> {
    onSubmit?: (value: T) => void;
    onReset?: () => void;
    form?: Omit<FormProps, 'form'>;
    type?: 'form' | 'list' | 'table' | 'cardList' | undefined;
    dateFormatter?: 'string' | 'number' | false;
    search?: boolean | SearchConfig;
    formRef?: React.MutableRefObject<FormInstance | undefined> | ((actionRef: FormInstance) => void);
}
export declare const FromInputRender: React.FC<{
    item: ProColumns<any>;
    value?: any;
    type: 'form' | 'list' | 'table' | 'cardList' | undefined;
    onChange?: (value: any) => void;
}>;
declare const FormSearch: <T, U = {}>({ onSubmit, formRef, dateFormatter, search: propsSearch, type, form: formConfig, }: TableFormItem<T>) => JSX.Element;
export default FormSearch;
