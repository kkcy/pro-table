export interface RequestData<T> {
    data: T[];
    success?: boolean;
    total?: number;
}
export interface UseFetchDataAction<T extends RequestData<any>> {
    dataSource: T['data'] | T;
    loading: boolean | undefined;
    hasMore: boolean;
    current: number;
    pageSize: number;
    total: number;
    reload: () => Promise<void>;
    fetchMore: () => void;
    fullScreen?: () => void;
    resetPageIndex: () => void;
    reset: () => void;
    setPageInfo: (pageInfo: Partial<PageInfo>) => void;
}
interface PageInfo {
    hasMore: boolean;
    page: number;
    pageSize: number;
    total: number;
}
declare const useFetchData: <T extends RequestData<any>, U = {}>(getData: (params: {
    pageSize: number;
    current: number;
}) => Promise<T>, defaultData?: Partial<T["data"]> | undefined, options?: {
    defaultCurrent?: number | undefined;
    defaultPageSize?: number | undefined;
    effects?: any[] | undefined;
    onLoad?: ((dataSource: T["data"]) => void) | undefined;
    onRequestError?: ((e: Error) => void) | undefined;
} | undefined) => UseFetchDataAction<T>;
export default useFetchData;
