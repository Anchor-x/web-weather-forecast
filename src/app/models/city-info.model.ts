/**
 * Request
 */
export interface CityInfo {
    /**
     * HTTP状态码
     */
    code: string;
    location: Location[];
    refer: Refer;
    [property: string]: any;
}

export interface Location {
    /**
     * 地区/城市所属一级行政区域
     */
    adm1?: string;
    /**
     * 地区/城市的上级行政区划名称
     */
    adm2?: string;
    /**
     * 地区/城市所属国家名称
     */
    country?: string;
    /**
     * 该地区的天气预报网页链接，便于嵌入你的网站或应用
     */
    fxLink?: string;
    /**
     * 地区/城市ID
     */
    id?: string;
    /**
     * 地区/城市是否当前处于夏令时。1 表示当前处于夏令时，0 表示当前不是夏令时。
     */
    isDst?: string;
    /**
     * 地区/城市纬度
     */
    lat?: string;
    /**
     * 地区/城市经度
     */
    lon?: string;
    /**
     * 地区/城市名称
     */
    name?: string;
    /**
     * 地区评分
     */
    rank?: string;
    /**
     * 地区/城市的属性
     */
    type?: string;
    /**
     * 地区/城市所在时区
     */
    tz?: string;
    /**
     * 地区/城市目前与UTC时间偏移的小时数
     */
    utcOffset?: string;
    [property: string]: any;
}

export interface Refer {
    /**
     * 数据许可或版权声明，可能为空
     */
    license: Array<null | string>;
    /**
     * 原始数据来源，或数据源说明，可能为空
     */
    sources: Array<null | string>;
    [property: string]: any;
}