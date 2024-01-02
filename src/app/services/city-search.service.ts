import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { CityInfo } from "../models/city-info.model";
import { ConfigService } from "./config.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CitySearchService implements OnInit {

    /**
     * 构造函数
     * @param http - HttpClient
     */
    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {

    }

    // API key
    private key: string = ConfigService.key

    // API
    api: string = 'https://geoapi.qweather.com/v2/city/lookup';

    /**
     * 获取城市信息
     * @param {string} city - 城市名称
     * @param {string} adm - 市属于的省级行政区划
     * */
    getCity(city: string | undefined, adm: string | undefined): Observable<CityInfo> {
        // 请求地址
        const url = `${this.api}?number=1&location=${city}&adm=${adm}&key=${this.key}`;
        return this.http.get<CityInfo>(url, {responseType: 'json'})
    }

    /**
     * 处理http请求错误
     * @param error - 错误信息
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
