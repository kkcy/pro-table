import React from 'react';
import './index.less';
import { IntlType } from '../intlContext';
export interface TableAlertProps<T> {
    selectedRowKeys: (number | string)[];
    selectedRows: T[];
    alertInfoRender?: ((selectedRowKeys: (number | string)[], selectedRows: T[]) => React.ReactNode) | false;
    onCleanSelected: () => void;
    alertOptionRender?: false | ((props: {
        intl: IntlType;
        onCleanSelected: () => void;
    }) => React.ReactNode);
}
declare const TableAlert: <T, U = {}>({ selectedRowKeys, onCleanSelected, selectedRows, alertInfoRender, alertOptionRender, }: TableAlertProps<T>) => JSX.Element;
export default TableAlert;
