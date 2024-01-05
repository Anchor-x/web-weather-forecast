import { Injectable, OnInit } from '@angular/core';
import { CitySearchService } from "./city-search.service";
import { WeatherSearchService } from "./weather-search.service";
import { CityInfo } from "../models/city-info.model";
import { WeatherInfo } from "../models/weather-info.model";

@Injectable({
    providedIn: 'root'
})
export class HttpService implements OnInit {

    ngOnInit(): void {
    }

    /**
     * 构造函数
     * @param citySearchService - 城市搜索服务
     * @param weatherSearchService - 天气搜索服务
     */
    constructor(private citySearchService: CitySearchService,
                private weatherSearchService: WeatherSearchService) {
    }

    // 城市信息
    cityInfo: CityInfo = {
        code: '',
        location: [{
            id: '',
            name: '',
            adm1: '',
            adm2: '',
            country: '',
            tz: '',
            utcOffset: '',
            isDst: '',
            type: '',
            rank: '',
            fxLink: ''
        }],
        refer: {
            sources: [''],
            license: ['']
        }
    }

    // 天气信息
    weatherInfo: WeatherInfo = {
        code: '',
        updateTime: '',
        fxLink: '',
        now: {
            obsTime: '',
            temp: '',
            feelsLike: '',
            icon: '',
            text: '',
            wind360: '',
            windDir: '',
            windScale: '',
            windSpeed: '',
            humidity: '',
            precip: '',
            pressure: '',
            vis: '',
            cloud: '',
            dew: ''
        },
        refer: {
            sources: [''],
            license: ['']
        }
    }

    /**
     * 查找城市天气
     * @param {string} city - 城市
     * @param {string} adm - 行政区
     * @param {string} date - 日期
     */
    searchWeather(city: string | undefined, adm: string | undefined, date: string | undefined): void {
        this.citySearchService.getCity(city, adm)
            .subscribe(cityInfo => {
                this.cityInfo = cityInfo;
                this.weatherSearchService.getWeather(this.cityInfo.location[0].id, date)
                    .subscribe(weatherInfo => {
                        this.weatherInfo = weatherInfo;
                    })
            })
    }

}
