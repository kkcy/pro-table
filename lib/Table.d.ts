import './index.less';
import React, { CSSProperties, ReactNode } from 'react';
import { TableProps, ColumnType } from 'antd/es/table';
import { FormItemProps, FormProps } from 'antd/es/form';
import { IntlType } from './component/intlContext';
import { UseFetchDataAction, RequestData } from './useFetchData';
import { OptionConfig, ToolBarProps } from './component/toolBar';
import { SearchConfig, TableFormItem } from './Form';
import { StatusType } from './component/status';
import { ProColumnsValueType, ProColumnsValueTypeFunction } from './defaultRender';
import { DensitySize } from './component/toolBar/DensityIcon';
export interface ActionType {
    reload: () => void;
    fetchMore: () => void;
    reset: () => void;
    clearSelected: () => void;
}
export interface ColumnsState {
    show?: boolean;
    fixed?: 'right' | 'left' | undefined;
}
export interface ProColumnType<T = unknown> extends Omit<ColumnType<T>, 'render' | 'children'>, Partial<Omit<FormItemProps, 'children'>> {
    /**
     * 自定义 render
     */
    render?: (text: React.ReactNode, record: T, index: number, action: UseFetchDataAction<RequestData<T>>) => React.ReactNode | React.ReactNode[];
    /**
     * 自定义 render，但是需要返回 string
     */
    renderText?: (text: any, record: T, index: number, action: UseFetchDataAction<RequestData<T>>) => any;
    /**
     * 自定义搜索 form 的输入
     */
    renderFormItem?: (item: ProColumns<T>, config: {
        value?: any;
        onChange?: (value: any) => void;
    }) => React.ReactNode;
    /**
     * 搜索表单的 props
     */
    formItemProps?: {
        [prop: string]: any;
    };
    /**
     * 搜索表单的默认值
     */
    initialValue?: any;
    /**
     * 是否缩略
     */
    ellipsis?: boolean;
    /**
     * 是否拷贝
     */
    copyable?: boolean;
    /**
     * 值的类型
     */
    valueType?: ProColumnsValueType | ProColumnsValueTypeFunction<T>;
    /**
     * 值的枚举，如果存在枚举，Search 中会生成 select
     */
    valueEnum?: {
        [key: string]: {
            text: ReactNode;
            status: StatusType;
        } | ReactNode;
    };
    /**
     * 在查询表单中隐藏
     */
    hideInSearch?: boolean;
    /**
     * 在 table 中隐藏
     */
    hideInTable?: boolean;
    /**
     * 在新建表单中删除
     */
    hideInForm?: boolean;
    /**
     * form 的排序
     */
    order?: number;
}
export interface ProColumnGroupType<RecordType> extends ProColumnType<RecordType> {
    children: ProColumns<RecordType>;
}
export declare type ProColumns<T> = ProColumnGroupType<T> | ProColumnType<T>;
export interface ProTableProps<T, U extends {
    [key: string]: any;
}> extends Omit<TableProps<T>, 'columns' | 'rowSelection'> {
    columns?: ProColumns<T>[];
    params?: U;
    columnsStateMap?: {
        [key: string]: ColumnsState;
    };
    onColumnsStateChange?: (map: {
        [key: string]: ColumnsState;
    }) => void;
    onSizeChange?: (size: DensitySize) => void;
    /**
     * 一个获得 dataSource 的方法
     */
    request?: (params?: U & {
        pageSize?: number;
        current?: number;
    }) => Promise<RequestData<T>>;
    /**
     * 对数据进行一些处理
     */
    postData?: (data: any[]) => any[];
    /**
     * 默认的数据
     */
    defaultData?: T[];
    /**
     * 初始化的参数，可以操作 table
     */
    actionRef?: React.MutableRefObject<ActionType | undefined> | ((actionRef: ActionType) => void);
    formRef?: TableFormItem<T>['formRef'];
    /**
     * 渲染操作栏
     */
    toolBarRender?: ToolBarProps<T>['toolBarRender'] | false;
    /**
     * 数据加载完成后触发
     */
    onLoad?: (dataSource: T[]) => void;
    /**
     * 数据加载失败时触发
     */
    onRequestError?: (e: Error) => void;
    /**
     * 给封装的 table 的 className
     */
    tableClassName?: string;
    /**
     * 给封装的 table 的 style
     */
    tableStyle?: CSSProperties;
    /**
     * 左上角的 title
     */
    headerTitle?: React.ReactNode;
    /**
     * 默认的操作栏配置
     */
    options?: OptionConfig<T> | false;
    /**
     * 是否显示搜索表单
     */
    search?: boolean | SearchConfig;
    /**
     * type="form" 和 搜索表单 的 Form 配置
     * 基本配置与 antd Form 相同
     *  但是劫持了 form 的配置
     */
    form?: Omit<FormProps, 'form'>;
    /**
     * 如何格式化日期
     * 暂时只支持 moment
     * string 会格式化为 YYYY-DD-MM
     * number 代表时间戳
     */
    dateFormatter?: 'string' | 'number' | false;
    /**
     * 格式化搜索表单提交数据
     */
    beforeSearchSubmit?: (params: Partial<T>) => Partial<T>;
    /**
     * 自定义 table 的 alert
     * 设置或者返回false 即可关闭
     */
    tableAlertRender?: ((keys: (string | number)[], rows: T[]) => React.ReactNode) | false;
    /**
     * 自定义 table 的 alert 的操作
     * 设置或者返回false 即可关闭
     */
    tableAlertOptionRender?: ((props: {
        intl: IntlType;
        onCleanSelected: () => void;
    }) => React.ReactNode) | false;
    rowSelection?: TableProps<T>['rowSelection'] | false;
    style?: React.CSSProperties;
    /**
     * 支持 ProTable 的类型
     */
    type?: 'form' | 'list' | 'table' | 'cardList' | undefined;
    /**
     * 提交表单时触发
     */
    onSubmit?: (params: U) => void;
}
/**
 * 🏆 Use Ant Design Table like a Pro!
 * 更快 更好 更方便
 * @param props
 */
declare const ProviderWarp: <T, U extends {
    [key: string]: any;
} = {}>(props: ProTableProps<T, U>) => JSX.Element;
export default ProviderWarp;
