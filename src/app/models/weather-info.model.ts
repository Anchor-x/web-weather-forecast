/**
 * Request
 */
export interface WeatherInfo {
    /**
     * HTTP状态码
     */
    code: string;
    /**
     * 当前数据的响应式页面，便于嵌入网站或应用
     */
    fxLink: string;
    now: Now;
    refer: Refer;
    /**
     * 当前API的最近更新时间
     */
    updateTime: string;

    [property: string]: any;
}

export interface Now {
    /**
     * 云量，百分比数值。可能为空
     */
    cloud?: string;
    /**
     * 露点温度。可能为空
     */
    dew?: string;
    /**
     * 体感温度，默认单位：摄氏度
     */
    feelsLike: string;
    /**
     * 相对湿度，百分比数值
     */
    humidity: string;
    /**
     * 天气状况的图标代码，另请参考天气图标项目
     */
    icon: string;
    /**
     * 数据观测时间
     */
    obsTime: string;
    /**
     * 当前小时累计降水量，默认单位：毫米
     */
    precip: string;
    /**
     * 大气压强，默认单位：百帕
     */
    pressure: string;
    /**
     * 温度，默认单位：摄氏度
     */
    temp: string;
    /**
     * 天气状况的文字描述，包括阴晴雨雪等天气状态的描述
     */
    text: string;
    /**
     * 能见度，默认单位：公里
     */
    vis: string;
    /**
     * 风向360角度
     */
    wind360: string;
    /**
     * 风向
     */
    windDir: string;
    /**
     * 风力等级
     */
    windScale: string;
    /**
     * 风速，公里/小时
     */
    windSpeed: string;

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