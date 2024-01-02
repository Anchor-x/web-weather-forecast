import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConfigService } from "./config.service";
import { WeatherInfo } from "../models/weather-info.model";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class WeatherSearchService implements OnInit {
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
    api: string = `https://devapi.qweather.com/v7/weather/`;

    /**
     * 获取天气信息
     * @param {string} location - 城市ID
     * @param {string} date - 预报日期
     * */
    getWeather(location: string | undefined, date: string | undefined): Observable<WeatherInfo> {
        // 请求地址
        const url: string = `${this.api}${date}?location=${location}&key=${this.key}`;
        return this.http.get<WeatherInfo>(url, {responseType: 'json'})
    }

}
