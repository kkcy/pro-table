import React from 'react';
/**
 * money 金额
 * option 操作 需要返回一个数组
 * date 日期 YYYY-MM-DD
 * dateRange 日期范围 YYYY-MM-DD[]
 * dateTime 日期和时间 YYYY-MM-DD HH:mm:ss
 * dateTimeRange 范围日期和时间 YYYY-MM-DD HH:mm:ss[]
 * time: 时间 HH:mm:ss
 * index：序列
 * progress: 进度条
 * percent: 百分比
 */
export declare type ProColumnsValueType = 'money' | 'textarea' | 'option' | 'date' | 'dateRange' | 'dateTimeRange' | 'dateTime' | 'time' | 'text' | 'index' | 'indexBorder' | 'progress' | 'percent' | 'digit';
export declare type ProColumnsValueObjectType = {
    type: 'progress' | 'money' | 'percent';
    status?: 'normal' | 'active' | 'success' | 'exception' | undefined;
    locale?: string;
    /** percent */
    showSymbol?: boolean;
    precision?: number;
};
/**
 * value type by function
 */
export declare type ProColumnsValueTypeFunction<T> = (item: T) => ProColumnsValueType | ProColumnsValueObjectType;
/**
 * 根据不同的类型来转化数值
 * @param text
 * @param valueType
 */
declare const defaultRenderText: <T, U>(text: string | number | React.ReactText[], valueType: "option" | "progress" | "textarea" | "time" | "text" | "date" | "money" | "percent" | "dateRange" | "dateTimeRange" | "dateTime" | "index" | "indexBorder" | "digit" | ProColumnsValueTypeFunction<T>, index: number, item?: T | undefined) => React.ReactNode;
export default defaultRenderText;
